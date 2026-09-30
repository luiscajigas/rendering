import Link from "next/link";

const enlaces = [
  { href: "/", texto: "Inicio" },
  { href: "/constelaciones", texto: "Constelaciones" },
  { href: "/condiciones", texto: "Condiciones" },
  { href: "/explorador", texto: "Explorador" },
];

export default function Navbar() {
  return (
    <header className="border-b border-white/10 bg-slate-950/60 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-4 py-3">
        <Link href="/" className="text-lg font-bold text-violet-300">
          ✦ Cielo Andino
        </Link>
        <ul className="flex flex-wrap gap-4 text-sm text-slate-300">
          {enlaces.map((e) => (
            <li key={e.href}>
              <Link href={e.href} className="hover:text-sky-300">
                {e.texto}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
