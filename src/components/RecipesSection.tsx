import { Recipe } from "@/data/content";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal, { StaggerItem } from "@/components/SectionReveal";
import { ChevronDown } from "lucide-react";

interface RecipesSectionProps {
  recipes: Recipe[];
  onAdd: () => void;
}

const RecipesSection = ({ recipes, onAdd }: RecipesSectionProps) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="recipes" className="py-24 bg-card">
      <div className="mx-auto max-w-5xl px-6">
        <SectionReveal>
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-sans mb-3">Kitchen</p>
              <h2 className="text-4xl md:text-5xl font-serif-bold">Recipes I've Tried</h2>
            </div>
            <motion.button
              onClick={onAdd}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm font-sans bg-foreground text-background px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              + Add Recipe
            </motion.button>
          </div>
        </SectionReveal>

        {recipes.length === 0 ? (
          <SectionReveal>
            <div className="text-center py-20 border-2 border-dashed border-border rounded-2xl">
              <p className="text-muted-foreground font-sans text-sm">No recipes yet.</p>
              <p className="text-muted-foreground/60 font-sans text-xs mt-1">Click "Add Recipe" to share your culinary adventures.</p>
            </div>
          </SectionReveal>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {recipes.map((recipe, i) => (
              <StaggerItem key={recipe.id} index={i}>
                <motion.article
                  className="bg-background rounded-2xl overflow-hidden border border-border group"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {recipe.image && (
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-serif-bold">{recipe.title}</h3>
                      <span className="text-[11px] text-muted-foreground font-sans mt-1">{recipe.date}</span>
                    </div>
                    <button
                      onClick={() => setExpandedId(expandedId === recipe.id ? null : recipe.id)}
                      className="text-xs text-muted-foreground font-sans flex items-center gap-1 hover:text-foreground transition-colors mt-2"
                    >
                      {expandedId === recipe.id ? "Hide" : "View recipe"}
                      <motion.span
                        animate={{ rotate: expandedId === recipe.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={12} />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {expandedId === recipe.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-5 mt-5 border-t border-border space-y-5">
                            <div>
                              <h4 className="text-xs uppercase tracking-wider font-sans text-muted-foreground mb-3">Ingredients</h4>
                              <ul className="text-sm text-foreground font-sans space-y-1.5">
                                {recipe.ingredients.map((ing, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-foreground/30 mt-1.5 flex-shrink-0" />
                                    {ing}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-xs uppercase tracking-wider font-sans text-muted-foreground mb-3">Steps</h4>
                              <ol className="text-sm text-foreground font-sans space-y-3">
                                {recipe.steps.map((step, idx) => (
                                  <li key={idx} className="flex gap-3">
                                    <span className="text-xs text-muted-foreground font-sans-bold w-5 flex-shrink-0 mt-0.5">{String(idx + 1).padStart(2, '0')}</span>
                                    <span className="leading-relaxed">{step}</span>
                                  </li>
                                ))}
                              </ol>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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

export default RecipesSection;
