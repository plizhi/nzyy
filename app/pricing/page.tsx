"use client";

import Link from "next/link";

const tiers = [
  {
    level: 1,
    tag: "入门 · 看清真相",
    title: "学业结构·年度监测权益",
    price: "199 元",
    unit: "/年",
    value: "看见",
    valueDesc: "给家长配一副「透视眼镜」，看穿成绩背后的真相。",
    problems: ["成绩波动，不知是态度还是能力问题。", "想管不敢管，怕帮倒忙。"],
    benefits: ["10-12次结构体检（覆盖全年关键节点）", "三方视角拼图与动态趋势报告", "自动化行动指南（每次2-3条建议）"],
    suitable: "想先看清孩子结构信号、不急着深度咨询的家长。",
    notSuitable: "需要立即解决突发冲突或复杂问题的家庭。",
    highlight: false,
    dark: false,
    audit: false,
  },
  {
    level: 2,
    tag: "进阶 · 找准卡点",
    title: "结构卡点·单次深度咨询",
    price: "1,999 元",
    unit: "/次",
    value: "定位",
    valueDesc: "帮您拨开迷雾，找到问题的那个「线头」。",
    problems: ["看懂报告但不知具体怎么做。", "突发状况急需专业支持稳住局面。"],
    benefits: ["90分钟深度视频访谈（挖掘因果）", "个性化支持方案（2-4周具体行动）", "工具植入与2周内随访支持"],
    suitable: "已有明确卡点，需要一次高质量对话定位方向。",
    notSuitable: "期望一次咨询解决长期顽固问题。",
    highlight: false,
    dark: false,
    audit: false,
  },
  {
    level: 3,
    tag: "核心 · 重建",
    title: "内在结构·阶段陪跑计划",
    price: "9,999 元",
    unit: "/期",
    subtitle: "2-3个月 · 6-8次深度服务 · 每期限额4个家庭",
    value: "重建",
    valueDesc: "我是您家庭教育的「阶段合伙人」，陪您打赢这一阶段的硬仗。",
    problems: ["问题顽固，单次咨询解决不了根本。", "家长缺乏定力，需要阶段性的稳定支持。"],
    benefits: ["2-3个月内6-8次深度咨询与复盘", "个性化系统支持方案，按阶段动态调整", "望杏成林深度批注（逐条回应日常观察记录）", "阶段陪伴核心群", "阶段结束提供复盘报告与下一步建议"],
    suitable: "问题反复、需要阶段陪伴和系统调整的家庭。",
    notSuitable: "只想要一次性答案、不愿持续配合行动的家庭。",
    highlight: true,
    dark: false,
    audit: false,
  },
  {
    level: 4,
    tag: "深度 · 系统",
    title: "家庭成长·年度陪跑",
    price: "39,999 元",
    unit: "/年",
    subtitle: "预约审核制 · 年度限额2个家庭",
    value: "系统",
    valueDesc: "从「支持孩子」升级到「构建家庭系统」。",
    problems: ["夫妻教育理念不一致，需要统一战线", "多子女家庭，资源与关注需要重新平衡", "家庭沟通阻塞，氛围长期紧绷"],
    benefits: ["全年家庭系统咨询，全员参与、统一方向", "季度家庭会议引导，协助家庭内部达成共识", "优先进入常态化支持通道"],
    suitable: "愿意全家参与、需要系统调整的高配合家庭。",
    notSuitable: "只希望单方面「搞定孩子」、家长不愿参与的家庭。",
    boundary: "本服务需要家庭主要成员的配合意愿，单方面改变无法替代全家参与。",
    highlight: false,
    dark: true,
    audit: true,
  },
  {
    level: 5,
    tag: "高阶 · 升维",
    title: "教育格局·私董会",
    price: "99,999 元",
    unit: "/年",
    subtitle: "预约审核制 · 首期开放6-8席",
    value: "升维",
    valueDesc: "与同频家庭同行，从「解决自己家的问题」到「看懂教育的全貌」。",
    problems: ["对教育有体系化思考的诉求，想探究底层逻辑", "希望与认知同频的家庭进行深度交流碰撞"],
    benefits: ["全年4次闭门研讨（小规模、高质量）", "家长认知升级课程与前沿教育视野分享", "同频家庭社群参与资格"],
    suitable: "高认知、高投入、追求教育本质的家长。",
    notSuitable: "希望直接替孩子提分或替代学校教育的家庭。",
    boundary: "私董会价值依赖成员质量，实行审核准入。",
    highlight: false,
    dark: true,
    audit: true,
  },
  {
    level: 6,
    tag: "顶配 · 传承",
    title: "家族成长·长期顾问",
    price: "199,999 元",
    unit: "/年",
    subtitle: "预约审核制",
    value: "传承",
    valueDesc: "为家族的下一代教育与多代际成长，提供长期顾问支持。",
    problems: ["关注家族下一代的教育路径与精神传承", "面临复杂家庭情境，需要长期、稳定的专业陪伴"],
    benefits: ["家族教育叙事与家书梳理顾问", "多代际教育决策顾问支持与资源转介", "一年2次线下深度入驻，贴身观察"],
    suitable: "有家族传承需求、需要长期多代际教育顾问支持的家庭。",
    notSuitable: "期望顾问替代法律、医疗、税务等专业意见的家庭。",
    boundary: "本服务为教育顾问服务，不构成法律、税务或医疗服务；涉及相关领域时，我们将协助对接对应专业机构。",
    highlight: false,
    dark: true,
    audit: true,
  },
];

