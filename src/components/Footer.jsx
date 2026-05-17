import { navItems } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-[#063b3d] px-6 py-12 text-white lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
        <a href="#home">
          <img src="/aidyn-logo.png" alt="Aidyn Energy" className="h-10 w-auto" />
        </a>
        <nav className="flex flex-wrap justify-center gap-6 md:justify-end">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-white/70 hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <p className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-8 text-center text-sm text-white/50">
        &copy; {new Date().getFullYear()} Aidyn Energy. BESS, solar inverter, and data center field services.
      </p>
    </footer>
  );
}
