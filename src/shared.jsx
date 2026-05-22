// shared.jsx — reusable primitives across all acts
// Loaded BEFORE act files. Exposes utilities to window.

const { useEffect, useRef, useState, useMemo, useCallback } = React;

// ─────────────── Hooks ───────────────

function useReveal(opts = {}) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-in");
            setSeen(true);
            if (opts.once !== false) io.unobserve(el);
          } else if (opts.once === false) {
            el.classList.remove("is-in");
            setSeen(false);
          }
        });
      },
      { threshold: opts.threshold ?? 0.2, rootMargin: opts.rootMargin ?? "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen];
}

function useCountUp(target, { duration = 1400, start = 0, run = true } = {}) {
  const [val, setVal] = useState(start);
  useEffect(() => {
    if (!run) return;
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(start + (target - start) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target]);
  return val;
}

function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? window.scrollY / h : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return p;
}

// ─────────────── Primitives ───────────────

function Reveal({ as: As = "div", delay, className = "", children, ...rest }) {
  const [ref] = useReveal();
  const cls = ["reveal", className].filter(Boolean).join(" ");
  return (
    <As ref={ref} className={cls} data-d={delay} {...rest}>
      {children}
    </As>
  );
}

function Eyebrow({ children, style }) {
  return (
    <div className="eyebrow" style={style}>
      <span className="dot" />
      {children}
    </div>
  );
}

function LetterFlow({ text, className = "" }) {
  const [ref] = useReveal();
  return (
    <span ref={ref} className={`letter-flow ${className}`}>
      {[...text].map((ch, i) => (
        <span key={i} style={{ transitionDelay: `${i * 50}ms` }}>
          {ch === " " ? "\u00a0" : ch}
        </span>
      ))}
    </span>
  );
}

// Placeholder block — unified gray-tinted, mono-annotation
function Placeholder({ label, note, ratio = "16/9", style, className = "", tall, code }) {
  return (
    <div
      className={`ph ${className}`}
      style={{
        aspectRatio: tall ? undefined : ratio,
        height: tall || undefined,
        ...style,
      }}
    >
      {code ? <span className="ph__tag mono">{code}</span> : null}
      <div className="ph__inner">
        <div>
          <div style={{ color: "var(--fg-2)", fontWeight: 500, fontSize: 12, marginBottom: 2 }}>
            {label}
          </div>
          {note ? <div style={{ fontSize: 10, color: "var(--muted)" }}>{note}</div> : null}
        </div>
      </div>
      <span className="ph__corner mono">placeholder</span>
    </div>
  );
}

// Section header — title + kicker + meta (no index)
function SectionHeader({ index, title, kicker, meta, style }) {
  return (
    <div
      className="reveal"
      ref={useReveal()[0]}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "center",
        gap: 24,
        marginBottom: 48,
        ...style,
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
        {kicker ? (
          <span
            className="en"
            style={{
              fontSize: 12,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            {kicker}
          </span>
        ) : null}
        <span style={{ fontSize: "var(--t-h3)", fontWeight: 500, letterSpacing: "-0.01em" }}>
          {title}
        </span>
      </div>
    </div>
  );
}

// Decorative section index — DISABLED globally (background number watermark removed).
function GhostNumber() { return null; }

// Pull quote — large editorial statement
function PullQuote({ children, style }) {
  return (
    <Reveal
      as="blockquote"
      style={{
        fontSize: "var(--t-h2)",
        fontWeight: 300,
        lineHeight: 1.25,
        letterSpacing: "-0.01em",
        textWrap: "balance",
        maxWidth: "20ch",
        ...style,
      }}
    >
      {children}
    </Reveal>
  );
}

// Stat block — number + label
function Stat({ value, label, sub, accent, style }) {
  return (
    <Reveal style={{ display: "flex", flexDirection: "column", gap: 6, ...style }}>
      <div
        className="en"
        style={{
          fontSize: "clamp(56px, 8vw, 110px)",
          fontWeight: 300,
          lineHeight: 0.9,
          letterSpacing: "-0.04em",
          color: accent ? "var(--accent)" : "var(--fg)",
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: 13, color: "var(--muted)", letterSpacing: "0.04em" }}>{label}</div>
      {sub ? (
        <div className="mono" style={{ fontSize: 10, color: "var(--muted-2)", marginTop: 2 }}>
          {sub}
        </div>
      ) : null}
    </Reveal>
  );
}

// Numbered list item with left-rule
function NumberedBlock({ n, title, kids, children, accent, style }) {
  return (
    <Reveal
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "clamp(20px, 3vw, 40px)",
        paddingBottom: 36,
        borderBottom: "1px solid var(--line)",
        ...style,
      }}
    >
      <div
        className="en"
        style={{
          fontSize: 14,
          fontWeight: 500,
          color: accent ? "var(--accent)" : "var(--muted)",
          letterSpacing: "0.04em",
          fontVariantNumeric: "tabular-nums",
          paddingTop: 8,
        }}
      >
        {n}
      </div>
      <div>
        <h3
          style={{
            fontSize: "var(--t-h3)",
            fontWeight: 500,
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
            marginBottom: 16,
          }}
        >
          {title}
        </h3>
        <div style={{ color: "var(--fg-2)", lineHeight: 1.75, maxWidth: "65ch" }}>{children}</div>
      </div>
    </Reveal>
  );
}

// Expose to window
Object.assign(window, {
  useReveal,
  useCountUp,
  useScrollProgress,
  Reveal,
  Eyebrow,
  LetterFlow,
  Placeholder,
  SectionHeader,
  GhostNumber,
  PullQuote,
  Stat,
  NumberedBlock,
});
