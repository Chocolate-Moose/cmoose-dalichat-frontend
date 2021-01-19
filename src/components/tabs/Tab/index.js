import React from 'react';
import './Tab.scss';

const Tab = ({ label, isActive, onClick }) => (
  <div className="tab-container">
    <button type="button" onClick={onClick} className={isActive ? 'active' : ''}>
      {label}
    </button>
  </div>
);

export default Tab;
