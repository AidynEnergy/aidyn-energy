import { ArrowRight } from "lucide-react";
import { heroStats } from "../data/content";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 40%, #29b6c1 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 20% 80%, #08777c 0%, transparent 50%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10 lg:py-28">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#29b6c1]">
            Field services
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl lg:text-[3.25rem]">
            Reliable crews for battery, solar, and data center power.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
            Aidyn Energy supports commissioning, maintenance, troubleshooting, and closeout on
            active jobsites - built for the equipment, schedules, and safety standards your projects
            demand.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#29b6c1] to-[#08777c] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
            >
              Request field support
              <ArrowRight size={18} />
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View services
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:p-10">
          <p className="text-sm font-semibold text-[#29b6c1]">Where we work</p>
          <ul className="mt-6 space-y-5">
            {heroStats.map((stat) => (
              <li key={stat.label} className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0">
                <span className="text-sm text-slate-400">{stat.label}</span>
                <span className="text-right font-semibold text-white">{stat.value}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-6 text-slate-400">
            Texas-based crews, travel-ready for utility-scale BESS, solar inverter, and critical
            power infrastructure nationwide.
          </p>
        </div>
      </div>
    </section>
  );
}
