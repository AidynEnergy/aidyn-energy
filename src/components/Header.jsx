import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../data/content";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <a href="#home" className="shrink-0">
          <img src="/aidyn-logo.png" alt="Aidyn Energy" className="h-11 w-auto md:h-12" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-[#08777c]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:9407813412" className="text-sm font-medium text-slate-600 hover:text-[#063b3d]">
            940-781-3412
          </a>
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-[#29b6c1] to-[#08777c] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
          >
            Request support
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-slate-100 px-6 py-4 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block border-b border-slate-50 py-3 font-medium text-slate-800 last:border-0"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 block rounded-full bg-gradient-to-r from-[#29b6c1] to-[#08777c] px-5 py-3 text-center text-sm font-semibold text-white"
            onClick={() => setMobileOpen(false)}
          >
            Request support
          </a>
        </nav>
      )}
    </header>
  );
}
