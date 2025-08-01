import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DownloadButton from "@/components/DownloadButton";
import BackgroundPattern from "@/components/BackgroundPattern";

export default function Download() {
  return (
    <div className="min-h-screen bg-viridian-400 relative">
      <BackgroundPattern />
      <Navigation currentPage="download" />

      <main className="container mx-auto px-6 relative z-10">
        <section className="py-20 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-mint-cream mb-6 drop-shadow-lg flex flex-col items-center">
            Download
            <span className="text-lg md:text-2xl font-semibold text-cambridge-blue-200 mt-2">
              Version: <span className="font-mono text-coffee-400">v1.0-beta.1</span>
            </span>
          </h2>
          <p className="text-xl font-medium text-cambridge-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get the latest version of ChessMD for your platform.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-mint-cream/98 backdrop-blur-sm rounded-2xl p-8 border-2 border-viridian-600/50 shadow-2xl">
              <div className="w-16 h-16 bg-cambridge-blue-600 rounded-lg flex items-center justify-center mb-6 mx-auto shadow-lg">
                <span className="text-mint-cream font-bold text-2xl">🪟</span>
              </div>
              <h3 className="text-3xl font-black text-coffee-400 mb-4">Windows</h3>
              <p className="text-coffee-600 font-medium text-sm mb-6">Windows 10/11 (64-bit)</p>
              <ul className="text-coffee-700 text-sm mb-8 space-y-2">
                <li>• Offline support</li>
                <li>• Local engine</li>
                <li>• Local database access</li>
              </ul>
              <DownloadButton href="https://github.com/ChessMD/ChessMD/releases/download/v1.0-beta.1/setup.exe" className="bg-coffee-600 hover:bg-coffee-700 text-mint-cream font-bold px-8 py-4 rounded-lg transition-colors w-full shadow-md text-lg">
                Download (200 MB)
              </DownloadButton>
              
              <div className="mt-6">
                <h4 className="text-coffee-600 font-bold mb-2 text-base">Alternative Downloads</h4>
                <ul className="text-coffee-700 text-sm space-y-2">
                  <li>
                    <a href="https://github.com/ChessMD/ChessMD/releases/download/v1.0-beta.1/ChessMD_portable.zip" className="underline hover:text-coffee-500 transition-colors">
                      Portable ZIP 
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/ChessMD/ChessMD/releases" className="underline hover:text-coffee-500 transition-colors">
                      All releases & older versions
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-mint-cream/98 backdrop-blur-sm rounded-2xl p-8 border-2 border-viridian-600/50 shadow-2xl opacity-60">
              <div className="w-16 h-16 bg-cambridge-blue-600 rounded-lg flex items-center justify-center mb-6 mx-auto shadow-lg">
                <span className="text-mint-cream font-bold text-2xl">🍎</span>
              </div>
              <h3 className="text-3xl font-black text-coffee-400 mb-4">macOS</h3>
              <p className="text-coffee-600 font-medium text-sm mb-6">macOS 11+ (Intel/Apple Silicon)</p>
              <ul className="text-coffee-700 text-sm mb-8 space-y-2">
                <li>•</li>
                <li>•</li>
                <li>•</li>
              </ul>
              <button disabled className="bg-coffee-400 text-mint-cream font-bold px-8 py-4 rounded-lg w-full shadow-md text-lg cursor-not-allowed">
                Coming Soon
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
