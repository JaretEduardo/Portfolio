"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { label: "About",    href: "/about"    },
  { label: "Projects", href: "/projects" },
  { label: "Sponsor Me",  href: "https://github.com/sponsors/JaretEduardo"  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled]   = useState(false);
  const [isMenuOpen, setIsMenuOpen]   = useState(false);
  const pathname = usePathname();
  const isHome   = pathname === "/";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg =
    isHome && !isScrolled
      ? "bg-transparent"
      : "bg-white/90 backdrop-blur-md shadow-sm";

  return (
    <>
      {/* ── Main navbar ─────────────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-8 py-2 flex justify-between items-center ${navBg}`}
      >
        {/* Logo — left 1/4 */}
        <div className="flex items-center md:w-1/4">
          <Link href="/" className="flex items-center cursor-pointer group">
            <span className="text-xl font-bold tracking-tight transition-all duration-300 group-hover:brightness-110">
              <span className="text-[#B1AFFF]">JE</span>
              <span className="text-[#2b2d2f]">.</span>
            </span>
          </Link>
        </div>

        {/* Desktop nav links — centered flex-1 */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-10">
          {navLinks.map(({ label, href }) => {
            // Evaluamos si el link es la ruta actual
            const isActive = pathname === href;
            
            return (
              <Link
                key={href}
                href={href}
                // Si es externo (Sponsor), lo abre en otra pestaña, si no, normal
                target={href.startsWith("http") ? "_blank" : "_self"}
                className={`transition-colors ${
                  isActive
                    ? "text-[#B1AFFF] font-bold" // Link activo iluminado
                    : "text-[#2b2d2f] font-medium hover:text-[#B1AFFF] hover:font-bold" // Link inactivo
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* CTA button — right 1/4 */}
        <div className="hidden md:flex justify-end md:w-1/4">
          <a
            href="mailto:contact@jareteduardo.dev"
            className="group btn btn-md bg-[#B1AFFF] text-white py-2 px-6 rounded-3xl font-bold hover:bg-[#8E8CD8] transition-colors"
          >
            {/* Rocket icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
              <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
              <path d="M14 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            </svg>
            Contact Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className="btn btn-sm btn-square btn-ghost md:hidden border-none hover:bg-transparent hover:border-none hover:shadow-none active:bg-transparent active:border-none focus:bg-transparent focus:outline-none focus:shadow-none shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </button>
      </nav>

      {/* ── Mobile overlay + right-side drawer ──────────────────────────── */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-100 ${
          isMenuOpen ? "opacity-100" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setIsMenuOpen(false)}
          className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
        />

        {/* Drawer */}
        <aside
          className={`absolute right-0 top-0 h-full w-[280px] bg-white shadow-2xl p-8 transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="btn btn-sm btn-square btn-ghost border-none hover:bg-transparent hover:border-none hover:shadow-none active:bg-transparent active:border-none focus:bg-transparent focus:outline-none focus:shadow-none shrink-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile links */}
          <nav className="flex flex-col space-y-6">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : "_self"}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-2xl font-semibold transition-colors ${
                    isActive ? "text-[#B1AFFF]" : "text-slate-900"
                  }`}
                >
                  {label}
                </Link>
              );
            })}

            <div className="pt-6 flex justify-center items-center">
              {/* Actualicé también el botón móvil para que diga "Contact Me" y abra tu correo */}
              <a
                href="mailto:contact@jareteduardo.dev"
                onClick={() => setIsMenuOpen(false)}
                className="btn btn-md bg-[#B1AFFF] text-white py-2 px-6 rounded-3xl font-bold hover:bg-[#8E8CD8] transition-colors"
              >
                {/* Lightbulb icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
                  <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
                  <path d="M9.7 17l4.6 0" />
                </svg>
                Contact Me
              </a>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
}