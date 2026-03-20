export function Footer() {
  return (
    <footer className="py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass rounded-2xl px-6 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-cal text-sm text-gradient">The Ad Engine</p>
            <div className="flex items-center gap-6">
              {["Packages", "Results", "FAQ"].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="text-[12px] text-muted hover:text-navy transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
            <p className="text-[11px] text-muted-foreground">
              © 2026 The Ad Engine
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
