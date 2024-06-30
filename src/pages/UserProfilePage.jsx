import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from '../context/auth.context.jsx';
import axios from "axios";
import { API_URL } from "../config.js";
import { useNavigate } from "react-router-dom";

const UserProfilePage = ({profileUser}) => {
  const nav = useNavigate();

  function editProfile(){
    nav("/edit-user-profile")

  }

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


      <br />
      <button onClick={editProfile}>Edit Profile</button>

    </div>
  );
}

export default UserProfilePage
