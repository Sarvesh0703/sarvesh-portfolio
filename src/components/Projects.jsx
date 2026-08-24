const projects = [
  {
    number: "01",
    title: "Latest React Web",
    description:
      "Modern responsive React website demonstrating reusable components, responsive layouts and polished frontend UI.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Responsive UI"],
    live: "https://sarvesh0703.github.io/LatestReactWeb/",
    github: "https://github.com/Sarvesh0703/LatestReactWeb",
  },
  {
    number: "02",
    title: "Prebuilt UI",
    description:
      "A frontend UI collection focused on reusable sections, modern layouts and responsive design implementation.",
    tech: ["React", "JavaScript", "CSS", "Responsive Design"],
    live: "https://sarvesh0703.github.io/prebuiltUI/",
    github: "https://github.com/Sarvesh0703/prebuiltUI",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white/[0.02] px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              Featured Work
            </p>

            <h2 className="text-4xl font-black text-white sm:text-5xl">
              Projects that speak
              <span className="gradient-text"> for me.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500">
            A selection of frontend projects demonstrating React development,
            responsive design and reusable UI implementation.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group glass overflow-hidden rounded-[2rem] transition duration-500 hover:-translate-y-2 hover:border-violet-400/20"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-violet-600/20 via-slate-900 to-cyan-500/10 p-7">
                <div className="absolute right-6 top-6 text-7xl font-black text-white/[0.04]">
                  {project.number}
                </div>

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>

                  <div>
                    <p className="text-sm text-violet-300">React Project</p>

                    <h3 className="mt-2 text-3xl font-black text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-7">
                <p className="leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-violet-100"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
