import { AnimatePresence, motion } from "framer-motion";
import { Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const items = ["About", "Work", "Experience", "Contact"];

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }

    return (
        <nav className="fixed top-6 left-0 right-0 z-100 flex flex-col items-center px-4 pointer-events-none">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="pointer-events-auto flex items-center gap-1 p-1.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            >
                <div className="hidden md:flex items-center gap-1">
                    {items.map((item) => (
                        <Button
                            variant={'ghost'}
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className="px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
                        >
                            {item}
                        </Button>
                    ))}
                    <div className="w-px h-4 bg-white/10 mx-2" />
                    <Button size={'icon'} variant={'ghost'} className="rounded-full hover:bg-white/10 text-slate-400 hover:text-white" asChild>
                        <a href="https://www.linkedin.com/in/surya-s-444797272/" target="_blank" rel="noreferrer">
                            <Linkedin className="w-4 h-4" />
                        </a>
                    </Button>
                </div>
                <button
                    className="md:hidden text-slate-300 p-3 hover:text-white transition-colors"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle Menu"
                >
                    {open ? <X size={18} /> : <Menu size={18} />}
                </button>
            </motion.div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "circOut" }}
                        className="pointer-events-auto absolute top-16 w-[calc(100vw-32px)] max-w-[280px] bg-black/80 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-2 mt-2 shadow-2xl md:hidden overflow-hidden"
                    >
                        {items.map((item, idx) => (
                            <motion.button
                                key={item}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.03 }}
                                className="block w-full text-center py-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white hover:bg-white/5 rounded-2xl transition-all"
                                onClick={() => { setOpen(false); scrollToSection(item) }}
                            >
                                {item}
                            </motion.button>
                        ))}

                        <div className="h-px bg-white/10 my-2 mx-8" />

                        <a
                            href="https://www.linkedin.com/in/surya-s-444797272/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center py-4 text-slate-400 hover:text-white transition-colors"
                        >
                            <Linkedin size={20} />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;