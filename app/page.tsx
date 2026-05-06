"use client";

import { useRef, useState } from "react";

export default function Home() {
  const formRef = useRef<HTMLDivElement | null>(null);

  const [form, setForm] = useState({
    guitarType: "Super Strat",
    genre: "80s Metal",
    vibe: "Vegas Neon Cyberpunk",
    influences: "George Lynch, EVH, Dokken",
    toneGoal: "Aggressive, tight, hot-rodded, singing sustain",
  });

  const [image, setImage] = useState<string | null>(null);
  const [generated, setGenerated] = useState(false);

  const buildName = `${form.vibe.split(" ")[0]} ${form.guitarType} Machine`;

  function update(field: string, value: string) {
    setForm({ ...form, [field]: value });
  }

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(URL.createObjectURL(file));
  }

  function generateBuild() {
    setGenerated(true);
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function downloadBuildSheet() {
    const text = `
TONEFORGE AI BUILD SHEET

Build Name: ${buildName}

Guitar Type: ${form.guitarType}
Genre: ${form.genre}
Visual Vibe: ${form.vibe}
Influences: ${form.influences}
Tone Goal: ${form.toneGoal}

Tone DNA:
A custom high-energy tone profile built for ${form.genre}. Expect tight attack, focused mids, strong sustain, and a stage-ready identity.

Suggested Direction:
High-output bridge pickup, stable tremolo setup, clean wiring, aggressive amp gain, delay, reverb, and a visual theme matching ${form.vibe}.
`;

    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = `${buildName.replaceAll(" ", "-").toLowerCase()}-build-sheet.txt`;
    link.href = url;
    link.click();
  }

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

          <button
            onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
            className="bg-orange-500 text-black font-bold px-6 py-3 rounded-xl"
          >
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
            <div className="aspect-video bg-gradient-to-br from-zinc-900 via-black to-orange-950 rounded-2xl flex items-center justify-center border border-orange-500/20 overflow-hidden">
              {image ? (
                <img src={image} alt="Uploaded guitar" className="w-full h-full object-cover" />
              ) : (
                <div className="text-center">
                  <div className="text-7xl mb-4">🎸</div>
                  <h3 className="text-2xl font-black text-orange-400">
                    {buildName}
                  </h3>
                  <p className="text-gray-400 mt-2">Concept Preview</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <section ref={formRef} className="grid lg:grid-cols-2 gap-8 mt-16">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-2xl font-black mb-6">Create a Build Profile</h3>

            <div className="space-y-4">
              <input
                value={form.guitarType}
                onChange={(e) => update("guitarType", e.target.value)}
                className="w-full bg-black border border-white/20 rounded-xl p-3"
                placeholder="Guitar type"
              />

              <input
                value={form.genre}
                onChange={(e) => update("genre", e.target.value)}
                className="w-full bg-black border border-white/20 rounded-xl p-3"
                placeholder="Genre"
              />

              <input
                value={form.vibe}
                onChange={(e) => update("vibe", e.target.value)}
                className="w-full bg-black border border-white/20 rounded-xl p-3"
                placeholder="Visual vibe"
              />

              <input
                value={form.influences}
                onChange={(e) => update("influences", e.target.value)}
                className="w-full bg-black border border-white/20 rounded-xl p-3"
                placeholder="Influences"
              />

              <textarea
                value={form.toneGoal}
                onChange={(e) => update("toneGoal", e.target.value)}
                className="w-full bg-black border border-white/20 rounded-xl p-3 min-h-28"
                placeholder="Tone goal..."
              />

              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full bg-black border border-white/20 rounded-xl p-3"
              />

              <button
                onClick={generateBuild}
                className="w-full bg-orange-500 text-black font-black py-4 rounded-xl"
              >
                Generate ToneForge Build Sheet
              </button>
            </div>
          </div>

          <div className="bg-white/5 border border-orange-500/20 rounded-3xl p-6">
            <p className="text-orange-400 tracking-[0.3em] uppercase text-sm">
              Generated Report
            </p>

            <h3 className="text-3xl font-black mt-2 mb-6">
              {generated ? buildName : "ToneForge Build Sheet"}
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <Report title="Guitar Type" text={form.guitarType} />
              <Report title="Genre" text={form.genre} />
              <Report title="Visual Vibe" text={form.vibe} />
              <Report title="Influences" text={form.influences} />
              <Report
                title="Tone DNA"
                text={`Built for ${form.genre}: tight attack, hot sustain, focused mids, and a stage-ready personality.`}
              />
              <Report
                title="Suggested Chain"
                text="High-output bridge humbucker, noise gate, modded British amp, delay, and plate reverb."
              />
            </div>

            <button
              onClick={downloadBuildSheet}
              className="w-full mt-6 bg-white text-black font-black py-4 rounded-xl"
            >
              Download Build Sheet
            </button>

            <a
              href="https://payhip.com/"
              target="_blank"
              className="block text-center w-full mt-4 bg-green-500 text-black font-black py-4 rounded-xl"
            >
              Buy Custom Pack — $14.99
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}

function Report({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-black/50 border border-white/10 rounded-2xl p-4">
      <h4 className="text-orange-300 font-bold mb-2">{title}</h4>
      <p className="text-gray-300 text-sm">{text}</p>
    </div>
  );
}