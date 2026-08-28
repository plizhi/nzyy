"use client";

import Link from "next/link";
import { trackEntryClick } from "@/lib/tracking";

const entries = [
  {
    id: "初心",
    title: "育儿初心",
    subtitle: "我们为什么养育？",
    description: "成全孩子 · 彼此滋养",
    href: "/intent",
  },
  {
    id: "理论",
    title: "内在结构",
    subtitle: "孩子的内心如何构成？",
    description: "六大结构 · 十大能力",
    href: "/theory",
  },
  {
    id: "工具",
    title: "落地工具",
    subtitle: "现在可以怎么做？",
    description: "望杏成林 · 荔枝测评",
    href: "/tools",
  },
];

const genes = [
  {
    title: "学院派根基 + 泥土般的实践",
    description:
      "客体关系、依恋理论、埃里克森阶段论，在真实养育中被反复验证、修正、淬炼。",
  },
  {
    title: "妈妈与爸爸的双视角融合",
    description:
      '既有"妈妈"的情感接纳与情绪涵容，也有"爸爸"的规则力量与探索鼓励。',
  },
  {
    title: "知行合一的长期主义",
    description:
      '不是"搞定孩子"的速成话术，而是父母与孩子共同生长的养育生态。',
  },
];

const abilities = [
  "安全感",
  "营养足",
  "主体感",
  "现实感",
  "主动",
  "真实客体之爱",
  "生产勤勉",
  "胜任力感",
  "心理韧性",
  "三观",
];

const nourishLevels = [
  {
    level: "彼此看见",
    core: "我懂你这个人",
    expression: "你还没说，我已经懂了",
  },
  {
    level: "彼此理解",
    core: "我接受你行为背后的逻辑",
    expression: "你的方式，我接受",
  },
  {
    level: "彼此支持",
    core: "我愿意用心理能量为你加持",
    expression: "我愿意",
  },
];

