import { useState, useRef } from "react";
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

const Index = () => {
  const [projects, setProjects] = useState<AppProject[]>(initialProjects);
  const [essays, setEssays] = useState<Essay[]>(initialEssays);
  const [paintings, setPaintings] = useState<Painting[]>(initialPaintings);
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes);

  const [showAddApp, setShowAddApp] = useState(false);
  const [showAddEssay, setShowAddEssay] = useState(false);
  const [showAddPainting, setShowAddPainting] = useState(false);
  const [showAddRecipe, setShowAddRecipe] = useState(false);

  const handleNavigate = (section: string) => {
    const el = document.getElementById(section);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-background">
      <FlowerBackground />
      <div className="relative z-10">
        <Navbar onNavigate={handleNavigate} />
        <HeroSection />
        <AppsSection projects={projects} onAdd={() => setShowAddApp(true)} />
        <EssaysSection essays={essays} onAdd={() => setShowAddEssay(true)} />
        <ArtSection paintings={paintings} onAdd={() => setShowAddPainting(true)} />
        <RecipesSection recipes={recipes} onAdd={() => setShowAddRecipe(true)} />
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
