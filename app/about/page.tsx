"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FBF7F1" }}>
      {/* 顶部导航 */}
      <header style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(251, 247, 241, 0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid #EAE0D5" }}>
        <nav style={{ maxWidth: 1000, margin: "0 auto", padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 600, fontSize: "1.2rem", color: "#3E2C2C", textDecoration: "none", letterSpacing: "0.1em" }}>内在结构养育</Link>
          <Link href="/tools" style={{ color: "#806E66", textDecoration: "none", fontSize: "0.95rem" }}>落地工具</Link>
        </nav>
      </header>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "80px 32px" }}>

        {/* 标题 */}
        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 600, color: "#3E2C2C", textAlign: "center", marginBottom: 16 }}>关于内在结构养育</h1>
        <p style={{ fontSize: "1.05rem", color: "#806E66", textAlign: "center", marginBottom: 64 }}>理论与实践的完整育儿体系</p>

        {/* 清华目送 - 开篇情感锚点 */}
        <section style={{ marginBottom: 64 }}>
          <p style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.3rem", color: "#3E2C2C", lineHeight: 1.8, marginBottom: 24, textAlign: "center" }}>
            "女儿去清华报到的那天，天色明朗，阳光正好。"
          </p>
          <p style={{ fontSize: "1rem", color: "#806E66", lineHeight: 1.8 }}>
            看着一张张朝气蓬勃的脸庞，他们心底满是由衷的欢喜与动容。恍惚间，想起多年前同样一个阳光明媚的午后，藏着逆袭成长的全部伏笔。
          </p>
        </section>

        {/* 故事 */}
        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.5rem", color: "#3E2C2C", marginBottom: 24 }}>创始故事</h2>

          <div style={{ background: "#fff", borderRadius: 20, padding: "40px 32px", boxShadow: "0 4px 24px rgba(62, 44, 44, 0.04)" }}>
            <p style={{ fontSize: "1rem", color: "#3E2C2C", lineHeight: 2, marginBottom: 20 }}>
              朋大大与爱人用十余年时间，在心理学专业学习与真实育儿实践中，共同打磨出这套心灵建造体系。他们的女儿，是这套方法的第一位完整践行者——2023年，以裸分考入清华大学。
            </p>
            <p style={{ fontSize: "1rem", color: "#3E2C2C", lineHeight: 2, marginBottom: 20 }}>
              但真正让他们骄傲的，从来不是「考上清华」这个结果，而是女儿在清华园里依然保持的向上生长、自我迭代、终身成长的姿态。
            </p>
            <p style={{ fontSize: "1rem", color: "#806E66", lineHeight: 2 }}>
              深耕家庭教育多年，身边很多家长都喊他「朋大大」。他愿陪更多家长读懂孩子、科学育儿，守护每一个少年的专属光芒。
            </p>
          </div>

          <Link
            href="/story"
            style={{ display: "inline-block", marginTop: 24, color: "#C76D4A", fontSize: "0.95rem", textDecoration: "none" }}
          >
            阅读完整故事 →
          </Link>
        </section>

        {/* 理论体系 */}
        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.5rem", color: "#3E2C2C", marginBottom: 24 }}>理论体系</h2>

          <div style={{ background: "#fff", borderRadius: 20, padding: "40px 32px", boxShadow: "0 4px 24px rgba(62, 44, 44, 0.04)" }}>
            <p style={{ fontSize: "1rem", color: "#3E2C2C", lineHeight: 2, marginBottom: 24 }}>
              内在结构养育是一套育儿理论框架，核心理念是：
            </p>
            <p style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.2rem", color: "#C76D4A", lineHeight: 1.8, textAlign: "center", marginBottom: 24 }}>
              用结构思维理解孩子，用发展眼光看见成长
            </p>
            <p style={{ fontSize: "1rem", color: "#806E66", lineHeight: 2 }}>
              它以「心神」为核心，帮助家长理解孩子内在世界的构成（六大内在结构），看见孩子在不同阶段的发展任务（十大心神能力），从而在问题严重之前就被看见、被理解、被科学正向引导。
            </p>
          </div>

          <Link
            href="/theory"
            style={{ display: "inline-block", marginTop: 24, color: "#C76D4A", fontSize: "0.95rem", textDecoration: "none" }}
          >
            了解理论框架 →
          </Link>
        </section>

        {/* 产品矩阵 */}
        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.5rem", color: "#3E2C2C", marginBottom: 24 }}>产品矩阵</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {[
              { name: "望杏成林", category: "记录", desc: "日常陪伴与滋养", status: "可用", color: "#C76D4A" },
              { name: "荔学卷", category: "评测", desc: "学习力测评", status: "可用", color: "#C76D4A" },
              { name: "荔心卷", category: "评测", desc: "心神能力测评", status: "预约", color: "#806E66" },
              { name: "荔升卷", category: "评测", desc: "升学潜力指数", status: "预约", color: "#806E66" },
            ].map((item) => (
              <div
                key={item.name}
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: "24px 20px",
                  boxShadow: "0 4px 16px rgba(62, 44, 44, 0.04)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ fontSize: "0.75rem", color: "#806E66", background: "rgba(128, 110, 102, 0.1)", padding: "4px 10px", borderRadius: 12 }}>{item.category}</span>
                  <span style={{ fontSize: "0.75rem", color: item.color }}>{item.status}</span>
                </div>
                <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.1rem", color: "#3E2C2C", marginBottom: 4 }}>{item.name}</h3>
                <p style={{ fontSize: "0.85rem", color: "#806E66" }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <Link
            href="/tools"
            style={{ display: "inline-block", marginTop: 24, color: "#C76D4A", fontSize: "0.95rem", textDecoration: "none" }}
          >
            查看全部工具 →
          </Link>
        </section>

        {/* 理论渊源 */}
        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.5rem", color: "#3E2C2C", marginBottom: 24 }}>理论渊源</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {[
              "客体关系理论",
              "依恋理论",
              "埃里克森心理社会发展阶段",
              "弗洛姆的爱之要素",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "10px 20px",
                  background: "#FEF3C7",
                  color: "#78350F",
                  borderRadius: 9999,
                  fontSize: "0.9rem",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* 联系 */}
        <section id="contact" style={{ marginBottom: 64 }}>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.5rem", color: "#3E2C2C", marginBottom: 24 }}>联系我们</h2>
          <div style={{ background: "#fff", borderRadius: 20, padding: "40px 32px", boxShadow: "0 4px 24px rgba(62, 44, 44, 0.04)", textAlign: "center" }}>
            <p style={{ fontSize: "1rem", color: "#806E66", marginBottom: 16 }}>
              如有合作意向或疑问，欢迎联系我们
            </p>
            <p style={{ fontSize: "1rem", color: "#3E2C2C", fontFamily: "'Noto Serif SC', serif" }}>
              contact@nzyy.cc
            </p>
          </div>
        </section>

        {/* 底部导航 */}
        <div style={{ textAlign: "center", paddingTop: 48, borderTop: "1px solid #EAE0D5" }}>
          <Link
            href="/"
            style={{ color: "#806E66", textDecoration: "none", fontSize: "0.95rem" }}
          >
            ← 返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}
