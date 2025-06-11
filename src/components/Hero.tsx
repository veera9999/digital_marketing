import React from "react";
import { motion } from "framer-motion";
import "../index.css";
import herobg from "../assets/videos/herobg.mp4";
interface HeroProps {
  ctaText?: string;
  onClickCTA?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  ctaText = "Let’s Get Started",
  onClickCTA,
}) => {
  return (
    <motion.section
      className="hero-section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}>
      <div className="hero-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
          src={herobg}
        />
        <div className="hero-overlay">
          <h1 className="hero-title">Welcome to RedChil</h1>
          <p className="hero-subtitle">
            Igniting your digital presence with flair
          </p>
          <button className="hero-button" onClick={onClickCTA}>
            {ctaText}
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
