export function FlowLine({ delay = 0 }: { delay?: number }) {
  return (
    <div className="relative h-10 w-px overflow-hidden bg-border">
      <span
        className="absolute inset-x-0 top-full h-6 bg-gradient-to-t from-primary via-primary/60 to-transparent"
        style={{
          animation: "flow-up 2.2s ease-in-out infinite",
          animationDelay: `${delay}ms`,
        }}
      />
    </div>
  )
}
