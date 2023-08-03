"use client";
import { useState } from "react";
import Square from "./Square";

// select winner 
function calculateWinner(squares: string[]) {
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
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
  
    const winner = calculateWinner(squares);
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
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
    }
  
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>
          <div className="status text-center text-2xl font-bold mb-4">{status}</div>
          {winner && (
            <div className="text-center my-4">
              <button
                onClick={() => setSquares(Array(9).fill(null))}
                className="px-4 py-2 text-blue-500 border border-blue-500 rounded-full hover:border-blue-800 hover:text-blue-800"
              >
                Start again
              </button>
            </div>
          )}
          <div className="board grid grid-cols-3">
            {squares.map((sq, i) => (
              <Square onSquareClick={() => handleClick(i)} key={i} value={sq} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default Board;