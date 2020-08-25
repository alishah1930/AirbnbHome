import React from "react";
import "./Experience.css";

import Estadias from "../../assets/quarto.png";
import Cozinha from "../../assets/cozinha.jpeg";
import Aventura from "../../assets/aventura.jpg";
import Comida from "../../assets/comida.jpeg";


export default function Experience() {

  

  return (
    <>
    <h2 className="User">What do you want to find?</h2>
    <div className="cardStyle">
    
      <div className="Experience">
        <img src={Estadias} alt="" className="img"/>
        <p>Stays</p>
      </div>
   
      <div className="Experience">
        <img src={Cozinha} alt="" className="img"/>
          <p>Experience</p>
      </div>

      <div className="Experience">
        <img src={Aventura} alt="" className="img"/>
          <p>Adventures</p>
      </div>

      <div className="Experience">
        <img src={Comida} alt="" className="img"/>
          <p>Restaurants</p>
      </div>

    </div>
    </>
  );
}
