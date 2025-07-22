import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-viridian-400">
      <Navigation currentPage="home" />

      <main className="container mx-auto px-6 relative z-10">
        <section className="text-center py-20">
          <h2 className="text-5xl md:text-7xl font-black text-mint-cream mb-6 drop-shadow-lg">
            Master Chess with <span className="bg-coffee-400 bg-clip-text text-transparent"> ChessMD</span>
          </h2>
          <p className="text-xl font-medium text-cambridge-blue-100 mb-12 max-w-6xl mx-auto leading-relaxed">
            The ultimate chess learning platform. Improve your game with database analysis, built-in game review, and game study tools.  
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-coffee-600 text-mint-cream font-bold px-8 py-4 rounded-lg text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 hover:bg-coffee-700 shadow-lg">
              Download for Windows
            </button>
            <button className="border-3 border-mint-cream bg-transparent text-mint-cream font-bold px-8 py-4 rounded-lg text-lg hover:bg-mint-cream hover:text-viridian-600 transition-all duration-200 shadow-lg">
              Download for Mac
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
