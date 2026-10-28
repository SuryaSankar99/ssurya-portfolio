import {
  AnimatePresence,
  MotionConfig,
  animate,
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Cpu,
  Database,
  Download,
  Github,
  Layout,
  Linkedin,
  Mail,
  Phone,
  Rocket,
  Server,
  Wifi,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent, ReactNode } from "react";
import Navbar from "./components/Navbar";

/* ------------------------------ Data ------------------------------ */

const rotatingWords = ["multi-tenant platforms", "real-time systems", "headless CMS tooling", "secure APIs"];

const techStrip = [
  "React.js", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS",
  "WebSockets", "Express.js", "Tailwind CSS", "Prisma", "GitHub Actions", "Firebase",
];

const counters = [
  { to: 3.5, decimals: 1, suffix: "+", label: "Years of experience" },
  { to: 10, decimals: 0, suffix: "+", label: "Projects in production" },
  { to: 25, decimals: 0, suffix: "+", label: "Technologies used" },
  { to: 4, decimals: 0, suffix: "K+", label: "Users on live platforms" },
];

const strengths = [
  "Multi-tenant architecture with database-per-tenant isolation and RBAC",
  "Real-time systems with SignalR and WebSockets",
  "Full deployments on AWS, Vercel and GitHub Actions",
];

const skillCategories = [
  {
    name: "Frontend",
    icon: <Layout />,
    description: "SEO-optimized, responsive interfaces with complex state management.",
    skills: ["React.js", "Next.js", "Vite.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Framer Motion", "React Query", "Redux", "Zustand", "Context", "ZOD", "SEO", "Responsive Design"],
  },
  {
    name: "Backend & Security",
    icon: <Server />,
    description: "Secure, scalable API design with pattern-based architecture.",
    skills: ["Node.js", "Express.js", "REST API", "JWT", "RBAC", "OAuth 2.0", "Redis"],
  },
  {
    name: "Databases",
    icon: <Database />,
    description: "Database-per-tenant isolation and query optimization.",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "MariaDB", "SQLite", "Knex.js", "Prisma", "Schema Design"],
  },
  {
    name: "DevOps & Tooling",
    icon: <Rocket />,
    description: "Automated deployments and open-source package publishing.",
    skills: ["Docker", "GitHub Actions", "CI/CD Pipelines", "PM2", "Linux", "AWS", "Vercel", "Netlify", "GitHub Pages", "npm Distribution", "CLI Dev"],
  },
  {
    name: "Real-time systems",
    icon: <Wifi />,
    description: "Handled 1,000+ concurrent users for chat and live IPTV synchronization.",
    skills: ["SignalR", "WebSockets", "Streaming SDKs", "Streaming", "Concurrency", "Event-Driven Mail"],
  },
  {
    name: "Architecture & QA",
    icon: <Cpu />,
    description: "End-to-end validation and modular service orchestration.",
    skills: ["Microservices", "System Design", "Unit Testing (Jest)", "API Testing", "Agile"],
  },
];

const projects = [
  {
    title: "Magma CMS",
    type: "Headless platform",
    desc: "Multi-tenant headless CMS with database-per-tenant isolation, dynamic RBAC, and event-driven email workflows.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Vercel"],
    link: "https://magamcms-web-fz58.vercel.app/",
    host: "magamcms-web-fz58.vercel.app",
    gradient: "from-[#06130c] to-[#166534]",
  },
  {
    title: "IPTV Stream",
    type: "Streaming platform",
    desc: "Scalable web platform supporting live streaming, subscriptions, and SignalR-based client synchronization.",
    tags: ["React", ".NET", "SignalR", "MySQL"],
    link: "https://iptv.pranatitechnologies.com/home",
    host: "iptv.pranatitechnologies.com",
    gradient: "from-[#0e2a1c] to-[#15803d]",
  },
  {
    title: "Member System",
    type: "Microservices",
    desc: "Membership platform handling subscriptions and secure payments, with JWT auth and real-time admin monitoring.",
    tags: ["TypeScript", ".NET Core", "Tailwind", "SignalR"],
    link: "https://mms.pranatitechnologies.com/home",
    host: "mms.pranatitechnologies.com",
    gradient: "from-[#052e16] to-[#14532d]",
  },
  {
    title: "RT Module",
    type: "Communication",
    desc: "Scalable messaging module supporting 1,000+ concurrent users with optimized message persistence.",
    tags: [".NET", "SignalR", "MySQL", "Real-time"],
    link: "",
    host: "internal project",
    gradient: "from-[#0f3d26] to-[#1a6b3c]",
  },
];

