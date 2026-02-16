import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionReveal>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-sans mb-3">About</p>
              <h2 className="text-4xl md:text-5xl font-serif-bold mb-8">A Little<br />About Me</h2>
            </div>
            <div className="space-y-6">
              <motion.p
                className="text-muted-foreground font-sans leading-[1.8] text-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                I'm a software engineer who enjoys building clean, calm digital experiences.
                I'm currently exploring art, design, cooking, and how technology can feel more human.
              </motion.p>
              <motion.p
                className="text-muted-foreground font-sans leading-[1.8] text-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.6 }}
              >
                This space is where I collect everything I create — apps I build, essays I write,
                paintings I make, and recipes I try. It's a living portfolio of my curiosity.
              </motion.p>

              <motion.div
                className="flex gap-8 pt-6 border-t border-border"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {[
                  { label: "Apps Built", value: "∞" },
                  { label: "Essays", value: "∞" },
                  { label: "Paintings", value: "∞" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-serif-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground font-sans mt-1">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default AboutSection;
