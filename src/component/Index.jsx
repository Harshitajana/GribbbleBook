import React from "react";
import Header from "./Header";
import { Container } from "react-bootstrap";
import Section1 from "./Section1";
import Footer from "./Footer/Footer";
import Services from "./Services/Services";

function Index() {
  return (
    <>
      {/* header section start */}

      <Header />

      {/* header section end */}

        <Section1 />
        {/* <Footer /> */}
        <Services />

    </>
  );
}

export default Index;