const experience = [
  {
    role: "Full Stack Engineer",
    company: "Ticket9",
    date: "4 months",
    isLatest: true,
    desc: "Driving end-to-end development of scalable, multi-tenant platforms using Next.js, React, TypeScript, Node.js, and Firebase. Architecting RBAC systems, booking and reservation workflows, multi-gateway payment integrations, automated background processes, and production-grade APIs. Responsible for deployment, performance optimization, security, and reliability across the application lifecycle.",
  },
  {
    role: "Software Engineer",
    company: "Pranati Technologies",
    date: "1 year 2 months",
    desc: "Leading the development of multi-tenant architectures. Managed full-lifecycle deployments using AWS (EC2/S3) for heavy lifting and Vercel for frontend edge performance. Automated delivery via GitHub Actions.",
  },
  {
    role: "Junior Software Engineer",
    company: "Pranati Technologies",
    date: "1 year 10 months",
    desc: "Architected responsive UI systems with Tailwind CSS and Framer Motion. Built robust backends using Node.js and Express while managing complex CMS deployments.",
  },
];

/* --------------------------- Small pieces --------------------------- */

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-linear-to-r from-primary to-mint"
    />
  );
}

function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function RotatingWords() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % rotatingWords.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-block min-h-[1.25em] align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={rotatingWords[i]}
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -18, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-block bg-linear-to-r from-mint to-emerald-400 bg-clip-text pb-1 text-transparent"
        >
          {rotatingWords[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Counter({ to, decimals, suffix }: { to: number; decimals: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: setVal });
    return () => controls.stop();
  }, [inView, to]);
  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function SpotlightCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div onMouseMove={onMove} className={`spotlight ${className}`}>
      <div className="relative">{children}</div>
    </div>
  );
}

