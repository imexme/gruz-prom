import './styles.css';
import Navbar from './components/Navbar';
import ScrollAnimations from './components/ScrollAnimations';

export const metadata = {
  title: 'GRUZPROM - Услуги грузчиков в Санкт-Петербурге',
  description: 'Профессиональные услуги грузчиков, разнорабочих и мастеров в Санкт-Петербурге',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Navbar />

        {children}

        <footer className="footer">
          <div className="container">
            <div className="footer-content">

              <div className="footer-section">
                <h3>СТРАНИЦЫ</h3>
                <ul>
                  <li><a href="/">Главная</a></li>
                  <li><a href="/o-proekte">О проекте</a></li>
                  <li><a href="/uslugi">Услуги/Цены</a></li>
                  <li><a href="/reviews">Отзывы</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>КОНТАКТЫ</h3>
                <div className="footer-contact">
                  <div className="footer-contact-item">
                    <span>📍</span>
                    <span>Санкт-Петербург</span>
                  </div>
                  <div className="footer-contact-item">
                    <span>📞</span>
                    <a href="tel:+79944382223"><strong>+7 (994) 438-22-23</strong></a>
                  </div>
                  <div className="footer-contact-item">
                    <span>⏰</span>
                    <span>Ежедневно 8:00–22:00</span>
                  </div>
                  <div className="footer-contact-item">
                    <span>👥</span>
                    <a href="https://vk.com/gruzprom" target="_blank" rel="noopener noreferrer">ВКонтакте: vk.com/gruzprom</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
                            <a href="/" className="footer-logo">
                <img src="/assets/images/logo.webp" alt="GRUZPROM" />
              </a>
              <p>© 2026 GRUZPROM — Все права защищены. Санкт-Петербург.</p>
            </div>
          </div>
        </footer>

        <ScrollAnimations />
      </body>
    </html>
  );
}
