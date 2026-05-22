// act2-project1.jsx — Chapter II · Mira 两个需求
// Pages 3 → 7

// ─────────────── 03 · PROJECT 1 OVERVIEW ───────────────

function P1OverviewSection() {
  return (
    <section
      className="section"
      data-screen-label="03 Project 1 Overview"
      id="p1-overview">
      
      <GhostNumber n="03" />

      <div className="container">
        <SectionHeader
          index="§ 03"
          kicker="Chapter II"
          title="Mira·两个需求"
          meta="30s" />
        

        <Reveal
          style={{
            fontSize: "clamp(22px, 2.8vw, 36px)",
            fontWeight: 300,
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
            color: "var(--fg)",
            marginBottom: 36,
            textWrap: "balance"
          }}>

          这一年里两件比较有体感的工作 ——
          <br />
          覆盖 Agent 协作的两端 <span style={{ color: "var(--muted)" }}>:</span> <span style={{ color: "var(--accent)" }}>过程</span> <span style={{ color: "var(--muted-2)" }}>+</span> <span style={{ color: "var(--accent)" }}>产物</span>。
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1,
            background: "var(--line-strong)",
            border: "1px solid var(--line-strong)"
          }}>

          {[
          {
            tag: "01 · Agent 工作过程",
            title: "交互布局与任务流程",
            kicker: "+ 交互设计理念",
            points: [
            "全链路 7 段",
            "穷尽 · 选型 · 编排",
            "理念层 + 落地层 两层产出"],

            footer: "Mira 现行任务交互规范"
          },
          {
            tag: "02 · Agent 工作产物",
            title: "Canvas Framework",
            kicker: "产品级框架",
            points: [
            "重新定义 + 标准",
            "近 600 行 PRD",
            "Capability 配置规范"],

            footer: "平台级标准 · Email + ICP 已接入"
          }].
          map((c, i) =>
          <Reveal
            key={i}
            delay={`${300 + i * 200}`}
            style={{
              background: "var(--bg)",
              padding: "clamp(24px, 3vw, 40px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 20
            }}>

              <div>
                <div
                className="en"
                style={{
                  fontSize: 11,
                  color: "var(--muted)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: 12
                }}>

                  {c.tag}
                </div>
                <h3
                style={{
                  fontSize: "clamp(26px, 3vw, 40px)",
                  fontWeight: 500,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  marginBottom: 18
                }}>

                  {c.title}
                </h3>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {c.points.map((p, j) =>
                <li
                  key={j}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    fontSize: 14,
                    color: "var(--fg-2)"
                  }}>

                      <span
                    style={{
                      width: 14,
                      height: 1,
                      background: "var(--accent)",
                      flexShrink: 0
                    }} />

                      {p}
                    </li>
                )}
                </ul>
              </div>

              <div
              style={{
                paddingTop: 14,
                borderTop: "1px solid var(--line)",
                fontSize: 12,
                color: "var(--muted)",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.02em"
              }}>

                → {c.footer}
              </div>
            </Reveal>
          )}
        </div>

      </div>
    </section>);

}

// ─────────────── 04 · TASK FLOW · WORK CHAIN ───────────────

