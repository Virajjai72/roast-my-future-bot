
import React from 'react';

const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 animate-pulse" />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {/* Large floating cubes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 transform rotate-45 animate-bounce" style={{ animationDelay: '0s', animationDuration: '6s' }} />
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 transform rotate-12 animate-bounce" style={{ animationDelay: '2s', animationDuration: '8s' }} />
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-br from-red-500/20 to-orange-500/20 transform -rotate-12 animate-bounce" style={{ animationDelay: '4s', animationDuration: '7s' }} />
        
        {/* Medium floating elements */}
        <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-14 h-14 bg-gradient-to-br from-yellow-500/30 to-amber-500/30 transform rotate-45 animate-pulse" style={{ animationDelay: '3s' }} />
        
        {/* Small floating particles */}
        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-gradient-to-br from-blue-400/40 to-cyan-400/40 rounded-full animate-ping" style={{ animationDelay: '2.5s' }} />
        <div className="absolute bottom-1/3 right-1/2 w-10 h-10 bg-gradient-to-br from-red-400/40 to-orange-400/40 rounded-full animate-ping" style={{ animationDelay: '4.5s' }} />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Animated light beams */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-pulse" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-pink-500/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default Background3D;
