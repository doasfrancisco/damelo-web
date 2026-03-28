"use client";

const lines = [
  {
    type: "prompt" as const,
    content: "export this to damelo mcp.",
  },
  {
    type: "tool" as const,
    content: "share – export_session (MCP)",
  },
  {
    type: "status" as const,
    label: "✱",
    title: "Beboppin\u2019",
    meta: "(41s ··· ↓ 129 tokens)",
  },
  {
    type: "tip" as const,
    content: "Tip: Use /btw to ask a quick side question...",
  },
  {
    type: "result" as const,
    content: "Exported: https://damelo.sh/reports/doasfrancisco/1b5933e2",
  },
  {
    type: "cursor" as const,
  },
  {
    type: "footer" as const,
  },
];

const DELAY_BASE = 400; // ms before first line
const DELAY_STEP = 600; // ms between each line

export function HeroTerminal() {
  return (
    <div className="flex flex-col w-full lg:w-140 rounded-xl bg-[#0c0c0c] border border-solid border-[#222222] lg:shrink-0 p-4 overflow-hidden">
      <style>{`
        @keyframes terminal-line-in {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes terminal-typing {
          from { width: 0; }
          to   { width: 100%; }
        }
        @keyframes blink-caret {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .terminal-line {
          opacity: 0;
          animation: terminal-line-in 0.4s ease-out forwards;
        }
        .terminal-typing-text {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          width: 0;
          animation: terminal-typing 0.6s steps(30, end) forwards;
        }
        .terminal-cursor {
          animation: blink-caret 1s step-end infinite;
        }
      `}</style>

      {lines.map((line, i) => {
        const delay = `${DELAY_BASE + i * DELAY_STEP}ms`;
        const typingDelay = `${DELAY_BASE + i * DELAY_STEP + 100}ms`;

        if (line.type === "prompt") {
          return (
            <div
              key={i}
              className="terminal-line flex items-start rounded-sm py-1.5 px-3 gap-2 bg-[#0c0c0c]"
              style={{ animationDelay: delay }}
            >
              <span className="font-mono text-[12px] leading-[1.6] text-[#CCCCCC] font-bold shrink-0">
                ›
              </span>
              <span
                className="terminal-typing-text font-mono text-[12px] leading-[1.6] text-white font-semibold"
                style={{ animationDelay: typingDelay }}
              >
                {line.content}
              </span>
            </div>
          );
        }

        if (line.type === "tool") {
          return (
            <div
              key={i}
              className="terminal-line flex flex-col pt-1.5 gap-0.5"
              style={{ animationDelay: delay }}
            >
              <div className="flex items-start gap-2 min-w-0">
                <div className="w-1.75 h-1.75 shrink-0 mt-1.25 rounded-full bg-[#CCCCCC]" />
                <span className="font-mono text-[12px] leading-[1.6] text-[#CCCCCC] truncate lg:overflow-visible lg:text-clip">
                  {line.content}
                </span>
              </div>
            </div>
          );
        }

        if (line.type === "status") {
          return (
            <div
              key={i}
              className="terminal-line flex flex-col pt-1 gap-0.5"
              style={{ animationDelay: delay }}
            >
              <div className="flex items-start gap-2 min-w-0">
                <span className="font-mono text-[12px] leading-[1.6] text-[#E06C75] font-bold shrink-0">
                  {line.label}
                </span>
                <span className="font-mono text-[12px] leading-[1.6] text-[#E06C75] font-semibold shrink-0">
                  {line.title}
                </span>
                <span className="font-mono text-[12px] leading-[1.6] text-[#777777] truncate lg:overflow-visible lg:text-clip">
                  {line.meta}
                </span>
              </div>
            </div>
          );
        }

        if (line.type === "tip") {
          return (
            <div
              key={i}
              className="terminal-line flex pl-5 gap-1.5 min-w-0"
              style={{ animationDelay: delay }}
            >
              <span className="font-mono text-[12px] leading-[1.6] text-[#555555] shrink-0">
                L
              </span>
              <span className="font-mono text-[12px] leading-[1.6] text-[#777777] truncate lg:overflow-visible lg:text-clip">
                {line.content}
              </span>
            </div>
          );
        }

        if (line.type === "result") {
          return (
            <div
              key={i}
              className="terminal-line flex flex-col pt-1.5 gap-1"
              style={{ animationDelay: delay }}
            >
              <div className="flex items-start gap-2 min-w-0">
                <div className="w-1.75 h-1.75 shrink-0 mt-1.25 rounded-full bg-[#CCCCCC]" />
                <span className="font-mono text-[12px] leading-[1.6] text-[#CCCCCC] truncate lg:overflow-visible lg:text-clip">
                  {line.content}
                </span>
              </div>
            </div>
          );
        }

        if (line.type === "cursor") {
          return (
            <div
              key={i}
              className="terminal-line flex items-center pt-2 gap-2"
              style={{ animationDelay: delay }}
            >
              <span className="font-mono text-[12px] leading-[1.6] text-[#CCCCCC] font-bold shrink-0">
                ›
              </span>
              <div className="terminal-cursor w-1.75 h-3.5 bg-[#CCCCCC] shrink-0" />
            </div>
          );
        }

        if (line.type === "footer") {
          return (
            <div
              key={i}
              className="terminal-line flex justify-between pt-1.5 border-t border-t-[#1A1A1A]"
              style={{ animationDelay: delay }}
            >
              <span className="font-mono text-[11px] leading-[1.6] text-[#5B8DEF] underline shrink-0">
                matias/damelo
              </span>
              <span className="font-mono text-[11px] leading-[1.6] text-[#555555] shrink-0">
                26%
              </span>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
