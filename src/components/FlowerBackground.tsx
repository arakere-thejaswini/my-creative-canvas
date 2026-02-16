const FlowerBackground = () => {
  const flowers = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 90 + 2}%`,
    left: `${Math.random() * 90 + 2}%`,
    size: 40 + Math.random() * 40,
    opacity: 0.12 + Math.random() * 0.1,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {flowers.map((f) => (
        <svg
          key={f.id}
          className="absolute text-flower"
          style={{
            top: f.top,
            left: f.left,
            width: f.size,
            height: f.size,
            opacity: f.opacity,
            transform: `rotate(${f.rotation}deg)`,
          }}
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <ellipse
              key={angle}
              cx="50"
              cy="30"
              rx="18"
              ry="25"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
          <circle cx="50" cy="50" r="12" />
        </svg>
      ))}
    </div>
  );
};

export default FlowerBackground;
