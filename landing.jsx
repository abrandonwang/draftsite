const { useState, useEffect } = React;

const Dot = ({ color, size = 6 }) => (
  <span
    style={{
      display: "inline-block",
      width: size,
      height: size,
      background: color,
      verticalAlign: "middle",
    }}
  />
);

const primaryBtnStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  background: "var(--ink)",
  color: "#fff",
  padding: "12px 18px",
  fontSize: 14,
  fontWeight: 500,
  textDecoration: "none",
  border: "1px solid var(--ink)",
};
const secondaryBtnStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  background: "var(--surface)",
  color: "var(--ink)",
  padding: "12px 16px",
  fontSize: 14,
  fontWeight: 500,
  textDecoration: "none",
  border: "1px solid var(--line)",
};

function AppleIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor">
      <path d="M11.2 8.5c0-2 1.6-2.9 1.7-3-1-1.4-2.4-1.6-2.9-1.6-1.3-.1-2.5.8-3.1.8-.7 0-1.6-.8-2.7-.7C2.9 4 1.6 4.8.9 6.2c-1.4 2.4-.4 6 1 8 .7.9 1.4 2 2.4 2 1 0 1.4-.6 2.6-.6 1.2 0 1.5.6 2.6.6 1.1 0 1.8-1 2.4-1.9.8-1.1 1.1-2.2 1.1-2.3-.1 0-2.2-.8-2.2-3.3zM9.2 2.8c.5-.6.9-1.5.8-2.4-.8.1-1.7.5-2.2 1.2-.5.5-.9 1.5-.8 2.3.9.1 1.7-.5 2.2-1.1z" />
    </svg>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <span
        style={{
          width: 8,
          height: 8,
          background: "var(--ink)",
          display: "inline-block",
        }}
      />
      <span
        className="mono"
        style={{
          fontSize: 11,
          color: "var(--muted)",
          letterSpacing: 0.6,
          textTransform: "uppercase",
        }}
      >
        {children}
      </span>
    </div>
  );
}
const sectionHeadingStyle = {
  fontSize: 44,
  fontWeight: 600,
  letterSpacing: -1.4,
  margin: "12px 0 0",
  lineHeight: 1.05,
};

function Hero() {
  const lines = ["Draft smarter.", "In real time."];
  return (
    <section style={{ borderBottom: "1px solid var(--line)" }}>
      <div
        style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 32px 72px" }}
      >
        <div className="hero-grid">
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                border: "1px solid var(--line)",
                padding: "4px 10px",
                marginBottom: 28,
                background: "var(--surface)",
              }}
            >
              <Dot color="var(--pick)" />
              <span
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: 0.3,
                  color: "var(--muted)",
                  textTransform: "uppercase",
                }}
              >
                Now in beta
              </span>
            </div>
            <h1
              style={{
                fontSize: 64,
                lineHeight: 1.02,
                letterSpacing: -2,
                fontWeight: 600,
                margin: "0 0 24px",
                textWrap: "pretty",
              }}
            >
              {lines.map((l, i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    color:
                      i === lines.length - 1 ? "var(--muted)" : "var(--ink)",
                  }}
                >
                  {l}
                </span>
              ))}
            </h1>
            <p
              style={{
                fontSize: 17.5,
                lineHeight: 1.55,
                color: "var(--ink-2)",
                maxWidth: 520,
                margin: "0 0 36px",
              }}
            >
              A free desktop overlay that tracks picks, bans, and phase timing
              during League of Legends champion select.
            </p>
            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="/releases/latest/download/draftiq.dmg"
                download
                style={primaryBtnStyle}
              >
                <AppleIcon size={14} /> Download for Mac
                <span
                  className="mono"
                  style={{ fontSize: 11, opacity: 0.7, marginLeft: 4 }}
                >
                  .dmg
                </span>
              </a>
              <a
                href="https://github.com/abrandonwang/draftiq"
                style={secondaryBtnStyle}
              >
                <DraftiqGitHubIcon size={14} /> View on GitHub
              </a>
            </div>
          </div>
          <OverlayMockup />
        </div>
      </div>
    </section>
  );
}

