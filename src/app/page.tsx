import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DownloadButton from "@/components/DownloadButton";
import Image from "next/image";

import BackgroundPattern from "@/components/BackgroundPattern";

export default function Home() {
  return (
    <div className="min-h-screen bg-viridian-400 relative">
      <BackgroundPattern />
      <Navigation currentPage="home" />

      <main className="container mx-auto px-6 relative z-10">
        {/*the main big text area */}
        <section className="text-center py-20">
          <h2 className="text-5xl md:text-7xl font-black text-mint-cream mb-6 drop-shadow-lg">
            Master Chess with <span className="bg-coffee-500 bg-clip-text text-transparent"> ChessMD</span>
          </h2>
          <p className="text-xl font-medium text-cambridge-blue-100 mb-12 max-w-6xl mx-auto leading-relaxed">
            The ultimate chess learning platform. Improve your game with database
            analysis, built-in game review, and game study tools.
          </p>
          {/* use download button component cuz client side rendering */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <DownloadButton href="https://github.com/ChessMD/ChessMD/releases/download/v1.0-beta/setup.exe" className="bg-coffee-600 text-mint-cream font-bold px-8 py-4 rounded-lg text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 hover:bg-coffee-700 shadow-lg">
              Download for Windows
            </DownloadButton>
            <DownloadButton href="https://github.com/ChessMD/ChessMD/releases/download/v1.0-beta/setup.exe" className="border-3 border-mint-cream bg-transparent text-mint-cream font-bold px-8 py-4 rounded-lg text-lg hover:bg-mint-cream hover:text-viridian-600 transition-all duration-200 shadow-lg">
              Download for Mac
            </DownloadButton>
          </div>
        </section>

        {/* features section with the \boxes */}
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/20">
              <div className="bg-coffee-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {/* icon 1 (i did not make this myself) */}
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth={2} fill="none"/>
                  <path stroke="currentColor" strokeWidth={2} fill="none" d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-mint-cream mb-3">
                Database Management
              </h4>
              <p className="text-cambridge-blue-100 leading-relaxed">
                Browse and manage multiple chess databases with ease. Import PGN
                files and organize your game collections.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/20">
              <div className="bg-coffee-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {/* icon 2 (i did not make this one myself in fact i didnt make any of them myself) */}
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-mint-cream mb-3">
                Intuitive Navigation
              </h4>
              <p className="text-cambridge-blue-100 leading-relaxed">
                Work with multiple games simultaneously using tabs. Switch between
                databases and study organized!
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/20">
              <div className="bg-coffee-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {/* what i said before 3*/}
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-mint-cream mb-3">
                Game Review
              </h4>
              <p className="text-cambridge-blue-100 leading-relaxed">
                Analyze your games with detailed review tools. Add annotations,
                comments, and identify brilliant ideas!
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/20">
              <div className="bg-coffee-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {/* same thing 4 */}
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-mint-cream mb-3">
                Engine Analysis
              </h4>
              <p className="text-cambridge-blue-100 leading-relaxed">
                Real-time position analysis with UCI engine support. Get instant
                evaluations and best move suggestions.
              </p>
            </div>
          </div>

          {/* screenshot area*/}
          <div className="mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mx-auto max-w-6xl border border-white/20">
              <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center mb-4 overflow-hidden">
                <Image src="/screenshots/Figure_2.1c.png" alt="ChessMD game analysis screen" width={1920} height={1080} className="w-full h-full object-contain rounded-lg" priority/>
              </div>
              <p className="text-cambridge-blue-100 text-lg font-medium">
                ChessMD game analysis screen
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
