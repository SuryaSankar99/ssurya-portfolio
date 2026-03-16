import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Calendar,
  Cpu,
  Database,
  ExternalLink,
  Github,
  Layout,
  Linkedin,
  MoveUpRight,
  Phone,
  Rocket,
  Server,
  Users,
  Wifi
} from "lucide-react";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

const skillCategories = [
  {
    name: "Frontend Architecture",
    skills: ["React.js", "Vite.js", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn", "SEO", "React Query", "Redux", "Context", "Zustand", "Shadcn UI", "Framer Motion", "Responsive Design", "ZOD"],
    icon: <Layout />,
    span: "md:col-span-2",
    description: "Building SEO-optimized, responsive interfaces with complex state management."
  },
  {
    name: "Backend & Security",
    skills: ["Node.js", "Express.js", "REST API", "JWT", "RBAC", "OAuth 2.0", "Redis"],
    icon: <Server />,
    span: "md:col-span-1",
    description: "Secure, scalable API design with pattern-based architecture."
  },
  {
    name: "Database Engineering",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "MariaDB", "SQLite", "Knex.js", "Prisma", "Schema Design"],
    icon: <Database />,
    span: "md:col-span-1",
    description: "Specialized in database-per-tenant isolation and query optimization."
  },
  {
    name: "DevOps & Tooling",
    skills: ["Docker", "GitHub Actions", "PM2", "Linux", "npm Distribution", "CLI Dev", "AWS Exposure", "Vercel", "Netlify", "GitHub Pages", "Docker", "CI/CD Pipelines"],
    icon: <Rocket />,
    span: "md:col-span-2",
    description: "Automating deployments and publishing open-source packages."
  },
  {
    name: "Real-Time Systems",
    skills: ["SignalR", "WebSockets", "Event-Driven Mail", "Streaming SDKs", "Concurreny", "Streaming"],
    icon: <Wifi />,
    span: "md:col-span-1",
    description: "Handled 1,000+ concurrent users for chat and live IPTV synchronization."
  },
  {
    name: "Architecture & QA",
    skills: ["Microservices", "System Design", "Unit Testing (Jest)", "API Testing", "Agile",],
    icon: <Cpu />,
    span: "md:col-span-1",
    description: "End-to-end validation and modular service orchestration."
  }
];

