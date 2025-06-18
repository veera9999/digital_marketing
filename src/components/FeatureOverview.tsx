import { useEffect, useRef, useState } from "react";
import "../style/FeatureOverview.css";

const features = [
  {
    icon: "🚀",
    title: "All‑In‑One Dashboards",
    desc: "Track SEO, PPC, Social, and analytics in one place.",
  },
  {
    icon: "🎯",
    title: "Precision Targeting",
    desc: "Reach the right audience at the right time.",
  },
  {
    icon: "💡",
    title: "Creative Content",
    desc: "Stand out with on‑brand visuals and copy.",
  },
  {
    icon: "📈",
    title: "Data‑Backed Strategy",
    desc: "Decisions powered by real performance insights.",
  },
];

function FeatureOverview() {
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
      className={`feature-overview ${isVisible ? "visible" : ""}`}
      id="features">
      <div className="feature-container">
        <div className="feature-text">
          <h2>Marketing Made Simple. Results Made Unforgettable.</h2>
          <p>
            RedChil delivers fully integrated digital campaigns that combine
            precision analytics, creative storytelling, and conversion-driven
            design. All powered from a single hub.
          </p>
          <button className="primary-btn">See Our Platform</button>
        </div>

        <div className="feature-list">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureOverview;
