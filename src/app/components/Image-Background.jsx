'use client';

export default function SectionBackground({
  image,
  imageOpacity = 1,                // opacity for the background IMAGE itself
  overlayColor = 'rgba(255,255,255,1)', // light grey overlay
  overlayOpacity = 0.7,            // strength of the overlay
  overlayGradient,                 // e.g. 'linear-gradient(180deg, rgba(245,245,245,.65), rgba(245,245,245,.25))'
  className = '',
  children,
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: imageOpacity,
          pointerEvents: 'none',
        }}
      />

      {/* Light grey overlay (sits ABOVE image, BELOW content) */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: overlayGradient ? overlayGradient : overlayColor,
          opacity: overlayOpacity,
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
