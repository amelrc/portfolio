import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import content from "../../data/websiteContent.json";
import "./services.css";

const localized = (value, language) => value[language] || value.en;

const Chevron = ({ direction = "down" }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      d={
        direction === "left"
          ? "m15 18-6-6 6-6"
          : direction === "right"
            ? "m9 18 6-6-6-6"
            : direction === "up"
              ? "m6 15 6-6 6 6"
              : "m6 9 6 6 6-6"
      }
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
  >
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

const ServiceGroups = ({
  groups,
  language,
  openGroups,
  onToggleGroup,
  onSelectService,
  mobile = false,
}) => (
  <div className={`service-groups ${mobile ? "is-mobile-list" : ""}`}>
    {groups.map((group) => {
      const isOpen = openGroups.includes(group.id);
      const headingId = `service-group-${mobile ? "mobile-" : ""}${group.id}`;
      const contentId = `${headingId}-content`;

      return (
        <section
          key={group.id}
          className={`service-group ${isOpen ? "is-open" : ""}`}
        >
          <h2 className="service-group-heading">
            <button
              id={headingId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => onToggleGroup(group.id)}
            >
              <span>{localized(group.title, language)}</span>
              <span className="service-group-chevron">
                <Chevron direction={isOpen ? "up" : "down"} />
              </span>
            </button>
          </h2>
          <div
            id={contentId}
            className="service-group-content"
            role="region"
            aria-labelledby={headingId}
            hidden={!isOpen}
          >
            <div className="service-group-intro">
              <strong>{localized(group.introTitle, language)}</strong>
              <p>{localized(group.description, language)}</p>
            </div>
            <div className="service-cards">
              {group.services.map((service) => (
                <button
                  type="button"
                  className="service-card"
                  key={service.id}
                  onClick={() => onSelectService(service)}
                >
                  <span className="service-card-title">
                    {localized(service.title, language)}
                  </span>
                  <span className="service-card-description">
                    {localized(service.summary, language)}
                  </span>
                  <span className="service-card-action">
                    {localized(content.servicesPage.readMore, language)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>
      );
    })}
  </div>
);

const InsightCard = ({ insight, index, language, onChange }) => {
  const slides = insight.slides;
  const currentIndex = index % slides.length;

  return (
    <article className="service-insight-card">
      <h3>{localized(insight.title, language)}</h3>
      <span className="service-insight-divider" />
      <div className="service-insight-copy">
        <span className="service-insight-index">{currentIndex + 1}</span>
        <p>{localized(slides[currentIndex], language)}</p>
      </div>
      <div className="service-insight-controls">
        <button
          type="button"
          aria-label={localized(content.servicesPage.previous, language)}
          onClick={() => onChange((currentIndex - 1 + slides.length) % slides.length)}
        >
          <Chevron direction="left" />
        </button>
        <span>
          {currentIndex + 1} {localized(content.servicesPage.paginationOf, language)}{" "}
          {slides.length}
        </span>
        <button
          type="button"
          aria-label={localized(content.servicesPage.next, language)}
          onClick={() => onChange((currentIndex + 1) % slides.length)}
        >
          <Chevron direction="right" />
        </button>
      </div>
    </article>
  );
};

const ServiceTabContent = ({
  detail,
  activeTab,
  language,
  insightIndexes,
  onInsightChange,
  selectedSignals,
  onToggleSignal,
}) => {
  if (activeTab === "what") {
    return (
      <div className="service-detail-content service-what-content">
        <section className="service-detail-copy">
          <h3>{localized(detail.what.heading, language)}</h3>
          <p>{localized(detail.what.description, language)}</p>
        </section>
        <section className="service-deliverables">
          <h3>{localized(detail.what.deliverablesLabel, language)}</h3>
          <ol>
            {detail.what.deliverables.map((item, index) => (
              <li key={localized(item.title, language)}>
                <span className="service-list-index">{index + 1}</span>
                <div>
                  <strong>{localized(item.title, language)}</strong>
                  <p>{localized(item.description, language)}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <aside className="service-result">
          <h3>{localized(detail.what.resultTitle, language)}</h3>
          <p>{localized(detail.what.result, language)}</p>
        </aside>
      </div>
    );
  }

  if (activeTab === "when") {
    return (
      <div className="service-detail-content service-when-content">
        <h3>{localized(detail.when.heading, language)}</h3>
        <ul className="service-signals">
          {detail.when.signals.map((signal) => (
            <li key={localized(signal, language)}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedSignals.includes(signal.en)}
                  onChange={() => onToggleSignal(signal.en)}
                />
                <span aria-hidden="true" />
                <span>{localized(signal, language)}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="service-detail-content service-why-content">
      <section className="service-detail-copy">
        <h3>{localized(detail.why.heading, language)}</h3>
        <p>{localized(detail.why.intro, language)}</p>
        <p>{localized(detail.why.body, language)}</p>
      </section>
      <div className="service-insights">
        {detail.why.insights.map((insight, index) => (
          <InsightCard
            key={localized(insight.title, language)}
            insight={insight}
            index={insightIndexes[index]}
            language={language}
            onChange={(nextIndex) =>
              onInsightChange((indexes) =>
                indexes.map((current, currentIndex) =>
                  currentIndex === index ? nextIndex : current,
                ),
              )
            }
          />
        ))}
      </div>
    </div>
  );
};

const ServiceDetail = ({
  service,
  language,
  isMobile,
  isPinned,
  onTogglePin,
  onClose,
  onBack,
}) => {
  const [activeTab, setActiveTab] = useState("why");
  const [insightIndexes, setInsightIndexes] = useState([0, 0]);
  const [selectedSignals, setSelectedSignals] = useState([]);
  const closeButtonRef = useRef(null);
  const navigate = useNavigate();
  const detail =
    content.servicesPage.detailTemplates[service.detail] ||
    content.servicesPage.detailTemplates.standard;
  const ui = content.servicesPage;
  const tabs = ["why", "what", "when"];

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  const toggleSignal = (signal) => {
    setSelectedSignals((selected) =>
      selected.includes(signal)
        ? selected.filter((item) => item !== signal)
        : [...selected, signal],
    );
  };

  return (
    <div
      className={`service-detail-scrim ${isMobile ? "is-mobile" : ""}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="service-detail-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-detail-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="service-detail-header">
          {isMobile && (
            <button
              type="button"
              className="service-detail-back"
              aria-label={localized(ui.backToServices, language)}
              onClick={onBack}
            >
              <Chevron direction="left" />
            </button>
          )}
          <h2 id="service-detail-title">
            {localized(service.title, language)}
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            className="service-detail-close"
            aria-label={localized(ui.close, language)}
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        </header>

        <div className="service-detail-tabs" role="tablist">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab}
              role="tab"
              id={`service-tab-${tab}`}
              aria-selected={activeTab === tab}
              aria-controls="service-tab-content"
              tabIndex={activeTab === tab ? 0 : -1}
              className={activeTab === tab ? "is-active" : ""}
              onKeyDown={(event) => {
                if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
                  return;
                }
                event.preventDefault();
                const direction = event.key === "ArrowRight" ? 1 : -1;
                const currentIndex = tabs.indexOf(activeTab);
                const nextTab = tabs[(currentIndex + direction + tabs.length) % tabs.length];
                setActiveTab(nextTab);
                event.currentTarget.parentElement
                  .querySelectorAll('[role="tab"]')
                  .item(tabs.indexOf(nextTab))
                  .focus();
              }}
              onClick={() => setActiveTab(tab)}
            >
              <span>{localized(ui.tabs[tab], language)}</span>
            </button>
          ))}
        </div>

        <div
          id="service-tab-content"
          className="service-detail-scroll"
          role="tabpanel"
          aria-labelledby={`service-tab-${activeTab}`}
        >
          <ServiceTabContent
            detail={detail}
            activeTab={activeTab}
            language={language}
            insightIndexes={insightIndexes}
            onInsightChange={setInsightIndexes}
            selectedSignals={selectedSignals}
            onToggleSignal={toggleSignal}
          />
        </div>

        <footer className="service-detail-footer">
          <button
            type="button"
            className={`service-pin-action ${isPinned ? "is-pinned" : ""}`}
            aria-pressed={isPinned}
            onClick={() => onTogglePin(service.id)}
          >
            {localized(isPinned ? ui.unpin : ui.pin, language)}
          </button>
          <button
            type="button"
            className="service-questions-action"
            onClick={() => navigate("/contact")}
          >
            {localized(ui.questions, language)}
          </button>
        </footer>
      </section>
    </div>
  );
};

const ServicesPage = ({
  language,
  pinnedServices,
  onTogglePinnedService,
}) => {
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 900px)").matches,
  );
  const [openGroups, setOpenGroups] = useState(() =>
    window.matchMedia("(max-width: 900px)").matches
      ? []
      : [content.servicesPage.groups[0].id],
  );
  const [allServicesOpen, setAllServicesOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const ui = content.servicesPage;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");
    const handleMediaChange = (event) => {
      setIsMobile(event.matches);
      setOpenGroups(event.matches ? [] : [content.servicesPage.groups[0].id]);
      setAllServicesOpen(false);
      setSelectedService(null);
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  useEffect(() => {
    if (!allServicesOpen && !selectedService) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key !== "Escape") return;
      if (selectedService) {
        setSelectedService(null);
        if (!isMobile) setAllServicesOpen(false);
      } else {
        setAllServicesOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [allServicesOpen, isMobile, selectedService]);

  const toggleGroup = (groupId) => {
    setOpenGroups((current) =>
      current.includes(groupId)
        ? current.filter((id) => id !== groupId)
        : [...current, groupId],
    );
  };

  const selectService = (service) => setSelectedService(service);

  const closeDetail = () => {
    setSelectedService(null);
    setAllServicesOpen(false);
  };

  return (
    <main className="services-page" aria-label={localized(ui.eyebrow, language)}>
      <div className="services-page-inner">
        <div className="services-layout">
          <section className="services-overview">
            <div className="services-heading">
              <span className="services-eyebrow">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="m12 2.75 8 4.5v9.5l-8 4.5-8-4.5v-9.5l8-4.5Z"
                    fill="currentColor"
                  />
                  <path
                    d="m4.5 7.5 7.5 4.25 7.5-4.25M12 12v9m-4-16 8 4.5"
                    stroke="#fff"
                  />
                </svg>
                {localized(ui.eyebrow, language)}
              </span>
              <h1>
                <span>{localized(ui.headline.before, language)}</span>
                <span className="services-headline-highlight">
                  {localized(ui.headline.highlight, language)}
                </span>
                <span>{localized(ui.headline.after, language)}</span>
              </h1>
              <button
                type="button"
                className="services-view-all"
                onClick={() => {
                  setOpenGroups([]);
                  setAllServicesOpen(true);
                }}
              >
                {localized(ui.viewAll, language)}
              </button>
            </div>

            <ServiceGroups
              groups={ui.groups}
              language={language}
              openGroups={openGroups}
              onToggleGroup={toggleGroup}
              onSelectService={selectService}
            />
          </section>

          <aside className="partner-card">
            <div className="partner-card-copy">
              <h2>{localized(ui.partnerCard.title, language)}</h2>
              <p>{localized(ui.partnerCard.description, language)}</p>
            </div>
            <button type="button" className="partner-card-action">
              {localized(ui.partnerCard.action, language)}
            </button>
          </aside>
        </div>
      </div>

      {allServicesOpen && isMobile && (
        <div className="services-all-overlay">
          <section
            className="services-all-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="all-services-title"
          >
            <header className="services-all-header">
              <span aria-hidden="true" />
              <h2 id="all-services-title">
                {localized(ui.allServices, language)}
              </h2>
              <button
                type="button"
                className="service-detail-close"
                aria-label={localized(ui.close, language)}
                onClick={() => setAllServicesOpen(false)}
              >
                <CloseIcon />
              </button>
            </header>
            <div className="services-all-scroll">
              <ServiceGroups
                groups={ui.groups}
                language={language}
                openGroups={openGroups}
                onToggleGroup={toggleGroup}
                onSelectService={selectService}
                mobile
              />
            </div>
          </section>
        </div>
      )}

      {selectedService && (
        <ServiceDetail
          service={selectedService}
          language={language}
          isMobile={isMobile}
          isPinned={pinnedServices.includes(selectedService.id)}
          onTogglePin={onTogglePinnedService}
          onClose={closeDetail}
          onBack={() => setSelectedService(null)}
        />
      )}
    </main>
  );
};

export default ServicesPage;
