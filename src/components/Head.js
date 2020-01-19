import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export default (props) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const tag = document.createElement("script");
    tag.async = false;
    tag.src = "/assets/js/vendor/jquery-1.12.4.min.js";
    document.querySelector("body").appendChild(tag);
    setLoading(false);
  });

  if (loading) {
    return <div></div>;
  }

  return (
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Basic - SaaS Landing Page</title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />/
      <link
        rel="shortcut icon"
        href="/assets/images/favicon.png"
        type="image/png"
      />
      <link rel="stylesheet" href="/assets/css/animate.css" />
      <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
      <link rel="stylesheet" href="/assets/css/slick.css" />
      <link rel="stylesheet" href="/assets/css/LineIcons.css" />
      <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />
      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/default.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
      <script src="/assets/js/vendor/modernizr-3.7.1.min.js"></script>
      <script src="/assets/js/popper.min.js"></script>
      <script src="/assets/js/bootstrap.min.js"></script>
      <script src="/assets/js/plugins.js"></script>
      <script src="/assets/js/slick.min.js"></script>
      <script src="/assets/js/ajax-contact.js"></script>
      <script src="/assets/js/waypoints.min.js"></script>
      <script src="/assets/js/jquery.counterup.min.js"></script>
      <script src="/assets/js/jquery.magnific-popup.min.js"></script>
      <script src="/assets/js/jquery.easing.min.js"></script>
      <script src="/assets/js/scrolling-nav.js"></script>
      <script src="/assets/js/wow.min.js"></script>
      <script src="/assets/js/particles.min.js"></script>
      <script src="/assets/js/main.js"></script>
    </Helmet>
  );
};
