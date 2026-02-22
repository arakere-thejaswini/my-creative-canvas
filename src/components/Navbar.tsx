import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onNavigate: (section: string) => void;
}

const Navbar = ({ onNavigate }: NavbarProps) => {
  const links = ["Apps", "Essays", "Art", "Recipes", "About", "Contact"];
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => onNavigate("hero")}
          className="font-serif text-lg font-bold text-foreground hover:opacity-60 transition-opacity duration-300"
        >
          Thejaswini
        </button>
        
        <div className="hidden md:flex gap-1">
          {links.map((link, i) => (
            <motion.button
              key={link}
              onClick={() => onNavigate(link.toLowerCase())}
              className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors duration-300 px-3 py-1.5 rounded-full hover:bg-accent/50"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3, duration: 0.4 }}
            >
              {link}
            </motion.button>
          ))}
        </div>

        <button className="md:hidden text-foreground p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => { onNavigate(link.toLowerCase()); setMobileOpen(false); }}
                  className="text-left text-sm font-sans text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
