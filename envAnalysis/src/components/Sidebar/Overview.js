// Overview.js
import React, { useState } from "react";
import "./Overview.css";
import pHimg from "./pH_graph.png";
import Hardnessimg from "./Hardness.png";
import Solidsimg from "./Solids.png";
import Alkalineimg from "./Alkaline.png";
import { GiAcid, GiMarbles, GiAcidTube } from "react-icons/gi";
import { LuWaves } from "react-icons/lu";

function Overview() {
  // Define the path to the HTML file you want to open
  const htmlFilePath = "/pH_levels_over_time_with_anomalies.html";
  const alkalineHTML = "/Total_Alkalinity_Over_Time_with_Different_Types_of_Anomalies.html";
  const dissolvedSolidHTML = "/Total_Dissolved_Solids_Over_Time_with_Anomalies_Fixed.html";
  const hardnessHTML = "./Total_Hardness_Over_Time_with_Anomalies_1.html";

  // State to keep track of the current image and link
  const [currentImage, setCurrentImage] = useState(pHimg);
  const [currentLink, setCurrentLink] = useState(htmlFilePath);

  // Function to handle box click
  const handleBoxClick = (newImage, newLink) => {
    setCurrentImage(newImage);
    setCurrentLink(newLink);
  };

  return (
    <div className="stats-container">
      <div className="Headings">
        <div className="Heading-text">
          Project Statistics
          <div className="stats_box">
            <div className="chart_box">
              <a href={currentLink} target="_blank" rel="noopener noreferrer">
                <img src={currentImage} alt="pH" className="phImage1" />
              </a>
            </div>
            <div className="row1">
              <div className="box" onClick={() => handleBoxClick(pHimg, htmlFilePath)}>
                <div className="center-content">
                  <GiAcid size={50} color="#00008B" />
                  <div>pH</div>
                </div>
              </div>
              <div className="box2" onClick={() => handleBoxClick(Hardnessimg, hardnessHTML)}>
                <div className="center-content">
                  <LuWaves size={50} color="#00008B" />
                  <div>Hardness</div>
                </div>
              </div>
            </div>
            <div className="row2">
              <div className="box3" onClick={() => handleBoxClick(Alkalineimg, alkalineHTML)}>
                <div className="center-content">
                  <GiAcidTube size={50} color="#00008B" />
                  <div>Alkalinity</div>
                </div>
              </div>
              <div className="box4" onClick={() => handleBoxClick(Solidsimg, dissolvedSolidHTML)}>
                <div className="center-content">
                  <GiMarbles size={60} color="#00008B" style={{marginBottom: '15px'}} />
                  <div>Solids</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
