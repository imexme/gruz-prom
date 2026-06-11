FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000

# Start Next.js with explicit host binding
CMD ["node_modules/.bin/next", "start", "-H", "0.0.0.0", "-p", "3000"]
