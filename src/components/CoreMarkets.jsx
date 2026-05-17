import { BatteryCharging, Building2, Sun } from "lucide-react";
import { heroServices } from "../data/content";

const icons = {
  battery: BatteryCharging,
  solar: Sun,
  datacenter: Building2,
};

export default function CoreMarkets() {
  return (
    <section className="bg-white px-6 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-[#063b3d] md:text-4xl">
            Three markets. One field-ready team.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            We focus where storage, generation, and critical power overlap - not every industry under
            the sun.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {heroServices.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-[#29b6c1]/40 hover:shadow-lg"
              >
                <div
                  className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#29b6c1] to-[#08777c] opacity-0 transition group-hover:opacity-100"
                  style={{ opacity: i === 0 ? 1 : undefined }}
                />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#29b6c1]/15 to-[#08777c]/15 text-[#08777c]">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#063b3d]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
