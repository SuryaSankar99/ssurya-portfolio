import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  ChevronRight,
  Cpu,
  Crown,
  Database,
  ExternalLink,
  Github,
  Layout,
  Linkedin,
  Moon,
  Rocket,
  Server,
  Smartphone,
  Sun
} from "lucide-react";
import { useState } from "react";

const stats = [
  {
    label: "Years Experience",
    value: "5+",
    icon: <Calendar className="w-4 h-4" />,
  },
  {
    label: "Projects Completed",
    value: "40+",
    icon: <Rocket className="w-4 h-4" />,
  },
  { label: "Tech Stack", value: "12+", icon: <Cpu className="w-4 h-4" /> },
  { label: "Open Source", value: "500+", icon: <Github className="w-4 h-4" /> },
];

const skillCategories = [
  {
    name: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    icon: <Layout className="w-5 h-5" />,
  },
  {
    name: "Backend",
    skills: ["Express.js", "Node.js", ".NET Core", "FastAPI", "REST APIs"],
    icon: <Server className="w-5 h-5" />,
  },
  {
    name: "Mobile",
    skills: ["React Native", "Expo", "Mobile UI/UX"],
    icon: <Smartphone className="w-5 h-5" />,
  },
  {
    name: "Database/CMS",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Strapi", "WordPress"],
    icon: <Database className="w-5 h-5" />,
  },
];

const projects = [
  {
    title: "Magma-CMS",
    description:
      "A multi-tenant, headless CMS with database-per-project isolation. Supports PostgreSQL, MySQL, and MSSQL with RBAC and event-driven automation.",
    tags: ["Next.js", "Knex.js", "PostgreSQL", "JWT"],
    link: "#",
    type: "Web",
  },
  {
    title: "Full-Stack IPTV Solution",
    description:
      "SignalR-powered live streaming platform with dynamic content management and real-time updates.",
    tags: ["React", ".NET", "MySQL", "SignalR"],
    link: "#",
    type: "Web",
  },
  {
    title: "Member Management System",
    description:
      "Secure JWT-authenticated application for subscription handling, payment workflows, and admin monitoring.",
    tags: ["Vite.js", ".NET Core", "Tailwind"],
    link: "#",
    type: "Web",
  },
];

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("All");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.type === activeTab);

  return (
    <div
      className={`min-h-screen bg-background text-foreground selection:bg-primary/30 transition-colors duration-500`}
    >
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-white dark:bg-slate-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        <div className="absolute left-[10%] top-[10%] h-100 w-100 rounded-full bg-primary/10 blur-[120px] animate-pulse"></div>
        <div className="absolute right-[10%] bottom-[10%] h-100 w-100 rounded-full bg-purple-500/10 blur-[120px] animate-pulse"></div>
      </div>

      <nav className="sticky top-6 z-50 mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center justify-between rounded-full border border-border/40 bg-background/60 p-2 backdrop-blur-xl shadow-2xl"
        >
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs">
              S
            </div>
            <span className="font-bold tracking-tight hidden sm:block">
              Surya S
            </span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            {["About", "Work", "Stack", "Contact"].map((item) => (
              <Button
                key={item}
                variant="ghost"
                size="sm"
                className="rounded-full px-4 hover:bg-primary/10"
              >
                {item}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full"
            >
              {darkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="default"
              size="sm"
              className="rounded-full px-5 ml-2"
            >
              Hire Me
            </Button>
          </div>
        </motion.div>
      </nav>

      <section className="container mx-auto px-4 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            variant="outline"
            className="mb-6 py-1 px-4 rounded-full border-primary/20 bg-primary/5 text-primary"
          >
            <Crown className="w-3 h-3 mr-2" /> Software Engineer
          </Badge>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1]">
            Building{" "}
            <span className="bg-clip-text w-full text-transparent bg-linear-to-r from-primary to-blue-400">
              scalable
            </span>
            <br />
            digital solutions.
          </h1>
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            MERN Stack & Next.js specialist focused on high-performance web
            applications and seamless mobile experiences with React Native.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full px-8 h-14 text-md shadow-lg shadow-primary/20"
            >
              View My Work <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
            <div className="flex gap-2">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full w-14 h-14 p-0"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full w-14 h-14 p-0"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-6 rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors group"
            >
              <div className="text-primary mb-2 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <span className="text-3xl font-bold">{stat.value}</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-6 rounded-[2rem] border border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border"></div>
          <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
          <div className="h-px flex-1 bg-border"></div>
        </div>

        <div className="space-y-6">
          <ExperienceCard
            title="Software Engineer"
            company="Pranati Technologies"
            date="Aug 2025 – Present"
            desc="Developing scalable web apps using Next.js & TypeScript, improving performance by 30%."
            current
          />
          <ExperienceCard
            title="Junior Software Engineer"
            company="Pranati Technologies"
            date="Oct 2023 – Jul 2025"
            desc="Built responsive UIs using Tailwind CSS and managed CMS solutions with Strapi/WordPress."
          />
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 bg-muted/30 rounded-[3rem]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 px-4">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-2">
                Featured Work
              </h2>
              <p className="text-muted-foreground">
                Selection of enterprise and open-source projects.
              </p>
            </div>
            <div className="flex gap-2 p-1 bg-background rounded-full border">
              {["All", "Web", "Mobile"].map((tab) => (
                <Button
                  key={tab}
                  variant={activeTab === tab ? "default" : "ghost"}
                  size="sm"
                  className="rounded-full"
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 px-4">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={project.title}
                  className="group relative flex flex-col h-full overflow-hidden rounded-[2.5rem] border border-border/50 bg-card hover:border-primary/50 transition-all shadow-xl hover:shadow-primary/5"
                >
                  <div className="aspect-16/10 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
                      alt="Project"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <Badge variant="outline" className="rounded-full">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-6">
                      {project.description}
                    </p>
                    <div className="flex gap-4">
                      <Button
                        variant="link"
                        className="p-0 h-auto gap-2 group/btn"
                      >
                        View Project{" "}
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-4 pt-32 pb-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Let's work together.
        </h2>
        <a
          href="mailto:suryamca99@gmail.com"
          className="text-2xl md:text-3xl font-medium text-primary underline underline-offset-8 decoration-primary/30 hover:decoration-primary transition-all"
        >
          suryamca99@gmail.com
        </a>
        <div className="mt-16 pt-12 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>© 2026 Surya S. Built with Next.js & Framer Motion.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">
              LinkedIn
            </a>
            <a href="#" className="hover:text-primary">
              GitHub
            </a>
            <a href="#" className="hover:text-primary">
              Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ExperienceCard({ title, company, date, desc, current = false }: any) {
  return (
    <div
      className={`p-8 rounded-[2rem] border transition-all ${
        current ? "border-primary/20 bg-primary/5" : "border-border/50 bg-card"
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-primary font-medium">{company}</p>
        </div>
        <Badge
          variant={current ? "default" : "outline"}
          className="w-fit rounded-full"
        >
          {date}
        </Badge>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
