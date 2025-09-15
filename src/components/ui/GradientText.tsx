import React from 'react';

type GradientTextProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
};

const GradientText: React.FC<GradientTextProps> = ({ 
  children, 
  className = '',
  variant = 'primary'
}) => {
  const gradients = {
    primary: 'from-neon-pink via-neon-magenta to-white',
    secondary: 'from-neon-glow via-secondary-500 to-accent-400'
  };

  return (
    <span className={`bg-gradient-to-r ${gradients[variant]} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};

export default GradientText;