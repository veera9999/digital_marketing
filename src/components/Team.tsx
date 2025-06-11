import React, { useState } from "react";
import { motion } from "framer-motion";
import "../index.css";

const teamMembers = [
  {
    name: "Veera Palla",
    role: "Founder & CEO",
    image: "/assets/team/veera.jpg",
  },
  {
    name: "Aarya Menon",
    role: "Marketing Lead",
    image: "/assets/team/aarya.jpg",
  },
  {
    name: "Zane Patel",
    role: "Tech Strategist",
    image: "/assets/team/zane.jpg",
  },
  {
    name: "Lana Moreau",
    role: "UI/UX Designer",
    image: "/assets/team/lana.jpg",
  },
  {
    name: "Tariq Rahman",
    role: "Lead Developer",
    image: "/assets/team/tariq.jpg",
  },
];

const Team = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleMembers = teamMembers.slice(startIndex, startIndex + 3);

  const next = () => {
    if (startIndex + 3 < teamMembers.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <motion.section
      className="team-section"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}>
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-carousel">
        <button className="nav-btn" onClick={prev} disabled={startIndex === 0}>
          &#8592;
        </button>
        <div className="team-cards">
          {visibleMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.image} alt={member.name} className="team-img" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
        <button
          className="nav-btn"
          onClick={next}
          disabled={startIndex + 3 >= teamMembers.length}>
          &#8594;
        </button>
      </div>
    </motion.section>
  );
};

export default Team;
