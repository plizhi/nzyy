"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Step = "intro" | "test" | "result";

const colors = {
  bg: "#FBF7F1",
  textPrimary: "#3E2C2C",
  textSecondary: "#806E66",
  accent: "#C76D4A",
  accentHover: "#B85F3E",
  divider: "#EAE0D5",
};

const 成全孩子 = [
  { text: "永葆对生命与世界的热情和好奇心" },
  { text: "识风险、知进退" },
  { text: "唤醒内在的勇气与力量，去克服去战胜" },
  { text: "不辜负与生俱来的天赋、资源与经历，最大程度地实现自己的人生价值" },
  { text: "充分享受生命中的各种馈赠" },
];

const 彼此滋养 = [
  {
    层次: "彼此连接",
    核心: "知道对方时刻存在在彼此的世界中，随时可以建立起有效的连接",
  },
  {
    层次: "彼此看见和懂得",
    核心: "知道对方是个什么样的人，并且爱着对方本来的样子",
  },
  {
    层次: "彼此理解",
    核心: "你哭，我知道你哭的合理；你笑，我也了解你因何而笑。彼此的所有行为，都可以在对方那里得到理解",
  },
  {
    层次: "彼此支持",
    核心: "无论想做什么，只要是真正的发自内心的渴望，都可以得到另一方无条件的支持，双方都是彼此坚实的后盾",
  },
];

const questions = [
  { text: "我希望孩子永葆对生命与世界的热情和好奇心", dim: 1 },
  { text: "我希望孩子能识别风险、知晓进退", dim: 1 },
  { text: "我希望孩子在面对困难与挑战时，可以唤醒心中的力量与勇气，去克服去战胜", dim: 1 },
  { text: "我希望孩子不辜负天赋、资源与经历，最大程度地实现自己的人生价值", dim: 1 },
  { text: "我希望孩子充分享受生命中的各种馈赠", dim: 1 },
  { text: "我们之间一直有着畅通的沟通，随时能找得到彼此", dim: 2 },
  { text: "我们可以彼此看见、彼此懂得，是一种人与人的熟悉与接纳", dim: 2 },
  { text: "我们可以理解彼此的行为，你哭我能理解，你笑我也能开怀", dim: 2 },
  { text: "我们彼此支持彼此的选择，彼此做彼此的后盾", dim: 2 },
];

const RESONANCE_PROMPT = `你是「内在结构养育」体系的解读专家。用户刚完成了一套9道题的育儿初心测试。

成全孩子的五个层次：永葆热情与好奇心；识风险知进退；唤醒内心勇气；不辜负天赋；享受其中。
彼此滋养的四个层次：彼此连接；彼此看见和懂得（这个人）；彼此理解（行为）；彼此支持。

输出要求：
- 2-3句话，简短有力
- 语气克制从容，不谄媚，不不说教
- 结合得分，重点解读较弱维度，给出一个方向提示
- 结束时温和点出内在结构养育能提供的支持`;