function P1FlowSection() {
  return (
    <section
      className="section"
      data-screen-label="04 Task Flow"
      id="p1-flow">
      
      <GhostNumber n="04" />

      <div className="container">
        <SectionHeader
          index="§ 04"
          kicker="CASE 1"
          title="交互布局与任务流程"
          meta="1.5 min" />
        

        <Reveal
          style={{
            fontSize: "clamp(22px, 2.6vw, 32px)",
            fontWeight: 400,
            lineHeight: 1.4,
            color: "var(--fg)",
            maxWidth: "26ch",
            marginTop: 20,
            paddingTop: 40,
            marginBottom: 56,
            borderTop: "1px solid var(--line)",
            textWrap: "balance"
          }}>

          <span style={{ color: "var(--accent)" }}>工作步骤</span>
        </Reveal>

        {/* 4-step horizontal chain */}
        <Reveal delay="200">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 0,
              position: "relative",
              marginBottom: 80
            }}>
            
            {/* connecting line — goes from center of circle 1 to center of circle 4 */}
            <div
              style={{
                position: "absolute",
                left: "16px",
                right: "calc(25% - 16px)",
                top: 16,
                height: 1,
                background: "var(--line-strong)"
              }} />
            
            {[
            ["1", "场景穷尽", "任务路径 + 内容类型 全列尽"],
            ["2", "结构抽象", "三栏划分 + 文件三层 + 流程分段"],
            ["3", "模式选型", "每个节点选合适的交互模式"],
            ["4", "落地交付", "Pencil 设计稿 + 规范"]].
            map(([n, t, d], i) =>
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                position: "relative",
                paddingRight: 16
              }}>

                <div
                className="en"
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 50,
                  background: "var(--accent)",
                  border: "none",
                  color: "var(--bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  fontWeight: 600,
                  fontVariantNumeric: "tabular-nums",
                  position: "relative",
                  zIndex: 1
                }}>

                  {n}
                </div>
                <div style={{ marginTop: 18, fontSize: 17, fontWeight: 500 }}>{t}</div>
                <div style={{ marginTop: 4, fontSize: 13, color: "var(--muted)" }}>{d}</div>
              </div>
            )}
          </div>
        </Reveal>

        {/* Bridge sentence */}
        <Reveal
          delay="300"
          style={{
            marginBottom: 56,
            textAlign: "left",
            fontSize: "clamp(16px, 1.4vw, 20px)",
            lineHeight: 1.6,
            color: "var(--fg-2)",
            paddingTop: 40,
            borderTop: "1px solid var(--line)"
          }}>

          这 4 步做完, <span style={{ color: "var(--fg)", fontWeight: 500 }}>流程和结构同时定下来</span>。<br />
          下面讲 3 个项目过程中比较重要的决策。
        </Reveal>

      </div>
    </section>);

}

// ─────────────── 05 · TASK FLOW · TWO LAYERS ─────────────── (DEPRECATED · merged back into 04)

function P1FlowLayersSection_DEPRECATED() {
  return (
    <section
      className="section"
      data-screen-label="05 Task Flow Layers"
      id="p1-flow-layers">

      <GhostNumber n="05" />

      <div className="container">
        <SectionHeader
          index="§ 05"
          kicker="CASE 1"
          title="理念层 + 落地层"
          meta="两层产出" />

        {/* Two-layer tree */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(24px, 3vw, 56px)"
          }}>

          <LayerColumn
            badge="理念层"
            en="Conceptual"
            heading="交互设计理念"
            weight="primary"
            items={[
            { t: "Mira 三栏划分", d: "菜单 / Task区 / 文件区 / 工作区" },
            { t: "文件的三层展示体系", d: "行内预览 / 右侧面板 / 全屏沉浸" }]
            } />

          <LayerColumn
            badge="落地层"
            en="Tactical"
            heading="交互布局与任务流程"
            weight="secondary"
            items={[
            { t: "判断", d: "6 种过程状态的呈现方式" },
            { t: "提取", d: "场景分析, 提取高频交互流程" }]
            } />

        </div>

        {/* Compact evidence reference (placeholder removed to fit 100vh) */}
        <Reveal delay="400" style={{ marginTop: 24 }}>
          <div
            className="mono"
            style={{
              fontSize: 11,
              color: "var(--muted)",
              letterSpacing: "0.08em",
              padding: "10px 14px",
              borderLeft: "2px solid var(--accent)",
              background: "var(--bg-2)"
            }}>
            EVIDENCE-04A · 交互设计理念 · Figma 全景画板 · 待嵌入
          </div>
        </Reveal>
      </div>
    </section>);

}

