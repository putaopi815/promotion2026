// act3-project2.jsx — Chapter III · Mira 官网设计师能力探索
// Pages 8 → 11

// ─────────────── 08 · PROJECT 2 OVERVIEW ───────────────

function P2OverviewSection() {
  return (
    <section
      className="section"
      data-screen-label="08 Project 2 Overview"
      id="p2-overview">
      
      <GhostNumber n="08" />

      <div className="container">
        <SectionHeader
          index="§ 08"
          kicker="Chapter III"
          title="Mira官网"
          meta="30s" />
        

        <Reveal
          style={{
            fontSize: "clamp(28px, 3.8vw, 48px)",
            fontWeight: 300,
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
            color: "var(--fg)",
            maxWidth: "20ch",
            marginBottom: 64,
            textWrap: "balance"
          }}>
          
          一个项目, <span style={{ color: "var(--accent)" }}>两条线</span>。
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24
          }}>
          
          {[
          {
            tag: "线 1 · 执行性",
            en: "Line A · Execution",
            title: "视觉与动效设计",
            kicker: "视觉 + 动效 + 代码实现",
            direction: "→ 向工程下游延伸",
            tone: "warm"
          },
          {
            tag: "线 2 · 体系性",
            en: "Line B · Systematic",
            title: "架构与内容规划",
            kicker: "设计协作 Team",
            direction: "→ 方法论沉淀",
            tone: "cool"
          }].
          map((l, i) =>
          <Reveal
            key={i}
            delay={`${200 + i * 200}`}
            style={{
              padding: "clamp(24px, 3vw, 40px)",
              background: l.tone === "warm" ? "var(--bg-2)" : "var(--bg)",
              border: "1px solid var(--line-strong)",
              borderTop: `4px solid ${l.tone === "warm" ? "var(--accent)" : "var(--fg-2)"}`,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              minHeight: 240
            }}>
            
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                <span
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: l.tone === "warm" ? "var(--accent)" : "var(--fg-2)"
                }}>
                
                  {l.tag}
                </span>
                <span
                className="en"
                style={{
                  fontSize: 11,
                  color: "var(--muted)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase"
                }}>
                
                  {l.en}
                </span>
              </div>

              <div style={{ flex: 1 }}>
                <h3
                style={{
                  fontSize: "clamp(36px, 4.4vw, 60px)",
                  fontWeight: 500,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  marginBottom: 14
                }}>
                
                  {l.title}
                </h3>
                <div style={{ fontSize: 16, color: "var(--fg-2)" }}>{l.kicker}</div>
              </div>

              <div
              style={{
                paddingTop: 16,
                borderTop: "1px solid var(--line)",
                fontSize: 13,
                color: "var(--muted)",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.02em"
              }}>
              
                {l.direction}
              </div>
            </Reveal>
          )}
        </div>

      </div>
    </section>);

}

// ─────────────── 09 · VIBE CODING · 3 METHODS ───────────────

// Shared method data — referenced by each Vibe sub-section.
const VIBE_METHODS = [
  {
    n: "01",
    label: "方法 01",
    title: "Cursor 直出",
    sub: "Cursor → page · skip design",
    bullets: [
      "Cursor 直接生成页面, 跳过设计稿",
      "慢慢调视觉细节和微动效",
      "从 three.js 素材站提取代码, 丰富交互"
    ],
    feature: "不快, 但可控",
    tradeoff: "时间换精度 · 可以无限逼近想要的样子",
    depth: 1,
    url: "https://mira-landing-v1.vercel.app/"
  },
  {
    n: "02",
    label: "方法 02",
    title: "Claude Code Agent Team",
    sub: "Full-chain agent pipeline",
    pipeline: [
      ["01", "proposal", "品牌方向"],
      ["02", "brief atlas", "项目大纲"],
      ["03", "design tokens", "设计令牌"],
      ["04", "component DNA", "组件基因"],
      ["05", "hero motif", "核心视觉"],
      ["07", "design schema", "设计 schema"],
      ["08", "UI Desing", "视觉设计稿"],
      ["09", "site", "站点"]
    ],
    feature: "重, 但完整",
    tradeoff: "产出链路可长期沉淀",
    depth: 2,
    url: "https://mira-landing-sahara.vercel.app/"
  },
  {
    n: "03",
    label: "方法 03",
    title: "Claude Design",
    sub: "Design system → page",
    bullets: [
      "导入设计系统",
      "描述需求",
      "直接生成页面"
    ],
    feature: "依赖系统, 效率高",
    tradeoff: "适用于快速产出不同的风格稿",
    depth: 3,
    url: "https://claude.ai/design/p/e610c143-d9c8-4ce0-9d0d-0322c30585e5?file=index.html&via=share"
  }
];

