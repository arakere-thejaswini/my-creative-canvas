import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const links = [
    { label: "Email", href: "mailto:arakere.thejaswini@gmail.com", icon: Mail },
    { label: "GitHub", href: "https://github.com/arakere-thejaswini", icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/thejaswini-ad/", icon: Linkedin },
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-serif-bold mb-4">Let's Connect</h2>
        <p className="text-muted-foreground font-sans mb-8 max-w-md mx-auto">
          I'd love to hear from you! Whether it's about a project, collaboration, or just to say hi.
        </p>
        <div className="flex justify-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors font-sans text-sm border border-border rounded-full px-5 py-2.5 hover:bg-accent"
            >
              <link.icon size={16} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
