"use client";
import { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares: string[]) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
    // TODO
  }

  const moves = history.map((squares, move) => {
    let desc;
    if (move > 0) {
      desc = "Go to move #" + move;
    } else {
      desc = "Start game";
    }
    return (
      <li key={move}
        className={`px-2 py-1 border rounded hover:bg-gray-200 cursor-pointer ${
          move == 0 ? "bg-blue-500 text-white hover:bg-blue-600" : ""
        }`}
      >
        {desc}
      </li>
    );
  });

  return (
    <div className="game min-h-screen flex items-center justify-center">
      <div className="game-board">
        <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol className="flex flex-col gap-1 p-3 border">{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
