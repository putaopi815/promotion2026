// act1-opening.jsx — Cover + Numbers + Three Directions
// Pages 0, 1, 2 of the report.

const { useEffect: _u1, useRef: _r1, useState: _s1 } = React;

// ─────────────── 00 · COVER ───────────────

function CoverSection() {
  const [titleRef] = useReveal();

  return (
    <section
      className="section section--tall"
      data-screen-label="00 Cover"
      id="cover"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Top metadata grid — pinned to top-of-section, independent of centered title */}
      <div
        style={{
          position: "absolute",
          top: "clamp(96px, 12vh, 128px)",
          left: "clamp(32px, 6vw, 120px)",
          right: "clamp(32px, 6vw, 120px)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 24,
          fontFamily: "var(--font-en)",
          fontSize: 11,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--muted)",
        }}
      >
        <Reveal delay="100">
          <div style={{ color: "var(--muted-2)", marginBottom: 6 }}>Document</div>
          <div style={{ color: "var(--fg-2)", fontWeight: 500 }}>Performance Review</div>
          <div style={{ color: "var(--muted)", marginTop: 2 }}>v1.0 · 2026.05.20</div>
        </Reveal>
        <Reveal delay="200" style={{ textAlign: "center" }}>
          <div style={{ color: "var(--muted-2)", marginBottom: 6 }}>Track</div>
          <div style={{ color: "var(--fg-2)", fontWeight: 500 }}>UI / Interaction</div>
          <div style={{ color: "var(--muted)", marginTop: 2 }}>P6 → P7</div>
        </Reveal>
        <Reveal delay="300" style={{ textAlign: "right" }}>
          <div style={{ color: "var(--muted-2)", marginBottom: 6 }}>Reading</div>
          <div style={{ color: "var(--fg-2)", fontWeight: 500 }}>15 min · 13 chapters</div>
          <div style={{ color: "var(--muted)", marginTop: 2 }}>scroll to enter</div>
        </Reveal>
      </div>

      {/* Title block — left-aligned, oversize; pushed slightly below center for visual balance */}
      <div
        ref={titleRef}
        className="reveal container"
        style={{ marginTop: "clamp(80px, 14vh, 180px)" }}
      >
        <div
          style={{
            fontFamily: "var(--font-en)",
            fontSize: 13,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginBottom: 24,
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 32,
              height: 1,
              background: "var(--accent)",
            }}
          />
          <span>Annual Review · 2025 — 2026</span>
        </div>

        <h1
          style={{
            fontSize: "var(--t-display)",
            fontWeight: 500,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            color: "var(--fg)",
            marginBottom: "clamp(40px, 6vh, 72px)",
          }}
        >
          述职报告
        </h1>

        <div
          style={{
            fontFamily: "var(--font-en)",
            fontSize: "clamp(20px, 2.4vw, 30px)",
            fontWeight: 300,
            letterSpacing: "-0.01em",
            color: "var(--muted)",
            lineHeight: 1.3,
            marginTop: 0,
          }}
        >
          <span style={{ color: "var(--fg-2)" }}>Fancy Liu</span>
          <span style={{ margin: "0 14px", color: "var(--muted-2)" }}>·</span>
          <span>晋升 P7</span>
        </div>
      </div>

    </section>
  );
}

// ─────────────── 01 · NUMBERS COORDINATE ───────────────

