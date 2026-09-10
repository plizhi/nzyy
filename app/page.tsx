"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getIntentData, saveIntentData } from "@/lib/storage";

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
  const [showResult, setShowResult] = useState(false);
  const [showPosterModal, setShowPosterModal] = useState(false);
  const [posterImageUrl, setPosterImageUrl] = useState("");
  const [posterDataUrl, setPosterDataUrl] = useState("");
  const [isGeneratingPoster, setIsGeneratingPoster] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  const totalQuestions = questions.length;

  useEffect(() => {
    setMounted(true);

    // 检查是否已测试过，直接显示结果
    const savedData = getIntentData();
    if (savedData.answers && savedData.answers.length === 9) {
      setAnswers(savedData.answers);
      setScore(savedData.共鸣度 || 0);
      setStep("result");
      setShowResult(true);
    }
  }, []);

  // 沙漏等待后显示结果
  useEffect(() => {
    if (step === "result" && !showResult) {
      const timer = setTimeout(() => {
        setShowResult(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [step, showResult]);

  // 预加载二维码图片
  useEffect(() => {
    if (showResult) {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent("https://nzyy.cc")}`;
      setQrCodeUrl(url);
      // 预加载
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = url;
    }
  }, [showResult]);

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
      // 保存到 localStorage，下次打开直接显示结果
      saveIntentData({ answers: newAnswers, 共鸣度: finalScore });
    }
  }

  // 计算共鸣状态
  const dim1Avg = answers.slice(0, 5).reduce((a, b) => a + b, 0) / 5;
  const dim2Avg = answers.slice(5).reduce((a, b) => a + b, 0) / 4;
  const dim1Status = dim1Avg >= 4 ? "高度共鸣" : "局部共鸣";
  const dim2Status = dim2Avg >= 4 ? "高度共鸣" : "局部共鸣";

  // 生成海报（纯 Canvas 绘制）
  async function generatePoster() {
    setIsGeneratingPoster(true);

    // 先确保二维码图片加载完成
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent("https://nzyy.cc")}`;
    const qrImg = new Image();
    qrImg.crossOrigin = "anonymous";
    qrImg.src = qrUrl;
    await new Promise((resolve) => {
      qrImg.onload = resolve;
      qrImg.onerror = resolve; // 失败也继续
    });

    // 等待字体加载完毕
    await document.fonts.ready;

    try {
      // 创建 Canvas 画布 (750x1334，1倍图)
      const canvas = document.createElement("canvas");
      canvas.width = 750;
      canvas.height = 1334;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("无法获取 Canvas 上下文");

      // 绘制背景渐变
      const gradient = ctx.createLinearGradient(0, 0, 0, 1334);
      gradient.addColorStop(0, "#FBF7F1");
      gradient.addColorStop(1, "#F3ECE3");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 750, 1334);

      ctx.textAlign = "center";

      // 头部 - 品牌名
      ctx.font = '500 24px "Noto Sans SC", sans-serif';
      ctx.fillStyle = "#806E66";
      ctx.fillText("@内在结构养育", 375, 110);

      // 头部 - 标题
      ctx.font = '600 32px "Noto Serif SC", serif';
      ctx.fillStyle = "#C76D4A";
      ctx.fillText("育儿初心共鸣画像", 375, 155);

      // 核心金句区
      ctx.font = '400 20px "Noto Sans SC", sans-serif';
      ctx.fillStyle = "#806E66";
      ctx.fillText("致 一直在正确路上的你", 375, 380);

      ctx.font = '600 64px "Noto Serif SC", serif';
      ctx.fillStyle = "#3E2C2C";
      ctx.fillText("初心无对错", 375, 490);

      // "只有【共鸣】与差异" 居中混色
      const text1 = "只有";
      const text2 = "【共鸣】";
      const text3 = "与差异";
      const w1 = ctx.measureText(text1).width;
      const w2 = ctx.measureText(text2).width;
      const w3 = ctx.measureText(text3).width;
      const totalWidth = w1 + w2 + w3;
      let x = 375 - totalWidth / 2;

      ctx.textAlign = "left";
      ctx.fillStyle = "#3E2C2C";
      ctx.fillText(text1, x, 580);
      x += w1;
      ctx.fillStyle = "#C76D4A";
      ctx.fillText(text2, x, 580);
      x += w2;
      ctx.fillStyle = "#3E2C2C";
      ctx.fillText(text3, x, 580);

      // 虚线引言框
      ctx.strokeStyle = "#EAE0D5";
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(80, 660);
      ctx.lineTo(670, 660);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(80, 820);
      ctx.lineTo(670, 820);
      ctx.stroke();
      ctx.setLineDash([]);

      // 引言
      ctx.fillStyle = "#806E66";
      ctx.font = '500 26px "Noto Serif SC", serif';
      ctx.fillText('"你对待孩子的方式，', 375, 720);
      ctx.fillText('就是孩子内心世界的建筑图纸。"', 375, 765);

      // 底部维度数据
      ctx.fillStyle = "#3E2C2C";
      ctx.font = '500 28px "Noto Serif SC", serif';
      ctx.fillText("成全孩子", 220, 1020);
      ctx.fillText("彼此滋养", 530, 1020);

      ctx.fillStyle = "#C76D4A";
      ctx.font = '400 20px "Noto Sans SC", sans-serif';
      ctx.fillText(dim1Status, 220, 1055);
      ctx.fillText(dim2Status, 530, 1055);

      // 底部分割线与落款
      ctx.strokeStyle = "#EAE0D5";
      ctx.beginPath();
      ctx.moveTo(80, 1150);
      ctx.lineTo(670, 1150);
      ctx.stroke();

      ctx.textAlign = "left";
      ctx.fillStyle = "#806E66";
      ctx.font = '400 18px "Noto Sans SC", sans-serif';
      ctx.fillText("用结构思维理解孩子", 80, 1200);
      ctx.fillText("用发展眼光看见成长", 80, 1230);

      // 右下角真实二维码
      try {
        ctx.drawImage(qrImg, 570, 1170, 100, 100);
      } catch {
        // 如果二维码加载失败，绘制占位框
        ctx.strokeStyle = "#EAE0D5";
        ctx.strokeRect(570, 1170, 100, 100);
        ctx.fillStyle = "#999";
        ctx.textAlign = "center";
        ctx.font = '400 12px "Noto Sans SC", sans-serif';
        ctx.fillText("扫码查看", 620, 1210);
        ctx.fillText("完整解读", 620, 1230);
      }

      // 生成 dataURL
      const dataURL = canvas.toDataURL("image/jpeg", 0.85);
      setPosterImageUrl(dataURL);
      setPosterDataUrl(dataURL);
      setShowPosterModal(true);
    } catch (err) {
      console.error("海报生成失败:", err);
      alert("海报生成失败，请重试");
    } finally {
      setIsGeneratingPoster(false);
    }
  }

  // 在新标签页打开海报
  function openPosterInNewTab() {
    if (posterDataUrl) {
      const newTab = window.open("about:blank");
      if (newTab) {
        newTab.document.write(`<img src="${posterDataUrl}" style="width:100%;height:auto;">`);
        newTab.document.close();
      }
    }
  }

  function downloadPoster() {
    if (posterDataUrl) {
      const link = document.createElement("a");
      link.download = "育儿初心共鸣画像.jpg";
      link.href = posterDataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
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
          {/* 背景微光 - 慢呼吸效果 */}
          <div
            className="breathing-glow"
            style={{
              position: "absolute",
              width: "600px",
              height: "600px",
              background: "radial-gradient(circle, rgba(199, 109, 74, 0.06) 0%, rgba(251, 247, 241, 0) 70%)",
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
                <div className="ripple-container" style={{ display: "flex", justifyContent: "space-between", width: "100%", maxWidth: 420, gap: 12 }}>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      onClick={(e) => {
                        // 涟漪效果
                        const rect = e.currentTarget.getBoundingClientRect();
                        const ripple = document.createElement('span');
                        ripple.style.cssText = `
                          position: absolute;
                          width: 20px;
                          height: 20px;
                          background: rgba(199, 109, 74, 0.4);
                          border-radius: 50%;
                          transform: scale(0);
                          animation: ripple 0.6s ease-out forwards;
                          pointer-events: none;
                          left: ${e.clientX - rect.left - 10}px;
                          top: ${e.clientY - rect.top - 10}px;
                        `;
                        e.currentTarget.style.position = 'relative';
                        e.currentTarget.style.overflow = 'hidden';
                        e.currentTarget.appendChild(ripple);
                        setTimeout(() => ripple.remove(), 600);
                        handleAnswer(value);
                      }}
                      style={{
                        position: 'relative',
                        flex: 1,
                        aspectRatio: "1",
                        border: "1.5px solid var(--divider)",
                        background: "#FFFCF7",
                        borderRadius: "50%",
                        fontFamily: "'Noto Serif SC', serif",
                        fontSize: "1.2rem",
                        color: colors.textSecondary,
                        cursor: "pointer",
                        transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#E89878";
                        e.currentTarget.style.color = colors.accent;
                        e.currentTarget.style.transform = "scale(1.08)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = colors.divider;
                        e.currentTarget.style.color = colors.textSecondary;
                        e.currentTarget.style.transform = "scale(1)";
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

      {/* 沙漏等待 */}
      {step === "result" && !showResult && (
        <div style={{ position: "fixed", inset: 0, background: colors.bg, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", zIndex: 999 }}>
          <div style={{ marginBottom: 40 }}>
            <svg width="56" height="84" viewBox="0 0 56 84" style={{ animation: "gentleSway 3s ease-in-out infinite" }}>
              <path d="M6 4 L50 4 L28 42 Z" fill="none" stroke="#C76D4A" strokeWidth="1.8" strokeLinejoin="round" opacity="0.7"/>
              <path d="M6 80 L50 80 L28 42 Z" fill="none" stroke="#C76D4A" strokeWidth="1.8" strokeLinejoin="round" opacity="0.7"/>
              <line x1="4" y1="4" x2="52" y2="4" stroke="#C76D4A" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="4" y1="80" x2="52" y2="80" stroke="#C76D4A" strokeWidth="2.5" strokeLinecap="round"/>
              <path style={{ transformOrigin: "50% 0%", animation: "drainTop 2.4s ease-in-out infinite" }} d="M9 8 L47 8 L29 39 L27 39 Z" fill="#C76D4A" opacity="0.85"/>
              <path style={{ transformOrigin: "50% 100%", animation: "fillBottom 2.4s ease-in-out infinite" }} d="M9 76 L47 76 L29 46 L27 46 Z" fill="#C76D4A" opacity="0.85"/>
              <rect style={{ animation: "streamFlow 2.4s ease-in-out infinite", transformOrigin: "center" }} x="27.3" y="40" width="1.4" height="3" fill="#C76D4A" opacity="0.9"/>
            </svg>
          </div>
          <p style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.1rem", color: colors.textSecondary, letterSpacing: "0.15em" }}>
            正在描绘你的初心共鸣画像<span><span style={{ opacity: 0.3, animation: "dotPulse 1.4s ease-in-out infinite" }}>·</span><span style={{ opacity: 0.3, animation: "dotPulse 1.4s ease-in-out infinite 0.2s" }}>·</span><span style={{ opacity: 0.3, animation: "dotPulse 1.4s ease-in-out infinite 0.4s" }}>·</span></span>
          </p>
        </div>
      )}

      {/* 结果内容 */}
      {showResult && (
        <div>
          {/* 顶部导航 */}
          <header style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(251, 247, 241, 0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid #EAE0D5" }}>
            <nav style={{ maxWidth: 1000, margin: "0 auto", padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Link href="/" style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 600, fontSize: "1.2rem", color: colors.textPrimary, textDecoration: "none", letterSpacing: "0.1em" }}>内在结构养育</Link>
              <Link href="/" style={{ color: colors.textSecondary, textDecoration: "none", fontSize: "0.95rem" }}>联系我们</Link>
            </nav>
          </header>

          {/* Hero */}
          <section style={{ textAlign: "center", padding: "100px 32px 60px", background: "linear-gradient(180deg, #FBF7F1 0%, #F3ECE3 100%)" }}>
            <div style={{ fontSize: "0.9rem", color: colors.accent, letterSpacing: "0.15em", marginBottom: 16 }}>育儿初心共鸣画像</div>
            <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "clamp(2rem, 4.5vw, 2.8rem)", fontWeight: 600, marginBottom: 16, letterSpacing: "0.08em", color: colors.textPrimary }}>初心无对错，只有共鸣与差异</h1>
            <p style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", color: colors.textSecondary, maxWidth: 560, margin: "0 auto" }}>这份画像不是评判，而是一面镜子——让你看见自己内心的爱与力量，也温柔地照见它们与内在结构养育理念的共振与微妙错频。</p>
          </section>

          <div style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 32px" }}>
            {/* 01 共鸣度总览 */}
            <section>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 16 }}>
                <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.4rem", color: colors.accent, fontWeight: 600 }}>01</span>
                <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "clamp(1.6rem, 3vw, 2rem)", fontWeight: 500, color: colors.textPrimary }}>共鸣度总览</h2>
              </div>
              <p style={{ fontSize: "1.05rem", color: colors.textSecondary, marginBottom: 40 }}>你的初心与理论倡导的同频光谱</p>

              <div style={{ display: "flex", gap: 32, marginBottom: 80, flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: 300, background: "#FFFCF7", border: "1px solid rgba(234, 224, 213, 0.5)", borderRadius: 24, padding: 36, boxShadow: "0 12px 40px rgba(62, 44, 44, 0.04)", textAlign: "center" }}>
                  <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.3rem", color: colors.textPrimary, marginBottom: 8 }}>成全孩子</h3>
                  <p style={{ fontSize: "0.9rem", color: colors.textSecondary, marginBottom: 24 }}>让他长成他自己</p>
                  <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.6rem", fontWeight: 600, color: colors.accent, marginBottom: 6 }}>{answers.slice(0, 5).reduce((a, b) => a + b, 0) / 5 >= 4 ? "高度共鸣" : "局部共鸣"}</div>
                  <p style={{ fontSize: "0.85rem", color: colors.textSecondary, marginBottom: 20 }}>{answers.slice(0, 5).reduce((a, b) => a + b, 0) / 5 >= 4 ? "同频共振 · 理念高度一致" : "部分同频 · 存在提升空间"}</p>
                  <div style={{ position: "relative", height: 6, background: "#EAE0D5", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, height: "100%", background: "linear-gradient(90deg, #E89878, #C76D4A)", borderRadius: 3, width: `${Math.round((answers.slice(0, 5).reduce((a, b) => a + b, 0) / 5 / 5) * 97)}%`, transition: "width 1.2s ease-out 0.3s" }} />
                  </div>
                </div>
                <div style={{ flex: 1, minWidth: 300, background: "#FFFCF7", border: "1px solid rgba(234, 224, 213, 0.5)", borderRadius: 24, padding: 36, boxShadow: "0 12px 40px rgba(62, 44, 44, 0.04)", textAlign: "center" }}>
                  <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.3rem", color: colors.textPrimary, marginBottom: 8 }}>彼此滋养</h3>
                  <p style={{ fontSize: "0.9rem", color: colors.textSecondary, marginBottom: 24 }}>两个独立的人彼此成就</p>
                  <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.6rem", fontWeight: 600, color: colors.accent, marginBottom: 6 }}>{answers.slice(5).reduce((a, b) => a + b, 0) / 4 >= 4 ? "高度共鸣" : "局部共鸣"}</div>
                  <p style={{ fontSize: "0.85rem", color: colors.textSecondary, marginBottom: 20 }}>{answers.slice(5).reduce((a, b) => a + b, 0) / 4 >= 4 ? "同频共振 · 理念高度一致" : "部分同频 · 存在微妙错频"}</p>
                  <div style={{ position: "relative", height: 6, background: "#EAE0D5", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, height: "100%", background: "linear-gradient(90deg, #E89878, #C76D4A)", borderRadius: 3, width: `${Math.round((answers.slice(5).reduce((a, b) => a + b, 0) / 4 / 5) * 80)}%`, transition: "width 1.2s ease-out 0.3s" }} />
                  </div>
                </div>
              </div>
            </section>

            {/* 02 初心明细 */}
            <section style={{ marginTop: 80 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 16 }}>
                <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.4rem", color: colors.accent, fontWeight: 600 }}>02</span>
                <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "clamp(1.6rem, 3vw, 2rem)", fontWeight: 500, color: colors.textPrimary }}>初心明细</h2>
              </div>
              <p style={{ fontSize: "1.05rem", color: colors.textSecondary, marginBottom: 40 }}>对照九大初心，看见你的自然倾向与理论倡导的同频与差异</p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: 48 }}>
                <div>
                  <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.4rem", marginBottom: 8, color: colors.accent, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    成全孩子
                    <span style={{ fontSize: "0.9rem", color: colors.textSecondary, fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 400 }}>共鸣度：{answers.slice(0, 5).reduce((a, b) => a + b, 0) / 5 >= 4 ? "高度同频" : "部分同频"}</span>
                  </h3>
                  <p style={{ fontSize: "1.1rem", color: colors.textPrimary, marginBottom: 32, fontWeight: 500 }}>让他长成他自己</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 24 }}>
                    {questions.slice(0, 5).map((q, i) => (
                      <li key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                        <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.2rem", color: colors.accent, fontWeight: 600, minWidth: 24 }}>{i + 1}</span>
                        <div>
                          <strong style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "1.05rem", color: colors.textPrimary, marginBottom: 6 }}>
                            {q.text}
                            <span style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "0.75rem", fontWeight: 400, padding: "2px 8px", borderRadius: 12, background: answers[i] >= 4 ? "rgba(199, 109, 74, 0.1)" : "rgba(128, 110, 102, 0.1)", color: answers[i] >= 4 ? colors.accent : colors.textSecondary }}>
                              {answers[i] >= 4 ? "理念共振" : "视角差异"}
                            </span>
                          </strong>
                          <span style={{ fontSize: "0.85rem", color: colors.textSecondary }}>你的选择：{answers[i]} / 5</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.4rem", marginBottom: 8, color: colors.accent, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    彼此滋养
                    <span style={{ fontSize: "0.9rem", color: colors.textSecondary, fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 400 }}>共鸣度：{answers.slice(5).reduce((a, b) => a + b, 0) / 4 >= 4 ? "高度同频" : "部分同频"}</span>
                  </h3>
                  <p style={{ fontSize: "1.1rem", color: colors.textPrimary, marginBottom: 32, fontWeight: 500 }}>两个独立的人，彼此成就</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 24 }}>
                    {questions.slice(5).map((q, i) => (
                      <li key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                        <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.2rem", color: colors.accent, fontWeight: 600, minWidth: 24 }}>{i + 6}</span>
                        <div>
                          <strong style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "1.05rem", color: colors.textPrimary, marginBottom: 6 }}>
                            {q.text}
                            <span style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "0.75rem", fontWeight: 400, padding: "2px 8px", borderRadius: 12, background: answers[i + 5] >= 4 ? "rgba(199, 109, 74, 0.1)" : "rgba(128, 110, 102, 0.1)", color: answers[i + 5] >= 4 ? colors.accent : colors.textSecondary }}>
                              {answers[i + 5] >= 4 ? "理念共振" : "视角差异"}
                            </span>
                          </strong>
                          <span style={{ fontSize: "0.85rem", color: colors.textSecondary }}>你的选择：{answers[i + 5]} / 5</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* 03 深度解读 */}
          <section style={{ background: "#F3ECE3", padding: "80px 32px", margin: "80px 0" }}>
            <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 48, justifyContent: "center" }}>
                <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.4rem", color: colors.accent, fontWeight: 600 }}>03</span>
                <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "clamp(1.6rem, 3vw, 2rem)", fontWeight: 500, color: colors.textPrimary }}>深度解读</h2>
              </div>

              {loadingInsight ? (
                <p style={{ fontSize: "1.05rem", lineHeight: 2.1, color: colors.textSecondary }}>解读生成中...</p>
              ) : aiInsight ? (
                <p style={{ fontSize: "1.05rem", lineHeight: 2.1, color: colors.textPrimary, textAlign: "left", marginBottom: 24 }}>{aiInsight}</p>
              ) : null}

              <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "clamp(1.2rem, 2vw, 1.4rem)", color: colors.accent, lineHeight: 1.7, margin: "32px 0", padding: "20px 0", borderTop: "1px dashed #EAE0D5", borderBottom: "1px dashed #EAE0D5" }}>
                差异维度并非缺陷，<br />而是提示你：对孩子的全然信任之下，<br />也需要保持开放，去&quot;看见&quot;<br />他行为背后的那个&quot;人&quot;。
              </div>

              <p style={{ fontSize: "1.05rem", lineHeight: 2.1, color: colors.textPrimary, textAlign: "left", marginBottom: 24 }}>
                在<span style={{ color: colors.accent, fontWeight: 500 }}>「内在结构养育」</span>体系中，我们会帮你把这份高度同频的初心，转化为<span style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 500 }}>&quot;在冲突中保持连接、在看见中给予引导&quot;</span>的具体方法。
              </p>

              <p style={{ fontSize: "1.05rem", lineHeight: 2.1, color: colors.textPrimary, textAlign: "left" }}>
                你已在正确的路上，我们陪你走得更<span style={{ color: colors.accent, fontWeight: 500 }}>笃定、更深入</span>。
              </p>
            </div>
          </section>

          <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 32px 80px" }}>
            {/* 04 落地工具 */}
            <section>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 48 }}>
                <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.4rem", color: colors.accent, fontWeight: 600 }}>04</span>
                <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "clamp(1.6rem, 3vw, 2rem)", fontWeight: 500, color: colors.textPrimary }}>落地工具</h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
                {/* 望杏成林 */}
                <div style={{ background: "#FFFCF7", padding: "36px 28px", borderRadius: 20, boxShadow: "0 8px 32px rgba(62, 44, 44, 0.04)", border: "1px solid rgba(234, 224, 213, 0.4)", transition: "transform 0.3s ease, box-shadow 0.3s ease", cursor: "pointer" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(62, 44, 44, 0.08)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(62, 44, 44, 0.04)"; }}>
                  <div style={{ fontSize: "2rem", marginBottom: 20 }}>🌱</div>
                  <h4 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.3rem", marginBottom: 6, color: colors.textPrimary }}>望杏成林</h4>
                  <p style={{ color: colors.accent, fontSize: "0.85rem", marginBottom: 16 }}>日常陪伴与滋养</p>
                  <p style={{ color: colors.textSecondary, lineHeight: 1.8, fontSize: "0.9rem" }}>亲子互动记录 · 情绪命名<br />习惯养成 · 成长瞬间捕捉</p>
                </div>
                {/* 荔枝测评 */}
                <div style={{ background: "#FFFCF7", padding: "36px 28px", borderRadius: 20, boxShadow: "0 8px 32px rgba(62, 44, 44, 0.04)", border: "1px solid rgba(234, 224, 213, 0.4)" }}>
                  <div style={{ fontSize: "2rem", marginBottom: 20 }}>📊</div>
                  <h4 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.3rem", marginBottom: 6, color: colors.textPrimary }}>荔枝测评</h4>
                  <p style={{ color: colors.accent, fontSize: "0.85rem", marginBottom: 16 }}>阶段性评估</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "rgba(199, 109, 74, 0.06)", borderRadius: 10 }}>
                      <div>
                        <span style={{ fontSize: "0.95rem", fontWeight: 500, color: colors.textPrimary }}>荔学卷</span>
                        <span style={{ fontSize: "0.75rem", color: colors.accent, marginLeft: 8 }}>K12学习力测评</span>
                      </div>
                      <span style={{ fontSize: "0.7rem", padding: "2px 8px", background: "rgba(62, 44, 44, 0.06)", borderRadius: 4, color: colors.textSecondary }}>可使用</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "rgba(128, 110, 102, 0.04)", borderRadius: 10, opacity: 0.8 }}>
                      <div>
                        <span style={{ fontSize: "0.95rem", fontWeight: 500, color: colors.textPrimary }}>荔心卷</span>
                        <span style={{ fontSize: "0.75rem", color: colors.textSecondary, marginLeft: 8 }}>十大心神能力发展</span>
                      </div>
                      <span style={{ fontSize: "0.7rem", padding: "2px 8px", background: "rgba(128, 110, 102, 0.1)", borderRadius: 4, color: colors.textSecondary }}>预告</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "rgba(128, 110, 102, 0.04)", borderRadius: 10, opacity: 0.8 }}>
                      <div>
                        <span style={{ fontSize: "0.95rem", fontWeight: 500, color: colors.textPrimary }}>荔升卷</span>
                        <span style={{ fontSize: "0.75rem", color: colors.textSecondary, marginLeft: 8 }}>升学潜力指数</span>
                      </div>
                      <span style={{ fontSize: "0.7rem", padding: "2px 8px", background: "rgba(128, 110, 102, 0.1)", borderRadius: 4, color: colors.textSecondary }}>预告</span>
                    </div>
                  </div>
                </div>
                {/* 咨询服务 */}
                <a href="/consult" style={{ background: "#FFFCF7", padding: "36px 28px", borderRadius: 20, boxShadow: "0 8px 32px rgba(62, 44, 44, 0.04)", border: "1px solid rgba(234, 224, 213, 0.4)", transition: "transform 0.3s ease, box-shadow 0.3s ease", cursor: "pointer", textDecoration: "none", display: "block" }}>
                  <div style={{ fontSize: "2rem", marginBottom: 20 }}>💬</div>
                  <h4 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.3rem", marginBottom: 6, color: colors.textPrimary }}>咨询服务</h4>
                  <p style={{ color: colors.accent, fontSize: "0.85rem", marginBottom: 16 }}>深度人工服务</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "0.85rem", color: colors.textSecondary }}>危机干预包</span>
                      <span style={{ fontSize: "0.8rem", fontWeight: 500, color: colors.textPrimary }}>1999元/次</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "0.85rem", color: colors.textSecondary }}>矫正计划</span>
                      <span style={{ fontSize: "0.8rem", fontWeight: 500, color: colors.textPrimary }}>9999元/年</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "0.85rem", color: colors.textSecondary }}>标准陪跑</span>
                      <span style={{ fontSize: "0.8rem", fontWeight: 500, color: colors.textPrimary }}>39800元/年</span>
                    </div>
                  </div>
                </a>
              </div>
            </section>
          </div>

          {/* 服务方案引导 */}
          <section style={{ maxWidth: 1000, margin: "0 auto", padding: "0 32px" }}>
            <Link
              href="/pricing"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "linear-gradient(135deg, #FFFCF7 0%, #FFF8F1 100%)",
                border: "2px solid #C76D4A",
                borderRadius: 20,
                padding: "28px 36px",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(199, 109, 74, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div>
                <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.2rem", color: "#3E2C2C", fontWeight: 600, marginBottom: 4 }}>阶梯式成长支持体系</div>
                <div style={{ fontSize: "0.9rem", color: "#806E66" }}>从199元入门到199998元顶配，找到适合您的方案</div>
              </div>
              <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1rem", color: "#C76D4A", display: "flex", alignItems: "center", gap: 8 }}>
                了解更多
                <span style={{ fontSize: "1.2rem" }}>→</span>
              </div>
            </Link>
          </section>

          {/* 底部收尾 */}
          <footer style={{ background: "#F3ECE3", padding: "80px 32px 60px", textAlign: "center" }}>
            <p style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", lineHeight: 1.6, color: colors.textPrimary, marginBottom: 16 }}>你对待孩子的方式<br />就是孩子内心世界的建筑图纸</p>
            <p style={{ color: colors.textSecondary, marginBottom: 16 }}>用结构思维理解孩子，用发展眼光看见成长</p>
            <p style={{ color: colors.textSecondary, marginBottom: 48 }}>从理解开始，一步步成全</p>
            <p style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: 8, color: colors.textPrimary }}>内在结构养育</p>
            <p style={{ fontSize: "0.9rem", color: colors.textSecondary }}>理论与实践的完整育儿体系</p>
          </footer>

          {/* 注册 + 分享 */}
          <section style={{ padding: "48px 32px", background: "#FBF7F1" }}>
            <div style={{ maxWidth: 500, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
              <button style={{ display: "block", padding: "16px 32px", backgroundColor: "#f59e0b", color: "#fff", fontWeight: 500, borderRadius: 9999, textAlign: "center", border: "none", cursor: "pointer", fontSize: "1rem" }}>注册 / 登录</button>
              <button
                onClick={generatePoster}
                disabled={isGeneratingPoster}
                style={{ display: "block", padding: "16px 32px", border: "1px solid rgba(245,158,11,0.3)", color: "rgba(120,53,15,0.7)", fontWeight: 500, borderRadius: 9999, textAlign: "center", background: "transparent", cursor: isGeneratingPoster ? "wait" : "pointer", fontSize: "1rem", opacity: isGeneratingPoster ? 0.7 : 1 }}
              >
                {isGeneratingPoster ? "正在绘制中..." : "生成分享海报"}
              </button>
            </div>
          </section>

          {/* ========================================== */}
          {/* ===== 弹窗：展示生成的海报 ===== */}
          {/* ========================================== */}
          {showPosterModal && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.9)",
                display: "block",
                zIndex: 9999,
                overflow: "auto",
                padding: "20px 0",
              }}
              onClick={() => setShowPosterModal(false)}
            >
              {/* 右上角按钮组 */}
              <div style={{ position: "fixed", top: 20, right: 20, zIndex: 10000, display: "flex", gap: 10 }}>
                <button
                  onClick={(e) => { e.stopPropagation(); downloadPoster(); }}
                  style={{ padding: "8px 16px", background: "#C76D4A", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer", fontSize: 14 }}
                >
                  保存到相册
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); openPosterInNewTab(); }}
                  style={{ padding: "8px 16px", background: "#fff", color: "#333", border: "none", borderRadius: 6, cursor: "pointer", fontSize: 14 }}
                >
                  在新标签页打开
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setShowPosterModal(false); }}
                  style={{ padding: "8px 16px", background: "#333", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer", fontSize: 20 }}
                >
                  ×
                </button>
              </div>
              {posterImageUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={posterImageUrl}
                  alt="海报"
                  style={{
                    display: "block",
                    margin: "0 auto",
                    maxWidth: "90vw",
                    maxHeight: "85vh",
                    objectFit: "contain",
                    borderRadius: 8,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                  }}
                />
              )}
            </div>
          )}
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
