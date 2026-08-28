"use client";

import Link from "next/link";
import { trackToolClick } from "@/lib/tracking";

export default function ToolsPage() {
  function handleToolClick(name: string) {
    trackToolClick(name);
  }

  return (
    <div className="min-h-screen">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#78350f] mb-4 text-center">
          落地工具
        </h1>
        <p className="text-center text-[#78350f]/60 mb-12">
          理论是地图，工具是脚下可走的路。
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* 望杏成林 */}
          <div className="p-8 bg-white rounded-xl border border-[#f59e0b]/20 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#fef3c7] rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-[#f59e0b]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-[#78350f] mb-2">
              望杏成林
            </h2>
            <p className="text-sm text-[#f59e0b] mb-4">日常陪伴与滋养工具</p>
            <p className="text-sm text-[#78350f]/70 mb-6 leading-relaxed">
              亲子成长记录、情绪命名、习惯养成、成长瞬间捕捉。服务于六大内在结构的日常滋养，覆盖多个心神能力的敏感期。
            </p>
            <a
              href="#"
              onClick={() => handleToolClick("望杏成林")}
              className="inline-flex items-center px-5 py-2.5 bg-[#f59e0b] text-white text-sm font-medium rounded-lg hover:bg-[#d97706] transition-colors"
            >
              进入望杏成林
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          {/* 荔枝测评 */}
          <div className="p-8 bg-white rounded-xl border border-[#f59e0b]/20 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#fef3c7] rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-[#f59e0b]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-[#78350f] mb-2">
              荔枝测评
            </h2>
            <p className="text-sm text-[#f59e0b] mb-4">阶段性评估工具</p>
            <p className="text-sm text-[#78350f]/70 mb-6 leading-relaxed">
              评估十大心神能力发展水平、定位当前发展阶段、获得个性化养育建议。
            </p>
            <a
              href="#"
              onClick={() => handleToolClick("荔枝测评")}
              className="inline-flex items-center px-5 py-2.5 bg-[#f59e0b] text-white text-sm font-medium rounded-lg hover:bg-[#d97706] transition-colors"
            >
              进入荔枝测评
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* 未来工具预留 */}
        <div className="mt-8 max-w-3xl mx-auto">
          <div className="p-6 bg-[#78350f]/5 rounded-xl border border-dashed border-[#78350f]/20 text-center">
            <p className="text-sm text-[#78350f]/40">更多落地工具，敬请期待</p>
          </div>
        </div>
      </section>

      {/* 底部导航 */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-8 border-t border-[#f59e0b]/10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            href="/theory"
            className="text-sm text-[#f59e0b] hover:underline"
          >
            ← 理论
          </Link>
          <Link
            href="/"
            className="text-sm text-[#78350f]/60 hover:text-[#f59e0b]"
          >
            返回首页
          </Link>
          <Link
            href="/about"
            className="text-sm text-[#f59e0b] hover:underline"
          >
            关于我们 →
          </Link>
        </div>
      </section>
    </div>
  );
}
