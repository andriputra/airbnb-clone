import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import QuestionSection from "../components/QuestionSection";
import Comparation from "../components/Comparation";
import Apartments from "../components/Apartments";
import Feature from "../components/Feature";
import MainFeature from "../components/MainFeature";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <MainFeature />
        <Feature />
        <Apartments />
        <Comparation />
        <QuestionSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
