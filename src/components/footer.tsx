export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-bold tracking-tight">THE AD ENGINE</p>

          <div className="flex items-center gap-8">
            <a
              href="#packages"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Packages
            </a>
            <a
              href="#results"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Results
            </a>
            <a
              href="#faq"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            © 2026 The Ad Engine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
