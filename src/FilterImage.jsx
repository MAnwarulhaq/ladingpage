import React, { useRef, useState } from "react";
import sampleImage from "./assets/anwar.jpg"; // apni image import karo

export default function ImageFilterTool() {
 
   

  return (
   <div>
  <h1> filter Image</h1>
  <img src={sampleImage} alt="" className="size-100 blur"/>
  <img src={sampleImage} alt="" className="size-100 blur-sm"/>
  <img src={sampleImage} alt="" className="size-100 blur-md"/>
   </div>
  );
}
