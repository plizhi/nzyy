"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import {
  trackIntentStart,
  trackIntentSubmit,
  trackIntentSkip,
  trackScoreComplete,
  trackFeelingSubmit,
  trackReportGenerate,
  trackPosterGenerate,
  trackPosterShare,
} from "@/lib/tracking";
import {
  saveIntentData,
  getIntentData,
  clearIntentData,
  IntentData,
} from "@/lib/storage";
import {
  matchKeywords,
  calculateResonance,
  extractUniquePerspective,
} from "@/lib/keywords";

type Step = 1 | 2 | 3 | 4 | 5;

// 成全孩子五层次
const fiveLayers = [
  {
    title: "永葆对世界的热情与好奇",
    desc: "生命力的源泉。保护孩子眼里探索的光，远比塞给他标准答案更重要。",
  },
  {
    title: "识风险，知进退",
    desc: "内在的安全雷达。不是退缩，而是长出判断边界、保护自己的智慧。",
  },
  {
    title: "面对困难时唤起内心的勇气与力量",
    desc: "面对逆境的脊梁。困难只是唤醒勇气的契机，而非摧毁他的理由。",
  },
  {
    title: "不辜负与生俱来的天赋与资源",
    desc: "对生命独特性的敬畏。让生命不是模仿他人，而是绽放自己的光彩。",
  },
  {
    title: "享受其中",
    desc: "贯穿一生的幸福感底色。能从过程本身获得快乐与满足。",
  },
];

// 彼此滋养三层次
const nourishLayers = [
  {
    level: "彼此看见",
    core: "我懂你这个人",
    scene:
      "孩子还没开口，家长已经从他躲闪的眼神里读出了不安，先一步给了他一个拥抱。",
  },
  {
    level: "彼此理解",
    core: "我接受你行为背后的逻辑",
    scene:
      '孩子因为失败而发脾气，家长没有指责，而是说："我知道你很想要那个结果。"',
  },
  {
    level: "彼此支持",
    core: "我愿意用心理能量为你加持",
    scene:
      '孩子犹豫着要不要尝试新事物，家长握住他的手说："我陪着你。"',
  },
];

// 核心理念展示
const coreValues = [
  {
    category: "成全孩子",
    items: [
      "永葆对世界的热情与好奇",
      "识风险，知进退",
      "面对困难时唤起内心的勇气与力量",
      "不辜负与生俱来的天赋与资源",
      "享受其中",
    ],
  },
  {
    category: "彼此滋养",
    items: ["彼此看见", "彼此理解", "彼此支持"],
  },
];

// 评分描述
function getScoreLabel(score: number): string {
  if (score <= 20) return "几乎没什么共鸣";
  if (score <= 40) return "有一些共鸣";
  if (score <= 60) return "共鸣挺多的";
  if (score <= 80) return "很有共鸣";
  return "深深共鸣";
}

