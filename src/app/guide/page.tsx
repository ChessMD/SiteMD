import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

const toc = [
  {
    id: "overview",
    label: "1. Overview",
    children: [{ id: "tab-system", label: "1.1 Tab System" }],
  },
  {
    id: "database-menu",
    label: "2. Database Menu",
    children: [
      { id: "adding-databases", label: "2.1 Adding Databases" },
      { id: "game-preview", label: "2.2 Game Preview" },
      { id: "sorting-games", label: "2.3 Sorting Games" },
      { id: "filtering-games", label: "2.4 Filtering Games" },
      { id: "customizing-headers", label: "2.5 Customizing Headers" },
    ],
  },
  {
    id: "board-menu",
    label: "3. Board Menu",
    children: [
      { id: "navigating-moves", label: "3.1 Navigating Moves" },
      { id: "saving-edits", label: "3.2 Saving Edits" },
      { id: "making-moves", label: "3.3 Making Moves and Variations" },
      { id: "deleting-moves", label: "3.4 Deleting Moves and Variations" },
      { id: "comments-annotations", label: "3.5 Adding Comments and Annotations" },
      { id: "game-review", label: "3.6 Game Review Tool" },
      { id: "engine-analysis", label: "3.7 Engine Analysis" },
      { id: "opening-explorer", label: "3.8 Opening Explorer Tool" },
    ],
  },
];

function Figure({ src, caption }: { src: string; caption: string }) {
  return (
    <figure className="my-6">
      <div className="overflow-hidden rounded-lg border border-border-subtle bg-surface-muted">
        <Image src={src} alt={caption} width={800} height={400} className="w-full" />
      </div>
      <figcaption className="mt-2 text-sm text-ink-muted">{caption}</figcaption>
    </figure>
  );
}

const h2 = "font-display mt-14 mb-4 scroll-mt-24 text-2xl font-bold text-ink";
const h3 = "font-display mt-10 mb-3 scroll-mt-24 text-lg font-bold text-ink";
const p = "mb-4 leading-relaxed text-ink-muted";
const code =
  "rounded bg-surface-muted px-1.5 py-0.5 font-mono text-[0.85em] text-ink";

