"use client";

import Link from "next/link";

const tiers = [
  {
    tag: "入门 · 看清真相",
    title: "学业结构·年度监测权益",
    price: "199 元",
    unit: "/年",
    value: "看见",
    valueDesc: `给家长配一副"透视眼镜"，看穿成绩背后的真相。`,
    problems: ["成绩波动，不知是态度还是能力问题。", "想管不敢管，怕帮倒忙。"],
    benefits: ["10-12次结构体检（覆盖全年关键节点）", "三方视角拼图与动态趋势报告", "自动化行动指南（每次2-3条建议）"],
    highlight: false,
    dark: false,
  },
  {
    tag: "进阶 · 找准卡点",
    title: "结构卡点·单次深度咨询",
    price: "1,999 元",
    unit: "/次",
    value: "确诊",
    valueDesc: `帮您拨开迷雾，找到问题的那个"线头"。`,
    problems: ["看懂报告但不知具体怎么做。", "突发状况急需专业干预稳住局面。"],
    benefits: ["90分钟深度视频访谈（挖掘因果）", "个性化干预方案（2-4周具体行动）", "工具植入与2周内随访支持"],
    highlight: false,
    dark: false,
  },
  {
    tag: "核心 · 系统重构",
    title: "内在结构·年度陪跑计划",
    price: "9,999 元",
    unit: "/年",
    value: "重建",
    valueDesc: `我是您家庭教育的"年度合伙人"，陪您打赢这场持久战。`,
    problems: ["问题顽固，单次咨询解决不了根本。", "家长缺乏定力，需要长期的定海神针。"],
    benefits: ["全年12次深度复盘与季度荔学卷解读", "望杏成林深度批注（像给日记写处方）", "日常陪伴核心群（防止小问题拖大）"],
    highlight: true,
    dark: false,
  },
  {
    tag: "深度 · 生态构建",
    title: "家族成长·定制陪跑服务",
    price: "39,999 元",
    unit: "/年",
    value: "系统",
    valueDesc: `从"修孩子"升级到"修全家"，构建家庭支持系统。`,
    problems: ["夫妻教育理念冲突，甚至影响婚姻。", "多子女资源分配不均，手足竞争激烈。", "家庭内部沟通阻塞，氛围压抑。"],
    benefits: ["家庭全员咨询，统一战线", "季度家庭会议引导与资源精准匹配", "紧急情况危机响应优先通道"],
    highlight: false,
    dark: false,
  },
  {
    tag: "高阶 · 父母升维",
    title: "教育家养成·私董会服务",
    price: "99,999 元",
    unit: "/年",
    value: "升维",
    valueDesc: `把您培养成自己家庭的"教育专家"，进入高认知圈层。`,
    problems: ["家长有极高认知追求，想探究教育本质。", "需链接同频高知家庭，进行智慧碰撞。"],
    benefits: ["全年4次私董会闭门会议（集体会诊）", "家长认知升级课与全球教育视野分享", "终身社群校友圈人脉资源"],
    highlight: false,
    dark: false,
  },
  {
    tag: "顶配 · 家族传承",
    title: "家族基业·终身合伙人",
    price: "199,999 元",
    unit: "/年",
    value: "传承",
    valueDesc: `做家族精神的"守护者"，为家族多代际的幸福托底。`,
    problems: ["关注家族传承，担忧孩子无法承接家业。", "需处理极度复杂、隐秘的重大危机或决策。"],
    benefits: ["家族宪法/家书顾问，梳理精神资产", "多代际规划与全案危机管理兜底", "一年2次线下深度入驻，贴身观察"],
    highlight: false,
    dark: true,
  },
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
        .vip-tier { background: #FDF6EE; border: 1px solid #E8B59A; }
        .ultimate-tier { background: #3E2C2C; color: #FFFCF7; border: 1px solid #543D3D; box-shadow: 0 12px 40px rgba(62, 44, 44, 0.2); }
        .ultimate-tier:hover { border-color: #C76D4A; box-shadow: 0 16px 50px rgba(62, 44, 44, 0.3); }
        .ultimate-tier ul li { color: #F3ECE3 !important; }
        @keyframes vitalityGlow {
          0%, 100% { box-shadow: 0 0 40px rgba(199, 109, 74, 0.15); border-color: #E8B59A; }
          50% { box-shadow: 0 0 80px rgba(199, 109, 74, 0.3); border-color: #C76D4A; }
        }
        .vitality-box { animation: vitalityGlow 4s ease-in-out infinite; }
        @media (max-width: 768px) {
          .concept-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px 60px" }}>

        {/* 页头 */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ color: "#C76D4A", fontSize: "1rem", letterSpacing: "0.3em", marginBottom: 16 }}>阶梯式成长支持体系</div>
          <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#3E2C2C", marginBottom: 16 }}>内在结构养育</h1>
          <div style={{ width: 60, height: 2, background: "#C76D4A", margin: "24px auto" }}></div>
          <p style={{ fontSize: "1.1rem", color: "#806E66", maxWidth: 620, margin: "0 auto" }}>
            成绩只是冰山一角。我们通过理顺孩子底层的"六大内在结构"，让心神真正立起来，从根源解决成长焦虑。
          </p>
        </div>

        {/* 核心理念科普区块 */}
        <div className="vitality-box" style={{ background: "#FFFCF7", border: "2px solid #E8B59A", borderRadius: 24, padding: "48px 40px", marginBottom: 80 }}>
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
              <div style={{ fontSize: "0.95rem", color: "#3E2C2C", marginBottom: 16 }}>供能，保护、定向三大系统</div>
              <div style={{ height: 2, background: "#C76D4A", width: "60%", margin: "0 auto 16px" }}></div>
              <div style={{ fontSize: "0.85rem", color: "#C76D4A", fontWeight: 600 }}>托举心神，自然结出十大能力</div>
            </div>
          </div>
          <p style={{ textAlign: "center", marginTop: 32, color: "#3E2C2C", fontSize: "1rem" }}>
            结构理顺了，能力自然就发展了。我们为您提供从"看见"到"传承"的全程陪伴。
          </p>
        </div>

        {/* 阶梯式成长方案 */}
        {tiers.map((tier, index) => (
          <div key={tier.price}>
            <div
              className={`tier-card ${tier.highlight ? "core-tier" : tier.dark ? "ultimate-tier" : index >= 3 ? "vip-tier" : ""}`}
              style={{ marginBottom: 20 }}
            >
              {tier.highlight && (
                <div style={{ position: "absolute", top: 24, right: 24, background: "#C76D4A", color: "#fff", padding: "4px 12px", borderRadius: 20, fontSize: "0.75rem", fontWeight: 600 }}>最受欢迎</div>
              )}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
                <div>
                  <div style={{ fontSize: "0.8rem", color: tier.dark ? "#E8B59A" : "#806E66", marginBottom: 8, letterSpacing: "0.1em" }}>{tier.tag}</div>
                  <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.6rem", color: tier.dark ? "#FFFCF7" : "#3E2C2C" }}>{tier.title}</h3>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.8rem", fontWeight: 700, color: "#C76D4A" }}>{tier.price}</div>
                  <div style={{ fontSize: "0.8rem", color: "#806E66" }}>{tier.unit}</div>
                </div>
              </div>

              <div style={{ background: "rgba(199, 109, 74, 0.08)", padding: "16px 24px", borderRadius: 12, marginBottom: 24, borderLeft: "4px solid #C76D4A" }}>
                <div style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 600, color: "#C76D4A", marginBottom: 4 }}>核心价值："{tier.value}"</div>
                <div style={{ fontSize: "0.95rem", color: tier.dark ? "#FFFCF7" : "#3E2C2C" }}>{tier.valueDesc}</div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 24 }}>
                <div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 600, color: tier.dark ? "#E8B59A" : "#3E2C2C", marginBottom: 12 }}>解决什么问题</div>
                  <ul style={{ listStyle: "none", padding: 0 }}>
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
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {tier.benefits.map((b) => (
                      <li key={b} style={{ fontSize: "0.9rem", color: tier.dark ? "#F3ECE3" : "#806E66", marginBottom: 8, paddingLeft: 16, position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, color: "#C76D4A" }}>•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {index < tiers.length - 1 && (
              <div style={{ textAlign: "center", fontSize: "1.5rem", color: "#C76D4A", margin: "20px 0" }}>▼</div>
            )}
          </div>
        ))}

        {/* 真诚寄语区块 */}
        <div style={{ textAlign: "center", background: "linear-gradient(135deg, #FFFCF7 0%, #FDF6EE 100%)", borderRadius: 24, padding: "60px 40px", border: "1px solid #EAE0D5", marginBottom: 60 }}>
          <div style={{ fontSize: "2rem", color: "#C76D4A", marginBottom: 16 }}>❝</div>
          <p style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.3rem", color: "#3E2C2C", marginBottom: 24, lineHeight: 2 }}>
            先看清楚路，再决定怎么走。<br />
            教育不应是一场充满焦虑的盲盒游戏。<br />
            把"瞎操心"变成"看得准"，<br />
            我们陪您一起，把孩子的地基打牢。
          </p>
          <div style={{ width: 40, height: 2, background: "#C76D4A", margin: "0 auto 24px" }}></div>
          <div style={{ fontSize: "0.9rem", color: "#806E66", fontStyle: "italic" }}>—— 让养育回归理性，这就是真诚的力量</div>
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
