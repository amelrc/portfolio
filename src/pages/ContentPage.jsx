import React from "react";
import { Link } from "react-router-dom";
import content from "../data/websiteContent.json";
import "./Home/home.css";

const ContentPage = ({ page, language }) => {
  const pageContent = content.pages[page];

  return (
    <main className="utility-page">
      <section className="utility-page-panel">
        <h1>{pageContent.title[language]}</h1>
        <p>{pageContent.description[language]}</p>
        <Link
          to={page === "contact" ? "/services" : "/contact"}
          className="utility-page-action"
        >
          {pageContent.action[language]}
          <span aria-hidden="true">→</span>
        </Link>
        <Link className="utility-page-back" to="/">
          {content.contentPage.backHome[language]}
        </Link>
      </section>
    </main>
  );
};

export default ContentPage;
