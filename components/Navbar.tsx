import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative flex items-center max-w-6xl mx-auto px-4 py-6 border-b bg-white">

      {/* LOGO — pinned left */}
      <div className="font-bold text-xl text-brand">
        KaziNext
      </div>

      {/* CENTER NAV */}
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-10 text-gray-600 font-medium">
        <Link href="/" className="hover:text-black transition">
          Home
        </Link>

        <Link href="/jobs" className="hover:text-black transition">
          Jobs
        </Link>
      </div>

    </nav>
  );
}
