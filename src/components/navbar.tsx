"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Process", href: "#process" },
    { label: "Packages", href: "#packages" },
    { label: "Results", href: "#results" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <a
          href="#"
          className="text-sm font-bold tracking-[0.15em] uppercase text-navy"
        >
          THE AD ENGINE
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-muted hover:text-navy transition-colors tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#packages"
            className="bg-navy text-white text-[13px] font-medium px-6 py-2.5 rounded-full hover:bg-navy-light transition-colors tracking-wide"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-navy"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-white"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted hover:text-navy transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#packages"
                onClick={() => setOpen(false)}
                className="bg-navy text-white text-sm font-medium px-6 py-3 rounded-full text-center hover:bg-navy-light transition-colors"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
