import Link from "next/link";

const structures = [
  {
    id: "心神",
    role: "核心",
    system: "—",
    description: `心神是统合一切的"主体感"，是觉知、专注、思考、抉择的中心。它不是某种具体的心理功能，而是那个让所有功能得以有序运转的"君王"。一个心神正、心神稳固的人，内在世界井然有序；一个心神涣散的人，即使拥有再多知识和技能，也如无源之水、无本之木，经不起风浪。内在结构养育最核心的任务，就是稳心神、固心神、让心神发光。`,
  },
  {
    id: "准则、价值与意义",
    role: "指引系统",
    system: "供能系统",
    description: `这是"什么是对""什么重要""我为何而活"的集合体。它为心神的决策提供依据，为生命提供超越当下快感的持久动力。一个拥有稳定价值准则的人，在人生岔路口不会迷失；而缺乏这一结构的人，可能在诱惑和压力面前随波逐流，或陷入"一切都没意义"的空虚。`,
  },
  {
    id: "情绪、冲动与愿望",
    role: "动力系统",
    system: "供能系统",
    description: `这是生命的原生态能量——喜怒哀乐惧，以及饥渴、依恋、探索、攻击等本能冲动与心理愿望。这些能量是行动最原始的燃料。没有它们，生命就是一潭死水；但若没有心神的统合与其他系统的调节，这些能量可能变得肆虐伤人，或堵塞伤人于己。`,
  },
  {
    id: "防御与妥协机制",
    role: "保护与平衡系统",
    system: "保护系统",
    description: `这是处理内在冲突的心理策略——在强烈愿望与外界限制之间、在相互矛盾的情感之间寻找平衡。成熟的防御机制（如幽默、升华）能帮我们在逆境中保持尊严和希望；而僵化或幼稚的防御（如否认、投射）虽能暂时缓解痛苦，却可能扭曲现实，阻碍成长。这一系统就像心灵的免疫系统，其成熟度很大程度上决定了心理韧性的上限。`,
  },
  {
    id: "自我意向",
    role: "反馈系统",
    system: "定向系统",
    description: `这是"我是怎样一个人"的整体看法、感受和评价。它包括自我价值感（我好吗？值得被爱吗？）、自我能力感（我行吗？有能力应对吗？）等。这幅"自画像"极大地影响着一个人的情绪底色和行为动机。内化了"我基本是好的、有能力的"自我意向的人，面对挑战更容易唤起勇气；反之，则容易陷入自我怀疑、自我攻击的内耗。`,
  },
  {
    id: "内化客体",
    role: "社会系统",
    system: "定向系统",
    description: `这是早期重要他人（父母等）与我们互动的方式，在内心深处留下的烙印。它形成了我们日后与他人、甚至与自己相处的基本模式。比如，一个内化了"总能回应我的安抚性客体"的人，内心就拥有了安全依恋的基石；而内化了"忽冷忽热或充满指责的客体"的人，可能在关系中总是惴惴不安，或不断重复某种痛苦的模式。`,
  },
];

