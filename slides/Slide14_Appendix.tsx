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
    { name: "Axe KVM", image: "📦", price: "$79", sales: "未发布", ai: false, wifi: false, bios: true, resolution: "1080p@30FP" },
    { name: "TeamViewer", image: "💻", price: "$50/月", sales: "ARR $8亿+", ai: false, wifi: true, bios: false, resolution: "1080p@30FP" },
  ];

  const violoop = { name: "Violoop Lite & Pro", image: "🎯", price: "$99 & $299", sales: "目标 $200万+", ai: true, wifi: true, bios: true, resolution: "最高 4K@60FPS" };

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Header - Chinese */}
      <div className="text-center py-2 md:py-4 z-10 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-800/50 border border-zinc-700 rounded-full mb-2">
          <div className="w-2 h-2 bg-zinc-500 rounded-full" />
          <span className="text-xs font-mono text-zinc-400">附录</span>
        </div>
        <h3 className="text-xl md:text-3xl font-black text-white mb-1">竞争格局</h3>
        <p className="text-zinc-400 text-xs md:text-base">KVM与远程访问市场对比</p>
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
              <div><span className="text-zinc-500">价格：</span><span className="text-green-400">{violoop.price}</span></div>
              <div><span className="text-zinc-500">销售：</span><span className="text-green-400">{violoop.sales}</span></div>
              <div><span className="text-zinc-500">AI功能：</span><span className="text-green-400">✓</span></div>
              <div><span className="text-zinc-500">WiFi：</span><span className="text-green-400">✓</span></div>
              <div><span className="text-zinc-500">BIOS：</span><span className="text-green-400">✓</span></div>
              <div><span className="text-zinc-500">分辨率：</span><span className="text-green-400">{violoop.resolution}</span></div>
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
                <div><span className="text-zinc-500">价格：</span><span className="text-white">{c.price}</span></div>
                <div><span className="text-zinc-500">销售：</span><span className="text-zinc-400">{c.sales}</span></div>
                <div><span className="text-zinc-500">AI：</span>{c.ai ? <span className="text-green-400">✓</span> : <span className="text-zinc-600">✗</span>}</div>
                <div><span className="text-zinc-500">WiFi：</span>{c.wifi ? <span className="text-green-400">✓</span> : <span className="text-zinc-600">✗</span>}</div>
                <div><span className="text-zinc-500">BIOS：</span>{c.bios ? <span className="text-green-400">✓</span> : <span className="text-zinc-600">✗</span>}</div>
                <div><span className="text-zinc-500">分辨率：</span><span className="text-zinc-400">{c.resolution}</span></div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Table View */}
        <div className="hidden md:block bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-7 gap-px bg-zinc-800">
            <div className="bg-zinc-900 p-3 text-zinc-500 text-xs font-mono">类别</div>
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

          {/* Price Row - Chinese */}
          <div className="grid grid-cols-7 gap-px bg-zinc-800">
            <div className="bg-zinc-950 p-3 text-zinc-500 text-xs font-mono flex items-center">价格</div>
            {competitors.map((c, i) => (
              <div key={i} className="bg-zinc-950 p-3 text-center">
                <div className="text-white text-sm font-bold">{c.price}</div>
              </div>
            ))}
            <div className="bg-green-950/30 p-3 text-center border-l-2 border-green-500">
              <div className="text-green-400 text-sm font-bold">{violoop.price}</div>
            </div>
          </div>

          {/* Sales Row - Chinese */}
          <div className="grid grid-cols-7 gap-px bg-zinc-800">
            <div className="bg-zinc-950 p-3 text-zinc-500 text-xs font-mono flex items-center">销售额</div>
            {competitors.map((c, i) => (
              <div key={i} className="bg-zinc-950 p-3 text-center">
                <div className="text-zinc-400 text-xs">{c.sales}</div>
              </div>
            ))}
            <div className="bg-green-950/30 p-3 text-center border-l-2 border-green-500">
              <div className="text-green-400 text-xs">{violoop.sales}</div>
            </div>
          </div>

          {/* AI Features Row - Chinese */}
          <div className="grid grid-cols-7 gap-px bg-zinc-800">
            <div className="bg-zinc-950 p-3 text-zinc-500 text-xs font-mono flex items-center">AI功能</div>
            {competitors.map((c, i) => (
              <div key={i} className="bg-zinc-950 p-3 text-center">
                {c.ai ? <span className="text-green-400">✓</span> : <span className="text-zinc-600">✗</span>}
              </div>
            ))}
            <div className="bg-green-950/30 p-3 text-center border-l-2 border-green-500">
              <span className="text-green-400 font-bold">✓</span>
            </div>
          </div>

          {/* Over WiFi Row - Chinese */}
          <div className="grid grid-cols-7 gap-px bg-zinc-800">
            <div className="bg-zinc-950 p-3 text-zinc-500 text-xs font-mono flex items-center">WiFi支持</div>
            {competitors.map((c, i) => (
              <div key={i} className="bg-zinc-950 p-3 text-center">
                {c.wifi ? <span className="text-green-400">✓</span> : <span className="text-zinc-600">✗</span>}
              </div>
            ))}
            <div className="bg-green-950/30 p-3 text-center border-l-2 border-green-500">
              <span className="text-green-400 font-bold">✓</span>
            </div>
          </div>

          {/* BIOS Control Row - Chinese */}
          <div className="grid grid-cols-7 gap-px bg-zinc-800">
            <div className="bg-zinc-950 p-3 text-zinc-500 text-xs font-mono flex items-center">BIOS控制</div>
            {competitors.map((c, i) => (
              <div key={i} className="bg-zinc-950 p-3 text-center">
                {c.bios ? <span className="text-green-400">✓</span> : <span className="text-zinc-600">✗</span>}
              </div>
            ))}
            <div className="bg-green-950/30 p-3 text-center border-l-2 border-green-500">
              <span className="text-green-400 font-bold">✓</span>
            </div>
          </div>

          {/* Resolution Row - Chinese */}
          <div className="grid grid-cols-7 gap-px bg-zinc-800">
            <div className="bg-zinc-950 p-3 text-zinc-500 text-xs font-mono flex items-center">分辨率</div>
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

        {/* Key Differentiators - Chinese */}
        <div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-3 md:p-4">
            <div className="text-green-400 font-bold mb-2 text-sm md:text-base">🧠 AI原生</div>
            <p className="text-zinc-500 text-[10px] md:text-xs">唯一具备内置AI智能体能力和混合落地技术的解决方案。</p>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-3 md:p-4">
            <div className="text-green-400 font-bold mb-2 text-sm md:text-base">🔌 全栈集成</div>
            <p className="text-zinc-500 text-[10px] md:text-xs">WiFi + BIOS + 4K60一体化设备。竞品需要妥协。</p>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-3 md:p-4">
            <div className="text-green-400 font-bold mb-2 text-sm md:text-base">📈 平台战略</div>
            <p className="text-zinc-500 text-[10px] md:text-xs">不只是硬件 — SaaS + 市场实现经常性收入。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide14_Appendix;
