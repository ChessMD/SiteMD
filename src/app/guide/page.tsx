import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Guide() {
  return (
    <div className="min-h-screen bg-viridian-400">
      <Navigation currentPage="guide" />

      <main className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-mint-cream text-center mb-16 drop-shadow-lg">
            User Guide
          </h1>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-8 md:p-12 prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-viridian-400 mb-8">User Guide</h1>
            
            <p className="text-lg text-gray-900 mb-8">
              The user guide will demonstrate how the software can be used.
            </p>

            {/* tableof contents */}
            <div className="bg-gray-100 p-6 rounded-lg mb-12 border-l-4 border-viridian-400">
              <h2 className="text-2xl font-bold text-viridian-400 mb-4">Table of Contents</h2>
              <div className="space-y-2 text-gray-900">
                <div className="font-semibold text-lg mb-3">
                  <a href="#overview" className="text-viridian-400 hover:text-viridian-500 transition-colors">1. Overview</a>
                </div>
                <div className="ml-4 space-y-1">
                  <div><a href="#tab-system" className="text-gray-700 hover:text-viridian-400 transition-colors">1.1 Tab System</a></div>
                </div>
                
                <div className="font-semibold text-lg mb-3 mt-4">
                  <a href="#database-menu" className="text-viridian-400 hover:text-viridian-500 transition-colors">2. Database Menu</a>
                </div>
                <div className="ml-4 space-y-1">
                  <div><a href="#adding-databases" className="text-gray-700 hover:text-viridian-400 transition-colors">2.1 Adding Databases</a></div>
                  <div><a href="#game-preview" className="text-gray-700 hover:text-viridian-400 transition-colors">2.2 Game Preview</a></div>
                  <div><a href="#sorting-games" className="text-gray-700 hover:text-viridian-400 transition-colors">2.3 Sorting Games</a></div>
                  <div><a href="#filtering-games" className="text-gray-700 hover:text-viridian-400 transition-colors">2.4 Filtering Games</a></div>
                </div>
                
                <div className="font-semibold text-lg mb-3 mt-4">
                  <a href="#board-menu" className="text-viridian-400 hover:text-viridian-500 transition-colors">3. Board Menu</a>
                </div>
                <div className="ml-4 space-y-1">
                  <div><a href="#navigating-moves" className="text-gray-700 hover:text-viridian-400 transition-colors">3.1 Navigating Moves</a></div>
                  <div><a href="#saving-edits" className="text-gray-700 hover:text-viridian-400 transition-colors">3.2 Saving Edits</a></div>
                  <div><a href="#making-moves" className="text-gray-700 hover:text-viridian-400 transition-colors">3.3 Making Moves and Variations</a></div>
                  <div><a href="#deleting-moves" className="text-gray-700 hover:text-viridian-400 transition-colors">3.4 Deleting Moves and Variations</a></div>
                  <div><a href="#comments-annotations" className="text-gray-700 hover:text-viridian-400 transition-colors">3.5 Adding Comments and Annotations</a></div>
                  <div><a href="#game-review" className="text-gray-700 hover:text-viridian-400 transition-colors">3.6 Game Review Tool</a></div>
                  <div><a href="#engine-analysis" className="text-gray-700 hover:text-viridian-400 transition-colors">3.7 Engine Analysis</a></div>
                  <div><a href="#opening-explorer" className="text-gray-700 hover:text-viridian-400 transition-colors">3.8 Opening Explorer Tool</a></div>
                </div>
              </div>
            </div>

            <h2 id="overview" className="text-3xl font-bold text-viridian-400 mt-12 mb-6">1. Overview</h2>
            
            <p className="mb-4 text-gray-900">The following menu will appear when the program is run:</p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="font-semibold mb-2 text-gray-900"><strong>Figure 1a</strong>: Main screen display</p>
              <img src="/screenshots/Figure_2.1a.png" alt="Figure 2.1a" className="border rounded" />
            </div>

            <p className="mb-4 text-gray-900">
              This is the database library, the main menu of the software which consists of a collection of chess databases, 
              where each database is a list of chess games. When the user double-clicks a database icon, a menu will appear 
              displaying the games in the database:
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="font-semibold mb-2 text-gray-900"><strong>Figure 1b</strong>: Database menu</p>
              <img src="/screenshots/Figure_2.1b.png" alt="Figure 2.1b" className="border rounded" />
            </div>

            <p className="mb-4 text-gray-900">
              In the database menu, each row on the left corresponds to a chess game and each column displays basic information 
              about each game. On the right, there is a game preview of the currently selected game which can be navigated through 
              the notation viewer or the arrow keys. Moreover, the user may open any chess game in the database by double-clicking 
              any row, where a new window will appear containing the chess game:
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="font-semibold mb-2 text-gray-900"><strong>Figure 1c</strong>: Game menu</p>
              <img src="/screenshots/Figure_2.1c.png" alt="Figure 2.1c" className="border rounded" />
            </div>

            <p className="mb-8 text-gray-900">
              In the game menu, the user is greeted by a chess board, a notation viewer, and options to open the Engine, 
              Opening Explorer, and Game Review tools.
            </p>

            <h3 id="tab-system" className="text-2xl font-bold text-viridian-400 mt-10 mb-4">1.1 Tab System</h3>
            
            <p className="mb-4 text-gray-900">
              The user may wish to have multiple chess games and chess databases open simultaneously. The tab system has been 
              designed to handle this requirement, where several menus can be opened within each window.
            </p>

            <p className="mb-4 text-gray-900">
              The main window consists of tabs that display chess databases. Each database is associated with a window with 
              tabs that display each chess game.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="font-semibold mb-2 text-gray-900"><strong>Figure 1.1a</strong>: Tab hierarchy</p>
              <img src="/screenshots/Figure_2.1.1a.png" alt="Figure 2.1.1a" className="border rounded" />
            </div>

            <p className="mb-8 text-gray-900">
              The tab hierarchy provides the framework for organising the program's various windows.
            </p>

            <hr className="my-12 border-gray-300" />

            <h2 id="database-menu" className="text-3xl font-bold text-viridian-400 mt-12 mb-6">2. Database Menu</h2>
            
            <p className="mb-8 text-gray-900">
              The database menu displays the list of chess games in a database. It provides columns that display header information, 
              a search & sort based on game information, and a preview that displays each game.<br />
              (See <strong>Figure 1b</strong>)
            </p>

            <h3 id="adding-databases" className="text-2xl font-bold text-viridian-400 mt-10 mb-4">2.1 Adding Databases</h3>
            
            <p className="mb-8 text-gray-900">
              The user can add a new database by navigating to the main window of the program and clicking on "Add Database", 
              selecting a <code>.PGN</code> file from the user's file system.<br />
              (See <strong>Figure 1a</strong>)
            </p>

            <h3 id="game-preview" className="text-2xl font-bold text-viridian-400 mt-10 mb-4">2.2 Game Preview</h3>
            
            <p className="mb-8 text-gray-900">
              The user can go through a selected game using the same interface and controls as the board menu detailed in Section 3. 
              This includes stepping through moves using the forward and backward buttons or keyboard shortcuts, allowing the user to 
              play games directly from the database preview panel.<br />
              (See <strong>Figure 1b</strong>)
            </p>

            <h3 id="sorting-games" className="text-2xl font-bold text-viridian-400 mt-10 mb-4">2.3 Sorting Games</h3>
            
            <p className="mb-4 text-gray-900">
              The user may click on a column header to sort the games based on that column. The sorting order will reverse 
              (e.g. from ascending to descending) after each click.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <p className="font-semibold mb-2 text-gray-900"><strong>Figure 2.3a</strong>: Sorting by column headers</p>
              <img src="/screenshots/Figure_2.2.3a.png" alt="Figure 2.2.3a" className="border rounded" />
            </div>

            <h3 id="filtering-games" className="text-2xl font-bold text-viridian-400 mt-10 mb-4">2.4 Filtering Games</h3>
            
            <p className="mb-4 text-gray-900">
              The user may click on the "Filter" button which will open a dialogue with filtering options. Once applied, 
              only games that match the selected criteria will be displayed in the list.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <p className="font-semibold mb-2 text-gray-900"><strong>Figure 2.4a</strong>: Filter dialogue with game information</p>
              <img src="/screenshots/Figure_2.2.4a.png" alt="Figure 2.2.4a" className="border rounded" />
            </div>

            <hr className="my-12 border-gray-300" />

            <h2 id="board-menu" className="text-3xl font-bold text-viridian-400 mt-12 mb-6">3. Board Menu</h2>
            
            <p className="mb-8 text-gray-900">
              The board menu provides the interface for interacting with the currently loaded chess game. It allows the user to 
              make and navigate moves, analyze positions with engines, explore openings through an opening database, and access 
              the game review tool.<br />
              (<strong>Figure 1c</strong>)
            </p>

            <h3 id="navigating-moves" className="text-2xl font-bold text-viridian-400 mt-10 mb-4">3.1 Navigating Moves</h3>
            
            <p className="mb-8 text-gray-900">
              The user can navigate through the moves of a game using the arrow buttons in the toolbar or the left/right keyboard 
              shortcuts. All moves in the game tree are displayed in the notation panel, where users can also click on specific 
              moves to jump to them directly.
            </p>

            <h3 id="saving-edits" className="text-2xl font-bold text-viridian-400 mt-10 mb-4">3.2 Saving Edits</h3>
            
            <p className="mb-8 text-gray-900">
              The user may save any edits to a game into its PGN file through the button in the toolbar or the shortcut <code>Ctrl + S</code>.
            </p>

            <h3 id="making-moves" className="text-2xl font-bold text-viridian-400 mt-10 mb-4">3.3 Making Moves and Variations</h3>
            
            <p className="mb-4 text-gray-900">
              The user may add moves on the board by dragging and dropping pieces. Only legal chess moves will be added to the 
              game tree and displayed on the notation panel.
            </p>

            <p className="mb-4 text-gray-900">
              Additionally, if a move is made from a position that already has a continuation, a variation is automatically created. 
              When the user attempts to navigate to the next move on a position with two or more variations, a variation dialogue 
              will appear allowing the user to choose which variation to follow.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <p className="font-semibold mb-2 text-gray-900"><strong>Figure 3.3a</strong>: Variation dialogue with move selection</p>
              <img src="/screenshots/Figure_2.3.3a.png" alt="Figure 2.3.3a" className="border rounded" />
            </div>

            <h3 id="deleting-moves" className="text-2xl font-bold text-viridian-400 mt-10 mb-4">3.4 Deleting Moves and Variations</h3>
            
            <p className="mb-8 text-gray-900">
              The user can delete all moves after the current position including variations by clicking the toolbar button or 
              the keyboard shortcut <code>]</code>.<br />
              Additionally, the user can remove the current variation by clicking the toolbar button or the keyboard shortcut <code>Ctrl + D</code>.
            </p>

            <h3 id="comments-annotations" className="text-2xl font-bold text-viridian-400 mt-10 mb-4">3.5 Adding Comments and Annotations</h3>
            
            <p className="mb-4 text-gray-900">
              The user can add comments and annotate moves through the right-click menu on a given move in the notation viewer.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <p className="font-semibold mb-2 text-gray-900"><strong>Figure 3.5a</strong>: Move annotation menu</p>
              <img src="/screenshots/Figure_2.3.5a.png" alt="Figure 2.3.5a" className="border rounded" />
            </div>

            <h3 id="game-review" className="text-2xl font-bold text-viridian-400 mt-10 mb-4">3.6 Game Review Tool</h3>
            
            <p className="mb-4 text-gray-900">
              The user may review their game using the Game Review tool, featuring a position evaluation graph, accuracy ratings, 
              and win percentages after given moves.
            </p>

            <p className="mb-4 text-gray-900">
              Each move represented on the graph may be quickly navigated to by left-clicking on the given move.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <p className="font-semibold mb-2 text-gray-900"><strong>Figure 3.6a</strong>: Game review tool</p>
              <img src="/screenshots/Figure_2.3.6a.png" alt="Figure 2.3.6a" className="border rounded" />
            </div>

            <h3 id="engine-analysis" className="text-2xl font-bold text-viridian-400 mt-10 mb-4">3.7 Engine Analysis</h3>
            
            <p className="mb-4 text-gray-900">
              The active position can be analyzed using a chess engine. Upon changing a position, the engine panel will automatically 
              provide a chess evaluation of the position along with the best move. The user can preview a given move by hovering over 
              the move in the engine line.
            </p>

            <p className="mb-4 text-gray-900">
              The user can upload an external UCI-compatible chess engine of their choice by navigating to the main window and 
              selecting <code>Settings -&gt; Select Engine File</code>.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <p className="font-semibold mb-2 text-gray-900"><strong>Figure 3.7a</strong>: Engine panel with evaluation and move suggestion</p>
              <img src="/screenshots/Figure_2.3.7a.png" alt="Figure 2.3.7a" className="border rounded" />
            </div>

            <h3 id="opening-explorer" className="text-2xl font-bold text-viridian-400 mt-10 mb-4">3.8 Opening Explorer Tool</h3>
            
            <p className="mb-4 text-gray-900">
              The user can review games achieving a given position and statistics through the opening explorer tool, which takes 
              games from an uploaded opening database. An opening database can be uploaded by navigating to the main window and 
              selecting <code>Settings -&gt; Openings -&gt; Upload Opening Database</code>.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <p className="font-semibold mb-2 text-gray-900"><strong>Figure 3.8a</strong>: Opening explorer tool</p>
              <img src="/screenshots/Figure_2.3.8a.png" alt="Figure 2.3.8a" className="border rounded" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