const abilities = [
  {
    name: "安全感",
    period: "0-6个月",
    experience: "我存在，且被安稳接住。",
    insufficient: "易焦虑、黏人，对分离极度不安，难以信任他人和世界。",
    point: "及时回应，不吝拥抱，允许孩子完全依赖。",
  },
  {
    name: "营养足",
    period: "3个月-会走",
    experience: "我内外都富足。",
    insufficient: `易产生匮乏感，表现为贪婪、嫉妒或持续的情感饥渴，总觉得"不够"。`,
    point: `用积极的情感"喂饱"孩子，让他感受分享喜悦，不急于要求"独立"。`,
  },
  {
    name: "主体感",
    period: "会走-上幼儿园前",
    experience: "我能影响这个世界。",
    insufficient: `过度依赖、退缩，或走向另一个极端——用破坏和攻击来疯狂证明"我存在"。`,
    point: "提供安全的探索空间，允许试错，及时肯定孩子的努力与效果。",
  },
  {
    name: "现实感",
    period: "会走-学前",
    experience: "世界是这样运行的。",
    insufficient: "沉溺幻想世界，难以遵守基本规则，总要求现实符合自己的想象，遇到不符就大发脾气。",
    point: "温和而坚定地呈现现实与边界，不粉饰，不退让，用爱陪伴孩子接受真相后的情绪。",
  },
  {
    name: "主动",
    period: "幼儿园阶段",
    experience: "我想试试，我敢开始。",
    insufficient: "被动、拖延、总等着别人安排，害怕犯错而不敢行动，对新事物缺乏热情。",
    point: `保护好奇，鼓励尝试，对结果持开放态度，让"开始"本身被欣赏。`,
  },
  {
    name: "真实客体之爱",
    period: "幼儿园阶段",
    experience: "我能爱一个真实的人。",
    insufficient: `人际关系非黑即白，要么把对方理想化，要么一旦失望就彻底贬低、抛弃，难以维系深刻而真实的关系。`,
    point: `父母敢于呈现真实但不伤害的自己，敢于道歉，帮助孩子整合对他人的"好"与"坏"的感受。`,
  },
  {
    name: "生产勤勉",
    period: "小学低年级",
    experience: "我能完成，我因投入而满足。",
    insufficient: `做事半途而废、心不在焉，在团队中习惯"搭便车"，对任务缺乏责任感。`,
    point: `提供适龄的任务，帮助孩子体验"投入→完成"的完整过程，欣赏作品本身而非只夸"聪明"。`,
  },
  {
    name: "胜任力感",
    period: "小学高年级",
    experience: "我擅长这件事，我的能力被认可。",
    insufficient: `陷入"我不行"的自卑，回避一切竞争和挑战，或发展出防御性的"我不屑于努力"的态度。`,
    point: `帮助孩子找到他真正擅长的领域，让他在至少一个地方体验到"我很棒"的真实成就感。`,
  },
  {
    name: "心理韧性",
    period: "初中阶段",
    experience: "过程虽苦，但我能掌管并相信努力。",
    insufficient: "急功近利，遇挫即溃，产生习得性无助——认定努力无用，彻底放弃尝试。",
    point: `陪伴孩子做长远规划，分解步骤，重视并复盘"努力的过程"，让"过程值得"成为内在信念。`,
  },
  {
    name: "三观",
    period: "高中阶段",
    experience: "我是谁，我相信什么，我为何而活。",
    insufficient: `感到空虚、迷茫、随波逐流，或陷入存在主义焦虑——"一切都没意义，努力做什么？"。`,
    point: `与孩子进行有深度的对话，尊重他的思考与困惑，分享自己的价值选择及其背后的故事，允许他探索和建构属于自己的意义体系。`,
  },
];

