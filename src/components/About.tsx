import { useEffect, useRef, useState } from "react";
import "../index.css";
import about_img from "../assets/images/about1.svg";
function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`about-section ${isVisible ? "visible-slide-right" : ""}`}
      id="about">
      <div className="about-container">
        {/* LEFT: Text */}
        <div className="about-content">
          <h2 className="about-heading">Where Strategy Meets Digital Fire</h2>
          <h3 className="about-subheading">
            At RedChil, your brand isn’t a project—it’s a mission.
          </h3>
          <div className="about-underline"></div>
          <p className="about-paragraph">
            We blend bold design, data-backed marketing, and laser-focused
            storytelling to give your business the digital edge it deserves.
            Whether you're a growing startup or an enterprise titan, our team
            delivers strategic impact through every pixel, every click.
          </p>
          <p className="about-paragraph">
            Based in the innovation capital of Atlanta, we’ve helped 100+ brands
            grow, connect, and convert. From web design and SEO to campaign
            management and analytics, RedChil’s full-stack digital force is your
            secret weapon.
          </p>
          <button className="about-button">Discover Our Capabilities</button>
        </div>

        {/* RIGHT: Image */}
        <div className="about-image">
          <img src={about_img} alt="Marketing Strategy Illustration" />
        </div>
      </div>

      {/* Highlight Strip */}
      <div className="about-highlight-strip">
        <h2>Fueling Brands with Intelligence, Design, and Purpose</h2>
        <p>We don’t just build campaigns. We build empires.</p>
        <div className="about-tags">
          <span>📊 Analytics</span>
          <span>🎯 Campaign Strategy</span>
          <span>⚡ Branding & Identity</span>
          <span>🚀 Startup Acceleration</span>
          <span>💡 Creative Design</span>
          <span>🌐 Web Optimization</span>
        </div>
      </div>
    </section>
  );
}

export default About;