export default function HomePage() {
  const [step, setStep] = useState<Step>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [aiInsight, setAiInsight] = useState("");
  const [loadingInsight, setLoadingInsight] = useState(false);

  const totalQuestions = questions.length;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (step !== "result" || answers.length < 9) return;
    const dim1Score = answers.slice(0, 5).reduce((a, b) => a + b, 0) / 5;
    const dim2Score = answers.slice(5).reduce((a, b) => a + b, 0) / 4;
    const prompt = `${RESONANCE_PROMPT}\n\n综合共鸣度：${score}%\n前5题均分：${dim1Score.toFixed(1)}/5 后4题均分：${dim2Score.toFixed(1)}/5`;
    setLoadingInsight(true);
    setAiInsight("");
    fetch("/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [{ role: "user", content: prompt }],
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        setAiInsight(data.content || "");
        setLoadingInsight(false);
      })
      .catch(() => setLoadingInsight(false));
  }, [step, score, answers]);

  function handleAnswer(value: number) {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQ < totalQuestions - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      const dim1Avg =
        (newAnswers[0] +
          newAnswers[1] +
          newAnswers[2] +
          newAnswers[3] +
          newAnswers[4]) /
        5;
      const dim2Avg =
        (newAnswers[5] + newAnswers[6] + newAnswers[7] + newAnswers[8]) / 4;
      const finalScore = Math.round((dim1Avg * 0.6 + dim2Avg * 0.4) * 20);
      setScore(finalScore);
      setStep("result");
    }
  }

  if (!mounted) return null;

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: colors.bg,
        fontFamily: "'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif",
        color: colors.textPrimary,
      }}
    >

      {/* 引导页 */}
      {step === "intro" && (
        <main
          className="intro-container flex-1 flex flex-col justify-center items-center text-center px-8"
          style={{
            padding: "80px 32px 40px",
            position: "relative",
          }}
        >
          {/* 背景微光 */}
          <div
            style={{
              position: "absolute",
              width: "600px",
              height: "600px",
              background: "radial-gradient(circle, rgba(199, 109, 74, 0.04) 0%, rgba(251, 247, 241, 0) 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 0,
              pointerEvents: "none",
            }}
          />

          <div style={{ maxWidth: "800px", position: "relative", zIndex: 1 }}>
            {/* 引子文案 */}
            <p
              style={{
                color: colors.textSecondary,
                letterSpacing: "0.08em",
                fontWeight: 300,
                fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                marginBottom: 64,
                animation: "fadeUp 1s ease-out",
              }}
            >
              绝大多数家长的育儿困扰甚至焦虑，
              <br />
              源自当前某些育儿方法与手段的无效。
            </p>

            {/* 分隔线 */}
            <div
              style={{
                width: 1,
                height: 40,
                background: colors.divider,
                margin: "0 auto 64px",
                animation: "expandHeight 1.2s ease-out",
              }}
            />

            {/* 核心问题 */}
            <div
              style={{
                fontFamily: "'Noto Serif SC', serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                lineHeight: 1.6,
                fontWeight: 500,
                marginBottom: 80,
                animation: "fadeUp 1.2s ease-out 0.2s backwards",
              }}
            >
              <span className="block" style={{ color: colors.textSecondary }}>
                当我们沉迷于
              </span>
              <span className="block">
                <span style={{ color: colors.accent }}>养育方法和工具</span>的升级时，
              </span>
              <span className="block" style={{ color: colors.textSecondary }}>
                能否不动摇
              </span>
              <span className="block">自己的育儿初心？</span>
            </div>

            {/* 召唤按钮 */}
            <a
              onClick={() => setStep("test")}
              className="cursor-pointer"
              style={{
                display: "inline-block",
                textDecoration: "none",
                fontFamily: "'Noto Serif SC', serif",
                background: colors.accent,
                color: colors.bg,
                fontSize: "1.2rem",
                fontWeight: 500,
                padding: "16px 56px",
                borderRadius: 50,
                letterSpacing: "0.15em",
                boxShadow: "0 8px 30px rgba(199, 109, 74, 0.15)",
                transition: "all 0.3s ease",
                animation: "fadeUp 1.4s ease-out 0.4s backwards",
                cursor: "pointer",
                border: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 12px 36px rgba(199, 109, 74, 0.25)";
                e.currentTarget.style.background = colors.accentHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(199, 109, 74, 0.15)";
                e.currentTarget.style.background = colors.accent;
              }}
            >
              对齐育儿初心
            </a>
          </div>
        </main>
      )}

      {/* 底部落款 */}
      {step === "intro" && (
        <footer
          style={{
            textAlign: "center",
            padding: "40px 32px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <p
            style={{
              fontFamily: "'Noto Serif SC', serif",
              fontSize: "1rem",
              color: colors.textSecondary,
              letterSpacing: "0.1em",
              marginBottom: 12,
              opacity: 0.8,
            }}
          >
            @内在结构养育
          </p>
          <p
            style={{
              fontSize: "0.8rem",
              color: colors.textSecondary,
              opacity: 0.5,
              letterSpacing: "0.05em",
            }}
          >
            京ICP备2026026935号-2
          </p>
        </footer>
      )}

      {/* 测试流程 */}
      {step === "test" && (
        <>
          {/* 顶部导航 */}
          <header style={{ padding: "24px 32px" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 600, fontSize: "1.1rem", color: colors.textPrimary, letterSpacing: "0.1em" }}>
                内在结构养育
              </span>
              <span style={{ fontSize: "0.95rem", color: colors.textSecondary, letterSpacing: "0.05em" }}>
                <span style={{ color: colors.accent, fontWeight: 600 }}>{currentQ + 1}</span> / {totalQuestions}
              </span>
            </div>
          </header>

          {/* 进度条 */}
          <div style={{ maxWidth: 1200, margin: "0 auto 40px", padding: "0 32px" }}>
            <div style={{ height: 4, background: colors.divider, borderRadius: 2, overflow: "hidden" }}>
              <div
                style={{
                  height: "100%",
                  background: colors.accent,
                  borderRadius: 2,
                  width: `${((currentQ + 1) / totalQuestions) * 100}%`,
                  transition: "width 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              />
            </div>
          </div>

          {/* 测试主体 */}
          <div className="flex-1 flex flex-col items-center justify-center px-8" style={{ padding: "40px 32px 80px" }}>
            <div style={{ maxWidth: 720, width: "100%", textAlign: "center", animation: "fadeIn 0.6s ease-out" }}>

              {/* 分类标签 */}
              <div style={{
                display: "inline-block",
                fontSize: "0.85rem",
                color: colors.accent,
                background: "rgba(199, 109, 74, 0.08)",
                padding: "6px 16px",
                borderRadius: 20,
                marginBottom: 32,
                letterSpacing: "0.1em",
              }}>
                {currentQ < 5 ? "成全孩子" : "彼此滋养"}
              </div>

              {/* 题目文案 */}
              <h1 style={{
                fontFamily: "'Noto Serif SC', serif",
                fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                fontWeight: 500,
                lineHeight: 1.6,
                color: colors.textPrimary,
                marginBottom: 64,
                letterSpacing: "0.05em",
              }}>
                {questions[currentQ].text}
              </h1>

              {/* 量表选项 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%", maxWidth: 420, fontSize: "0.9rem", color: colors.textSecondary, padding: "0 4px" }}>
                  <span>完全不符</span>
                  <span>非常符合</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%", maxWidth: 420, gap: 12 }}>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      onClick={() => handleAnswer(value)}
                      style={{
                        flex: 1,
                        aspectRatio: "1",
                        border: "1.5px solid var(--divider)",
                        background: "#FFFCF7",
                        borderRadius: "50%",
                        fontFamily: "'Noto Serif SC', serif",
                        fontSize: "1.2rem",
                        color: colors.textSecondary,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#E89878";
                        e.currentTarget.style.color = colors.accent;
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = colors.divider;
                        e.currentTarget.style.color = colors.textSecondary;
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>

              {/* 上一题按钮 */}
              <div style={{ marginTop: 64, display: "flex", justifyContent: "center", minHeight: 48 }}>
                {currentQ > 0 && (
                  <button
                    onClick={() => {
                      setCurrentQ(currentQ - 1);
                      setAnswers(answers.slice(0, -1));
                    }}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: colors.textSecondary,
                      fontSize: "1rem",
                      cursor: "pointer",
                      padding: "12px 24px",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.accent}
                    onMouseLeave={(e) => e.currentTarget.style.color = colors.textSecondary}
                  >
                    ← 上一题
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {/* 结果页 */}
      {step === "result" && (
        <div className="min-h-screen flex flex-col px-6 py-12">
          <div className="max-w-2xl mx-auto w-full">

            {/* 得分 */}
            <div className="text-center mb-12">
              <div className="mb-4">
                <span className="text-6xl sm:text-8xl font-medium leading-none tracking-tight" style={{ color: colors.textPrimary }}>
                  {score}
                </span>
                <span className="text-3xl sm:text-4xl" style={{ color: colors.textPrimary, opacity: 0.3 }}>%</span>
              </div>
              <p className="text-sm tracking-widest uppercase" style={{ color: colors.textSecondary }}>
                综合共鸣度
              </p>
            </div>

            {/* 1. 育儿初心完整表述 */}
            <div className="mb-10">
              <h3 className="text-xs tracking-widest uppercase mb-4" style={{ color: colors.textSecondary }}>
                父母之爱子，则为之计长远
              </h3>
              <p className="text-sm mb-6" style={{ color: colors.textSecondary, lineHeight: 1.8 }}>
                这个长远，一方面是孩子自己的路，另一方面是父母与孩子之间的连接。
              </p>

              <h4 className="text-xs tracking-widest uppercase mb-3" style={{ color: colors.textSecondary }}>
                孩子成长在自己的路上，我们希望他——
              </h4>
              <div className="space-y-2 mb-6">
                {成全孩子.map((item, i) => (
                  <p key={i} className="text-sm" style={{ color: colors.textPrimary, lineHeight: 1.8 }}>
                    {item.text}
                  </p>
                ))}
              </div>

              <h4 className="text-xs tracking-widest uppercase mb-3" style={{ color: colors.textSecondary }}>
                在父母与孩子的连接上，可以彼此滋养——
              </h4>
              <div className="space-y-2">
                {彼此滋养.map((item, i) => (
                  <p key={i} className="text-sm" style={{ color: colors.textSecondary, lineHeight: 1.8 }}>
                    <span style={{ color: colors.accent }}>{item.层次}</span>
                    {"："}
                    {item.核心}
                  </p>
                ))}
              </div>
            </div>

            {/* 2. AI 解读 */}
            <div style={{ backgroundColor: "#fff", borderRadius: 16, padding: 32, marginBottom: 32, textAlign: "left", boxShadow: "0 1px 3px rgba(62, 44, 44, 0.08)" }}>
              {loadingInsight ? (
                <p style={{ color: colors.textSecondary, fontSize: 16, lineHeight: 1.8 }}>
                  解读生成中...
                </p>
              ) : aiInsight ? (
                <p style={{ color: colors.textPrimary, fontSize: 18, lineHeight: 1.9 }}>
                  {aiInsight}
                </p>
              ) : (
                <p style={{ color: colors.textSecondary, fontSize: 16, lineHeight: 1.8 }}>
                  解读生成中...
                </p>
              )}
            </div>

            {/* 3. 内在结构养育简介 */}
            <div style={{ backgroundColor: "rgba(199, 109, 74, 0.08)", borderRadius: 16, padding: 24, marginBottom: 24, textAlign: "left" }}>
              <h3 className="text-sm font-medium mb-3" style={{ color: colors.textPrimary }}>
                什么是内在结构养育？
              </h3>
              <p className="text-sm mb-3" style={{ color: colors.textSecondary, lineHeight: 1.8 }}>
                一套以"心神"为核心的育儿方法论。
              </p>
              <p className="text-sm mb-3" style={{ color: colors.textSecondary, lineHeight: 1.8 }}>
                它的核心判断是：孩子学业问题的底层是心智，心神不稳，再多外力也只是治标不治本。
              </p>
              <p className="text-sm" style={{ color: colors.textSecondary, lineHeight: 1.8 }}>
                关注两件事：第一，孩子成长在自己的路上，顺着他的规律养育，让他做自己人生的主人；第二，亲子关系不是父母单向付出，而是彼此滋养。
              </p>
            </div>

            <div className="text-center mb-8">
              <Link
                href="/intro"
                className="text-sm"
                style={{ color: colors.accent, textDecoration: "none" }}
              >
                了解更多 →
              </Link>
            </div>

            {/* 4. 过来人说 */}
            <details style={{ background: "#fff", borderRadius: 16, border: `1px solid ${colors.divider}`, overflow: "hidden", marginBottom: 32 }}>
              <summary
                style={{
                  padding: "20px",
                  cursor: "pointer",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight: 500,
                  color: colors.textPrimary,
                }}
              >
                <span>过来人说</span>
                <svg style={{ width: 20, height: 20, color: colors.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </summary>
              <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${colors.divider}` }}>
                <p style={{ color: colors.textPrimary, fontSize: 14, lineHeight: 1.9, marginBottom: 12 }}>
                  从女儿考上清华开始，不断地有亲朋好友向我和爱人请教育儿方面的经验。回看我们自己带给女儿的养育历程，曾经也有过很多养育上的疑问和困惑，那时候，爱人作为一名心理工作的专业人士，参阅了大量育儿方面的理论与典籍，再结合孩子成长的不同阶段不同表现，结合我们自己家庭的具体情况，逐渐形成了适合我们这样一个普通家庭的一些养育原则和方法。
                </p>
                <p style={{ color: colors.textPrimary, fontSize: 14, lineHeight: 1.9, marginBottom: 12 }}>
                  我们发现，一直以来有些我们坚持和恪守的东西，正是孩子能够如其所是地成长成自己本来样子的土壤。
                </p>
                <p style={{ color: colors.textPrimary, fontSize: 14, lineHeight: 1.9, marginBottom: 12 }}>
                  今天回看这些原则与方法，我们发现可以给那些与我们的曾经有相似状况的父母们，一些借鉴和引导。于是，我和爱人一起将我们从大量心理学典籍中学习到的，从我们的养育实践中沉淀积累到的，汇总成为一套独特的育儿方法论。
                </p>
                <p style={{ color: colors.accent, fontSize: 14, fontWeight: 500 }}>
                  我们既是内在结构养育的创立者，更是践行者、受益者。也希望可以结识更多的同行者。
                </p>
              </div>
            </details>

            <div className="text-center mb-8">
              <Link
                href="/story"
                className="text-sm"
                style={{ color: colors.accent, textDecoration: "none" }}
              >
                朋大大自述 →
              </Link>
            </div>

            {/* 5. 注册 + 分享 */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <button
                style={{
                  display: "block",
                  padding: "16px 32px",
                  backgroundColor: colors.accent,
                  color: colors.bg,
                  fontWeight: 500,
                  borderRadius: 9999,
                  textAlign: "center",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                注册 / 登录
              </button>
              <button
                style={{
                  display: "block",
                  padding: "16px 32px",
                  border: `1px solid ${colors.accent}`,
                  color: colors.accent,
                  fontWeight: 500,
                  borderRadius: 9999,
                  textAlign: "center",
                  background: "transparent",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                生成分享海报
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 动画样式 */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes expandHeight {
          from {
            height: 0;
          }
          to {
            height: 40px;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 768px) {
          .intro-container {
            padding: 15vh 24px 20px !important;
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </div>
  );
}
