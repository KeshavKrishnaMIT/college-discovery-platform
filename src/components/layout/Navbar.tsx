import Link from "next/link";

export default function Navbar() {

  return (

    <nav className="w-full bg-white shadow-sm border-b border-slate-200 px-8 py-5 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <Link href="/">
          <h1 className="text-4xl font-extrabold text-blue-600 tracking-tight cursor-pointer">
            ClgFinder
          </h1>
        </Link>

        <div className="flex items-center gap-8 text-slate-700 font-semibold">

          <Link
            href="/"
            className="hover:text-blue-600 transition-all duration-300"
          >
            Home
          </Link>

          <Link
            href="/predictor"
            className="hover:text-blue-600 transition-all duration-300"
          >
            Predictor
          </Link>

        </div>

      </div>

    </nav>

  );

}