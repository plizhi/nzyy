"use client";

import { useState } from "react";
import Link from "next/link";
import { trackEntryClick } from "@/lib/tracking";

type Tab = "home" | "intent" | "theory" | "tools" | "about";

const tabs: { id: Tab; label: string }[] = [
  { id: "home", label: "首页" },
  { id: "intent", label: "育儿初心" },
  { id: "theory", label: "内在结构" },
  { id: "tools", label: "落地工具" },
  { id: "about", label: "关于我们" },
];

function HomeTab() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 text-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#78350f] mb-6 leading-snug">
        内在结构养育
      </h1>
      <p className="text-base text-[#78350f]/60 mb-8 leading-relaxed">
        一套以「心神」为核心的专业育儿方法论
      </p>
      <p className="text-sm text-[#78350f]/50 mb-10 leading-relaxed max-w-lg mx-auto">
        从对齐初心，到构建系统，再到落地行动——
        帮助孩子成为一个内在稳固、有力量、能享受生命的人。
      </p>
      <p className="text-sm text-[#78350f]/40 italic mb-10">
        "你对待孩子的方式，就是孩子内心世界的建筑图纸。"
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a href="#intent" className="btn-primary">写下我的育儿初心</a>
        <a href="#theory" className="btn-secondary">了解内在结构</a>
      </div>
    </div>
  );
}

function IntentTab() {
  return (
    <div className="max-w-lg mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-xl font-bold text-[#78350f] mb-2">养育的北极星</h2>
        <p className="text-sm text-[#78350f]/50">育儿初心</p>
      </div>
      <div className="space-y-8">
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
        <a href="/intent" className="text-sm text-[#f59e0b] hover:underline">
          完整体验初心共鸣 →
        </a>
      </div>
    </div>
  );
}

function TheoryTab() {
  return (
    <div className="max-w-lg mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-xl font-bold text-[#78350f] mb-2">心灵宫殿</h2>
        <p className="text-sm text-[#78350f]/50">六大内在结构</p>
      </div>
      <div className="bg-white p-6 rounded-xl border border-[#f59e0b]/10 text-center mb-6">
        <div className="inline-block px-4 py-1.5 bg-[#fef3c7] rounded-full text-sm text-[#78350f] mb-4">
          心神（核心）
        </div>
        <div className="grid grid-cols-3 gap-3 text-xs text-[#78350f]/60">
          <div className="p-2 bg-[#fef3c7]/50 rounded-lg">
            <p className="font-medium text-[#78350f] mb-1">供能</p>准则 · 情绪
          </div>
          <div className="p-2 bg-[#fef3c7]/50 rounded-lg">
            <p className="font-medium text-[#78350f] mb-1">保护</p>防御机制
          </div>
          <div className="p-2 bg-[#fef3c7]/50 rounded-lg">
            <p className="font-medium text-[#78350f] mb-1">定向</p>自我 · 客体
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
        <a href="/theory" className="text-sm text-[#f59e0b] hover:underline">
          查看完整理论 →
        </a>
      </div>
    </div>
  );
}

function ToolsTab() {
  return (
    <div className="max-w-lg mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-xl font-bold text-[#78350f] mb-2">落地工具</h2>
        <p className="text-sm text-[#78350f]/50">让理论进入日常</p>
      </div>
      <div className="space-y-4">
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
        <a href="/tools" className="text-sm text-[#f59e0b] hover:underline">
          查看全部工具 →
        </a>
      </div>
    </div>
  );
}

function AboutTab() {
  return (
    <div className="max-w-lg mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-xl font-bold text-[#78350f] mb-2">关于我们</h2>
      </div>
      <div className="text-center mb-8">
        <p className="text-sm text-[#78350f]/60 leading-relaxed mb-6">
          杨莉老师与朋大大，用十余年时间，在心理学专业学习与真实育儿实践中，共同打磨出这套心灵建造体系。他们的孩子，也是这套方法的第一位完整践行者。
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {["客体关系理论", "依恋理论", "埃里克森阶段论"].map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs bg-[#fef3c7] text-[#78350f] rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-xs text-[#78350f]/50">contact@nzyy.cc</p>
      </div>
      <div className="text-center">
        <a href="/about" className="text-sm text-[#f59e0b] hover:underline">
          了解更多 →
        </a>
      </div>
    </div>
  );
}

function handleTabClick(id: Tab) {
  trackEntryClick(id);
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  return (
    <div className="min-h-screen">
      {/* 固定顶部 Tab 栏 */}
      <header className="fixed top-14 left-0 right-0 z-40 bg-[#FFFBF5]/95 backdrop-blur-sm border-b border-[#f59e0b]/10">
        <nav className="max-w-2xl mx-auto px-4 flex items-center justify-center gap-1 py-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                handleTabClick(tab.id);
              }}
              className={`px-4 py-2 text-sm rounded-full whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? "bg-[#f59e0b] text-white"
                  : "text-[#78350f]/60 hover:text-[#f59e0b] hover:bg-[#fef3c7]/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      {/* 主内容区 */}
      <main className="pt-28">
        {activeTab === "home" && <HomeTab />}
        {activeTab === "intent" && <IntentTab />}
        {activeTab === "theory" && <TheoryTab />}
        {activeTab === "tools" && <ToolsTab />}
        {activeTab === "about" && <AboutTab />}
      </main>
    </div>
  );
}
