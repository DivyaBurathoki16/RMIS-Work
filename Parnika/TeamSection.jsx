import React from 'react';
import './TeamSection.css';
import TeamCard from './TeamCard';

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2 className="team-heading">Meet Our Team</h2>
      <div className="team-container">
        {/* First Team Card with unique class */}
        <TeamCard
          name="Niraj Singh"
          role="Founder"
          description="A visionary leader dedicated to driving innovation and excellence in IT solutions"
          image="./Niraj Singh.png" // Replace with the actual image path
          className="ds1" 
          disid={"d1"}
          id="n1"// Unique class name for the first card
        />
        {/* Second Team Card with unique class */}
        <TeamCard
          name="Ashish Pal"
          role="Co-Founder"
          description="A strategic thinker with a passion for transforming businesses through technology"
          image="./Ashish Pal.png" // Replace with the actual image path
          className="ds2"
          disid={"d2"}
          id="a1" // Unique class name for the second card
        />
        {/* Third Team Card with unique class */}
        <TeamCard
          name="Nikhil Dubey"
          role="Co-Founder"
          description="An operations expert committed to delivering seamless and scalable IT services"
          image="./Nikhil Dubey.png" // Replace with the actual image path
          className="ds3"
          disid={"d3"}
          id="n2" // Unique class name for the third card
        />
      </div>
    </section>
  );
};

export default TeamSection;