function LayerColumn({ badge, en, heading, weight, items }) {
  const primary = weight === "primary";
  return (
    <Reveal
      delay={primary ? "400" : "550"}
      style={{
        padding: "clamp(24px, 3vw, 40px)",
        background: primary ? "var(--accent-soft)" : "var(--bg-2)",
        borderTop: primary ? "2px solid var(--accent)" : "1px solid var(--line-strong)",
        borderRadius: 0
      }}>
      
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          marginBottom: 20
        }}>
        
        <span
          style={{
            fontSize: 12,
            fontWeight: 500,
            color: primary ? "var(--accent)" : "var(--muted)",
            letterSpacing: "0.04em",
            padding: "3px 8px",
            border: `1px solid ${primary ? "var(--accent)" : "var(--line-strong)"}`
          }}>
          
          {badge}
        </span>
        <span
          className="en"
          style={{
            fontSize: 11,
            color: "var(--muted)",
            letterSpacing: "0.16em",
            textTransform: "uppercase"
          }}>
          
          {en}
        </span>
      </div>

      <h4
        style={{
          fontSize: "clamp(22px, 2.4vw, 30px)",
          fontWeight: 500,
          color: primary ? "var(--fg)" : "var(--fg-2)",
          marginBottom: 24,
          letterSpacing: "-0.01em"
        }}>
        
        {heading}
      </h4>

      <ul style={{
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        gap: 18
      }}>
        {items.map((it, i) =>
        <li
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: 14,
            paddingBottom: 16,
            borderBottom: i < items.length - 1 ? "1px dashed var(--line)" : "none"
          }}>
          
            <span
            className="en"
            style={{
              fontSize: 11,
              color: "var(--muted)",
              letterSpacing: "0.06em",
              fontVariantNumeric: "tabular-nums",
              paddingTop: 4
            }}>
            
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 2 }}>{it.t}</div>
              <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.5 }}>{it.d}</div>
            </div>
          </li>
        )}
      </ul>
    </Reveal>);

}

// ─────────────── 05 · DECISION 01 ───────────────
// ─────────────── 06 · DECISION 02 ───────────────
// ─────────────── 07 · DECISION 03 ───────────────
// Each decision occupies its own page (full viewport).

