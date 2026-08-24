export default function Experience() {
  return (
    <section id="experience" className="px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
            Experience
          </p>

          <h2 className="text-4xl font-black text-white sm:text-5xl">
            Professional journey
          </h2>
        </div>

        <div className="relative border-l border-white/10 pl-7">
          <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-violet-400" />

          <div className="glass rounded-3xl p-7">
            <div className="flex flex-col justify-between gap-3 md:flex-row">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Frontend Developer
                </h3>

                <p className="mt-1 text-violet-300">Professional Experience</p>
              </div>

              <span className="text-sm text-slate-500">3+ Years</span>
            </div>

            <ul className="mt-7 grid gap-4 text-slate-400 md:grid-cols-2">
              <li>→ Developed responsive React interfaces.</li>
              <li>→ Built reusable UI components.</li>
              <li>→ Converted designs into production-ready UI.</li>
              <li>→ Worked with REST APIs and Axios.</li>
              <li>→ Used Git/GitHub for version control.</li>
              <li>→ Optimized layouts for mobile and desktop.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
