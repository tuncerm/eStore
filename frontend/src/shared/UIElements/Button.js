import React from 'react';

import './Button.css';

const Button = ({children, size='md', mode='primary', inverse, type = "button", onClick, disabled}) => {
  return (
    <button 
      className={`btn btn-${size} btn-${mode} ${inverse && 'btn-inverse'}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
};

export default Button;