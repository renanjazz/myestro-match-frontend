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
    <div className="general-page-margin">
      <h2>{profileUser?.username}'s profile</h2>
      <div className="image-box">
      <img
        src={profileUser?.userImage}
        alt={profileUser?.username}
        className="teacher-studio-picture"
      />
      </div>
      <p><strong>Fullname:</strong> {profileUser?.fullname}</p>
      <br />
      <p><strong>Experience level:</strong> {profileUser?.experience_level}</p>
      <br />

      <p><strong>Played instrument:</strong> {profileUser?.instrument}</p>
      <br />
      <p><strong>Member since:</strong> {profileUser?.member_since}</p>
      <br />
      <p><strong>Phone:</strong> {profileUser?.phone_number}</p>
      <br />
      <div className="book-back-box">
      <button className="book-back-button" onClick={editProfile}>Edit Profile</button>
      </div>
    </div>
  );
}

export default UserProfilePage
