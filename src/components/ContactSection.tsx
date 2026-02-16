import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";

const ContactSection = () => {
  const links = [
    { label: "Email", href: "mailto:arakere.thejaswini@gmail.com", icon: Mail, detail: "arakere.thejaswini@gmail.com" },
    { label: "GitHub", href: "https://github.com/arakere-thejaswini", icon: Github, detail: "arakere-thejaswini" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/thejaswini-ad/", icon: Linkedin, detail: "thejaswini-ad" },
  ];

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="mx-auto max-w-5xl px-6">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-sans mb-3">Connect</p>
            <h2 className="text-4xl md:text-5xl font-serif-bold mb-4">Let's Talk</h2>
            <p className="text-muted-foreground font-sans max-w-md mx-auto leading-relaxed">
              Whether it's about a project, collaboration, or just to say hi — I'd love to hear from you.
            </p>
          </div>
        </SectionReveal>

        <div className="max-w-xl mx-auto space-y-3">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 rounded-2xl border border-border bg-background hover:bg-accent/30 transition-colors duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ x: 4 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground">
                  <link.icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-sans-bold text-foreground">{link.label}</p>
                  <p className="text-xs text-muted-foreground font-sans">{link.detail}</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