// 生成 UUID
function generateUUID(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default function IntentPage() {
  const [step, setStep] = useState<Step>(1);
  const [intentText, setIntentText] = useState("");
  const [score, setScore] = useState(50);
  const [feelingText, setFeelingText] = useState("");
  const [reportID, setReportID] = useState("");
  const [resonance, setResonance] = useState(0);
  const [matchedTags, setMatchedTags] = useState<string[]>([]);
  const [uniquePerspective, setUniquePerspective] = useState<string | null>(null);
  const [skippedStep1, setSkippedStep1] = useState(false);
  const [skippedStep4, setSkippedStep4] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [posterGenerated, setPosterGenerated] = useState(false);

  const allText = (intentText + " " + feelingText).trim();

  const goToStep2 = () => {
    trackIntentStart("初心页");
    setStep(2);
  };

  const submitIntent = () => {
    trackIntentSubmit(intentText.length);
    saveIntentData({ 初心文本: intentText });
    setStep(3);
  };

  const skipStep1 = () => {
    trackIntentSkip();
    setSkippedStep1(true);
    setStep(3);
  };

  const submitScore = () => {
    trackScoreComplete(score);
    saveIntentData({ 共鸣评分: score });
    setStep(4);
  };

  const submitFeeling = () => {
    trackFeelingSubmit(feelingText.length);
    saveIntentData({ 感受文本: feelingText });

    const id = generateUUID();
    const matched = matchKeywords(allText);
    const tags = matched.map((m) => m.subCategory).slice(0, 6);
    const unique = extractUniquePerspective(feelingText, tags);
    const res = calculateResonance(score, intentText, feelingText);

    setReportID(id);
    setMatchedTags(tags);
    setUniquePerspective(unique);
    setResonance(res);

    saveIntentData({ 报告ID: id, 共鸣度: res });
    trackReportGenerate(res, skippedStep1, id);

    setStep(5);
  };

  const skipStep4 = () => {
    setSkippedStep4(true);
    const id = generateUUID();
    const res = calculateResonance(score, intentText, "");
    setReportID(id);
    setResonance(res);
    saveIntentData({ 报告ID: id, 共鸣度: res });
    trackReportGenerate(res, skippedStep1, id);
    setStep(5);
  };

  const generatePoster = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 设置海报尺寸 400x600
    canvas.width = 400;
    canvas.height = 600;

    // 背景
    ctx.fillStyle = "#FFFBF5";
    ctx.fillRect(0, 0, 400, 600);

    // 顶部装饰条
    ctx.fillStyle = "#f59e0b";
    ctx.fillRect(0, 0, 400, 8);

    // 标题
    ctx.fillStyle = "#78350f";
    ctx.font = "bold 20px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("我的育儿初心", 200, 50);

    // 金句
    ctx.font = "12px sans-serif";
    ctx.fillStyle = "#78350f";
    ctx.fillText("每个父母的初心，都值得被认真对待。", 200, 75);

    // 分隔线
    ctx.strokeStyle = "#f59e0b";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(40, 90);
    ctx.lineTo(360, 90);
    ctx.stroke();

    // 初心内容
    const displayText = skippedStep1
      ? "每个父母的初心，都值得被认真对待。"
      : intentText || "每个父母的初心，都值得被认真对待。";

    ctx.font = "14px sans-serif";
    ctx.fillStyle = "#78350f";
    ctx.textAlign = "left";

    // 文字换行
    const lines = [];
    let currentLine = "";
    const maxWidth = 320;
    const lineHeight = 22;
    const startY = 120;

    for (const char of displayText) {
      const testLine = currentLine + char;
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = char;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) lines.push(currentLine);

    lines.slice(0, 8).forEach((line, i) => {
      ctx.fillText(line, 40, startY + i * lineHeight);
    });

    // 共鸣度标签
    const tagY = 320;
    ctx.font = "bold 14px sans-serif";
    ctx.fillStyle = "#f59e0b";
    ctx.textAlign = "center";
    ctx.fillText(`初心共鸣度`, 200, tagY);

    // 共鸣度数字
    ctx.font = "bold 48px sans-serif";
    ctx.fillStyle = "#78350f";
    ctx.fillText(`${resonance}%`, 200, tagY + 50);

    // 标签
    if (matchedTags.length > 0) {
      ctx.font = "11px sans-serif";
      ctx.fillStyle = "#92400e";
      const tagsText = matchedTags.join(" · ");
      ctx.fillText(tagsText, 200, tagY + 80);
    }

    // 独特视角
    if (uniquePerspective) {
      ctx.font = "11px sans-serif";
      ctx.fillStyle = "#78350f";
      ctx.textAlign = "left";
      const uniqueLines = [];
      let uLine = "";
      for (const char of uniquePerspective) {
        const test = uLine + char;
        if (ctx.measureText(test).width > 320) {
          uniqueLines.push(uLine);
          uLine = char;
        } else {
          uLine = test;
        }
      }
      if (uLine) uniqueLines.push(uLine);
      uniqueLines.slice(0, 2).forEach((l, i) => {
        ctx.fillText(l, 40, tagY + 105 + i * 16);
      });
    }

    // 底部二维码占位
    ctx.fillStyle = "#fef3c7";
    ctx.fillRect(150, 470, 100, 100);
    ctx.fillStyle = "#78350f";
    ctx.font = "10px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("扫码写下你的", 200, 505);
    ctx.fillText("育儿初心", 200, 520);

    // 底部金句
    ctx.font = "10px sans-serif";
    ctx.fillStyle = "#78350f";
    ctx.fillText("内在结构养育", 200, 565);

    trackPosterGenerate(reportID);
    setPosterGenerated(true);
  }, [intentText, skippedStep1, resonance, matchedTags, uniquePerspective, reportID]);

  const downloadPoster = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `我的育儿初心-${reportID}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    trackPosterShare("下载图片");
  };

  const copyShareText = () => {
    const text = `我刚测了我和【内在结构养育】的初心共鸣度，高达${resonance}%！你也来试试看看我们是否同频？`;
    navigator.clipboard.writeText(text);
    trackPosterShare("复制文案");
  };

  return (
    <div className="min-h-screen">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-2xl font-bold text-[#78350f] mb-2 text-center">
          育儿初心
        </h1>
        <p className="text-center text-[#78350f]/60 mb-8">
          养育的北极星
        </p>

        {/* 步骤指示器 */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[1, 2, 3, 4, 5].map((s) => (
            <div
              key={s}
              className={`w-2 h-2 rounded-full transition-colors ${
                s === step ? "bg-[#f59e0b]" : s < step ? "bg-[#f59e0b]/40" : "bg-[#78350f]/20"
              }`}
            />
          ))}
        </div>

        {/* 步骤1 & 2: 内容展示 */}
        {(step === 1 || step === 2) && (
          <div className="max-w-2xl mx-auto">
            {/* 成全孩子 */}
            <div className="mb-10">
              <h2 className="text-lg font-semibold text-[#78350f] mb-4">
                成全孩子——生命的五个向度
              </h2>
              <div className="space-y-3">
                {fiveLayers.map((layer, i) => (
                  <div
                    key={i}
                    className="p-4 bg-white rounded-lg border border-[#f59e0b]/10"
                  >
                    <h3 className="font-medium text-[#78350f] mb-1">
                      {i + 1}. {layer.title}
                    </h3>
                    <p className="text-sm text-[#78350f]/60">{layer.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 彼此滋养 */}
            <div className="mb-10">
              <h2 className="text-lg font-semibold text-[#78350f] mb-4">
                彼此滋养——看见 · 理解 · 支持
              </h2>
              <div className="space-y-3">
                {nourishLayers.map((n, i) => (
                  <div
                    key={i}
                    className="p-4 bg-white rounded-lg border border-[#f59e0b]/10"
                  >
                    <h3 className="font-medium text-[#f59e0b] mb-1">
                      {n.level}：{n.core}
                    </h3>
                    <p className="text-sm text-[#78350f]/60 italic">
                      "{n.scene}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {step === 1 && (
              <div className="text-center space-y-3">
                <button
                  onClick={goToStep2}
                  className="w-full sm:w-auto px-8 py-3 bg-[#f59e0b] text-white font-medium rounded-lg hover:bg-[#d97706] transition-colors"
                >
                  开始初心共鸣
                </button>
              </div>
            )}
          </div>
        )}

        {/* 步骤2: 写下初心 */}
        {step === 2 && (
          <div className="max-w-xl mx-auto">
            <div className="mb-6 p-4 bg-[#fef3c7] rounded-lg border border-[#f59e0b]/20">
              <p className="text-xs text-[#78350f]/60">
                您的输入仅用于生成本次报告。我们不会将您的初心内容上传至服务器或用于其他用途。关闭页面后，本次内容将自动清除。
              </p>
            </div>
            <h2 className="text-lg font-semibold text-[#78350f] mb-4">
              在开始之前，先问问自己——你的育儿初心，是什么？
            </h2>
            <textarea
              value={intentText}
              onChange={(e) => setIntentText(e.target.value)}
              placeholder="我希望孩子成为……对我来说，养育最重要的是……"
              className="w-full h-40 p-4 bg-white rounded-lg border border-[#f59e0b]/20 text-[#78350f] placeholder-[#78350f]/30 resize-none focus:outline-none focus:border-[#f59e0b]/50"
            />
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <button
                onClick={submitIntent}
                className="px-6 py-2.5 bg-[#f59e0b] text-white font-medium rounded-lg hover:bg-[#d97706] transition-colors"
              >
                写下我的初心
              </button>
              <button
                onClick={skipStep1}
                className="px-6 py-2.5 border border-[#f59e0b] text-[#f59e0b] font-medium rounded-lg hover:bg-[#fef3c7] transition-colors"
              >
                先跳过
              </button>
            </div>
          </div>
        )}

        {/* 步骤3: 展示初心 + 评分 */}
        {step === 3 && (
          <div className="max-w-xl mx-auto">
            <h2 className="text-lg font-semibold text-[#78350f] mb-4 text-center">
              内在结构养育的育儿初心
            </h2>
            <div className="space-y-4 mb-8">
              {coreValues.map((group) => (
                <div key={group.category} className="p-4 bg-white rounded-lg border border-[#f59e0b]/10">
                  <h3 className="text-sm font-medium text-[#f59e0b] mb-2">
                    {group.category}
                  </h3>
                  <ul className="space-y-1">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-[#78350f]/70">
                        · {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <blockquote className="border-l-4 border-[#f59e0b] pl-4 mb-8 italic text-[#78350f]/70 text-sm">
              你对待孩子的方式，就是孩子内心世界的建筑图纸。
            </blockquote>

            <h2 className="text-lg font-semibold text-[#78350f] mb-4 text-center">
              看完这些，你感到它与你的初心之间，有多少共鸣？
            </h2>
            <div className="p-6 bg-white rounded-lg border border-[#f59e0b]/10 mb-6">
              <input
                type="range"
                min="0"
                max="100"
                value={score}
                onChange={(e) => setScore(Number(e.target.value))}
                className="w-full accent-[#f59e0b]"
              />
              <div className="flex justify-between text-xs text-[#78350f]/40 mt-2">
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>
              <p className="text-center mt-3 text-[#f59e0b] font-medium">
                {score} — {getScoreLabel(score)}
              </p>
            </div>
            <div className="text-center">
              <button
                onClick={submitScore}
                className="px-8 py-3 bg-[#f59e0b] text-white font-medium rounded-lg hover:bg-[#d97706] transition-colors"
              >
                接下来，说说你的理解或感受
              </button>
            </div>
          </div>
        )}

        {/* 步骤4: 表达感受 */}
        {step === 4 && (
          <div className="max-w-xl mx-auto">
            <h2 className="text-lg font-semibold text-[#78350f] mb-4">
              看完这套育儿初心，你有什么想说的？
            </h2>
            <textarea
              value={feelingText}
              onChange={(e) => setFeelingText(e.target.value)}
              placeholder='哪些地方让你感到"我也是这样想的"？哪些地方让你有新的启发？还有什么是你一直很看重，但这里没有提到的？'
              className="w-full h-40 p-4 bg-white rounded-lg border border-[#f59e0b]/20 text-[#78350f] placeholder-[#78350f]/30 resize-none focus:outline-none focus:border-[#f59e0b]/50"
            />
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <button
                onClick={submitFeeling}
                className="px-6 py-2.5 bg-[#f59e0b] text-white font-medium rounded-lg hover:bg-[#d97706] transition-colors"
              >
                生成我的初心报告
              </button>
              <button
                onClick={skipStep4}
                className="px-6 py-2.5 border border-[#f59e0b] text-[#f59e0b] font-medium rounded-lg hover:bg-[#fef3c7] transition-colors"
              >
                跳过
              </button>
            </div>
          </div>
        )}

        {/* 步骤5: 报告 */}
        {step === 5 && (
          <div className="max-w-xl mx-auto">
            <h2 className="text-xl font-bold text-[#78350f] mb-6 text-center">
              初心共鸣报告
            </h2>

            <div className="p-6 bg-white rounded-xl border border-[#f59e0b]/20 mb-6">
              <p className="text-center text-sm text-[#78350f]/60 mb-4">
                你的初心与内在结构养育的初心
              </p>
              <p className="text-center text-4xl font-bold text-[#f59e0b] mb-2">
                {resonance}%
              </p>
              <p className="text-center text-sm text-[#78350f]/50">
                综合共鸣度
              </p>
            </div>

            {matchedTags.length > 0 && (
              <div className="p-5 bg-[#fef3c7]/50 rounded-lg border border-[#f59e0b]/10 mb-4">
                <h3 className="text-sm font-medium text-[#f59e0b] mb-3">
                  共鸣之处
                </h3>
                <div className="flex flex-wrap gap-2">
                  {matchedTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-white text-[#78350f] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {uniquePerspective && (
              <div className="p-5 bg-white rounded-lg border border-[#f59e0b]/10 mb-4">
                <h3 className="text-sm font-medium text-[#78350f] mb-2">
                  你的独特视角
                </h3>
                <p className="text-sm text-[#78350f]/70 italic">
                  "{uniquePerspective}……"
                </p>
                <p className="text-xs text-[#78350f]/40 mt-2">
                  这是你带来的独特视角，谢谢你让我们看见这一点。
                </p>
              </div>
            )}

            <div className="p-5 bg-white rounded-lg border border-[#f59e0b]/10 mb-6">
              <h3 className="text-sm font-medium text-[#78350f] mb-2">
                内在结构养育的独特视角
              </h3>
              <p className="text-sm text-[#78350f]/70">
                这套方法论关注的是孩子内在世界的整体构建——通过六大结构的平衡发展与十大心神能力的阶段性地呵护，帮助孩子成为一个内在稳固、有力量、能享受生命的人。
              </p>
            </div>

            <div className="text-center space-y-3">
              {!posterGenerated ? (
                <button
                  onClick={generatePoster}
                  className="w-full px-8 py-3 bg-[#f59e0b] text-white font-medium rounded-lg hover:bg-[#d97706] transition-colors"
                >
                  生成我的初心海报
                </button>
              ) : (
                <div className="space-y-3">
                  <canvas
                    ref={canvasRef}
                    className="mx-auto rounded-lg shadow-lg max-w-full"
                  />
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={downloadPoster}
                      className="px-6 py-2.5 bg-[#f59e0b] text-white text-sm font-medium rounded-lg hover:bg-[#d97706] transition-colors"
                    >
                      保存图片
                    </button>
                    <button
                      onClick={copyShareText}
                      className="px-6 py-2.5 border border-[#f59e0b] text-[#f59e0b] text-sm font-medium rounded-lg hover:bg-[#fef3c7] transition-colors"
                    >
                      复制分享文案
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 底部导航 */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-[#f59e0b]/10">
          <Link href="/theory" className="text-sm text-[#f59e0b] hover:underline">
            ← 理论
          </Link>
          <Link href="/" className="text-sm text-[#78350f]/60 hover:text-[#f59e0b]">
            返回首页
          </Link>
          <Link href="/tools" className="text-sm text-[#f59e0b] hover:underline">
            落地工具 →
          </Link>
        </div>
      </section>
    </div>
  );
}
