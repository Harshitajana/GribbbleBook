import React from "react";
import Header from "./Header";
import { Container } from "react-bootstrap";
import Section1 from "./Section1";

function Index() {
  return (
    <>
      {/* header section start */}

      <Header />

      {/* header section end */}

        <Section1 />

    </>
  );
}

export default Index;
