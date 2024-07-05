import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../context/auth.context.jsx';
import logoblack from "../assets/myestro-b.png";

const LandingPage = () => {
  const { currUser } = useContext(AuthContext);
if(currUser){
  //console.log(currUser)
}else{
  //console.log("No user info")
}


  return (
    <>
      <div className="landing-page">
      <img src={logoblack} alt="logo" className="landingpage-logo" />
        <h4 className="landingpage-text">
          Find the perfect music teacher or studio for your needs! Simply follow the links below to begin exploring from the finest selection in Middle-earth.
        </h4>
        <Link to="/teacher">
          <button className="landing-page-button">Find me a teacher</button>
        </Link>
        <Link to="/studios">
          <button className="landing-page-button">Find me a studio</button>
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
