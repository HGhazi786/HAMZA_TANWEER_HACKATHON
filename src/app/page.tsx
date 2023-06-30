import Hero from "./components/hero";
import Front_page from "./components/rest";

export default async function Home() {
  return (
    <main className="font-serif">
      <Hero />
      <Front_page />
      <div className="mx-24 grid grid-cols-4"></div>
      
    </main>
  );
}
