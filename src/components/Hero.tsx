export default function Hero() {
  return (
    <section className="md:pb-20 px-8 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-25">

      {/* ── Left: text content ─────────────────────────────────────────── */}
      <div className="flex-1 space-y-6 z-10 text-center md:text-left">

        {/* Available badge — mirrors home.html exactly */}
        <div className="animate-fade-down inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full text-sm font-semibold border border-gray-200 shadow-sm">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          OPEN TO OPPORTUNITIES ✨
        </div>

        {/* Credits */}
        <div className="text-xl text-violet-400 font-medium mb-2 animate-fade-down">
          A Special Thanks to Liz ✨ for UI/UX Design Inspiration
        </div>

        {/* H1 */}
        <h1 className="animate-fade-down text-4xl md:text-7xl font-bold leading-[1.1]">
          Building{" "}
          <span className="text-(--primary-color)">high-performance</span>{" "}
          systems from scratch.
        </h1>

        {/* Description */}
        <p className="animate-fade-up text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed mx-auto md:mx-0">
          Hi, I&apos;m Jaret — a software engineer focused on compilers, AutoML
          engines, and ML libraries in C, C++, and Rust. Backend developer at
          API Inmobiliaria (.NET Core).
        </p>

        {/* CTA buttons — mirrors home.html button row */}
        <div className="animate-fade-up flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
          <a
            href="/projects"
            className="flex-1 min-w-[200px] btn btn-xl bg-(--primary-color) border-(--primary-color) text-white font-bold text-lg px-8 py-4 rounded-xl shadow-md hover:bg-(--primary-shadow) transition-all flex justify-center items-center gap-2"
          >
            View my work
            {/* Arrow right — tabler icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" />
            </svg>
          </a>

          {/* Secondary — white solid, no opacity tricks */}
          <a
            href="/Jaret_CV.pdf"
            download="Jaret_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[200px] btn btn-xl bg-white text-[#2b2d2f] border border-gray-200 shadow-md px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all flex justify-center items-center gap-2"
          >
            {/* Download/contact icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </div>
      </div>

      {/* ── Right: avatar circle + terminal badge ──────────────────────── */}
      <div className="animate-fade-down md:animate-fade-left flex-1 relative flex justify-center w-full">
        {/* Circle — bg-[#f4ece3] mirrors reference avatar bg color */}
        <div className="relative w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full border-8 border-white shadow-2xl overflow-hidden bg-[#f4ece3] flex items-center justify-center group">
          <span className="text-7xl md:text-9xl font-bold text-(--primary-color) select-none opacity-40">
            JE
          </span>
        </div>
      </div>
    </section>
  );
}
