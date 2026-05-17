import { useState } from "react";
import { industryPanels } from "../data/content";

export default function IndustrySection() {
  const [activeId, setActiveId] = useState(industryPanels[0].id);
  const active = industryPanels.find((p) => p.id === activeId) ?? industryPanels[0];

  return (
    <section id="industries" className="bg-slate-50 px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-[#063b3d] md:text-4xl">
          Markets we serve
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Select a market to see how Aidyn supports owners, EPCs, and integrators in the field.
        </p>

        <div className="mt-10 flex flex-wrap gap-2 border-b border-slate-200 pb-px">
          {industryPanels.map((panel) => (
            <button
              key={panel.id}
              type="button"
              onClick={() => setActiveId(panel.id)}
              className={`rounded-t-lg px-4 py-3 text-sm font-semibold transition ${
                activeId === panel.id
                  ? "bg-white text-[#08777c] shadow-sm"
                  : "text-slate-600 hover:bg-white/60 hover:text-[#063b3d]"
              }`}
            >
              {panel.title}
            </button>
          ))}
        </div>

        <div className="grid gap-8 rounded-b-2xl rounded-tr-2xl bg-white p-8 shadow-sm lg:grid-cols-2 lg:p-10">
          <div>
            <h3 className="text-2xl font-bold text-[#063b3d]">{active.title}</h3>
            <p className="mt-4 text-base leading-8 text-slate-600">{active.description}</p>
            <a
              href="#contact"
              className="mt-8 inline-block text-sm font-semibold text-[#08777c] underline-offset-4 hover:underline"
            >
              Discuss this market
            </a>
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-xl lg:min-h-[320px]">
            <img src={active.image} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
