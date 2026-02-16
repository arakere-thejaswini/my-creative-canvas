import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center bg-hero overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      <div className="mx-auto max-w-5xl px-6 py-20 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 font-sans">
              Hi, I'm Thejaswini
            </p>
          </motion.div>
          
          <div className="overflow-hidden">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.span
                className="font-sans-bold block"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                Software Engineer
              </motion.span>
              <motion.span
                className="block mt-2"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="font-serif-italic">Creating</span>{" "}
                <span className="font-serif-bold">things I love,</span>
              </motion.span>
              <motion.span
                className="font-serif-bold block mt-2"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                one project at a time
              </motion.span>
            </motion.h1>
          </div>

          <motion.p
            className="text-base md:text-lg text-muted-foreground max-w-lg font-sans leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            I build apps, write essays, paint, and cook — this is my space to share it all.
          </motion.p>

          <motion.div
            className="mt-10 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={() => document.getElementById("apps")?.scrollIntoView({ behavior: "smooth" })}
              className="font-sans text-sm border border-foreground text-foreground px-6 py-3 rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Explore My Work
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="font-sans text-sm text-muted-foreground px-6 py-3 rounded-full hover:text-foreground transition-colors duration-300"
            >
              Get in Touch →
            </button>
          </motion.div>
        </div>

        {/* Floating accent shape */}
        <motion.div
          className="absolute right-10 top-1/3 w-72 h-72 rounded-full bg-accent/30 blur-3xl"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-32 bottom-1/4 w-40 h-40 rounded-full bg-secondary/40 blur-2xl"
          animate={{ 
            y: [0, 15, 0],
            x: [0, -10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
