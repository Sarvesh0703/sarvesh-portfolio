import { useState } from "react";

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050816]/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a
          href="#home"
          className="text-xl font-black tracking-tight text-white"
        >
          Sarvesh<span className="text-violet-400">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map(([name, link]) => (
            <a
              key={name}
              href={link}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-violet-100 md:block"
        >
          Hire Me
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? "×" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-[#070b1c] px-5 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map(([name, link]) => (
              <a
                key={name}
                href={link}
                onClick={() => setOpen(false)}
                className="text-sm text-slate-300"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
