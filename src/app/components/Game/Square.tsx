const Square = ({ value, onSquareClick }: { value: string; onSquareClick: () => void }) => {
    return (
      <button onClick={onSquareClick} className="square w-20 h-20 bg-white border border-gray-400 text-3xl font-bold">
        {value}
      </button>
    );
  };

  export default Square;