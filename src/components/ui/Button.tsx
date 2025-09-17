import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
}) => {
  const baseClasses = 'relative font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-all duration-300 text-white overflow-hidden group magnetic-button';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-neon-pink to-primary-600 hover:from-neon-glow hover:to-primary-500 shadow-lg shadow-neon-pink/25 hover:scale-[1.02] hover:shadow-xl hover:shadow-neon-pink/40',
    secondary: 'bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-400 hover:to-secondary-500 hover:scale-[1.02]',
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl animate-pulse" />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center">
        {children}
      </div>
      
      {/* Hover shine effect */}
      <div 
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
    </button>
  );
};

export default Button;