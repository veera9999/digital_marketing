import React from "react";
import "../style/Hero.css";
import rocket from "../assets/images/hero/rocket_nobg.png";

const Hero: React.FC = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Empowering Brands with <br />
            Strategic Digital Innovation
          </h1>
          <p className="hero-subtitle">
            We help businesses grow by delivering tailored digital marketing
            solutions focused on impact, scalability, and measurable success.
          </p>
          <div className="hero-buttons">
            <button className="cta-primary">Get Started</button>
            <button className="cta-secondary">See Our Work</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={rocket} alt="RedChil Rocket" className="rocket" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
