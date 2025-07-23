import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t-2 border-cambridge-blue-600/60 mt-20 bg-cambridge-blue-900/80">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-coffee-600 rounded flex items-center justify-center shadow-md">
              <Image src="/logo.png" alt="ChessMD Logo" width={16} height={16} />
            </div>
            <span className="text-mint-cream font-black">ChessMD</span>
          </div>
          <div className="text-cambridge-blue-200 font-medium text-sm">
            2025 ChessMD
          </div>
        </div>
      </div>
    </footer>
  );
}
