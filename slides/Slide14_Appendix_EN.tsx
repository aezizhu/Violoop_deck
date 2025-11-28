import React from 'react';

interface Competitor {
  name: string;
  image: string;
  price: string;
  sales: string;
  ai: boolean;
  wifi: boolean;
  bios: boolean;
  resolution: string;
}

const Slide14_Appendix: React.FC = () => {
  const competitors: Competitor[] = [
    { name: "JetKVM", image: "📦", price: "$69", sales: "$5,927,862", ai: false, wifi: false, bios: true, resolution: "1080p@30FPS" },
    { name: "GLI KVM", image: "📦", price: "$159", sales: "$982,645", ai: false, wifi: true, bios: true, resolution: "4K@30FPS" },
    { name: "PIKVM", image: "📦", price: "$330", sales: "$821,040", ai: false, wifi: true, bios: true, resolution: "1080p@30FPS" },
    { name: "Axe KVM", image: "📦", price: "$79", sales: "Unreleased", ai: false, wifi: false, bios: true, resolution: "1080p@30FP" },
    { name: "TeamViewer", image: "💻", price: "$50/mo", sales: "ARR $800M+", ai: false, wifi: true, bios: false, resolution: "1080p@30FP" },
  ];

  const violoop = { name: "Violoop Lite & Pro", image: "🎯", price: "$99 & $299", sales: "Target $2M+", ai: true, wifi: true, bios: true, resolution: "Up to 4K@60FPS" };

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Header */}
      <div className="text-center py-2 md:py-4 z-10 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-800/50 border border-zinc-700 rounded-full mb-2">
          <div className="w-2 h-2 bg-zinc-500 rounded-full" />
          <span className="text-xs font-mono text-zinc-400">Appendix</span>
        </div>
        <h3 className="text-xl md:text-3xl font-black text-white mb-1">Competitive Landscape</h3>
        <p className="text-zinc-400 text-xs md:text-base">KVM vs Remote Access Market Comparison</p>
      </div>

      {/* Comparison Table */}
      <div className="flex-1 flex flex-col px-4 md:px-8 pb-16 md:pb-6 z-10 overflow-auto">
        {/* Mobile: Card View */}
        <div className="block md:hidden space-y-4">
          {/* Violoop Card - Highlighted */}
          <div className="bg-green-950/30 border-2 border-green-500 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🎯</span>
              <span className="text-green-400 font-bold">{violoop.name}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div><span className="text-zinc-500">Price:</span><span className="text-green-400">{violoop.price}</span></div>
              <div><span className="text-zinc-500">Sales:</span><span className="text-green-400">{violoop.sales}</span></div>
              <div><span className="text-zinc-500">AI Features:</span><span className="text-green-400">✓</span></div>
              <div><span className="text-zinc-500">WiFi:</span><span className="text-green-400">✓</span></div>
              <div><span className="text-zinc-500">BIOS:</span><span className="text-green-400">✓</span></div>
              <div><span className="text-zinc-500">Resolution:</span><span className="text-green-400">{violoop.resolution}</span></div>
            </div>
          </div>

          {/* Competitor Cards */}
          {competitors.map((c, i) => (
            <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{c.image}</span>
                <span className="text-zinc-400 font-bold text-sm">{c.name}</span>
              </div>
              <div className="grid grid-cols-2 gap-1 text-[10px]">
                <div><span className="text-zinc-500">Price:</span><span className="text-white">{c.price}</span></div>
                <div><span className="text-zinc-500">Sales:</span><span className="text-zinc-400">{c.sales}</span></div>
                <div><span className="text-zinc-500">AI:</span>{c.ai ? <span className="text-green-400">✓</span> : <span className="text-zinc-600">✗</span>}</div>
                <div><span className="text-zinc-500">WiFi:</span>{c.wifi ? <span className="text-green-400">✓</span> : <span className="text-zinc-600">✗</span>}</div>
                <div><span className="text-zinc-500">BIOS:</span>{c.bios ? <span className="text-green-400">✓</span> : <span className="text-zinc-600">✗</span>}</div>
                <div><span className="text-zinc-500">Resolution:</span><span className="text-zinc-400">{c.resolution}</span></div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Table View */}
        <div className="hidden md:block bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-7 gap-px bg-zinc-800">
            <div className="bg-zinc-900 p-3 text-zinc-500 text-xs font-mono">Category</div>
            {competitors.map((c, i) => (
              <div key={i} className="bg-zinc-900 p-3 text-center">
                <div className="text-2xl mb-1">{c.image}</div>
                <div className="text-zinc-400 text-xs font-bold">{c.name}</div>
              </div>
            ))}
            <div className="bg-green-950/50 p-3 text-center border-l-2 border-green-500">
              <div className="text-2xl mb-1">🎯</div>
              <div className="text-green-400 text-xs font-bold">{violoop.name}</div>
            </div>
          </div>

          {/* Price Row */}
          <div className="grid grid-cols-7 gap-px bg-zinc-800">
            <div className="bg-zinc-950 p-3 text-zinc-500 text-xs font-mono flex items-center">Price</div>
            {competitors.map((c, i) => (
              <div key={i} className="bg-zinc-950 p-3 text-center">
                <div className="text-white text-sm font-bold">{c.price}</div>
              </div>
            ))}
            <div className="bg-green-950/30 p-3 text-center border-l-2 border-green-500">
              <div className="text-green-400 text-sm font-bold">{violoop.price}</div>
            </div>
          </div>

          {/* Sales Row */}
          <div className="grid grid-cols-7 gap-px bg-zinc-800">
            <div className="bg-zinc-950 p-3 text-zinc-500 text-xs font-mono flex items-center">Sales</div>
            {competitors.map((c, i) => (
              <div key={i} className="bg-zinc-950 p-3 text-center">
                <div className="text-zinc-400 text-xs">{c.sales}</div>
              </div>
            ))}
            <div className="bg-green-950/30 p-3 text-center border-l-2 border-green-500">
              <div className="text-green-400 text-xs">{violoop.sales}</div>
            </div>
          </div>

          {/* AI Features Row */}
          <div className="grid grid-cols-7 gap-px bg-zinc-800">
            <div className="bg-zinc-950 p-3 text-zinc-500 text-xs font-mono flex items-center">AI Features</div>
            {competitors.map((c, i) => (
              <div key={i} className="bg-zinc-950 p-3 text-center">
                {c.ai ? <span className="text-green-400">✓</span> : <span className="text-zinc-600">✗</span>}
              </div>
            ))}
            <div className="bg-green-950/30 p-3 text-center border-l-2 border-green-500">
              <span className="text-green-400 font-bold">✓</span>
            </div>
          </div>

          {/* Over WiFi Row */}
          <div className="grid grid-cols-7 gap-px bg-zinc-800">
            <div className="bg-zinc-950 p-3 text-zinc-500 text-xs font-mono flex items-center">WiFi Support</div>
            {competitors.map((c, i) => (
              <div key={i} className="bg-zinc-950 p-3 text-center">
                {c.wifi ? <span className="text-green-400">✓</span> : <span className="text-zinc-600">✗</span>}
              </div>
            ))}
            <div className="bg-green-950/30 p-3 text-center border-l-2 border-green-500">
              <span className="text-green-400 font-bold">✓</span>
            </div>
          </div>

          {/* BIOS Control Row */}
          <div className="grid grid-cols-7 gap-px bg-zinc-800">
            <div className="bg-zinc-950 p-3 text-zinc-500 text-xs font-mono flex items-center">BIOS Control</div>
            {competitors.map((c, i) => (
              <div key={i} className="bg-zinc-950 p-3 text-center">
                {c.bios ? <span className="text-green-400">✓</span> : <span className="text-zinc-600">✗</span>}
              </div>
            ))}
            <div className="bg-green-950/30 p-3 text-center border-l-2 border-green-500">
              <span className="text-green-400 font-bold">✓</span>
            </div>
          </div>

          {/* Resolution Row */}
          <div className="grid grid-cols-7 gap-px bg-zinc-800">
            <div className="bg-zinc-950 p-3 text-zinc-500 text-xs font-mono flex items-center">Resolution</div>
            {competitors.map((c, i) => (
              <div key={i} className="bg-zinc-950 p-3 text-center">
                <div className="text-zinc-400 text-[10px]">{c.resolution}</div>
              </div>
            ))}
            <div className="bg-green-950/30 p-3 text-center border-l-2 border-green-500">
              <div className="text-green-400 text-[10px] font-bold">{violoop.resolution}</div>
            </div>
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-3 md:p-4">
            <div className="text-green-400 font-bold mb-2 text-sm md:text-base">🧠 AI-Native</div>
            <p className="text-zinc-500 text-[10px] md:text-xs">Only solution with built-in AI agent capabilities and hybrid grounding technology.</p>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-3 md:p-4">
            <div className="text-green-400 font-bold mb-2 text-sm md:text-base">🔌 Full-Stack Integration</div>
            <p className="text-zinc-500 text-[10px] md:text-xs">WiFi + BIOS + 4K60 in one device. Competitors must compromise.</p>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-3 md:p-4">
            <div className="text-green-400 font-bold mb-2 text-sm md:text-base">📈 Platform Strategy</div>
            <p className="text-zinc-500 text-[10px] md:text-xs">Not just hardware — SaaS + Marketplace for recurring revenue.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide14_Appendix;
