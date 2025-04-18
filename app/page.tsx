import { NavbarDemo } from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Navbar at the absolute top of the page */}
      <header className="w-full">
        <NavbarDemo />
      </header>
      
      {/* Content container - starts right after navbar */}
      <div className="flex flex-col flex-1">
        {/* Hero section */}
        <section className="w-full">
          {/*<Hero />*/}
        </section>
        
        <Footer />
      </div>
    </div>
  );
}