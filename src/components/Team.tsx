import React, { useState } from "react";
import "../style/Team.css";
import team1 from "../assets/images/team/Team1.jpeg";
import team2 from "../assets/images/team/Team2.jpeg";
import team3 from "../assets/images/team/Team3.jpeg";
import team4 from "../assets/images/team/Team4.jpeg";
import team5 from "../assets/images/team/Team5.jpeg";
import team6 from "../assets/images/team/Team6.jpeg";

const teamMembers = [
  { name: "Tanmay", role: "Founder & CEO", image: team1 },
  { name: "Aarya Menon", role: "Marketing Lead", image: team2 },
  { name: "Zane Patel", role: "Tech Strategist", image: team3 },
  { name: "Lana Moreau", role: "UI/UX Designer", image: team4 },
  { name: "Tariq Rahman", role: "Lead Developer", image: team5 },
  { name: "Yuna Matsuo", role: "Operations", image: team6 },
];

const Team = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;
  const visibleMembers = teamMembers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const next = () => {
    if (startIndex + itemsPerPage < teamMembers.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="team-legend-section">
      <h2 className="team-legend-title">Meet the Visionaries Behind RedChil</h2>
      <div className="team-carousel-controls">
        <button
          className="team-nav-btn"
          onClick={prev}
          disabled={startIndex === 0}>
          &lt;
        </button>
        <div className="team-legend-grid">
          {visibleMembers.map((member, index) => (
            <div className="team-legend-card" key={index}>
              <div className="team-legend-img-wrap">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-legend-img"
                />
                <div className="team-hover-overlay">
                  <p className="team-hover-role">{member.role}</p>
                </div>
              </div>
              <h3 className="team-legend-name">{member.name}</h3>
            </div>
          ))}
        </div>
        <button
          className="team-nav-btn"
          onClick={next}
          disabled={startIndex + itemsPerPage >= teamMembers.length}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Team;
