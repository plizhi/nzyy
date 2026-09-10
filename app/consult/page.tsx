"use client";

import { useState } from "react";
import Link from "next/link";

export default function ConsultPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    age: "",
    type: "" as "crisis" | "correct" | "coach" | "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.phone) {
      setError("请填写手机号");
      return;
    }
    if (!form.type) {
      setError("请选择咨询类型");
      return;
    }
    // 保存到 localStorage 作为占位
    const list = JSON.parse(localStorage.getItem("nzyy_consults") || "[]");
    list.push({ ...form, time: new Date().toISOString() });
    localStorage.setItem("nzyy_consults", JSON.stringify(list));
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
              <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 600, color: "#3E2C2C", marginBottom: 16 }}>咨询服务</h1>
              <p style={{ fontSize: "1.05rem", color: "#806E66", lineHeight: 1.8 }}>
                深度人工服务，一对一陪伴指导。<br />
                填写表单后，我们会尽快与你联系。
              </p>
            </div>

            {/* 服务类型 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16, marginBottom: 32 }}>
              {[
                { id: "crisis", name: "危机干预包", price: "1999元/次", desc: "紧急情况下的快速响应和支持" },
                { id: "correct", name: "矫正计划", price: "9999元/年", desc: "系统性的问题矫正方案" },
                { id: "coach", name: "标准陪跑", price: "39800元/年", desc: "全年陪伴，深度指导" },
              ].map((item) => (
                <label
                  key={item.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 24px",
                    border: form.type === item.id ? "2px solid #C76D4A" : "1.5px solid #EAE0D5",
                    borderRadius: 16,
                    cursor: "pointer",
                    backgroundColor: form.type === item.id ? "rgba(199, 109, 74, 0.05)" : "#fff",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <input
                        type="radio"
                        name="type"
                        value={item.id}
                        checked={form.type === item.id}
                        onChange={(e) => setForm({ ...form, type: e.target.value as "crisis" | "correct" | "coach" })}
                        style={{ display: "none" }}
                      />
                      <span style={{ fontSize: "1rem", color: "#3E2C2C", fontWeight: 500 }}>{item.name}</span>
                      <span style={{ fontSize: "0.85rem", color: "#C76D4A", fontWeight: 500 }}>{item.price}</span>
                    </div>
                    <p style={{ fontSize: "0.85rem", color: "#806E66", marginTop: 4, marginLeft: 24 }}>{item.desc}</p>
                  </div>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", border: form.type === item.id ? "2px solid #C76D4A" : "1.5px solid #EAE0D5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {form.type === item.id && <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#C76D4A" }} />}
                  </div>
                </label>
              ))}
            </div>

            <form onSubmit={handleSubmit} style={{ background: "#fff", borderRadius: 24, padding: "40px 32px", boxShadow: "0 8px 32px rgba(62, 44, 44, 0.06)" }}>
              {error && (
                <div style={{ padding: "12px 16px", background: "#FEE2E2", borderRadius: 12, marginBottom: 24, color: "#DC2626", fontSize: "0.9rem" }}>
                  {error}
                </div>
              )}

              <div style={{ marginBottom: 24 }}>
                <label style={{ display: "block", fontSize: "0.9rem", color: "#806E66", marginBottom: 8 }}>家长称呼（选填）</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="怎么称呼你"
                  style={{ width: "100%", padding: "14px 16px", border: "1.5px solid #EAE0D5", borderRadius: 12, fontSize: "1rem", outline: "none", boxSizing: "border-box" }}
                />
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{ display: "block", fontSize: "0.9rem", color: "#806E66", marginBottom: 8 }}>手机号 *</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="便于我们联系你"
                  style={{ width: "100%", padding: "14px 16px", border: "1.5px solid #EAE0D5", borderRadius: 12, fontSize: "1rem", outline: "none", boxSizing: "border-box" }}
                />
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{ display: "block", fontSize: "0.9rem", color: "#806E66", marginBottom: 8 }}>孩子年龄段（选填）</label>
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
                <label style={{ display: "block", fontSize: "0.9rem", color: "#806E66", marginBottom: 8 }}>简单描述你的情况（选填）</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="可以简单说说孩子的情况和你的困扰"
                  rows={4}
                  style={{ width: "100%", padding: "14px 16px", border: "1.5px solid #EAE0D5", borderRadius: 12, fontSize: "1rem", outline: "none", resize: "none", boxSizing: "border-box" }}
                />
              </div>

              <button
                type="submit"
                style={{ width: "100%", padding: "16px 32px", backgroundColor: "#C76D4A", color: "#fff", border: "none", borderRadius: 9999, fontSize: "1rem", fontWeight: 500, cursor: "pointer" }}
              >
                提交咨询
              </button>
            </form>

            <p style={{ textAlign: "center", marginTop: 24, fontSize: "0.85rem", color: "#806E66" }}>
              我们尊重你的隐私，不会向第三方透露你的信息。
            </p>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "60px 32px", background: "#fff", borderRadius: 24, boxShadow: "0 8px 32px rgba(62, 44, 44, 0.06)" }}>
            <div style={{ fontSize: "3rem", marginBottom: 24 }}>✓</div>
            <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.5rem", color: "#3E2C2C", marginBottom: 16 }}>提交成功</h2>
            <p style={{ fontSize: "1rem", color: "#806E66", lineHeight: 1.8 }}>
              我们会尽快通过手机号<br />与你联系
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