function VibeMethodPage({ method, idx, showIntro }) {
  return (
    <section
      className="section"
      data-screen-label={`Vibe Method ${method.n}`}
      id={`p2-vibe-${method.n}`}>

      <GhostNumber n={`0${idx + 8}`} />

      <div className="container">
        <SectionHeader
          index={`§ 0${idx + 8}`}
          kicker="MIRA官网"
          title="视觉与动效"
          meta={`${idx + 1} / 3`} />

        {showIntro ?
          <Reveal style={{ fontSize: "clamp(17px, 1.6vw, 22px)", color: "var(--fg-2)", marginBottom: 32, lineHeight: 1.5 }}>
            我没有锁定一种工具 —— 3 个 HTML 分别试了 3 条路径。
          </Reveal> : null}

        <VibeMethodCard {...method} />
      </div>
    </section>);
}

function P2VibeSection() {
  return <VibeMethodPage method={VIBE_METHODS[0]} idx={0} showIntro={true} />;
}

function P2Vibe02Section() {
  return <VibeMethodPage method={VIBE_METHODS[1]} idx={1} showIntro={false} />;
}

function P2Vibe03Section() {
  return <VibeMethodPage method={VIBE_METHODS[2]} idx={2} showIntro={false} />;
}

// ─────────────── 13 · VIBE CODING · INSIGHT + RECIPE ───────────────

function P2VibeInsightSection() {
  return (
    <section
      className="section"
      data-screen-label="13 Vibe Insight"
      id="p2-vibe-insight">

      <GhostNumber n="13" />

      <div className="container">
        <SectionHeader
          index="§ 13"
          kicker="MIRA官网"
          title="AI协作心得"
          meta="Recipe · Insight" />

        {/* Insight one-liner + Recipe (stacked, full-width) */}
        <Reveal delay="200" style={{ marginBottom: 80 }}>
          {/* Insight one-liner sits above the table */}
          <div style={{ marginBottom: 32 }}>
            <div className="en" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 10 }}>
              Insight · My recipe
            </div>
            <div style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 400, lineHeight: 1.35, whiteSpace: "nowrap" }}>
              AI 不是一键生成器, 而是<span style={{ color: "var(--accent)" }}>分阶段</span>的杠杆。
            </div>
          </div>

          {/* Recipe table — single grid keeps columns aligned across all rows */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 240px) auto auto",
              columnGap: 24,
              rowGap: 0,
              width: "fit-content",
              alignItems: "baseline"
            }}>
            {[
            ["品牌调性 / 元素分析", "Claude Code Agent Team"],
            ["主视觉元素", "人工设计 + 第三方工具"],
            ["代码框架", "AI 实现大致结构"],
            ["细节调试", "回到 Cursor 慢慢调"]].
            map(([k, v], i) =>
            <React.Fragment key={i}>
              <span style={{ fontSize: 15, color: "var(--muted)", padding: "12px 0", borderBottom: "1px solid var(--line)" }}>{k}</span>
              <span style={{ color: "var(--accent)", fontSize: 18, padding: "12px 0", borderBottom: "1px solid var(--line)" }}>→</span>
              <span style={{ fontSize: 16, fontWeight: 500, color: "var(--fg)", padding: "12px 0", borderBottom: "1px solid var(--line)" }}>{v}</span>
            </React.Fragment>
            )}
          </div>
        </Reveal>

        {/* Closing manifesto */}
        <Reveal delay="300">
          <div
            style={{
              padding: "28px 0",
              borderTop: "1px solid var(--line-strong)",
              borderBottom: "1px solid var(--line-strong)",
              textAlign: "center"
            }}>

            <PullQuote
              style={{
                fontSize: "clamp(22px, 2.4vw, 30px)",
                margin: "0 auto",
                maxWidth: "40ch",
                lineHeight: 1.4
              }}>

              AI 提效是真的, 但好的设计仍然需要时间打磨
              <br />
              <span style={{ color: "var(--accent)" }}>
                指望一键生成, 只会产出「AI 时代的设计垃圾」。
              </span>
            </PullQuote>
          </div>
        </Reveal>
      </div>
    </section>);

}