function OverlayMockup() {
  const [timer, setTimer] = useState(24);
  useEffect(() => {
    const id = setInterval(() => setTimer((t) => (t <= 0 ? 28 : t - 1)), 1000);
    return () => clearInterval(id);
  }, []);
  const bluePicks = [
    { slot: 1, name: "Aurelion Sol", role: "TOP", state: "locked" },
    { slot: 2, name: "Sejuani", role: "JNG", state: "locked" },
    { slot: 3, name: "Orianna", role: "MID", state: "picking" },
    { slot: 4, name: "—", role: "ADC", state: "pending" },
    { slot: 5, name: "—", role: "SUP", state: "pending" },
  ];
  const redPicks = [
    { slot: 1, name: "K'Sante", role: "TOP", state: "locked" },
    { slot: 2, name: "Viego", role: "JNG", state: "locked" },
    { slot: 3, name: "Azir", role: "MID", state: "locked" },
    { slot: 4, name: "Caitlyn", role: "ADC", state: "locked" },
    { slot: 5, name: "—", role: "SUP", state: "pending" },
  ];
  const blueBans = ["Yone", "Rell", "Tristana", "—", "—"];
  const redBans = ["Ahri", "Leona", "Lee Sin", "—", "—"];
  return (
    <div style={{ position: "relative", minWidth: 0, width: "100%" }}>
      <div
        style={{
          background: "#fdfdfb",
          border: "1px solid var(--line)",
          boxShadow:
            "0 1px 0 rgba(0,0,0,0.02), 0 20px 40px -20px rgba(0,0,0,0.12)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            borderBottom: "1px solid var(--line)",
            background: "#fafaf7",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ display: "flex", gap: 6 }}>
              <span
                style={{
                  width: 10,
                  height: 10,
                  background: "#e6e6e1",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  width: 10,
                  height: 10,
                  background: "#e6e6e1",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  width: 10,
                  height: 10,
                  background: "#e6e6e1",
                  display: "inline-block",
                }}
              />
            </div>
            <span
              className="mono"
              style={{
                fontSize: 10.5,
                color: "var(--muted)",
                letterSpacing: 0.3,
              }}
            >
              DRAFTIQ — CHAMPION SELECT
            </span>
          </div>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "2px 7px",
              border: "1px solid var(--line)",
              background: "#fff",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                background: "#20a464",
                display: "inline-block",
              }}
            />
            <span className="mono" style={{ fontSize: 10.5 }}>
              LIVE
            </span>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            borderBottom: "1px solid var(--line)",
            background: "#fff",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              minWidth: 0,
            }}
          >
            <span
              className="mono"
              style={{ fontSize: 10.5, color: "var(--muted)" }}
            >
              PHASE
            </span>
            <div style={{ display: "flex", border: "1px solid var(--line)" }}>
              <PhaseStep label="BAN 1" done />
              <PhaseStep label="PICK 1" done />
              <PhaseStep label="BAN 2" done />
              <PhaseStep label="PICK 2" active />
              <PhaseStep label="LOCK" />
            </div>
          </div>
          <span
            className="mono"
            style={{
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: -1,
              color: timer <= 10 ? "var(--ban)" : "var(--ink)",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            00:{String(timer).padStart(2, "0")}
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <BanStrip side="blue" bans={blueBans} />
          <BanStrip side="red" bans={redBans} align="right" />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            background: "#fff",
          }}
        >
          <div style={{ borderRight: "1px solid var(--line)" }}>
            <ColumnHeader side="blue" label="BLUE SIDE" />
            {bluePicks.map((p, i) => (
              <PickRow key={i} {...p} side="blue" />
            ))}
          </div>
          <div>
            <ColumnHeader side="red" label="RED SIDE" align="right" />
            {redPicks.map((p, i) => (
              <PickRow key={i} {...p} side="red" align="right" />
            ))}
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid var(--line)",
            padding: "10px 14px",
            background: "#fafaf7",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            className="mono"
            style={{ fontSize: 10.5, color: "var(--muted)" }}
          >
            AI SUGGEST · Available in next release
          </span>
          <span
            className="mono"
            style={{
              padding: "2px 7px",
              border: "1px solid var(--line)",
              background: "#fff",
              fontSize: 10.5,
              letterSpacing: 0.3,
              color: "var(--accent-warn)",
            }}
          >
            SOON
          </span>
        </div>
      </div>
    </div>
  );
}

function PhaseStep({ label, done, active }) {
  const bg = active ? "var(--ink)" : "#fff";
  const color = active ? "#fff" : done ? "var(--ink-2)" : "var(--muted-2)";
  return (
    <span
      className="mono"
      style={{
        padding: "3px 8px",
        fontSize: 10,
        letterSpacing: 0.4,
        background: bg,
        color,
        borderRight: "1px solid var(--line)",
      }}
    >
      {label}
    </span>
  );
}

