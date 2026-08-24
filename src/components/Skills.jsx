const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Bootstrap",
  "Axios",
  "Git",
  "GitHub",
  "REST APIs",
  "Responsive Design",
  "Figma",
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white/[0.02] px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Technical Skills
          </p>

          <h2 className="text-4xl font-black text-white sm:text-5xl">
            My toolkit
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="group glass rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-200">{skill}</span>

                <span className="text-xs text-slate-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-700 group-hover:w-full"
                  style={{
                    width: `${75 + (index % 4) * 5}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
