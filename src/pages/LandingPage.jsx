import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const LandingPage = () => {
  const [teacher, setTeacher] = useState("");
  const [studio, setStudio] = useState("");
  const navigate = useNavigate();

  return <div className="landing-page">
    <h1>Myestro</h1>
    <h4 className="landingpage-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus, libero eu aliquel tincidunt, ex ligula ullamcorper urna, id commodo ligula odio et arcu.
    </h4>
    <button className="findteacher">Find me a Teacher</button>
    <button className="findstudio">Find me a Studio</button>
  </div>;
};

export default LandingPage;