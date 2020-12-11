import React from 'react';
import './Card.css';

export default ({ title, children, cor }) => {
  return (
    <div className={`Card ${cor}`}>
      <div className="Header">
        <span className="Title">{title}</span>
      </div>
      <div className="Content">{children}</div>
    </div>
  );
};