function VibeMethodCard({ n, label, title, sub, bullets, pipeline, feature, tradeoff, depth, url }) {
  // depth controls left-rule weight, not color saturation — keep mono
  // All three method cards share the same bg-2 background for visual consistency
  const bg = "var(--bg-2)";
  return (
    <Reveal>
      <div
        style={{
          padding: "clamp(20px, 2.4vw, 32px)",
          background: bg,
          border: "1px solid var(--line)",
          borderLeft: "4px solid var(--accent)",
          display: "grid",
          gridTemplateColumns: "minmax(220px, 280px) 1fr",
          gap: "clamp(20px, 3vw, 40px)"
        }}>
        
        <div>
          <div
            className="en"
            style={{
              fontSize: 11,
              color: "var(--muted)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: 8
            }}>
            
            {label}
          </div>
          <div
            className="en"
            style={{
              fontSize: 56,
              fontWeight: 200,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "var(--accent)",
              marginBottom: 16
            }}>
            
            {n}
          </div>
          <h3
            style={{
              fontSize: "clamp(22px, 2.4vw, 30px)",
              fontWeight: 500,
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              marginBottom: 8
            }}>
            
            {title}
          </h3>
          <div className="mono" style={{ fontSize: 12, color: "var(--muted)" }}>
            {sub}
          </div>
        </div>

        <div>
          {/* Top-right case button — inline so it never overlaps the table */}
          {url ?
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 14 }}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 14px",
                  border: "1px solid var(--accent)",
                  color: "var(--accent)",
                  fontSize: 13,
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "background 0.2s, color 0.2s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--accent)";
                  e.currentTarget.style.color = "var(--bg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--accent)";
                }}>
                <span>查看 case</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>↗</span>
              </a>
            </div> : null}

          {bullets ?
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
              {bullets.map((b, i) =>
            <li
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: 12,
                fontSize: 15,
                color: "var(--fg-2)",
                lineHeight: 1.6
              }}>
              
                  <span className="en" style={{ color: "var(--muted)", fontSize: 12, paddingTop: 2 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{b}</span>
                </li>
            )}
            </ul> :
          null}

          {pipeline ?
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 1,
              background: "var(--line)",
              border: "1px solid var(--line)",
              marginBottom: 24
            }}>
            
              {pipeline.map(([code, en, cn], i) =>
            <div
              key={i}
              style={{
                background: "var(--bg)",
                padding: "12px 14px",
                display: "flex",
                flexDirection: "column",
                gap: 4
              }}>
              
                  <div className="en" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.1em" }}>
                    {code}
                  </div>
                  <div className="mono" style={{ fontSize: 11, color: "var(--fg-2)" }}>
                    {en}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{cn}</div>
                </div>
            )}
            </div> :
          null}

          {/* Feature row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 14,
              paddingTop: 16,
              borderTop: "1px dashed var(--line-strong)"
            }}>

            <span
              style={{
                display: "inline-block",
                padding: "4px 10px",
                background: "var(--accent)",
                color: "var(--bg)",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.02em",
                flexShrink: 0
              }}>

              特点
            </span>
            <div style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
              <span style={{ fontSize: 16, fontWeight: 500 }}>{feature}</span>
              <span style={{ color: "var(--muted-2)" }}>·</span>
              <span style={{ fontSize: 13, color: "var(--muted)" }}>{tradeoff}</span>
            </div>
          </div>

        </div>
      </div>
    </Reveal>);

}

// ─────────────── 10 · AGENT TEAM ───────────────

function P2AgentTeamSection() {
  const stages = [
  ["00", "inputs"],
  ["01", "narrative\nstrategy"],
  ["02", "audience"],
  ["03", "priority\nprinciples"],
  ["04", "IA / sitemap"],
  ["05", "homepage\nframework"],
  ["06", "core pages"],
  ["07", "content\ndrafts"],
  ["08", "handoff"],
  ["99", "decisions"]];


  return (
    <section
      className="section"
      data-screen-label="10 Agent Team"
      id="p2-agent">
      
      <GhostNumber n="10" />

      <div className="container" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <SectionHeader
          index="§ 10"
          kicker="MIRA官网"
          title="架构与内容规划"
          meta="2 min" />

        {/* Content centered vertically */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "clamp(40px, 6vh, 72px)" }}>

          {/* Hero: stat + intro */}
          <Reveal delay="100">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "clamp(40px, 5vw, 80px)",
                alignItems: "center"
              }}>
              <div>
                <div className="en" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}>
                  Collaboration stages
                </div>
                <div className="en" style={{ fontSize: "clamp(96px, 12vw, 180px)", fontWeight: 200, lineHeight: 0.9, color: "var(--accent)", letterSpacing: "-0.04em", fontVariantNumeric: "tabular-nums" }}>
                  9
                </div>
              </div>
              <div style={{ fontSize: "clamp(18px, 1.8vw, 22px)", lineHeight: 1.6, color: "var(--fg-2)" }}>
                进入 Growth 团队的第一仗 —— 规划新版 Mira 官网的<span style={{ color: "var(--fg)", fontWeight: 500 }}>信息架构 + 内容</span>。
                <div style={{ marginTop: 14, fontSize: 14, color: "var(--muted)" }}>我选择编排一个 Agent Team 来协作。</div>
              </div>
            </div>
          </Reveal>

          {/* 9-stage pipeline — 3-row grid keeps the connector line on the circle's row */}
          <Reveal delay="300">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${stages.length}, minmax(0, 1fr))`,
                gridTemplateRows: "auto 16px auto",
                rowGap: 14,
                position: "relative",
                padding: "32px 0"
              }}>
              {/* Connector line — sits in row 2 (circle row), spans every column */}
              <div
                style={{
                  gridColumn: `1 / span ${stages.length}`,
                  gridRow: "2 / 3",
                  alignSelf: "center",
                  height: 1,
                  background: "var(--line-strong)",
                  marginLeft: "calc(100% / " + (stages.length * 2) + ")",
                  marginRight: "calc(100% / " + (stages.length * 2) + ")"
                }} />

              {stages.map(([code, name], i) =>
              <React.Fragment key={i}>
                {/* Row 1 · code */}
                <div
                  className="en"
                  style={{
                    gridColumn: `${i + 1} / span 1`,
                    gridRow: "1 / 2",
                    textAlign: "center",
                    fontSize: 11,
                    color: i === stages.length - 1 ? "var(--accent)" : "var(--muted)",
                    letterSpacing: "0.1em",
                    fontVariantNumeric: "tabular-nums",
                    fontWeight: i === stages.length - 1 ? 500 : 400
                  }}>
                  {code}
                </div>
                {/* Row 2 · circle */}
                <div
                  style={{
                    gridColumn: `${i + 1} / span 1`,
                    gridRow: "2 / 3",
                    justifySelf: "center",
                    alignSelf: "center",
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    background: i === stages.length - 1 ? "var(--accent)" : "var(--bg)",
                    border: `1.5px solid ${i === stages.length - 1 ? "var(--accent)" : "var(--fg-2)"}`,
                    boxShadow: i === stages.length - 1 ? "0 0 0 6px var(--accent-soft)" : "none",
                    position: "relative",
                    zIndex: 1
                  }} />
                {/* Row 3 · name */}
                <div
                  className="mono"
                  style={{
                    gridColumn: `${i + 1} / span 1`,
                    gridRow: "3 / 4",
                    fontSize: 11,
                    color: i === stages.length - 1 ? "var(--fg)" : "var(--fg-2)",
                    fontWeight: i === stages.length - 1 ? 500 : 400,
                    lineHeight: 1.3,
                    textAlign: "center",
                    whiteSpace: "pre-line",
                    minHeight: 32,
                    padding: "0 4px"
                  }}>
                  {name}
                </div>
              </React.Fragment>
              )}
            </div>
          </Reveal>
        </div>

      </div>
    </section>);

}

// ─────────────── 11 · AGENT TEAM · DELIVERABLES + SEDIMENT ───────────────

function P2AgentTeamBSection() {
  return (
    <section
      className="section"
      data-screen-label="11 Agent Team Deliverables"
      id="p2-agent-b">

      <GhostNumber n="11" />

      <div className="container">
        <SectionHeader
          index="§ 11"
          kicker="MIRA官网"
          title="交付物 + 沉淀"
          meta="Deliverables · Sediment"
          style={{ marginBottom: 0 }} />

        {/* Two-column: left = deliverables + sediment, right = screenshot */}
        <div style={{ marginTop: 100, display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "clamp(32px, 4vw, 64px)", alignItems: "start" }}>
          {/* Left column · content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(28px, 5vh, 56px)" }}>
            {/* Deliverables */}
            <Reveal delay="100">
              <div className="en" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 14 }}>
                Deliverables
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  ["sitemap", "信息架构"],
                  [".md", "各页面内容文案"],
                  ["pencil", "原型稿"]
                ].map(([code, label], i) =>
                  <li
                    key={i}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "120px 1fr",
                      gap: 16,
                      paddingBottom: 10,
                      borderBottom: "1px solid var(--line)",
                      alignItems: "baseline"
                    }}>
                    <span className="mono" style={{ fontSize: 12, color: "var(--muted)" }}>{code}</span>
                    <span style={{ fontSize: 17, fontWeight: 500 }}>{label}</span>
                  </li>
                )}
              </ul>
            </Reveal>

            {/* Sediment block */}
            <Reveal delay="300">
              <div
                style={{
                  padding: "clamp(24px, 3vw, 40px)",
                  background: "var(--fg)",
                  color: "var(--bg)"
                }}>
                <div style={{ fontSize: 14, opacity: 0.55, marginBottom: 6 }}>沉淀成可复用 Team</div>
                <div className="mono" style={{ fontSize: "clamp(16px, 1.8vw, 22px)", fontWeight: 500, letterSpacing: "-0.005em" }}>
                  ai-product-website-content team
                </div>
                <div style={{ marginTop: 8, fontSize: 13, opacity: 0.75 }}>
                  未来 AI 产品官网整改可直接复用 —— 业务需求会变, 这套协作方式一直在。
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right column · screenshot */}
          <Reveal delay="200">
            <div style={{ position: "sticky", top: 120, display: "flex", flexDirection: "column", gap: 10 }}>
              <img
                src="uploads/case3-dession1.jpg"
                alt="Pencil 交互稿全景 / 内容 md 文件夹"
                style={{ width: "100%", height: "auto", display: "block", border: "1px solid var(--line)" }} />
              <div className="mono" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em" }}>
                EVIDENCE-E11 · Pencil 交互稿全景 / 内容 md 文件夹
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}

// ─────────────── 11 · WRAP + SIDE PROJECT ───────────────

function P2WrapSection() {
  return (
    <section
      className="section"
      data-screen-label="11 Wrap"
      id="p2-wrap">
      
      <GhostNumber n="11" />

      <div className="container">
        <SectionHeader
          index="§ 11"
          kicker="MIRA官网"
          title="留下了什么"
          meta="1 min" />
        

        {/* Wrap */}
        <Reveal>
          <div style={{ fontSize: "clamp(18px, 1.8vw, 22px)", lineHeight: 1.7, color: "var(--fg-2)", marginBottom: 32 }}>
            官网目前还没有最终定稿 —— 后续会继续深入研究内容规划和页面设计。<br />
            <span style={{ color: "var(--fg)", fontWeight: 500 }}>
              这一期我已经留下了两件东西。
            </span>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24
          }}>

          {[
          ["01", "不同路径尝试的实践经验", "可按需选用", "Recipe"],
          ["02", "一套官网设计协作 Agent Team", "可复用", "Reusable Team"]].
          map(([n, t, kind, en], i) =>
          <Reveal
            key={i}
            delay={`${200 + i * 150}`}
            style={{
              padding: "clamp(28px, 3.5vw, 48px)",
              background: "var(--bg-2)",
              borderLeft: "3px solid var(--accent)",
              minHeight: 240
            }}>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
                <span className="en" style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.16em" }}>RETAINED · {n}</span>
                <span className="mono" style={{ fontSize: 11, color: "var(--muted)" }}>{en}</span>
              </div>
              <div style={{ fontSize: "clamp(22px, 2.4vw, 32px)", fontWeight: 500, lineHeight: 1.3, marginBottom: 12 }}>
                {t}
              </div>
              <div className="tag tag--accent">{kind}</div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

// ─────────────── 16 · SIDE PROJECT (BONUS) ───────────────

function P2BonusSection() {
  return (
    <section
      className="section"
      data-screen-label="16 Bonus"
      id="p2-bonus">

      <GhostNumber n="16" />

      <div className="container">
        <SectionHeader
          index="§ 16"
          kicker="MIRA官网"
          title="一个小番外"
          meta="Side project" />

        <Reveal>
          <div
            style={{
              fontSize: "clamp(18px, 1.8vw, 22px)",
              lineHeight: 1.7,
              color: "var(--fg-2)",
              marginBottom: 32
            }}>
            代码之于我而言是一个黑盒, 数月前开始学习 Vibe Coding, 落地过 2 个移动端 html 产品。
          </div>
        </Reveal>

        {/* Audio struggle log */}
        <Reveal delay="200">
          <div
            style={{
              background: "var(--bg-2)",
              padding: "clamp(20px, 2.5vw, 28px)",
              marginBottom: 24
            }}>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <div className="mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                Log · 搞定音频
              </div>
              <a
                href="https://11days-phonics-a4e5.vercel.app/today"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 14px",
                  border: "1px solid var(--accent)",
                  color: "var(--accent)",
                  fontSize: 13,
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "background 0.2s, color 0.2s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--accent)";
                  e.currentTarget.style.color = "var(--bg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--accent)";
                }}>
                <span>查看 case</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>↗</span>
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {[
              ["AI 直接生成的音标音频不标准", "✗ 砍", false],
              ["接 OpenAI API 成功, 但没额度", "✗ 砍", false],
              ["Mac 自带 CLI speak —— 单音节 OK · 双音节出错。于是先用 speak 解决单词音频问题, 写脚本跑了 400 个单词。", "△ 部分用", true]].
              map(([line, status, partial], i) =>
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto",
                  gap: 14,
                  alignItems: "center",
                  padding: "8px 14px",
                  background: "var(--bg)",
                  borderLeft: `2px solid ${partial ? "var(--accent)" : "var(--muted-2)"}`
                }}>

                  <span className="en" style={{ fontSize: 10, color: "var(--muted)", minWidth: 24 }}>
                    0{i + 1}
                  </span>
                  <span style={{ fontSize: 14, color: partial ? "var(--fg)" : "var(--muted)" }}>
                    {line}
                  </span>
                  <span className="mono" style={{ fontSize: 11, color: partial ? "var(--accent)" : "var(--muted-2)" }}>
                    {status}
                  </span>
                </div>
              )}
            </div>

            <div
              style={{
                marginTop: 14,
                padding: "12px 16px",
                background: "var(--accent-soft)",
                borderLeft: "2px solid var(--accent)",
                fontSize: 14
              }}>

              <span className="en" style={{ fontSize: 10, color: "var(--accent)", letterSpacing: "0.16em", marginRight: 10 }}>
                FINAL
              </span>
              音标音频 —— 为了实现快速落地, 我选择最快速的方式: 自己录。
            </div>
          </div>
        </Reveal>

        {/* Closing line */}
        <Reveal delay="300">
          <PullQuote
            style={{
              fontSize: "clamp(24px, 2.6vw, 34px)",
              textAlign: "center",
              margin: "32px auto 0",
              maxWidth: "none",
              lineHeight: 1.3,
              whiteSpace: "nowrap"
            }}>

            AI 是杠杆, <span style={{ color: "var(--accent)" }}>撬不动的部分需要自己变通解决。</span>
          </PullQuote>
        </Reveal>
      </div>
    </section>);

}

Object.assign(window, {
  P2OverviewSection,
  P2VibeSection,
  P2Vibe02Section,
  P2Vibe03Section,
  P2VibeInsightSection,
  P2AgentTeamSection,
  P2AgentTeamBSection,
  P2WrapSection,
  P2BonusSection
});