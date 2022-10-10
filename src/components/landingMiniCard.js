import React from "react";

import '../styles/landingMiniCard.css'

const LandingMiniCard = (props) => {

    return <div className={`mini-card-container ${props.className}`}>
        <div className="card-title">{props.title}</div>
        <div className="card-text">{props.text}</div>
    </div>
}

export default LandingMiniCard;
