import { Painting } from "@/data/content";
import { motion } from "framer-motion";
import SectionReveal, { StaggerItem } from "@/components/SectionReveal";

interface ArtSectionProps {
  paintings: Painting[];
  onAdd: () => void;
}

const ArtSection = ({ paintings, onAdd }: ArtSectionProps) => {
  return (
    <section id="art" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionReveal>
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-sans mb-3">Gallery</p>
              <h2 className="text-4xl md:text-5xl font-serif-bold">Art & Paintings</h2>
            </div>
            <motion.button
              onClick={onAdd}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm font-sans bg-foreground text-background px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              + Add Painting
            </motion.button>
          </div>
        </SectionReveal>

        {paintings.length === 0 ? (
          <SectionReveal>
            <div className="text-center py-20 border-2 border-dashed border-border rounded-2xl">
              <p className="text-muted-foreground font-sans text-sm">No paintings yet.</p>
              <p className="text-muted-foreground/60 font-sans text-xs mt-1">Click "Add Painting" to showcase your art.</p>
            </div>
          </SectionReveal>
        ) : (
          <div className="columns-2 md:columns-3 gap-5 space-y-5">
            {paintings.map((painting, i) => (
              <StaggerItem key={painting.id} index={i} className="break-inside-avoid">
                <motion.div
                  className="group rounded-2xl overflow-hidden border border-border relative cursor-pointer"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={painting.imageUrl}
                    alt={painting.title}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Hover overlay with info */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent flex items-end p-5"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div>
                      <p className="text-background text-sm font-serif-bold">{painting.title}</p>
                      <p className="text-background/60 text-xs font-sans mt-1">{painting.date}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ArtSection;
