import React from "react";
import { motion } from "framer-motion";
import "../style/Hero.css";
import RedChilSVG from "../assets/images/hero/rocket_nobg.png"; // use the final svg path

const Hero = () => {
  return (
    <motion.section
      className="hero-svg"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}>
      <div className="hero-svg-container">
        <div className="hero-svg-text">
          <h1>
            Welcome to <span className="highlight">RedChil</span>
          </h1>
          <p>
            RedChil is a full-throttle digital marketing agency turning brand
            potential into blazing results. With bold strategy, creative
            firepower, and data-backed execution — we help you dominate the
            digital game.
          </p>
        </div>
        <div className="hero-svg-image">
          <img src={RedChilSVG} alt="RedChil Glowing SVG Logo" />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
