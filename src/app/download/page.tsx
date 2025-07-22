import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Download() {
  return (
    <div className="min-h-screen bg-viridian-400">
      <Navigation currentPage="download" />

      <main className="container mx-auto px-6 relative z-10">
        <section className="py-20 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-mint-cream mb-6 drop-shadow-lg">
            Download ChessMD
          </h2>
          <p className="text-xl font-medium text-cambridge-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Coming soon...
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
