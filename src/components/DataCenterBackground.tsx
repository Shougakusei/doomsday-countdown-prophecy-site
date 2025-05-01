
import React, { useEffect } from 'react';

const DataCenterBackground: React.FC = () => {
  useEffect(() => {
    // Create missiles animation
    const createMissile = () => {
      const container = document.getElementById('missiles-container');
      if (!container) return;
      
      const missile = document.createElement('div');
      missile.className = 'missile';
      
      // Random position and delay
      const startX = Math.random() * 100;
      const endX = startX + (Math.random() * 20 - 10);
      const duration = 3 + Math.random() * 4;
      const delay = Math.random() * 5;
      
      missile.style.left = `${startX}%`;
      missile.style.animationDuration = `${duration}s`;
      missile.style.animationDelay = `${delay}s`;
      
      // Create trail
      const trail = document.createElement('div');
      trail.className = 'missile-trail';
      
      missile.appendChild(trail);
      container.appendChild(missile);
      
      // Remove after animation completes
      setTimeout(() => {
        if (container.contains(missile)) {
          container.removeChild(missile);
        }
        
        // Create explosion
        const explosion = document.createElement('div');
        explosion.className = 'explosion';
        explosion.style.left = `${endX}%`;
        explosion.style.top = `${80 + Math.random() * 15}%`;
        container.appendChild(explosion);
        
        // Remove explosion after animation
        setTimeout(() => {
          if (container.contains(explosion)) {
            container.removeChild(explosion);
          }
        }, 1000);
        
      }, (duration + delay) * 1000);
    };
    
    // Create data centers
    const createDataCenters = () => {
      const container = document.getElementById('data-centers-container');
      if (!container) return;
      
      // Clear existing
      container.innerHTML = '';
      
      for (let i = 0; i < 8; i++) {
        const datacenter = document.createElement('div');
        datacenter.className = 'data-center';
        
        // Random positioning
        datacenter.style.left = `${Math.random() * 90}%`;
        datacenter.style.bottom = `${Math.random() * 20}%`;
        datacenter.style.width = `${30 + Math.random() * 40}px`;
        datacenter.style.height = `${80 + Math.random() * 120}px`;
        datacenter.style.opacity = `${0.3 + Math.random() * 0.4}`;
        
        // Windows
        const floors = Math.floor(4 + Math.random() * 4);
        for (let f = 0; f < floors; f++) {
          const floor = document.createElement('div');
          floor.className = 'data-center-floor';
          datacenter.appendChild(floor);
        }
        
        container.appendChild(datacenter);
      }
    };
    
    createDataCenters();
    
    // Launch missiles periodically
    const missileInterval = setInterval(createMissile, 800);
    
    // Handle resize
    const handleResize = () => {
      createDataCenters();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(missileInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 z-[-2] overflow-hidden pointer-events-none">
      <div id="data-centers-container" className="absolute inset-0"></div>
      <div id="missiles-container" className="absolute inset-0"></div>
    </div>
  );
};

export default DataCenterBackground;
