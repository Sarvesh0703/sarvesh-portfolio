const reasons = [
  {
    icon: "⚡",
    title: "Strong Frontend Focus",
    text: "Focused primarily on React.js, JavaScript and modern responsive frontend development.",
  },
  {
    icon: "🎯",
    title: "Pixel-Perfect UI",
    text: "Comfortable converting designs into clean and responsive production-ready interfaces.",
  },
  {
    icon: "🧩",
    title: "Reusable Components",
    text: "Builds maintainable interfaces using reusable React components and structured code.",
  },
  {
    icon: "📱",
    title: "Responsive by Default",
    text: "Interfaces are designed to work smoothly across desktop, tablet and mobile.",
  },
];

export default function WhyHireMe() {
  return (
    <section className="px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
            Why Me
          </p>

          <h2 className="text-4xl font-black text-white sm:text-5xl">
            Why hire Sarvesh?
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="glass rounded-3xl p-7 text-center transition duration-500 hover:-translate-y-2"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-2xl">
                {item.icon}
              </div>

              <h3 className="mt-6 font-bold text-white">{item.title}</h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
