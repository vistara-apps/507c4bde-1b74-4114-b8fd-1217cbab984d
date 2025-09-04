'use client';

interface TagProps {
  children: string;
  variant?: 'skill' | 'task-type';
  className?: string;
}

export function Tag({ children, variant = 'skill', className = '' }: TagProps) {
  const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
  
  const variants = {
    skill: 'bg-blue-100 text-blue-800 border border-blue-200',
    'task-type': 'bg-purple-100 text-purple-800 border border-purple-200'
  };
  
  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
