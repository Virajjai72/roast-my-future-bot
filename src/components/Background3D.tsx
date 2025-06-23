
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const Background3D = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Base gradient background */}
      <div className={`absolute inset-0 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800' 
          : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
      }`} />
      
      {/* Animated stars/particles */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              theme === 'dark' ? 'bg-white' : 'bg-purple-400'
            } animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Floating orbs */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full blur-xl opacity-20 ${
              theme === 'dark'
                ? i % 2 === 0 ? 'bg-purple-500' : 'bg-cyan-500'
                : i % 2 === 0 ? 'bg-purple-300' : 'bg-pink-300'
            }`}
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${10 + (i * 10)}%`,
              width: `${200 + Math.random() * 100}px`,
              height: `${200 + Math.random() * 100}px`,
              animation: `float ${8 + i}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>
      
      {/* Galaxy spiral effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`relative w-96 h-96 ${
          theme === 'dark' 
            ? 'bg-gradient-radial from-purple-500/10 via-cyan-500/5 to-transparent' 
            : 'bg-gradient-radial from-purple-300/20 via-pink-300/10 to-transparent'
        } rounded-full animate-spin`} style={{ animationDuration: '30s' }}>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`absolute inset-4 rounded-full border ${
                theme === 'dark' ? 'border-purple-500/20' : 'border-purple-400/30'
              }`}
              style={{
                animation: `spin ${20 + i * 5}s linear infinite reverse`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Background3D;
