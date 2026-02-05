export default function Pagination() {
  return (
    <div className="flex justify-center gap-2 mt-12 mb-20">
      <button className="px-3 py-1 border rounded">Previous</button>

      {[1,2,3,4,5].map((num) => (
        <button
          key={num}
          className="px-3 py-1 border rounded hover:bg-gray-700"
        >
          {num}
        </button>
      ))}

      <button className="px-3 py-1 border rounded">Next</button>
    </div>
  );
}
