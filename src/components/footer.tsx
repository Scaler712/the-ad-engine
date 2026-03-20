export function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-cal text-base text-[#1a1a1a]">The Ad Engine</p>
          <div className="flex items-center gap-8">
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
          <p className="text-xs text-gray-400">
            &copy; 2026 The Ad Engine
          </p>
        </div>
      </div>
    </footer>
  );
}
