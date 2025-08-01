import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="font-sans text-5xl text-white flex-1 flex-col">
        <Hero />
      </div>
      <Footer />
    </>
  );
}
