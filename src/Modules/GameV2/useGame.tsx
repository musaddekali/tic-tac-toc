"use client";
import { calculateWinner } from "@/utils";
import { useState } from "react";

function useGame() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const squares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;
  const winner = calculateWinner(squares);

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  function playerStatus() {
    if (winner) {
      return "Winner is " + winner;
    } else if (!winner && !squares.includes(null)) {
      return "Game is over";
    } else {
      return `Next player is ${xIsNext ? "X" : "O"}`;
    }
  }

  const handlePlay = (index: number) => {
    const nextSquares = squares.slice();

    if (squares[index]) {
      alert("This room is filled");
      return;
    } else if (winner) {
      alert("Winner is " + winner);
      return;
    }

    if (xIsNext) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }

    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  return {
    squares,
    handlePlay,
    playerStatus,
    history,
    jumpTo,
    currentMove
  };
}
export default useGame;
