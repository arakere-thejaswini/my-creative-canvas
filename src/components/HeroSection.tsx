const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center bg-hero">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-lg text-muted-foreground mb-3 font-sans">
            Hi, I'm Thejaswini
          </p>
          <h1 className="text-5xl md:text-7xl leading-tight mb-6">
            <span className="font-sans-bold">Software Engineer</span>
            <br />
            <span className="font-serif-italic">Creating</span>{" "}
            <span className="font-serif-bold">things I love,</span>
            <br />
            <span className="font-serif-bold">one project at a time</span>
          </h1>
          <p className="text-base text-muted-foreground max-w-md font-sans leading-relaxed">
            I build apps, write essays, paint, and cook — this is my space to share it all.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
