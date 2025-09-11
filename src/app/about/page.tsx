import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackgroundPattern from "@/components/BackgroundPattern";

export default function About() {
  return (
    <div className="min-h-screen bg-viridian-400">
      <BackgroundPattern />
      <Navigation currentPage="about" />

      <main className="container mx-auto px-6 relative z-10">
        <section className="py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black text-mint-cream text-center mb-16 drop-shadow-lg">
              About
            </h2>
              {/*about text area */}
              <div className="bg-mint-cream/98 backdrop-blur-sm rounded-2xl p-12 border-2 border-viridian-600/50 shadow-2xl max-w-4xl mx-auto md:col-span-3 mb-12">
                <h3 className="text-2xl font-bold text-coffee-600 mb-6">Our Goal</h3>
                <p className="text-lg font-medium text-coffee-300 mb-8 leading-relaxed">
                  We created ChessMD because good chess software should be free to use.
                </p>
                <p className="text-lg font-medium text-coffee-300 mb-8 leading-relaxed">
                  ChessMD is currently in development and is improving everyday!
                </p>
                <p className="text-lg font-medium text-coffee-300 leading-relaxed">
                  Leave your suggestions, report any issues, or request for help at <a href="mailto:support@chessmd.org" className="text-coffee-500 font-bold hover:text-coffee-400 underline transition-colors">support@chessmd.org</a> 
                </p>
              </div>
              {/* update log box*/}
              <div className="bg-mint-cream/98 backdrop-blur-sm rounded-2xl p-12 border-2 border-viridian-600/50 shadow-2xl max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-coffee-600 mb-6">Update Log</h3>
                <div className="text-coffee-400 text-m space-y-4">
                  <strong>v1.0 (2025-9-10)</strong>
                  <ul className="list-disc pl-5">
                    <li>Introduced play against bots: play live chess games against bots, featuring customizable skill levels and time controls</li>
                    <li>Revamped opening explorer: process opening databases containing hundreds of thousands of games with ease to get detailed insights on position win rates and play rates</li>
                    <li>Polished several features to offer a better user experience</li>              
                  </ul>
                  <strong>v1.0-beta.3 (2025-8-16)</strong>
                  <ul className="list-disc pl-5">
                    <li>Patched several critical parsing-related issues</li>
                    <li>Released ChessMD on Mac and Linux</li>              
                  </ul>
                  <strong>v1.0-beta.2 (2025-8-10)</strong>
                  <ul className="list-disc pl-5">
                    <li>Introduced importing games from online databases: download any games from chess.com</li>
                    <li>Improved game review significantly: new game summary table, visual improvements, and bug fixes</li>
                    <li>Made several UI improvements to the tab system, database viewer, and main window</li>
                    <li>Moved database saving into a worker thread</li>
                    <li>Fixed several minor issues</li>                  
                  </ul>
                  <strong>v1.0-beta.1 (2025-7-21)</strong>
                  <ul className="list-disc pl-5">
                    <li>Improved database functionality: create empty databases and add new games to existing databases</li>
                    <li>Fixed minor bugs</li>                  
                  </ul>
                  <strong>v1.0-beta (2025-7-18)</strong>
                  <ul className="list-disc pl-5">
                    <li>Introduced game review: analyse and break down mistakes quickly through a visual evaluation graph</li>
                    <li>Introduced opening explorer: upload any PGN database and find games that played the same position</li>
                    <li>Introduced PGN database saving: annotations, new variations, and other changes can now be saved</li>
                    <li>Improved engine analysis: preview and append moves from the engine&apos;s suggested lines</li>
                    <li>Improved visuals and added some QoL features</li>
                    <li>Included an installer for the program</li>
                  </ul>
                  <strong>v1.0-alpha (2025-5-11)</strong>
                  <ul className="list-disc pl-5">
	                  <li>The first version of ChessMD!</li>
                  </ul>
                </div>
              </div> 
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
