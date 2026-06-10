'use client';

import { useState, useRef } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);

  const getMenuTop = () => {
    if (headerRef.current) {
      return headerRef.current.getBoundingClientRect().bottom + 'px';
    }
    return '70px';
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="header-content">
          <a href="/" className="logo">
            <img src="/assets/images/logo.webp" alt="GRUZPROM" />
          </a>
          <nav className="nav" id="nav-menu">
            <ul className="nav-list">
              <li><a href="/" className="nav-link"><span className="nav-icon">🏠</span> Главная</a></li>
              <li><a href="/o-proekte" className="nav-link"><span className="nav-icon">ℹ️</span> О проекте</a></li>
              <li><a href="/uslugi" className="nav-link"><span className="nav-icon">💼</span> Услуги/Цены</a></li>
              <li><a href="/reviews" className="nav-link"><span className="nav-icon">⭐</span> Отзывы</a></li>
              <li><a href="/contacts" className="nav-link"><span className="nav-icon">📞</span> Контакты</a></li>
            </ul>
          </nav>
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="mobile-nav" style={{ top: getMenuTop() }}>
          <ul className="mobile-nav-list">
            <li style={{ animationDelay: '0s' }}><a href="/" className="nav-link" onClick={() => setIsOpen(false)}><span className="nav-icon">🏠</span> Главная</a></li>
            <li style={{ animationDelay: '0.15s' }}><a href="/o-proekte" className="nav-link" onClick={() => setIsOpen(false)}><span className="nav-icon">ℹ️</span> О проекте</a></li>
            <li style={{ animationDelay: '0.3s' }}><a href="/uslugi" className="nav-link" onClick={() => setIsOpen(false)}><span className="nav-icon">💼</span> Услуги/Цены</a></li>
            <li style={{ animationDelay: '0.45s' }}><a href="/reviews" className="nav-link" onClick={() => setIsOpen(false)}><span className="nav-icon">⭐</span> Отзывы</a></li>
            <li style={{ animationDelay: '0.6s' }}><a href="/contacts" className="nav-link" onClick={() => setIsOpen(false)}><span className="nav-icon">📞</span> Контакты</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
