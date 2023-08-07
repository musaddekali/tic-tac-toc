"use client";
import Moves from "./Moves";
import Square from "./Square";
import useGame from "./useGame";

function GameV2() {
  const { squares, handlePlay, playerStatus, history, jumpTo, currentMove, winner, winnerPositions } = useGame();

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
                  <Square
                    key={index}
                    position={index}
                    onPlay={() => handlePlay(index)}
                    value={square}
                    winner={winner}
                    winnerPositions={winnerPositions}
                  />
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
