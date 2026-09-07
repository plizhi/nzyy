"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function StoryPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      {/* 顶部导航 */}
      <div className="sticky top-0 bg-[#FFFBF5]/95 backdrop-blur-sm border-b border-[#f59e0b]/10 z-10">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-sm text-[#78350f]/60 hover:text-[#f59e0b] transition-colors">
            ← 返回
          </Link>
          <span className="text-xs text-[#78350f]/30">朋大大自述</span>
        </div>
      </div>

      {/* 内容 */}
      <article className="max-w-2xl mx-auto px-6 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-2xl sm:text-3xl text-[#78350f] font-medium tracking-tight mb-4">
            朋大大｜IP走心自述
          </h1>
          <p className="text-sm text-[#78350f]/40">
            女儿去清华报到的那天，天色明朗，阳光正好。
          </p>
        </header>

        <div className="space-y-12">
          {/* 开篇 */}
          <section>
            <p className="text-base text-[#78350f]/80 leading-relaxed">
              偌大的校园人声鼎沸，一排排红色迎新横幅格外醒目。路边挤满了送学的家长，顶着暖阳驻足凝望，年少的孩子背着行囊，步履坚定地走进校园。整片空气里，都裹挟着少年奔赴新程的热烈与欣喜。
            </p>
            <p className="text-base text-[#78350f]/80 leading-relaxed mt-4">
              她独自入校办理报到手续，我和妻子慢慢走在清华园里，静静感受这份专属的成长时刻，温柔地目送、安静地陪伴。看着一张张朝气蓬勃的脸庞，我们心底也满是由衷的欢喜与动容。
            </p>
            <p className="text-base text-[#78350f]/80 leading-relaxed mt-4">
              暖融融的阳光落在肩头，恍惚间，我忽然想起多年前，同样一个阳光明媚的午后，藏着她逆袭成长的全部伏笔。
            </p>
          </section>

          {/* 01 */}
          <section>
            <h2 className="text-sm text-[#f59e0b] font-medium tracking-widest uppercase mb-4">
              01 三个字的底气：不回头
            </h2>
            <div className="space-y-4">
              <p className="text-base text-[#78350f]/80 leading-relaxed">
                初三开学不久，学校举办中考誓师大会。现场有一个特别的环节：家长在孩子的后背，写下一句寄语，送给即将奔赴中考战场的孩子。环顾四周，绝大多数家长写下的都是"努力拼搏""奋发向上"这类常见的期许。
              </p>
              <p className="text-base text-[#78350f]/80 leading-relaxed">
                站在女儿身后，我落笔写下简简单单三个字：不回头。
              </p>
              <p className="text-base text-[#78350f]/80 leading-relaxed">
                写下的那一刻，她并未察觉。很久之后她偶然发现，她说，看到这三个字的瞬间，内心瞬间被触动，往后无数个难熬的时刻，都被这三个字深深鼓舞。这短短三字，她记了很多年。每一次迷茫、疲惫的时候想起，就知道身后永远有父母托底，永远有退路，更有一往无前的勇气。
              </p>
              <p className="text-base text-[#78350f]/80 leading-relaxed">
                坦白说，初三之前的她，从来都不是传统意义上的学霸。曾经有一次，老师路过人群，随口一句玩笑："学霸们都在这儿干嘛呢？"同行的真正学霸笑着打趣她："你看，老师都把你当学霸了。"她心里清楚自己的成绩并不拔尖，却从不自卑、从不内耗，依旧坦然自在、踏实成长。这份松弛的心态，是我们从小刻意守护的底气。
              </p>
            </div>
          </section>

          {/* 02 */}
          <section>
            <h2 className="text-sm text-[#f59e0b] font-medium tracking-widest uppercase mb-4">
              02 最好的养育：克制干预，允许成长
            </h2>
            <div className="space-y-4">
              <p className="text-base text-[#78350f]/80 leading-relaxed">
                我的女儿不算天赋型学霸，但这些年，我们始终顺着她的成长规律养育，不揠苗助长、不强行施压，给足她自主选择、自主试错的空间，让她做自己人生的主人。
              </p>
              <p className="text-base text-[#78350f]/80 leading-relaxed">
                小学一年级，她第一次拥有了专属零花钱。有一天，她执意要花光当月所有零花钱，给全班同学买零食。我追问缘由，她坦然告诉我，是同学和她约定，一次性订了六盒薯片。
              </p>
              <p className="text-base text-[#78350f]/80 leading-relaxed">
                那一刻，我的第一反应和所有家长一样：孩子被占便宜了。心底本能地想要制止、想要说教，甚至想要替她出面解决问题。但我硬生生忍住了。
              </p>
              <p className="text-base text-[#78350f]/80 leading-relaxed">
                我和妻子反复斟酌、反复自问：家长到底该不该出手干预？最终我们达成共识——克制干预，尊重孩子的选择，允许孩子在小事里成长。
              </p>
              <p className="text-base text-[#78350f]/80 leading-relaxed">
                回家的路上，我一直在自我拉扯：眼睁睁看着孩子吃亏、被人占便宜，做家长的真的能坦然释怀吗？后来我再也没有追问过这件事的始末，也没有刻意评判对错。因为我始终坚信：成长从来不是一路顺遂、从不吃亏，而是让孩子拥有自主决策、自主复盘、自主成长的机会。家长最该做的，从不是替孩子扫清所有障碍、规避所有挫折，而是学会放手，让她在经历中蜕变，在选择中成长。
              </p>
            </div>
          </section>

          {/* 03 */}
          <section>
            <h2 className="text-sm text-[#f59e0b] font-medium tracking-widest uppercase mb-4">
              03 高考逆袭：清零过往，只看终局
            </h2>
            <div className="space-y-4">
              <p className="text-base text-[#78350f]/80 leading-relaxed">
                真正的挑战，出现在高三这至关重要的一年。高三上学期海淀期中、海淀期末，下学期一模、二模，连续几次核心大考，她的成绩都不尽如人意。
              </p>
              <p className="text-base text-[#78350f]/80 leading-relaxed">
                那段时间，她深陷高压内耗，情绪起伏极大：时而烦躁焦虑、时而低落沉默，很多时候宁愿独自独处，也不愿倾诉心事。看着紧绷压抑的她，我们满心心疼，却从不对她施压、从不指责否定。
              </p>
              <p className="text-base text-[#78350f]/80 leading-relaxed">
                二模结束后，我和她做了一次深度谈心。我告诉她："你立志裸分冲刺清华，就要记住一个核心道理——高考只认最后一次成绩。考前所有的模考分数、所有的失利遗憾，全部不作数，全部可以清零。"
              </p>
              <p className="text-base text-[#78350f]/80 leading-relaxed">
                这句话，她彻底听进了心里。她快速调整心态、清空负面情绪，沉下心重新复盘查漏，稳稳投入最后的冲刺复习。最终高考，她突破瓶颈，考出了自己有史以来的最佳成绩，圆梦清华。
              </p>
              <p className="text-base text-[#78350f]/80 leading-relaxed">
                一路走来我深深笃定：比起拔尖的分数，健全、稳定、坚韧的内在人格，才是孩子一生的核心竞争力。
              </p>
            </div>
          </section>

          {/* 04 */}
          <section>
            <h2 className="text-sm text-[#f59e0b] font-medium tracking-widest uppercase mb-4">
              04 最高级的成长：持续向上，终身精进
            </h2>
            <div className="space-y-4">
              <p className="text-base text-[#78350f]/80 leading-relaxed">
                我为女儿骄傲的，从来不是"考上清华"这一个结果。
              </p>
              <p className="text-base text-[#78350f]/80 leading-relaxed">
                刚入清华的她，并非一路领先。大一上学期，全系150余人，她的绩点排名仅在90多名。后续院系扩招，全系人数增至170多人，没有人知道，她在无人看见的地方默默扎根、极致自律。
              </p>
              <p className="text-base text-[#78350f]/80 leading-relaxed">
                到大二下学期，她凭借日复一日的坚持，全科绩点逆袭冲到全系第一，先后斩获国家奖学金、校级三好学生、优秀共青团员等诸多荣誉。
              </p>
              <p className="text-base text-[#78350f]/80 leading-relaxed">
                但我真正引以为傲的，从来不是全系第一的名次，光鲜的荣誉证书。我最欣慰的是，她永远在向上生长，永远在自我迭代，永远在探索属于自己的人生节奏与成长道路。
              </p>
              <p className="text-base text-[#78350f]/80 leading-relaxed">
                清华，只是她成长路上的一个美好结果，而非人生终极目的。真正可贵的，是她长成了一个内心稳定、情绪自洽、坚韧自律、终身成长的少年。
              </p>
            </div>
          </section>

          {/* 05 */}
          <section>
            <h2 className="text-sm text-[#f59e0b] font-medium tracking-widest uppercase mb-4">
              05 沉淀养育经验，陪伴更多孩子发光
            </h2>
            <div className="space-y-4">
              <p className="text-base text-[#78350f]/80 leading-relaxed">
                多年深耕家庭教育，陪伴女儿一路成长、一路复盘，我和妻子沉淀出一套完整、落地的青少年养育体系。结合无数真实育儿实战经验，我们打磨出专属青少年成长测评产品，聚焦专注度、学习心态、学习韧性三大核心维度，精准看透孩子真实的学习状态、隐藏的成长问题与内在优势。
              </p>
              <p className="text-base text-[#78350f]/80 leading-relaxed">
                不同于泛泛的育儿理论，我们所有的方法、方案、陪伴指导，全部源自真实的养育实战与名校学生的成长规律。
              </p>
              <p className="text-base text-[#78350f]/80 leading-relaxed">
                我始终相信：每个孩子天生自带内在力量，从不缺少成长的能力，只是缺少被看见、被理解、被科学正向引导。
              </p>
              <p className="text-base text-[#78350f]/80 leading-relaxed">
                深耕家庭教育多年，身边很多朋友、家长都习惯喊我「朋大大」。如果你也在陪伴孩子成长、深陷育儿困惑，不嫌弃的话，你也可以这样叫我。我愿用多年实战养育经验，陪你读懂孩子、科学育儿，守护每一个少年的专属光芒。
              </p>
            </div>
          </section>
        </div>

        {/* 底部按钮 */}
        <div className="mt-16 flex flex-col gap-3">
          <Link
            href="/"
            className="block text-center py-4 px-8 bg-[#f59e0b] text-white font-medium rounded-full"
          >
            对齐我的育儿初心
          </Link>
          <button
            style={{ display: "block", padding: "16px 32px", border: "1px solid rgba(245,158,11,0.3)", color: "rgba(120,53,15,0.7)", fontWeight: 500, borderRadius: 9999, textAlign: "center", background: "transparent", cursor: "pointer" }}
          >
            生成分享海报
          </button>
        </div>
      </article>
    </div>
  );
}
