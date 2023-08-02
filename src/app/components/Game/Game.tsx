"use client";
import { useState } from "react";

const Square = ({ value, onSquareClick }: { value: string; onSquareClick: () => void }) => {
  return (
    <button onClick={onSquareClick} className="square w-20 h-20 bg-white border border-gray-400 text-3xl">
      {value}
    </button>
  );
};

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function calculateWinner(squaresa: string[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squaresa[a] && squaresa[a] === squaresa[b] && squaresa[a] === squaresa[c]) {
        return squaresa[a];
      }
    }
    return null;
  }

  function handleClick(i: number) {
    const nextSquares = squares.slice();
    if (squares[i]) {
      return;
    }
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="board grid grid-cols-3">
        {squares.map((sq, i) => (
          <Square onSquareClick={() => handleClick(i)} key={i} value={sq} />
        ))}
      </div>
    </div>
  );
};

const Game = () => {
  return <Board />;
};

export default Game;
