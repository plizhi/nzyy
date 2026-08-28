"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "首页", href: "/" },
  { label: "初心", href: "/intent" },
  { label: "理论", href: "/theory" },
  { label: "工具", href: "/tools" },
  { label: "关于", href: "/about" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFBF5]/95 backdrop-blur-sm border-b border-[#f59e0b]/10">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-[#78350f] font-semibold text-lg">
          内在结构养育
        </Link>

        {/* Desktop nav */}
        <ul className="hidden sm:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-sm transition-colors ${
                  pathname === item.href
                    ? "text-[#f59e0b] font-medium"
                    : "text-[#78350f]/70 hover:text-[#f59e0b]"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2 text-[#78350f]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="菜单"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden bg-[#FFFBF5] border-t border-[#f59e0b]/10">
          <ul className="px-4 py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-3 text-sm ${
                    pathname === item.href
                      ? "text-[#f59e0b] font-medium"
                      : "text-[#78350f]/70"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
