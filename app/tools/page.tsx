"use client";

import Link from "next/link";
import { trackToolClick } from "@/lib/tracking";

export default function ToolsPage() {
  function handleToolClick(name: string) {
    trackToolClick(name);
  }

  return (
    <div style={{
      fontFamily: "'Noto Sans SC', sans-serif",
      backgroundColor: "#FBF7F1",
      color: "#3E2C2C",
      lineHeight: 1.8,
      overflowX: "hidden",
      position: "relative",
      minHeight: "100vh",
    }}>
      {/* 背景光晕 */}
      <div style={{
        position: "fixed",
        top: "20%",
        left: "50%",
        transform: "translateX(-50%)",
        width: 800,
        height: 800,
        background: "radial-gradient(circle, rgba(199, 109, 74, 0.06) 0%, rgba(251, 247, 241, 0) 70%)",
        zIndex: -1,
        pointerEvents: "none",
        animation: "breathe 9s ease-in-out infinite",
      }} />

      <style>{`
        @keyframes breathe {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.8; }
          50% { transform: translateX(-50%) scale(1.15); opacity: 1; }
        }
      `}</style>

      <div style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "100px 40px 60px",
      }}>
        {/* 页头 */}
        <div style={{ textAlign: "center", marginBottom: 100 }}>
          <h1 style={{
            fontFamily: "'Noto Serif SC', serif",
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            fontWeight: 600,
            color: "#3E2C2C",
            marginBottom: 24,
            textShadow: "1px 1px 0px rgba(62, 44, 44, 0.05)",
          }}>
            落地工具
          </h1>
          <p style={{
            fontSize: "1.1rem",
            color: "#806E66",
            letterSpacing: "0.15em",
          }}>
            理论是地图，工具是脚下可走的路
          </p>
        </div>

        {/* 日常陪伴 */}
        <div style={{
          fontFamily: "'Noto Serif SC', serif",
          fontSize: "1.8rem",
          color: "#3E2C2C",
          marginBottom: 40,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}>
          <span style={{
            display: "block",
            width: 4,
            height: 24,
            background: "#C76D4A",
            borderRadius: 2,
          }} />
          日常陪伴
        </div>

        <a
          href="https://wxcl.nzyy.cc"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleToolClick("望杏成林")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 40,
            background: "linear-gradient(135deg, #FFFCF7 0%, #FDF6EE 100%)",
            borderRadius: 16,
            padding: "48px 40px",
            marginBottom: 32,
            boxShadow: "0 8px 30px rgba(62, 44, 44, 0.04)",
            border: "1px solid #EAE0D5",
            textDecoration: "none",
            transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
            position: "relative",
            overflow: "hidden",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow = "0 20px 50px rgba(62, 44, 44, 0.08)";
            e.currentTarget.style.borderColor = "#E8B59A";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 8px 30px rgba(62, 44, 44, 0.04)";
            e.currentTarget.style.borderColor = "#EAE0D5";
          }}
        >
          <div style={{
            fontSize: "3rem",
            background: "#F3ECE3",
            width: 100,
            height: 100,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}>
            🌱
          </div>
          <div>
            <h3 style={{
              fontFamily: "'Noto Serif SC', serif",
              fontSize: "1.8rem",
              marginBottom: 12,
              color: "#3E2C2C",
            }}>
              望杏成林
            </h3>
            <div style={{
              color: "#C76D4A",
              fontSize: "0.95rem",
              marginBottom: 16,
              fontWeight: 500,
            }}>
              日常陪伴与滋养
            </div>
            <p style={{
              color: "#806E66",
              fontSize: "1rem",
              maxWidth: 600,
            }}>
              亲子成长记录、情绪命名、习惯养成、成长瞬间捕捉。服务于六大内在结构的日常滋养，覆盖多个心神能力的敏感期。
            </p>
          </div>
        </a>

        {/* 测评工具 */}
        <div style={{
          marginTop: 80,
          fontFamily: "'Noto Serif SC', serif",
          fontSize: "1.8rem",
          color: "#3E2C2C",
          marginBottom: 40,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}>
          <span style={{
            display: "block",
            width: 4,
            height: 24,
            background: "#C76D4A",
            borderRadius: 2,
          }} />
          测评工具 · 荔枝测评系列
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
        }}>
          {/* 荔学卷 */}
          <a
            href="https://lzti.nzyy.cc"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleToolClick("荔学卷")}
            style={{
              background: "#FFFCF7",
              borderRadius: 16,
              padding: "40px 32px",
              marginBottom: 32,
              boxShadow: "0 8px 30px rgba(62, 44, 44, 0.04)",
              border: "1px solid #EAE0D5",
              textDecoration: "none",
              transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              minHeight: 360,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 20px 50px rgba(62, 44, 44, 0.08)";
              e.currentTarget.style.borderColor = "#E8B59A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(62, 44, 44, 0.04)";
              e.currentTarget.style.borderColor = "#EAE0D5";
            }}
          >
            <span style={{
              position: "absolute",
              top: 24,
              right: 24,
              fontSize: "0.75rem",
              padding: "4px 12px",
              borderRadius: 20,
              letterSpacing: "0.05em",
              background: "rgba(199, 109, 74, 0.1)",
              color: "#C76D4A",
              border: "1px solid rgba(199, 109, 74, 0.2)",
            }}>
              已上线
            </span>
            <div style={{ fontSize: "2rem", marginBottom: 24 }}>📊</div>
            <h3 style={{
              fontFamily: "'Noto Serif SC', serif",
              fontSize: "1.5rem",
              marginBottom: 8,
              color: "#3E2C2C",
            }}>
              荔学卷
            </h3>
            <div style={{
              color: "#806E66",
              fontSize: "0.9rem",
              marginBottom: 24,
              paddingBottom: 24,
              borderBottom: "1px solid #EAE0D5",
            }}>
              学习力测评
            </div>
            <p style={{
              color: "#806E66",
              fontSize: "0.95rem",
              flex: 1,
            }}>
              在内在结构养育理论指导下，评估孩子当前的学习力状态：学习兴趣、基础习惯、情绪适应。帮助家长看清孩子学业表现的底层原因。
            </p>
          </a>

          {/* 荔心卷 */}
          <a
            href="/subscribe"
            onClick={() => handleToolClick("荔心卷")}
            style={{
              background: "#FFFCF7",
              borderRadius: 16,
              padding: "40px 32px",
              marginBottom: 32,
              boxShadow: "0 8px 30px rgba(62, 44, 44, 0.04)",
              border: "1px solid #EAE0D5",
              textDecoration: "none",
              transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              minHeight: 360,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 20px 50px rgba(62, 44, 44, 0.08)";
              e.currentTarget.style.borderColor = "#E8B59A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(62, 44, 44, 0.04)";
              e.currentTarget.style.borderColor = "#EAE0D5";
            }}
          >
            <span style={{
              position: "absolute",
              top: 24,
              right: 24,
              fontSize: "0.75rem",
              padding: "4px 12px",
              borderRadius: 20,
              letterSpacing: "0.05em",
              background: "#F3ECE3",
              color: "#806E66",
              border: "1px solid #EAE0D5",
            }}>
              预约中
            </span>
            <div style={{ fontSize: "2rem", marginBottom: 24 }}>💎</div>
            <h3 style={{
              fontFamily: "'Noto Serif SC', serif",
              fontSize: "1.5rem",
              marginBottom: 8,
              color: "#3E2C2C",
            }}>
              荔心卷
            </h3>
            <div style={{
              color: "#806E66",
              fontSize: "0.9rem",
              marginBottom: 24,
              paddingBottom: 24,
              borderBottom: "1px solid #EAE0D5",
            }}>
              心神能力测评
            </div>
            <p style={{
              color: "#806E66",
              fontSize: "0.95rem",
              flex: 1,
            }}>
              评估孩子十大心神能力的发展水平，定位当前所处的阶段，获得针对性的养育建议。让孩子的心神成长被看见、被理解、被支持。
            </p>
          </a>

          {/* 荔升卷 */}
          <a
            href="/subscribe"
            onClick={() => handleToolClick("荔升卷")}
            style={{
              background: "#FFFCF7",
              borderRadius: 16,
              padding: "40px 32px",
              marginBottom: 32,
              boxShadow: "0 8px 30px rgba(62, 44, 44, 0.04)",
              border: "1px solid #EAE0D5",
              textDecoration: "none",
              transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              minHeight: 360,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 20px 50px rgba(62, 44, 44, 0.08)";
              e.currentTarget.style.borderColor = "#E8B59A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(62, 44, 44, 0.04)";
              e.currentTarget.style.borderColor = "#EAE0D5";
            }}
          >
            <span style={{
              position: "absolute",
              top: 24,
              right: 24,
              fontSize: "0.75rem",
              padding: "4px 12px",
              borderRadius: 20,
              letterSpacing: "0.05em",
              background: "#F3ECE3",
              color: "#806E66",
              border: "1px solid #EAE0D5",
            }}>
              预约中
            </span>
            <div style={{ fontSize: "2rem", marginBottom: 24 }}>🎯</div>
            <h3 style={{
              fontFamily: "'Noto Serif SC', serif",
              fontSize: "1.5rem",
              marginBottom: 8,
              color: "#3E2C2C",
            }}>
              荔升卷
            </h3>
            <div style={{
              color: "#806E66",
              fontSize: "0.9rem",
              marginBottom: 24,
              paddingBottom: 24,
              borderBottom: "1px solid #EAE0D5",
            }}>
              升学潜力指数
            </div>
            <p style={{
              color: "#806E66",
              fontSize: "0.95rem",
              flex: 1,
            }}>
              基于对孩子内在结构的全面评估，结合发展心理学与教育学规律，科学评估孩子的升学潜力指数，为初高中阶段的选择提供参考依据。
            </p>
          </a>
        </div>

        {/* 底部导航 */}
        <div style={{
          marginTop: 120,
          paddingTop: 40,
          borderTop: "1px solid #EAE0D5",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <Link
            href="/theory"
            style={{
              textDecoration: "none",
              color: "#806E66",
              fontFamily: "'Noto Serif SC', serif",
              fontSize: "1.1rem",
              transition: "color 0.3s ease",
            }}
          >
            ← 理论
          </Link>
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "#3E2C2C",
              fontFamily: "'Noto Serif SC', serif",
              fontSize: "1rem",
            }}
          >
            返回首页
          </Link>
          <Link
            href="/about"
            style={{
              textDecoration: "none",
              color: "#806E66",
              fontFamily: "'Noto Serif SC', serif",
              fontSize: "1.1rem",
              transition: "color 0.3s ease",
            }}
          >
            关于我们 →
          </Link>
        </div>
      </div>

      {/* 响应式 */}
      <style>{`
        @media (max-width: 768px) {
          .grid-tools { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
