
import React from 'react';

const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Deep space gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/30 via-black to-black" />
      
      {/* Rotating galaxy */}
      <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 animate-spin" style={{ animationDuration: '60s' }}>
        <div className="w-full h-full rounded-full bg-gradient-conic from-purple-500/20 via-blue-500/20 via-pink-500/20 to-purple-500/20 blur-sm" />
      </div>
      
      {/* Smaller rotating galaxies */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 animate-spin opacity-60" style={{ animationDuration: '40s', animationDirection: 'reverse' }}>
        <div className="w-full h-full rounded-full bg-gradient-conic from-cyan-400/30 to-blue-600/30 blur-sm" />
      </div>
      
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 animate-spin opacity-40" style={{ animationDuration: '50s' }}>
        <div className="w-full h-full rounded-full bg-gradient-conic from-pink-400/30 to-purple-600/30 blur-sm" />
      </div>
      
      {/* Orbiting planets */}
      <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 animate-spin" style={{ animationDuration: '45s' }}>
        <div className="absolute -top-2 left-1/2 w-4 h-4 bg-gradient-to-br from-red-400 to-red-600 rounded-full shadow-lg shadow-red-500/50" />
        <div className="absolute top-1/2 -right-2 w-3 h-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg shadow-blue-500/50" />
        <div className="absolute -bottom-2 left-1/2 w-5 h-5 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full shadow-lg shadow-yellow-500/50" />
        <div className="absolute top-1/2 -left-2 w-2 h-2 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg shadow-green-500/50" />
      </div>
      
      {/* Asteroid belt */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 animate-spin" style={{ animationDuration: '80s' }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gray-400 rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${i * 18}deg) translateX(250px) translateY(-50%)`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
      
      {/* Floating space debris */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-gray-300 rounded transform rotate-45 animate-bounce opacity-70" style={{ animationDelay: '0s', animationDuration: '4s' }} />
        <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded animate-pulse opacity-80" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-3 h-1 bg-gray-400 transform -rotate-12 animate-bounce opacity-60" style={{ animationDelay: '2s', animationDuration: '6s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300 rounded animate-ping opacity-50" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 right-1/2 w-2 h-1 bg-purple-300 transform rotate-45 animate-pulse opacity-60" style={{ animationDelay: '3s' }} />
      </div>
      
      {/* Nebula clouds */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-radial from-purple-500/10 via-pink-500/5 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-20 left-20 w-60 h-32 bg-gradient-radial from-blue-500/10 via-cyan-500/5 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/4 w-32 h-48 bg-gradient-radial from-green-500/8 via-emerald-500/4 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
      
      {/* Twinkling stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3 + Math.random() * 0.7
            }}
          />
        ))}
      </div>
      
      {/* Shooting stars */}
      <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDuration: '3s' }}>
        <div className="absolute w-20 h-px bg-gradient-to-r from-white to-transparent -translate-y-1/2" />
      </div>
      <div className="absolute bottom-20 right-20 w-1 h-1 bg-blue-300 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '2s' }}>
        <div className="absolute w-16 h-px bg-gradient-to-r from-blue-300 to-transparent -translate-y-1/2 rotate-45" />
      </div>
    </div>
  );
};

export default Background3D;
