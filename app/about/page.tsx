import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="max-w-2xl mx-auto px-6 py-20">

        {/* 标题 */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#78350f] mb-12 text-center">
          关于我们
        </h1>

        {/* 清华目送 - 开篇情感锚点 */}
        <div className="mb-16">
          <p className="text-base text-[#78350f]/60 leading-relaxed italic mb-6">
            女儿去清华报到的那天，天色明朗，阳光正好。
          </p>
          <p className="text-sm text-[#78350f]/50 leading-relaxed">
            看着一张张朝气蓬勃的脸庞，他们心底满是由衷的欢喜与动容。恍惚间，想起多年前同样一个阳光明媚的午后，藏着逆袭成长的全部伏笔。
          </p>
        </div>

        {/* 核心故事 */}
        <div className="mb-16">
          <div className="w-8 h-px bg-[#f59e0b] mb-8" />
          <h2 className="text-lg font-semibold text-[#78350f] mb-6">
            三个字的寄语：不回头
          </h2>
          <div className="bg-white rounded-xl border border-[#f59e0b]/10 p-6 mb-6">
            <p className="text-[#78350f]/70 leading-relaxed mb-4">
              初三誓师大会，老师让家长在孩子后背写下一句寄语。绝大多数家长写的是"努力拼搏""奋发向上"。
            </p>
            <p className="text-[#78350f]/70 leading-relaxed mb-4">
              他写下的，是简简单单三个字：不回头。
            </p>
            <p className="text-[#78350f]/70 leading-relaxed">
              那一刻女儿并未察觉。很久之后她说，看到这三个字的瞬间，内心瞬间被触动，往后无数个难熬的时刻，都被这三个字深深鼓舞。
            </p>
          </div>
          <p className="text-sm text-[#78350f]/50 leading-relaxed">
            比起拔尖的分数，健全、稳定、坚韧的内在人格，才是孩子一生的核心竞争力。
          </p>
        </div>

        {/* 养育理念 */}
        <div className="mb-16">
          <h2 className="text-lg font-semibold text-[#78350f] mb-6">
            克制干预，允许成长
          </h2>
          <div className="bg-white rounded-xl border border-[#f59e0b]/10 p-6">
            <p className="text-[#78350f]/70 leading-relaxed mb-4">
              小学一年级，女儿第一次拥有零花钱。一天，她执意花光所有零花钱给全班买零食——被同学占了便宜。
            </p>
            <p className="text-[#78350f]/70 leading-relaxed mb-4">
              他的第一反应是想制止、想说教。但最终忍住了。
            </p>
            <p className="text-[#78350f]/70 leading-relaxed">
              成长从来不是一路顺遂、从不吃亏，而是让孩子拥有自主决策、自主复盘、自主成长的机会。家长最该做的，是学会放手。
            </p>
          </div>
        </div>

        {/* 朋大大是谁 */}
        <div className="mb-16">
          <h2 className="text-lg font-semibold text-[#78350f] mb-6">
            朋大大是谁
          </h2>
          <div className="bg-[#fef3c7]/50 rounded-xl p-6">
            <p className="text-[#78350f]/70 leading-relaxed mb-4">
              深耕家庭教育多年，身边家长习惯喊他「朋大大」。
            </p>
            <p className="text-[#78350f]/70 leading-relaxed mb-4">
              他与爱人用十余年时间，在真实育儿实践中沉淀出这套完整、落地的青少年养育体系。
            </p>
            <p className="text-[#78350f]/70 leading-relaxed">
              每个孩子天生自带内在力量，只是缺少被看见、被理解、被科学正向引导。他愿陪更多家长读懂孩子、科学育儿，守护每一个少年的专属光芒。
            </p>
          </div>
        </div>

        {/* 理论渊源 */}
        <div className="mb-16">
          <h2 className="text-lg font-semibold text-[#78350f] mb-4">
            理论渊源
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "客体关系理论",
              "依恋理论",
              "埃里克森心理社会发展阶段",
              "弗洛姆的爱之要素",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-sm bg-[#fef3c7] text-[#78350f] rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 联系与合作 */}
        <div className="mb-16">
          <h2 className="text-lg font-semibold text-[#78350f] mb-4">
            联系与合作
          </h2>
          <div className="p-6 bg-white rounded-xl border border-[#f59e0b]/10">
            <p className="text-sm text-[#78350f]/60 mb-4">
              如有合作意向或疑问，欢迎联系我们。
            </p>
            <p className="text-sm text-[#78350f]/70">
              邮箱：contact@nzyy.cc
            </p>
          </div>
        </div>

        {/* 回到首页 */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-[#78350f]/40 hover:text-[#78350f]/70 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            返回首页
          </Link>
        </div>
      </section>
    </div>
  );
}
