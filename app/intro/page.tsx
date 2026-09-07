"use client";

export default function IntroPage() {
  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      {/* 顶部导航 */}
      <nav className="sticky top-0 z-50 bg-[#FFFBF5]/95 backdrop-blur-sm border-b border-[rgba(245,158,11,0.06)]">
        <div className="max-w-2xl mx-auto px-8 h-16 flex items-center justify-between">
          <span className="text-base font-medium text-[#78350f]">内在结构养育</span>
          <a href="#contact" className="text-sm text-[#78350f]/30 hover:text-[#f59e0b] transition-colors">
            联系我们
          </a>
        </div>
      </nav>

      {/* 首屏 */}
      <header className="px-8 py-28 sm:py-36 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-[#78350f] leading-tight tracking-tight mb-8">
            内在结构养育
          </h1>
          <p className="text-xl sm:text-2xl text-[#78350f]/50 leading-relaxed mb-6">
            一套动静兼顾的心灵建造体系
          </p>
          <p className="text-base text-[#78350f]/40 leading-relaxed max-w-md mx-auto mb-12">
            用结构思维理解孩子，用发展眼光看见成长
          </p>
          <div className="inline-block">
            <p className="text-lg text-[#f59e0b] font-normal leading-relaxed px-8 py-4 rounded-full bg-[#fef3c7]/60">
              你对待孩子的方式，就是孩子内心世界的建筑图纸
            </p>
          </div>
        </div>
      </header>

      {/* 分隔线 */}
      <div className="max-w-4xl mx-auto px-8">
        <div className="border-t border-[rgba(245,158,11,0.08]" />
      </div>

      {/* 它是什么 */}
      <section className="px-8 py-24 sm:py-32 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm text-[#78350f]/40 tracking-widest uppercase mb-6">
              01 · 它是什么
            </h2>
          </div>

          <div className="text-center max-w-lg mx-auto">
            <p className="text-xl text-[#78350f]/70 leading-loose mb-10">
              内在结构养育是一套育儿理论框架。
            </p>
            <p className="text-base text-[#78350f]/55 leading-relaxed">
              它的核心是：用<strong className="text-[#78350f]">结构思维</strong>理解孩子，用<strong className="text-[#78350f]">发展眼光</strong>看见成长。
            </p>
          </div>
        </div>
      </section>

      {/* 分隔线 */}
      <div className="max-w-4xl mx-auto px-8">
        <div className="border-t border-[rgba(245,158,11,0.08]" />
      </div>

      {/* 为什么需要它 */}
      <section className="px-8 py-24 sm:py-32">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm text-[#78350f]/40 tracking-widest uppercase mb-6">
              02 · 为什么需要它
            </h2>
          </div>

          <div className="px-10 py-10 rounded-3xl bg-[#fef3c7]/30 text-center max-w-lg mx-auto">
            <p className="text-base text-[#78350f]/70 leading-loose mb-8">
              孩子出了问题——成绩下滑、沉迷手机、叛逆——家长的第一反应往往是"怎么解决"。
            </p>
            <p className="text-base text-[#78350f]/70 leading-loose mb-8">
              但这些问题，只是外在的"症状"。<strong className="text-[#78350f]">真正的根源，在孩子的内在世界。</strong>
            </p>
            <p className="text-base text-[#78350f]/70 leading-loose">
              内在结构养育说：父母最该做的，不是天天灭火，而是<strong className="text-[#78350f]">学会看见孩子内在正在发生什么</strong>。
            </p>
          </div>
        </div>
      </section>

      {/* 分隔线 */}
      <div className="max-w-4xl mx-auto px-8">
        <div className="border-t border-[rgba(245,158,11,0.08]" />
      </div>

      {/* 核心框架 */}
      <section className="px-8 py-24 sm:py-32 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm text-[#78350f]/40 tracking-widest uppercase mb-6">
              03 · 核心框架
            </h2>
            <p className="text-sm text-[#78350f]/40 leading-relaxed">
              动静兼顾的理论基石
            </p>
          </div>

          {/* 六大内在结构 */}
          <div className="mb-20">
            <h3 className="text-base font-medium text-[#78350f] text-center mb-3">
              六大内在结构（静态）
            </h3>
            <p className="text-sm text-[#78350f]/40 text-center mb-10">
              孩子内在世界的构成
            </p>

            <div className="flex flex-col items-center mb-10">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center mb-8 shadow-lg shadow-[#f59e0b]/20">
                <div className="text-center">
                  <p className="text-white text-sm font-medium">心神</p>
                  <p className="text-white/70 text-xs mt-1">核心</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
                {[
                  { label: "供能系统", items: ["准则价值", "情绪冲动"] },
                  { label: "保护系统", items: ["防御与妥协", "机制"] },
                  { label: "定向系统", items: ["自我意向", "内化客体"] },
                ].map((sys, i) => (
                  <div key={i} className="text-center px-3 py-4 rounded-2xl bg-[#FFFBF5] border border-[rgba(245,158,11,0.1)]">
                    <p className="text-xs text-[#f59e0b] font-medium tracking-wide mb-2">{sys.label}</p>
                    {sys.items.map((item, j) => (
                      <p key={j} className="text-sm text-[#78350f]/60">{item}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 max-w-lg mx-auto">
              {[
                { name: "心神", desc: "统合一切的主体感，觉知、专注、思考、抉择的中心" },
                { name: "准则价值与意义", desc: "内在的宪法与指南针，为心神的决策提供依据" },
                { name: "情绪冲动与愿望", desc: "内在的能量与潮汐，生命最原始的动力来源" },
                { name: "防御与妥协机制", desc: "内在的免疫与调节系统，处理内在冲突" },
                { name: "自我意向", desc: "内在的自画像，对『我是怎样一个人』的整体评价" },
                { name: "内化客体", desc: "内在的关系模板，重要他人互动方式在内心的烙印" },
              ].map((item, i) => (
                <div key={i} className="px-5 py-4 rounded-2xl bg-[#FFFBF5]/80 border border-[rgba(245,158,11,0.06)]">
                  <p className="text-sm font-medium text-[#f59e0b] inline mr-3">{item.name}</p>
                  <p className="text-sm text-[#78350f]/50 inline">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 十大心神能力 */}
          <div>
            <h3 className="text-base font-medium text-[#78350f] text-center mb-3">
              十大心神能力（动态）
            </h3>
            <p className="text-sm text-[#78350f]/40 text-center mb-10">
              孩子在不同阶段的发展任务
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
              {[
                { stage: "0-6个月", ability: "安全感", exp: "我存在，且被安稳接住" },
                { stage: "3个月-会走", ability: "营养足", exp: "我内外都富足" },
                { stage: "会走-上幼儿园前", ability: "主体感", exp: "我能影响这个世界" },
                { stage: "会走-学前", ability: "现实感", exp: "世界是这样运行的" },
                { stage: "幼儿园阶段", ability: "主动", exp: "我想试试，我敢开始" },
                { stage: "幼儿园阶段", ability: "真实客体之爱", exp: "我能爱一个真实的人" },
                { stage: "小学低年级", ability: "生产勤勉", exp: "我能完成，我因投入而满足" },
                { stage: "小学高年级", ability: "胜任力感", exp: "我擅长这件事" },
                { stage: "初中阶段", ability: "心理韧性", exp: "过程虽苦，但我能掌管并相信努力" },
                { stage: "高中阶段", ability: "三观", exp: "我是谁，我相信什么，我为何而活" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 px-5 py-4 rounded-2xl bg-[#FFFBF5]/80 border border-[rgba(245,158,11,0.06)]">
                  <span className="text-xs text-[#78350f]/30 w-24 flex-shrink-0 pt-0.5">{item.stage}</span>
                  <span className="w-2 h-2 rounded-full bg-[#f59e0b] flex-shrink-0 mt-1.5" />
                  <div>
                    <p className="text-sm font-medium text-[#78350f]">{item.ability}</p>
                    <p className="text-xs text-[#78350f]/45 mt-1">{item.exp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-[#78350f]/40 italic">
              六大结构回答"孩子内在是怎么构成的"，十大能力回答"孩子现在在长什么"
            </p>
          </div>
        </div>
      </section>

      {/* 分隔线 */}
      <div className="max-w-4xl mx-auto px-8">
        <div className="border-t border-[rgba(245,158,11,0.08]" />
      </div>

      {/* 育儿初心 */}
      <section className="px-8 py-24 sm:py-32">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm text-[#78350f]/40 tracking-widest uppercase mb-6">
              04 · 育儿初心
            </h2>
            <p className="text-sm text-[#78350f]/40 leading-relaxed">
              养育的目标是什么
            </p>
          </div>

          {/* 成全孩子 */}
          <div className="mb-16 max-w-lg mx-auto">
            <h3 className="text-base font-medium text-[#78350f] text-center mb-8">
              成全孩子 — 让他长成他自己
            </h3>

            <div className="space-y-4">
              {[
                { title: "永葆热情与好奇", desc: "保护孩子眼里探索的光" },
                { title: "识风险，知进退", desc: "长出保护自己的智慧" },
                { title: "唤醒勇气与力量", desc: "困难是唤醒勇气的契机" },
                { title: "不辜负天赋", desc: "绽放自己的光彩" },
                { title: "享受其中", desc: "从过程本身获得快乐" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5 px-6 py-5 rounded-2xl bg-[#FFFBF5]/80 border border-[rgba(245,158,11,0.06)]">
                  <span className="text-sm text-[#f59e0b] font-medium mt-0.5 w-5">{i + 1}</span>
                  <div>
                    <p className="text-base font-medium text-[#78350f]">{item.title}</p>
                    <p className="text-sm text-[#78350f]/45 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 彼此滋养 */}
          <div className="max-w-lg mx-auto">
            <h3 className="text-base font-medium text-[#78350f] text-center mb-8">
              彼此滋养 — 两个独立的人，彼此成就
            </h3>

            <div className="space-y-4">
              {[
                { title: "彼此连接", desc: "知道对方时刻存在，随时可以建立有效的连接" },
                { title: "彼此看见", desc: "我懂你这个人，你还没说，我已经懂了" },
                { title: "彼此理解", desc: "我接受你行为背后的逻辑，你的方式，我接受" },
                { title: "彼此支持", desc: "我愿意为你加持，无论你做什么选择" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5 px-6 py-5 rounded-2xl bg-[#fef3c7]/30">
                  <span className="text-[#f59e0b] mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-base font-medium text-[#78350f]">{item.title}</p>
                    <p className="text-sm text-[#78350f]/55 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 分隔线 */}
      <div className="max-w-4xl mx-auto px-8">
        <div className="border-t border-[rgba(245,158,11,0.08]" />
      </div>

      {/* 创始人故事 */}
      <section className="px-8 py-24 sm:py-32 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm text-[#78350f]/40 tracking-widest uppercase mb-6">
              05 · 创始人故事
            </h2>
          </div>

          <div className="px-10 py-12 rounded-3xl bg-[#fef3c7]/30 text-center max-w-lg mx-auto">
            <p className="text-base text-[#78350f]/70 leading-loose mb-8">
              朋大大与杨莉老师，用十余年时间，在心理学专业学习与真实育儿实践中，共同打磨出这套心灵建造体系。他们的女儿，是这套方法的第一位完整践行者——2023年，以裸分考入清华大学。
            </p>
            <p className="text-base text-[#78350f]/70 leading-loose mb-10">
              但真正让他们骄傲的，从来不是「考上清华」这个结果，而是女儿在清华园里依然保持的向上生长、自我迭代、终身成长的姿态。
            </p>
            <div className="inline-block">
              <p className="text-sm text-[#f59e0b] italic px-6 py-3 bg-[#fef3c7]/50 rounded-full">
                「每个孩子天生自带内在力量，从不缺少成长的能力，只是缺少被看见、被理解、被科学正向引导」
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 分隔线 */}
      <div className="max-w-4xl mx-auto px-8">
        <div className="border-t border-[rgba(245,158,11,0.08]" />
      </div>

      {/* 落地工具 */}
      <section className="px-8 py-24 sm:py-32">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm text-[#78350f]/40 tracking-widest uppercase mb-6">
              落地工具
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
            <div className="px-8 py-8 rounded-2xl bg-white border border-[rgba(245,158,11,0.12)] text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#fef3c7]/60 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-medium text-[#78350f] mb-2">望杏成林</h3>
              <p className="text-sm text-[#f59e0b] mb-4">日常陪伴与滋养</p>
              <p className="text-sm text-[#78350f]/40 leading-relaxed">
                亲子互动记录 · 情绪命名<br/>习惯养成 · 成长瞬间捕捉
              </p>
            </div>

            <div className="px-8 py-8 rounded-2xl bg-white border border-[rgba(245,158,11,0.12)] text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#fef3c7]/60 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-medium text-[#78350f] mb-2">荔枝测评</h3>
              <p className="text-sm text-[#f59e0b] mb-4">阶段性评估</p>
              <p className="text-sm text-[#78350f]/40 leading-relaxed">
                十大心神能力发展水平<br/>定位阶段 · 养育建议
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 底部金句 */}
      <section className="px-8 py-28 sm:py-36 bg-gradient-to-b from-[#f59e0b] to-[#d97706] text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-white/95 text-2xl sm:text-3xl leading-relaxed font-light tracking-wide mb-8">
            你对待孩子的方式<br/>就是孩子内心世界的建筑图纸
          </p>
          <p className="text-white/60 text-base leading-relaxed">
            用结构思维理解孩子，用发展眼光看见成长<br/>从理解开始，真正成全
          </p>
        </div>
      </section>

      {/* 注册 + 分享 */}
      <section className="px-8 py-16 bg-[#FFFBF5]">
        <div className="max-w-md mx-auto flex flex-col gap-3">
          <button
            style={{ display: "block", padding: "16px 32px", backgroundColor: "#f59e0b", color: "#fff", fontWeight: 500, borderRadius: 9999, textAlign: "center", border: "none", cursor: "pointer" }}
          >
            注册 / 登录
          </button>
          <button
            style={{ display: "block", padding: "16px 32px", border: "1px solid rgba(245,158,11,0.3)", color: "rgba(120,53,15,0.7)", fontWeight: 500, borderRadius: 9999, textAlign: "center", background: "transparent", cursor: "pointer" }}
          >
            生成分享海报
          </button>
        </div>
      </section>

      {/* 页脚 */}
      <footer id="contact" className="px-8 py-20 text-center bg-[#FFFBF5]">
        <div className="max-w-2xl mx-auto">
          <p className="text-base text-[#78350f]/25 mb-2">内在结构养育</p>
          <p className="text-sm text-[#78350f]/15">理论与实践的完整育儿体系</p>
        </div>
      </footer>
    </div>
  );
}
