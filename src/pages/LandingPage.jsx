import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from '../context/auth.context.jsx';
import logoblack from "../assets/myestro-b.png";

const LandingPage = () => {
  const [teacher, setTeacher] = useState("");
  const [studio, setStudio] = useState("");
  const { currUser } = useContext(AuthContext);
  const navigate = useNavigate();
if(currUser){
  console.log(currUser)
}else{
  console.log("No user info")
}


  return (
    <>
      <div className="landing-page">
      <img src={logoblack} alt="logo" className="landingpage-logo" />
        <h4 className="landingpage-text">
          Find the perfect music teacher or studio for your needs! Simply follow the links below to begin exploring from the finest selection in Middle-earth.
        </h4>
        <Link to="/teacher">
          <button className="landing-page-button">Find me a Teacher</button>
        </Link>
        <Link to="/studios">
          <button className="landing-page-button">Find me a Studio</button>
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
