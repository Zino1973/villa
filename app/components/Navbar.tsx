export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <h1 className="text-white text-2xl font-bold">
          House Villa Talija
        </h1>

        <nav className="hidden md:flex gap-8 text-white font-medium">
          <a href="#">Home</a>
          <a href="#galerie">Galerie</a>
          <a href="#ausstattung">Ausstattung</a>
          <a href="#preise">Preise</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </div>
    </header>
  );
}