const suggestions = [
  { from: "199元/年", to: "1,999元/次", desc: "已有明确卡点" },
  { from: "1,999元/次", to: "9,999元/期", desc: "需要系统重建" },
  { from: "9,999元/期", to: "39,999元/年", desc: "家庭系统问题" },
];

export default function PricingPage() {
  return (
    <div style={{
      fontFamily: "'Noto Sans SC', sans-serif",
      backgroundColor: "#FBF7F1",
      color: "#3E2C2C",
      lineHeight: 1.8,
      minHeight: "100vh",
    }}>
      <style>{`
        .tier-card { transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); border-radius: 20px; padding: 40px; border: 1px solid #EAE0D5; background: #FFFCF7; box-shadow: 0 4px 20px rgba(62, 44, 44, 0.03); }
        .tier-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(62, 44, 44, 0.08); border-color: #E8B59A; }
        .core-tier { border: 2px solid #C76D4A; background: linear-gradient(135deg, #FFFCF7 0%, #FFF8F1 100%); }
        .vip-tier { background: #3E2C2C; border: 1px solid #543D3D; box-shadow: 0 12px 40px rgba(62, 44, 44, 0.2); }
        .vip-tier:hover { border-color: #C76D4A; }
        .vip-tier ul li { color: #F3ECE3 !important; }
        .vip-tier .tag-text { color: #E8B59A !important; }
        .vip-tier .title-text { color: #FFFCF7 !important; }
        .vip-tier .desc-text { color: #F3ECE3 !important; }
        .vip-tier .suitable-text { color: #E8B59A !important; }
        @media (max-width: 768px) {
          .tier-benefits-grid { grid-template-columns: 1fr !important; }
          .concept-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px 60px" }}>

        {/* 页头 */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ color: "#C76D4A", fontSize: "1rem", letterSpacing: "0.3em", marginBottom: 16 }}>阶梯式成长支持体系</div>
          <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#3E2C2C", marginBottom: 16 }}>内在结构养育</h1>
          <div style={{ width: 60, height: 2, background: "#C76D4A", margin: "24px auto" }}></div>
          <p style={{ fontSize: "1.1rem", color: "#806E66", maxWidth: 620, margin: "0 auto", lineHeight: 1.9 }}>
            成绩只是冰山一角。<br />
            我们通过理顺孩子底层的「六大内在结构」，让心神真正立起来，从根源缓解成长焦虑。
          </p>
        </div>

        {/* 一句话模型 */}
        <div style={{ background: "#FFFCF7", border: "1px solid #EAE0D5", borderRadius: 20, padding: "32px 28px", marginBottom: 48, textAlign: "center" }}>
          <p style={{ fontSize: "1.05rem", color: "#3E2C2C", marginBottom: 12, fontWeight: 500 }}>一句话模型</p>
          <p style={{ fontSize: "1.1rem", color: "#806E66", lineHeight: 2 }}>
            供能、保护、定向三大系统 → 托举心神 → 理顺六大内在结构 → 自然发展十大能力
          </p>
        </div>

        {/* 为什么只抓成绩没用 */}
        <div style={{ background: "#FFFCF7", border: "2px solid #E8B59A", borderRadius: 24, padding: "48px 40px", marginBottom: 80 }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.8rem", color: "#3E2C2C" }}>为什么只抓成绩没用？</h2>
          </div>
          <div className="concept-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "center" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.2rem", color: "#806E66", marginBottom: 8 }}>表象问题</div>
              <div style={{ fontSize: "0.95rem", color: "#806E66", marginBottom: 16 }}>成绩波动、厌学、叛逆、拖沓</div>
              <div style={{ height: 2, background: "#EAE0D5", width: "60%", margin: "0 auto 16px" }}></div>
              <div style={{ fontSize: "0.85rem", color: "#B85C38", fontStyle: "italic" }}>按起葫芦浮起瓢，永远管不完</div>
            </div>
            <div style={{ textAlign: "center", background: "rgba(199, 109, 74, 0.05)", padding: 24, borderRadius: 16 }}>
              <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.2rem", color: "#C76D4A", marginBottom: 8 }}>内在结构</div>
              <div style={{ fontSize: "0.95rem", color: "#3E2C2C", marginBottom: 16 }}>供能、保护、定向三大系统</div>
              <div style={{ height: 2, background: "#C76D4A", width: "60%", margin: "0 auto 16px" }}></div>
              <div style={{ fontSize: "0.85rem", color: "#C76D4A", fontWeight: 600 }}>托举心神，自然结出十大能力</div>
            </div>
          </div>
          <p style={{ textAlign: "center", marginTop: 32, color: "#3E2C2C", fontSize: "1rem" }}>
            结构理顺了，能力自然就发展了。<br />
            我们为您提供从「看见」到「传承」的全程陪伴。
          </p>
        </div>

        {/* 阶梯说明 */}
        <div style={{ textAlign: "center", marginBottom: 48, padding: "0 20px" }}>
          <p style={{ fontSize: "1rem", color: "#806E66", lineHeight: 2 }}>
            从看清一个孩子，到托起一整个家族<br />
            六级阶梯，对应家庭成长的不同阶段<br />
            您可以从任意一级进入，我们也会根据您的实际情况，建议最适合的起点
          </p>
        </div>

        {/* 六级阶梯 */}
        {tiers.map((tier, index) => (
          <div key={tier.price} style={{ marginBottom: 16 }}>
            <div className={`tier-card ${tier.highlight ? "core-tier" : tier.dark ? "vip-tier" : ""}`}>
              {/* 标签和最受欢迎标识 */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <span className="tag-text" style={{ fontSize: "0.8rem", color: tier.dark ? "#E8B59A" : "#806E66", letterSpacing: "0.1em" }}>
                  第{tier.level}级 · {tier.tag}
                </span>
                {tier.highlight && (
                  <span style={{ background: "#C76D4A", color: "#fff", padding: "4px 12px", borderRadius: 20, fontSize: "0.75rem", fontWeight: 600 }}>最受欢迎</span>
                )}
              </div>

              {/* 标题和价格 */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20, flexWrap: "wrap", gap: 16 }}>
                <div>
                  <h3 className="title-text" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.6rem", color: "#3E2C2C", marginBottom: 4 }}>{tier.title}</h3>
                  {tier.subtitle && (
                    <span style={{ fontSize: "0.8rem", color: tier.dark ? "#E8B59A" : "#C76D4A" }}>{tier.subtitle}</span>
                  )}
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.8rem", fontWeight: 700, color: "#C76D4A" }}>{tier.price}</div>
                  <div style={{ fontSize: "0.8rem", color: "#806E66" }}>{tier.unit}</div>
                </div>
              </div>

              {/* 核心价值 */}
              <div style={{ background: "rgba(199, 109, 74, 0.08)", padding: "16px 24px", borderRadius: 12, marginBottom: 24, borderLeft: "4px solid #C76D4A" }}>
                <div style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 600, color: "#C76D4A", marginBottom: 4 }}>核心价值：「{tier.value}」</div>
                <div className="desc-text" style={{ fontSize: "0.95rem", color: tier.dark ? "#F3ECE3" : "#3E2C2C" }}>{tier.valueDesc}</div>
              </div>

              {/* 问题和收益 */}
              <div className="tier-benefits-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 24 }}>
                <div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 600, color: tier.dark ? "#E8B59A" : "#3E2C2C", marginBottom: 12 }}>解决什么问题</div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {tier.problems.map((p) => (
                      <li key={p} style={{ fontSize: "0.9rem", color: tier.dark ? "#F3ECE3" : "#806E66", marginBottom: 8, paddingLeft: 16, position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, color: "#C76D4A" }}>•</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 600, color: tier.dark ? "#E8B59A" : "#3E2C2C", marginBottom: 12 }}>您将获得</div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {tier.benefits.map((b) => (
                      <li key={b} style={{ fontSize: "0.9rem", color: tier.dark ? "#F3ECE3" : "#806E66", marginBottom: 8, paddingLeft: 16, position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, color: "#C76D4A" }}>•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 适合/不适合 */}
              <div style={{ marginBottom: tier.boundary ? 16 : 0 }}>
                <div style={{ fontSize: "0.85rem", color: "#806E66", marginBottom: 8 }}>
                  <span style={{ fontWeight: 600, color: tier.dark ? "#E8B59A" : "#3E2C2C" }}>适合：</span>{tier.suitable}
                </div>
                <div style={{ fontSize: "0.85rem", color: "#806E66" }}>
                  <span style={{ fontWeight: 600, color: tier.dark ? "#E8B59A" : "#3E2C2C" }}>不适合：</span>{tier.notSuitable}
                </div>
              </div>

              {/* 边界说明 */}
              {tier.boundary && (
                <div style={{ fontSize: "0.8rem", color: "#806E66", padding: "12px 16px", background: "rgba(199,109,74,0.06)", borderRadius: 8, marginBottom: 20, fontStyle: "italic" }}>
                  {tier.boundary}
                </div>
              )}

              {/* 操作按钮 */}
              {tier.audit ? (
                <div style={{ paddingTop: 16, borderTop: `1px solid ${tier.dark ? "#543D3D" : "#EAE0D5"}` }}>
                  <button style={{ padding: "14px 32px", background: "transparent", color: "#C76D4A", border: "2px solid #C76D4A", borderRadius: 9999, fontSize: "0.95rem", cursor: "pointer", fontWeight: 500 }}>
                    预约审核面谈
                  </button>
                </div>
              ) : (
                <div style={{ paddingTop: 16, borderTop: "1px solid #EAE0D5" }}>
                  <button style={{ padding: "14px 32px", background: "#C76D4A", color: "#fff", border: "none", borderRadius: 9999, fontSize: "0.95rem", cursor: "pointer", fontWeight: 500 }}>
                    了解更多
                  </button>
                </div>
              )}
            </div>

            {index < tiers.length - 1 && (
              <div style={{ textAlign: "center", fontSize: "1.5rem", color: "#C76D4A", margin: "20px 0" }}>▼</div>
            )}
          </div>
        ))}

        {/* 建议路径 */}
        <div style={{ background: "#FFFCF7", border: "1px solid #EAE0D5", borderRadius: 20, padding: "36px 32px", margin: "60px 0" }}>
          <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.3rem", color: "#3E2C2C", marginBottom: 24, textAlign: "center" }}>建议路径</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {suggestions.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, fontSize: "0.95rem" }}>
                <span style={{ color: "#806E66" }}>{s.from}</span>
                <span style={{ color: "#C76D4A" }}>→</span>
                <span style={{ color: "#806E66" }}>{s.to}</span>
                <span style={{ color: "#3E2C2C" }}>（{s.desc}）</span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 20, fontSize: "0.9rem", color: "#806E66", textAlign: "center" }}>
            从任意一级进入，我们都会根据您的实际情况，建议最适合的起点
          </p>
        </div>

        {/* 真诚寄语 */}
        <div style={{ textAlign: "center", background: "linear-gradient(135deg, #FFFCF7 0%, #FDF6EE 100%)", borderRadius: 24, padding: "60px 40px", border: "1px solid #EAE0D5", marginBottom: 60 }}>
          <div style={{ fontSize: "2rem", color: "#C76D4A", marginBottom: 16 }}>❝</div>
          <p style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.3rem", color: "#3E2C2C", marginBottom: 24, lineHeight: 2 }}>
            先看清楚路，再决定怎么走。<br />
            教育不应是一场充满焦虑的盲盒游戏。<br />
            把「瞎操心」变成「看得准」，<br />
            我们陪您一起，把孩子的地基打牢。
          </p>
          <div style={{ width: 40, height: 2, background: "#C76D4A", margin: "0 auto 24px" }}></div>
          <div style={{ fontSize: "0.9rem", color: "#806E66", fontStyle: "italic" }}>—— 让养育回归理性，这就是真诚的力量</div>
        </div>

        {/* 合规声明 */}
        <div style={{ background: "#F9F6F2", borderRadius: 16, padding: "24px 28px", marginBottom: 60, fontSize: "0.85rem", color: "#806E66", lineHeight: 2 }}>
          <p style={{ marginBottom: 8, fontWeight: 500, color: "#3E2C2C" }}>合规声明</p>
          <p>本服务为教育咨询与家庭支持服务，不构成医疗诊断、心理治疗或法律意见。</p>
          <p>创始人孩子考入清华大学为个人家庭经历，不构成对任何家庭的结果承诺。</p>
          <p>本服务不保证升学、考试或录取结果。</p>
          <p>五、六级服务实行审核准入制，是否接纳以双方审核面谈结果为准。</p>
          <p>所有权益、周期、价格以正式协议为准。</p>
          <p>如遇儿童心理健康紧急状况，请及时寻求专业医疗机构帮助，或拨打120/110及专业危机热线。</p>
        </div>

        {/* 底部导航 */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 40, borderTop: "1px solid #EAE0D5" }}>
          <Link href="/intro" style={{ textDecoration: "none", color: "#806E66", fontFamily: "'Noto Serif SC', serif", fontSize: "1.1rem" }}>← 内在结构养育</Link>
          <Link href="/" style={{ textDecoration: "none", color: "#3E2C2C", fontFamily: "'Noto Serif SC', serif", fontSize: "1rem" }}>返回首页</Link>
          <Link href="/story" style={{ textDecoration: "none", color: "#806E66", fontFamily: "'Noto Serif SC', serif", fontSize: "1.1rem" }}>创始人故事 →</Link>
        </div>
      </div>
    </div>
  );
}
