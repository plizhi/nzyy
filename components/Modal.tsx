"use client";

import { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        backgroundColor: "rgba(62, 44, 44, 0.4)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        style={{
          background: "#FFFBF5",
          borderRadius: 24,
          padding: "40px 32px",
          maxWidth: 480,
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
          boxShadow: "0 24px 80px rgba(62, 44, 44, 0.2)",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            width: 32,
            height: 32,
            borderRadius: "50%",
            border: "none",
            background: "rgba(128, 110, 102, 0.1)",
            color: "#806E66",
            fontSize: "1.2rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
