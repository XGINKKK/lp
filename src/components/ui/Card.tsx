import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`glass-card tilt-card p-8 md:p-10 rounded-xl group ${className}`}>
      {children}
    </div>
  );
};

export default Card;