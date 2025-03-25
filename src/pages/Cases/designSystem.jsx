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
import { H3 } from "../Home/components/principles";

const DesignSystem = () => {
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
      <CaseTitle>Multi-themed Design System</CaseTitle>
      <CaseSubTitle>Lyreco</CaseSubTitle>

      <CaseDescription>
        A design system serves as a foundational framework that promotes
        consistency, efficiency, and scalability in digital product development.
        It includes guidelines, reusable components, design principles, and
        documentation to ensure cohesive user experiences across platforms. The
        evolution of design systems has progressed from static style guides to
        dynamic, token-based structures, with modern tools such as Figma
        introducing variables to enhance adaptability.
      </CaseDescription>

      <H3>Understanding Design Systems</H3>
      <CaseDescription>
        A design system is more than just a collection of UI components; it’s a
        comprehensive ecosystem that encompasses visual identity, component
        libraries, interaction patterns, and governance mechanisms. Its primary
        purpose is to create a unified design language that aligns
        cross-functional teams, reducing redundancy and fostering collaboration
        between designers and developers. By standardising design elements and
        interactions, a design system ensures brand coherence and enhances the
        efficiency of product development cycles.
      </CaseDescription>

      <H3>Stablishing the Foundation</H3>
      <CaseDescription>
        The development of a design system begins with defining core principles
        and objectives. This phase involves researching user needs, business
        requirements, and technical constraints to establish a scalable
        framework. Foundational elements include typography, colour palettes,
        spacing, grid systems, and iconography, serving as the visual and
        functional pillars of the system. To maintain consistency, design tokens
        are introduced as the building blocks of the system. These tokens
        represent values for properties such as colours, typography, and
        spacing, enabling flexible adjustments across various themes and
        platforms. At this stage, the system is structured to allow iterative
        refinement and expansion as new design needs emerge. Parallel to
        component creation, documentation is developed to support adoption and
        governance. A comprehensive design system includes usage guidelines,
        code snippets, and contribution workflows that facilitate seamless
        collaboration between designers and developers. Proper documentation
        ensures that the design system remains a living entity, adaptable to
        evolving product requirements.
      </CaseDescription>

      <H3>Transitioning to Figma Variables</H3>
      <CaseDescription>
        An intriguing approach was implementing this system with Figma variables
        (as they were recently introduced), aligning with our scalability
        objective. Variables allow designers to define dynamic properties such
        as colours, typography, and spacing within a single source of truth,
        reducing manual updates and ensuring consistency across multiple design
        files. The transition to Figma variables involves mapping existing
        design tokens to variable definitions, structuring variable categories,
        defining relationships between tokens, and integrating conditional logic
        for theming requirements.
      </CaseDescription>

      <H3>Practical Example</H3>
      <CaseDescription>
        Consider an e-commerce platform serving multiple brands under a single
        infrastructure. By utilising variables, the team enabled seamless theme
        switching for different brands while maintaining core functionality. A
        Matrix Component was introduced as the guiding framework for the rest of
        the system, defining key interaction patterns, responsive behaviour, and
        layout structures. This component integrated grid-based layouts, spacing
        rules, and adaptive properties, ensuring every UI element maintained
        consistency across all brands.
      </CaseDescription>

      <H3>Impact of a Design System on Organisatios and Users</H3>
      <CaseDescription>
        A well-implemented design system offers substantial benefits to both
        organisations and users. For organisations, it fosters efficiency,
        reduces design and development time, and ensures consistency across
        multiple products. It minimises redundant work, allowing teams to focus
        on innovation. It also facilitates better collaboration between
        designers, developers, and product managers by establishing clear
        guidelines and workflows. For users, a design system enhances the
        overall experience by promoting uniformity in visual and interactive
        elements. A consistent interface reduces cognitive load, making
        applications easier to navigate. Design systems also improve
        accessibility by enforcing inclusive design practices, benefiting users
        with a cohesive and intuitive digital experience, increasing
        satisfaction and engagement.
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

export default DesignSystem;