function SectionHeading({ title, children, dark = false }: { title: string; children?: ReactNode; dark?: boolean }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <h2 className={`text-4xl font-semibold tracking-tight md:text-5xl ${dark ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {children && (
        <p className={`mt-4 text-lg md:text-xl ${dark ? "text-white/70" : "text-muted-foreground"}`}>{children}</p>
      )}
    </Reveal>
  );
}

function SocialIcon({ icon, link, label }: { icon: ReactNode; link: string; label: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid size-12 place-items-center rounded-xl border border-white/15 bg-white/5 text-white transition-colors hover:bg-mint hover:text-ink [&_svg]:size-5"
    >
      {icon}
    </a>
  );
}

/* ------------------------------ Page ------------------------------ */

export default function Portfolio() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const glowY = useTransform(heroProgress, [0, 1], [0, 160]);
  const contentY = useTransform(heroProgress, [0, 1], [0, 60]);

  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 60%"],
  });

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip bg-background text-foreground selection:bg-primary/25">
        <ScrollProgress />
        <Navbar />

        {/* Hero */}
        <section ref={heroRef} id="Home" className="relative flex min-h-dvh items-center overflow-hidden bg-ink text-white">
          <div className="grid-fade pointer-events-none absolute inset-0" />
          <motion.div style={{ y: glowY }} className="pointer-events-none absolute inset-0">
            <div className="drift absolute -left-32 -top-32 size-[520px] rounded-full bg-primary/40 blur-[120px]" />
            <div className="drift absolute -bottom-24 right-0 size-[460px] rounded-full bg-mint/20 blur-[130px]" />
          </motion.div>

          <motion.div
            style={{ y: contentY }}
            className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-24 pt-32 lg:grid-cols-[1.25fr_0.75fr]"
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/85">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-mint/70" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-mint" />
                </span>
                Available for work
              </div>
              <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                Hi, I'm Surya Sankar.
                <span className="mt-3 block text-3xl font-medium text-white/80 md:text-5xl">
                  I build <RotatingWords />
                </span>
              </h1>
              <p className="mt-7 max-w-xl text-lg text-white/70 md:text-xl">
                Full stack engineer with 3.5+ years of experience shipping secure backends and fast React interfaces to production.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#Work"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-mint px-7 font-semibold text-ink transition-colors hover:bg-white"
                >
                  View projects <ArrowRight size={18} />
                </a>
                <a
                  download
                  href="Surya.pdf"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 font-medium text-white transition-colors hover:bg-white/10"
                >
                  <Download size={18} /> Download CV
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3 lg:hidden">
                {[
                  ["4K+", "users"],
                  ["10+", "in production"],
                  ["1,000+", "concurrent"],
                ].map(([v, l]) => (
                  <div key={l} className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="font-display text-xl font-semibold">{v}</div>
                    <div className="text-sm text-white/60">{l}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="relative hidden h-[420px] lg:block">
              <div className="floaty absolute left-4 top-0 w-60 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <div className="font-display text-4xl font-semibold text-mint">4K+</div>
                <div className="mt-1 text-white/70">users on live platforms</div>
              </div>
              <div
                className="floaty absolute right-0 top-40 w-64 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
                style={{ animationDelay: "-2s" }}
              >
                <div className="font-display text-4xl font-semibold text-mint">1,000+</div>
                <div className="mt-1 text-white/70">concurrent users handled in real time</div>
              </div>
              <div
                className="floaty absolute bottom-0 left-0 w-64 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
                style={{ animationDelay: "-4s" }}
              >
                <div className="text-sm text-white/60">Currently</div>
                <div className="mt-1 font-display text-xl font-semibold">Full Stack Engineer</div>
                <div className="text-white/70">at Ticket9</div>
              </div>
            </div>
          </motion.div>

          <a
            href="#About"
            aria-label="Scroll down"
            className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-sm text-white/55 hover:text-white md:flex"
          >
            Scroll <ArrowDown size={16} className="animate-bounce" />
          </a>
        </section>

        {/* Tech strip */}
        <div className="marquee overflow-hidden border-y border-white/10 bg-deep py-5">
          <div className="marquee-track">
            {[...techStrip, ...techStrip].map((t, i) => (
              <span key={i} className="flex items-center text-lg font-medium text-white/80">
                <span className="px-6">{t}</span>
                <span className="size-1.5 rounded-full bg-mint" />
              </span>
            ))}
          </div>
        </div>

        {/* About */}
        <section id="About" className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 md:py-32 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Software that holds up under real traffic.
            </h2>
            <p className="mt-6 text-lg text-foreground/75 md:text-xl">
              I design multi-tenant backends, real-time systems and the interfaces on top of them, then take them all the way to production. Most of my work has been at Pranati Technologies and Ticket9.
            </p>
            <ul className="mt-8 space-y-4">
              {strengths.map((s) => (
                <li key={s} className="flex items-start gap-3 text-base md:text-lg">
                  <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {counters.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
                  <div className="font-display text-5xl font-semibold tracking-tight text-primary md:text-6xl">
                    <Counter to={c.to} decimals={c.decimals} suffix={c.suffix} />
                  </div>
                  <div className="mt-2 text-base text-muted-foreground">{c.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section id="Stack" className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
          <div className="pointer-events-none absolute -right-40 top-0 size-[500px] rounded-full bg-primary/30 blur-[140px]" />
          <div className="relative mx-auto max-w-6xl px-5">
            <SectionHeading title="Core stack" dark>
              Scalable systems with a focus on high availability, real-time synchronization, and multi-tenant security.
            </SectionHeading>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {skillCategories.map((cat, i) => (
                <Reveal key={cat.name} delay={(i % 3) * 0.08} className="h-full">
                  <SpotlightCard className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-mint/40">
                    <div className="mb-4 grid size-11 place-items-center rounded-xl bg-mint/10 text-mint [&_svg]:size-5">
                      {cat.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{cat.name}</h3>
                    <p className="mt-1.5 text-base text-white/65">{cat.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {cat.skills.map((s) => (
                        <span key={s} className="rounded-md bg-white/10 px-2.5 py-1 text-sm text-white/85">
                          {s}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="Work" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <SectionHeading title="Projects">
            Platforms I've built and shipped, from headless CMS tooling to live streaming.
          </SectionHeading>
          <div className="flex flex-col gap-10">
            {projects.map((p, i) => (
              <div key={p.title} className="sticky" style={{ top: 96 + i * 18 }}>
                <article
                  className={`grid gap-8 rounded-3xl bg-linear-to-br p-7 text-white shadow-2xl shadow-black/25 md:min-h-[380px] md:grid-cols-[1.1fr_0.9fr] md:p-12 ${p.gradient}`}
                >
                  <div className="flex flex-col items-start">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-mint">{p.type}</span>
                    <h3 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">{p.title}</h3>
                    <p className="mt-4 max-w-xl text-base text-white/80 md:text-lg">{p.desc}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/90">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto pt-8">
                      {p.link ? (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3 font-semibold text-ink transition-colors hover:bg-white"
                        >
                          Visit site <ArrowUpRight size={18} />
                        </a>
                      ) : (
                        <span className="text-sm text-white/60">Internal project, no public link</span>
                      )}
                    </div>
                  </div>

                  <div className="hidden self-center rounded-2xl border border-white/15 bg-white/5 p-3 backdrop-blur md:block">
                    <div className="flex items-center gap-1.5 px-2 pb-3">
                      <i className="size-2.5 rounded-full bg-white/30" />
                      <i className="size-2.5 rounded-full bg-white/30" />
                      <i className="size-2.5 rounded-full bg-white/30" />
                      <span className="ml-3 truncate rounded-md bg-white/10 px-3 py-1 text-xs text-white/65">{p.host}</span>
                    </div>
                    <div className="space-y-3 rounded-xl bg-ink/50 p-5">
                      <div className="h-3 w-2/5 rounded bg-mint/80" />
                      <div className="h-2.5 w-full rounded bg-white/15" />
                      <div className="h-2.5 w-4/5 rounded bg-white/15" />
                      <div className="grid grid-cols-3 gap-3 pt-3">
                        <div className="h-16 rounded-lg bg-white/10" />
                        <div className="h-16 rounded-lg bg-mint/25" />
                        <div className="h-16 rounded-lg bg-white/10" />
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="Experience" className="border-t border-border bg-card py-24 md:py-32">
          <div className="mx-auto max-w-4xl px-5">
            <SectionHeading title="Experience">Where I've worked and what I've owned.</SectionHeading>
            <div ref={timelineRef} className="relative">
              <div className="absolute bottom-2 left-[7px] top-2 w-0.5 bg-border" />
              <motion.div
                style={{ scaleY: timelineProgress }}
                className="absolute bottom-2 left-[7px] top-2 w-0.5 origin-top bg-primary"
              />
              <div className="space-y-8">
                {experience.map((e) => (
                  <Reveal key={e.role + e.company} className="relative pl-10">
                    <span
                      className={`absolute left-0 top-2 size-4 rounded-full border-4 border-card ${
                        e.isLatest ? "bg-primary ring-4 ring-primary/20" : "bg-primary"
                      }`}
                    />
                    <div className="rounded-2xl border border-border bg-background p-6 md:p-8">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="text-xl font-semibold md:text-2xl">{e.role}</h3>
                        <span className="font-medium text-primary">{e.company}</span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{e.date}</p>
                      <p className="mt-4 text-base text-foreground/75 md:text-lg">{e.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="Contact" className="relative overflow-hidden bg-ink text-white">
          <div className="pointer-events-none absolute -left-40 bottom-0 size-[520px] rounded-full bg-primary/40 blur-[140px]" />
          <div className="pointer-events-none absolute -right-24 -top-24 size-[420px] rounded-full bg-mint/15 blur-[130px]" />
          <div className="relative mx-auto max-w-6xl px-5 py-28 md:py-40">
            <Reveal>
              <h2 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
                Let's build something together.
              </h2>
              <p className="mt-6 max-w-xl text-lg text-white/70 md:text-xl">
                Have a project or a role in mind? Send me an email and I'll get back to you.
              </p>
              <a
                href="mailto:suryamca99@gmail.com"
                className="mt-10 inline-flex items-center gap-3 break-all text-xl font-medium text-mint underline-offset-8 hover:underline md:text-4xl"
              >
                <Mail className="size-6 shrink-0 md:size-8" /> suryamca99@gmail.com
              </a>
              <div className="mt-10 flex gap-3">
                <SocialIcon label="LinkedIn" link="https://www.linkedin.com/in/surya-s-444797272/" icon={<Linkedin />} />
                <SocialIcon label="GitHub" link="https://github.com/SuryaSankar99" icon={<Github />} />
                <SocialIcon label="Call" link="tel:+919791902508" icon={<Phone />} />
              </div>
            </Reveal>
          </div>
          <footer className="relative border-t border-white/10">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-sm text-white/60 sm:flex-row">
              <p>© 2026 Surya Sankar</p>
              <a download href="Surya.pdf" className="font-medium text-mint hover:underline">
                Download resume (PDF)
              </a>
            </div>
          </footer>
        </section>
      </div>
    </MotionConfig>
  );
}
