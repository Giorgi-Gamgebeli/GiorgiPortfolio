"use client";

import jsPDF from "jspdf";
import React, { useRef } from "react";
import html2canvas from "html2canvas";

function CVWrapper({ children }: { children: React.ReactNode }) {
  const pageRef = useRef(null);

  const handleDownload = async () => {
    if (!pageRef.current) return;

    const style = document.createElement("style");
    document.head.appendChild(style);

    style.sheet?.insertRule(
      "body > div:last-child img { display: inline-block; }",
    );

    const canvas = await html2canvas(pageRef.current, {
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/webp", 0.9);
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Giorgi-Gamgebeli-CV.pdf");

    style.remove();
  };

  return (
    <main
      ref={pageRef}
      className="relative flex min-h-[125rem] items-center justify-center bg-[#19202e] text-[#a5b3ce]"
    >
      {children}
      <button
        className="absolute right-20 top-10 rounded-md border border-transparent bg-[#1e2738] px-8 py-3 font-bold text-[#a5b3ce] shadow-md outline-none transition hover:border-gray-400"
        onClick={handleDownload}
      >
        PDF download
      </button>
    </main>
  );
}

export default CVWrapper;
