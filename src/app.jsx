// app.jsx — main shell + Tweaks integration

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "accent": "terra",
  "font": "inter",
  "snap": true
}/*EDITMODE-END*/;

const SECTIONS = [
  { id: "cover", label: "封面", short: "00" },
  { id: "numbers", label: "关于我的一组数字", short: "01" },
  { id: "directions", label: "三个方向", short: "02" },
  { id: "p1-overview", label: "Mira · 两个需求", short: "03" },
  { id: "p1-flow", label: "交互布局与任务流程 · 工作链路", short: "04" },
  { id: "p1-decision-01", label: "决策 01 · Mira 三栏划分", short: "05" },
  { id: "p1-decision-02", label: "决策 02 · 文件三层展示体系", short: "06" },
  { id: "p1-decision-03", label: "决策 03 · Clarify 多形态拆分", short: "07" },
  { id: "p1-outcome", label: "做成了什么 + 收获了什么", short: "08" },
  { id: "p1-canvas-intro", label: "Canvas · 行业范式 + 我的定义", short: "09" },
  { id: "p1-canvas", label: "Canvas · 决策 01 · 02", short: "10" },
  { id: "p1-canvas-b", label: "Canvas · 决策 03 · 04", short: "11" },
  { id: "p1-canvas-output", label: "Canvas · 产出", short: "12" },
  { id: "p1-synth", label: "两件事的共性", short: "13" },
  { id: "p2-overview", label: "Mira 官网 · 两个范畴", short: "14" },
  { id: "p2-vibe-01", label: "方法 01 · Cursor 直出", short: "15" },
  { id: "p2-vibe-02", label: "方法 02 · Claude Code Agent Team", short: "16" },
  { id: "p2-vibe-03", label: "方法 03 · Claude Design", short: "17" },
  { id: "p2-vibe-insight", label: "AI协作心得", short: "18" },
  { id: "p2-agent", label: "架构与内容规划 · 9 阶段", short: "19" },
  { id: "p2-agent-b", label: "架构与内容规划 · 交付 + 沉淀", short: "20" },
  { id: "p2-wrap", label: "留下了什么", short: "21" },
  { id: "p2-bonus", label: "一个小番外", short: "22" },
  { id: "radar", label: "这一年我的能力变化", short: "23" },
  { id: "commit", label: "未来展望", short: "24" },
  { id: "finale", label: "The Closing Line · 谢谢", short: "25" },
];

const CHAPTER_FOR = (idx) => {
  if (idx <= 2) return "Chapter I · 关于我";
  if (idx <= 13) return "Chapter II · 项目 1 · Mira";
  if (idx <= 22) return "Chapter III · 项目 2 · 官网";
  if (idx <= 24) return "Chapter IV · 未来";
  return "Chapter IV · 收束";
};

function TopBar({ progress, activeIdx }) {
  return (
    <>
      <div className="topbar">
        <div className="topbar__brand">
          <span className="glyph" />
          <span>Fancy Liu</span>
          <span style={{ color: "var(--muted-2)", margin: "0 8px" }}>·</span>
          <span style={{ color: "var(--muted)" }}>晋升 P7 述职</span>
        </div>
        <div className="topbar__meta">
          <span>{CHAPTER_FOR(activeIdx)}</span>
          <span className="sep">·</span>
          <span style={{ color: "var(--fg-2)", fontWeight: 500 }}>
            {String(activeIdx).padStart(2, "0")}
            <span style={{ color: "var(--muted-2)" }}> / {String(SECTIONS.length - 1).padStart(2, "0")}</span>
          </span>
        </div>
      </div>
      <div className="progress" style={{ width: `${progress * 100}%` }} />
    </>
  );
}

// Anchor groups — fewer dots, grouped by chapter + case.
const NAV_GROUPS = [
  { label: "Chapter I · 关于我",            startId: "cover",            endId: "directions" },
  { label: "Chapter II · Case 1 · 交互布局与流程", startId: "p1-overview",      endId: "p1-outcome" },
  { label: "Chapter II · Case 2 · Canvas Framework", startId: "p1-canvas-intro", endId: "p1-canvas-output" },
  { label: "Chapter II · 共性",             startId: "p1-synth",         endId: "p1-synth" },
  { label: "Chapter III · 视觉与动效",       startId: "p2-overview",      endId: "p2-vibe-insight" },
  { label: "Chapter III · 架构与内容",       startId: "p2-agent",         endId: "p2-agent-b" },
  { label: "Chapter III · 番外 + 收束",      startId: "p2-wrap",          endId: "p2-bonus" },
  { label: "Chapter IV · 未来",             startId: "radar",            endId: "commit" },
  { label: "Chapter IV · 收束",             startId: "finale",           endId: "finale" }
];

