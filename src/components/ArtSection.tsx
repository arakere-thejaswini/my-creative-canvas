import { Painting } from "@/data/content";

interface ArtSectionProps {
  paintings: Painting[];
  onAdd: () => void;
}

const ArtSection = ({ paintings, onAdd }: ArtSectionProps) => {
  return (
    <section id="art" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-serif-bold">Art & Paintings</h2>
          <button
            onClick={onAdd}
            className="text-sm font-sans bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            + Add Painting
          </button>
        </div>
        {paintings.length === 0 ? (
          <p className="text-muted-foreground text-center py-12 font-sans">
            No paintings yet. Click "Add Painting" to showcase your art.
          </p>
        ) : (
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {paintings.map((painting) => (
              <div key={painting.id} className="break-inside-avoid rounded-xl overflow-hidden border border-border group">
                <img
                  src={painting.imageUrl}
                  alt={painting.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-3 bg-card">
                  <p className="text-sm font-serif-bold">{painting.title}</p>
                  <p className="text-xs text-muted-foreground font-sans">{painting.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ArtSection;
