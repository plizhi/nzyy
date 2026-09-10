"use client";

import Link from "next/link";

const abilities = [
  { name: "安全感", period: "0-6个月", desc: "生命最初的依恋与信任基础。" },
  { name: "营养足", period: "3个月-会走", desc: "生理与心理双重满足的奠基期。" },
  { name: "主体感", period: "会走-幼儿园前", desc: "自主行动与自我边界的觉醒。" },
  { name: "现实感", period: "会走-学前", desc: "对客观世界规则的理解与接纳。" },
  { name: "主动", period: "幼儿园阶段", desc: "探索欲与目标行为的主动发起。" },
  { name: "真实客体之爱", period: "幼儿园阶段", desc: "建立真实且独立的人际情感连接。" },
  { name: "生产勤勉", period: "小学低年级", desc: "投入劳动与完成任务的专注力建立。" },
  { name: "胜任力感", period: "小学高年级", desc: "对自己能力的确认与自信的稳固。" },
  { name: "心理韧性", period: "初中阶段", desc: "面对挫折与压力的弹性恢复能力。" },
];

export default function TheoryPage() {
  return (
    <div style={{
      fontFamily: "'Noto Sans SC', sans-serif",
      backgroundColor: "#FBF7F1",
      color: "#3E2C2C",
      lineHeight: 1.8,
      minHeight: "100vh",
    }}>
      <style>{`
        @keyframes vitalityGlow {
          0%, 100% { box-shadow: 0 0 40px rgba(199, 109, 74, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.8); border-color: #C76D4A; }
          50% { box-shadow: 0 0 80px rgba(199, 109, 74, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.8); border-color: #E8B59A; }
        }
        @keyframes finalGlow {
          0%, 100% { box-shadow: 0 8px 30px rgba(199, 109, 74, 0.15); border-color: #C76D4A; }
          50% { box-shadow: 0 12px 50px rgba(199, 109, 74, 0.3); border-color: #E8B59A; }
        }
        @keyframes pulseDot {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(199, 109, 74, 0.4); }
          50% { transform: scale(1.2); box-shadow: 0 0 0 8px rgba(199, 109, 74, 0); }
        }
        .vitality-core { animation: vitalityGlow 4s ease-in-out infinite; }
        .final-core { animation: finalGlow 4s ease-in-out infinite; background: linear-gradient(135deg, #FFFCF7 0%, #FFF8F1 100%); }
        .pulse-dot { animation: pulseDot 2s infinite; }
        .card { transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); background: #FFFCF7; border-radius: 16px; padding: 32px; border: 1px solid #EAE0D5; box-shadow: 0 4px 20px rgba(62, 44, 44, 0.03); }
        .card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(62, 44, 44, 0.08); border-color: #E8B59A; }
        a:hover { color: #C76D4A !important; }
        @media (max-width: 768px) {
          .system-grid, .system-labels { grid-template-columns: 1fr !important; }
          .issue-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 24px 60px" }}>

        {/* 页头 */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <div style={{ color: "#C76D4A", fontSize: "1rem", letterSpacing: "0.3em", marginBottom: 16 }}>心灵宫殿</div>
          <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#3E2C2C", marginBottom: 16 }}>六大内在结构</h1>
          <div style={{ width: 60, height: 2, background: "#C76D4A", margin: "24px auto" }}></div>
          <p style={{ fontSize: "1.1rem", color: "#806E66", maxWidth: 620, margin: "0 auto" }}>认清结构的相互作用，是为了更好地支持心神发展出昂扬、正直与稳固的生命力。</p>
        </div>

        {/* 心神中枢 */}
        <div style={{ textAlign: "center", marginBottom: 32, position: "relative" }}>
          <div className="vitality-core" style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #FFFFFF 0%, #FFF8F1 100%)",
            borderRadius: 24,
            padding: "56px 80px",
            border: "2px solid #C76D4A",
            position: "relative",
            zIndex: 10,
          }}>
            <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1rem", color: "#C76D4A", letterSpacing: "0.3em", marginBottom: 12 }}>中枢统领</div>
            <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "clamp(2rem, 4vw, 2.6rem)", fontWeight: 700, margin: 0, color: "#3E2C2C" }}>心 神</h2>
            <div style={{ color: "#806E66", marginTop: 12, letterSpacing: "0.1em", fontSize: "0.9rem" }}>昂扬的生命力 · 正直与稳固的基石</div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "33%", marginTop: -2 }}>
            <div style={{ width: 2, height: 40, background: "linear-gradient(to top, #C76D4A, transparent)" }}></div>
            <div style={{ width: 2, height: 40, background: "linear-gradient(to top, #C76D4A, transparent)" }}></div>
            <div style={{ width: 2, height: 40, background: "linear-gradient(to top, #C76D4A, transparent)" }}></div>
          </div>
        </div>

        {/* 系统标签 */}
        <div className="system-labels" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, textAlign: "center", marginBottom: 24 }}>
          {["供能系统", "保护系统", "定向系统"].map((label) => (
            <div key={label} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
              <div style={{ width: 8, height: 8, background: "#C76D4A", transform: "rotate(45deg)" }}></div>
              <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.4rem", fontWeight: 600 }}>{label}</span>
            </div>
          ))}
        </div>

        {/* 系统卡片网格 */}
        <div className="system-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginBottom: 120 }}>
          {/* 供能系统 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { title: "准则、价值与意义", tag: "指引系统", desc: "为心神提供方向感与意义感。" },
              { title: "情绪、冲动与愿望", tag: "动力系统", desc: "为心神探索提供原始能量。" },
            ].map((item) => (
              <div key={item.title} className="card" style={{ padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: "1.2rem", color: "#C76D4A" }}>◈</span>
                  <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.2rem" }}>{item.title}</h3>
                </div>
                <span style={{ fontSize: "0.75rem", padding: "2px 10px", background: "rgba(199, 109, 74, 0.1)", color: "#C76D4A", borderRadius: 20 }}>{item.tag}</span>
                <p style={{ fontSize: "0.9rem", color: "#806E66", marginTop: 12 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* 保护系统 */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="card" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <span style={{ fontSize: "1.2rem", color: "#C76D4A" }}>◈</span>
                <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.2rem" }}>防御与妥协机制</h3>
              </div>
              <span style={{ fontSize: "0.75rem", padding: "2px 10px", background: "rgba(199, 109, 74, 0.1)", color: "#C76D4A", borderRadius: 20 }}>保护与平衡系统</span>
              <p style={{ fontSize: "0.9rem", color: "#806E66", marginTop: 12 }}>面对冲突时提供自我保护与调节。</p>
            </div>
          </div>

          {/* 定向系统 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { title: "自我意向", tag: "反馈系统", desc: "建立自我形象的认知与反馈。" },
              { title: "内化客体", tag: "社会系统", desc: "提供内化他人的社会模板。" },
            ].map((item) => (
              <div key={item.title} className="card" style={{ padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: "1.2rem", color: "#C76D4A" }}>◈</span>
                  <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.2rem" }}>{item.title}</h3>
                </div>
                <span style={{ fontSize: "0.75rem", padding: "2px 10px", background: "rgba(199, 109, 74, 0.1)", color: "#C76D4A", borderRadius: 20 }}>{item.tag}</span>
                <p style={{ fontSize: "0.9rem", color: "#806E66", marginTop: 12 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 分割线 */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, margin: "80px 0" }}>
          <div style={{ flex: 1, height: 1, background: "#EAE0D5" }}></div>
          <div style={{ width: 8, height: 8, background: "#C76D4A", transform: "rotate(45deg)" }}></div>
          <div style={{ flex: 1, height: 1, background: "#EAE0D5" }}></div>
        </div>

        {/* 十大心神能力 - 紧凑型单列时间轴 */}
        <div style={{ marginBottom: 100 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "clamp(1.8rem, 4vw, 2.2rem)", fontWeight: 600, marginBottom: 16 }}>十大心神能力</h2>
            <p style={{ color: "#806E66" }}>心神在结构的托举下，随时间递进发展，前期是后期的基石</p>
          </div>

          <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", padding: "20px 0" }}>
            {/* 贯穿主线 */}
            <div style={{ position: "absolute", left: 20, top: 20, bottom: 20, width: 2, background: "linear-gradient(to bottom, #EAE0D5 0%, #C76D4A 100%)" }}></div>

            {/* 能力1-9 */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {abilities.map((a, i) => (
                <div key={a.name} style={{ display: "flex", alignItems: "center", gap: 24, position: "relative" }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: "50%", background: "#FFFCF7",
                    border: "2px solid #C76D4A", display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: "0.9rem", fontWeight: 600,
                    color: "#C76D4A", zIndex: 2, flexShrink: 0,
                  }}>
                    {i + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.2rem", color: "#3E2C2C", marginRight: 10 }}>{a.name}</span>
                    <span style={{ fontSize: "0.8rem", color: "#C76D4A" }}>{a.period}</span>
                    <p style={{ fontSize: "0.9rem", color: "#806E66", margin: 0 }}>{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 终点：能力10 三观 */}
            <div className="final-core" style={{
              display: "flex", alignItems: "center", gap: 24, position: "relative",
              marginTop: 32, border: "2px solid #C76D4A", borderRadius: 16, padding: 24,
            }}>
              <div style={{
                position: "absolute", top: -12, left: 24, background: "#FBF7F1",
                padding: "0 12px", fontSize: "0.75rem", color: "#C76D4A",
                fontFamily: "'Noto Serif SC', serif", fontWeight: 600, letterSpacing: "0.2em",
              }}>
                最终成长状态
              </div>
              <div style={{
                width: 48, height: 48, borderRadius: "50%", background: "#C76D4A",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.2rem", fontWeight: 700, color: "#fff", zIndex: 2,
                flexShrink: 0, boxShadow: "0 0 0 4px rgba(199, 109, 74, 0.2)",
              }}>
                10
              </div>
              <div>
                <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.4rem", color: "#3E2C2C", marginRight: 10 }}>三观</span>
                <span style={{ fontSize: "0.8rem", color: "#C76D4A" }}>高中阶段</span>
                <p style={{ fontSize: "0.95rem", color: "#806E66", margin: 0 }}>世界观、人生观、价值观的成熟整合。心神最终结出的稳固果实。</p>
              </div>
            </div>
          </div>
        </div>

        {/* 问题识别与干预 */}
        <div style={{ marginBottom: 100 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "clamp(1.8rem, 4vw, 2.2rem)", fontWeight: 600, marginBottom: 16 }}>问题识别与干预</h2>
            <p style={{ color: "#806E66" }}>当孩子出现问题时，需辨别是处于发展波动，还是遭遇了结构阻断</p>
          </div>

          <div className="issue-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>

            {/* 发展性问题 */}
            <div className="card" style={{ padding: 32, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <span style={{ fontSize: "1.5rem", color: "#C76D4A" }}>◐</span>
                <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.4rem", color: "#3E2C2C" }}>发展性问题</h3>
              </div>
              <div style={{ position: "relative", height: 40, marginBottom: 24, display: "flex", alignItems: "center" }}>
                <div style={{ position: "absolute", left: 0, right: 0, height: 4, background: "linear-gradient(to right, #EAE0D5, #C76D4A, #EAE0D5)", borderRadius: 2 }}></div>
                <div className="pulse-dot" style={{ position: "absolute", left: "45%", width: 16, height: 16, background: "#C76D4A", borderRadius: "50%" }}></div>
                {[10, 30, 70, 90].map((pos) => (
                  <div key={pos} style={{ position: "absolute", left: `${pos}%`, width: 8, height: 8, background: "#EAE0D5", borderRadius: "50%" }}></div>
                ))}
              </div>
              <p style={{ fontSize: "0.95rem", color: "#806E66", flex: 1 }}>当前阶段的心神能力正在发展中，尚未完全稳固，出现波动或暂时的倒退。这是成长的正常现象，需要的是陪伴、等待与轻微引导。</p>
              <div style={{ marginTop: 20, paddingTop: 20, borderTop: "1px dashed #EAE0D5" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "#C76D4A" }}>干预策略：</span>
                <span style={{ fontSize: "0.85rem", color: "#806E66" }}>日常陪伴与滋养，静待花开。</span>
              </div>
            </div>

            {/* 结构性问题 */}
            <div className="card" style={{ padding: 32, display: "flex", flexDirection: "column", background: "#FFF9F5", borderColor: "#E8B59A" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <span style={{ fontSize: "1.5rem", color: "#B85C38" }}>◑</span>
                <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.4rem", color: "#3E2C2C" }}>结构性问题</h3>
              </div>
              <div style={{ position: "relative", height: 40, marginBottom: 24, display: "flex", alignItems: "center" }}>
                {/* 前半段正常线 */}
                <div style={{ position: "absolute", left: 0, width: "35%", height: 4, background: "#C76D4A", borderRadius: "2px 0 0 2px" }}></div>
                <div style={{ position: "absolute", left: "10%", width: 8, height: 8, background: "#EAE0D5", borderRadius: "50%" }}></div>
                {/* 断裂处警示 */}
                <div style={{ position: "absolute", left: "35%", width: 20, height: 20, border: "2px dashed #B85C38", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", color: "#B85C38" }}>!</div>
                {/* 后半段变灰虚线 */}
                <div style={{ position: "absolute", left: "calc(35% + 24px)", right: 0, height: 4, background: "repeating-linear-gradient(to right, #E0D5C8 0, #E0D5C8 6px, transparent 6px, transparent 12px)", borderRadius: "0 2px 2px 0" }}></div>
                <div style={{ position: "absolute", right: "10%", width: 8, height: 8, background: "#E0D5C8", borderRadius: "50%" }}></div>
                <div style={{ position: "absolute", right: "30%", width: 8, height: 8, background: "#E0D5C8", borderRadius: "50%" }}></div>
              </div>
              <p style={{ fontSize: "0.95rem", color: "#806E66", flex: 1 }}>某项关键能力长期未能发展，阻断了后续能力的生长路径。此时不仅需要解决表面行为，更需从底层"内在结构"进行系统性修复。</p>
              <div style={{ marginTop: 20, paddingTop: 20, borderTop: "1px dashed #E8B59A" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "#B85C38" }}>干预策略：</span>
                <span style={{ fontSize: "0.85rem", color: "#806E66" }}>测评定位缺口，系统性深度干预。</span>
              </div>
            </div>
          </div>
        </div>

        {/* 理论闭环图解 */}
        <div style={{ background: "linear-gradient(135deg, #FFFCF7 0%, #FDF6EE 100%)", borderRadius: 24, padding: "60px 40px", border: "1px solid #EAE0D5", textAlign: "center", marginBottom: 60 }}>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "clamp(1.6rem, 3vw, 2rem)", fontWeight: 600, marginBottom: 48 }}>结构与能力的共生关系</h2>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, flexWrap: "wrap", marginBottom: 40 }}>
            <div style={{ background: "#FBF7F1", padding: "16px 28px", borderRadius: 12, border: "1px solid #EAE0D5" }}>
              <div style={{ fontSize: "0.8rem", color: "#806E66", marginBottom: 4 }}>认清与理顺</div>
              <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.3rem", fontWeight: 600, color: "#3E2C2C" }}>结构相互作用</div>
            </div>
            <span style={{ fontSize: "1.5rem", color: "#C76D4A" }}>➡</span>
            <div style={{ background: "#FFFCF7", padding: "16px 28px", borderRadius: 12, border: "2px solid #C76D4A" }}>
              <div style={{ fontSize: "0.8rem", color: "#C76D4A", marginBottom: 4 }}>支持与托举</div>
              <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.3rem", fontWeight: 600, color: "#3E2C2C" }}>心神稳固生长</div>
            </div>
            <span style={{ fontSize: "1.5rem", color: "#C76D4A" }}>➡</span>
            <div style={{ background: "#FBF7F1", padding: "16px 28px", borderRadius: 12, border: "1px solid #EAE0D5" }}>
              <div style={{ fontSize: "0.8rem", color: "#806E66", marginBottom: 4 }}>自然发展出</div>
              <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.3rem", fontWeight: 600, color: "#3E2C2C" }}>十大心神能力</div>
            </div>
          </div>
          <p style={{ color: "#806E66", maxWidth: 500, margin: "0 auto" }}>结构在养育中慢慢成形，能力在成长中自然发展。它们互相参与，但不一一绑定。</p>
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
