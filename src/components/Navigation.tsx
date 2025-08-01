import Image from "next/image";
import Link from "next/link";

// apparantly props is good practice dont ask me
interface NavigationProps {
  currentPage?: 'home' | 'guide' | 'download' | 'about';
}

export default function Navigation({ currentPage = 'home' }: NavigationProps) {
  return (
    <header className="container mx-auto px-6 py-8 relative z-10">
      <nav className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 transition transform hover:scale-105 hover:translate-y-0.5 duration-200">
          <div className="w-16 h-16 bg-mint-cream rounded-lg flex items-center justify-center shadow-lg">
            <Image src="/logo.png" alt="ChessMD Logo" width={48} height={48} />
          </div>
          <h1 className="text-2xl font-bold text-mint-cream">ChessMD</h1>
        </Link>
        <div className="hidden md:flex">
          <div className="relative bg-cambridge-blue-800/30 rounded-lg p-1 backdrop-blur-sm">
            {/* checkerbox bg  */}
            <div className="grid grid-cols-6 grid-rows-1 h-12 w-auto absolute inset-1 rounded-lg overflow-hidden opacity-20">
              <div className="bg-cambridge-blue-600"></div>
              <div className="bg-transparent"></div>
              <div className="bg-cambridge-blue-600"></div>
              <div className="bg-transparent"></div>
              <div className="bg-cambridge-blue-600"></div>
              <div className="bg-transparent"></div>
            </div>
            <div className="relative z-10 flex space-x-8 px-6 py-3">
              <Link href="/guide" className={`transition-colors font-medium ${ currentPage === 'guide' ? 'text-cambridge-blue-200' : 'text-mint-cream hover:text-cambridge-blue-200'}`}>
                Guide
              </Link>
              <Link href="/download" className={`transition-colors font-medium ${ currentPage === 'download' ? 'text-cambridge-blue-200' : 'text-mint-cream hover:text-cambridge-blue-200'}`}>
                Download
              </Link>
              <Link href="/about" className={`transition-colors font-medium ${ currentPage === 'about' ? 'text-cambridge-blue-200' : 'text-mint-cream hover:text-cambridge-blue-200'}`}>
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
