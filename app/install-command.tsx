"use client";

import { useState } from "react";

const commands = {
  unix: "npx @damelo/setup",
  windows: "npx @damelo/setup",
} as const;

type OS = keyof typeof commands;

// TODO: Fix OS detection. navigator.platform is deprecated and unreliable.
// Proper Next.js pattern: read User-Agent server-side in a Server Component
// using headers() from "next/headers", then pass the detected OS as a prop:
//
//   // page.tsx (Server Component)
//   import { headers } from "next/headers";
//   const ua = (await headers()).get("user-agent") ?? "";
//   const os = /windows/i.test(ua) ? "windows" : "unix";
//   return <InstallCommand defaultOS={os} />;
//
// This avoids hydration mismatch since server and client agree on the value.
// navigator.userAgentData?.platform is the client-side modern API fallback.
function detectOS(): OS {
  if (typeof navigator === "undefined") return "unix";
  const platform = navigator.platform.toLowerCase();
  if (platform.includes("win")) return "windows";
  return "unix";
}

export function InstallCommand() {
  const [os, setOs] = useState<OS>(detectOS);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(commands[os]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* OS Tabs - hidden until OS detection is fixed */}
      <div className="hidden items-center">
        <button
          onClick={() => setOs("unix")}
          className={`flex items-center justify-center py-2.5 px-6 rounded-l-lg cursor-pointer transition-colors ${
            os === "unix"
              ? "bg-white"
              : "bg-[#1A1A1A] border border-solid border-[#333333]"
          }`}
        >
          <span
            className={`font-semibold text-sm ${
              os === "unix" ? "text-black" : "text-[#888888]"
            }`}
          >
            Linux / macOS
          </span>
        </button>
        <button
          onClick={() => setOs("windows")}
          className={`flex items-center justify-center py-2.5 px-6 rounded-r-lg cursor-pointer transition-colors ${
            os === "windows"
              ? "bg-white"
              : "bg-[#1A1A1A] border border-solid border-[#333333]"
          }`}
        >
          <span
            className={`font-semibold text-sm ${
              os === "windows" ? "text-black" : "text-[#888888]"
            }`}
          >
            Windows
          </span>
        </button>
      </div>

      {/* Install Command */}
      <button
        onClick={handleCopy}
        className="flex items-center w-full lg:w-130 rounded-[10px] py-4 px-6 gap-3 bg-[#111111] border border-solid border-[#222222] cursor-pointer hover:bg-[#161616] transition-colors"
      >
        <span className="grow font-mono text-[15px] text-[#CCCCCC] text-left">
          {commands[os]}
        </span>
        {copied ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4ec86c"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#666666"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </button>
    </>
  );
}
