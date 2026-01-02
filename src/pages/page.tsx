import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar,
  Cpu,
  ExternalLink,
  Github,
  Moon,
  Rocket,
  Sparkles,
  Sun,
  Terminal,
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

// const skills = {
//   Frontend: ["React", "TypeScript", "Next.js", "Tailwind", "Three.js"],
//   Backend: ["Node.js", "Go", "PostgreSQL", "Redis", "GraphQL"],
//   Infrastructure: ["Docker", "AWS", "Terraform", "CI/CD"],
// };

function Page() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-slate-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-77.5 w-77.5 rounded-full bg-primary opacity-20 blur-[100px]"></div>
      </div>

      <nav className="sticky top-4 z-50 mx-auto max-w-4xl px-4">
        <div className="flex items-center justify-between rounded-full border border-border/40 bg-background/60 p-2 backdrop-blur-xl shadow-lg">
          <div className="flex items-center gap-2 pl-4">
            <div className="h-8 w-8 rounded-full bg-linear-to-tr from-primary to-purple-400 flex items-center justify-center text-white font-bold">
              JD
            </div>
            <span className="font-bold tracking-tight hidden sm:block">
              John Doe
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
        </div>
      </nav>

      <section className="container mx-auto px-4 pt-24 pb-12 text-center">
        <Badge
          variant="outline"
          className="mb-4 py-1 px-4 rounded-full border-primary/20 bg-primary/5 text-primary animate-pulse"
        >
          <Sparkles className="w-3 h-3 mr-2" /> Available for new opportunities
        </Badge>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/60">
          Crafting digital <br />
          <span className="text-primary italic">experiences</span> that matter.
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10">
          Full-stack engineer specializing in high-performance web applications.
          I turn complex problems into elegant, scalable solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="rounded-full px-8 shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
          >
            Start a Project
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 backdrop-blur-sm"
          >
            View Resume
          </Button>
        </div>
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

      <section className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border"></div>
          <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
          <div className="h-px flex-1 bg-border"></div>
        </div>

        <div className="space-y-4">
          <Card className="border-none bg-transparent shadow-none hover:bg-muted/30 transition-colors rounded-3xl overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Terminal className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      Senior Software Engineer
                    </CardTitle>
                    <CardDescription className="text-primary font-medium">
                      Tech Corp • 2022 - Present
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="rounded-full">
                    Full-time
                  </Badge>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-2">
                Featured Projects
              </h2>
              <p className="text-muted-foreground text-lg">
                A selection of my recent work and open-source contributions.
              </p>
            </div>
            <div className="flex gap-2 bg-background/50 p-1 rounded-full border backdrop-blur-sm">
              {["All", "Web", "Mobile"].map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "ghost"}
                  size="sm"
                  className="rounded-full"
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative rounded-3xl overflow-hidden border border-border/50 bg-card">
              <div className="aspect-16/10 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
                  alt="Project"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <Badge variant="outline" className="rounded-full">
                    React
                  </Badge>
                  <Badge variant="outline" className="rounded-full">
                    PostgreSQL
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Enterprise SaaS Dashboard
                </h3>
                <p className="text-muted-foreground mb-6">
                  A high-performance data visualization platform for monitoring
                  supply chain logistics in real-time.
                </p>
                <div className="flex gap-4">
                  <Button variant="link" className="p-0 h-auto gap-2 group/btn">
                    View Project{" "}
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-32 max-w-4xl">
        <div className="rounded-[3rem] bg-foreground text-background p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to build something
            <span className="text-primary italic">extraordinary?</span>
          </h2>
          <p className="text-background/70 text-lg mb-10 max-w-xl mx-auto">
            I'm currently accepting new projects and consulting engagements.
            Let's discuss your vision.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full px-12 h-14 text-lg font-bold hover:scale-105 transition-transform"
          >
            Get in Touch
          </Button>
        </div>
      </section>

      <footer className="container mx-auto px-4 py-12 border-t border-border/40 text-center text-sm text-muted-foreground">
        <p>© 2026 Crafted by John Doe. Built with Next.js & Tailwind.</p>
      </footer>
    </div>
  );
}

export default Page;
