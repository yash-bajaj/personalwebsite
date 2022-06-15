import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./components/navbar/CustomNavbar";
import NameSection from "./components/sections/namesection/NameSection";
import AboutSection from "./components/sections/aboutsection/AboutSection";
import CredentialsSection from "./components/sections/credentialssection/CredentialsSection";
import BestWorkSection from "./components/sections/bestworksection/BestWorkSection";
import WorkWithMeSection from "./components/sections/workwithmesection/WorkWithMeSection";


function App() {

  return (
    <div className="app">
      <CustomNavbar/>
      <NameSection />
      <AboutSection/>
      <CredentialsSection/>
      <BestWorkSection/>
      <WorkWithMeSection/>
    </div>
  );
}

export default App;
