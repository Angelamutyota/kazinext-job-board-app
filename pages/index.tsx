import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import JobGrid from "@/components/JobGrid";
import Pagination from "@/components/Pagination";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Hero />
      <JobGrid />
      <Pagination />
    </main>
  );
}