export default function TheoryPage() {
  return (
    <div className="min-h-screen">
      {/* 六大内在结构 */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#78350f] mb-3">
              心灵宫殿
            </h1>
            <p className="text-[#78350f]/60">六大内在结构</p>
          </div>

          {/* 结构总览图 */}
          <div className="card p-6 sm:p-8 mb-10">
            <div className="text-center mb-6">
              <div className="inline-block px-5 py-2 bg-[#fef3c7] rounded-full">
                <span className="text-sm font-semibold text-[#78350f]">心神</span>
                <span className="text-xs text-[#78350f]/50 ml-2">核心</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center text-sm">
              <div className="p-4 bg-[#fef3c7]/50 rounded-xl">
                <p className="font-medium text-[#78350f] mb-1">供能系统</p>
                <p className="text-[#78350f]/50">准则价值与意义</p>
                <p className="text-[#78350f]/50">情绪冲动与愿望</p>
              </div>
              <div className="p-4 bg-[#fef3c7]/50 rounded-xl">
                <p className="font-medium text-[#78350f] mb-1">保护系统</p>
                <p className="text-[#78350f]/50">防御与妥协机制</p>
              </div>
              <div className="p-4 bg-[#fef3c7]/50 rounded-xl">
                <p className="font-medium text-[#78350f] mb-1">定向系统</p>
                <p className="text-[#78350f]/50">自我意向</p>
                <p className="text-[#78350f]/50">内化客体</p>
              </div>
            </div>
          </div>

          {/* 各结构详解 */}
          <div className="space-y-4">
            {structures.map((s) => (
              <details className="card group" key={s.id}>
                <summary className="flex items-center justify-between cursor-pointer list-none p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#fef3c7] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#f59e0b] text-sm">◈</span>
                    </div>
                    <div>
                      <h2 className="font-semibold text-[#78350f]">
                        {s.id}
                      </h2>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-2 py-0.5 bg-[#fef3c7] text-[#78350f] rounded-full">
                          {s.role}
                        </span>
                        {s.system !== "—" && (
                          <span className="text-xs text-[#78350f]/40">{s.system}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-[#78350f]/30 group-open:rotate-180 transition-transform flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 border-t border-[#f59e0b]/5">
                  <p className="text-sm text-[#78350f]/70 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 十大心神能力 */}
      <section className="py-16 sm:py-24 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#78350f] mb-3">
              十大心神能力
            </h2>
            <p className="text-[#78350f]/60">心神在不同阶段逐步发展的心理功能</p>
          </div>

          {/* 能力详情 */}
          <div className="space-y-3">
            {abilities.map((a, i) => (
              <details className="card group" key={a.name}>
                <summary className="flex items-center justify-between cursor-pointer list-none p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#fef3c7] flex items-center justify-center flex-shrink-0 text-[#f59e0b] text-sm font-medium">
                      {i + 1}
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-[#78350f]">{a.name}</h3>
                      <p className="text-xs text-[#78350f]/40">{a.period}</p>
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-[#78350f]/30 group-open:rotate-180 transition-transform flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-[#f59e0b]/5 space-y-4">
                  <div>
                    <p className="text-xs font-medium text-[#f59e0b] mb-1">核心体验</p>
                    <p className="text-sm text-[#78350f] italic">"{a.experience}"</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#78350f]/60 mb-1">不足表现</p>
                    <p className="text-sm text-[#78350f]/70">{a.insufficient}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#78350f]/60 mb-1">养育要点</p>
                    <p className="text-sm text-[#78350f]/70">{a.point}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 结构与能力的关系 */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#78350f] mb-2">
              结构与能力的关系
            </h2>
            <p className="text-[#78350f]/60">在发展中互相塑造</p>
          </div>

          <div className="card p-8 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <div className="px-5 py-3 bg-[#fef3c7] rounded-xl text-sm text-[#78350f] font-medium">
                六大结构
              </div>
              <div className="flex items-center gap-2 text-[#78350f]/40">
                <div className="w-8 h-px bg-[#f59e0b]/30" />
                <span>⟷</span>
                <div className="w-8 h-px bg-[#f59e0b]/30" />
              </div>
              <div className="px-5 py-3 bg-[#fef3c7] rounded-xl text-sm text-[#78350f] font-medium">
                发展过程
              </div>
              <div className="flex items-center gap-2 text-[#78350f]/40">
                <div className="w-8 h-px bg-[#f59e0b]/30" />
                <span>⟷</span>
                <div className="w-8 h-px bg-[#f59e0b]/30" />
              </div>
              <div className="px-5 py-3 bg-[#fef3c7] rounded-xl text-sm text-[#78350f] font-medium">
                十大能力
              </div>
            </div>
            <p className="text-sm text-[#78350f]/60 italic leading-relaxed">
              结构在养育中慢慢成形，能力在成长中自然发展。
              <br />
              它们互相参与，但不一一绑定。
            </p>
          </div>
        </div>
      </section>

      {/* 底部导航 */}
      <section className="py-8 border-t border-[#f59e0b]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <Link href="/intent" className="text-[#f59e0b] hover:text-[#d97706] transition-colors text-sm font-medium flex items-center gap-1 group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            育儿初心
          </Link>
          <Link href="/" className="text-[#78350f]/40 hover:text-[#78350f]/60 transition-colors text-sm">
            返回首页
          </Link>
          <Link href="/tools" className="text-[#f59e0b] hover:text-[#d97706] transition-colors text-sm font-medium flex items-center gap-1 group">
            落地工具
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
