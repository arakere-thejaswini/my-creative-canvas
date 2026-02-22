import { Essay } from "@/data/content";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal, { StaggerItem } from "@/components/SectionReveal";
import { ChevronDown } from "lucide-react";

interface EssaysSectionProps {
  essays: Essay[];
  onAdd: () => void;
  isAdmin: boolean;
}

const EssaysSection = ({ essays, onAdd, isAdmin }: EssaysSectionProps) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

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
              + Add Essay
            </motion.button>
          </div>
        )}

        {essays.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed border-border rounded-2xl">
            <p className="text-muted-foreground font-sans text-sm">No essays yet.</p>
            {!isAdmin && <p className="text-muted-foreground/60 font-sans text-xs mt-1">Check back soon!</p>}
          </div>
        ) : (
          <div className="space-y-4">
            {essays.map((essay, i) => (
              <StaggerItem key={essay.id} index={i}>
                <motion.article
                  layout
                  className="bg-card rounded-2xl border border-border overflow-hidden cursor-pointer group"
                  onClick={() => setExpandedId(expandedId === essay.id ? null : essay.id)}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <span className="text-xs text-muted-foreground font-sans block mb-2">{essay.date}</span>
                        <h3 className="text-xl md:text-2xl font-serif-bold group-hover:text-muted-foreground transition-colors duration-300">{essay.title}</h3>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedId === essay.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 text-muted-foreground"
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </div>
                    <AnimatePresence>
                      {expandedId === essay.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 border-t border-border mt-6">
                            <p className="text-sm text-muted-foreground font-sans leading-[1.8] whitespace-pre-wrap">
                              {essay.content}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {expandedId !== essay.id && essay.content.length > 100 && (
                      <p className="mt-4 text-sm text-muted-foreground/60 font-sans line-clamp-1">
                        {essay.content.substring(0, 120)}...
                      </p>
                    )}
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

export default EssaysSection;
