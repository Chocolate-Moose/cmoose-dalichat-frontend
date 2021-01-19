/* eslint-disable no-console */
import React from 'react';
import Button from '../generic/Button';
import ProfileIcon from '../profile/ProfileIcon';
import ProfileCard from '../profile/ProfileCard';
import ErrorPopover from '../generic/ErrorPopover';
import LoadingIcon from '../generic/LoadingIcon';
import Tab from '../tabs/Tab';
import TabContainer from '../tabs/TabContainer';
import TabGroup from '../tabs/TabGroup';

const App = () => (
  <div>
    Welcome to DALIChat!
    <Button label="test label" onClick={() => console.log('clicked!')} />
    <ProfileIcon imgUrl="#" username="jessica" uid="f003wz4" />
    <ProfileCard fullName="Jessica Cheng"
      profileUrl="jessica.me"
      username="potatoes"
      blurb="a food enthusiast"
      portfolioUrl="https://portfolio.me"
      numPosts="123"
      uid="f003wz4"
    />
    <Tab label="popular" isActive="true" onClick={() => console.log('beeboo')} />
    <ErrorPopover errorMessage="help" clearCurrent={() => console.log('ji')} />
    <LoadingIcon />
    <TabContainer activeTab="New Posts" setActiveTab="{setActiveTab}">
      <div label="New Posts">Content of New Posts tab</div>
      <div label="Popular Posts">Content of Popular Posts tab</div>
    </TabContainer>
    <TabGroup user={{
      fullName: 'Jessica', profileUrl: 'profile.com', blurb: 'nap taker', portfolioUrl: 'profile.com', username: 'chocolate-moose', numPosts: '93', uid: 'f003wz4',
    }}
      activeTab="New Posts"
      setActiveTab="{setActiveTab}"
    >
      <div label="New Posts">Content of New Posts tab</div>
      <div label="Popular Posts">Content of Popular Posts tab</div>
    </TabGroup>
  </div>

);

export default App;