function handleEntryClick(id: string) {
  trackEntryClick(id);
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 首屏 */}
      <section className="relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#fef3c7]/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#f59e0b]/5 to-transparent rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* 左侧文字 */}
            <div className="flex-1 max-w-xl text-center lg:text-left">
              <div className="inline-block mb-6">
                <span className="text-xs font-medium tracking-widest uppercase text-[#f59e0b] bg-[#fef3c7] px-3 py-1.5 rounded-full">
                  内在结构养育
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#78350f] mb-6 leading-tight">
                一套以「心神」
                <br />
                为核心的育儿方法论
              </h1>
              <p className="text-lg sm:text-xl text-[#78350f]/60 mb-8 leading-relaxed">
                从对齐初心，到构建系统，再到落地行动——
                <br className="hidden sm:block" />
                帮助孩子成为一个内在稳固、有力量、能享受生命的人。
              </p>

              {/* 金句 */}
              <div className="relative mb-10">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f59e0b] to-[#f59e0b]/20 rounded-full" />
                <p className="pl-6 text-base text-[#78350f]/70 italic leading-relaxed">
                  你对待孩子的方式，<br className="sm:hidden" />
                  就是孩子内心世界的建筑图纸。
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/intent" className="btn-primary">
                  写下我的育儿初心
                </Link>
                <Link href="/theory" className="btn-secondary">
                  了解内在结构
                </Link>
              </div>
            </div>

            {/* 右侧心灵宫殿 */}
            <div className="hidden lg:flex flex-col items-center">
              <div className="relative w-72 h-72">
                {/* 外圈 */}
                <div className="absolute inset-0 rounded-full border border-[#f59e0b]/10" />
                <div className="absolute inset-2 rounded-full border border-[#f59e0b]/8" />
                <div className="absolute inset-4 rounded-full border border-[#f59e0b]/5" />

                {/* 系统标签 */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-2 bg-white rounded-full shadow-sm border border-[#f59e0b]/10 text-sm font-medium text-[#78350f]">
                    供能系统
                  </div>
                </div>
                <div className="absolute -bottom-2 left-4">
                  <div className="px-4 py-2 bg-white rounded-full shadow-sm border border-[#f59e0b]/10 text-sm font-medium text-[#78350f]">
                    保护系统
                  </div>
                </div>
                <div className="absolute -bottom-2 right-4">
                  <div className="px-4 py-2 bg-white rounded-full shadow-sm border border-[#f59e0b]/10 text-sm font-medium text-[#78350f]">
                    定向系统
                  </div>
                </div>

                {/* 中心 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-full flex items-center justify-center shadow-lg shadow-[#f59e0b]/20">
                    <div className="text-center">
                      <div className="text-white text-xs font-medium">心神</div>
                      <div className="text-white/70 text-xs">核心</div>
                    </div>
                  </div>
                </div>

                {/* 十大能力小点 */}
                {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((angle, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-[#f59e0b]/40 rounded-full"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${angle}deg) translateY(-120px) rotate(-${angle}deg)`,
                    }}
                  />
                ))}
              </div>
              <p className="mt-6 text-sm text-[#78350f]/40 tracking-wide">
                心灵宫殿结构示意图
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 三入口导航 */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {entries.map((entry) => (
              <Link
                key={entry.id}
                href={entry.href}
                onClick={() => handleEntryClick(entry.id)}
                className="card p-6 sm:p-8 group hover:shadow-lg"
              >
                <div className="w-10 h-10 rounded-full bg-[#fef3c7] flex items-center justify-center mb-4 group-hover:bg-[#f59e0b]/10 transition-colors">
                  <span className="text-[#f59e0b] text-lg">
                    {entry.id === "初心" && "✦"}
                    {entry.id === "理论" && "◈"}
                    {entry.id === "工具" && "◇"}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#78350f] mb-2 group-hover:text-[#f59e0b] transition-colors">
                  {entry.title}
                </h3>
                <p className="text-sm text-[#78350f]/50 mb-3">
                  {entry.subtitle}
                </p>
                <p className="text-sm text-[#78350f]/70">{entry.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 理念区 */}
      <section className="py-16 sm:py-24 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#78350f] mb-4">
              什么是内在结构养育？
            </h2>
            <div className="divider" />
          </div>

          <p className="text-center text-[#78350f]/70 leading-relaxed max-w-3xl mx-auto mb-12 text-lg">
            内在结构养育，是一套以"心神"为核心，以"成全孩子"和"构建彼此滋养的亲子关系"为双翼，
            通过系统培育孩子内在六大心理结构及十大心神能力，帮助孩子成为一个内在稳固、有力量、能享受生命的人的心灵建造体系。
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {genes.map((gene, i) => (
              <div key={i} className="card p-6 text-center hover:shadow-lg">
                <div className="w-12 h-12 rounded-full bg-[#fef3c7] flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#f59e0b] font-bold">{i + 1}</span>
                </div>
                <h4 className="font-semibold text-[#78350f] mb-3 leading-snug">
                  {gene.title}
                </h4>
                <p className="text-sm text-[#78350f]/60 leading-relaxed">
                  {gene.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 初心区预览 */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#78350f]">
                养育的北极星
              </h2>
              <p className="text-[#78350f]/60 mt-2">育儿初心</p>
            </div>
            <Link
              href="/intent"
              className="text-[#f59e0b] hover:text-[#d97706] transition-colors text-sm font-medium flex items-center gap-1 group"
            >
              写下你的育儿初心
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="card p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#fef3c7] flex items-center justify-center">
                  <span className="text-[#f59e0b] text-sm">♡</span>
                </div>
                <h3 className="font-semibold text-[#78350f]">
                  成全孩子的五个层次
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "永葆对世界的热情与好奇",
                  "识风险，知进退",
                  "面对困难时唤起内心的勇气与力量",
                  "不辜负与生俱来的天赋与资源",
                  "享受其中",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#78350f]/70">
                    <span className="text-[#f59e0b] font-medium mt-0.5">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#fef3c7] flex items-center justify-center">
                  <span className="text-[#f59e0b] text-sm">☀</span>
                </div>
                <h3 className="font-semibold text-[#78350f]">
                  彼此滋养
                </h3>
              </div>
              <ul className="space-y-3">
                {["彼此看见", "彼此理解", "彼此支持"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#78350f]/70">
                    <span className="text-[#f59e0b]">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 理论区预览 */}
      <section className="py-16 sm:py-24 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#78350f]">
                心灵宫殿
              </h2>
              <p className="text-[#78350f]/60 mt-2">六大内在结构</p>
            </div>
            <Link
              href="/theory"
              className="text-[#f59e0b] hover:text-[#d97706] transition-colors text-sm font-medium flex items-center gap-1 group"
            >
              查看完整理论
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="card p-6 sm:p-8 mb-6">
            <div className="text-center mb-6">
              <div className="inline-block px-5 py-2 bg-[#fef3c7] rounded-full">
                <span className="text-sm font-semibold text-[#78350f]">心神</span>
                <span className="text-xs text-[#78350f]/50 ml-2">核心</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center text-sm">
              <div className="p-4 bg-[#fef3c7]/50 rounded-xl">
                <p className="font-medium text-[#78350f] mb-1">供能系统</p>
                <p className="text-[#78350f]/50 text-xs">准则价值 · 情绪愿望</p>
              </div>
              <div className="p-4 bg-[#fef3c7]/50 rounded-xl">
                <p className="font-medium text-[#78350f] mb-1">保护系统</p>
                <p className="text-[#78350f]/50 text-xs">防御与妥协</p>
              </div>
              <div className="p-4 bg-[#fef3c7]/50 rounded-xl">
                <p className="font-medium text-[#78350f] mb-1">定向系统</p>
                <p className="text-[#78350f]/50 text-xs">自我意向 · 内化客体</p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-[#78350f]/50 mb-6">
            心神是核心，供能、保护、定向三大系统共同构建孩子丰富、平整、不内耗的内在世界。
          </p>

          <h3 className="text-center font-semibold text-[#78350f] mb-4">
            十大心神能力阶梯
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {abilities.map((ability, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-xs bg-white text-[#78350f] rounded-full border border-[#f59e0b]/10 hover:border-[#f59e0b]/30 transition-colors"
              >
                {ability}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 彼此滋养区 */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#78350f] mb-2">
              彼此滋养
            </h2>
            <p className="text-[#78350f]/60">看见 · 理解 · 支持</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {nourishLevels.map((item, i) => (
              <div key={i} className="card p-8 text-center hover:shadow-lg">
                <div className="w-14 h-14 rounded-full bg-[#fef3c7] flex items-center justify-center mx-auto mb-5">
                  <span className="text-2xl text-[#f59e0b]">
                    {i === 0 && "◉"}
                    {i === 1 && "◯"}
                    {i === 2 && "◈"}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#78350f] mb-2">
                  {item.level}
                </h3>
                <p className="text-[#f59e0b] text-sm font-medium mb-3">
                  {item.core}
                </p>
                <p className="text-sm text-[#78350f]/60 italic">
                  "{item.expression}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 工具区 */}
      <section className="py-16 sm:py-24 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#78350f] mb-2">
              落地工具
            </h2>
            <p className="text-[#78350f]/60">让理论进入日常</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="card p-8 hover:shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#fef3c7] to-[#f59e0b]/20 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#78350f] mb-2">
                望杏成林
              </h3>
              <p className="text-[#f59e0b] text-sm mb-4">日常陪伴与滋养工具</p>
              <p className="text-sm text-[#78350f]/60 mb-6 leading-relaxed">
                亲子互动记录、情绪命名、习惯养成、成长瞬间捕捉。服务于六大内在结构的日常滋养。
              </p>
              <Link
                href="/tools"
                className="text-[#f59e0b] hover:text-[#d97706] transition-colors text-sm font-medium flex items-center gap-1 group"
              >
                进入望杏成林
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            <div className="card p-8 hover:shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#fef3c7] to-[#f59e0b]/20 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#78350f] mb-2">
                荔枝测评
              </h3>
              <p className="text-[#f59e0b] text-sm mb-4">阶段性评估工具</p>
              <p className="text-sm text-[#78350f]/60 mb-6 leading-relaxed">
                评估十大心神能力发展水平、定位当前发展阶段、获得个性化养育建议。
              </p>
              <Link
                href="/tools"
                className="text-[#f59e0b] hover:text-[#d97706] transition-colors text-sm font-medium flex items-center gap-1 group"
              >
                进入荔枝测评
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 故事区 */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#78350f] mb-4">
              这套方法从何而来？
            </h2>
            <p className="text-[#78350f]/70 leading-relaxed mb-8">
              杨莉老师与朋大大，用十余年时间，在心理学专业学习与真实育儿实践中，共同打磨出这套心灵建造体系。
              他们的孩子，也是这套方法的第一位完整践行者。
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#f59e0b] hover:text-[#d97706] transition-colors font-medium group"
            >
              了解更多关于他们
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
