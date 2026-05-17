import { capabilities } from "../data/content";

export default function CapabilitiesStrip() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[#08777c]">
          On-site capabilities
        </p>
        <ul className="mt-6 flex flex-wrap justify-center gap-3">
          {capabilities.map((cap) => (
            <li
              key={cap}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
            >
              {cap}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
