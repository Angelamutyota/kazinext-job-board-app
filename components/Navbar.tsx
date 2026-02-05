export default function Navbar() {
  return (
    <nav className="flex justify-between items-center max-w-6xl mx-auto px-4 py-6 sticky">
      <h1 className="font-bold text-xl text-brand">
        KaziNext
      </h1>
       <div className="flex gap-3 text-gray-600">
        <a href="/"  className="hover:text-black cursor-pointer">
          Home
        </a>
      </div>
      <div className="flex gap-3 text-gray-600">
        <a href="/jobs"  className="hover:text-black cursor-pointer">
          Jobs
        </a>
      </div>
    </nav>
  );
}
