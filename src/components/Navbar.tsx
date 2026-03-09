import { AnimatePresence, motion } from "framer-motion";
import { Github, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const items = ["About", "Work", "Experience", "Contact"];

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
    }

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 flex flex-col items-center px-4">
            {/* Main Nav Container */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex items-center gap-1 p-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            >
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1">
                    {items.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className="px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
                        >
                            {item}
                        </button>
                    ))}

                    <div className="w-px h-4 bg-white/10 mx-2" />

                    <a href="https://github.com/SuryaSankar99" target="_blank" rel="noreferrer">
                        <button className="h-9 w-9 rounded-full hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-all">
                            <Github className="w-4 h-4" />
                        </button>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-300 p-2 hover:text-white transition-colors"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={20} /> : <Menu size={20} />}
                </button>
            </motion.div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-16 w-full max-w-[250px] bg-black/60 backdrop-blur-3xl border border-white/10 rounded-3xl p-2 mt-2 shadow-2xl md:hidden"
                    >
                        {items.map((item, idx) => (
                            <motion.button
                                key={item}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="block w-full text-center py-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white hover:bg-white/5 rounded-2xl transition-all"
                                onClick={() => { setOpen(false); scrollToSection(item) }}
                            >
                                {item}
                            </motion.button>
                        ))}

                        <div className="h-px bg-white/10 my-2 mx-4" />

                        <a
                            href="https://github.com/SuryaSankar99"
                            className="flex items-center justify-center py-3 text-slate-400 hover:text-white"
                        >
                            <Github size={18} />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;