export default function SearchBar() {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-4 flex flex-col md:flex-row gap-3 w-full">

      {/* Category */}
      <select className="flex-1 px-4 py-3 rounded-lg border outline-none text-gray-500">
        <option>Category</option>
        <option>Engineering</option>
        <option>Design</option>
        <option>Marketing</option>
      </select>

      {/* Location */}
      <input
        placeholder="Location"
        className="flex-1 px-4 py-3 rounded-lg border outline-none placeholder-gray-500"
      />

      {/* Experience */}
      <select className="flex-1 px-4 py-3 rounded-lg border outline-none text-gray-500">
        <option>Experience Level</option>
        <option>Entry-Level</option>
        <option>Mid-Level</option>
        <option>Senior</option>
      </select>

      {/* CTA */}
      <button className="bg-brand text-white px-8 py-3 rounded-lg whitespace-nowrap hover:bg-blue-800 transition">
        Search
      </button>

    </div>
  );
}
