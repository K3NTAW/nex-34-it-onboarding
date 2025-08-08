"use client";

import { useEffect, useState } from "react";

interface FireworksProps {
  isVisible: boolean;
  onComplete?: () => void;
}

export default function Fireworks({ isVisible, onComplete }: FireworksProps) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; color: string; delay: number }>>([]);

  useEffect(() => {
    if (isVisible) {
      // Create multiple firework particles
      const newParticles = [];
      const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff8800', '#8800ff'];
      
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 0.5
        });
      }
      
      setParticles(newParticles);
      
      // Hide fireworks after animation completes
      const timer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full animate-firework"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: particle.color,
            animationDelay: `${particle.delay}s`,
            animationDuration: '2s'
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-6xl font-bold text-white animate-bounce">
          🎉 Success 🎉
        </div>
      </div>
    </div>
  );
} 