import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BatteryCharging,
  Building2,
  Cable,
  CheckCircle2,
  ClipboardCheck,
  Cpu,
  HardHat,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sun,
  Wrench,
  Zap,
} from "lucide-react";

const nav = ["Services", "Industries", "Approach", "Safety", "Careers", "Contact"];

const solutions = [
  "BESS Commissioning",
  "Preventive & Corrective Maintenance",
  "Solar Inverter Services",
  "Troubleshooting & Repair",
  "Battery Container Inspections",
  "SCADA / Communications Checks",
  "Data Center Power Services",
  "Punch-List Closeout",
];

const industries = [
  {
    icon: BatteryCharging,
    title: "BESS OEMs & Integrators",
    text: "Field-ready crews for battery storage commissioning, inspections, maintenance, troubleshooting, warranty campaigns, and service support.",
  },
  {
    icon: Sun,
    title: "Solar EPCs & Inverter OEMs",
    text: "Utility-scale solar support for inverter startup, alarms, communications, corrective work, inspections, and site closeout.",
  },
  {
    icon: Building2,
    title: "Data Centers & Critical Facilities",
    text: "Power infrastructure support for facilities where batteries, backup power, uptime, documentation, and response time matter.",
  },
  {
    icon: Zap,
    title: "Asset Owners & Operators",
    text: "Maintenance execution, issue documentation, inspections, corrective work, and site readiness support for operating assets.",
  },
];

const approach = [
  {
    title: "Field Execution",
    text: "Technicians who understand active jobsites, equipment rooms, inverter pads, battery containers, project schedules, and customer procedures.",
  },
  {
    title: "Safety Culture",
    text: "Proper PPE, hazard awareness, controlled work habits, daily communication, and a site-first mindset on every task.",
  },
  {
    title: "Technical Readiness",
    text: "Meters, insulated tooling, torque tools, CANbus / RS485 adapters, and practical diagnostic capability for real field issues.",
  },
  {
    title: "Clean Closeout",
    text: "Photos, punch-list status, task completion notes, issue logs, and clear communication so customers know exactly where the job stands.",
  },
];



function Logo({ light = false }) {
  return (
    <div className="flex items-center gap-4">
      <img
        src="/aidyn-logo.png"
        alt="Aidyn Energy logo"
        className="h-14 w-auto object-contain"
      />
      <div className="sr-only">Aidyn Energy</div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, text, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#149aa0]">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.035em] text-[#063b3d] md:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 text-lg leading-8 text-slate-700">{text}</p>}
    </div>
  );
}

function IndustryCard({ item }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-xl cursor-pointer"
    >
      <div className="flex h-12 w-12 items-center justify-center bg-[#e8f6f6] text-[#08777c]">
        <Icon size={26} />
      </div>
      <h3 className="mt-6 text-2xl font-extrabold tracking-[-0.025em] text-slate-950">{item.title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-600">{item.text}</p>
    </motion.div>
  );
}

function ApproachRow({ item, index }) {
  return (
    <div className="border-b border-slate-300 py-6">
      <button className="group flex w-full items-start justify-between gap-6 text-left">
        <div>
          <p className="text-sm font-bold tracking-[0.22em] text-[#149aa0]">0{index + 1}</p>
          <h3 className="mt-2 text-3xl font-extrabold tracking-[-0.035em] text-slate-950">{item.title}</h3>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">{item.text}</p>
        </div>
        <span className="text-4xl font-light text-[#063b3d] transition group-hover:rotate-45">+</span>
      </button>
    </div>
  );
}

