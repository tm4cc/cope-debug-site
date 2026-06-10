"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "◈",
    title: "Player Chunk Finder",
    description:
        "Locate and visualize player-generated chunks to help find bases and spawners.",
  },
  {
    icon: "⌁",
    title: "Spawner Finder",
    description: "Identify and display discovered spawner locations.",
  },
  {
    icon: "▣",
    title: "Chunk Finder",
    description:
        "Analyze chunk information and provide detailed visual chunk data for finding bases.",
  },
];

const whyCards = [
  {
    title: "Fast Results",
    text: "Built to surface useful information quickly so you can spend less time searching.",
  },
  {
    title: "Premium Design",
    text: "Dark glassmorphism UI with a subtle white glow, soft shadows, and strong visual hierarchy.",
  },
  {
    title: "Simple Workflow",
    text: "Everything is organized cleanly so users can understand the addon instantly.",
  },
];

const faqs = [
  {
    q: "What is Cope Debug?",
    a: "Cope Debug is a Minecraft utility addon for DonutSMP-style gameplay focused on chunk and spawner information.",
  },
  {
    q: "Will i get banned?",
    a: "No. Cope Debug is fully undetectable and will not get you banned.",
  },
  {
    q: "Does it help me find bases?",
    a: "Yes. Cope Debug will help you effortlessly find spawners, bases, and more.",
  },
];

function DiscordIcon({ className = "" }: { className?: string }) {
  return (
      <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className={className}
      >
        <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.07.07 0 0 0-.032.027C.533 9.045-.32 13.58.099 18.057a.084.084 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.986a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.3.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.118.095.24.192.372.3a.077.077 0 0 1-.006.128 12.299 12.299 0 0 1-1.873.892.076.076 0 0 0-.04.107c.36.69.771 1.356 1.225 1.986a.076.076 0 0 0 .084.028 19.857 19.857 0 0 0 6.002-3.03.077.077 0 0 0 .031-.057c.5-5.177-.838-9.665-3.549-13.661a.061.061 0 0 0-.031-.028ZM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.334.955-2.418 2.157-2.418 1.21 0 2.175 1.093 2.157 2.418 0 1.334-.955 2.419-2.157 2.419Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.334.955-2.418 2.157-2.418 1.21 0 2.175 1.093 2.157 2.418 0 1.334-.946 2.419-2.157 2.419Z" />
      </svg>
  );
}

function SectionTitle({
                        title,
                        subtitle,
                      }: {
  title: string;
  subtitle: string;
}) {
  return (
      <div className="mb-8">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-zinc-300 backdrop-blur-xl">
          <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.7)]" />
          Cope Debug
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          {title}
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400 md:text-base">
          {subtitle}
        </p>
      </div>
  );
}

function Card({
                children,
                className = "",
              }: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
      <div
          className={`rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.35)] ${className}`}
      >
        {children}
      </div>
  );
}

