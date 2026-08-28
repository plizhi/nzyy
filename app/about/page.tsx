import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#78350f] mb-8 text-center">
          关于我们
        </h1>

        {/* 故事 */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-lg font-semibold text-[#78350f] mb-4">
            这套方法从何而来？
          </h2>
          <div className="p-6 bg-white rounded-xl border border-[#f59e0b]/10">
            <p className="text-[#78350f]/70 leading-relaxed mb-4">
              杨莉老师与朋大大，用十余年时间，在心理学专业学习与真实育儿实践中，共同打磨出这套心灵建造体系。
            </p>
            <p className="text-[#78350f]/70 leading-relaxed">
              他们一个深耕心理学理论，一个扎根真实养育经验。他们的孩子，也是这套方法的第一位完整践行者。
            </p>
          </div>
        </div>

        {/* 理论渊源 */}
        <div className="max-w-2xl mx-auto mb-16">
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
        <div className="max-w-2xl mx-auto mb-16">
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
            className="inline-flex items-center text-[#f59e0b] hover:underline"
          >
            <svg
              className="w-4 h-4 mr-1"
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
