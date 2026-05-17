import { CheckCircle2, Clock, Cpu, Shield } from "lucide-react";
import { values } from "../data/content";

const iconMap = {
  shield: Shield,
  clock: Clock,
  cpu: Cpu,
  check: CheckCircle2,
};

export default function AboutSection() {
  return (
    <section id="approach" className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#29b6c1]">About Aidyn</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#063b3d] md:text-4xl">
            Built for jobsites, not boardrooms.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Aidyn Energy is a field services company for battery storage, utility-scale solar, and
            data center power. We show up with the PPE, tools, and communication habits that keep
            projects moving safely and close out clean.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {values.map((item) => {
            const Icon = iconMap[item.icon] ?? Shield;
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-200 p-7 transition hover:border-[#29b6c1]/30 hover:shadow-md"
              >
                <Icon className="text-[#08777c]" size={28} strokeWidth={1.5} />
                <h3 className="mt-4 text-lg font-bold text-[#063b3d]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
