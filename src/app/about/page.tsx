import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-viridian-400">
      <Navigation currentPage="about" />

      <main className="container mx-auto px-6 relative z-10">
        <section className="py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black text-mint-cream text-center mb-16 drop-shadow-lg">
              About ChessMD
            </h2>
            <p className="text-xl font-medium text-cambridge-blue-100 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
              Coming soon...
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