export default function AidynEnergyWebsite() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full mx-auto mb-4"
            />
            <p className="text-blue-400 text-xl font-semibold">Loading Aidyn Energy</p>
          </motion.div>
        </motion.div>
      ) : (
        <>
          {/* Scroll Progress Indicator */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 z-50 origin-left"
            style={{ scaleX: scrollYProgress }}
          />

          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-white text-slate-950"
          >
      <header className="fixed top-0 z-50 w-full glass-effect border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#home"
            className="block"
          >
            <Logo />
          </motion.a>

          <nav className="hidden items-center gap-10 lg:flex">
            {nav.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-base font-medium text-white/90 transition hover:text-white"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:9407813412"
            className="hidden border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 md:inline-flex"
          >
            940-781-3412
          </motion.a>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.8),rgba(0,0,0,.4)),url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20" />
        </motion.div>

        {/* Elegant floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
              <p className="text-sm font-medium tracking-wide text-white/90">BESS • Solar Inverters • Critical Power</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl md:text-8xl font-extrabold leading-[0.9] tracking-[-0.05em] text-white mb-6"
            >
              Field services for{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                renewable
              </span>{" "}
              and mission-critical power infrastructure.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl leading-8 text-white/80 max-w-4xl mx-auto mb-12"
            >
              Aidyn Energy provides field-ready crews for commissioning, troubleshooting, maintenance, inspections, corrective work, and project closeout across BESS, solar inverter, and data center power systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold uppercase tracking-wide text-white rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                <span className="relative z-10">Request Field Support</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="group inline-flex items-center justify-center gap-3 border-2 border-white/30 px-8 py-4 text-lg font-semibold uppercase tracking-wide text-white rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                View Services
                <motion.div
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="relative min-h-[285px] overflow-hidden bg-slate-900">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.55)),url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1300&q=80')] bg-cover bg-center" />
            <div className="relative flex h-full flex-col justify-end p-8">
              <p className="text-2xl font-semibold tracking-[0.18em] text-[#f58220]">BESS</p>
              <h3 className="mt-2 text-4xl font-extrabold text-white">Field Execution</h3>
            </div>
          </div>
          <div className="relative min-h-[285px] overflow-hidden bg-slate-900">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.42),rgba(0,0,0,.55)),url('https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1300&q=80')] bg-cover bg-center" />
            <div className="relative flex h-full flex-col justify-end p-8">
              <p className="text-2xl font-semibold tracking-[0.18em] text-[#f58220]">SOLAR</p>
              <h3 className="mt-2 text-4xl font-extrabold text-white">Inverter Services</h3>
            </div>
          </div>
          <div className="relative min-h-[285px] overflow-hidden bg-slate-900">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.42),rgba(0,0,0,.55)),url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1300&q=80')] bg-cover bg-center" />
            <div className="relative flex h-full flex-col justify-end p-8">
              <p className="text-2xl font-semibold tracking-[0.18em] text-[#f58220]">POWER</p>
              <h3 className="mt-2 text-4xl font-extrabold text-white">Critical Facilities</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#17476c] px-6 py-24 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <h2 className="text-5xl font-extrabold tracking-[-0.04em] md:text-6xl">Built for the work that keeps sites online.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
              Renewable and critical power sites do not need generic labor. They need technicians who understand jobsite urgency, equipment readiness, safety expectations, and the documentation required to close work out correctly.
            </p>
            <a href="#contact" className="mt-9 inline-flex border-2 border-white px-7 py-4 font-extrabold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#17476c]">
              Contact Us
            </a>
          </div>

          <div className="relative min-h-[360px] overflow-hidden bg-slate-900 shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.2)),url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#43c4c7]">Aidyn Energy</p>
              <h3 className="mt-2 text-3xl font-extrabold">Safety. Readiness. Closeout.</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,119,198,0.05),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
              <p className="text-sm font-semibold tracking-wide text-slate-600">Solutions</p>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-[-0.04em] text-slate-900 mb-6">
              Services built around{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                BESS, solar inverter,
              </span>{" "}
              and critical power field work.
            </h2>
            <p className="text-xl leading-8 text-slate-600 max-w-4xl mx-auto">
              Aidyn Energy focuses on practical execution: startup support, inspections, diagnostics, corrective work, communication checks, maintenance tasks, and customer-directed field service work.
            </p>
          </motion.div>

          <div className="mt-20 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {solutions.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between border-b border-slate-200 py-6"
                >
                  <h3 className="text-2xl font-bold tracking-[-0.025em] text-slate-900">{item}</h3>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                    <span className="text-slate-500 font-bold">•</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white rounded-2xl premium-shadow cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <BatteryCharging size={40} className="text-blue-400 mb-6" />
                <h3 className="text-3xl font-extrabold tracking-[-0.03em] mb-4">BESS Commissioning & Maintenance</h3>
                <p className="text-base leading-7 text-slate-300">
                  Battery container inspections, BMS checks, PCS coordination, functional testing support, annual maintenance, and punch-list execution.
                </p>
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl premium-shadow cursor-pointer overflow-hidden border border-slate-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Wrench size={40} className="text-blue-600 mb-6" />
                <h3 className="text-3xl font-extrabold tracking-[-0.03em] text-slate-900 mb-4">Troubleshooting & Repair</h3>
                <p className="text-base leading-7 text-slate-600">
                  Alarm response, communication checks, CANbus / RS485 diagnostics, wiring checks, torque verification, and component replacement support.
                </p>
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl group-hover:blur-2xl transition-all" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl premium-shadow cursor-pointer overflow-hidden border border-slate-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Sun size={40} className="text-blue-600 mb-6" />
                <h3 className="text-3xl font-extrabold tracking-[-0.03em] text-slate-900 mb-4">Solar Inverter Field Support</h3>
                <p className="text-base leading-7 text-slate-600">
                  Utility-scale inverter startup checks, communication verification, corrective maintenance, inspections, and closeout support.
                </p>
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl group-hover:blur-2xl transition-all" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-orange-500 to-red-500 p-8 text-white rounded-2xl premium-shadow cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Building2 size={40} className="mb-6" />
                <h3 className="text-3xl font-extrabold tracking-[-0.03em] mb-4">Data Center Power Services</h3>
                <p className="text-base leading-7 text-orange-100">
                  Battery systems, UPS-related field work, power equipment checks, low-voltage diagnostics, and critical facility support.
                </p>
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:blur-2xl transition-all" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="industries" className="bg-slate-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Industries"
            title="Powering the markets where reliability matters most."
            text="Aidyn Energy is positioned where renewable generation, storage, inverters, batteries, backup power, and mission-critical facilities overlap."
            center
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {industries.map((item) => (
              <IndustryCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionTitle
              eyebrow="Approach"
              title="The Aidyn Energy advantage."
              text="The work is physical, technical, documented, and schedule-driven. Aidyn is built for the field, not just the office."
            />
            <div className="mt-10 overflow-hidden bg-slate-900">
              <div className="min-h-[360px] bg-[linear-gradient(rgba(0,0,0,.18),rgba(0,0,0,.35)),url('https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center" />
            </div>
          </div>
          <div className="border-t border-slate-300">
            {approach.map((item, index) => (
              <ApproachRow key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="safety" className="bg-[#063b3d] px-6 py-24 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#43c4c7]">Safety & Readiness</p>
            <h2 className="mt-4 text-5xl font-extrabold leading-tight tracking-[-0.04em] md:text-6xl">
              Safety is standard, not optional.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/85 max-w-2xl">
              Aidyn Energy delivers disciplined, reliable field service with consistent oversight and safety-first execution. Customers get trusted work quality and site protection from start to finish.
            </p>
          </div>
        </div>
      </section>

      <section id="careers" className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <SectionTitle
            eyebrow="Careers"
            title="Start in renewables. Build a serious trade."
            text="Aidyn Energy is building crews for BESS and solar field work. Entry-level candidates with strong work ethic, clean background, ability to pass a drug test, willingness to travel, and common sense can build a real career here."
          />
          <div className="bg-slate-100 p-8">
            <HardHat size={42} className="text-[#149aa0]" />
            <h3 className="mt-6 text-3xl font-extrabold tracking-[-0.03em] text-slate-950">What we look for</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Reliable", "Drug-free", "Clean background", "Willing to travel", "Coachable", "Safety-minded", "Common sense", "Ready to work"].map((trait) => (
                <div key={trait} className="flex items-center gap-3 bg-white p-4">
                  <CheckCircle2 size={18} className="text-[#149aa0]" />
                  <span className="font-bold text-slate-800">{trait}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-32 text-white lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.1),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent_50%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
              <p className="text-sm font-medium tracking-wide text-white/90">Get In Touch</p>
            </div>

            <h2 className="text-6xl md:text-7xl font-extrabold leading-tight tracking-[-0.04em] text-white mb-8">
              Need field support for a{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                BESS, solar,
              </span>{" "}
              or power infrastructure project?
            </h2>

            <p className="text-xl leading-8 text-white/80 mb-12 max-w-2xl">
              Send the site location, equipment type, schedule, and scope. Aidyn Energy can help with commissioning support, troubleshooting, maintenance, inspections, corrective work, and project closeout.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold uppercase tracking-wide text-white rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight size={20} />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10"
          >
            <div className="space-y-6">
              <motion.a
                whileHover={{ scale: 1.02, x: 4 }}
                href="tel:9407813412"
                className="group flex items-center gap-6 border border-white/20 p-6 rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/30"
              >
                <div className="flex h-14 w-14 items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-xl shadow-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-white/60 mb-1">Phone</p>
                  <p className="text-xl font-bold text-white">940-781-3412</p>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, x: 4 }}
                href="mailto:info@aidynenergy.com"
                className="group flex items-center gap-6 border border-white/20 p-6 rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/30"
              >
                <div className="flex h-14 w-14 items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-xl shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-white/60 mb-1">Email</p>
                  <p className="text-xl font-bold text-white">info@aidynenergy.com</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                className="flex items-center gap-6 border border-white/20 p-6 rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/30"
              >
                <div className="flex h-14 w-14 items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-xl shadow-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-white/60 mb-1">Location</p>
                  <p className="text-xl font-bold text-white">Wichita Falls, Texas</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 border-l-4 border-gradient-to-b from-blue-400 to-purple-400 bg-white/5 p-6 rounded-r-xl"
            >
              <p className="text-sm font-bold uppercase tracking-wide text-white/80 mb-2">Service Area</p>
              <p className="text-base leading-7 text-white/70">
                Texas-based and travel-ready for utility-scale BESS, solar inverter, data center power, and mission-critical infrastructure projects.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-white/10 px-6 py-12 text-white lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(120,119,198,0.05),transparent_50%)]" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Logo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 text-sm"
          >
            {nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/70 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-white/60"
          >
            <p>© 2026 Aidyn Energy. All rights reserved.</p>
            <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full" />
            <p className="font-semibold text-white/80 uppercase tracking-wide">BESS • Solar Inverters • Data Center Power Services</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <span className="text-white text-xs font-bold">in</span>
            </div>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <span className="text-white text-xs font-bold">f</span>
            </div>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <span className="text-white text-xs font-bold">t</span>
            </div>
          </motion.div>
        </div>
      </footer>
    </motion.main>
        </>
      )}
    </AnimatePresence>
  );
}
