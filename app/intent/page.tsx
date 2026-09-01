"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Step = "intro" | "test" | "result" | "register";

const questions = [
  {
    text: "我希望孩子可以永葆对生命的热情和好奇心",
  },
  {
    text: "我希望孩子可以识风险、知进退",
  },
  {
    text: "我希望孩子在面对困难和挑战时，可以唤醒心中的力量与勇气",
  },
  {
    text: "我希望孩子不辜负人生各种资源与天赋，充分实现自我价值",
  },
  {
    text: "我希望孩子享受其中",
  },
  {
    text: "我们可以保持通畅的沟通，随时找到彼此，也实时了解彼此的存在",
  },
  {
    text: "我希望在任何时候，我都能懂他；我希望有些时候他也能像我懂他那样懂我",
  },
  {
    text: "在他做的很多事情上，我觉得我可以理解他；他有时也可以理解我",
  },
  {
    text: "无论他做怎样的选择，我都会支持他；同样他也会支持我的选择。有需要我们都知道对方会在身后",
  },
];

const labels = ["", "完全不符", "不太符合", "一般", "比较符合", "非常符合"];

const RESONANCE_PROMPT = `你是「内在结构养育」体系的解读专家。用户刚完成了一套9道题的育儿初心测试。

成全孩子的五个层次：永葆热情与好奇心；识风险知进退；唤醒内心勇气；不辜负天赋；享受其中。
彼此滋养的四个层次：彼此连接；彼此看见和懂得（这个人）；彼此理解（行为）；彼此支持。

输出要求：
- 2-3句话，简短有力
- 语气克制从容，不谄媚，不说教
- 结合得分，重点解读较弱维度，给出一个方向提示
- 结束时温和点出内在结构养育能提供的支持`;

