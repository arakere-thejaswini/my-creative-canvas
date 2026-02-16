import { useState } from "react";
import { Plus } from "lucide-react";

export interface AppProject {
  id: string;
  title: string;
  description: string;
  image: string;
  tools: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Essay {
  id: string;
  title: string;
  content: string;
  date: string;
}

export interface Painting {
  id: string;
  title: string;
  imageUrl: string;
  date: string;
}

export interface Recipe {
  id: string;
  title: string;
  image: string;
  ingredients: string[];
  steps: string[];
  date: string;
}

// Initial data
export const initialProjects: AppProject[] = [
  {
    id: "1",
    title: "Pixelated Wedding Invite",
    description: "A charming pixelated wedding invitation with retro aesthetics and modern functionality.",
    image: "https://arakere-thejaswini.github.io/personal-website/images/project1.png",
    tools: ["React", "TypeScript", "Design"],
    liveUrl: "https://arakere-thejaswini.github.io/wedding-invite/",
  },
];

export const initialEssays: Essay[] = [];
export const initialPaintings: Painting[] = [];
export const initialRecipes: Recipe[] = [];
