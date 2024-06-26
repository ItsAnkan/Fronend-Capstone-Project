import React from "react";
import Hero from "../../components/Sections/Hero/Hero";
import About from "../../components/Sections/About/About";
import Testimonials from "../../components/Sections/Testimonials/Testimonials";
import Specials from "../../components/Sections/Specials/Specials";

const Homepage = () => {
  return (
    <>
      <Hero />
	  <Specials />
	  <Testimonials />
      <About />
    </>
  );
};
export default Homepage;