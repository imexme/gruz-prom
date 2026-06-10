import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const hostname = '127.0.0.1';
const port = parseInt(process.env.PORT || '3000', 10);

// Next.js app
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

let server;

// Initialize the server
const initServer = async () => {
  if (!server) {
    await app.prepare();
    server = createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    });
  }
  return server;
};

// Yandex Cloud Functions handler
export const handler = async (event, context) => {
  const srv = await initServer();

  return new Promise((resolve, reject) => {
    const { httpMethod = 'GET', path: requestPath = '/', body, headers = {} } = event;

    // Create a fake request
    const req = new IncomingMessage();
    req.method = httpMethod;
    req.url = requestPath;
    req.headers = headers;
    if (body) {
      req.body = Buffer.isBuffer(body) ? body : Buffer.from(body, 'base64');
    }

    // Create a fake response
    const res = new ServerResponse(req);
    const chunks = [];

    const originalWrite = res.write;
    const originalEnd = res.end;

    res.write = function(chunk) {
      chunks.push(chunk);
      return this;
    };

    res.end = function(chunk) {
      if (chunk) chunks.push(chunk);
      const body = Buffer.concat(chunks).toString('utf-8');

      resolve({
        statusCode: res.statusCode,
        headers: res.getHeaders(),
        body: body,
      });
      return this;
    };

    handle(req, res, parse(requestPath, true));
  });
};

// Minimal IncomingMessage implementation
class IncomingMessage {
  constructor() {
    this.headers = {};
    this.method = 'GET';
    this.url = '/';
  }
}

// Minimal ServerResponse implementation
class ServerResponse {
  constructor(req) {
    this.req = req;
    this.statusCode = 200;
    this.headers = {};
  }

  setHeader(key, value) {
    this.headers[key] = value;
  }

  getHeader(key) {
    return this.headers[key];
  }

  getHeaders() {
    return this.headers;
  }

  removeHeader(key) {
    delete this.headers[key];
  }

  writeHead(statusCode, headers = {}) {
    this.statusCode = statusCode;
    Object.assign(this.headers, headers);
  }

  write(chunk) {
    return true;
  }

  end(chunk) {
    return this;
  }
}
