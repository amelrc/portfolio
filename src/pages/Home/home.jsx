import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import content from "../../data/websiteContent.json";
import { getSiteImage } from "../../utils/siteAssets";
import "./home.css";

const SunIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 12h15m-6-6 6 6-6 6" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M16 3v4M8 3v4M3 10h18m-9 3v5m-2.5-2.5h5" />
  </svg>
);

const getOrdinal = (day) => {
  const lastTwoDigits = day % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) return `${day}th`;
  switch (day % 10) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
};

const formatDate = (date, language) => {
  const locale = language === "nl" ? "nl-NL" : "en-GB";
  const weekday = new Intl.DateTimeFormat(locale, { weekday: "long" }).format(
    date
  );
  const month = new Intl.DateTimeFormat(locale, { month: "long" }).format(date);
  const day = date.getDate();
  return {
    weekday,
    date:
      language === "nl"
        ? `${day} ${month}`
        : `${month} ${getOrdinal(day)}`,
  };
};

const Home = ({ language, menuCollapsed }) => {
  const [now, setNow] = useState(() => new Date());
  const [activeBackground, setActiveBackground] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const [isMobile, setIsMobile] = useState(() =>
    window.matchMedia("(max-width: 900px)").matches
  );
  const [modalOpen, setModalOpen] = useState(false);
  const touchStartY = useRef(null);
  const navigate = useNavigate();
  const home = content.home;
  const carouselImages = home.backgroundImages
    .slice(0, 3)
    .map((filename) => ({ filename, src: getSiteImage(filename) }))
    .filter((image) => image.src);
  const cards = home.cards.slice(0, 3);
  const date = formatDate(now, language);
  const time = now.toLocaleTimeString(language === "nl" ? "nl-NL" : "en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const portrait = getSiteImage(content.branding.portraitImage);

  useEffect(() => {
    const timerId = window.setInterval(() => setNow(new Date()), 30000);
    return () => window.clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (carouselImages.length < 2) return undefined;
    const timerId = window.setTimeout(() => {
      setActiveBackground((index) => (index + 1) % carouselImages.length);
    }, home.carouselIntervalMs);
    return () => window.clearTimeout(timerId);
  }, [activeBackground, carouselImages.length, home.carouselIntervalMs]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");
    const handleMediaChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  useEffect(() => {
    if (!isMobile || cards.length < 2) return undefined;
    const timerId = window.setTimeout(() => {
      setActiveCard((index) => (index + 1) % cards.length);
    }, home.cardCarouselIntervalMs);
    return () => window.clearTimeout(timerId);
  }, [activeCard, cards.length, home.cardCarouselIntervalMs, isMobile]);

  useEffect(() => {
    if (!modalOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setModalOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  const handleTouchStart = (event) => {
    touchStartY.current = event.changedTouches[0].clientY;
  };

  const handleTouchEnd = (event) => {
    if (touchStartY.current === null) return;
    const delta = event.changedTouches[0].clientY - touchStartY.current;
    touchStartY.current = null;
    if (Math.abs(delta) < 40) return;
    setActiveCard((index) =>
      delta < 0
        ? (index + 1) % cards.length
        : (index - 1 + cards.length) % cards.length
    );
  };

  const handleCardAction = (card) => {
    if (card.id === "assessment") {
      setModalOpen(true);
      return;
    }
    navigate(card.href);
  };

  const headline = content.home.headline[language];

  return (
    <main
      className={`home-page ${menuCollapsed ? "menu-collapsed" : ""}`}
      aria-label="Home"
    >
      <div className="home-background" aria-hidden="true">
        {carouselImages.map(({ filename, src }, index) => (
          <div
            key={filename}
            className={`home-background-slide ${
              index === activeBackground ? "is-active" : ""
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(55, 87, 47, 0.48), rgba(55, 87, 47, 0.48)), url("${src}")`,
            }}
          />
        ))}
      </div>
      <section className="home-workspace">
        <div className="home-content">
          <div className="hero-row">
            <article className="hero-panel">
              <div className="hero-intro">
                <div className="consultant-pill">
                  <span className="consultant-image">
                    {portrait ? (
                      <img src={portrait} alt="" />
                    ) : (
                      <span aria-hidden="true" />
                    )}
                  </span>
                  <span>{content.branding.role[language]}</span>
                </div>
                <h1>
                  <span className="headline-gradient">{headline.first}</span>
                  <span className="headline-highlight">{headline.highlight}</span>
                  <span className="headline-gradient">{headline.end}</span>
                </h1>
              </div>
              <p className="hero-description">
                {content.home.description[language]}
              </p>
            </article>

            <div className="weather-widget weather-widget-desktop">
              <div className="weather-date">
                <span>{date.weekday}</span>
                <strong>{date.date}</strong>
              </div>
              <div className="weather-time">
                <span>{time}</span>
                <SunIcon />
              </div>
            </div>
          </div>

          <div className="mobile-card-row">
            <div
              className="cards-viewport"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="cards-track"
                style={{ "--card-offset": `${activeCard * -128}px` }}
              >
                {cards.map((card) => {
                  const className = `action-card action-card-${card.type}`;
                  return (
                    <button
                      key={card.id}
                      type="button"
                      className={className}
                      aria-label={card.title[language]}
                      onClick={() => handleCardAction(card)}
                    >
                      <span className="action-card-copy">
                        <strong>{card.title[language]}</strong>
                        <span>{card.description[language]}</span>
                      </span>
                      <span className="action-card-footer">
                        <span className="action-card-icon">
                          {card.id === "contact" ? (
                            <CalendarIcon />
                          ) : (
                            <ArrowIcon />
                          )}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div
              className="card-indicators"
              role="group"
              aria-label={language === "nl" ? "Kaarten" : "Cards"}
            >
              {cards.map((card, index) => (
                <button
                  key={card.id}
                  type="button"
                  className={index === activeCard ? "is-active" : ""}
                  style={{
                    "--indicator-duration": `${home.cardCarouselIntervalMs}ms`,
                  }}
                  aria-label={`${index + 1} / ${cards.length}: ${
                    card.title[language]
                  }`}
                  aria-pressed={index === activeCard}
                  onClick={() => setActiveCard(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="carousel-indicators" role="group" aria-label="Background">
        {carouselImages.map(({ filename }, index) => (
          <button
            key={filename}
            type="button"
            className={index === activeBackground ? "is-active" : ""}
            style={{
              "--indicator-duration": `${home.carouselIntervalMs}ms`,
            }}
            aria-label={`Background ${index + 1}`}
            aria-pressed={index === activeBackground}
            onClick={() => setActiveBackground(index)}
          />
        ))}
      </div>

      {modalOpen && (
        <div
          className="assessment-modal-backdrop"
          onClick={() => setModalOpen(false)}
        >
          <section
            className="assessment-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="assessment-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="assessment-modal-close"
              type="button"
              aria-label={home.assessmentModal.close[language]}
              onClick={() => setModalOpen(false)}
            >
              ×
            </button>
            <h2 id="assessment-modal-title">
              {home.assessmentModal.title[language]}
            </h2>
            <p>{home.assessmentModal.description[language]}</p>
            <Link
              to="/contact"
              className="assessment-modal-action"
              onClick={() => setModalOpen(false)}
            >
              {home.assessmentModal.action[language]}
              <ArrowIcon />
            </Link>
          </section>
        </div>
      )}
    </main>
  );
};

export default Home;