export default function IntentPage() {
  const [step, setStep] = useState<Step>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [aiInsight, setAiInsight] = useState("");
  const [loadingInsight, setLoadingInsight] = useState(false);

  const totalQuestions = questions.length;

  useEffect(() => {
    setMounted(true);
  }, []);

  // DeepSeek 生成解读
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

  function handleRegister() {
    if (!phone || !password) return;
    setSubmitted(true);
  }

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#FFFBF5] flex flex-col">

      {/* 引导页 */}
      {step === "intro" && (
        <main className="flex-1 flex flex-col justify-between px-8 py-16">
          <div />

          {/* 核心句 */}
          <div className="text-center space-y-6">
            <p className="text-sm text-[#78350f]/40 leading-relaxed">
              绝大多数家长的育儿困扰甚至焦虑，
              <br />
              源自当前某些育儿方法与手段的无效。
            </p>
            <h1 className="text-xl sm:text-2xl text-[#78350f] font-medium tracking-tight leading-9">
              当我们沉迷于
              <br />
              养育方法和工具的升级时，
              <br />
              <span className="text-[#f59e0b]">能否不动摇</span>
              <br />
              <span className="text-[#f59e0b]">自己的育儿初心？</span>
            </h1>
          </div>

          {/* 按钮 */}
          <div className="flex justify-center px-6">
            <button
              onClick={() => setStep("test")}
              className="border-none bg-transparent hover:opacity-80 active:scale-95 transition-all p-0"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='440' height='80' viewBox='0 0 440 80'%3E%3Crect width='440' height='80' rx='8' fill='%23f59e0b'/%3E%3Ctext x='210' y='47' text-anchor='middle' fill='white' font-family='system-ui,sans-serif' font-size='18' font-weight='600'%3E让我们找回育儿初心%3C/text%3E%3Cpolygon points='370,28 388,40 370,52' fill='white'/%3E%3C/svg%3E"
                alt="让我们找回育儿初心"
                style={{ height: "80px", width: "100%", maxWidth: "440px", display: "block" }}
              />
            </button>
          </div>

          {/* 落款 */}
          <footer className="text-center space-y-2">
            <p className="text-xs text-[#78350f]/30">@内在结构养育</p>
            <p className="text-xs text-[#78350f]/20">京ICP备2026026935号-2</p>
          </footer>
        </main>
      )}

        {/* 测试页 */}
        {step === "test" && (
          <div className="min-h-screen flex flex-col">
            <div className="px-6 pt-8 pb-6">
              <div style={{ maxWidth: 480, margin: "0 auto" }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm" style={{ color: "rgba(120,53,15,0.4)" }}>
                    {currentQ + 1} / {totalQuestions}
                  </span>
                </div>
                <div className="rounded-full overflow-hidden" style={{ height: 4, backgroundColor: "rgba(245,158,11,0.15)" }}>
                  <div
                    className="rounded-full transition-all duration-500"
                    style={{
                      width: `${((currentQ + 1) / totalQuestions) * 100}%`,
                      height: 4,
                      backgroundColor: "#f59e0b",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 px-6 pb-8">
              <div style={{ maxWidth: 480, margin: "0 auto" }}>
                <h2 className="text-xl sm:text-2xl mb-10" style={{ color: "#78350f", lineHeight: 1.5 }}>
                  {questions[currentQ].text}
                </h2>

                <div className="rounded-2xl" style={{ backgroundColor: "#fff", padding: 24, boxShadow: "0 1px 3px rgba(120,53,15,0.08)" }}>
                  <div className="flex justify-between gap-2 mb-3">
                    {[5, 4, 3, 2, 1].map((value) => (
                      <button
                        key={value}
                        onClick={() => handleAnswer(value)}
                        className="flex-1 py-3 rounded-xl text-base font-medium transition-all"
                        style={{
                          backgroundColor: "rgba(254,243,199,0.4)",
                          color: "#f59e0b",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#f59e0b";
                          e.currentTarget.style.color = "#fff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "rgba(254,243,199,0.4)";
                          e.currentTarget.style.color = "#f59e0b";
                        }}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs" style={{ color: "rgba(120,53,15,0.3)" }}>
                    <span>完全不符</span>
                    <span>非常符合</span>
                  </div>
                </div>

                {currentQ > 0 && (
                  <button
                    onClick={() => {
                      setCurrentQ(currentQ - 1);
                      setAnswers(answers.slice(0, -1));
                    }}
                    className="text-sm mt-6 transition-colors"
                    style={{ color: "rgba(120,53,15,0.35)" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "rgba(120,53,15,0.6)"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "rgba(120,53,15,0.35)"}
                  >
                    上一题
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 结果页 */}
        {step === "result" && (
          <div className="min-h-screen flex flex-col justify-center px-6">
            <div className="max-w-2xl mx-auto w-full text-center">
              <p className="text-sm text-[#78350f]/40 tracking-widest uppercase mb-12">
                你的育儿初心与内在结构养育
              </p>

              {/* 分数 */}
              <div className="mb-10">
                <span className="text-6xl sm:text-8xl font-medium text-[#78350f] leading-none tracking-tighter">
                  {score}
                </span>
                <span className="text-3xl sm:text-4xl text-[#78350f]/30">%</span>
              </div>

              <p className="text-sm text-[#78350f]/30 tracking-widest uppercase mb-16">
                综合共鸣度
              </p>

              {/* 解读 */}
              <div style={{ backgroundColor: "#fff", borderRadius: 16, padding: 32, marginBottom: 32, textAlign: "left", boxShadow: "0 1px 3px rgba(120,53,15,0.08)" }}>
                {loadingInsight ? (
                  <p style={{ color: "rgba(120,53,15,0.4)", fontSize: 16, lineHeight: 1.8 }}>
                    解读生成中...
                  </p>
                ) : aiInsight ? (
                  <p style={{ color: "#78350f", fontSize: 18, lineHeight: 1.9 }}>
                    {aiInsight}
                  </p>
                ) : (
                  <p style={{ color: "rgba(120,53,15,0.5)", fontSize: 16, lineHeight: 1.8 }}>
                    解读生成中...
                  </p>
                )}
              </div>

              {/* 行动 */}
              {score >= 60 ? (
                <button
                  onClick={() => setStep("register")}
                  className="px-12 py-5 text-lg font-medium rounded-full transition-colors"
                  style={{ backgroundColor: "#f59e0b", color: "#fff" }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#d97706"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#f59e0b"}
                >
                  注册获取试用资格
                </button>
              ) : (
                <Link
                  href="/theory"
                  className="inline-block px-12 py-5 text-lg font-medium rounded-full transition-colors"
                  style={{ border: "1px solid rgba(120,53,15,0.2)", color: "rgba(120,53,15,0.7)" }}
                >
                  了解更多
                </Link>
              )}
            </div>
          </div>
        )}

        {/* 注册页 */}
        {step === "register" && !submitted && (
          <div className="min-h-screen flex flex-col justify-center px-6">
            <div className="max-w-sm mx-auto w-full">
              <div className="text-center mb-14">
                <h2 className="text-4xl font-medium text-[#78350f] mb-4">
                  注册
                </h2>
                <p className="text-lg text-[#78350f]/40">
                  注册后即可获得两个工具的试用资格
                </p>
              </div>

              <div className="space-y-5">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="手机号"
                  className="w-full px-5 py-5 bg-white border border-[#f59e0b]/10 rounded-2xl text-lg text-[#78350f] placeholder-[#78350f]/20 focus:outline-none focus:border-[#f59e0b]/30 transition-colors"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="密码"
                  className="w-full px-5 py-5 bg-white border border-[#f59e0b]/10 rounded-2xl text-lg text-[#78350f] placeholder-[#78350f]/20 focus:outline-none focus:border-[#f59e0b]/30 transition-colors"
                />
                <p className="text-sm text-[#78350f]/25">
                  请妥善保存密码，目前仅支持密码登录
                </p>
              </div>

              <button
                onClick={handleRegister}
                disabled={!phone || !password}
                className="w-full mt-10 py-5 bg-[#78350f] text-white text-lg font-medium rounded-full hover:bg-[#5c2d0e] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                注册
              </button>

              <p className="text-sm text-[#78350f]/25 text-center mt-5">
                登录即为同意《用户协议》和《隐私政策》
              </p>
            </div>
          </div>
        )}

        {/* 注册成功 */}
        {step === "register" && submitted && (
          <div className="min-h-screen flex flex-col justify-center px-6">
            <div className="max-w-sm mx-auto w-full text-center">
              {/* 成功图标 */}
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[#fef3c7] flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-[#f59e0b]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h2 className="text-4xl font-medium text-[#78350f] mb-3">
                注册成功
              </h2>
              <p className="text-lg text-[#78350f]/40 mb-14">
                欢迎你成为内在结构养育的一员
              </p>

              {/* 工具入口 */}
              <div className="space-y-4">
                <a
                  href="https://wxcl.nzyy.cc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 w-full py-5 px-6 bg-white border border-[#f59e0b]/15 rounded-2xl text-left hover:border-[#f59e0b]/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-[#fef3c7] flex items-center justify-center flex-shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22V12M12 12C12 12 7 9 7 5c0-2.2 2.2-4 5-4s5 1.8 5 4c0 4-5 7-5 7z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-medium text-[#78350f]">
                      望杏成林
                    </p>
                    <p className="text-sm text-[#78350f]/35">
                      亲子成长记录 · 日常滋养
                    </p>
                  </div>
                </a>
                <a
                  href="https://lzti.nzyy.cc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 w-full py-5 px-6 bg-white border border-[#f59e0b]/15 rounded-2xl text-left hover:border-[#f59e0b]/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-[#fef3c7] flex items-center justify-center flex-shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="12" width="4" height="9" rx="1"/>
                      <rect x="10" y="8" width="4" height="13" rx="1"/>
                      <rect x="17" y="4" width="4" height="17" rx="1"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-medium text-[#78350f]">
                      荔枝测评
                    </p>
                    <p className="text-sm text-[#78350f]/35">
                      十大心神能力 · 阶段性评估
                    </p>
                  </div>
                </a>
              </div>

              <Link
                href="/"
                className="inline-block mt-14 text-base text-[#78350f]/30 hover:text-[#78350f]/50 transition-colors"
              >
                返回首页
              </Link>
            </div>
          </div>
        )}
    </div>
  );
}
