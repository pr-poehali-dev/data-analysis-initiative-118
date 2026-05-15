export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-1">
        <span className="text-xl font-bold text-primary tracking-widest">SWD</span>
        <span className="text-xl font-light text-muted-foreground mx-1">|</span>
        <span className="text-xl font-semibold tracking-tight">Digital Grant</span>
      </div>
    </div>
  )
}
