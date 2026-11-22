import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const changelog = [
  {
    version: "v1.1",
    date: "2026-08-28",
    changes: [
      "Added language support, with translations to 10 languages",
      "Fixed several UI bugs",
      "Improved UX for managing opening database settings",
    ],
  },
  {
    version: "v1.0",
    date: "2025-09-10",
    changes: [
      "Introduced play against bots: play live chess games against bots, with customizable skill levels and time controls",
      "Revamped opening explorer: process databases of hundreds of thousands of games to get detailed insights on position win rates and play rates",
      "Polished several features for a better user experience",
    ],
  },
  {
    version: "v1.0-beta.3",
    date: "2025-08-16",
    changes: [
      "Patched several critical parsing-related issues",
      "Released ChessMD on Mac and Linux",
    ],
  },
  {
    version: "v1.0-beta.2",
    date: "2025-08-10",
    changes: [
      "Introduced importing games from online databases: download any games from chess.com",
      "Improved game review: new game summary table, visual improvements, and bug fixes",
      "Made several UI improvements to the tab system, database viewer, and main window",
      "Moved database saving into a worker thread",
      "Fixed several minor issues",
    ],
  },
  {
    version: "v1.0-beta.1",
    date: "2025-07-21",
    changes: [
      "Improved database functionality: create empty databases and add new games to existing databases",
      "Fixed minor bugs",
    ],
  },
  {
    version: "v1.0-beta",
    date: "2025-07-18",
    changes: [
      "Introduced game review: analyse and break down mistakes quickly through a visual evaluation graph",
      "Introduced opening explorer: upload any PGN database and find games that played the same position",
      "Introduced PGN database saving: annotations, new variations, and other changes can now be saved",
      "Improved engine analysis: preview and append moves from the engine's suggested lines",
      "Improved visuals and added some quality-of-life features",
      "Included an installer for the program",
    ],
  },
  {
    version: "v1.0-alpha",
    date: "2025-05-11",
    changes: ["The first version of ChessMD!"],
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation currentPage="about" />

      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          About
        </h1>

        <section className="mt-10 rounded-xl border border-border-subtle bg-surface p-8">
          <h2 className="font-display text-xl font-bold text-ink">Our goal</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-ink-muted">
            <p>We created ChessMD because good chess software should be free to use.</p>
            <p>ChessMD is in active development and improving every day.</p>
            <p>
              Leave a suggestion, report an issue, or ask for help at{" "}
              <a
                href="mailto:support@chessmd.org"
                className="font-medium text-accent underline underline-offset-2 transition-colors hover:text-accent-hover"
              >
                support@chessmd.org
              </a>
              .
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-xl border border-border-subtle bg-surface p-8">
          <h2 className="font-display text-xl font-bold text-ink">Update log</h2>
          <ol className="mt-6 space-y-8">
            {changelog.map((entry) => (
              <li key={entry.version}>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm font-semibold text-ink">
                    {entry.version}
                  </span>
                  <span className="text-xs text-ink-muted">{entry.date}</span>
                </div>
                <ul className="mt-3 list-disc space-y-1.5 border-l border-border-subtle pl-8 text-sm leading-relaxed text-ink-muted marker:text-border-subtle">
                  {entry.changes.map((change, i) => (
                    <li key={i}>{change}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <Footer />
    </div>
  );
}
