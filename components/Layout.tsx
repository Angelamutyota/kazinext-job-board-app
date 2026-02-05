import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 min-h-screen">
        {children}
      </main>
    </>
  );
}
