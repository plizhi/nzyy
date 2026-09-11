"use client";

import Link from "next/link";
import { useState } from "react";

export default function StoryPage() {
  const [showPosterModal, setShowPosterModal] = useState(false);
  const [posterImageUrl, setPosterImageUrl] = useState("");
  const [isGeneratingPoster, setIsGeneratingPoster] = useState(false);

  async function generatePoster() {
    setIsGeneratingPoster(true);

    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent("https://nzyy.cc/story")}`;
    const qrImg = new Image();
    qrImg.crossOrigin = "anonymous";
    qrImg.src = qrUrl;
    await new Promise((resolve) => {
      qrImg.onload = resolve;
      qrImg.onerror = resolve;
    });

    await document.fonts.ready;

    try {
      const canvas = document.createElement("canvas");
      canvas.width = 750;
      canvas.height = 1334;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("无法获取 Canvas 上下文");

      // 背景渐变
      const gradient = ctx.createLinearGradient(0, 0, 0, 1334);
      gradient.addColorStop(0, "#FBF7F1");
      gradient.addColorStop(1, "#F3ECE3");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 750, 1334);

      ctx.textAlign = "center";

      // 顶部品牌名
      ctx.font = '500 24px "Noto Sans SC", sans-serif';
      ctx.fillStyle = "#806E66";
      ctx.fillText("@内在结构养育", 375, 110);

      // 标题
      ctx.font = '600 32px "Noto Serif SC", serif';
      ctx.fillStyle = "#C76D4A";
      ctx.fillText("朋大大自述", 375, 155);

      // 引言
      ctx.font = '400 28px "Noto Serif SC", serif';
      ctx.fillStyle = "#3E2C2C";
      ctx.fillText("女儿去清华报到的那天，", 375, 380);
      ctx.fillText("天色明朗，阳光正好。", 375, 420);

      // 核心金句
      ctx.font = '500 36px "Noto Serif SC", serif';
      ctx.fillStyle = "#3E2C2C";

      // 换行处理长句
      const mainQuote = "每个孩子天生自带内在力量";
      const subQuote1 = "从不缺少成长的能力";
      const subQuote2 = "只是缺少被看见、被理解、";
      const subQuote3 = "被科学正向引导";

      ctx.fillText(mainQuote, 375, 600);

      ctx.font = '400 32px "Noto Sans SC", sans-serif';
      ctx.fillStyle = "#806E66";
      ctx.fillText(subQuote1, 375, 650);

      ctx.fillStyle = "#C76D4A";
      ctx.fillText(subQuote2, 375, 710);
      ctx.fillText(subQuote3, 375, 755);

      // 虚线边框引言框
      ctx.strokeStyle = "#EAE0D5";
      ctx.setLineDash([5, 5]);
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(100, 850, 550, 180, 16);
      ctx.stroke();
      ctx.setLineDash([]);

      // 引言框内文字
      ctx.font = '400 22px "Noto Sans SC", sans-serif';
      ctx.fillStyle = "#806E66";
      ctx.fillText("比起拔尖的分数，健全、稳定、坚韧的", 375, 900);
      ctx.fillText("内在人格，才是孩子一生的核心竞争力。", 375, 935);

      // 二维码
      ctx.drawImage(qrImg, 275, 1100, 200, 200);

      // 底部文字
      ctx.font = '400 18px "Noto Sans SC", sans-serif';
      ctx.fillStyle = "#806E66";
      ctx.fillText("长按识别二维码，了解更多", 375, 1290);

      const dataURL = canvas.toDataURL("image/jpeg", 0.85);
      setPosterImageUrl(dataURL);
      setShowPosterModal(true);
    } catch (err) {
      console.error("海报生成失败:", err);
      alert("海报生成失败，请重试");
    } finally {
      setIsGeneratingPoster(false);
    }
  }

  function downloadPoster() {
    if (posterImageUrl) {
      const link = document.createElement("a");
      link.download = "朋大大自述.jpg";
      link.href = posterImageUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Noto Sans SC', sans-serif; background-color: #FBF7F1; color: #3E2C2C; line-height: 2; }
        .reading-container { max-width: 800px; margin: 0 auto; padding: 40px 24px 80px; }
        .chapter-num {
            font-family: 'Noto Serif SC', serif;
            font-size: 4.5rem;
            font-weight: 700;
            color: rgba(199, 109, 74, 0.15);
            line-height: 1;
            margin-bottom: 12px;
            display: block;
        }
        .chapter-title {
            font-family: 'Noto Serif SC', serif;
            font-size: 1.5rem;
            font-weight: 600;
            color: #3E2C2C;
            margin-bottom: 28px;
        }
        p { font-size: 1.05rem; color: #5C4842; margin-bottom: 24px; text-align: justify; }
        .quote-block {
            background: #FFFCF7;
            border-left: 4px solid #C76D4A;
            padding: 20px 28px;
            margin: 32px 0;
            border-radius: 0 12px 12px 0;
            box-shadow: 0 4px 20px rgba(62, 44, 44, 0.03);
        }
        .quote-text {
            font-family: 'Noto Serif SC', serif;
            font-size: 1.15rem;
            color: #3E2C2C;
            font-weight: 600;
            line-height: 1.8;
            margin: 0;
        }
        .divider { height: 1px; background: #EAE0D5; margin: 60px 0; }
        .back-link { color: #806E66; text-decoration: none; font-size: 0.9rem; margin-bottom: 40px; display: inline-block; transition: color 0.3s; }
        .back-link:hover { color: #C76D4A; }
        .cta-btn {
            display: block;
            text-align: center;
            background: #C76D4A;
            color: #FFFCF7;
            padding: 16px 0;
            border-radius: 50px;
            text-decoration: none;
            font-family: 'Noto Serif SC', serif;
            font-size: 1.1rem;
            font-weight: 600;
            margin-top: 16px;
            transition: all 0.3s ease;
            cursor: pointer;
            border: none;
            box-shadow: 0 8px 30px rgba(199, 109, 74, 0.15);
        }
        .cta-btn:hover { background: #B85F3E; transform: translateY(-3px); box-shadow: 0 12px 36px rgba(199, 109, 74, 0.25); }
        .cta-btn.secondary { background: #FFFCF7; color: #3E2C2C; border: 1px solid #EAE0D5; }
        .cta-btn.secondary:hover { border-color: #C76D4A; color: #C76D4A; background: #FFFCF7; }
        @media (max-width: 768px) {
            .chapter-num { font-size: 3.5rem; }
            p { font-size: 1rem; }
            .quote-text { font-size: 1.05rem; }
        }
      `}</style>

      <div className="reading-container">
        <Link href="/" className="back-link">← 返回首页</Link>

        <div style={{ textAlign: 'center', marginBottom: '60px', paddingTop: '20px' }}>
          <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: '2.4rem', fontWeight: 700, color: '#3E2C2C', marginBottom: '24px' }}>朋大大自述</h1>
          <div style={{ width: '40px', height: '2px', background: '#C76D4A', margin: '0 auto' }}></div>
        </div>

        <p style={{ fontSize: '1.1rem', color: '#3E2C2C', textAlign: 'center', fontStyle: 'italic', marginBottom: '40px' }}>
          女儿去清华报到的那天，天色明朗，阳光正好。
        </p>

        <p>偌大的校园人声鼎沸，一排排红色迎新横幅格外醒目。路边挤满了送学的家长，顶着暖阳驻足凝望，年少的孩子背着行囊，步履坚定地走进校园。整片空气里，都裹挟着少年奔赴新程的热烈与欣喜。</p>
        <p>她独自入校办理报到手续，我和妻子慢慢走在清华园里，静静感受这份专属的成长时刻，温柔地目送、安静地陪伴。看着一张张朝气蓬勃的脸庞，我们心底，也满是由衷的欢喜与动容。</p>
        <p>暖融融的阳光落在肩头，恍惚间，我忽然想起多年前，同样一个阳光明媚的午后，藏着她逆袭成长的全部伏笔。</p>

        <div className="divider"></div>

        {/* 章节1 */}
        <div>
          <span className="chapter-num">01</span>
          <h2 className="chapter-title">三个字的底气：不回头</h2>
          <p>那是孩子刚上初三，开学不久学校举办中考誓师大会。</p>
          <p>现场有一个特别的环节：家长在孩子的后背，写下一句寄语，送给即将奔赴中考战场的孩子。环顾四周，绝大多数家长写下的都是&quot;努力拼搏&quot;&quot;奋发向上&quot;这类常见的期许。</p>
          <p>站在女儿身后，我想起她一路的成长和未来无限的可能，落笔写下简简单单三个字：不回头。</p>
          <p>写下的那一刻，她并不知道我写的是什么。但不久她得知后，内心瞬间被触动。她分明地感受到来自家人的爱和支持，那份力量是她过去成长的牵引，也是她未来一往无前的后盾。她说，往后无数个难熬的时刻，都会被这三个字鼓舞。</p>

          <div className="quote-block">
            <p className="quote-text">这短短三字，她记了很多年。无论顺境逆境，都有父母的爱和支持，那便是她一往无前的底气。</p>
          </div>

          <p>坦白说，初三之前的她，从来都不是传统意义上的学霸。</p>
          <p>曾经有一次，老师路过人群，随口一句玩笑：&quot;学霸们都在这儿干嘛呢？&quot;同行的真正学霸还会笑着打趣她：&quot;你看，老师都把你当学霸了。&quot;</p>
          <p>当时的她心里清楚自己的成绩并不拔尖，却从不自卑、也不内耗，依旧坦然自在、踏实成长。直到中考以海淀前400名的成绩考入六小强；再后来更以裸分成绩上岸清华。</p>
          <p>女儿不算天赋型学霸，但这些年，我们始终顺着她的成长规律养育，不揠苗助长、不强行施压，给足她自主选择、自主试错的空间，让她做自己人生的主人。</p>
        </div>

        <div className="divider"></div>

        {/* 章节2 */}
        <div>
          <span className="chapter-num">02</span>
          <h2 className="chapter-title">最好的养育：克制干预，允许成长</h2>
          <p>小学一年级，她第一次拥有了专属零花钱。有一天放学，她执意要花光当月所有零花钱，给车上的同学买零食。我追问缘由，她坦然告诉我，是同学和她约定，她告诉了同学们她有几百块零花钱，谁想吃什么她可以给大家买！于是大家纷纷&quot;下单&quot;，有个同班车的高年级男生竟然一次性订了六盒薯片！</p>
          <p>那一刻，我的第一反应是：孩子被占便宜欺负了。</p>
          <p>心底本能地想要制止、想要说教，甚至想要替她出面解决问题。</p>
          <p>回家的路上，我一直在自我拉扯：眼睁睁看着孩子吃亏、被人占便宜，做家长的真的能坦然释怀吗？但我硬生生忍住了。</p>
          <p>当天晚上我和妻子反复斟酌、反复自问：家长到底该不该出手干预？最终我们达成共识——</p>

          <div className="quote-block">
            <p className="quote-text">克制干预，尊重孩子的选择，允许孩子在小事里成长。</p>
          </div>

          <p>后来我再也没有追问过这件事的始末，也没有刻意评判对错。因为我始终坚信：成长从来不是一路顺遂、从不吃亏，而是让孩子拥有自主决策、自主复盘、自主成长的机会。</p>
          <p>家长最该做的，从不是替孩子扫清所有障碍、规避所有挫折，而是学会放手，让她在经历中蜕变，在选择中成长。</p>
        </div>

        <div className="divider"></div>

        {/* 章节3 */}
        <div>
          <span className="chapter-num">03</span>
          <h2 className="chapter-title">高考逆袭：清零过往，只看终局</h2>
          <p>真正的挑战，出现在高三这至关重要的一年。</p>
          <p>高三上学期海淀期中、海淀期末，下学期一模、二模，连续几次核心大考，她的成绩都不尽如人意。</p>
          <p>那段时间，她深陷高压内耗，情绪起伏极大：时而烦躁焦虑、时而低落沉默，很多时候宁愿独自独处，也不愿倾诉心事。看着紧绷压抑的她，我们满心心疼，却从不对她施压、从不指责否定。</p>
          <p>二模结束后，我们做了一次深度谈心。</p>

          <div className="quote-block">
            <p className="quote-text">我告诉她：&quot;你立志裸分冲刺清华，就要记住一个核心道理——高考只认最后一次成绩。考前所有的模考分数、所有的失利遗憾，全部不作数，全部可以清零。与此同时，那些在考前发现的问题，却都是可以让你在真实的高考中去预防的、提前准备的部分。&quot;所以，过去的分数不代表什么，但是反映的问题却可以让我们优化分数。</p>
          </div>

          <p>这些话，她应该是听进了心里。</p>
          <p>她于是调整心态、清空负面情绪，沉下心重新复盘查漏，稳稳投入最后的冲刺复习。最终高考，她突破瓶颈，考出了自己有史以来的最佳成绩，圆梦清华。</p>
          <p>一路走来我深深笃定：比起拔尖的分数，健全、稳定、坚韧的内在人格，才是孩子一生的核心竞争力。</p>
        </div>

        <div className="divider"></div>

        {/* 章节4 */}
        <div>
          <span className="chapter-num">04</span>
          <h2 className="chapter-title">最高级的成长：持续向上，终身精进</h2>
          <p>我为女儿骄傲的，从来不是&quot;考上清华&quot;这一个结果。</p>
          <p>刚入清华的她，并非一路领先。大一上学期，全系150余人，她的绩点排名仅在90多名。后续院系又接受一些其他专业的转系生，全系人数增至180多人。孩子在大三保研预推免中，她的综合排名排到了全系第7。</p>
          <p>没有人知道，她在无人看见的地方默默扎根、自律成长。大二下学期，她凭借日复一日的坚持，全科绩点逆袭冲到全系第一，先后斩获国家奖学金、校级三好学生、优秀共青团员等诸多荣誉。</p>
          <p>但我真正引以为傲的，从来不是全系前茅的名次与光鲜的荣誉证书。</p>
          <p>我最欣慰的是，她永远在向上生长，永远在探索属于自己的人生节奏与成长道路。</p>

          <div className="quote-block">
            <p className="quote-text">清华，只是她成长路上的一个美好站点，而非人生终极目的。真正可贵的，是她长成了内心稳定、情绪自洽、坚韧自律、能够终身成长的内在品质。</p>
          </div>
        </div>

        <div className="divider"></div>

        {/* 章节5 */}
        <div>
          <span className="chapter-num">05</span>
          <h2 className="chapter-title">沉淀养育经验，陪伴更多孩子发光</h2>
          <p>多年深耕家庭教育，陪伴女儿一路成长、一路复盘，我和妻子沉淀出一套完整、落地的青少年养育体系。</p>
          <p>结合无数真实育儿实战经验，我们打磨出专属青少年成长测评产品，聚焦专注度、学习心态、学习韧性三大核心维度，精准看透孩子真实的学习状态、隐藏的成长问题与内在优势。</p>
          <p>不同于泛泛的育儿理论，我们所有的方法、方案、陪伴指导，全部源自真实的养育实战与名校学生的成长规律。</p>
          <p>我始终相信：每个孩子天生自带内在力量，从不缺少成长的能力，只是缺少被看见、被理解、被科学正向引导。</p>
          <p>深耕家庭教育多年，身边很多朋友、家长都习惯喊我「朋大大」。如果你也在陪伴孩子成长、深陷育儿困惑，我愿用多年实战养育经验，陪你读懂孩子、科学育儿，守护每一个少年的专属光芒。</p>
        </div>

        <div style={{ marginTop: '60px' }}>
          <Link href="/" className="cta-btn">对齐我的育儿初心</Link>
          <button
            className="cta-btn secondary"
            style={{ marginTop: '12px', width: '100%', cursor: 'pointer', border: 'none' }}
            onClick={generatePoster}
            disabled={isGeneratingPoster}
          >
            {isGeneratingPoster ? '生成中...' : '生成分享海报'}
          </button>
        </div>
      </div>

      {/* 海报弹窗 */}
      {showPosterModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px',
          }}
          onClick={() => setShowPosterModal(false)}
        >
          <div style={{ position: 'fixed', top: 20, right: 20, display: 'flex', gap: 10 }}>
            <button
              onClick={(e) => { e.stopPropagation(); downloadPoster(); }}
              style={{ padding: '8px 16px', background: '#C76D4A', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontSize: 14 }}
            >
              保存到相册
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setShowPosterModal(false); }}
              style={{ padding: '8px 16px', background: '#333', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontSize: 20 }}
            >
              ×
            </button>
          </div>
          {posterImageUrl && (
            <img
              src={posterImageUrl}
              alt="海报"
              style={{
                maxWidth: '90vw',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: 8,
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              }}
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </>
  );
}
