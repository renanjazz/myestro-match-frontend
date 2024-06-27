import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from '../context/auth.context.jsx';

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
        <h1>Myestro</h1>
        <h4 className="landingpage-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus,
          libero eu aliquel tincidunt, ex ligula ullamcorper urna, id commodo
          ligula odio et arcu.
        </h4>
        <Link to="/teacher">
          <button>Find me a Teacher</button>
        </Link>
        <Link to="/studios">
          <button>Find me a Studio</button>
        </Link>
      </div>
      ;
    </>
  );
};

export default LandingPage;
