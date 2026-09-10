"use client";

import { useState } from "react";
import Link from "next/link";

export default function SubscribePage() {
  const [form, setForm] = useState({
    phone: "",
    age: "",
    product: "" as "lixinzhou" | "lishengzhou" | "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.phone) {
      setError("请填写手机号");
      return;
    }
    if (!form.age) {
      setError("请选择孩子年龄段");
      return;
    }
    if (!form.product) {
      setError("请选择感兴趣的产品");
      return;
    }
    // 保存到 localStorage 作为占位
    const list = JSON.parse(localStorage.getItem("nzyy_subscribers") || "[]");
    list.push({ ...form, time: new Date().toISOString() });
    localStorage.setItem("nzyy_subscribers", JSON.stringify(list));
    setSubmitted(true);
    setError("");
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FBF7F1" }}>
      {/* 顶部导航 */}
      <header style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(251, 247, 241, 0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid #EAE0D5" }}>
        <nav style={{ maxWidth: 1000, margin: "0 auto", padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 600, fontSize: "1.2rem", color: "#3E2C2C", textDecoration: "none", letterSpacing: "0.1em" }}>内在结构养育</Link>
          <Link href="/tools" style={{ color: "#806E66", textDecoration: "none", fontSize: "0.95rem" }}>返回工具页</Link>
        </nav>
      </header>

      <div style={{ maxWidth: 600, margin: "0 auto", padding: "80px 32px" }}>
        {!submitted ? (
          <>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 600, color: "#3E2C2C", marginBottom: 16 }}>敬请期待</h1>
              <p style={{ fontSize: "1.05rem", color: "#806E66", lineHeight: 1.8 }}>
                荔心卷和荔升卷正在精心打磨中。<br />
                留下联系方式，产品上线时第一时间通知你。
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ background: "#fff", borderRadius: 24, padding: "40px 32px", boxShadow: "0 8px 32px rgba(62, 44, 44, 0.06)" }}>
              {error && (
                <div style={{ padding: "12px 16px", background: "#FEE2E2", borderRadius: 12, marginBottom: 24, color: "#DC2626", fontSize: "0.9rem" }}>
                  {error}
                </div>
              )}

              <div style={{ marginBottom: 24 }}>
                <label style={{ display: "block", fontSize: "0.9rem", color: "#806E66", marginBottom: 8 }}>手机号 *</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="便于我们第一时间通知你"
                  style={{ width: "100%", padding: "14px 16px", border: "1.5px solid #EAE0D5", borderRadius: 12, fontSize: "1rem", outline: "none", boxSizing: "border-box" }}
                />
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{ display: "block", fontSize: "0.9rem", color: "#806E66", marginBottom: 8 }}>孩子年龄段 *</label>
                <select
                  value={form.age}
                  onChange={(e) => setForm({ ...form, age: e.target.value })}
                  style={{ width: "100%", padding: "14px 16px", border: "1.5px solid #EAE0D5", borderRadius: 12, fontSize: "1rem", outline: "none", backgroundColor: "#fff", boxSizing: "border-box" }}
                >
                  <option value="">请选择</option>
                  <option value="幼儿">幼儿园（3-6岁）</option>
                  <option value="小学低">小学低年级（1-3年级）</option>
                  <option value="小学高">小学高年级（4-6年级）</option>
                  <option value="初中">初中（7-9年级）</option>
                  <option value="高中">高中（10-12年级）</option>
                </select>
              </div>

              <div style={{ marginBottom: 32 }}>
                <label style={{ display: "block", fontSize: "0.9rem", color: "#806E66", marginBottom: 8 }}>感兴趣的产品 *</label>
                <div style={{ display: "flex", gap: 12 }}>
                  <label style={{ flex: 1, display: "flex", alignItems: "center", gap: 8, padding: "14px 16px", border: form.product === "lixinzhou" ? "2px solid #C76D4A" : "1.5px solid #EAE0D5", borderRadius: 12, cursor: "pointer", backgroundColor: form.product === "lixinzhou" ? "rgba(199, 109, 74, 0.05)" : "transparent" }}>
                    <input
                      type="radio"
                      name="product"
                      value="lixinzhou"
                      checked={form.product === "lixinzhou"}
                      onChange={(e) => setForm({ ...form, product: e.target.value as "lixinzhou" })}
                      style={{ display: "none" }}
                    />
                    <span style={{ fontSize: "0.95rem", color: "#3E2C2C" }}>荔心卷</span>
                    <span style={{ fontSize: "0.8rem", color: "#806E66" }}>十大心神能力</span>
                  </label>
                  <label style={{ flex: 1, display: "flex", alignItems: "center", gap: 8, padding: "14px 16px", border: form.product === "lishengzhou" ? "2px solid #C76D4A" : "1.5px solid #EAE0D5", borderRadius: 12, cursor: "pointer", backgroundColor: form.product === "lishengzhou" ? "rgba(199, 109, 74, 0.05)" : "transparent" }}>
                    <input
                      type="radio"
                      name="product"
                      value="lishengzhou"
                      checked={form.product === "lishengzhou"}
                      onChange={(e) => setForm({ ...form, product: e.target.value as "lishengzhou" })}
                      style={{ display: "none" }}
                    />
                    <span style={{ fontSize: "0.95rem", color: "#3E2C2C" }}>荔升卷</span>
                    <span style={{ fontSize: "0.8rem", color: "#806E66" }}>升学潜力</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                style={{ width: "100%", padding: "16px 32px", backgroundColor: "#C76D4A", color: "#fff", border: "none", borderRadius: 9999, fontSize: "1rem", fontWeight: 500, cursor: "pointer" }}
              >
                订阅通知
              </button>
            </form>

            <p style={{ textAlign: "center", marginTop: 24, fontSize: "0.85rem", color: "#806E66" }}>
              我们尊重你的隐私，不会向第三方透露你的信息。
            </p>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "60px 32px", background: "#fff", borderRadius: 24, boxShadow: "0 8px 32px rgba(62, 44, 44, 0.06)" }}>
            <div style={{ fontSize: "3rem", marginBottom: 24 }}>✓</div>
            <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.5rem", color: "#3E2C2C", marginBottom: 16 }}>订阅成功</h2>
            <p style={{ fontSize: "1rem", color: "#806E66", lineHeight: 1.8 }}>
              产品上线后，我们会第一时间<br />通过手机号联系你
            </p>
            <Link
              href="/"
              style={{ display: "inline-block", marginTop: 32, padding: "14px 32px", backgroundColor: "#C76D4A", color: "#fff", borderRadius: 9999, textDecoration: "none", fontSize: "0.95rem" }}
            >
              返回首页
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
