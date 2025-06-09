
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative group`}>
      <div className="w-full h-full relative">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-2 border-electric animate-rotate-y opacity-80">
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-electric rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse-glow"></div>
        </div>
        
        {/* Middle ring */}
        <div className="absolute inset-2 rounded-full border border-cyber animate-rotate-y opacity-60" style={{ animationDirection: 'reverse', animationDuration: '15s' }}>
          <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-cyber rounded-full animate-pulse"></div>
        </div>
        
        {/* Inner core */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-electric via-cyber to-neon animate-pulse-glow">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-transparent via-background/20 to-background/40"></div>
        </div>
        
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      </div>
      
      {/* Hover effect */}
      <div className="absolute inset-0 rounded-full bg-electric/0 group-hover:bg-electric/10 transition-all duration-300 group-hover:scale-110"></div>
    </div>
  );
};

export default Logo;
