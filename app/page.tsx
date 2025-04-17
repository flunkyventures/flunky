import { NavbarDemo } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import Image from "next/image";
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
        
        {/* Main content */}
        <main className="flex flex-col gap-[32px] items-center sm:items-start p-8 sm:p-20">
          <Image
            src="/flunky logo.png"
            alt="Flunky Ventures logo"
            width={180}
            height={38}
            priority
          />
          <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2 tracking-[-.01em]">
              This website is{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                under construction
              </code>
              .
            </li>
            <li className="tracking-[-.01em]">
              Thank you for being patient :)
            </li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href=""
              rel="noopener noreferrer"
            >
              <Image
                src="/flunky logo.png"
                alt="FlunkyVentures logomark"
                width={20}
                height={20}
              />
              Check again later
            </a>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}