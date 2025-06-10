import { useEffect, useState } from "react";
import jumbo1 from "../assets/jumbo-1.jpg";
import jumbo2 from "../assets/jumbo-2.jpg";
import jumbo3 from "../assets/jumbo-3.jpg";
import "../index.css";

const images = [jumbo1, jumbo2, jumbo3];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-image-container">
        <img
          src={images[current]}
          alt={`jumbotron-${current}`}
          className="hero-image"
        />
        <div className="hero-overlay">
          <h1 className="hero-title">Welcome to RedChil</h1>
          <p className="hero-subtitle">Driving Your Business to Success</p>
          <button className="hero-button">Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