function NumbersSection() {
  const [secRef, seen] = useReveal({ threshold: 0.4 });

  const n10 = useCountUp(10, { duration: 1200, run: seen });
  const n3 = useCountUp(3, { duration: 900, run: seen });
  const n1 = useCountUp(1, { duration: 700, run: seen });

  const rows = [
    { num: n10, prefix: "", label: "UI 设计", sub: "2012 — 2022", caption: "前 10 年, 我做 UI 设计。", years: 10 },
    { num: n3, prefix: "+", label: "交互设计", sub: "2022 — 2025", caption: "第 11 年开始, 我转到交互, 从事 3 年交互设计工作。", years: 3 },
    { num: n1, prefix: "+", label: "扩展能力边界", sub: "2025 — Now", caption: "去年至今, 赶上 AI 浪潮, 我开始扩展自己的能力边界。", accent: true, years: 1 },
  ];

  return (
    <section
      className="section section--tall"
      data-screen-label="01 Numbers"
      id="numbers"
      ref={secRef}
    >
      <GhostNumber n="01" style={{ left: "5%", right: "auto" }} />

      <div className="container">
        <SectionHeader index="§ 01" kicker="Chapter I" title="关于我的一组数字" meta="30s" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.4fr)",
            gap: "clamp(40px, 6vw, 100px)",
            alignItems: "flex-start",
          }}
        >
          {/* LEFT — three numbers, stacked */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {rows.map((r, i) => (
              <div
                key={i}
                className="reveal"
                ref={useReveal()[0]}
                data-d={`${200 + i * 200}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  alignItems: "end",
                  gap: 24,
                  paddingBottom: 20,
                  borderBottom: i < 2 ? "1px solid var(--line)" : "none",
                  position: "relative",
                }}
              >
                <div
                  className="en"
                  style={{
                    fontSize: "clamp(96px, 14vw, 180px)",
                    fontWeight: 200,
                    lineHeight: 0.85,
                    letterSpacing: "-0.05em",
                    color: r.accent ? "var(--accent)" : "var(--fg)",
                    fontVariantNumeric: "tabular-nums",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  {r.prefix ? (
                    <span style={{ fontSize: "0.5em", fontWeight: 300, paddingBottom: "0.15em", paddingRight: "0.08em" }}>
                      {r.prefix}
                    </span>
                  ) : null}
                  {r.num}
                </div>
                <div style={{ paddingBottom: "clamp(12px, 2vw, 24px)" }}>
                  <div
                    style={{
                      fontSize: "clamp(16px, 1.5vw, 20px)",
                      fontWeight: 500,
                      color: r.accent ? "var(--accent)" : "var(--fg)",
                      marginBottom: 4,
                    }}
                  >
                    {r.label}
                  </div>
                  <div
                    className="en"
                    style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.06em" }}
                  >
                    {r.sub} · {r.years} year{r.years > 1 ? "s" : ""}
                  </div>
                </div>
                {r.accent ? null : null}
              </div>
            ))}
          </div>

          {/* RIGHT — captions + closing line */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 28,
              paddingTop: "clamp(40px, 6vw, 80px)",
            }}
          >
            {rows.map((r, i) => (
              <Reveal
                key={i}
                delay={`${400 + i * 200}`}
                style={{
                  fontSize: "clamp(15px, 1.4vw, 18px)",
                  lineHeight: 1.7,
                  color: r.accent ? "var(--fg)" : "var(--fg-2)",
                  fontWeight: r.accent ? 500 : 400,
                  paddingLeft: 16,
                  borderLeft: r.accent
                    ? "2px solid var(--accent)"
                    : "1px solid var(--line-strong)",
                }}
              >
                {r.caption}
              </Reveal>
            ))}

            <Reveal
              delay="1200"
              style={{
                marginTop: 24,
                paddingTop: 24,
                borderTop: "1px solid var(--line)",
                fontSize: "clamp(15px, 1.4vw, 19px)",
                lineHeight: 1.5,
                color: "var(--fg)",
                fontWeight: 500,
                letterSpacing: "-0.005em",
                whiteSpace: "nowrap"
              }}
            >
              接下来, 我将分享这一年我做了什么、学到了什么, 以及我接下来想往哪里走。
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────── 02 · THREE DIRECTIONS ───────────────

function DirectionsSection() {
  const [secRef] = useReveal({ threshold: 0.3 });

  return (
    <section
      className="section section--tall"
      data-screen-label="02 Directions"
      id="directions"
      ref={secRef}
    >
      <GhostNumber n="02" style={{ right: "5%" }} />

      <div className="container">
        <SectionHeader index="§ 02" kicker="Chapter I" title="三个方向" meta="60s" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
            gap: "clamp(40px, 6vw, 100px)",
            alignItems: "start",
          }}
        >
          {/* LEFT — narrative (offset down 80px for visual balance) */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32, marginTop: 80 }}>
            <PullQuote>
              AI 时代, 设计师的边界正在变化。
            </PullQuote>
            <Reveal
              delay="300"
              style={{
                fontSize: "clamp(15px, 1.4vw, 18px)",
                lineHeight: 1.75,
                color: "var(--fg-2)",
                whiteSpace: "nowrap"
              }}
            >
              我想顺着这个变化, 把自己的能力补全，这一年我在三个方向上各走了一步。
            </Reveal>
          </div>

          {/* RIGHT — compass */}
          <Compass />
        </div>
      </div>
    </section>
  );
}

function Compass() {
  const [ref] = useReveal({ threshold: 0.35 });

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        position: "relative",
        aspectRatio: "1 / 1",
        maxWidth: 560,
        margin: "0 auto",
        width: "100%",
      }}
    >
      <svg viewBox="0 0 600 600" style={{ width: "100%", height: "100%" }}>
        {/* Concentric guides */}
        <circle cx="300" cy="300" r="60" fill="none" stroke="var(--line)" strokeWidth="1" />
        <circle cx="300" cy="300" r="160" fill="none" stroke="var(--line)" strokeWidth="1" strokeDasharray="2 4" />
        <circle cx="300" cy="300" r="260" fill="none" stroke="var(--line)" strokeWidth="1" strokeDasharray="2 6" />

        {/* UP arrow */}
        <g>
          <path
            className="path-draw"
            d="M 300 240 L 300 90"
            fill="none"
            stroke="var(--fg)"
            strokeWidth="1.5"
            style={{ transitionDelay: "0.4s" }}
          />
          <path
            className="path-draw"
            d="M 290 105 L 300 90 L 310 105"
            fill="none"
            stroke="var(--fg)"
            strokeWidth="1.5"
            style={{ transitionDelay: "0.9s" }}
          />
        </g>

        {/* LEFT arrow */}
        <g>
          <path
            className="path-draw"
            d="M 240 300 L 90 300"
            fill="none"
            stroke="var(--fg)"
            strokeWidth="1.5"
            style={{ transitionDelay: "0.6s" }}
          />
          <path
            className="path-draw"
            d="M 105 290 L 90 300 L 105 310"
            fill="none"
            stroke="var(--fg)"
            strokeWidth="1.5"
            style={{ transitionDelay: "1.1s" }}
          />
        </g>

        {/* RIGHT arrow */}
        <g>
          <path
            className="path-draw"
            d="M 360 300 L 510 300"
            fill="none"
            stroke="var(--fg)"
            strokeWidth="1.5"
            style={{ transitionDelay: "0.6s" }}
          />
          <path
            className="path-draw"
            d="M 495 290 L 510 300 L 495 310"
            fill="none"
            stroke="var(--fg)"
            strokeWidth="1.5"
            style={{ transitionDelay: "1.1s" }}
          />
        </g>

        {/* Center node */}
        <circle cx="300" cy="300" r="56" fill="var(--bg)" stroke="var(--accent)" strokeWidth="1.5" />
        <text
          x="300"
          y="295"
          textAnchor="middle"
          style={{ fontFamily: "var(--font-en)", fontSize: 10, fill: "var(--muted)", letterSpacing: "0.16em" }}
        >
          DESIGNER
        </text>
        <text
          x="300"
          y="318"
          textAnchor="middle"
          style={{ fontFamily: "var(--font-cn)", fontSize: 18, fill: "var(--fg)", fontWeight: 500 }}
        >
          设计师
        </text>
      </svg>

      {/* Labels overlaid */}
      <DirLabel pos={{ top: "2%", left: "50%", transform: "translateX(-50%)" }} dir="↑ 向上" cn="持续深耕 × AI" en="设计方法论 / AI 协作" align="center" delay="900" />
      <DirLabel pos={{ left: "-2%", top: "calc(50% + 28px)" }} dir="↙ 向左" cn="产品上游" en="PRD / 全链路 own" align="left" delay="1000" />
      <DirLabel pos={{ right: "-2%", top: "calc(50% + 28px)" }} dir="↘ 向右" cn="工程下游" en="Vibe Coding" align="left" delay="1100" />
    </div>
  );
}

function DirLabel({ pos, dir, cn, en, align, delay }) {
  return (
    <div
      className="reveal"
      ref={useReveal()[0]}
      data-d={delay}
      style={{
        position: "absolute",
        ...pos,
        textAlign: align,
        minWidth: 140,
      }}
    >
      <div
        className="en"
        style={{
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: 6,
        }}
      >
        {dir}
      </div>
      <div style={{ fontSize: 16, fontWeight: 500, lineHeight: 1.3 }}>{cn}</div>
      <div className="mono" style={{ fontSize: 11, color: "var(--muted)", marginTop: 2 }}>
        {en}
      </div>
    </div>
  );
}

Object.assign(window, { CoverSection, NumbersSection, DirectionsSection });
