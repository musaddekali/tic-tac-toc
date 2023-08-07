import Game from "@/Modules/Game/Game";
import GameV2 from "@/Modules/GameV2/GameV2";

export default function Home() {
  return (
    <main>
      <GameV2 />
      <Game />
    </main>
  );
}
