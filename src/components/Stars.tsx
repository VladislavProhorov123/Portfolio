export default function Stars() {
  const stars = Array.from({ length: 100 });
  return (
    <>
      {stars.map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-violet-400 animate-star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            opacity: Math.random() * 0.5 + 0.2,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </>
  );
}
