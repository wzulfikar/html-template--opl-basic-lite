import React from "react";

import Head from "@src/components/Head";
import Header from "@src/components/Header";
import Brand from "@src/components/Brand";
import Features from "@src/components/Features";
import Facts from "@src/components/Facts";
import Team from "@src/components/Team";
import Testimonial from "@src/components/Testimonial";
import Blog from "@src/components/Blog";
import Footer from "@src/components/Footer";

export default () => (
  <div>
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
