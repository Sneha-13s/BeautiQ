export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6">
      <h1 className="text-2xl font-bold">BeautiQ</h1>

      <div className="flex gap-6">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">AI Planner</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}