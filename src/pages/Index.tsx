import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import FlowerBackground from "@/components/FlowerBackground";
import HeroSection from "@/components/HeroSection";
import AppsSection from "@/components/AppsSection";
import EssaysSection from "@/components/EssaysSection";
import ArtSection from "@/components/ArtSection";
import RecipesSection from "@/components/RecipesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { AddAppDialog, AddEssayDialog, AddPaintingDialog, AddRecipeDialog } from "@/components/AddContentDialogs";
import {
  initialProjects,
  initialEssays,
  initialPaintings,
  initialRecipes,
  AppProject,
  Essay,
  Painting,
  Recipe,
} from "@/data/content";

const TABS = ["Apps", "Essays", "Art", "Recipes"] as const;
type Tab = typeof TABS[number];

const ADMIN_KEY = "thejaswini2025";

const Index = () => {
  const [searchParams] = useSearchParams();
  const isAdmin = searchParams.get("admin") === ADMIN_KEY;

  const [activeTab, setActiveTab] = useState<Tab>("Apps");
  const [projects, setProjects] = useState<AppProject[]>(initialProjects);
  const [essays, setEssays] = useState<Essay[]>(initialEssays);
  const [paintings, setPaintings] = useState<Painting[]>(initialPaintings);
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes);

  const [showAddApp, setShowAddApp] = useState(false);
  const [showAddEssay, setShowAddEssay] = useState(false);
  const [showAddPainting, setShowAddPainting] = useState(false);
  const [showAddRecipe, setShowAddRecipe] = useState(false);

  const handleNavigate = (section: string) => {
    if (TABS.map(t => t.toLowerCase()).includes(section as any)) {
      setActiveTab(TABS.find(t => t.toLowerCase() === section)!);
      document.getElementById("content-tabs")?.scrollIntoView({ behavior: "smooth" });
    } else {
      const el = document.getElementById(section);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tabContent = useMemo(() => {
    switch (activeTab) {
      case "Apps":
        return <AppsSection projects={projects} onAdd={() => setShowAddApp(true)} isAdmin={isAdmin} />;
      case "Essays":
        return <EssaysSection essays={essays} onAdd={() => setShowAddEssay(true)} isAdmin={isAdmin} />;
      case "Art":
        return <ArtSection paintings={paintings} onAdd={() => setShowAddPainting(true)} isAdmin={isAdmin} />;
      case "Recipes":
        return <RecipesSection recipes={recipes} onAdd={() => setShowAddRecipe(true)} isAdmin={isAdmin} />;
    }
  }, [activeTab, projects, essays, paintings, recipes, isAdmin]);

  return (
    <div className="relative min-h-screen bg-background">
      <FlowerBackground />
      <div className="relative z-10">
        <Navbar onNavigate={handleNavigate} />
        <HeroSection onNavigate={handleNavigate} />

        {/* Tab Navigation */}
        <section id="content-tabs" className="pt-20 pb-6">
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex items-center gap-1 border-b border-border">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="relative px-5 py-3 text-sm font-sans transition-colors duration-200"
                >
                  <span className={activeTab === tab ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"}>
                    {tab}
                  </span>
                  {activeTab === tab && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {tabContent}
          </motion.div>
        </AnimatePresence>

        <AboutSection />
        <ContactSection />
        <footer className="py-10 text-center border-t border-border">
          <p className="text-xs text-muted-foreground font-sans tracking-wider">
            © {new Date().getFullYear()} Thejaswini · Built with intention
          </p>
        </footer>
      </div>

      <AddAppDialog open={showAddApp} onClose={() => setShowAddApp(false)} onAdd={(p) => setProjects((prev) => [...prev, p])} />
      <AddEssayDialog open={showAddEssay} onClose={() => setShowAddEssay(false)} onAdd={(e) => setEssays((prev) => [...prev, e])} />
      <AddPaintingDialog open={showAddPainting} onClose={() => setShowAddPainting(false)} onAdd={(p) => setPaintings((prev) => [...prev, p])} />
      <AddRecipeDialog open={showAddRecipe} onClose={() => setShowAddRecipe(false)} onAdd={(r) => setRecipes((prev) => [...prev, r])} />
    </div>
  );
};

export default Index;