function DecisionPage({ idx, total = 3, anchor, title, body, pts, flow, tail, placeholder, image }) {
  return (
    <section
      className="section"
      data-screen-label={`Decision ${idx}`}
      id={anchor}>

      <GhostNumber n={`0${4 + idx}`} />

      <div className="container" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <SectionHeader
          index={`§ 0${4 + idx}`}
          kicker="CASE 1"
          title={`决策 0${idx}`}
          meta={`${idx} / ${total}`}
          style={{ marginBottom: 0 }} />

        {/* Two-column: left = content, right = screenshot placeholder */}
        <div style={{ marginTop: 100, display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "clamp(32px, 4vw, 64px)", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
          <Reveal delay="100">
            <h2
              style={{
                fontSize: "clamp(28px, 3.2vw, 44px)",
                fontWeight: 500,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: 18
              }}>
              {title}
            </h2>
          </Reveal>

          <Reveal delay="200">
            <div style={{ color: "var(--fg-2)", fontSize: "clamp(16px, 1.4vw, 19px)", lineHeight: 1.7, marginBottom: 28 }}>
              {body}
            </div>
          </Reveal>

          {pts ?
              <Reveal delay="400">
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${pts.length}, 1fr)`,
                    gap: 1,
                    background: "var(--line-strong)",
                    border: "1px solid var(--line-strong)"
                  }}>
                  {pts.map(([k, v], j) =>
                    <div
                      key={j}
                      style={{
                        background: "var(--bg)",
                        padding: "clamp(14px, 1.8vw, 22px)"
                      }}>
                      <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 6, color: "var(--fg)" }}>{k}</div>
                      <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.55 }}>{v}</div>
                    </div>
                  )}
                </div>
              </Reveal> : null}

            {flow ?
              <Reveal delay="400">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    flexWrap: "wrap",
                    padding: "8px 0"
                  }}>
                  {flow.map((f, j) =>
                    <React.Fragment key={j}>
                      <span
                        style={{
                          padding: "12px 22px",
                          border: "1px solid var(--line-strong)",
                          fontSize: 17,
                          fontWeight: 500
                        }}>
                        {f}
                      </span>
                      {j < flow.length - 1 ?
                        <span style={{ color: "var(--accent)", fontSize: 22 }}>→</span> :
                        null}
                    </React.Fragment>
                  )}
                </div>
              </Reveal> : null}

            {tail ?
              <Reveal delay="500">
                <div style={{ marginTop: 22, fontSize: 15, color: "var(--muted)" }}>
                  {tail}
                </div>
              </Reveal> : null}

          </div>

          {/* Right column · screenshot (or placeholder) */}
          <Reveal delay="200">
            {image ?
              <div style={{ position: "sticky", top: 120, display: "flex", flexDirection: "column", gap: 10 }}>
                <img
                  src={image}
                  alt={placeholder?.label || `决策 ${String(idx).padStart(2, "0")} 截图`}
                  style={{ width: "100%", height: "auto", display: "block", border: "1px solid var(--line)" }} />
                <div className="mono" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em" }}>
                  EVIDENCE-D{String(idx).padStart(2, "0")} · {placeholder?.label || ""}
                </div>
              </div>
            :
              <div
                style={{
                  aspectRatio: "4 / 3",
                  width: "100%",
                  background: "var(--bg-2)",
                  border: "1px dashed var(--line-strong)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  color: "var(--muted)",
                  position: "sticky",
                  top: 120
                }}>
                <div className="mono" style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase" }}>
                  EVIDENCE-D{String(idx).padStart(2, "0")}
                </div>
                <div style={{ fontSize: 14 }}>
                  {placeholder?.label || `决策 ${String(idx).padStart(2, "0")} 截图`}
                </div>
                <div className="mono" style={{ fontSize: 10, color: "var(--muted-2)", marginTop: 4 }}>
                  · 截图待嵌入 ·
                </div>
              </div>
            }
          </Reveal>
        </div>
      </div>
    </section>);
}

function P1Decision01Section() {
  return (
    <DecisionPage
      idx={1}
      anchor="p1-decision-01"
      title="Mira 三栏划分的理念"
      body="定义三栏各自的承载逻辑 —— 菜单区 / Task 区 / 工作区,各管一摊。工作区(右侧)是工作过程与产物预览共用的同一区域,只是展开比例随任务阶段伸缩。"
      pts={[
        ["菜单区", "全局导航 + 任务记录索引 —— 不参与任务本身,只提供任务发起入口与历史检索。"],
        ["Task 区", "用户与 Agent 的核心对话场 —— 任务发起、推进、状态变化、HITL 决断,全部集中在这里。"],
        ["工作区", "工作过程展示 + 产物详细预览同一区域 —— 不要「一种展示方式通吃所有产物」,根据任务阶段调整展开比例,「对照能力」比「更大」更重要。"]
      ]}
      placeholder={{ label: "Mira 三栏布局 · 菜单区 / Task 区 / 工作区", note: "菜单区 / Task 区 / 工作区 整体框架" }}
      image="uploads/case1-dession1.jpg"
    />
  );
}

function P1Decision02Section() {
  return (
    <DecisionPage
      idx={2}
      anchor="p1-decision-02"
      title="文件三层展示体系"
      body="跨所有文件类型共用同一套层级 ——"
      flow={["行内预览", "右侧面板", "全屏沉浸"]}
      tail="解决了「每种文件单独定一套交互」的碎片化。"
      placeholder={{ label: "文件三层展示 · 行内预览 / 右侧面板 / 全屏沉浸", note: "行内预览 / 右侧面板 / 全屏沉浸 三态对照" }}
      image="uploads/case1-dession2.jpg"
    />
  );
}

function P1Decision03Section() {
  return (
    <DecisionPage
      idx={3}
      anchor="p1-decision-03"
      title="Clarify 多形态拆分"
      body="AI 向用户索取输入时, 按信息结构拆出对应的交互形态 ——"
      pts={[
        ["纯文本", "自由表达"],
        ["Confirm", "确认 / 决断"],
        ["表单确认", "结构化输入"]
      ]}
      placeholder={{ label: "Clarify 三形态 · 纯文本 / Confirm / 表单确认", note: "纯文本 / Confirm / 表单确认 实际界面" }}
      image="uploads/case1-dession3.jpg"
    />
  );
}

// ─────────────── 07 · OUTCOME + TAKEAWAY ───────────────

function P1OutcomeSection() {
  return (
    <section
      className="section"
      data-screen-label="07 Outcome"
      id="p1-outcome">

      <GhostNumber n="07" />

      <div className="container">
        <SectionHeader
          index="§ 07"
          kicker="CASE 1"
          title="做成了什么 + 收获了什么"
          meta="Outcome · Takeaway"
          style={{ marginBottom: 0 }} />

        <Reveal delay="200" style={{ marginTop: 100 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 1,
              background: "var(--fg)",
              border: "1px solid var(--fg)"
            }}>

            <div
              style={{
                background: "var(--fg)",
                color: "var(--bg)",
                padding: "clamp(32px, 4vw, 56px)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                minHeight: 280
              }}>

              <div
                className="en"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  opacity: 0.6
                }}>

                做成了什么 · Outcome
              </div>
              <div style={{ fontSize: "clamp(22px, 2.2vw, 30px)", lineHeight: 1.5 }}>
                这套理念和规则沿用至今 —— 在 Mira 多个版本迭代里持续承载新功能。
              </div>
            </div>

            <div
              style={{
                background: "var(--fg)",
                color: "var(--bg)",
                padding: "clamp(32px, 4vw, 56px)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                minHeight: 280
              }}>

              <div
                className="en"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  opacity: 0.6
                }}>

                收获了什么 · Takeaway
              </div>
              <div style={{ fontSize: "clamp(22px, 2.2vw, 30px)", lineHeight: 1.5 }}>
                第一次从「做交互」上升到「做体系」。回答的不再是「界面怎么画」, 而是「Mira 整个内容承载用什么结构」。
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}

// ─────────────── 08A · CANVAS FRAMEWORK · INTRO (Brief + 行业范式 + 我的定义) ───────────────

function P1CanvasIntroSection() {
  const competitors = [
    {
      brand: "ChatGPT",
      product: "Canvas",
      def: "侧边写作 / 编程工作区 —— 用户与模型在同一文档上协作迭代, 可逐段高亮请求修改。",
      focus: "协作工作区"
    },
    {
      brand: "Claude",
      product: "Artifacts",
      def: "把代码 / 文档 / 图表等大块产出独立成「Artifact」, 在对话侧面板渲染, 可单独迭代和复用。",
      focus: "产物独立"
    },
    {
      brand: "Gemini",
      product: "Canvas",
      def: "协作式写作 / 编程工作区 —— 原生联动 Imagen / Veo 等模型,主打多模态产出与实时协作。",
      focus: "多模态协作"
    }
  ];

  return (
    <section
      className="section"
      data-screen-label="08 Canvas Intro"
      id="p1-canvas-intro">

      <GhostNumber n="08" />

      <div className="container">
        <SectionHeader
          index="§ 08"
          kicker="CASE 2"
          title="Canvas Framework"
          meta="行业范式 + 我的定义" />

        {/* Brief — single line */}
        <Reveal delay="100">
          <div
            style={{
              marginBottom: 32,
              fontSize: "clamp(15px, 1.5vw, 20px)",
              fontWeight: 400,
              lineHeight: 1.5,
              color: "var(--fg)",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}>
            <span style={{ color: "var(--muted-2)" }}>「</span>
            把当前 Canvas 抽象成顶层能力 + 配置标准,未来接入方 PM 按这套规则接入。
            <span style={{ color: "var(--muted-2)" }}>」</span>
          </div>
        </Reveal>

        {/* 3 competitor definitions */}
        <Reveal delay="200">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 1,
              background: "var(--line-strong)",
              border: "1px solid var(--line-strong)",
              marginBottom: 32
            }}>
            {competitors.map((c, i) =>
              <div
                key={i}
                style={{
                  background: "var(--bg)",
                  padding: "20px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  minHeight: 160
                }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontSize: 16, fontWeight: 500, color: "var(--fg)" }}>{c.brand}</span>
                  <span className="mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.1em" }}>{c.product}</span>
                </div>
                <div style={{ fontSize: 13, color: "var(--fg-2)", lineHeight: 1.55 }}>{c.def}</div>
                <div className="tag" style={{ alignSelf: "flex-start", marginTop: "auto" }}>{c.focus}</div>
              </div>
            )}
          </div>
        </Reveal>

        {/* My definition + why */}
        <Reveal delay="400">
          <div
            style={{
              padding: "clamp(20px, 2.5vw, 32px)",
              background: "var(--accent-soft)",
              borderLeft: "3px solid var(--accent)"
            }}>
            <div style={{ marginBottom: 12 }}>
              <span style={{ fontSize: 18, fontWeight: 500 }}>卡片统一容器框架</span>
            </div>
            <div style={{ fontSize: 14, color: "var(--fg-2)", lineHeight: 1.7, marginBottom: 12 }}>
              不只是「呈现 AI 产物」,而是<strong style={{ color: "var(--fg)" }}>同时承载 AI 产物 + AI 索取信息的交互控件</strong>;不定死渲染形式,而是<strong style={{ color: "var(--fg)" }}>提供形态/状态/数据的标准化能力</strong>,接入方 PM 通过 capability 配置自定义形态。
            </div>
            <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>
              <span className="en" style={{ color: "var(--accent)", letterSpacing: "0.14em", marginRight: 8 }}>WHY</span>
              业务里 Canvas 要承载的不止「文件」一类内容,还有澄清表单、confirm 等 AI 索取信息的输入控件 —— 把 Canvas 做成「框架」而非「具体形态」,接入新内容类型无需改 Canvas;不仅承载范围更广,也让交互、视觉与用户体验保持一致。
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}

// ─────────────── 09 · CANVAS FRAMEWORK · DECISIONS ───────────────

function P1CanvasSection() {
  return (
    <section
      className="section"
      data-screen-label="09 Canvas Decisions 1+2"
      id="p1-canvas">

      <GhostNumber n="09" />

      <div className="container">
        <SectionHeader
          index="§ 09"
          kicker="CASE 2"
          title="决策 01 · 02"
          meta="2 / 4"
          style={{ marginBottom: 0 }} />

        <div style={{ marginTop: 100, display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "clamp(32px, 4vw, 64px)", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <CanvasDecision
            n="01"
            title="重新定义 Canvas"
            body={
              <>
                <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap", marginBottom: 16 }}>
                  <span className="strike" style={{ fontSize: 16 }}>文件渲染面板</span>
                  <span style={{ color: "var(--accent)", fontSize: 18 }}>→</span>
                  <span style={{ fontSize: 18, fontWeight: 500 }}>卡片统一容器框架</span>
                </div>
                <p style={{ color: "var(--fg-2)" }}>
                  提供形态 / 状态 / 数据的标准化能力, 接入方 PM 通过 capability 配置自定义形态。
                </p>
                <div
                  style={{
                    marginTop: 16,
                    padding: "12px 16px",
                    background: "var(--bg-2)",
                    fontSize: 13,
                    color: "var(--fg-2)"
                  }}>
                  覆盖两类内容 <span className="mono" style={{ color: "var(--muted)" }}>::</span>{" "}
                  <span style={{ fontWeight: 500 }}>AI 产物 (artifact)</span>
                  <span style={{ color: "var(--muted-2)", margin: "0 8px" }}>+</span>
                  <span style={{ fontWeight: 500 }}>AI 索取信息的交互控件</span>
                </div>
              </>
            } />

          <CanvasDecision
            n="02"
            last
            title="入选规则"
            body={
              <>
                <p style={{ color: "var(--fg-2)", marginBottom: 16 }}>
                  之前进不进 Canvas 是凭感觉, 我把它收敛成一个判断 ——
                </p>
                <div
                  style={{
                    padding: "18px 22px",
                    background: "var(--bg)",
                    border: "1.5px solid var(--accent)",
                    fontSize: 18,
                    fontWeight: 500,
                    color: "var(--fg)",
                    display: "inline-block"
                  }}>
                  这个内容是否需要用户独立交互<span style={{ color: "var(--accent)" }}>?</span>
                </div>
                <div style={{ marginTop: 10, fontSize: 13, color: "var(--muted)" }}>
                  一句话, 规则清晰。
                </div>
              </>
            } />
          </div>

          {/* Right column · screenshot */}
          <Reveal delay="200">
            <div style={{ position: "sticky", top: 120, display: "flex", flexDirection: "column", gap: 10 }}>
              <img
                src="uploads/case2-dession1.jpg"
                alt="Canvas · 决策 01 · 02 截图"
                style={{ width: "100%", height: "auto", display: "block", border: "1px solid var(--line)" }} />
              <div className="mono" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em" }}>
                EVIDENCE-D04 · Canvas · 决策 01 · 02
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);
}

// ─────────────── 10 · CANVAS DECISIONS 3 + 4 ───────────────

function P1CanvasBSection() {
  return (
    <section
      className="section"
      data-screen-label="10 Canvas Decisions 3+4"
      id="p1-canvas-b">

      <GhostNumber n="10" />

      <div className="container">
        <SectionHeader
          index="§ 10"
          kicker="CASE 2"
          title="决策 03 · 04"
          meta="2 / 4"
          style={{ marginBottom: 0 }} />

        <div style={{ marginTop: 100, display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "clamp(32px, 4vw, 64px)", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <CanvasDecision
            n="03"
            title="穷尽交互规则,提取顶层模式 + 能力配置表"
            body={
              <>
                <PullQuote style={{ fontSize: "clamp(22px, 2.4vw, 30px)", maxWidth: "none", marginBottom: 16 }}>
                  抽象层级越高, 业务穷尽的要求越高。
                </PullQuote>
                <p style={{ color: "var(--muted)", fontSize: 14 }}>
                  AI 在这一段帮不上, 业务深度只能自己来。
                </p>
              </>
            } />

          <CanvasDecision
            n="04"
            last
            title="移动端的取舍"
            body={
              <>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
                  {["Side Panel", "Inline Card 编辑态"].map((s, i) =>
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "10px 16px",
                        background: "var(--bg-2)",
                        border: "1px solid var(--line)"
                      }}>
                      <span
                        className="en"
                        style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.06em", minWidth: 30 }}>
                        m{i + 1}
                      </span>
                      <span className="strike" style={{ fontSize: 16, flex: 1 }}>{s}</span>
                      <span
                        style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.16em", fontFamily: "var(--font-mono)" }}>
                        ✗ 砍掉
                      </span>
                    </div>
                  )}
                </div>
                <p style={{ fontSize: 14, color: "var(--fg-2)" }}>
                  减法的判断来自 13 年设计师的肌肉记忆 —— 也源自最近学习的响应式设计理论:移动端不止是把 web 内容塞进移动端,而需考虑移动端的用户体验特性做取舍。
                </p>
              </>
            } />
          </div>

          {/* Right column · screenshot */}
          <Reveal delay="200">
            <div style={{ position: "sticky", top: 120, display: "flex", flexDirection: "column", gap: 10 }}>
              <img
                src="uploads/case2-dession3.jpg"
                alt="Canvas · 决策 03 · 04 截图"
                style={{ width: "100%", height: "auto", display: "block", border: "1px solid var(--line)" }} />
              <div className="mono" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em" }}>
                EVIDENCE-D05 · Canvas · 决策 03 · 04
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);
}

// ─────────────── 09 · CANVAS FRAMEWORK · OUTPUT + EVIDENCE ───────────────

function P1CanvasOutputSection() {
  return (
    <section
      className="section"
      data-screen-label="09 Canvas Output"
      id="p1-canvas-output">

      <GhostNumber n="09" />

      <div className="container" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <SectionHeader
          index="§ 09"
          kicker="CASE 2"
          title="Canvas Framework · 产出"
          meta="PRD · SPEC · PNCL" />

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "clamp(28px, 5vh, 56px)", transform: "translateY(-40px)" }}>
          {/* Output · 3 cards horizontal */}
          <Reveal delay="200">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 24
              }}>

              {[
              ["1 份", "PRD 文档 · 近 600 行", "PRD"],
              ["1 份", "Capability 配置规范 · 18 个配置项", "SPEC"],
              ["1 套", "Pencil 交互+UI稿", "PNCL"]].
              map(([v, l, c], i) =>
              <div
                key={i}
                style={{
                  padding: "28px 32px",
                  background: "var(--bg-2)",
                  borderTop: "2px solid var(--fg)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10
                }}>

                  <span className="mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.14em" }}>
                    OUTPUT · {c}
                  </span>
                  <div
                  className="en"
                  style={{
                    fontSize: "clamp(32px, 3.4vw, 48px)",
                    fontWeight: 300,
                    lineHeight: 1,
                    letterSpacing: "-0.02em"
                  }}>

                    {v}
                  </div>
                  <div style={{ fontSize: 15, color: "var(--fg-2)" }}>{l}</div>
                </div>
              )}
            </div>
          </Reveal>

          {/* Anchor line */}
          <Reveal delay="400">
            <div
              style={{
                marginTop: "clamp(32px, 5vh, 56px)",
                paddingTop: "clamp(24px, 3vh, 40px)",
                borderTop: "1px solid var(--line)",
                fontSize: "clamp(18px, 1.8vw, 24px)",
                lineHeight: 1.5,
                color: "var(--fg)",
                textAlign: "center"
              }}>
              这是我第一次, 以<span style={{ color: "var(--accent)" }}>设计师 + PM 的视角</span>独立交付一份完整产出。
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}

function CanvasDecision({ n, title, body, last }) {
  return (
    <Reveal>
      <div
        style={{
          padding: "0 0 40px 0",
          marginBottom: 40,
          borderBottom: last ? "none" : "1px solid var(--line)"
        }}>

        <div>
          <h4
            style={{
              fontSize: "clamp(22px, 2.4vw, 30px)",
              fontWeight: 500,
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
              marginBottom: 18
            }}>

            <span style={{ color: "var(--accent)", marginRight: 10 }}>{n}</span>
            <span style={{ color: "var(--muted-2)", marginRight: 10 }}>·</span>
            {title}
          </h4>
          {body}
        </div>
      </div>
    </Reveal>);

}

// ─────────────── 07 · PROJECT 1 SYNTHESIS ───────────────

function P1SynthesisSection() {
  return (
    <section
      className="section"
      data-screen-label="07 Synthesis"
      id="p1-synth">
      
      <GhostNumber n="07" />

      <div className="container">
        <SectionHeader
          index="§ 07"
          kicker="MIRA"
          title="两件事的共性"
          meta="1 min" />
        

        <PullQuote
          style={{
            fontSize: "clamp(28px, 3.8vw, 56px)",
            maxWidth: "none",
            marginBottom: 32,
            lineHeight: 1.2,
            whiteSpace: "nowrap"
          }}>

          两件 scope 不同 —— 但都是<span style={{ color: "var(--accent)" }}>在更高一层做判断</span>。
        </PullQuote>

        <Reveal
          delay="200"
          style={{
            fontSize: "clamp(16px, 1.4vw, 20px)",
            lineHeight: 1.6,
            color: "var(--fg)",
            fontWeight: 500,
            marginBottom: 48
          }}>
          这是我近期最重要的一次能力变化。
        </Reveal>

        <div style={{ borderTop: "1px solid var(--line-strong)", paddingTop: 32 }}>
          <Reveal>
            <div
              className="en"
              style={{
                fontSize: 11,
                color: "var(--muted)",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                marginBottom: 28
              }}>
              
              落地情况 · Live in production
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <Reveal delay="200">
              <div style={{ borderLeft: "2px solid var(--accent)", paddingLeft: 20 }}>
                <div style={{ fontSize: 14, color: "var(--muted)", marginBottom: 6 }}>交互布局与任务流程</div>
                <div style={{ fontSize: 22, fontWeight: 500 }}>→ Mira 现行布局与交互规范

                </div>
                <div style={{ marginTop: 10, fontSize: 13, color: "var(--muted)" }}>
                  在 Mira 多个版本迭代里持续承载新功能
                </div>
              </div>
            </Reveal>
            <Reveal delay="350">
              <div style={{ borderLeft: "2px solid var(--accent)", paddingLeft: 20 }}>
                <div style={{ fontSize: 14, color: "var(--muted)", marginBottom: 6 }}>Canvas Framework</div>
                <div style={{ fontSize: 22, fontWeight: 500 }}>
                  → 平台级标准
                </div>
                <div style={{ marginTop: 10, fontSize: 13, color: "var(--fg-2)" }}>
                  <span className="tag" style={{ marginRight: 8 }}>Email</span>
                  <span className="tag" style={{ marginRight: 8 }}>ICP</span>
                  <span style={{ color: "var(--muted)" }}>两个接入方已按框架配置接入</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}

Object.assign(window, {
  P1OverviewSection,
  P1FlowSection,
  P1Decision01Section,
  P1Decision02Section,
  P1Decision03Section,
  P1OutcomeSection,
  P1CanvasIntroSection,
  P1CanvasSection,
  P1CanvasBSection,
  P1CanvasOutputSection,
  P1SynthesisSection
});