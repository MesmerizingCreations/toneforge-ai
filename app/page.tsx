export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 py-10 max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-16">
          <div>
            <p className="text-orange-400 tracking-[0.3em] text-sm uppercase">
              Greasefiend Labs
            </p>
            <h1 className="text-3xl font-black">ToneForge AI</h1>
          </div>
          <button className="bg-orange-500 text-black font-bold px-6 py-3 rounded-xl">
            Start a Build
          </button>
        </header>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-green-400 font-bold mb-4">
              AI Guitar Identity Generator
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              Build Your Dream Guitar Universe.
            </h2>

            <p className="text-gray-300 text-lg mt-6 max-w-xl">
              Upload your guitar, choose your style, and generate a custom build
              identity with tone DNA, pickup direction, amp ideas, stage visuals,
              and a printable custom-shop style spec sheet.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {["AI Guitar Concepts", "Tone DNA", "Rig Recipes", "Build Sheets"].map(
                (item) => (
                  <span
                    key={item}
                    className="border border-white/20 bg-white/10 rounded-full px-4 py-2 text-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="bg-zinc-900 border border-orange-500/30 rounded-3xl p-6 shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-zinc-900 via-black to-orange-950 rounded-2xl flex items-center justify-center border border-orange-500/20">
              <div className="text-center">
                <div className="text-7xl mb-4">🎸</div>
                <h3 className="text-2xl font-black text-orange-400">
                  Neon Vulture Super Strat
                </h3>
                <p className="text-gray-400 mt-2">Concept Preview</p>
              </div>
            </div>
          </div>
        </div>

        <section className="grid lg:grid-cols-2 gap-8 mt-16">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-2xl font-black mb-6">Create a Build Profile</h3>

            <div className="space-y-4">
              <input className="w-full bg-black border border-white/20 rounded-xl p-3" placeholder="Guitar type: Super Strat" />
              <input className="w-full bg-black border border-white/20 rounded-xl p-3" placeholder="Genre: 80s Metal" />
              <input className="w-full bg-black border border-white/20 rounded-xl p-3" placeholder="Visual vibe: Vegas Neon Cyberpunk" />
              <input className="w-full bg-black border border-white/20 rounded-xl p-3" placeholder="Influences: Lynch, EVH, Dokken" />
              <textarea className="w-full bg-black border border-white/20 rounded-xl p-3 min-h-28" placeholder="Tone goal..." />

              <button className="w-full bg-orange-500 text-black font-black py-4 rounded-xl">
                Upload Guitar Photo / Generate Concept
              </button>
            </div>
          </div>

          <div className="bg-white/5 border border-orange-500/20 rounded-3xl p-6">
            <p className="text-orange-400 tracking-[0.3em] uppercase text-sm">
              Generated Report
            </p>
            <h3 className="text-3xl font-black mt-2 mb-6">
              ToneForge Build Sheet
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                ["Tone DNA", "Hot-rodded sustain, tight attack, midrange bite"],
                ["Build Direction", "Black chrome hardware, neon green accents"],
                ["Suggested Chain", "High-output humbucker, gate, modded British amp"],
                ["Deliverables", "Concept image, tone recipe, social banner, PDF"],
              ].map(([title, text]) => (
                <div key={title} className="bg-black/50 border border-white/10 rounded-2xl p-4">
                  <h4 className="text-orange-300 font-bold mb-2">{title}</h4>
                  <p className="text-gray-300 text-sm">{text}</p>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 bg-white text-black font-black py-4 rounded-xl">
              Buy Custom Pack — $14.99
            </button>
          </div>
        </section>
      </section>
    </main>
  );
}