export default function Guide() {
  return (
    <div className="min-h-screen">
      <Navigation currentPage="guide" />

      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          User Guide
        </h1>
        <p className="mt-4 text-ink-muted">
          Everything you need to use ChessMD, from the database library to the
          engine and opening tools.
        </p>

        {/* Table of contents */}
        <nav
          aria-label="Table of contents"
          className="mt-10 rounded-xl border border-border-subtle bg-surface p-6"
        >
          <h2 className="font-display text-sm font-bold uppercase tracking-wide text-ink-muted">
            Contents
          </h2>
          <ul className="mt-4 space-y-3">
            {toc.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="font-medium text-ink transition-colors hover:text-accent"
                >
                  {section.label}
                </a>
                <ul className="mt-1.5 space-y-1 border-l border-border-subtle pl-4">
                  {section.children.map((child) => (
                    <li key={child.id}>
                      <a
                        href={`#${child.id}`}
                        className="text-sm text-ink-muted transition-colors hover:text-accent"
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>

        <article className="mt-12 text-[0.95rem]">
          <h2 id="overview" className={h2}>
            1. Overview
          </h2>
          <p className={p}>The following menu appears when the program is run:</p>
          <Figure src="/screenshots/Figure_2.1a.png" caption="Figure 1a — Main screen display" />
          <p className={p}>
            This is the database library, the main menu of the software, which
            holds a collection of chess databases, where each database is a list
            of chess games. Double-clicking a database icon opens a menu that
            displays the games in that database:
          </p>
          <Figure src="/screenshots/Figure_2.1b.png" caption="Figure 1b — Database menu" />
          <p className={p}>
            In the database menu, each row on the left is a chess game and each
            column shows basic information about it. On the right is a preview of
            the selected game, which you can navigate through the notation viewer
            or the arrow keys. Double-clicking any row opens that game in a new
            window:
          </p>
          <Figure src="/screenshots/Figure_2.1c.png" caption="Figure 1c — Game menu" />
          <p className={p}>
            In the game menu you&apos;re greeted by a chess board, a notation
            viewer, and options to open the Engine, Opening Explorer, and Game
            Review tools.
          </p>

          <h3 id="tab-system" className={h3}>
            1.1 Tab System
          </h3>
          <p className={p}>
            You may want several chess games and databases open at once. The tab
            system handles this: multiple menus can be opened within each window.
          </p>
          <p className={p}>
            The main window holds tabs that display chess databases. Each database
            is associated with a window whose tabs display each chess game.
          </p>
          <Figure src="/screenshots/Figure_2.1.1a.png" caption="Figure 1.1a — Tab hierarchy" />
          <p className={p}>
            The tab hierarchy provides the framework for organising the
            program&apos;s various windows.
          </p>

          <h2 id="database-menu" className={h2}>
            2. Database Menu
          </h2>
          <p className={p}>
            The database menu displays the list of chess games in a database. It
            provides columns with header information, search and sort by game
            information, and a preview of each game (see Figure 1b).
          </p>

          <h3 id="adding-databases" className={h3}>
            2.1 Adding Databases
          </h3>
          <p className={p}>
            Add a new database from the main window by clicking{" "}
            <span className={code}>Add Database</span> and selecting a{" "}
            <span className={code}>.PGN</span> file from your file system (see
            Figure 1a).
          </p>

          <h3 id="game-preview" className={h3}>
            2.2 Game Preview
          </h3>
          <p className={p}>
            Step through a selected game using the same interface and controls as
            the board menu in Section 3, including the forward and backward
            buttons or keyboard shortcuts, directly from the preview panel (see
            Figure 1b).
          </p>

          <h3 id="sorting-games" className={h3}>
            2.3 Sorting Games
          </h3>
          <p className={p}>
            Click a column header to sort the games by that column. Each click
            reverses the sort order.
          </p>
          <Figure src="/screenshots/Figure_2.2.3a.png" caption="Figure 2.3a — Sorting by column headers" />

          <h3 id="filtering-games" className={h3}>
            2.4 Filtering Games
          </h3>
          <p className={p}>
            Click the <span className={code}>Filter</span> button to open a dialog
            with filtering options. Once applied, only games matching the selected
            criteria are shown.
          </p>
          <Figure src="/screenshots/Figure_2.2.4a.png" caption="Figure 2.4a — Filter dialog with game information" />

          <h3 id="customizing-headers" className={h3}>
            2.5 Customizing Headers
          </h3>
          <p className={p}>
            Right-click any header to open the header customization menu, where you
            can add, remove, and reorder the shown headers.
          </p>
          <Figure src="/screenshots/Figure_2.2.5a.png" caption="Figure 2.5a — Custom headers dialog" />

          <h2 id="board-menu" className={h2}>
            3. Board Menu
          </h2>
          <p className={p}>
            The board menu is the interface for the currently loaded game. You can
            make and navigate moves, analyze positions with engines, explore
            openings, and use the game review tool (see Figure 1c).
          </p>

          <h3 id="navigating-moves" className={h3}>
            3.1 Navigating Moves
          </h3>
          <p className={p}>
            Navigate through moves using the arrow buttons in the toolbar or the
            left/right keys. All moves in the game tree appear in the notation
            panel, where you can also click a move to jump to it.
          </p>

          <h3 id="saving-edits" className={h3}>
            3.2 Saving Edits
          </h3>
          <p className={p}>
            Save edits to a game into its PGN file with the toolbar button or the
            shortcut <span className={code}>Ctrl + S</span>.
          </p>

          <h3 id="making-moves" className={h3}>
            3.3 Making Moves and Variations
          </h3>
          <p className={p}>
            Add moves by dragging and dropping pieces. Only legal moves are added
            to the game tree and shown in the notation panel.
          </p>
          <p className={p}>
            If a move is made from a position that already has a continuation, a
            variation is created automatically. When you navigate to the next move
            on a position with two or more variations, a dialog lets you choose
            which to follow.
          </p>
          <Figure src="/screenshots/Figure_2.3.3a.png" caption="Figure 3.3a — Variation dialog with move selection" />

          <h3 id="deleting-moves" className={h3}>
            3.4 Deleting Moves and Variations
          </h3>
          <p className={p}>
            Delete all moves after the current position, including variations, with
            the toolbar button or the shortcut <span className={code}>]</span>.
            Remove the current variation with its toolbar button or{" "}
            <span className={code}>Ctrl + D</span>.
          </p>

          <h3 id="comments-annotations" className={h3}>
            3.5 Adding Comments and Annotations
          </h3>
          <p className={p}>
            Add comments and annotate moves through the right-click menu on a move
            in the notation viewer.
          </p>
          <Figure src="/screenshots/Figure_2.3.5a.png" caption="Figure 3.5a — Move annotation menu" />

          <h3 id="game-review" className={h3}>
            3.6 Game Review Tool
          </h3>
          <p className={p}>
            Review your game with the Game Review tool, featuring a position
            evaluation graph, accuracy ratings, and win percentages after each
            move. Click any move on the graph to jump to it.
          </p>
          <Figure src="/screenshots/Figure_2.3.6a.png" caption="Figure 3.6a — Game review tool" />

          <h3 id="engine-analysis" className={h3}>
            3.7 Engine Analysis
          </h3>
          <p className={p}>
            Analyze the active position with a chess engine. On each position
            change, the engine panel provides an evaluation and the best move.
            Hover over a move in the engine line to preview it.
          </p>
          <p className={p}>
            Upload an external UCI-compatible engine from the main window under{" "}
            <span className={code}>Settings → Select Engine File</span>.
          </p>
          <Figure src="/screenshots/Figure_2.3.7a.png" caption="Figure 3.7a — Engine panel with evaluation and move suggestion" />

          <h3 id="opening-explorer" className={h3}>
            3.8 Opening Explorer Tool
          </h3>
          <p className={p}>
            Review games that reached a given position, along with statistics,
            using the opening explorer. It draws from an uploaded opening database,
            which you can add from the main window under{" "}
            <span className={code}>Settings → Openings → Upload Opening Database</span>.
          </p>
          <Figure src="/screenshots/Figure_2.3.8a.png" caption="Figure 3.8a — Opening explorer tool" />
        </article>
      </main>

      <Footer />
    </div>
  );
}
