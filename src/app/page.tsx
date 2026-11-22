import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Database management",
    body: "Import PGN files and organize your game collections across multiple databases.",
    icon: (
      <>
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </>
    ),
  },
  {
    title: "Intuitive navigation",
    body: "Work with multiple games and databases at once using a tabbed interface.",
    icon: <path d="M9 5l7 7-7 7" />,
  },
  {
    title: "Game review",
    body: "Analyze your games with annotations, comments, and move-by-move insight.",
    icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    title: "Engine analysis",
    body: "Real-time evaluation and best-move suggestions with UCI engine support.",
    icon: (
      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation currentPage="home" />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-6 pb-20 pt-20 text-center sm:pt-28">
          <h1 className="font-display text-balance text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-6xl">
            Master chess with <span className="text-accent">ChessMD</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-muted sm:text-lg">
            Improve your game with unlimited game review, interactive engine
            analysis, and training tools built by chess masters.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/download"
              className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-medium text-on-accent transition-colors hover:bg-accent-hover sm:w-auto"
            >
              Download ChessMD
            </Link>
            <a
              href="https://github.com/ChessMD/ChessMD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-lg border border-border-subtle px-6 py-3 text-base font-medium text-ink transition-colors hover:border-accent hover:text-accent sm:w-auto"
            >
              View on GitHub
            </a>
          </div>
        </section>

        {/* Screenshot */}
        <section className="mx-auto max-w-5xl px-6">
          <figure className="overflow-hidden rounded-xl border border-border-subtle bg-surface">
            <Image
              src="/screenshots/Figure_2.1c.png"
              alt="ChessMD game analysis screen"
              width={1920}
              height={1080}
              className="w-full"
              priority
            />
          </figure>
          <figcaption className="mt-3 text-center text-sm text-ink-muted">
            The ChessMD game analysis screen
          </figcaption>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="font-display text-center text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Everything you need to study
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-ink-muted">
            A focused set of tools for reviewing, analyzing, and organizing your games.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-border-subtle bg-surface p-6 transition-colors hover:border-accent"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-muted text-accent">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to action band — deliberate use of the brand color */}
        <section className="bg-accent">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-16 text-center">
            <h2 className="font-display text-balance text-2xl font-bold tracking-tight text-on-accent sm:text-3xl">
              Ready to start studying?
            </h2>
            <p className="max-w-xl text-on-accent/80">
              ChessMD is free and available on Windows, macOS, and Linux.
            </p>
            <Link
              href="/download"
              className="inline-flex items-center justify-center rounded-lg bg-canvas px-6 py-3 text-base font-medium text-accent transition-opacity hover:opacity-90"
            >
              Download ChessMD
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
