"use client";
import Square from "./Square";
import { calculateWinner } from "@/utils";

type BoardType = {
  squares: string[];
  xIsNext: boolean;
  onPlay: (nextSquares: string[]) => void;
};

const Board = ({ squares, xIsNext, onPlay }: BoardType) => {
  const {winner} = calculateWinner(squares) || {};
  let status;
  if (winner) {
    status = `Winner is ${winner}`;
  } else {
    status = `Next player is ${xIsNext ? "X" : "O"}`;
  }

  function handleClick(i: number) {
    const nextSquares = squares.slice();
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  return (
    <>
      <div className="status text-center text-2xl font-bold mb-4">{status}</div>
      <div className="grid grid-cols-3">
        {squares.map((sq: string, i: number) => (
          <Square onSquareClick={() => handleClick(i)} key={i} value={sq} />
        ))}
      </div>
    </>
  );
};

export default Board;
