import React from 'react';
import './ErrorPopover.scss';

const ErrorPopover = ({ errorMessage, clearCurrent, errorTitle = '' }) => (
  <div className="error-popover-container">
    <div className="error-title-container">
      <svg />
      <p className="error-title">Error</p>
    </div>

    <p className="error-content">{errorMessage}</p>
  </div>

);

export default ErrorPopover;
