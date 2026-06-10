export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION - BACKGROUND IMAGE ONLY */}
      <section className="hero">
      </section>

      {/* SECTION 0 - HERO TEXT */}
      <section className="hero-text-section">
        <div className="hero-text-content">
          <h1 className="animate-on-scroll">УСЛУГИ ГРУЗЧИКОВ, РАЗНОРАБОЧИХ И МАСТЕРОВ В САНКТ-ПЕТЕРБУРГЕ.</h1>
          <p className="animate-on-scroll">Работаем по договору — платите за результат.</p>
        </div>
      </section>

      {/* SECTION 1 - NAVIGATION CARDS */}
      <section className="section-nav ">
        <div className="container">
          <div className="nav-cards">
            <a href="/o-proekte" className="nav-card animate-on-scroll">
              <div className="nav-card-icon">
                <img src="/assets/images/about.webp" alt="О проекте" />
              </div>
            </a>
            <a href="/uslugi" className="nav-card animate-on-scroll">
              <div className="nav-card-icon">
                <img src="/assets/images/services.webp" alt="Услуги/Цены" />
              </div>
            </a>
            <a href="/contacts" className="nav-card animate-on-scroll">
              <div className="nav-card-icon">
                <img src="/assets/images/contacts.webp" alt="Контакты" />
              </div>
            </a>
            <a href="/reviews" className="nav-card animate-on-scroll">
              <div className="nav-card-icon">
                <img src="/assets/images/reviews.webp" alt="Отзывы" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2 - WHY CHOOSE US */}
      <section className="why-us-section ">
        <div className="container">
          <h2 className="animate-on-scroll">ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
          <div className="features">
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#90EE90" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="feature-title">АБСОЛЮТНАЯ ТРЕЗВОСТЬ</h3>
              <p className="feature-text">Алкоголь запрещён. Нарушители — сразу.</p>
            </div>
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#90EE90" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="feature-title">ОПЛАТА ПО ФАКТУ</h3>
              <p className="feature-text">Никаких предоплат. Акт подписываем вместе.</p>
            </div>
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#90EE90" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="feature-title">СВОИ ИНСТРУМЕНТЫ</h3>
              <p className="feature-text">Приезжаем со всем нужным.</p>
            </div>
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#90EE90" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="feature-title">ПРИЕЗЖАЕМ ВОВРЕМЯ</h3>
              <p className="feature-text">Дисциплина — жёсткая.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta py-2xl">
        <div className="container2">
          <h2 className="animate-on-scroll">НАПИШИТЕ НАМ — ОТВЕТИМ ЗА 10 МИНУТ</h2>
          <p className="cta-subtitle animate-on-scroll">Расчитаем стоимость, назначим бригаду, приедем вовремя.</p>
          <a href="/contacts" className="btn-primary animate-on-scroll">Связаться с нами</a>
        </div>
      </section>
    </main>
  );
}
