import React from "react";

import Head from "./Head";
import Header from "./Header";
import Brand from "./Brand";
import Features from "./Features";
import Facts from "./Facts";
import Team from "./Team";
import Testimonial from "./Testimonial";
import Blog from "./Blog";
import Footer from "./Footer";

export default () => {
  return (
    <div className="App">
      <Head />
      <Header />
      <Brand />
      <Features />
      <Facts />
      <Team />
      <Testimonial />
      <Blog />
      <Footer />

      <a href="#" className="back-to-top">
        <i className="lni-chevron-up"></i>
      </a>
    </div>
  );
};
