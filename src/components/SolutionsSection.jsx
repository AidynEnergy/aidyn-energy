import { solutionCards } from "../data/content";

export default function SolutionsSection() {
  return (
    <section id="solutions" className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#063b3d] md:text-4xl">
              Field services we deliver
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Startup support through closeout - scoped to what your site actually needs.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 rounded-full border-2 border-[#08777c] px-6 py-2.5 text-sm font-semibold text-[#08777c] transition hover:bg-[#08777c] hover:text-white"
          >
            Get a crew on site
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutionCards.map((card, i) => (
            <article
              key={card.title}
              className="rounded-xl bg-gradient-to-br from-slate-50 to-white p-6 ring-1 ring-slate-200"
            >
              <span className="text-xs font-bold text-[#29b6c1]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-bold text-[#063b3d]">{card.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
