import React from 'react';
import './TeamSection.css';

const TeamCard = ({ id,name, role, description, image, }) => {
  return (
    <div className="team-card" id={id}>
      <div className="team-image">
        <img src={image} alt={name} />
      </div>
      <p className={"team-description"}>{description}</p>
      <h3 className="team-name">{name}</h3>
      <p className="team-role">{role}</p>
    </div>
  );
};

export default TeamCard;
