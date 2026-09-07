"use client";

import Link from "next/link";
import { trackToolClick } from "@/lib/tracking";

const green = {
  50: "#f6faf5",
  100: "#eaf3e6",
  200: "#d0e2c8",
  300: "#aec89f",
  400: "#81ae70",
  500: "#5f924b",
  600: "#487538",
  700: "#365c28",
  800: "#25451b",
  900: "#1a2f12",
};

const neutral = {
  50: "#fafbfa",
  100: "#f2f4f0",
  200: "#e2e6df",
  300: "#c8cec4",
  400: "#a4aca0",
  500: "#808a7c",
  600: "#5a6557",
  700: "#3f493c",
  800: "#2a3228",
  900: "#1a2018",
};

export default function TestPage() {
  function handleToolClick(name: string) {
    trackToolClick(name);
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fcfdfc", fontFamily: "'Inter', -apple-system, sans-serif" }}>

      {/* 导航栏 */}
      <nav className="max-w-[1120px] mx-auto px-5 py-8 flex items-center justify-between flex-wrap gap-4" style={{ borderBottom: `1px solid ${neutral[200]}` }}>
        <Link href="/" className="text-xl font-semibold" style={{ color: green[700], textDecoration: "none", display: "flex", alignItems: "center", gap: 8, fontFamily: "'Playfair Display', serif", letterSpacing: "-0.02em" }}>
          🌱 望杏成林
          <span style={{ color: green[400], fontWeight: 400, fontStyle: "italic", fontSize: "0.9em" }}>· 内在结构养育</span>
        </Link>
        <ul className="flex items-center gap-8 flex-wrap" style={{ listStyle: "none" }}>
          <li><Link href="/theory" className="text-base font-medium" style={{ color: green[700], textDecoration: "none", borderBottom: `2px solid ${green[400]}` }}>理论</Link></li>
          <li><Link href="/" className="text-base" style={{ color: neutral[600], textDecoration: "none" }}>返回首页</Link></li>
          <li><Link href="/about" className="text-base" style={{ color: neutral[600], textDecoration: "none" }}>关于我们 →</Link></li>
        </ul>
      </nav>

      {/* Hero */}
      <header className="max-w-[1120px] mx-auto px-5 py-20 text-center">
        <div className="inline-block text-sm font-medium tracking-widest uppercase px-6 py-2 rounded-full mb-8" style={{ backgroundColor: green[100], color: green[600] }}>
          🌿 理论是地图，工具是脚下可走的路
        </div>
        <h1 className="text-5xl sm:text-6xl font-semibold leading-tight mb-5" style={{ color: green[800], fontFamily: "'Playfair Display', serif", letterSpacing: "-0.025em", maxWidth: 860, margin: "0 auto" }}>
          让孩子的内在结构<br />
          <span style={{ color: green[400], fontStyle: "italic", fontWeight: 400 }}>被看见</span> ，
          <span style={{ color: green[400], fontStyle: "italic", fontWeight: 400 }}>被理解</span> ，
          <span style={{ color: green[400], fontStyle: "italic", fontWeight: 400 }}>被支持</span>
        </h1>
        <p className="text-xl mb-2" style={{ color: neutral[600], maxWidth: 560, margin: "0 auto" }}>基于内在结构养育理论，陪伴每一个孩子从容成长。</p>
        <p className="text-base" style={{ color: neutral[500] }}>日常滋养 · 科学测评 · 升学参考</p>
      </header>

      {/* 日常陪伴 */}
      <section className="max-w-[1120px] mx-auto px-5 py-16">
        <div className="inline-block text-sm font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-5" style={{ backgroundColor: green[100], color: green[600] }}>
          🌱 日常陪伴
        </div>
        <h2 className="text-4xl font-semibold mb-4" style={{ color: green[800], fontFamily: "'Playfair Display', serif", letterSpacing: "-0.015em" }}>
          望杏成林 · 日常陪伴与滋养
        </h2>
        <div className="w-20 h-1 rounded mb-8" style={{ backgroundColor: green[200] }} />

        {/* 单卡片布局 */}
        <div className="bg-white rounded-3xl p-12 border max-w-4xl" style={{ borderColor: neutral[200], boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
          <span className="text-5xl block mb-4">🌱</span>
          <h3 className="text-2xl font-semibold mb-2" style={{ color: green[700] }}>日常陪伴与滋养</h3>
          <div className="text-sm font-medium uppercase tracking-wider mb-5" style={{ color: green[400] }}>陪伴 · 记录 · 成长</div>
          <p className="text-lg leading-relaxed mb-6" style={{ color: neutral[700], maxWidth: "95%" }}>
            亲子成长记录、情绪命名、习惯养成、成长瞬间捕捉。服务于六大内在结构的日常滋养，覆盖多个心神能力的敏感期。
          </p>
          <div className="flex flex-wrap gap-3">
            {["情绪命名", "习惯养成", "成长瞬间", "敏感期覆盖"].map(tag => (
              <span key={tag} className="text-sm font-medium px-5 py-2 rounded-full" style={{ backgroundColor: green[50], color: green[700], border: `1px solid ${green[200]}` }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 测评工具 */}
      <section className="max-w-[1120px] mx-auto px-5 py-16">
        <div className="inline-block text-sm font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-5" style={{ backgroundColor: green[100], color: green[600] }}>
          📊 测评工具 · 荔枝测评系列
        </div>
        <h2 className="text-4xl font-semibold mb-4" style={{ color: green[800], fontFamily: "'Playfair Display', serif", letterSpacing: "-0.015em" }}>
          看见底层，从容选择
        </h2>
        <p className="text-lg mb-4" style={{ color: neutral[600], maxWidth: 720 }}>
          在内在结构养育理论指导下，从学习力到心神能力，再到升学潜力，
          为每一个家庭提供科学的决策参考。
        </p>
        <div className="w-20 h-1 rounded mb-12" style={{ backgroundColor: green[200] }} />

        <div className="grid md:grid-cols-3 gap-9">
          {/* 荔学卷 */}
          <div className="bg-white rounded-3xl p-10 border" style={{ borderColor: neutral[200], boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
            <div className="text-5xl mb-4">📋</div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <h3 className="text-2xl font-semibold" style={{ color: green[800] }}>荔学卷</h3>
              <span className="text-xs font-semibold uppercase px-4 py-1 rounded-full" style={{ backgroundColor: green[100], color: green[600], border: `1px solid ${green[200]}` }}>已上线</span>
            </div>
            <div className="text-sm font-medium mb-5" style={{ color: green[500] }}>学习力测评</div>
            <p className="text-base leading-relaxed" style={{ color: neutral[600] }}>
              评估孩子当前的学习力状态：学习兴趣、基础习惯、情绪适应。帮助家长看清孩子学业表现的底层原因。
            </p>
            <div className="mt-8 pt-6" style={{ borderTop: `1px solid ${neutral[200]}` }}>
              <div className="flex items-center justify-between flex-wrap gap-3">
                <span className="text-sm font-medium" style={{ color: neutral[500], display: "flex", alignItems: "center", gap: 8 }}>
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: green[400] }} /> 可用
                </span>
                <a
                  href="https://lzti.nzyy.cc"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleToolClick("荔学卷")}
                  className="text-sm font-medium px-6 py-2 rounded-full border transition-colors"
                  style={{ borderColor: green[300], color: green[700], textDecoration: "none" }}
                >
                  开始测评 →
                </a>
              </div>
            </div>
          </div>

          {/* 荔心卷 */}
          <div className="bg-white rounded-3xl p-10 border" style={{ borderColor: neutral[200], boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
            <div className="text-5xl mb-4">💎</div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <h3 className="text-2xl font-semibold" style={{ color: green[800] }}>荔心卷</h3>
              <span className="text-xs font-semibold uppercase px-4 py-1 rounded-full" style={{ backgroundColor: neutral[100], color: neutral[500], border: `1px solid ${neutral[300]}` }}>敬请期待</span>
            </div>
            <div className="text-sm font-medium mb-5" style={{ color: green[500] }}>心神能力测评</div>
            <p className="text-base leading-relaxed" style={{ color: neutral[600] }}>
              评估孩子十大心神能力的发展水平，定位当前所处的阶段，获得针对性的养育建议。让孩子的心神成长被看见、被理解、被支持。
            </p>
            <div className="mt-8 pt-6" style={{ borderTop: `1px solid ${neutral[200]}` }}>
              <div className="flex items-center justify-between flex-wrap gap-3">
                <span className="text-sm font-medium" style={{ color: neutral[500], display: "flex", alignItems: "center", gap: 8 }}>
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: neutral[400] }} /> 即将上线
                </span>
                <span className="text-sm font-medium px-6 py-2 rounded-full border opacity-50 cursor-not-allowed" style={{ borderColor: neutral[300], color: neutral[500] }}>
                  敬请期待
                </span>
              </div>
            </div>
          </div>

          {/* 荔升卷 */}
          <div className="bg-white rounded-3xl p-10 border" style={{ borderColor: neutral[200], boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
            <div className="text-5xl mb-4">🎯</div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <h3 className="text-2xl font-semibold" style={{ color: green[800] }}>荔升卷</h3>
              <span className="text-xs font-semibold uppercase px-4 py-1 rounded-full" style={{ backgroundColor: neutral[100], color: neutral[500], border: `1px solid ${neutral[300]}` }}>敬请期待</span>
            </div>
            <div className="text-sm font-medium mb-5" style={{ color: green[500] }}>升学潜力指数</div>
            <p className="text-base leading-relaxed" style={{ color: neutral[600] }}>
              基于对孩子内在结构的全面评估，结合发展心理学与教育学规律，科学评估孩子的升学潜力指数，为初高中阶段的选择提供参考依据。
            </p>
            <div className="mt-8 pt-6" style={{ borderTop: `1px solid ${neutral[200]}` }}>
              <div className="flex items-center justify-between flex-wrap gap-3">
                <span className="text-sm font-medium" style={{ color: neutral[500], display: "flex", alignItems: "center", gap: 8 }}>
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: neutral[400] }} /> 即将上线
                </span>
                <span className="text-sm font-medium px-6 py-2 rounded-full border opacity-50 cursor-not-allowed" style={{ borderColor: neutral[300], color: neutral[500] }}>
                  敬请期待
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 底部导航 */}
      <footer className="max-w-[1120px] mx-auto px-5 py-12 mt-16" style={{ borderTop: `1px solid ${neutral[200]}` }}>
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div className="flex items-center gap-8 flex-wrap">
            <Link href="/theory" className="text-base" style={{ color: green[700], textDecoration: "none" }}>← 理论</Link>
            <span className="text-sm" style={{ color: neutral[300] }}>|</span>
            <Link href="/" className="text-base" style={{ color: neutral[600], textDecoration: "none" }}>返回首页</Link>
            <span className="text-sm" style={{ color: neutral[300] }}>|</span>
            <Link href="/about" className="text-base" style={{ color: neutral[600], textDecoration: "none" }}>关于我们 →</Link>
          </div>
          <div className="text-sm" style={{ color: neutral[400] }}>
            🌱 望杏成林 · 内在结构养育
          </div>
        </div>
      </footer>

    </div>
  );
}
