

export default function SectionBackground({ image, opacity = 0.05, className = '', children }) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: opacity,
          pointerEvents: 'none'
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