function ColumnHeader({ label, side, align }) {
  const color = side === "blue" ? "var(--pick)" : "var(--ban)";
  return (
    <div
      style={{
        padding: "8px 14px",
        borderBottom: "1px solid var(--line)",
        display: "flex",
        alignItems: "center",
        justifyContent: align === "right" ? "flex-end" : "flex-start",
        gap: 8,
        background: "#fafaf7",
      }}
    >
      {align !== "right" && (
        <span
          style={{
            width: 3,
            height: 12,
            background: color,
            display: "inline-block",
          }}
        />
      )}
      <span
        className="mono"
        style={{ fontSize: 10.5, letterSpacing: 0.5, color: "var(--muted)" }}
      >
        {label}
      </span>
      {align === "right" && (
        <span
          style={{
            width: 3,
            height: 12,
            background: color,
            display: "inline-block",
          }}
        />
      )}
    </div>
  );
}

function BanStrip({ side, bans, align }) {
  return (
    <div
      style={{
        padding: "8px 14px",
        display: "flex",
        alignItems: "center",
        gap: 6,
        justifyContent: align === "right" ? "flex-end" : "flex-start",
        background: "#fafaf7",
        borderRight: side === "blue" ? "1px solid var(--line)" : "none",
      }}
    >
      {align !== "right" && (
        <span
          className="mono"
          style={{
            fontSize: 10,
            color: "var(--muted)",
            letterSpacing: 0.4,
            marginRight: 4,
          }}
        >
          BANS
        </span>
      )}
      <div style={{ display: "flex", gap: 4, flex: 1, minWidth: 0 }}>
        {bans.map((b, i) => (
          <div
            key={i}
            style={{
              flex: "1 1 0",
              minWidth: 0,
              padding: "3px 4px",
              border: `1px solid ${b === "—" ? "var(--line)" : "var(--ban)"}`,
              background: b === "—" ? "transparent" : "var(--ban-soft)",
              color: b === "—" ? "var(--muted-2)" : "var(--ban)",
              fontSize: 10,
              fontWeight: 500,
              textDecoration: b === "—" ? "none" : "line-through",
              textAlign: "center",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {b}
          </div>
        ))}
      </div>
      {align === "right" && (
        <span
          className="mono"
          style={{
            fontSize: 10,
            color: "var(--muted)",
            letterSpacing: 0.4,
            marginLeft: 4,
          }}
        >
          BANS
        </span>
      )}
    </div>
  );
}

function PickRow({ slot, name, role, state, side, align }) {
  const sideColor = side === "blue" ? "var(--pick)" : "var(--ban)";
  const isActive = state === "picking";
  const isPending = state === "pending";
  const bg = isActive
    ? side === "blue"
      ? "var(--pick-soft)"
      : "var(--ban-soft)"
    : "#fff";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
        padding: "10px 14px",
        borderBottom: "1px solid var(--line-2)",
        background: bg,
        flexDirection: align === "right" ? "row-reverse" : "row",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          flexDirection: align === "right" ? "row-reverse" : "row",
        }}
      >
        <span
          className="mono"
          style={{ fontSize: 10.5, color: "var(--muted-2)", width: 16 }}
        >
          {slot}
        </span>
        <span
          style={{
            width: 28,
            height: 28,
            background: isPending ? "transparent" : "#efefea",
            border: "1px solid var(--line)",
            display: "inline-block",
          }}
        />
        <span
          style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: isPending ? "var(--muted-2)" : "var(--ink)",
            }}
          >
            {name}
          </span>
          <span
            className="mono"
            style={{
              fontSize: 10,
              color: "var(--muted)",
              marginTop: 2,
              letterSpacing: 0.3,
            }}
          >
            {role}
          </span>
        </span>
      </div>
      <span
        className="mono"
        style={{
          fontSize: 10,
          letterSpacing: 0.3,
          padding: "2px 6px",
          color: isActive
            ? sideColor
            : isPending
              ? "var(--muted-2)"
              : "var(--muted)",
          border: `1px solid ${isActive ? sideColor : "var(--line)"}`,
          background: isActive ? "#fff" : "transparent",
        }}
      >
        {isActive ? "PICKING" : isPending ? "PENDING" : "LOCKED"}
      </span>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Launch Draftiq",
      body: "Open the app alongside the League client. It sits quietly in your menu bar.",
    },
    {
      n: "02",
      title: "Queue up",
      body: "When champion select starts, the overlay appears on top of your screen. No setup required.",
    },
    {
      n: "03",
      title: "Draft smarter",
      body: "Track picks, bans, and phase timing in real time. Close it when your game begins.",
    },
  ];
  return (
    <section style={{ borderBottom: "1px solid var(--line)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 32px" }}>
        <SectionLabel>How it works</SectionLabel>
        <h2 style={sectionHeadingStyle}>Three steps. No config.</h2>
        <div
          className="three-col"
          style={{ marginTop: 56, border: "1px solid var(--line)" }}
        >
          {steps.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "32px 28px 40px",
              }}
            >
              <span
                className="mono"
                style={{
                  fontSize: 11,
                  color: "var(--muted-2)",
                  letterSpacing: 0.5,
                }}
              >
                {s.n}
              </span>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 500,
                  letterSpacing: -0.4,
                  margin: "14px 0 10px",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--muted)",
                  lineHeight: 1.6,
                  margin: 0,
                  maxWidth: 320,
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const feats = [
    {
      tag: "CORE",
      title: "Picks & bans, tracked",
      body: "Every pick and ban synced to the millisecond. See both sides at a glance without tabbing away.",
    },
    {
      tag: "CORE",
      title: "Phase detection",
      body: "Knows when you're in ban phase, pick phase, or the final lock-in. The timer turns red in the last 10 seconds.",
    },
    {
      tag: "SOON",
      title: "AI draft suggestions",
      body: "Counter-pick recommendations tuned to your mastery and the current meta. Rolling out in v0.2.",
    },
    {
      tag: "CORE",
      title: "Lightweight",
      body: "Under 5 MB. No background services. No telemetry. Close it and it's gone.",
    },
    {
      tag: "CORE",
      title: "Free forever",
      body: "Open source under MIT. No accounts, no ads, no premium tier.",
    },
    {
      tag: "CORE",
      title: "Stays out of the way",
      body: "Click-through mode, adjustable opacity, and a keyboard shortcut to hide instantly.",
    },
  ];
  return (
    <section
      style={{ borderBottom: "1px solid var(--line)", background: "#fdfdfb" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 32px" }}>
        <div>
          <SectionLabel>Features</SectionLabel>
          <h2 style={sectionHeadingStyle}>
            Built for the 60 seconds
            <br />
            before the game starts.
          </h2>
        </div>
        <div
          className="six-grid"
          style={{
            marginTop: 56,
            border: "1px solid var(--line)",
            background: "var(--bg)",
          }}
        >
          {feats.map((f, i) => (
            <div
              key={i}
              style={{
                padding: "28px 28px 36px",
                background: "#fff",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  marginBottom: 18,
                }}
              >
                {f.tag === "SOON" ? (
                  <span
                    className="mono"
                    style={{
                      padding: "2px 7px",
                      border: "1px solid var(--accent-warn)",
                      color: "var(--accent-warn)",
                      fontSize: 10,
                      letterSpacing: 0.5,
                    }}
                  >
                    COMING SOON
                  </span>
                ) : (
                  <span
                    className="mono"
                    style={{
                      fontSize: 10,
                      color: "var(--muted-2)",
                      letterSpacing: 0.5,
                    }}
                  >
                    0{i + 1}
                  </span>
                )}
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                  letterSpacing: -0.3,
                  margin: "0 0 8px",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: 13.5,
                  color: "var(--muted)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DownloadCTA() {
  return (
    <section style={{ borderBottom: "1px solid var(--line)" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "96px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 32,
          flexWrap: "wrap",
        }}
      >
        <div>
          <SectionLabel>Download</SectionLabel>
          <h2 style={sectionHeadingStyle}>Get Draftiq.</h2>
          <p
            style={{
              fontSize: 15,
              color: "var(--muted)",
              margin: "16px 0 0",
              maxWidth: 480,
            }}
          >
            Free, open source. macOS available now. Windows coming in v0.2.
          </p>
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a href="/download" style={primaryBtnStyle}>
            Go to download page →
          </a>
          <a href="/docs" style={secondaryBtnStyle}>
            Read the docs
          </a>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <DraftiqNav active="home" />
      <Hero />
      <HowItWorks />
      <Features />
      <DownloadCTA />
      <DraftiqFooter />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
