import { Painting } from "@/data/content";
import { motion } from "framer-motion";
import SectionReveal, { StaggerItem } from "@/components/SectionReveal";

interface ArtSectionProps {
  paintings: Painting[];
  onAdd: () => void;
  isAdmin: boolean;
}

const ArtSection = ({ paintings, onAdd, isAdmin }: ArtSectionProps) => {
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
              + Add Painting
            </motion.button>
          </div>
        )}

        {paintings.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed border-border rounded-2xl">
            <p className="text-muted-foreground font-sans text-sm">No paintings yet.</p>
            {!isAdmin && <p className="text-muted-foreground/60 font-sans text-xs mt-1">Check back soon!</p>}
          </div>
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
