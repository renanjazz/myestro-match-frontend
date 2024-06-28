import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from '../context/auth.context.jsx';
import axios from "axios";
import { API_URL } from "../config.js";

const UserProfilePage = () => {
  const [profileUser, setProfileUser] = useState(null);
  const { currUser } = useContext(AuthContext);

  useEffect(() => {
    if (currUser) {
      async function getUserInfo() {    
        try {
          const { data } = await axios.get(`${API_URL}/auth/profile/${currUser._id}`);
          setProfileUser(data);
        } catch (error) {
          console.error('No user found:', error);
        }
      }
      getUserInfo();
    }
  }, [currUser]);

  console.log("this is user", currUser);


  return (
    <div>
      <h1>{profileUser?.username}'s Profile page</h1>
      <img
        src={profileUser?.userImage}
        alt={profileUser?.username}
        style={{ height: "250px" }}
      />
      <h4>Fullname: {profileUser?.fullname}</h4>
      <h4>Experience level: {profileUser?.experience_level}</h4>
      <h4>Played instrument: {profileUser?.instrument}</h4>
      <h4>Member since: {profileUser?.member_since}</h4>
      <h4>Phone: {profileUser?.phone_number}</h4>

    </div>
  );
}

export default UserProfilePage
