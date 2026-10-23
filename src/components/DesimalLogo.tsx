import React from 'react';

interface DesimalLogoProps {
  className?: string;
  showTagline?: boolean;
  light?: boolean;
}

export const DesimalLogo: React.FC<DesimalLogoProps> = ({
  className = 'h-10',
  showTagline = true,
  light = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Official Desimal Logo graphic cropped to bottom active mark */}
      <div className="h-full aspect-[3.4/1] relative overflow-hidden flex items-end shrink-0">
        <img
          src="/assets/aistudio/Logo_Desimal_1c1c7345.png"
          alt="Logo Resmi Desimal 89.5 FM"
          className={`w-full h-[320%] object-cover object-bottom ${light ? 'brightness-125 contrast-125' : ''}`}
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
};
