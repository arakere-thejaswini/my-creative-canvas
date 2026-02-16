import { Recipe } from "@/data/content";
import { useState } from "react";

interface RecipesSectionProps {
  recipes: Recipe[];
  onAdd: () => void;
}

const RecipesSection = ({ recipes, onAdd }: RecipesSectionProps) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="recipes" className="py-20 bg-card">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-serif-bold">Recipes I've Tried</h2>
          <button
            onClick={onAdd}
            className="text-sm font-sans bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            + Add Recipe
          </button>
        </div>
        {recipes.length === 0 ? (
          <p className="text-muted-foreground text-center py-12 font-sans">
            No recipes yet. Click "Add Recipe" to share your culinary adventures.
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {recipes.map((recipe) => (
              <article
                key={recipe.id}
                className="bg-background rounded-xl overflow-hidden border border-border hover:shadow-md transition-shadow"
              >
                {recipe.image && (
                  <div className="aspect-video overflow-hidden">
                    <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-serif-bold">{recipe.title}</h3>
                    <span className="text-xs text-muted-foreground font-sans">{recipe.date}</span>
                  </div>
                  <button
                    onClick={() => setExpandedId(expandedId === recipe.id ? null : recipe.id)}
                    className="text-xs text-foreground font-sans mb-3 hover:text-muted-foreground transition-colors"
                  >
                    {expandedId === recipe.id ? "Hide details ↑" : "Show details →"}
                  </button>
                  {expandedId === recipe.id && (
                    <div className="mt-3 space-y-4 animate-in fade-in duration-300">
                      <div>
                        <h4 className="text-sm font-sans-bold mb-2">Ingredients</h4>
                        <ul className="text-sm text-muted-foreground font-sans space-y-1">
                          {recipe.ingredients.map((ing, i) => (
                            <li key={i}>• {ing}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-sans-bold mb-2">Steps</h4>
                        <ol className="text-sm text-muted-foreground font-sans space-y-2">
                          {recipe.steps.map((step, i) => (
                            <li key={i}>{i + 1}. {step}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RecipesSection;
