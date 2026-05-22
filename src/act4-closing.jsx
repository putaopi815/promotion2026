// act4-closing.jsx — Chapter IV · Closing
// Pages 12 → 13: Capability Radar + Next Cycle

// ─────────────── 12 · CAPABILITY RADAR ───────────────

const RADAR_DIMS = [
{ key: "vis", cn: "视觉表现力", en: "Visual", before: 0.86, after: 0.92, delta: "效率提升", shift: false },
{ key: "ix", cn: "交互设计", en: "Interaction", before: 0.86, after: 0.92, delta: "效率提升", shift: false },
{ key: "ia", cn: "信息架构", en: "IA", before: 0.78, after: 0.86, delta: "效率提升", shift: false },
{ key: "ds", cn: "设计系统", en: "Design System", before: 0.74, after: 0.82, delta: "效率提升", shift: false },
{ key: "pd", cn: "产品判断", en: "Product Judgement", before: 0.50, after: 0.84, delta: "执行 → 定义规则", shift: true },
{ key: "eng", cn: "工程理解", en: "Engineering", before: 0.18, after: 0.70, delta: "0 → 能对话级", shift: true }];


function Radar({ size = 560 }) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.4;
  const n = RADAR_DIMS.length;
  const [ref, seen] = useReveal({ threshold: 0.4 });

  // Animated layer scale
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    if (!seen) return;
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const x = Math.min(1, (t - t0) / 1600);
      const eased = 1 - Math.pow(1 - x, 3);
      setP(eased);
      if (x < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen]);

  const ptFor = (i, mag) => {
    const angle = -Math.PI / 2 + i / n * Math.PI * 2;
    return [cx + Math.cos(angle) * r * mag, cy + Math.sin(angle) * r * mag];
  };

  const polyPoints = (key) =>
  RADAR_DIMS.map((d, i) => ptFor(i, d[key] * p).join(",")).join(" ");

  return (
    <div ref={ref} style={{ position: "relative", width: "100%", maxWidth: size, aspectRatio: "1 / 1", margin: "0 auto", padding: "0 clamp(40px, 6vw, 80px)", boxSizing: "content-box", overflow: "visible" }}>
      <svg viewBox={`0 0 ${size} ${size}`} style={{ width: "100%", height: "100%", overflow: "visible" }}>
        {/* Concentric rings */}
        {[0.25, 0.5, 0.75, 1].map((ring, i) =>
        <polygon
          key={i}
          points={RADAR_DIMS.map((_, j) => ptFor(j, ring).join(",")).join(" ")}
          fill="none"
          stroke="var(--line)"
          strokeWidth={i === 3 ? 1 : 0.6}
          strokeDasharray={i === 3 ? "none" : "2 4"} />

        )}

        {/* Axes */}
        {RADAR_DIMS.map((d, i) => {
          const [x, y] = ptFor(i, 1);
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke={d.shift ? "var(--accent)" : "var(--line)"}
              strokeWidth={d.shift ? 1 : 0.6}
              strokeOpacity={d.shift ? 0.5 : 1} />);


        })}

        {/* Before layer (gray) */}
        <polygon
          points={polyPoints("before")}
          fill="var(--fg)"
          fillOpacity="0.06"
          stroke="var(--muted)"
          strokeWidth="1"
          strokeDasharray="4 3" />
        

        {/* After layer (accent) */}
        <polygon
          points={polyPoints("after")}
          fill="var(--accent)"
          fillOpacity="0.18"
          stroke="var(--accent)"
          strokeWidth="1.5" />
        

        {/* Dots on each vertex (after) */}
        {RADAR_DIMS.map((d, i) => {
          const [x, y] = ptFor(i, d.after * p);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={d.shift ? 4.5 : 3}
              fill={d.shift ? "var(--accent)" : "var(--bg)"}
              stroke="var(--accent)"
              strokeWidth="1.5" />);


        })}

        {/* Labels */}
        {RADAR_DIMS.map((d, i) => {
          const [x, y] = ptFor(i, 1.18);
          const angle = -Math.PI / 2 + i / n * Math.PI * 2;
          const anchor =
          Math.abs(Math.cos(angle)) < 0.3 ? "middle" : Math.cos(angle) > 0 ? "start" : "end";
          return (
            <g key={i} transform={`translate(${x}, ${y})`}>
              <text
                textAnchor={anchor}
                style={{
                  fontFamily: "var(--font-cn)",
                  fontSize: 14,
                  fontWeight: 500,
                  fill: d.shift ? "var(--accent)" : "var(--fg)"
                }}
                y={-2}>
                
                {d.cn}
              </text>
              <text
                textAnchor={anchor}
                style={{
                  fontFamily: "var(--font-en)",
                  fontSize: 9.5,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fill: "var(--muted)"
                }}
                y={14}>
                
                {d.en}
              </text>
            </g>);

        })}

        {/* Center dot */}
        <circle cx={cx} cy={cy} r="3" fill="var(--accent)" />
      </svg>

      {/* AI 协作 backdrop ring label */}
    </div>);

}

