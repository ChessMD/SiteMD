import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Features() {
  return (
    <div className="min-h-screen bg-viridian-400">
      <Navigation currentPage="features" />

      <main className="container mx-auto px-6 relative z-10">
        <section className="py-20">
          <h2 className="text-5xl md:text-7xl font-black text-mint-cream text-center mb-16 drop-shadow-lg">
            ChessMD Features
          </h2>
          <p className="text-xl font-medium text-cambridge-blue-100 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
            Coming soon...
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
