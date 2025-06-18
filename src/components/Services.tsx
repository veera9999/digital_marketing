import React from "react";
import { motion } from "framer-motion";
import "../style/Services.css";

const services = [
  {
    icon: "📈",
    title: "SEO Optimization",
    desc: "Boost your visibility and outrank competitors with our strategic SEO.",
  },
  {
    icon: "💬",
    title: "Social Media Ads",
    desc: "Engage your audience and grow through laser-targeted social ads.",
  },
  {
    icon: "🎯",
    title: "Brand Strategy",
    desc: "Position your brand with clarity and a compelling story.",
  },
  {
    icon: "🛒",
    title: "eCommerce Marketing",
    desc: "Turn clicks into conversions with smart product campaigns.",
  },
  {
    icon: "📊",
    title: "Analytics & Insights",
    desc: "Measure what matters and scale what works.",
  },
  {
    icon: "✍️",
    title: "Content Creation",
    desc: "Visually engaging content that sells your message.",
  },
];

const Services = () => {
  return (
    <motion.section
      className="services-section"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}>
      <h2 className="services-title">What We Offer</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