const projects = [
  {
    title: "Magma CMS",
    type: "Headless Platform",
    desc: "Multi-tenant headless CMS with database-per-tenant isolation, dynamic RBAC, and event-driven email workflows.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Vercel"],
    color: "from-blue-600/20 to-cyan-600/20",
    accent: "bg-cyan-500",
    link: "https://magmacms.vercel.app/projects"
  },
  {
    title: "IPTV Stream",
    type: "Streaming Platform",
    desc: "Scalable web platform supporting live streaming, subscriptions, and SignalR-based client synchronization.",
    tags: ["React", ".NET", "SignalR", "MySQL"],
    color: "from-purple-600/20 to-pink-600/20",
    accent: "bg-purple-500",
    link: "https://iptv.pranatitechnologies.com/home"
  },
  {
    title: "Member System",
    type: "Microservices",
    desc: "Membership platform handling subscriptions and secure payments with secure JWT and real-time admin monitoring.",
    tags: ["TypeScript", ".NET Core", "Tailwind", "SignalR"],
    color: "from-emerald-600/20 to-teal-600/20",
    accent: "bg-emerald-500",
    link: "https://mms.pranatitechnologies.com/home"
  },
  {
    title: "RT Module",
    type: "Communication",
    desc: "Scalable messaging module supporting 1,000+ concurrent users with optimized message persistence.",
    tags: [".NET", "SignalR", "MySQL", "Real-Time"],
    color: "from-orange-600/20 to-amber-600/20",
    accent: "bg-orange-500",
    link: ""
  },
];

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const [experiences, setExperiences] = useState<string>("");

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  useEffect(() => {
    const joiningDate = new Date("2023-10-01");
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    let years = now.getFullYear() - joiningDate.getFullYear();
    let months = now.getMonth() - joiningDate.getMonth();
    let days = now.getDate() - joiningDate.getDate();
    if (days < 0) months -= 1;
    if (months < 0) { years -= 1; months += 12; }
    setExperiences(`${years}.${months}Y`);
  }, []);

  const stats = [
    { label: "Experience", value: experiences, icon: <Calendar />, color: "from-blue-600 to-cyan-400" },
    { label: "Production", value: "10+", icon: <Rocket />, color: "from-purple-600 to-pink-500" },
    { label: "Tech Stack", value: "25+", icon: <Cpu />, color: "from-amber-500 to-orange-600" },
    { label: "Users", value: "4K+", icon: <Users />, color: "from-emerald-500 to-teal-600" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary/50 overflow-x-hidden max-w-[100vw] font-sans relative">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] brightness-100" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff07_1px,transparent_1px),linear-gradient(to_bottom,#ffffff07_1px,transparent_1px)] bg-size-[64px_64px]" />
      </div>

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-900/20 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[180px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <Navbar />

      <motion.section id="hero" style={{ opacity, scale }} className="relative mt-14 min-h-dvh flex flex-col items-center justify-center text-center px-4 z-10 overflow-hidden">
        <Badge variant="outline" className="mb-6 py-2 px-6 rounded-full border-white/10 bg-white/5 text-white tracking-[0.3em] font-black uppercase text-[10px]">
          Software Engineer // 2026
        </Badge>
        <h1 className="text-[14vw] sm:text-[12vw] md:text-[8rem] font-black leading-[0.9] tracking-tighter mb-8 italic wrap-break-words w-full">
          SURYA <span className="text-slate-800 NOT-italic block sm:inline">SANKAR</span>
        </h1>
        <p className="max-w-2xl text-slate-400 text-base md:text-2xl font-light leading-relaxed mb-12 px-2">
          Hardening the <span className="text-white font-medium italic">core</span> refining the <span className="text-white font-medium">edge.</span> Specialized in mission-critical architectures and liquid UI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto px-6 sm:px-0">
          <Button asChild size="lg" className="h-14 md:h-16 px-8 md:px-10 rounded-full bg-white text-black hover:bg-primary hover:text-white transition-all duration-500 font-black uppercase tracking-widest text-[10px] md:text-xs group">
            <a href="#corestack">
              Start Exploration <MoveUpRight className="ml-2 w-4 h-4 group-hover:rotate-45 transition-transform" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="h-14 md:h-16 px-8 md:px-10 rounded-full border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md font-black uppercase tracking-widest text-[10px] md:text-xs" asChild>
            <a download href={'Surya.pdf'}>Download CV</a>
          </Button>
        </div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
          <div className="w-px h-12 bg-linear-to-b from-primary to-transparent" />
        </motion.div>
      </motion.section>

      <section id="About" className="container mx-auto px-4 py-20 md:py-32 relative z-10 overflow-hidden">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="relative p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white/2 border border-white/5 flex flex-col justify-between h-48 md:h-70 overflow-hidden group transition-all"
            >
              <div className={`absolute -right-4 -top-4 w-32 h-32 bg-linear-to-br ${stat.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`} />
              <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-linear-to-br ${stat.color} flex items-center justify-center text-white shadow-2xl`}>
                {stat.icon}
              </div>
              <div>
                <motion.div className="text-4xl md:text-6xl font-black tracking-tighter mb-1 italic">{stat.value}</motion.div>
                <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-slate-500 font-black">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-32 border-t border-white/5" id="corestack">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 mb-6 rounded-full px-4 py-1 backdrop-blur-md">
              Technical Proficiency
            </Badge>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.85]">
              CORE <br /><span className="text-blue-500 italic">STACK</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
              Engineering scalable systems with a focus on <span className="text-white font-medium">high-availability</span>,
              <span className="text-white font-medium"> real-time synchronization</span>, and
              <span className="text-white font-medium"> multi-tenant security</span>.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {skillCategories.map((cat, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  show: { y: 0, opacity: 1 }
                }}
                className={`group relative p-8 rounded-[2rem] bg-white/2 border border-white/5 hover:border-blue-500/50 transition-all duration-500 overflow-hidden ${cat.span}`}
              >
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                        {cat.icon}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">// {i + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-4 group-hover:text-blue-400 transition-colors">{cat.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {cat.skills.map((s) => (
                      <span key={s} className="text-[9px] font-bold px-3 py-1.5 bg-white/5 rounded-md text-slate-500 border border-white/5 group-hover:border-blue-500/20 group-hover:text-slate-300 transition-all">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="Work" className="container mx-auto px-4 py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
            <div className="relative">
              <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic opacity-10 absolute top-0 left-0 -translate-y-1/2 pointer-events-none whitespace-nowrap">Projects</h2>
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter relative z-10 leading-none">ENGINEERED <br /> <span className="text-blue-500">SYSTEMS</span></h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:gap-10">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`group relative p-px rounded-[2rem] md:rounded-[3.5rem] bg-linear-to-br ${p.color} border border-white/10 overflow-hidden transition-all`}
              >
                <div className="bg-[#080808] rounded-[1.9rem] md:rounded-[3.4rem] p-6 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
                  <div className="flex-1 space-y-4 md:space-y-8">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${p.accent} animate-pulse`} />
                      <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">{p.type}</span>
                    </div>
                    <h3 className="text-3xl md:text-7xl font-black tracking-tighter group-hover:text-blue-400 transition-colors leading-tight">{p.title}</h3>
                    <p className="text-slate-400 max-w-xl text-sm md:text-lg font-light leading-relaxed">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {p.tags.map(t => (
                        <Badge key={t} className="rounded-full bg-white/5 border-white/10 text-slate-400 py-1 px-3 md:px-5 text-[10px] md:text-xs font-bold">{t}</Badge>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="h-16 w-16 md:h-24 md:w-24 rounded-full bg-white text-black hover:bg-blue-600 hover:text-white transition-all shrink-0 p-0">
                    <a href={p.link} className="flex items-center justify-center w-full h-full">
                      <ExternalLink className="w-6 h-6 md:w-8 md:h-8" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="Experience" className="container mx-auto px-4 py-40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-32">
            <span className="text-[10px] font-black tracking-[0.8em] text-blue-500 uppercase mb-4 block">Professional History</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter">THE JOURNEY</h2>
          </div>

          <div className="space-y-1">
            <TimelineItem
              role="Software Engineer"
              company="Pranati Technologies"
              date="2025 - PRESENT"
              isLatest
              desc="Leading the development of multi-tenant architectures. Managed full-lifecycle deployments using AWS (EC2/S3) for heavy lifting and Vercel for frontend edge performance. Automated delivery via GitHub Actions."
            />
            <TimelineItem
              role="Junior Software Engineer"
              company="Pranati Technologies"
              date="2023 - 2025"
              desc="Architected responsive UI systems with Tailwind CSS and Framer Motion. Built robust backends using Node.js and Express while managing complex CMS deployments."
            />
          </div>
        </div>
      </section>

      <footer id="Contact" className="container mx-auto px-4 py-40 text-center relative border-t border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <motion.div whileInView={{ y: [20, 0], opacity: [0, 1] }} className="space-y-12">
          <h2 className="text-5xl md:text-[8rem] font-black tracking-tighter leading-none relative z-10">LET'S <span className="text-blue-500">CONNECT</span></h2>
          <div className="flex flex-col items-center gap-6 relative z-10">
            <a href="mailto:suryamca99@gmail.com" className="text-xl md:text-5xl font-light hover:text-blue-500 transition-all duration-500 border-b border-white/10 hover:border-blue-500 pb-2 break-all px-4">
              suryamca99@gmail.com
            </a>
            <div className="flex gap-4 md:gap-6 mt-8">
              <SocialIcon icon={<Linkedin />} link="https://www.linkedin.com/in/surya-s-444797272/" />
              <SocialIcon icon={<Github />} link="https://github.com/SuryaSankar99" />
              <SocialIcon icon={<Phone />} link="tel:+919791902508" />
            </div>
          </div>
        </motion.div>
        <div className="mt-60 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black tracking-[0.4em] text-slate-600 uppercase border-t border-white/5 pt-12">
          <p>© 2026 SURYA SANKAR // ENGINEER FOR PERFORMANCE</p>
          <div className="flex gap-12">
            <span className="text-slate-400">STATUS: <span className="text-green-400">AVAILABLE</span></span>
            <a download href={"Surya.pdf"} className="text-white hover:text-blue-500 transition-colors">Resume.PDF</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function TimelineItem({ role, company, date, desc, isLatest }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="group relative pl-10 md:pl-16 border-l border-white/10 py-16 hover:border-blue-500 transition-all"
    >
      <div className={`absolute -left-1.5 top-20 h-3 w-3 rounded-full border-2 border-[#050505] transition-all duration-500 ${isLatest ? 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,1)]' : 'bg-slate-700 group-hover:bg-blue-500'}`} />
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-[10px] font-black tracking-[0.3em] text-blue-500 uppercase mb-2 block">{date}</span>
          <h3 className="text-3xl md:text-4xl font-black tracking-tighter">{role}</h3>
        </div>
        <div className="text-slate-400 font-black uppercase tracking-widest text-[10px] md:text-xs py-2 px-4 bg-white/5 rounded-lg border border-white/5 w-fit">
          {company}
        </div>
      </div>
      <p className="text-slate-400 max-w-3xl leading-relaxed text-base md:text-lg font-light group-hover:text-slate-200 transition-colors">{desc}</p>
    </motion.div>
  );
}

function SocialIcon({ icon, link }: { icon: any; link: string }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Button variant="outline" size="icon" className="h-12 w-12 md:h-14 md:w-14 rounded-2xl border-white/10 bg-white/5 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
        {icon}
      </Button>
    </a>
  );
}