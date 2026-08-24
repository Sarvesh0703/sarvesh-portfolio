export default function About() {
  return (
    <section id="about" className="px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
            About Me
          </p>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Turning ideas into
            <span className="gradient-text"> polished interfaces.</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass rounded-3xl p-8">
            <p className="text-lg leading-8 text-slate-300">
              I am a Frontend Developer specializing in React.js and modern
              frontend technologies. I enjoy transforming designs and ideas into
              clean, responsive and interactive web experiences.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              My focus is on writing reusable components, creating responsive
              layouts, improving user experience and building interfaces that
              work smoothly across desktop, tablet and mobile devices.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["01", "Responsive Development"],
              ["02", "Reusable Components"],
              ["03", "Pixel-Perfect UI"],
              ["04", "Clean Code"],
            ].map(([number, title]) => (
              <div
                key={number}
                className="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:border-violet-400/20"
              >
                <span className="text-sm font-bold text-violet-400">
                  {number}
                </span>

                <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Focused on creating reliable and professional frontend
                  experiences.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
