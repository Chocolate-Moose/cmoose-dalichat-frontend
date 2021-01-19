import React from 'react';
import './ProfileCard.scss';

const ProfileCard = ({
  fullName, profileUrl, username, blurb, portfolioUrl, numPosts, uid, className = '',
}) => (
  <div className={`profile-card-container ${className}`}>
    <svg className="profile-image" />

    <a className="portfolio-card-name" href={`/user/${uid}`}>{fullName}</a>
    <a className="portfolio-card-username" href={`/user/${uid}`}>@{username}</a>

    {/* If blurb is undefined (not passed as a prop), this expression returns false */}
    <div>{blurb && <p>{blurb}</p>}</div>

    <div className="portfolio-card-url-container">
      {portfolioUrl && <a className="portfolio-card-portfolio-url" href={`${portfolioUrl}`}>{portfolioUrl}</a>}
    </div>

    <p className="portfolio-card-posts">{numPosts} posts</p>
  </div>
);

// <div>{blurb && <p>{blurb}</p>}</div>

export default ProfileCard;
