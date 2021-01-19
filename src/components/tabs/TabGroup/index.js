import React from 'react';
import './TabGroup.scss';

import ProfileCard from '../../profile/ProfileCard';
import TabContainer from '../TabContainer';

const TabGroup = ({
  activeTab,
  setActiveTab,
  user,
  className = '',
  children,
}) => (
  <div className={`tabgroup-container ${className}`}>
    <ProfileCard fullName={user.fullName} profileUrl={user.profileUrl} blurb={user.blurb} portfolioUrl={user.portfolioUrl} username={user.username} numPosts={user.numPosts} uid={user.uid} />
    <TabContainer activeTab={activeTab} setActiveTab={setActiveTab}>{children}</TabContainer>
  </div>

);

export default TabGroup;
