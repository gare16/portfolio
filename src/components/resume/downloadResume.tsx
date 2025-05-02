"use client";
import { useState } from "react";
import { Download, Check, Loader2 } from "lucide-react";

export default function DownloadButtonResume() {
  const [status, setStatus] = useState("idle"); // idle | loading | done

  const handleDownload = async () => {
    setStatus("loading");

    try {
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = "/cv/cv-mochamad-tegar.pdf";
        link.download = "CV_Mochamad_Tegar.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 1000);

      await new Promise((res) => setTimeout(res, 2000));

      setStatus("done");

      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("Download failed", error);
      setStatus("idle");
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={status === "loading" || status === "done"}
      className="flex gap-2"
    >
      {status === "idle" && (
        <>
          <Download size={18} /> Download Resume
        </>
      )}
      {status === "loading" && (
        <>
          <Loader2 size={18} className="animate-spin" /> Downloading...
        </>
      )}
      {status === "done" && (
        <>
          <Check size={18} /> Done
        </>
      )}
    </button>
  );
}
