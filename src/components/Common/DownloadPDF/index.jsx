import { useRouter } from 'next/router';
import React, { useState } from "react";

export default function DownloadPDF({ filePath, fileName, downloadText }) {
  const router = useRouter();

  // const [loading, setLoading] = useState(false);

  // const handleDownload = async () => {
  //   try {
  //     setLoading(true);

  //     const res = await fetch(filePath);
  //     const blob = await res.blob();
  //     const url = URL.createObjectURL(blob);

  //     const link = document.createElement("a");
  //     link.href = url;
  //     link.download = fileName;
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);

  //     setLoading(false);
  //   } catch (error) {
  //     console.error(error);
  //     setLoading(false);
  //   }
  // };

  return (
    <div>
      <a href={filePath} target="_blank" rel="noreferrer">
        <p className={`text-button ${router.pathname === "/r-series/overview" || router.pathname === "/r-series/pricing" ? "text-white border-white hover:bg-white hover:text-black" : "text-primary border-primary hover:bg-primary hover:text-white"} text-center bg-transparent border-2 transition ease-in duration-200 cta`}>{downloadText}</p>
      </a>
    </div>
  );
};
