import { Essay } from "@/data/content";
import { useState } from "react";

interface EssaysSectionProps {
  essays: Essay[];
  onAdd: () => void;
}

const EssaysSection = ({ essays, onAdd }: EssaysSectionProps) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="essays" className="py-20 bg-card">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-serif-bold">Essays</h2>
          <button
            onClick={onAdd}
            className="text-sm font-sans bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            + Add Essay
          </button>
        </div>
        {essays.length === 0 ? (
          <p className="text-muted-foreground text-center py-12 font-sans">
            No essays yet. Click "Add Essay" to share your thoughts.
          </p>
        ) : (
          <div className="space-y-6">
            {essays.map((essay) => (
              <article
                key={essay.id}
                className="bg-background rounded-xl p-6 border border-border cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setExpandedId(expandedId === essay.id ? null : essay.id)}
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-serif-bold">{essay.title}</h3>
                  <span className="text-xs text-muted-foreground font-sans">{essay.date}</span>
                </div>
                <p className={`mt-3 text-sm text-muted-foreground font-sans leading-relaxed whitespace-pre-wrap ${expandedId === essay.id ? "" : "line-clamp-3"}`}>
                  {essay.content}
                </p>
                {essay.content.length > 200 && (
                  <span className="text-xs text-foreground mt-2 inline-block font-sans">
                    {expandedId === essay.id ? "Show less" : "Read more →"}
                  </span>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EssaysSection;
