export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-navy">
            THE AD ENGINE
          </p>

          <div className="flex items-center gap-8">
            {["Packages", "Results", "FAQ", "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="text-xs text-muted hover:text-navy transition-colors tracking-wide"
              >
                {label}
              </a>
            ))}
          </div>

          <p className="text-[11px] text-muted-foreground">
            © 2026 The Ad Engine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
