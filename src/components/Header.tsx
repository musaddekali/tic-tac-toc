import Link from "next/link";

function Header() {
  return (
    <header className="absolute left-0 right-0 top-0">
      <nav className="py-4 bg-slate-100">
        <div className="container">
          <ul className="flex items-center justify-center gap-8">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/game_v1">GameV1</Link>
            </li>
            <li>
              <Link href="/">GameV2</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Header;
