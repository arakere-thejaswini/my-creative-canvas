import { AppProject } from "@/data/content";
import { ExternalLink, Github } from "lucide-react";

interface AppsSectionProps {
  projects: AppProject[];
  onAdd: () => void;
}

const AppsSection = ({ projects, onAdd }: AppsSectionProps) => {
  return (
    <section id="apps" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-serif-bold">Things I've Built</h2>
          <button
            onClick={onAdd}
            className="text-sm font-sans bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            + Add App
          </button>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-accent overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                    No image
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-serif-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span key={tool} className="text-xs bg-tag text-tag-foreground px-3 py-1 rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-muted-foreground flex items-center gap-1 transition-colors">
                      <ExternalLink size={14} /> View
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-muted-foreground flex items-center gap-1 transition-colors">
                      <Github size={14} /> Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppsSection;
