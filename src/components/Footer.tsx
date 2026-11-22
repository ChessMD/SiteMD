import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border-subtle">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <Link href="/" className="flex items-center gap-2 text-ink transition-colors hover:text-accent">
          <Image src="/logo.png" alt="ChessMD logo" width={20} height={20} className="rounded" />
          <span className="text-sm font-semibold">ChessMD</span>
        </Link>

        <div className="flex items-center gap-5 text-sm text-ink-muted">
          <Link href="/guide" className="transition-colors hover:text-ink">Guide</Link>
          <Link href="/download" className="transition-colors hover:text-ink">Download</Link>
          <a
            href="https://github.com/ChessMD/ChessMD"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            GitHub
          </a>
        </div>

        <p className="text-sm text-ink-muted">© {year} ChessMD</p>
      </div>
    </footer>
  );
}
