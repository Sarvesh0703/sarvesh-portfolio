export default function Contact() {
  return (
    <section id="contact" className="px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-600/15 via-slate-900 to-cyan-500/10 p-8 text-center sm:p-14">
          <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[80px]" />

          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Let's Connect
            </p>

            <h2 className="mt-5 text-4xl font-black text-white sm:text-6xl">
              Have a frontend
              <span className="gradient-text"> opportunity?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              I'm currently open to Frontend Developer and React.js
              opportunities. Let's build something great together.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="mailto:YOUR_EMAIL@gmail.com"
                className="rounded-full bg-white px-7 py-3.5 font-bold text-slate-950 transition hover:bg-violet-100"
              >
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/Sarvesh0703"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
