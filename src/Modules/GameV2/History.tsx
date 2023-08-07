"use client";
const History = ({
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
            {move == currentMove ? "You are at move #" + move : "Go to move #" + move}
          </button>
        </li>
      );
    }
  });
  return <ol className="flex flex-col gap-y-1 border p-2 h-[240px] min-w-[162px] overflow-auto">{moves}</ol>;
};

export default History;
