import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const items = ["About", "Stack", "Work", "Experience", "Contact"];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 24;
  window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      let current = "";
      for (const id of items) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div className="relative">
        <nav className="pointer-events-auto flex items-center gap-1 rounded-full border border-white/10 bg-ink/70 p-1.5 shadow-lg shadow-black/30 backdrop-blur-xl">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="grid size-9 cursor-pointer place-items-center rounded-full bg-mint font-display text-sm font-bold text-ink"
          >
            S
          </button>

          <div className="hidden items-center md:flex">
            {items.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === item ? "bg-white/10 text-white" : "text-white/65 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <a
            download
            href="Surya.pdf"
            className="ml-1 hidden items-center gap-2 rounded-full bg-mint px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-white sm:inline-flex"
          >
            <Download size={15} /> Resume
          </a>

          <button
            className="grid size-9 cursor-pointer place-items-center rounded-full text-white md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.18 }}
              className="pointer-events-auto absolute right-0 top-14 w-64 rounded-2xl border border-white/10 bg-ink/95 p-2 shadow-2xl backdrop-blur-xl md:hidden"
            >
              {items.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setOpen(false);
                    scrollToSection(item);
                  }}
                  className="block w-full cursor-pointer rounded-xl px-4 py-3 text-left text-base text-white/85 hover:bg-white/10"
                >
                  {item}
                </button>
              ))}
              <a
                download
                href="Surya.pdf"
                className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-mint px-4 py-3 font-semibold text-ink"
              >
                <Download size={16} /> Download resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
