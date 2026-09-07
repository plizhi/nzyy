"use client";

import Link from "next/link";
import { trackToolClick } from "@/lib/tracking";

export default function ToolsPage() {
  function handleToolClick(name: string) {
    trackToolClick(name);
  }

  return (
    <div className="min-h-screen py-16 sm:py-24">
      <div className="max-w-2xl mx-auto px-8">

        {/* 标题区 */}
        <div className="text-center mb-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#78350f] mb-4">
            落地工具
          </h1>
          <p className="text-base text-[#78350f]/50">
            理论是地图，工具是脚下可走的路
          </p>
        </div>

        {/* 日常陪伴 */}
        <div className="mb-20">
          <h2 className="text-xs text-[#78350f]/30 tracking-widest uppercase mb-6">
            日常陪伴
          </h2>
          <a
            href="https://wxcl.nzyy.cc"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleToolClick("望杏成林")}
            className="block bg-white rounded-2xl p-10 border border-[#f59e0b]/10 hover:border-[#f59e0b]/30 hover:shadow-xl transition-all cursor-pointer"
          >
            <div className="flex items-center gap-5 mb-5">
              <span className="text-4xl">🌱</span>
              <div>
                <h3 className="text-xl font-semibold text-[#78350f]">
                  望杏成林
                </h3>
                <p className="text-sm text-[#f59e0b] mt-1">日常陪伴与滋养</p>
              </div>
            </div>
            <p className="text-base text-[#78350f]/60 leading-relaxed">
              亲子成长记录、情绪命名、习惯养成、成长瞬间捕捉。服务于六大内在结构的日常滋养，覆盖多个心神能力的敏感期。
            </p>
          </a>
        </div>

        {/* 分隔线 */}
        <div className="border-t border-[#f59e0b]/10 my-16" />

        {/* 测评工具 */}
        <div>
          <h2 className="text-xs text-[#78350f]/30 tracking-widest uppercase mb-6">
            测评工具 · 荔枝测评系列
          </h2>

          {/* 荔学卷 - 已上线 */}
          <a
            href="https://lzti.nzyy.cc"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleToolClick("荔学卷")}
            className="block bg-white rounded-2xl p-10 border border-[#f59e0b]/10 hover:border-[#f59e0b]/30 hover:shadow-xl transition-all cursor-pointer mb-6"
          >
            <div className="flex items-center gap-5 mb-5">
              <span className="text-4xl">📊</span>
              <div>
                <h3 className="text-xl font-semibold text-[#78350f]">
                  荔学卷
                </h3>
                <p className="text-sm text-[#f59e0b] mt-1">学习力测评 · 已上线</p>
              </div>
            </div>
            <p className="text-base text-[#78350f]/60 leading-relaxed">
              在内在结构养育理论指导下，评估孩子当前的学习力状态：学习兴趣、基础习惯、情绪适应。帮助家长看清孩子学业表现的底层原因。
            </p>
          </a>

          {/* 荔心卷 - 预告 */}
          <div className="block bg-[#fef3c7]/20 rounded-2xl p-10 border border-[#f59e0b]/5 mb-6">
            <div className="flex items-center gap-5 mb-5">
              <span className="text-4xl">💎</span>
              <div>
                <h3 className="text-xl font-semibold text-[#78350f]">
                  荔心卷
                </h3>
                <p className="text-sm text-[#78350f]/40 mt-1">心神能力测评 · 敬请期待</p>
              </div>
            </div>
            <p className="text-base text-[#78350f]/50 leading-relaxed">
              评估孩子十大心神能力的发展水平，定位当前所处的阶段，获得针对性的养育建议。让孩子的心神成长被看见、被理解、被支持。
            </p>
          </div>

          {/* 荔升卷 - 预告 */}
          <div className="block bg-[#fef3c7]/20 rounded-2xl p-10 border border-[#f59e0b]/5">
            <div className="flex items-center gap-5 mb-5">
              <span className="text-4xl">🎯</span>
              <div>
                <h3 className="text-xl font-semibold text-[#78350f]">
                  荔升卷
                </h3>
                <p className="text-sm text-[#78350f]/40 mt-1">升学潜力指数 · 敬请期待</p>
              </div>
            </div>
            <p className="text-base text-[#78350f]/50 leading-relaxed">
              基于对孩子内在结构的全面评估，结合发展心理学与教育学规律，科学评估孩子的升学潜力指数，为初高中阶段的选择提供参考依据。
            </p>
          </div>
        </div>

      </div>

      {/* 底部导航 */}
      <div className="max-w-2xl mx-auto px-8 py-12 mt-16 border-t border-[#f59e0b]/10">
        <div className="flex justify-between items-center text-sm">
          <Link href="/theory" className="text-[#f59e0b] hover:opacity-70 transition-opacity">
            ← 理论
          </Link>
          <Link href="/" className="text-[#78350f]/40 hover:text-[#f59e0b] transition-colors">
            返回首页
          </Link>
          <Link href="/about" className="text-[#f59e0b] hover:opacity-70 transition-opacity">
            关于我们 →
          </Link>
        </div>
      </div>
    </div>
  );
}
