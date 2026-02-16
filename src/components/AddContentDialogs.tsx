import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AppProject, Essay, Painting, Recipe } from "@/data/content";

interface AddAppDialogProps {
  open: boolean;
  onClose: () => void;
  onAdd: (project: AppProject) => void;
}

export const AddAppDialog = ({ open, onClose, onAdd }: AddAppDialogProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [tools, setTools] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [liveUrl, setLiveUrl] = useState("");

  const handleSubmit = () => {
    if (!title || !description) return;
    onAdd({
      id: Date.now().toString(),
      title,
      description,
      image,
      tools: tools.split(",").map((t) => t.trim()).filter(Boolean),
      githubUrl: githubUrl || undefined,
      liveUrl: liveUrl || undefined,
    });
    setTitle(""); setDescription(""); setImage(""); setTools(""); setGithubUrl(""); setLiveUrl("");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader><DialogTitle className="font-serif">Add New App</DialogTitle></DialogHeader>
        <div className="space-y-4">
          <div><Label>Title *</Label><Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="My Cool App" /></div>
          <div><Label>Description *</Label><Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="What does it do?" /></div>
          <div><Label>Image URL</Label><Input value={image} onChange={(e) => setImage(e.target.value)} placeholder="https://..." /></div>
          <div><Label>Tools (comma-separated)</Label><Input value={tools} onChange={(e) => setTools(e.target.value)} placeholder="React, TypeScript, Tailwind" /></div>
          <div><Label>GitHub URL (optional)</Label><Input value={githubUrl} onChange={(e) => setGithubUrl(e.target.value)} placeholder="https://github.com/..." /></div>
          <div><Label>Live URL (optional)</Label><Input value={liveUrl} onChange={(e) => setLiveUrl(e.target.value)} placeholder="https://..." /></div>
          <button onClick={handleSubmit} className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg font-sans text-sm hover:opacity-90 transition-opacity">
            Add App
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

interface AddEssayDialogProps {
  open: boolean;
  onClose: () => void;
  onAdd: (essay: Essay) => void;
}

export const AddEssayDialog = ({ open, onClose, onAdd }: AddEssayDialogProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!title || !content) return;
    onAdd({
      id: Date.now().toString(),
      title,
      content,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    });
    setTitle(""); setContent("");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader><DialogTitle className="font-serif">Add New Essay</DialogTitle></DialogHeader>
        <div className="space-y-4">
          <div><Label>Title *</Label><Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="My Thoughts On..." /></div>
          <div><Label>Content *</Label><Textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write your essay here..." className="min-h-[200px]" /></div>
          <button onClick={handleSubmit} className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg font-sans text-sm hover:opacity-90 transition-opacity">
            Add Essay
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

interface AddPaintingDialogProps {
  open: boolean;
  onClose: () => void;
  onAdd: (painting: Painting) => void;
}

export const AddPaintingDialog = ({ open, onClose, onAdd }: AddPaintingDialogProps) => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = () => {
    if (!title || !imageUrl) return;
    onAdd({
      id: Date.now().toString(),
      title,
      imageUrl,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    });
    setTitle(""); setImageUrl("");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader><DialogTitle className="font-serif">Add Painting</DialogTitle></DialogHeader>
        <div className="space-y-4">
          <div><Label>Title *</Label><Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Sunset Over Mountains" /></div>
          <div><Label>Image URL (jpeg/png) *</Label><Input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="https://...image.jpg" /></div>
          <button onClick={handleSubmit} className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg font-sans text-sm hover:opacity-90 transition-opacity">
            Add Painting
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

interface AddRecipeDialogProps {
  open: boolean;
  onClose: () => void;
  onAdd: (recipe: Recipe) => void;
}

export const AddRecipeDialog = ({ open, onClose, onAdd }: AddRecipeDialogProps) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = () => {
    if (!title) return;
    onAdd({
      id: Date.now().toString(),
      title,
      image,
      ingredients: ingredients.split("\n").map((i) => i.trim()).filter(Boolean),
      steps: steps.split("\n").map((s) => s.trim()).filter(Boolean),
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    });
    setTitle(""); setImage(""); setIngredients(""); setSteps("");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader><DialogTitle className="font-serif">Add Recipe</DialogTitle></DialogHeader>
        <div className="space-y-4">
          <div><Label>Title *</Label><Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Grandma's Pasta" /></div>
          <div><Label>Image URL</Label><Input value={image} onChange={(e) => setImage(e.target.value)} placeholder="https://...food.jpg" /></div>
          <div><Label>Ingredients (one per line)</Label><Textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder={"2 cups flour\n1 tsp salt\n3 eggs"} className="min-h-[120px]" /></div>
          <div><Label>Steps (one per line)</Label><Textarea value={steps} onChange={(e) => setSteps(e.target.value)} placeholder={"Mix dry ingredients\nAdd eggs and knead\nRoll out and cut"} className="min-h-[120px]" /></div>
          <button onClick={handleSubmit} className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg font-sans text-sm hover:opacity-90 transition-opacity">
            Add Recipe
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
