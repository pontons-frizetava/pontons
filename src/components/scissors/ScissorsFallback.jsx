/** Static stand-in shown only if WebGL fails to initialize. */
export function ScissorsFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="absolute h-64 w-64 animate-pulse-glow rounded-full bg-accent/25 blur-[80px] md:h-96 md:w-96" />
      <img
        src="/images/scissors-fallback.jpg"
        alt="Pontons frizieru šķēres"
        className="animate-float-slow relative h-full w-full max-w-md object-contain drop-shadow-[0_0_50px_rgba(47,125,255,0.35)] md:max-w-lg"
      />
    </div>
  )
}
