"use client";
import useGame from "./useGame";

const Square = ({ value, onPlay }: { value: string; onPlay: () => void }) => {
  return (
    <button onClick={onPlay} className="square w-20 h-20 border font-bold text-2xl">
      {value}
    </button>
  );
};

const Moves = ({
  history,
  onJump,
  currentMove,
}: {
  history: any[][];
  onJump: (i: number) => void;
  currentMove: number;
}) => {
  const moves = history.map((_, move) => {
    if (move == 0) {
      return (
        <li key={move}>
          <button
            onClick={() => onJump(move)}
            className="px-2 py-1 bg-blue-500 text-white hover:bg-blue-600 w-full text-center border rounded"
          >
            Start game
          </button>
        </li>
      );
    } else {
      return (
        <li key={move}>
          <button
            onClick={() => onJump(move)}
            className={`px-2 py-1 hover:bg-slate-100 w-full text-center border rounded ${
              move == currentMove ? "bg-slate-200" : ""
            }`}
          >
            Go to move #{move}
          </button>
        </li>
      );
    }
  });
  return <ol className="flex flex-col gap-y-1 border p-2 h-[240px] min-w-[162px] overflow-auto">{moves}</ol>;
};

function GameV2() {
  const { squares, handlePlay, playerStatus, history, jumpTo, currentMove } = useGame();

  return (
    <section>
      <div className="container">
        <div className="game flex items-center justify-center min-h-screen">
          <div>
            <h3 className="title font-bold text-2xl mb-4 text-center text-slate-700">Tic Tac Toe GameV2</h3>
            <h3 className="title font-bold text-2xl mb-4 text-center text-slate-700">{playerStatus()}</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="squares grid grid-cols-3">
                {squares.map((square, index) => (
                  <Square key={index} onPlay={() => handlePlay(index)} value={square} />
                ))}
              </div>
              <div className="info">
                <Moves history={history} onJump={jumpTo} currentMove={currentMove} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default GameV2;
