interface NavbarProps {
  onNavigate: (section: string) => void;
}

const Navbar = ({ onNavigate }: NavbarProps) => {
  const links = ["Apps", "Essays", "Art", "Recipes", "About", "Contact"];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => onNavigate("hero")}
          className="font-serif text-lg font-bold text-foreground hover:text-muted-foreground transition-colors"
        >
          Thejaswini
        </button>
        <div className="flex gap-6">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => onNavigate(link.toLowerCase())}
              className="text-sm font-sans text-foreground hover:text-muted-foreground transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
