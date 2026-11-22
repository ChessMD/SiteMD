import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import MobileMenu from "@/components/MobileMenu";
import { navLinks, type NavKey } from "@/components/navLinks";

interface NavigationProps {
  currentPage?: NavKey;
}

export default function Navigation({ currentPage = "home" }: NavigationProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-canvas/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-ink transition-colors hover:text-accent"
        >
          <Image src="/logo.png" alt="ChessMD logo" width={32} height={32} className="rounded" />
          <span className="font-display text-lg font-bold tracking-tight">ChessMD</span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = currentPage === link.key;
              return (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      active ? "text-accent" : "text-ink-muted hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
          <MobileMenu currentPage={currentPage} />
        </div>
      </nav>
    </header>
  );
}
