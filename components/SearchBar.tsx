import { useState } from "react";
import { useRouter } from "next/router";

export default function SearchBar() {
  const router = useRouter();

  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");

  const handleSearch = () => {
    router.push({
      pathname: "/jobs",
      query: {
        category,
        location,
        experience,
      },
    });
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-4 flex flex-col md:flex-row gap-3 w-full">

      {/* Category */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="flex-1 px-4 py-3 rounded-lg border outline-none text-gray-700"
      >
        <option value="">Category</option>
        <option value="engineering">Engineering</option>
        <option value="product_management">Product</option>
        <option value="marketing">Marketing</option>
        <option value="sales">Sales</option>
        <option value="design">Design</option>
      </select>

      {/* Location */}
      <select
      value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="flex-1 px-4 py-3 rounded-lg border outline-none placeholder-gray-500 text-gray-700"> 
      <option value="">Location</option>
      <option value="Poland">Poland</option>
      <option value="United States">United States</option>
      <option value="United Kingdom">United Kingdom</option>
      <option value="Remote">Remote</option>
      <option value="Germany">Germany</option>
      <option value="France">France</option>
      <option value="France">France</option>
      </select>


      {/* Experience */}
      <select
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        className="flex-1 px-4 py-3 rounded-lg border outline-none text-gray-700"
      >
        <option value="">Experience Level</option>
        <option value="entry_level">Entry-Level</option>
        <option value="associate">Associate</option>
        <option value="mid_senior_level">Mid-Senior</option>
        <option value="director">Director</option>
        <option value="executive">Executive</option>

      </select>

      {/* CTA */}
      <button
        onClick={handleSearch}
        className="bg-brand text-white px-8 py-3 rounded-lg whitespace-nowrap hover:bg-blue-800 transition"
      >
        Search
      </button>

    </div>
  );
}
