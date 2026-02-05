import SearchBar from "./SearchBar";


export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      
      <div className="max-w-6xl mx-auto px-4 w-full">

        <h1 className="text-6xl md:text-7xl font-bold text-black leading-tight max-w-3xl">
          Discover more than{" "}
          
           <span className="relative inline-block">
    <span className="text-brand relative z-10">
      5000+ Jobs
    </span>

    <img
      src="/icons/hero-text.svg"
      alt=""
      className="absolute left-0 -bottom-3 w-full"
    />
  </span>
        </h1>

        <p className="text-gray-500 mt-16 text-2xl">
          Your dream job is just one click away
        </p>

      <div className="mt-16 w-full max-w-5xl">
          <SearchBar />
        </div>

      </div>
    </section>
  );
}
