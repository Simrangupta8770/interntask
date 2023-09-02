import React from 'react'

const Profile = ({name,email,phone,insta,yt}) => {
  return (
      <div className="prof-card">
          <h2>{name}</h2>
          <div className="prof-det">
              <a href={email}>{email}</a>
              <a href='#'>{phone}</a>
              <a href={email}>{email}</a>
              <a href={email}>{email}</a>
          </div>
    </div>
  )
}

export default Profile