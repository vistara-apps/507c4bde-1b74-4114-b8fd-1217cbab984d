'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'outlined';
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ children, variant = 'default', className = '', hover = false, onClick }: CardProps) {
  const baseStyles = 'rounded-lg p-6 transition-all duration-200';
  
  const variants = {
    default: 'glass-card',
    outlined: 'border border-white/20 bg-white/5'
  };
  
  const hoverStyles = hover ? 'task-card-hover cursor-pointer' : '';
  
  return (
    <div 
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
