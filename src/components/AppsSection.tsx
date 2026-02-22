import { AppProject } from "@/data/content";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionReveal, { StaggerItem } from "@/components/SectionReveal";

interface AppsSectionProps {
  projects: AppProject[];
  onAdd: () => void;
  isAdmin: boolean;
}

const AppsSection = ({ projects, onAdd, isAdmin }: AppsSectionProps) => {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-5xl px-6">
        {isAdmin && (
          <div className="flex justify-end mb-8">
            <motion.button
              onClick={onAdd}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm font-sans bg-foreground text-background px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              + Add App
            </motion.button>
          </div>
        )}

        {projects.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed border-border rounded-2xl">
            <p className="text-muted-foreground font-sans text-sm">No projects yet.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <StaggerItem key={project.id} index={i}>
                <motion.article
                  className="group bg-card rounded-2xl overflow-hidden border border-border relative"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="aspect-[4/3] bg-accent overflow-hidden relative">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm font-sans">
                        No image
                      </div>
                    )}
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm text-foreground p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ArrowUpRight size={16} />
                      </motion.a>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-serif-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed font-sans line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tools.map((tool) => (
                        <span key={tool} className="text-[11px] uppercase tracking-wider bg-accent text-accent-foreground px-3 py-1 rounded-full font-sans">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-4 border-t border-border">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors font-sans">
                          <ExternalLink size={12} /> Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors font-sans">
                          <Github size={12} /> Source
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AppsSection;