function ClosingRadarSection() {
  return (
    <section
      className="section"
      data-screen-label="12 Radar"
      id="radar">
      
      <GhostNumber n="12" />

      <div className="container">
        <SectionHeader
          index="§ 12"
          kicker="Chapter IV"
          title="这一年我的能力变化"
          meta="1.5 min" />
        

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
            gap: "clamp(40px, 6vw, 100px)",
            alignItems: "center"
          }}>
          
          {/* Radar */}
          <Reveal delay="100">
            <Radar size={560} />
          </Reveal>

          {/* Shifts */}
          <div>
            {/* PullQuote sits where the eyebrow used to be */}
            <Reveal delay="200" style={{ marginBottom: 28 }}>
              <PullQuote style={{ fontSize: "clamp(18px, 1.6vw, 22px)", width: "100%", maxWidth: "none", margin: 0, textAlign: "left", lineHeight: 1.45, whiteSpace: "normal" }}>
                我没有变成另一个岗位 —— 我仍然是设计师。<br />
                但我是一个<span style={{ color: "var(--accent)" }}>边界更宽、能力更完整</span>的设计师。
              </PullQuote>
            </Reveal>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
              ["AI 协作", "从无", "工作流常驻", "AI Collaboration"],
              ["工程理解", "从无", "能对话级", "Engineering Literacy"],
              ["产品判断", "从执行", "主动定义规则", "Product Judgement"]].
              map(([cn, from, to, en], i) =>
              <Reveal key={i} delay={`${400 + i * 120}`}>
                  <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr auto 1fr",
                    gap: 14,
                    alignItems: "center",
                    padding: "14px 16px",
                    background: "var(--bg-2)",
                    borderLeft: "3px solid var(--accent)"
                  }}>

                    <span style={{ fontSize: 15, fontWeight: 500, minWidth: 90 }}>{cn}</span>
                    <span style={{ fontSize: 13, color: "var(--muted)", textAlign: "center" }}>{from}</span>
                    <span style={{ color: "var(--accent)", fontSize: 16 }}>→</span>
                    <span style={{ fontSize: 14, fontWeight: 500, color: "var(--fg)" }}>{to}</span>
                  </div>
                </Reveal>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>);

}

// ─────────────── 13 · NEXT CYCLE COMMITMENTS ───────────────

