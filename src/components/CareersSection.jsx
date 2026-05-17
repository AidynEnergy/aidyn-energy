import { CheckCircle2, HardHat } from "lucide-react";

const traits = [
  "Reliable",
  "Drug-free",
  "Clean background",
  "Willing to travel",
  "Coachable",
  "Safety-minded",
  "Common sense",
  "Ready to work",
];

export default function CareersSection() {
  return (
    <section id="careers" className="border-t border-slate-200 bg-white px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#29b6c1]">Careers</p>
          <h2 className="mt-3 text-3xl font-bold text-[#063b3d] md:text-4xl">
            Start in renewables. Build a real trade.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            We are growing BESS and solar field crews. Strong work ethic, clean background, and
            willingness to travel matter more than a long resume.
          </p>
          <a
            href="mailto:careers@aidynenergy.com"
            className="mt-8 inline-flex rounded-full bg-[#063b3d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#08777c]"
          >
            Email careers@aidynenergy.com
          </a>
        </div>
        <div className="rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-200">
          <HardHat className="text-[#08777c]" size={36} />
          <h3 className="mt-4 text-xl font-bold text-[#063b3d]">What we look for</h3>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {traits.map((trait) => (
              <li key={trait} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 size={16} className="shrink-0 text-[#29b6c1]" />
                {trait}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
