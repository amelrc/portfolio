import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  CaseDescription,
  CloseButton,
  CloseIcon,
  CaseTitle,
  CaseSubTitle,
  CaseContainer,
} from "./caseStyles";
import Cross from "../../images/cross.png";
import { H3 } from "../../components/principles";

const HeartbeatBelgium = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);
  return (
    <CaseContainer id="title">
      <CaseTitle>The Belgium Heatbeat</CaseTitle>
      <CaseSubTitle>Proximus</CaseSubTitle>

      <CaseDescription>
        In anticipation of the World Cup, Proximus embarked on a novel
        initiative to engage football enthusiasts by launching The Belgian
        Heartbeat. This smartwatch-to-mobile application empowers users to
        voluntarily and anonymously share their heart rate, calories burned, and
        ambient noise levels during matches. These metrics are processed in
        real-time, transforming them into dynamic statistics. These insights are
        subsequently visualised and disseminated across various platforms,
        including digital out-of-home (DOOH) advertising and live journalist
        analyses, creating a comprehensive cross-media experience that captures
        the emotional fervour of Belgian supporters.
      </CaseDescription>

      <H3>Identifying the Need</H3>
      <CaseDescription>
        The advent of wearable technology and the capabilities of real-time data
        visualisation presented an opportunity to elevate fan engagement beyond
        conventional methods. While social media and broadcast commentary
        provided insights into fan reactions, they fell short in capturing
        biometric and environmental factors. Proximus recognised the potential
        to construct an immersive, data-driven narrative that encapsulated the
        emotional intensity of live football matches. The objective was to
        develop a seamless and intuitive application capable of aggregating and
        interpreting real-time user data while ensuring accessibility and
        anonymity.
      </CaseDescription>

      <H3>Overcoming the Challenge</H3>
      <CaseDescription>
        The primary challenge lay in designing an experience that was both
        engaging and non-intrusive. Users required a sense of comfort in sharing
        biometric information without privacy concerns, while the interface had
        to remain intuitive for a diverse user base with varying levels of
        technological proficiency. Additionally, the need for instantaneous data
        interpretation and display posed technical constraints, necessitating
        the interface to be responsive and adaptable to fluctuating input rates.
        Another critical consideration was ensuring that the visual
        representation of fan reactions remained compelling across multiple
        platforms, from mobile screens to large-scale DOOH display.
      </CaseDescription>

      <H3>Designing the Solution</H3>
      <CaseDescription>
        The UX design process prioritised accessibility, clarity, and
        engagement. The onboarding experience was designed to be straightforward
        yet informative, ensuring users quickly comprehended how to participate
        voluntarily and that their data would remain anonymous. This was
        achieved through concise, reassuring text that guided users through the
        setup process. A streamlined user flow enabled effortless smartwatch
        pairing, ensuring users could connect their devices without unnecessary
        friction. Given the real-time nature of the data, the UI design
        prioritised live visual feedback, employing dynamic graphs, fluctuating
        heat maps, and pulsating animations that mirrored fan excitement. To
        maintain engagement during matches, the application integrated intuitive
        feedback loops. Users could view their individual metrics juxtaposed
        with aggregated community statistics, fostering a sense of collective
        participation. Colour-coded intensity scales and real-time updates
        ensured that the fluctuations in fan excitement were instantly
        perceptible. The app’s architecture also allowed for seamless data
        transmission to external platforms, ensuring that journalists and
        digital displays could leverage the insights for storytelling and
        analysis.
      </CaseDescription>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "sticky",
          bottom: "8%",
          width: "100%",
        }}
      >
        <CloseButton to="/cases">
          <CloseIcon src={Cross} alt="close me" />
        </CloseButton>
      </div>
    </CaseContainer>
  );
};

export default HeartbeatBelgium;
