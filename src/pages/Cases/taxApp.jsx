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

const TaxApp = () => {
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
      <CaseTitle>
        Improving Payment Flow for Government Tax Application
      </CaseTitle>
      <CaseSubTitle></CaseSubTitle>

      <H3>Problem and Need</H3>
      <CaseDescription>
        The existing government tax application made paying various taxes and
        levies cumbersome and time-consuming, leading to numerous incorrect
        transactions and support inquiries. Staff struggled with understanding
        the steps, processing appropriate payment methods, and balancing
        accounts. The system’s lack of clarity and guidance caused frustration,
        delays in tax compliance, and an increased burden on government support
        services. There was a critical need to enhance the user experience by
        streamlining the payment flow to reduce friction in the process.
      </CaseDescription>

      <H3>Challenge</H3>
      <CaseDescription>
        The main challenge was to create a seamless payment experience while
        adhering to governmental infrastructure and regulatory constraints. The
        system needed to support multiple payment methods, including bank
        transfers, credit card payments, and cash transactions, as well as
        accommodate various currencies. Existing system limitations,
        particularly inflexible backend processes, posed significant hurdles to
        feasible modifications.
      </CaseDescription>

      <H3>Methodology</H3>
      <CaseDescription>
        The research phase aimed to understand the requirements and challenges
        faced by government staff processing citizens’ payments. In-depth
        interviews and contextual inquiries were conducted with officers and
        managers. An analysis of support inquiries and system logs provided
        quantitative data on recurring pain points and transaction failures.
        Wireframes and interactive prototypes were developed based on research
        findings and tested with staff to validate usability enhancements. Their
        feedback was crucial in refining the workflow to minimise redundant
        steps and enhance system clarity. Accessibility audits ensured
        compliance with WCAG standards, optimising keyboard implementation. The
        final implementation was phased, with performance metrics continuously
        monitored to assess the impact of improvements. Post-launch feedback
        from staff was collected to identify further refinements and ensure the
        long-term efficiency of the system.
      </CaseDescription>

      <H3>Solution</H3>
      <CaseDescription>
        The redesign of the payment flow was guided by a user-centred approach,
        leveraging research insights from usability testing and staff feedback.
        The new design introduced a clear step-by-step guidance system with
        real-time feedback and validation at each stage. The interface was
        simplified with concise language, reducing cognitive load and
        eliminating ambiguity. A dynamic payment summary provided transparency
        on tax amounts, payment methods, and deadlines, ensuring users had a
        clear understanding before proceeding. To accommodate diverse payment
        preferences, the solution integrated a responsive payment gateway that
        allowed seamless switching between payment methods without disrupting
        the process. Error handling mechanisms were improved by providing
        contextual assistance and clear error messages, reducing user confusion
        and drop-offs. The final stage included an intuitive confirmation page
        with downloadable receipts and real-time status updates, giving users
        confidence that their transactions were successfully completed.
      </CaseDescription>

      <H3>Outcome</H3>
      <CaseDescription>
        The redesigned payment flow significantly improved staff satisfaction
        and efficiency. Post-implementation metrics showed a marked increase in
        completed transactions and a reduction in user errors. Support inquiries
        related to payment issues decreased substantially, indicating greater
        clarity and usability in the process. The improved design also
        contributed to faster payment processing times and a reduction in
        overdue tax payments, benefiting both citizens and government
        operations. User feedback highlighted increased trust in the system,
        reinforcing the importance of a well-structured, user-friendly payment
        experience in public sector services. The success of this initiative
        demonstrated the value of applying UX principles to governmental digital
        services, setting a foundation for future improvements across related
        citizen-facing platforms.
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

export default TaxApp;
