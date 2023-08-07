"use client";
type Prop = {
  position: number;
  value: string;
  onPlay: () => void;
  winner: string | undefined;
  winnerPositions: number[] | undefined;
};

const Square = ({position, value, onPlay, winner, winnerPositions }: Prop) => {
  const winnerBox = winner && winnerPositions?.includes(position);
  return (
    <button onClick={onPlay} className={`square w-20 h-20 border border-blue-500 font-bold text-2xl ${winnerBox ? 'bg-blue-500 text-white' : ''}`}>
      {value}
    </button>
  );
};

export default Square;
