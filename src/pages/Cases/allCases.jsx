import React from "react";

import { FlexColCen } from "../../generalStyles";
import CasePreview from "../../components/casePreview";
import { H2 } from "../Home/homeStyles";
import PP from "../../images/Proximus_Phone.png";
import PW from "../../images/Proximus_Watch.png";
import StudiateLogin from "../../images/Studiate.png";
import FlumenSonorum from "../../images/FS_Tablet.png";
import BSPWeb from "../../images/BSP_Laptop.png";
import BSPSite from "../../images/BSP_Web.png";
import BSPApp from "../../images/BSP_App.png";
import DSIntro from "../../images/DS_Intro.png";
import Subaru from "../../images/Subaru_Intro.png";

const AllCases = () => {
  const casesData = [
    {
      title: "The Belgium Heartbeat",
      description:
        "The Proximus Group is a provider of digital services and communication solutions operating in Belgium and international markets. In Belgium, the company offers its main products and services under the brands Proximus, Scarlet, and Mobile Vikings.",
      url: "/heartbeat",
      hash: "#title",
      button: "read more",
      images: [PW, PP],
    },
    {
      title: "Design System",
      description:
        "Lyreco is a global leader in workplace solutions, providing office supplies, IT equipment, personal protective gear, and facility products. With a strong focus on sustainability, it helps businesses streamline procurement while promoting eco-friendly practices. Operating in 25 countries, Lyreco delivers tailored solutions to enhance workplace efficiency and safety.",
      url: "/designsystem",
      hash: "#title",
      button: "read more",
      images: [DSIntro],
    },
    {
      title: "Government Tax Application",
      description:
        "This government continuously embarks on digital transformation by implementing online services, modernizing legacy systems, and adopting emerging technologies to improve efficiency and accessibility. They invest in digital infrastructure, data security, and user-centric design to enhance public service delivery and citizen engagement.",
      url: "/taxapp",
      hash: "#title",
      button: "read more",
      images: [],
    },
    {
      title: "Subaru Mobile App",
      description:
        "I was asked by this renowned premium car manufacturer to redesign a UI concept for the mobile app Subaru Care.",
      url: "",
      images: [Subaru],
    },
    {
      title: "Music Label Web App",
      description:
        "Flumen Sonorum is a music label dedicated to promoting classical music. With a deep respect for tradition and an eye toward innovation, I am creating a web app that provides a platform for artists to share their artistry with a global audience. Through high-quality recordings and a seamless digital experience, Flumen Sonorum will be able to bring the magic of classical music.",
      url: "",
      button: "coming soon",
      images: [FlumenSonorum],
    },
    {
      title: "Printing Production Software",
      description:
        "Studiate is an all-in-one software solution designed for music teachers, streamlining scheduling, invoicing, payments, and bookkeeping. It enables teachers to set their availability, allowing students to effortlessly book lessons within open time slots.",
      url: "",
      images: [BSPWeb, BSPSite, BSPApp],
    },

    {
      title: "Studiate Web App",
      description:
        "Studiate is an all-in-one software solution designed for music teachers, streamlining scheduling, invoicing, payments, and bookkeeping. It enables teachers to set their availability, allowing students to effortlessly book lessons within open time slots.",
      url: "",
      images: [StudiateLogin],
    },
  ];

  return (
    <FlexColCen id="cases">
      <H2 style={{ marginBottom: 0 }}>Work</H2>
      {/* {casesData.map((item, index) => ( */}
      <CasePreview casesData={casesData} />
      {/* ))} */}
    </FlexColCen>
  );
};

export default AllCases;
