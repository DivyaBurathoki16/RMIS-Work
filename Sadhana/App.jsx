import React from "react";
import "./App.css"; 
import Cloud from "./assets/Cloud.svg";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Document from "./assets/Document.svg";
import Key from "./assets/Key.svg";
import Bulb from "./assets/Bulb.svg";

function App() {
  const cards = [
    {
      id: 1,
      image: Cloud,
      text: "Cloud Services",
    },
    {
      id: 2,
      image: Document,
      text: "Document Management",
    },
    {
      id: 3,
      image: Key,
      text: "Secure Access",
    },
    {
      id: 4,
      image: Bulb,
      text: "Innovative Ideas",
    },
  ];

  return (
    <div className="container">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.image} alt={card.text} className="card-image" />
          <p className="card-text">{card.text}</p>
        </div>
      ))}
    </div>
  );
}

export default App;