export default function Page() {
  return (
      <main className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_24%),radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_34%),linear-gradient(180deg,#050505_0%,#090909_45%,#050505_100%)] text-white">
        <div className="fixed inset-0 -z-10 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.08)_100%)]" />

        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-2xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
            <a href="#top" className="flex items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-black/50 shadow-[0_0_35px_rgba(255,255,255,0.1)]">
                <img
                    src="/logo.jpg"
                    alt="Cope Debug logo"
                    className="h-full w-full object-cover"
                />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold tracking-[0.28em] text-white">
                  COPE DEBUG
                </p>
                <p className="text-xs text-zinc-400">DonutSMP Utility Addon</p>
              </div>
            </a>

            <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
              <a href="#about" className="transition hover:text-white">
                About
              </a>
              <a href="#features" className="transition hover:text-white">
                Features
              </a>
              <a href="#faq" className="transition hover:text-white">
                FAQ
              </a>
              <a href="#download" className="transition hover:text-white">
                Download
              </a>
            </nav>
          </div>
        </header>

        <section
            id="top"
            className="mx-auto max-w-7xl px-4 pb-20 pt-16 md:px-6 md:pt-24"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-zinc-300 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.5)]" />
                Modern Minecraft Utility
              </div>

              <div className="mb-6 flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-3xl border border-white/10 bg-black/50 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                  <img
                      src="/logo.jpg"
                      alt="Cope Debug logo"
                      className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
                    Official Branding
                  </p>
                  <p className="text-lg font-semibold text-white">
                    Clean, sharp, premium
                  </p>
                </div>
              </div>

              <h1 className="max-w-xl text-5xl font-black leading-none tracking-tight md:text-7xl">
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Cope Debug
              </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
                Cope Debug is a premium DonutSMP Meteor utility addon designed to
                deliver enhanced information, clean visuals, and quality-of-life
                tools for players who want fast, reliable base-finding support.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                    href="#download"
                    className="rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-800 px-6 py-3.5 font-semibold text-white shadow-[0_0_45px_rgba(255,255,255,0.1)] transition hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(255,255,255,0.18)]"
                >
                  Download
                </a>

                <a
                    href="https://discord.gg/NNG6FBjXWT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:scale-[1.02] hover:bg-white/10"
                >
                  <DiscordIcon className="h-5 w-5 text-white" />
                  Discord
                </a>
              </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="overflow-hidden p-5">
                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]">
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.05),transparent)]" />
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 overflow-hidden rounded-2xl border border-white/10 bg-black/50">
                        <img
                            src="/logo.jpg"
                            alt="Cope Debug logo"
                            className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Cope Debug UI
                        </p>
                        <p className="text-xs text-zinc-400">
                          Glass panels • soft glow • motion
                        </p>
                      </div>
                    </div>

                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-200">
                      Live
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex min-h-[520px] items-center justify-center overflow-hidden rounded-[1.25rem] bg-black/30 p-4">
                      <img
                          src="/image.png"
                          alt="Cope Debug preview"
                          className="max-h-[520px] w-full object-contain shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-8 md:px-6">
          <SectionTitle
              title="About Cope Debug"
              subtitle="Cope Debug is a DonutSMP utility addon designed to provide enhanced information and quality-of-life tools for players. The design emphasizes clarity, speed, and a polished premium aesthetic."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {whyCards.map((card, i) => (
                <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.08 }}
                >
                  <Card className="h-full p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/8">
                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {card.text}
                    </p>
                  </Card>
                </motion.div>
            ))}
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-4 py-8 md:px-6">
          <SectionTitle
              title="Features"
              subtitle="Sleek animated cards with clean icons, hover states, and a layout designed to feel polished on launch."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {features.map((feature, i) => (
                <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.08 }}
                >
                  <Card className="h-full p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/8">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-white/15 to-white/5 text-2xl text-white shadow-[0_0_24px_rgba(255,255,255,0.08)]">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
            ))}
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-4 py-8 md:px-6">
          <SectionTitle
              title="FAQ"
              subtitle="Concise answers so visitors can understand the product quickly."
          />

          <div className="grid gap-4">
            {faqs.map((faq) => (
                <details
                    key={faq.q}
                    className="group rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:bg-white/8"
                >
                  <summary className="cursor-pointer list-none text-base font-semibold text-white">
                    {faq.q}
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400">
                    {faq.a}
                  </p>
                </details>
            ))}
          </div>
        </section>

        <section
            id="download"
            className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14"
        >
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-8 shadow-[0_0_80px_rgba(255,255,255,0.06)] md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400">
                  Download Section
                </p>
                <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
                  Download Cope Debug
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
                  Version: 1.0.0. System requirements: Minecraft Java, Meteor
                  Client, and a compatible Fabric setup. Changelog preview:
                  initial public release with chunk and spawner utility features.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:justify-end">
                <a
                    href="/CopeDebug.jar"
                    download="CopeDebug.jar"
                    className="rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-800 px-6 py-3.5 font-semibold text-white shadow-[0_0_45px_rgba(255,255,255,0.1)] transition hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(255,255,255,0.18)]"
                >
                  Download
                </a>

                <a
                    href="https://discord.gg/NNG6FBjXWT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                >
                  <DiscordIcon className="h-5 w-5 text-white" />
                  Discord
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="mx-auto max-w-7xl px-4 pb-10 pt-6 md:px-6">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold tracking-[0.3em] text-white">
                  COPE DEBUG
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Premium Minecraft utility addon landing page.
                </p>
              </div>

              <div className="flex flex-wrap gap-5 text-sm text-zinc-300">
                <a href="#about" className="transition hover:text-white">
                  About
                </a>
                <a href="#features" className="transition hover:text-white">
                  Features
                </a>
                <a href="#faq" className="transition hover:text-white">
                  FAQ
                </a>
                <a
                    href="https://discord.gg/NNG6FBjXWT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                >
                  Discord
                </a>
              </div>
            </div>

            <p className="mt-6 border-t border-white/10 pt-5 text-sm text-zinc-500">
              © 2026 Cope Debug. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
  );
}