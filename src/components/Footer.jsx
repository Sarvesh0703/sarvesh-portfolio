export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-5 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Sarvesh Pandey. All rights reserved.</p>

        <p>Designed & Built with React.js</p>
      </div>
    </footer>
  );
}
