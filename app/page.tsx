"use client";

import Link from "next/link";
import { trackEntryClick } from "@/lib/tracking";

const entries = [
  {
    id: "初心",
    title: "育儿初心",
    description: "我们为什么养育？成全孩子 · 彼此滋养",
    href: "/intent",
  },
  {
    id: "理论",
    title: "内在结构",
    description: "孩子的内心如何构成？六大结构 · 十大能力",
    href: "/theory",
  },
  {
    id: "工具",
    title: "落地工具",
    description: "现在可以怎么做？望杏成林 · 荔枝测评",
    href: "/tools",
  },
];

function handleEntryClick(id: string) {
  trackEntryClick(id);
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 首屏 - 大量留白 */}
      <section className="max-w-3xl mx-auto px-6 py-24 sm:py-32 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#78350f] mb-6 leading-relaxed">
          内在结构养育
        </h1>
        <p className="text-lg text-[#78350f]/60 mb-8 leading-relaxed">
          一套以「心神」为核心的专业育儿方法论
        </p>
        <p className="text-base text-[#78350f]/50 mb-10 leading-relaxed max-w-xl mx-auto">
          从对齐初心，到构建系统，再到落地行动——
          帮助孩子成为一个内在稳固、有力量、能享受生命的人。
        </p>
        <p className="text-sm text-[#78350f]/40 italic mb-10">
          "你对待孩子的方式，就是孩子内心世界的建筑图纸。"
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/intent" className="btn-primary">
            写下我的育儿初心
          </Link>
          <Link href="/theory" className="btn-secondary">
            了解内在结构
          </Link>
        </div>
      </section>

      {/* 三入口导航 - 宽松间距 */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="grid gap-4">
          {entries.map((entry) => (
            <Link
              key={entry.id}
              href={entry.href}
              onClick={() => handleEntryClick(entry.id)}
              className="card p-6 group flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-[#fef3c7] flex items-center justify-center flex-shrink-0">
                <span className="text-[#f59e0b] text-lg">
                  {entry.id === "初心" && "✦"}
                  {entry.id === "理论" && "◈"}
                  {entry.id === "工具" && "◇"}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-[#78350f] group-hover:text-[#f59e0b]">
                  {entry.title}
                </h3>
                <p className="text-sm text-[#78350f]/50">{entry.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 理念区 */}
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <h2 className="text-xl font-bold text-[#78350f] mb-4">
          什么是内在结构养育？
        </h2>
        <div className="w-8 h-0.5 bg-[#f59e0b] mx-auto mb-6" />
        <p className="text-sm text-[#78350f]/60 leading-relaxed mb-8">
          以「心神」为核心，以「成全孩子」和「构建彼此滋养的亲子关系」为双翼，
          通过系统培育孩子内在六大心理结构及十大心神能力，帮助孩子成为一个内在稳固、有力量、能享受生命的人。
        </p>
        <div className="grid gap-3 text-left">
          {[
            "学院派根基 + 泥土般的实践",
            "妈妈与爸爸的双视角融合",
            "知行合一的长期主义",
          ].map((gene, i) => (
            <div key={i} className="text-sm text-[#78350f]/70 bg-white p-4 rounded-lg border border-[#f59e0b]/10">
              {gene}
            </div>
          ))}
        </div>
      </section>

      {/* 初心预览 */}
      <section className="max-w-2xl mx-auto px-6 py-20">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-[#78350f] mb-2">
            养育的北极星
          </h2>
          <p className="text-sm text-[#78350f]/50">育儿初心</p>
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-[#f59e0b]/10">
            <h3 className="text-sm font-medium text-[#f59e0b] mb-3">成全孩子的五个层次</h3>
            <ul className="space-y-2 text-sm text-[#78350f]/70">
              {["永葆热情与好奇", "识风险知进退", "唤起勇气与力量", "不辜负天赋", "享受其中"].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#f59e0b]">{i + 1}.</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl border border-[#f59e0b]/10">
            <h3 className="text-sm font-medium text-[#f59e0b] mb-3">彼此滋养</h3>
            <p className="text-sm text-[#78350f]/70">彼此看见 · 彼此理解 · 彼此支持</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/intent" className="text-sm text-[#f59e0b] hover:underline">
            写下你的育儿初心 →
          </Link>
        </div>
      </section>

      {/* 理论预览 */}
      <section className="max-w-2xl mx-auto px-6 py-20 bg-white/50">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-[#78350f] mb-2">
            心灵宫殿
          </h2>
          <p className="text-sm text-[#78350f]/50">六大内在结构</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[#f59e0b]/10 text-center mb-6">
          <div className="inline-block px-4 py-1.5 bg-[#fef3c7] rounded-full text-sm text-[#78350f] mb-4">
            心神（核心）
          </div>
          <div className="grid grid-cols-3 gap-3 text-xs text-[#78350f]/60">
            <div className="p-2 bg-[#fef3c7]/50 rounded-lg">
              <p className="font-medium text-[#78350f] mb-1">供能</p>
              准则 · 情绪
            </div>
            <div className="p-2 bg-[#fef3c7]/50 rounded-lg">
              <p className="font-medium text-[#78350f] mb-1">保护</p>
              防御机制
            </div>
            <div className="p-2 bg-[#fef3c7]/50 rounded-lg">
              <p className="font-medium text-[#78350f] mb-1">定向</p>
              自我 · 客体
            </div>
          </div>
        </div>
        <div className="text-center mb-6">
          <p className="text-xs text-[#78350f]/40 mb-3">十大心神能力阶梯</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["安全感", "营养足", "主体感", "现实感", "主动", "真实客体", "勤勉", "胜任力", "韧性", "三观"].map((a) => (
              <span key={a} className="px-2 py-1 text-xs bg-white text-[#78350f] rounded-full border border-[#f59e0b]/10">
                {a}
              </span>
            ))}
          </div>
        </div>
        <div className="text-center">
          <Link href="/theory" className="text-sm text-[#f59e0b] hover:underline">
            查看完整理论 →
          </Link>
        </div>
      </section>

      {/* 彼此滋养 */}
      <section className="max-w-2xl mx-auto px-6 py-20">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-[#78350f] mb-2">
            彼此滋养
          </h2>
          <p className="text-sm text-[#78350f]/50">看见 · 理解 · 支持</p>
        </div>
        <div className="grid gap-4">
          {[
            { level: "彼此看见", core: "我懂你这个人", quote: "你还没说，我已经懂了" },
            { level: "彼此理解", core: "我接受你行为背后的逻辑", quote: "你的方式，我接受" },
            { level: "彼此支持", core: "我愿意用心理能量为你加持", quote: "我愿意" },
          ].map((item) => (
            <div key={item.level} className="bg-white p-5 rounded-xl border border-[#f59e0b]/10 text-center">
              <h3 className="font-semibold text-[#78350f] mb-1">{item.level}</h3>
              <p className="text-xs text-[#f59e0b] mb-2">{item.core}</p>
              <p className="text-xs text-[#78350f]/50 italic">"{item.quote}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* 工具区 */}
      <section className="max-w-xl mx-auto px-6 py-20 bg-white/50">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-[#78350f] mb-2">
            落地工具
          </h2>
          <p className="text-sm text-[#78350f]/50">让理论进入日常</p>
        </div>
        <div className="grid gap-4">
          {[
            { name: "望杏成林", desc: "日常陪伴与滋养工具", detail: "亲子记录 · 情绪命名 · 习惯养成" },
            { name: "荔枝测评", desc: "阶段性评估工具", detail: "十大心神能力发展水平评估" },
          ].map((tool) => (
            <div key={tool.name} className="bg-white p-6 rounded-xl border border-[#f59e0b]/10">
              <h3 className="font-semibold text-[#78350f] mb-1">{tool.name}</h3>
              <p className="text-xs text-[#f59e0b] mb-2">{tool.desc}</p>
              <p className="text-xs text-[#78350f]/50">{tool.detail}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/tools" className="text-sm text-[#f59e0b] hover:underline">
            查看工具 →
          </Link>
        </div>
      </section>

      {/* 故事区 */}
      <section className="max-w-xl mx-auto px-6 py-20 text-center">
        <h2 className="text-xl font-bold text-[#78350f] mb-4">
          这套方法从何而来？
        </h2>
        <p className="text-sm text-[#78350f]/60 leading-relaxed mb-6">
          杨莉老师与朋大大，用十余年时间，在心理学专业学习与真实育儿实践中，共同打磨出这套心灵建造体系。他们的孩子，也是这套方法的第一位完整践行者。
        </p>
        <Link href="/about" className="text-sm text-[#f59e0b] hover:underline">
          了解更多 →
        </Link>
      </section>
    </div>
  );
}
