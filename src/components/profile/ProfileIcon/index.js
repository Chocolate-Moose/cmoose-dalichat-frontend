import React from 'react';
import './ProfileIcon.scss';

const ProfileIcon = ({
  imgUrl, username, uid, className = '',
}) => (
  <div className={`profile-icon-container ${className}`}>
    <img
      src={imgUrl}
      className="profile-icon"
      alt={`profile of user ${username}`}
    />
  </div>
);

export default ProfileIcon;
