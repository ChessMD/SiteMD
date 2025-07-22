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
              About
            </h2>
            
            <div className="bg-mint-cream/98 backdrop-blur-sm rounded-2xl p-12 border-2 border-viridian-600/50 shadow-2xl max-w-4xl mx-auto">
              <p className="text-xl font-medium text-coffee-600 mb-8 leading-relaxed">
                ChessMD was abcdefg.
              </p>
              
              <p className="text-lg font-medium text-coffee-700 mb-8 leading-relaxed">
                hijklmnop
              </p>
              
              <p className="text-lg font-medium text-coffee-700 leading-relaxed">
                qrstuvwxyz
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
