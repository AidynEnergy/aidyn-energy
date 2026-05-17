import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-slate-50 px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#063b3d] md:text-4xl">
              Tell us about your site
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Share location, equipment type, schedule, and scope. We will follow up on
              commissioning, troubleshooting, maintenance, or closeout needs.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="tel:9407813412"
              className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#29b6c1]/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#29b6c1]/10 text-[#08777c]">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Phone</p>
                <p className="font-semibold text-slate-900">940-781-3412</p>
              </div>
            </a>
            <a
              href="mailto:info@aidynenergy.com"
              className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#29b6c1]/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#29b6c1]/10 text-[#08777c]">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Email</p>
                <p className="font-semibold text-slate-900">info@aidynenergy.com</p>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#29b6c1]/10 text-[#08777c]">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Based in</p>
                <p className="font-semibold text-slate-900">Wichita Falls, Texas</p>
                <p className="mt-1 text-sm text-slate-600">Travel-ready nationwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
