import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0">
      <nav className="py-4 bg-slate-100">
        <div className="container">
          <ul className="flex items-center justify-center gap-8">
            <li>
              <Link href="/">
                <span className="text-slate-800 hover:underline hover:text-blue-500">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/game_v1">
                <span className="text-slate-800 hover:underline hover:text-blue-500">GameV1</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="text-slate-800 hover:underline hover:text-blue-500">GameV2</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Header;
