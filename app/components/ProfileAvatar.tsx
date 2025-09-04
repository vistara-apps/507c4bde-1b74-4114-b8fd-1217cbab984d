'use client';

interface ProfileAvatarProps {
  src?: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function ProfileAvatar({ src, alt, size = 'md', className = '' }: ProfileAvatarProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };
  
  return (
    <div className={`${sizes[size]} rounded-full overflow-hidden bg-gray-300 flex items-center justify-center ${className}`}>
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span className="text-gray-600 font-medium text-sm">
          {alt.charAt(0).toUpperCase()}
        </span>
      )}
    </div>
  );
}
