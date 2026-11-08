import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from "../images/Logo.svg";
import content from "../data/websiteContent.json";
import "./SiteNavigation.css";

const LanguageSwitch = ({ language, onChange }) => (
  <div className="language-switch" role="group" aria-label="Language">
    {["nl", "en"].map((option) => (
      <button
        key={option}
        type="button"
        className={language === option ? "is-selected" : ""}
        aria-pressed={language === option}
        onClick={() => onChange(option)}
      >
        <span>{option.toUpperCase()}</span>
      </button>
    ))}
  </div>
);

const Icon = ({ name, active = false }) => {
  const sharedProps = {
    "aria-hidden": true,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (name === "home") {
    return (
      <svg {...sharedProps}>
        <path
          d="m3.5 10 8.5-7 8.5 7v9.25a1.25 1.25 0 0 1-1.25 1.25H4.75a1.25 1.25 0 0 1-1.25-1.25V10Z"
          fill={active ? "currentColor" : "none"}
        />
        <path d="M9 20.5v-6h6v6" />
      </svg>
    );
  }
  if (name === "services") {
    return (
      <svg {...sharedProps}>
        <path d="m12 2.75 8 4.5v9.5l-8 4.5-8-4.5v-9.5l8-4.5Z" />
        <path d="m4.5 7.5 7.5 4.25 7.5-4.25M12 12v9" />
        <path d="m8 5 8 4.5" />
      </svg>
    );
  }
  if (name === "work") {
    return (
      <svg {...sharedProps}>
        <rect x="3" y="7" width="18" height="13" rx="1.5" />
        <path d="M8 7V4.5A1.5 1.5 0 0 1 9.5 3h5A1.5 1.5 0 0 1 16 4.5V7M3 12h18" />
      </svg>
    );
  }
  if (name === "about") {
    return (
      <svg {...sharedProps}>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20a8 8 0 0 1 16 0" />
      </svg>
    );
  }
  if (name === "contact") {
    return (
      <svg {...sharedProps}>
        <rect x="3" y="5" width="18" height="14" rx="1.5" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }
  if (name === "info") {
    return (
      <svg {...sharedProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5M12 8h.01" />
      </svg>
    );
  }
  return null;
};

const routes = [
  { key: "home", to: "/", icon: "home", end: true },
  { key: "services", to: "/services", icon: "services" },
  { key: "work", to: "/work", icon: "work" },
  { key: "about", to: "/about", icon: "about" },
];

const NavigationLink = ({ item, language, mobile = false }) => {
  const location = useLocation();
  const isWorkRoute =
    item.key === "work" &&
    ["/work", "/cases", "/heartbeat", "/taxapp", "/designsystem"].includes(
      location.pathname
    );
  const isActive = item.key === "home" ? location.pathname === "/" : isWorkRoute;
  const label = content.navigation[item.key][language];
  return (
    <NavLink
      to={item.to}
      end={item.end}
      aria-label={mobile ? label : undefined}
      title={mobile ? label : undefined}
      className={({ isActive: routeIsActive }) =>
        `site-nav-link ${mobile ? "site-nav-link-mobile" : ""} ${
          isActive || routeIsActive ? "is-active" : ""
        }`
      }
    >
      <Icon name={item.icon} active={isActive} />
      {!mobile && <span>{label}</span>}
    </NavLink>
  );
};

const SiteNavigation = ({
  language,
  onLanguageChange,
  collapsed,
  onMenuToggle,
}) => {
  const [infoOpen, setInfoOpen] = useState(false);
  const brand = content.branding;
  const menuClass = collapsed ? "is-collapsed" : "is-expanded";

  return (
    <>
      <aside
        className={`site-navigation ${menuClass}`}
        aria-label="Main navigation"
        onClick={(event) => {
          if (!window.matchMedia("(min-width: 901px)").matches) return;
          if (
            event.target.closest(
              ".site-brand, .site-nav-link, a, button"
            )
          ) {
            return;
          }
          onMenuToggle();
        }}
      >
        <Link className="site-brand" to="/" aria-label={brand.name}>
          <span className="site-brand-mark">
            <img src={Logo} alt="" />
          </span>
          <span className="site-brand-copy">
            <strong>{brand.name}</strong>
            <small>{brand.role[language]}</small>
          </span>
        </Link>

        <nav className="site-nav-list">
          {routes.map((item) => (
            <NavigationLink
              key={item.key}
              item={item}
              language={language}
            />
          ))}
        </nav>

        <div className="site-navigation-footer">
          {!collapsed && (
            <Link to="/contact" className="conversation-link">
              <span>{content.navigation.startConversation[language]}</span>
              <span className="conversation-icon">
                <Icon name="contact" />
              </span>
            </Link>
          )}
          {collapsed && (
            <>
              <Link
                to="/contact"
                className="collapsed-contact"
                aria-label={content.navigation.contact[language]}
                title={content.navigation.contact[language]}
              >
                <Icon name="contact" />
              </Link>
              <div className="info-control">
                <button
                  type="button"
                  className="info-button"
                  aria-label={`${brand.company}, ${brand.registration}`}
                  aria-expanded={infoOpen}
                  aria-describedby={infoOpen ? "site-info-tooltip" : undefined}
                  onClick={() => setInfoOpen((open) => !open)}
                  onBlur={() => setInfoOpen(false)}
                >
                  <Icon name="info" />
                </button>
                <span
                  id="site-info-tooltip"
                  role="tooltip"
                  className={`info-tooltip ${infoOpen ? "is-open" : ""}`}
                >
                  <strong>{brand.company}</strong>
                  <span>{brand.registration}</span>
                </span>
              </div>
            </>
          )}
          {!collapsed && (
            <div className="site-legal">
              <span>
                <strong>{brand.company}</strong>
                <small>{brand.registration}</small>
              </span>
              <span>© {new Date().getFullYear()}</span>
            </div>
          )}
        </div>
      </aside>

      <div className="mobile-header">
        <Link className="mobile-brand-mark" to="/" aria-label={brand.name}>
          <img src={Logo} alt="" />
        </Link>
        <div className="mobile-header-controls">
          <WeatherMini language={language} />
          <LanguageSwitch language={language} onChange={onLanguageChange} />
        </div>
      </div>

      <div className="desktop-language-switch">
        <LanguageSwitch language={language} onChange={onLanguageChange} />
      </div>

      <nav className="mobile-navigation" aria-label="Main navigation">
        {routes.map((item) => (
          <NavigationLink
            key={item.key}
            item={item}
            language={language}
            mobile
          />
        ))}
        <NavigationLink
          item={{ key: "contact", to: "/contact", icon: "contact" }}
          language={language}
          mobile
        />
      </nav>
    </>
  );
};

const WeatherIcon = styled.svg`
  display: block;
  width: 20px;
  height: 20px;
  color: #ffe52d;
`;

const WeatherMini = ({ language }) => {
  const [now, setNow] = useState(() => new Date());
  const locale = language === "nl" ? "nl-NL" : "en-GB";
  const time = now.toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const date = now.toLocaleDateString(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  const sunny = content.home.sunny[language];

  React.useEffect(() => {
    const timerId = window.setInterval(() => setNow(new Date()), 30000);
    return () => window.clearInterval(timerId);
  }, []);

  return (
    <div
      className="weather-mini"
      aria-label={`${date}, ${time}, ${sunny}`}
      title={`${date}, ${time}, ${sunny}`}
    >
      <span>{time}</span>
      <WeatherIcon
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
      </WeatherIcon>
    </div>
  );
};

export default SiteNavigation;
