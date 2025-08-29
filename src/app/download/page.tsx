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
          <h2 className="text-5xl md:text-7xl font-black text-mint-cream mb-0 drop-shadow-lg flex flex-col items-center">
            Download
            <span className="text-lg md:text-2xl font-semibold text-white-200 mt-2">
              Version: <span className="font-mono text-mint-cream-400">v1.0-beta.3</span>
            </span>
          </h2>
          <div className="mt-6 text-center mb-8">
              <a href="https://github.com/ChessMD/ChessMD/releases" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 text-base md:text-m font-bold rounded-lg border-2 border-viridian-600 text-mint-cream bg-white/5 hover:bg-white/10 transition-colors">
                All releases & older versions
              </a>
          </div>
          <p className="text-xl font-bold text-emerald-100 mb-6 max-w-3xl mx-auto leading-relaxed">
            Get the latest version of ChessMD for your platform.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-mint-cream/98 backdrop-blur-sm rounded-2xl p-8 border-2 border-viridian-600/50 shadow-2xl">
              <div className="w-16 h-16 bg-cambridge-blue-600 rounded-lg flex items-center justify-center mb-6 mx-auto shadow-lg">
                <span className="text-mint-cream font-bold text-2xl">🪟</span>
              </div>
              <h3 className="text-3xl font-black text-coffee-400 mb-4">Windows</h3>
              <p className="text-coffee-500 text-sm mb-6">Windows 10/11 (64-bit)</p>
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <DownloadButton href="https://apps.microsoft.com/detail/XPFFTX69WQS18M?hl=en-US&gl=US&ocid=pdpshare" className="bg-coffee-600 hover:bg-coffee-700 text-mint-cream font-bold px-8 py-4 rounded-lg transform hover:scale-105 transition-all duration-200 transition-colors w-full shadow-md text-lg">
                  Installer
                  <span className="block  text-sm font-medium leading-none"> (Recommended) </span>
                </DownloadButton>
                <DownloadButton href="https://github.com/ChessMD/ChessMD/releases/download/v1.0-beta.3/ChessMD_portable.zip" className="bg-coffee-600 hover:bg-coffee-700 text-mint-cream font-bold px-8 py-4 rounded-lg transform hover:scale-105 transition-all duration-200  transition-colors w-full shadow-md text-lg">
                  Portable
                </DownloadButton>
              </div>
            </div>
            <div className="bg-mint-cream/98 backdrop-blur-sm rounded-2xl p-8 border-2 border-viridian-600/50 shadow-2xl">
              <div className="w-16 h-16 bg-cambridge-blue-600 rounded-lg flex items-center justify-center mb-6 mx-auto shadow-lg">
                <span className="text-mint-cream font-bold text-2xl">🍎</span>
              </div>
              <h3 className="text-3xl font-black text-coffee-400 mb-4">macOS</h3>
              <p className="text-coffee-600 font-medium text-sm mb-6">macOS 12+ (Intel/Apple Silicon)</p>
              <DownloadButton href="https://github.com/ChessMD/ChessMD/releases/download/v1.0-beta.3/ChessMD.dmg" className="bg-coffee-600 hover:bg-coffee-700 text-mint-cream font-bold px-8 py-4 rounded-lg transform hover:scale-105 transition-all duration-200 transition-colors w-full shadow-md text-lg">
                Download 
              </DownloadButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
