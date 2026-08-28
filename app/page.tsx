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
    weight: "最高",
  },
  {
    id: "理论",
    title: "内在结构",
    subtitle: "孩子的内心如何构成？",
    description: "六大结构 · 十大能力",
    href: "/theory",
    weight: "中等",
  },
  {
    id: "工具",
    title: "落地工具",
    subtitle: "现在可以怎么做？",
    description: "望杏成林 · 荔枝测评",
    href: "/tools",
    weight: "中等",
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
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#78350f] mb-4 leading-tight">
              内在结构养育
            </h1>
            <p className="text-lg sm:text-xl text-[#78350f]/70 mb-6">
              一套以"心神"为核心的专业育儿方法论
            </p>
            <p className="text-base sm:text-lg text-[#78350f]/60 mb-8 leading-relaxed">
              从对齐初心，到构建系统，再到落地行动——
              <br className="hidden sm:block" />
              帮助孩子成为一个内在稳固、有力量、能享受生命的人。
            </p>
            <blockquote className="border-l-4 border-[#f59e0b] pl-4 mb-8 italic text-[#78350f]/70">
              你对待孩子的方式，就是孩子内心世界的建筑图纸。
            </blockquote>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/intent"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#f59e0b] text-white font-medium rounded-lg hover:bg-[#d97706] transition-colors"
              >
                写下我的育儿初心
              </Link>
              <Link
                href="/theory"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#f59e0b] text-[#f59e0b] font-medium rounded-lg hover:bg-[#fef3c7] transition-colors"
              >
                了解内在结构
              </Link>
            </div>
          </div>

          {/* 心灵宫殿示意图 */}
          <div className="hidden lg:flex flex-col items-center">
            <div className="relative w-56 h-56">
              <div className="absolute inset-0 rounded-full border-2 border-[#f59e0b]/20" />
              <div className="absolute inset-3 rounded-full border border-[#f59e0b]/15" />
              <div className="absolute top-3 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#fef3c7] rounded-full text-xs text-[#78350f] font-medium whitespace-nowrap">
                供能系统
              </div>
              <div className="absolute bottom-3 left-3 px-2 py-1 bg-[#fef3c7] rounded-full text-xs text-[#78350f] font-medium">
                保护系统
              </div>
              <div className="absolute bottom-3 right-3 px-2 py-1 bg-[#fef3c7] rounded-full text-xs text-[#78350f] font-medium">
                定向系统
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-[#f59e0b] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-xs font-medium">心神</span>
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs text-[#78350f]/30 text-center">
              心灵宫殿示意图
            </p>
          </div>
        </div>
      </section>

      {/* 三入口导航 */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-4">
          {entries.map((entry) => (
            <Link
              key={entry.id}
              href={entry.href}
              onClick={() => handleEntryClick(entry.id)}
              className="group p-6 bg-white rounded-xl border border-[#f59e0b]/10 hover:border-[#f59e0b]/30 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold text-[#78350f] mb-1 group-hover:text-[#f59e0b]">
                {entry.title}
              </h3>
              <p className="text-sm text-[#78350f]/50 mb-2">
                {entry.subtitle}
              </p>
              <p className="text-sm text-[#78350f]/70">{entry.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 理念区 */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-xl sm:text-2xl font-bold text-[#78350f] mb-2">
          什么是内在结构养育？
        </h2>
        <p className="text-[#78350f]/70 leading-relaxed mb-8 max-w-3xl">
          内在结构养育，是一套以"心神"为核心，以"成全孩子"和"构建彼此滋养的亲子关系"为双翼，通过系统培育孩子内在六大心理结构及十大心神能力，帮助孩子成为一个内在稳固、有力量、能享受生命的人的心灵建造体系。
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {genes.map((gene, i) => (
            <div
              key={i}
              className="p-5 bg-[#fef3c7]/50 rounded-lg border border-[#f59e0b]/10"
            >
              <h4 className="font-medium text-[#78350f] mb-2">{gene.title}</h4>
              <p className="text-sm text-[#78350f]/60">{gene.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 初心区预览 */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#78350f]">
            养育的北极星——育儿初心
          </h2>
          <Link
            href="/intent"
            className="text-sm text-[#f59e0b] hover:underline whitespace-nowrap"
          >
            写下你的育儿初心 →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-medium text-[#f59e0b] mb-3">
              成全孩子的五个层次
            </h3>
            <ul className="space-y-2">
              {[
                "永葆对世界的热情与好奇",
                "识风险，知进退",
                "面对困难时唤起内心的勇气与力量",
                "不辜负与生俱来的天赋与资源",
                "享受其中",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#78350f]/70">
                  <span className="text-[#f59e0b] font-medium">{i + 1}.</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[#f59e0b] mb-3">
              彼此滋养：看见 · 理解 · 支持
            </h3>
            <ul className="space-y-2 text-sm text-[#78350f]/70">
              {["彼此看见", "彼此理解", "彼此支持"].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 理论区预览 */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#78350f]">
            心灵宫殿——六大内在结构
          </h2>
          <Link
            href="/theory"
            className="text-sm text-[#f59e0b] hover:underline whitespace-nowrap"
          >
            查看完整理论 →
          </Link>
        </div>
        <div className="bg-white rounded-xl border border-[#f59e0b]/10 p-6 mb-6">
          <div className="text-center mb-6">
            <div className="inline-block px-4 py-2 bg-[#fef3c7] rounded-full text-sm font-medium text-[#78350f]">
              心神（核心）
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div className="p-3 bg-[#f59e0b]/5 rounded-lg">
              <p className="font-medium text-[#78350f] mb-1">供能系统</p>
              <p className="text-[#78350f]/60">准则价值与意义</p>
              <p className="text-[#78350f]/60">情绪冲动与愿望</p>
            </div>
            <div className="p-3 bg-[#f59e0b]/5 rounded-lg">
              <p className="font-medium text-[#78350f] mb-1">保护系统</p>
              <p className="text-[#78350f]/60">防御与妥协机制</p>
            </div>
            <div className="p-3 bg-[#f59e0b]/5 rounded-lg">
              <p className="font-medium text-[#78350f] mb-1">定向系统</p>
              <p className="text-[#78350f]/60">自我意向</p>
              <p className="text-[#78350f]/60">内化客体</p>
            </div>
          </div>
        </div>
        <p className="text-sm text-[#78350f]/60 mb-4 text-center">
          心神是核心，供能、保护、定向三大系统共同构建孩子丰富、平整、不内耗的内在世界。
        </p>
        <h3 className="text-base font-medium text-[#78350f] mb-4 text-center">
          十大心神能力阶梯
        </h3>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {abilities.map((ability, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs bg-[#fef3c7] text-[#78350f] rounded-full"
            >
              {ability}
            </span>
          ))}
        </div>
      </section>

      {/* 彼此滋养区 */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-xl sm:text-2xl font-bold text-[#78350f] mb-6 text-center">
          彼此滋养：看见 · 理解 · 支持
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {nourishLevels.map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl border border-[#f59e0b]/10"
            >
              <h3 className="text-lg font-semibold text-[#78350f] mb-2">
                {item.level}
              </h3>
              <p className="text-sm text-[#f59e0b] mb-3">{item.core}</p>
              <p className="text-sm text-[#78350f]/60 italic">
                "{item.expression}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 工具区 */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-xl sm:text-2xl font-bold text-[#78350f] mb-6 text-center">
          落地工具——让理论进入日常
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <div className="p-6 bg-white rounded-xl border border-[#f59e0b]/10">
            <h3 className="text-lg font-semibold text-[#78350f] mb-2">
              望杏成林
            </h3>
            <p className="text-sm text-[#78350f]/60 mb-4">
              日常陪伴与滋养：亲子互动记录、情绪命名、习惯养成、成长瞬间捕捉。
            </p>
            <Link
              href="/tools"
              className="inline-flex items-center text-sm text-[#f59e0b] hover:underline"
            >
              进入望杏成林
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          <div className="p-6 bg-white rounded-xl border border-[#f59e0b]/10">
            <h3 className="text-lg font-semibold text-[#78350f] mb-2">
              荔枝测评
            </h3>
            <p className="text-sm text-[#78350f]/60 mb-4">
              阶段性评估：十大心神能力发展水平、养育建议。
            </p>
            <Link
              href="/tools"
              className="inline-flex items-center text-sm text-[#f59e0b] hover:underline"
            >
              进入荔枝测评
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 故事区 */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-xl sm:text-2xl font-bold text-[#78350f] mb-4 text-center">
          这套方法从何而来？
        </h2>
        <p className="text-[#78350f]/70 text-center max-w-2xl mx-auto mb-6">
          杨莉老师与朋大大，用十余年时间，在心理学专业学习与真实育儿实践中，共同打磨出这套心灵建造体系。他们的孩子，也是这套方法的第一位完整践行者。
        </p>
        <div className="text-center">
          <Link
            href="/about"
            className="inline-flex items-center text-[#f59e0b] hover:underline"
          >
            了解更多
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
