import React from "react";
import Header from "./Header";
import Section2 from "./Section2";
import Section1 from "./Section1";
import Footer from "./Footer/Footer";
import Services from "./Services/Services";
import Section4 from "./Section4";

function Index() {
  return (
    <>
      {/* header section start */}

      <Header />

      {/* header section end */}
      {/* section-1 start */}
      <Section1 />
      {/* section-1 end */}
      {/* section-2 start */}
      <Section2 />
      {/* section-2 end */}

      {/* section-4 start */}

      <Services />

      {/* section-4 end */}
      {/* <Footer /> */}
      <Section4 />

      <Footer />
    </>
  );
}

export default Index;
