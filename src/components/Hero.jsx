export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-5 pt-28 lg:px-8"
    >
      <div className="absolute left-[-10%] top-[10%] h-80 w-80 rounded-full bg-violet-600/20 blur-[120px] pulse-glow" />

      <div className="absolute right-[-10%] bottom-[5%] h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px] pulse-glow" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.25fr_.75fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open to Frontend Developer opportunities
          </div>

          <p className="mb-4 text-lg font-medium text-violet-300">
            Hi, I'm Sarvesh Pandey
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Frontend Developer
            <span className="block gradient-text">
              Building Modern Web Experiences.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            React.js Developer with 3+ years of experience creating responsive,
            scalable and user-focused web interfaces using modern frontend
            technologies.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-white px-7 py-3.5 text-center font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-violet-100"
            >
              View My Projects →
            </a>

            <a
              href="/sarvesh-portfolio/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-center font-semibold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-3xl font-black text-white">3+</p>
              <p className="mt-1 text-sm text-slate-500">Years Experience</p>
            </div>

            <div>
              <p className="text-3xl font-black text-white">React</p>
              <p className="mt-1 text-sm text-slate-500">Primary Expertise</p>
            </div>

            <div>
              <p className="text-3xl font-black text-white">100%</p>
              <p className="mt-1 text-sm text-slate-500">Responsive Focus</p>
            </div>
          </div>
        </div>

        <div className="relative hidden justify-center lg:flex">
          <div className="glass glow float relative w-full max-w-md rounded-[2rem] p-7">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <span className="text-xs text-slate-500">frontend.js</span>
            </div>

            <div className="space-y-3 font-mono text-sm leading-7">
              <p>
                <span className="text-violet-400">const</span>{" "}
                <span className="text-cyan-300">developer</span> = {"{"}
              </p>

              <p className="pl-5">
                name: <span className="text-emerald-300">"Sarvesh"</span>,
              </p>

              <p className="pl-5">
                role:{" "}
                <span className="text-emerald-300">"React Developer"</span>,
              </p>

              <p className="pl-5">
                experience: <span className="text-orange-300">"3+ years"</span>,
              </p>

              <p className="pl-5">skills: [</p>

              <p className="pl-10 text-slate-400">
                "React",
                <br />
                "JavaScript",
                <br />
                "Tailwind CSS",
                <br />
                "Responsive UI"
              </p>

              <p className="pl-5">]</p>

              <p>{"}"}</p>
            </div>

            <div className="mt-8 rounded-2xl border border-emerald-400/10 bg-emerald-400/5 p-4">
              <p className="text-sm text-emerald-300">
                ✓ Available for new opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