function ClosingCommitSection() {
  return (
    <section
      className="section section--tall"
      data-screen-label="13 Next Cycle"
      id="commit">
      
      <GhostNumber n="13" />

      <div className="container">
        <SectionHeader
          index="§ 13"
          kicker="Chapter IV"
          title="未来展望"
          meta="1 min" />
        

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            marginBottom: 96
          }}>
          
          {[
          {
            n: "01",
            kicker: "Commitment · 01",
            title: "把研究做成自己的方法论",
            body: [
            "这一年学习了 Agent 架构、HITL、Google PAIR 原则、设计系统等概念。",
            "未来我想把它们结构化成自己的设计方法论 —— 判断标准、决策模板、对照库。"],

            tag: "让下一次设计能站在上一次的肩膀上",
            meta: "Insight → Method"
          },
          {
            n: "02",
            kicker: "Commitment · 02",
            title: "在更高一层贡献更多",
            body: [
            "Canvas Framework 让我看到设计师可以在「规则定义层」做更多事。",
            "未来我希望继续在范式 / 流程 / 标准上贡献。"],

            tag: "不只是交付单点设计",
            meta: "Delivery → Rule Definition"
          }].
          map((c, i) =>
          <Reveal
            key={i}
            delay={`${200 + i * 200}`}
            style={{
              position: "relative",
              padding: "clamp(32px, 4vw, 56px)",
              background: "var(--bg)",
              border: "1px solid var(--line-strong)",
              borderTop: "3px solid var(--fg)",
              display: "flex",
              flexDirection: "column",
              gap: 24,
              minHeight: 460
            }}>
            
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span
                className="en"
                style={{
                  fontSize: 11,
                  color: "var(--muted)",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase"
                }}>
                
                  {c.kicker}
                </span>
                <span className="en" style={{ fontSize: 56, fontWeight: 200, letterSpacing: "-0.04em", color: "var(--accent)", lineHeight: 0.9 }}>
                  {c.n}
                </span>
              </div>

              <h3
              style={{
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: 500,
                lineHeight: 1.2,
                letterSpacing: "-0.01em"
              }}>
              
                {c.title}
              </h3>

              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
                {c.body.map((b, j) =>
              <p key={j} style={{ fontSize: 15, color: "var(--fg-2)", lineHeight: 1.7 }}>
                    {b}
                  </p>
              )}
              </div>

              <div
              style={{
                paddingTop: 20,
                borderTop: "1px solid var(--line)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: 16
              }}>
              
                <span
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "var(--accent)",
                  flex: 1
                }}>
                
                  → {c.tag}
                </span>
                <span className="mono" style={{ fontSize: 11, color: "var(--muted)" }}>
                  {c.meta}
                </span>
              </div>
            </Reveal>
          )}
        </div>

      </div>
    </section>);

}

// ─────────────── 14 · CLOSING FINALE (standalone) ───────────────

function ClosingFinaleSection() {
  return (
    <section
      className="section section--tall"
      data-screen-label="14 Finale"
      id="finale"
      style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingBottom: 40 }}>

      <div className="container" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Final manifesto — vertically centered in the upper area, shifted up 60px */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", transform: "translateY(-60px)" }}>
        <Reveal delay="100">
          <div
            style={{
              padding: "0",
              textAlign: "center"
            }}>

            <div
              className="en"
              style={{
                fontSize: 11,
                color: "var(--muted)",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                marginBottom: 28
              }}>

              <span style={{ display: "inline-block", width: 28, height: 1, background: "var(--accent)", verticalAlign: "middle", marginRight: 14 }} />
              The Closing Line
              <span style={{ display: "inline-block", width: 28, height: 1, background: "var(--accent)", verticalAlign: "middle", marginLeft: 14 }} />
            </div>
            <div
              style={{
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 400,
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
                maxWidth: "none",
                margin: "0 auto",
                textWrap: "nowrap",
                whiteSpace: "nowrap"
              }}>

              把这一年的<span style={{ color: "var(--accent)" }}>「能力扩展」</span>, 变成对团队和产品的<span style={{ color: "var(--accent)" }}>「持续贡献」</span>。
            </div>
          </div>
        </Reveal>
        </div>

        {/* Sign-off pinned at page bottom (plain div, no Reveal — too close to viewport edge for IO threshold) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 24,
            fontFamily: "var(--font-en)",
            fontSize: 11,
            color: "var(--muted)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            paddingBottom: 0
          }}>

          <div>
            <div style={{ color: "var(--muted-2)", marginBottom: 6 }}>Submitted by</div>
            <div style={{ color: "var(--fg)", fontWeight: 500 }}>Fancy Liu</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "var(--muted-2)", marginBottom: 6 }}>End of Document</div>
            <div style={{ color: "var(--fg)", fontWeight: 500 }}>— 谢谢 —</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ color: "var(--muted-2)", marginBottom: 6 }}>Updated</div>
            <div style={{ color: "var(--fg)", fontWeight: 500 }}>2026.05.20</div>
          </div>
        </div>
      </div>
    </section>);

}

Object.assign(window, { ClosingRadarSection, ClosingCommitSection, ClosingFinaleSection });