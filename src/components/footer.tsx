export function Footer() {
  return (
    <footer className="py-12 border-t border-gray-200/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src="/logo.png" alt="Angle Ads" className="h-7" />
          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-8">
            {["Process", "Packages", "Results", "FAQ"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="text-sm text-gray-400 hover:text-[#1a1a1a] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-400">&copy; 2026 Angle Ads</p>
        </div>
      </div>
    </footer>
  );
}