function SideNav({ activeIdx, onJump }) {
  // Map current activeIdx to group index.
  const idToIdx = Object.fromEntries(SECTIONS.map((s, i) => [s.id, i]));
  const groups = NAV_GROUPS.map((g) => ({
    ...g,
    startIdx: idToIdx[g.startId],
    endIdx: idToIdx[g.endId]
  }));
  const activeGroupIdx = groups.findIndex((g) => activeIdx >= g.startIdx && activeIdx <= g.endIdx);

  return (
    <nav className="sidenav" aria-label="Section navigation">
      {groups.map((g, i) => (
        <button
          key={g.label}
          className={`sidenav__item ${i === activeGroupIdx ? "is-active" : ""}`}
          onClick={() => onJump(g.startId)}
          title={g.label}
        >
          <span className="label">{g.label}</span>
          <span className="dot" />
        </button>
      ))}
    </nav>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const progress = useScrollProgress();
  const [activeIdx, setActiveIdx] = React.useState(0);

  // Apply tweak attributes to documentElement
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", t.theme);
    document.documentElement.setAttribute("data-accent", t.accent);
    document.documentElement.setAttribute("data-font", t.font);
    document.documentElement.setAttribute("data-snap", t.snap ? "on" : "off");
  }, [t.theme, t.accent, t.font, t.snap]);

  // Track which section is active
  React.useEffect(() => {
    const observers = [];
    const els = SECTIONS.map((s) => document.getElementById(s.id));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = els.indexOf(e.target);
            if (idx >= 0) setActiveIdx(idx);
          }
        });
      },
      { threshold: 0, rootMargin: "-40% 0px -50% 0px" }
    );
    els.forEach((el) => el && io.observe(el));
    observers.push(io);
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Keyboard + wheel nav. CSS scroll-snap (mandatory + stop:always) handles
  // most snapping, but JS guarantees: 1 keypress = exactly 1 section jump
  // regardless of where the user is inside the current section.
  React.useEffect(() => {
    if (!t.snap) return;

    const getCurrent = (els, y) => {
      // Section the viewport center is over.
      const probe = y + window.innerHeight / 2;
      let cur = 0;
      els.forEach((el, i) => {
        if (el.offsetTop <= probe) cur = i;
      });
      return cur;
    };

    const goTo = (els, idx) => {
      const el = els[idx];
      if (!el) return;
      window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
    };

    const onKey = (e) => {
      const tag = (document.activeElement && document.activeElement.tagName) || "";
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

      const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
      if (!els.length) return;
      const cur = getCurrent(els, window.scrollY);

      let target = cur;
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") target = Math.min(els.length - 1, cur + 1);
      else if (e.key === "ArrowUp" || e.key === "PageUp") target = Math.max(0, cur - 1);
      else if (e.key === "Home") target = 0;
      else if (e.key === "End") target = els.length - 1;
      else return;

      e.preventDefault();
      goTo(els, target);
    };

    // Wheel: 1 swipe = 1 section jump. Blocks ALL native scrolling while
    // locked, then snaps to target section. After the smooth scroll settles
    // we keep the lock until trackpad inertia events die down (idle 150ms).
    let wheelLock = false;
    let wheelIdleTimer = null;
    let unlockTimer = null;

    const onWheel = (e) => {
      // Capture ALL wheel events while locked to absorb trackpad inertia.
      e.preventDefault();

      if (wheelLock) {
        // Reset idle timer — extend lock while inertia keeps firing.
        clearTimeout(wheelIdleTimer);
        wheelIdleTimer = setTimeout(() => { wheelLock = false; }, 150);
        return;
      }

      const dy = e.deltaY;
      if (Math.abs(dy) < 1) return;

      const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
      if (!els.length) return;
      const cur = getCurrent(els, window.scrollY);
      const dir = dy > 0 ? 1 : -1;
      const target = Math.max(0, Math.min(els.length - 1, cur + dir));
      if (target === cur) return;

      wheelLock = true;
      goTo(els, target);

      // After the smooth scroll finishes (~600ms), start the idle timer.
      // Each subsequent wheel event resets it (see above).
      clearTimeout(unlockTimer);
      unlockTimer = setTimeout(() => {
        clearTimeout(wheelIdleTimer);
        wheelIdleTimer = setTimeout(() => { wheelLock = false; }, 150);
      }, 600);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", onWheel);
      clearTimeout(wheelIdleTimer);
      clearTimeout(unlockTimer);
    };
  }, [t.snap]);

  const jump = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <TopBar progress={progress} activeIdx={activeIdx} />
      <SideNav activeIdx={activeIdx} onJump={jump} />

      <main>
        <CoverSection />
        <NumbersSection />
        <DirectionsSection />
        <P1OverviewSection />
        <P1FlowSection />
        <P1Decision01Section />
        <P1Decision02Section />
        <P1Decision03Section />
        <P1OutcomeSection />
        <P1CanvasIntroSection />
        <P1CanvasSection />
        <P1CanvasBSection />
        <P1CanvasOutputSection />
        <P1SynthesisSection />
        <P2OverviewSection />
        <P2VibeSection />
        <P2Vibe02Section />
        <P2Vibe03Section />
        <P2VibeInsightSection />
        <P2AgentTeamSection />
        <P2AgentTeamBSection />
        <P2WrapSection />
        <P2BonusSection />
        <ClosingRadarSection />
        <ClosingCommitSection />
        <ClosingFinaleSection />
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
