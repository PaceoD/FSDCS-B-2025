import React from 'react'
import './profile.css'

function Profile(props) {
  return (
    <div className="profile-card">
      <h2>Profile Page</h2>
      <h3>Name: {props.myname}</h3>
      <h3>Branch: {props.branch}</h3>
      <h3>Section: {props.section}</h3>
      <h3>College: {props.college}</h3>
    </div>
  )
}

export default Profile
