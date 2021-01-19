import React from 'react'; // This is needed whenever using JSX syntax
import './Button.scss'; // Tells browser how to style the component

const Button = ({
  label, onClick, isSubmit = false, className = '',
}) => (
  <button
    type={isSubmit ? 'submit' : 'button'}
      // why do we use ticks here?
    className={`button-container ${className}`}
    onClick={isSubmit ? () => {} : onClick}
  >
    {label}
  </button>
);

export default Button;
