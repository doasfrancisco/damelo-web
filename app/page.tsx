import Image from "next/image";
import { HeroTerminal } from "./hero-terminal";
import { InstallCommand } from "./install-command";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full bg-black antialiased text-sm">
      {/* Navbar */}
      <nav className="flex justify-between items-center w-full py-6 px-6 lg:px-20">
        <Image
          src="/logo.png"
          alt="DAMELO.SH"
          width={200}
          height={40}
          className="h-8 lg:h-10 w-auto"
        />
        <a
          href="https://github.com/Damelo-MCP/mcp"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#FFFFFF"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span className="text-white font-medium text-[18px] hidden lg:inline">
            GitHub
          </span>
        </a>
      </nav>

      {/* Hero */}
      <main className="flex flex-col lg:flex-row lg:justify-center items-center pt-12 lg:pt-20 pb-15 gap-10 lg:gap-20 px-6 lg:px-32">
        <div className="flex flex-col max-w-140 gap-6">
          <h1 className="text-[36px] lg:text-[56px] tracking-[-2px] leading-[1.05] text-white font-extrabold italic">
            Share your AI sessions with your team.
          </h1>
          <p className="text-[16px] lg:text-[18px] leading-[1.6] text-[#888888]">
            Export, import, and browse Claude Code sessions across your
            organization. Nothing gets lost.
          </p>

          <InstallCommand />
        </div>

        {/* Terminal Mockup — animated */}
        <HeroTerminal />
      </main>

      {/* How to use */}
      <section className="flex flex-col items-center pt-12 lg:pt-20 pb-10 gap-10 px-6 lg:px-20">
        <h2 className="uppercase tracking-[2px] text-[#555555] font-bold text-sm">
          How to use
        </h2>
        <div className="flex flex-col lg:flex-row w-full lg:px-20 gap-6">
          {/* Talk to Claude */}
          <div className="flex flex-col lg:w-1/2 rounded-xl gap-5 bg-black border border-solid border-[#222222] shrink-0 p-6 lg:p-8">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center rounded-lg bg-[#1A1A1A] border border-solid border-[#333333] shrink-0 size-8 overflow-hidden">
                <Image
                  src="/claude-icon.png"
                  alt=""
                  width={19}
                  height={19}
                  className="shrink-0"
                />
              </div>
              <h3 className="text-white font-semibold text-lg">
                Talk to Claude
              </h3>
            </div>
            <p className="text-[15px] leading-[1.6] text-[#666666]">
              Just ask Claude to export, import, or browse sessions. The MCP
              handles everything behind the scenes.
            </p>
            <div className="flex flex-col rounded-[10px] py-4 px-5 gap-1 bg-black font-mono overflow-hidden">
              <div className="flex rounded-[3px] py-1 px-2 gap-2 bg-[#0c0c0c]">
                <span className="text-[12px] leading-[1.6] text-[#CCCCCC] font-bold shrink-0">
                  ›
                </span>
                <span className="text-[12px] leading-[1.6] text-white font-semibold truncate lg:overflow-visible lg:text-clip">
                  export this to damelo
                </span>
              </div>
              <div className="flex items-start pt-1.5 gap-2 min-w-0">
                <div className="w-1.75 h-1.75 mt-1.25 shrink-0 rounded-full bg-[#CCCCCC]" />
                <span className="text-[12px] leading-[1.6] text-[#CCCCCC] truncate lg:overflow-visible lg:text-clip">
                  share – export_session (MCP)
                </span>
              </div>
              <div className="flex items-start pt-1 gap-2 min-w-0">
                <div className="w-1.75 h-1.75 mt-1.25 shrink-0 rounded-full bg-[#CCCCCC]" />
                <span className="text-[12px] leading-[1.6] text-[#CCCCCC] truncate lg:overflow-visible lg:text-clip">
                  Exported:{" "}
                  <a
                    href="https://damelo.sh/reports/doasfrancisco/37bbfdc4-f961-4b66-b016-bb6ffd2bed22_20260330_152905"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5B8DEF] underline hover:opacity-80"
                  >
                    damelo.sh/r/37bbfdc4
                  </a>
                </span>
              </div>
              <div className="flex items-center pt-1.5 gap-2">
                <span className="text-[12px] leading-[1.6] text-[#CCCCCC] font-bold shrink-0">
                  ›
                </span>
                <div className="w-1.75 h-3.5 bg-[#CCCCCC] shrink-0" />
              </div>
              <div className="flex justify-between pt-1 border-t border-t-[#1A1A1A]">
                <span className="text-[11px] leading-[1.6] text-[#5B8DEF] underline shrink-0">
                  matias/damelo
                </span>
                <span className="text-[11px] leading-[1.6] text-[#555555] shrink-0">
                  26%
                </span>
              </div>
            </div>
          </div>

          {/* Use /tomalo */}
          <div className="flex flex-col grow shrink basis-0 rounded-xl gap-5 bg-black border border-solid border-[#222222] p-6 lg:p-8">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center rounded-lg bg-[#1A1A1A] border border-solid border-[#333333] shrink-0 size-8">
                <span className="font-mono text-[#CCCCCC] font-bold text-sm">
                  /
                </span>
              </div>
              <h3 className="text-white font-semibold text-lg">
                Use /tomalo
              </h3>
            </div>
            <p className="text-[15px] leading-[1.6] text-[#666666]">
              Run the slash command. It exports in the background while you keep
              working.
            </p>
            <div className="flex flex-col rounded-[10px] py-4 px-5 gap-1 bg-black font-mono overflow-hidden">
              <div className="flex rounded-[3px] py-1 px-2 gap-2 bg-[#0c0c0c]">
                <span className="text-[12px] leading-[1.6] text-[#CCCCCC] font-bold shrink-0">
                  ›
                </span>
                <span className="text-[12px] leading-[1.6] text-white font-semibold truncate lg:overflow-visible lg:text-clip">
                  /tomalo
                </span>
              </div>
              <div className="flex items-start pt-1.5 gap-2 min-w-0">
                <div className="w-1.75 h-1.75 mt-1.25 shrink-0 rounded-full bg-[#CCCCCC]" />
                <span className="text-[12px] leading-[1.6] text-[#CCCCCC] truncate lg:overflow-visible lg:text-clip">
                  session-exporter(Export session to D&aacute;melo)
                </span>
              </div>
              <div className="flex pl-5 gap-1.5 min-w-0">
                <span className="text-[12px] leading-[1.6] text-[#555555] shrink-0">
                  L
                </span>
                <span className="text-[12px] leading-[1.6] text-[#777777] truncate lg:overflow-visible lg:text-clip">
                  Backgrounded agent (↓ to manage)
                </span>
              </div>
              <div className="flex items-start pt-1 gap-2 min-w-0">
                <div className="w-1.75 h-1.75 mt-1.25 shrink-0 rounded-full bg-[#CCCCCC]" />
                <span className="text-[12px] leading-[1.6] text-[#CCCCCC] truncate lg:overflow-visible lg:text-clip">
                  Exporting in the background. I&apos;ll let you know...
                </span>
              </div>
              <div className="flex items-start pt-1 gap-2 min-w-0">
                <div className="w-1.75 h-1.75 mt-1.25 shrink-0 rounded-full bg-[#4EC86C]" />
                <span className="text-[12px] leading-[1.6] text-[#4EC86C] truncate lg:overflow-visible lg:text-clip">
                  Agent &quot;Export session to D&aacute;melo&quot; completed
                </span>
              </div>
              <div className="flex items-start pt-1 gap-2 min-w-0">
                <div className="w-1.75 h-1.75 mt-1.25 shrink-0 rounded-full bg-[#CCCCCC]" />
                <span className="text-[12px] leading-[1.6] text-[#CCCCCC] truncate lg:overflow-visible lg:text-clip">
                  Export done.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="flex flex-col items-center pt-12 lg:pt-20 pb-10 gap-10 px-6 lg:px-20">
        <h2 className="uppercase tracking-[2px] text-[#555555] font-bold text-sm">
          Examples
        </h2>
        <div className="flex flex-col lg:flex-row w-full lg:px-20 gap-6">
          <div className="flex flex-col grow shrink basis-0 rounded-xl gap-3 bg-[#111111] border border-solid border-[#222222] p-6">
            <h3 className="text-white font-semibold text-base">
              Export a session
            </h3>
            <div className="flex flex-col rounded-lg py-3 px-4 gap-0.5 bg-black">
              <div className="flex items-start gap-2">
                <span className="font-mono text-[12px] leading-[1.6] text-[#CCCCCC] shrink-0">
                  ›
                </span>
                <span className="font-mono text-[12px] leading-[1.6] text-white font-semibold truncate lg:overflow-visible lg:text-clip">
                  export this to damelo
                </span>
              </div>
              <div className="flex items-start pt-1 gap-2">
                <div className="shrink-0 mt-1.25 rounded-full bg-[#CCCCCC] size-1.5" />
                <span className="font-mono text-[12px] leading-[1.6] text-[#777777] truncate lg:overflow-visible lg:text-clip">
                  share – export_session (MCP)
                </span>
              </div>
            </div>
            <p className="text-[14px] leading-[1.5] text-[#666666]">
              Just tell Claude to export. The MCP handles everything.
            </p>
          </div>
          <div className="flex flex-col grow shrink basis-0 rounded-xl gap-3 bg-[#111111] border border-solid border-[#222222] p-6">
            <h3 className="text-white font-semibold text-base">
              Browse team sessions
            </h3>
            <div className="flex flex-col rounded-lg py-3 px-4 gap-0.5 bg-black">
              <div className="flex items-start gap-2">
                <span className="font-mono text-[12px] leading-[1.6] text-[#CCCCCC] shrink-0">
                  ›
                </span>
                <span className="font-mono text-[12px] leading-[1.6] text-white font-semibold truncate lg:overflow-visible lg:text-clip">
                  show me team sessions
                </span>
              </div>
              <div className="flex items-start pt-1 gap-2">
                <div className="shrink-0 mt-1.25 rounded-full bg-[#CCCCCC] size-1.5" />
                <span className="font-mono text-[12px] leading-[1.6] text-[#777777] truncate lg:overflow-visible lg:text-clip">
                  share – list_team_sessions (MCP)
                </span>
              </div>
            </div>
            <p className="text-[14px] leading-[1.5] text-[#666666]">
              See what your teammates shipped, debugged, or discovered.
            </p>
          </div>
          <div className="flex flex-col grow shrink basis-0 rounded-xl gap-3 bg-[#111111] border border-solid border-[#222222] p-6">
            <h3 className="text-white font-semibold text-base">
              Import a session
            </h3>
            <div className="flex flex-col rounded-lg py-3 px-4 gap-0.5 bg-black">
              <div className="flex items-start gap-2">
                <span className="font-mono text-[12px] leading-[1.6] text-[#CCCCCC] shrink-0">
                  ›
                </span>
                <span className="font-mono text-[12px] leading-[1.6] text-white font-semibold truncate lg:overflow-visible lg:text-clip">
                  import carlos&apos;s last session
                </span>
              </div>
              <div className="flex items-start pt-1 gap-2">
                <div className="shrink-0 mt-1.25 rounded-full bg-[#CCCCCC] size-1.5" />
                <span className="font-mono text-[12px] leading-[1.6] text-[#777777] truncate lg:overflow-visible lg:text-clip">
                  share – import_session (MCP)
                </span>
              </div>
            </div>
            <p className="text-[14px] leading-[1.5] text-[#666666]">
              Pull a teammate&apos;s session into your local Claude Code
              context.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col items-center pt-12 lg:pt-20 pb-10 gap-6 border-t border-t-[#1A1A1A] px-6 lg:px-20">
        <Image
          src="/logo.png"
          alt="DAMELO.SH"
          width={120}
          height={24}
          className="h-6 w-auto"
        />
        <div className="flex items-center gap-8">
          <a
            href="https://x.com/doasfrancisco"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#666666"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span className="text-[#666666] font-medium text-sm">Twitter</span>
          </a>
          <a
            href="https://github.com/Damelo-MCP/mcp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#666666"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span className="text-[#666666] font-medium text-sm">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/matiasavenda222/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#666666"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="text-[#666666] font-medium text-sm">
              LinkedIn
            </span>
          </a>
        </div>
        <span className="pt-4 text-[#333333] text-xs">
          Built for teams that ship with AI.
        </span>
      </footer>
    </div>
  );
}
