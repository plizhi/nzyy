import Link from "next/link";

const footerNav = [
  { label: "初心", href: "/intent" },
  { label: "理论", href: "/theory" },
  { label: "工具", href: "/tools" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#78350f]/5 mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-8">
          <p className="text-[#78350f] font-medium mb-2">
            内在结构养育
          </p>
          <p className="text-sm text-[#78350f]/60">
            你对待孩子的方式，就是孩子内心世界的建筑图纸。
          </p>
        </div>

        <nav className="flex justify-center gap-6 mb-8">
          {footerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[#78350f]/60 hover:text-[#f59e0b] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="text-center text-xs text-[#78350f]/40">
          © {currentYear} 内在结构养育 · 保留所有权利
        </div>
      </div>
    </footer>
  );
}
