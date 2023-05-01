import React, { useState } from 'react';
import Espurr from './espurr.png';
import ShinyEspurr from './Shiny_espurr.png';

//Conditonally renders an Espurr as a surprise!
//Handler that handles the buttonClick
function Surprise() {
  const [showImage, setShowImage] = useState(false);
  const [hover, onHover] = useState(false);

  const handleClick = () => {
    setShowImage(!showImage);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me for a surprise!</button>
      {showImage && (
        <img onMouseOver={()=>onHover(true)} onMouseLeave={()=>onHover(false)} src={hover ? ShinyEspurr : Espurr} alt="espurr" />
      )}
    </div>
  );
}

export default Surprise;
