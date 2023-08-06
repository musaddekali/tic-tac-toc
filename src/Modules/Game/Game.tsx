"use client";
import { useState } from "react";
import Board from "./Board";

const Game = () => {
  // const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: string[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let desc;
    if (move > 0) {
      desc = "Go to move #" + move;
    } else {
      desc = "Start game";
    }
    return (
      <>
        {move == 0 ? (
          <li key={move}>
            <button
              className="px-2 py-1 border rounded cursor-pointer
                   bg-blue-500 text-white hover:bg-blue-600"
              onClick={() => jumpTo(move)}
            >
              {desc}
            </button>
          </li>
        ) : (
          <li key={move}>
            <button
              className={`px-2 py-1 border rounded cursor-pointer ${
                move == currentMove ? "bg-gray-200" : "hover:bg-gray-200"
              }`}
              onClick={() => jumpTo(move)}
            >
              {desc}
            </button>
          </li>
        )}
      </>
    );
  });

  return (
    <div className="game min-h-screen flex flex-col md:flex-row items-center justify-center">
      <div className="game-board">
        <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <h3 className="mb-2 font-semibold text-center border-b-2 border-green-600">History</h3>
        <div className="">
          <ol className="h-52 overflow-y-auto flex flex-col gap-1 p-3 border">{moves}</ol>
        </div>
      </div>
    </div>
  );
};

export default Game;
