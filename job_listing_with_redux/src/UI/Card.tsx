import React from 'react';

interface CardProps  {
  children: React.ReactNode;
  isFeatured: boolean;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, isFeatured, className }) => {
  return (
    <div
      className={`card${isFeatured ? ' card--featured' : ''}${className ? ' ' + className : ''}`}
    >
      {children}
    </div>
  );
};

export { Card };
