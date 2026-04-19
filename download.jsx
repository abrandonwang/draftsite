
const primaryBtn = { display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, background: "var(--ink)", color: "#fff", padding: "12px 18px", fontSize: 14, fontWeight: 500, textDecoration: "none", border: "1px solid var(--ink)" };
const secondaryBtn = { display: "inline-flex", alignItems: "center", gap: 8, background: "var(--surface)", color: "var(--ink)", padding: "10px 14px", fontSize: 13, fontWeight: 500, textDecoration: "none", border: "1px solid var(--line)" };

function AppleIcon({ size = 18 }) {
  return (<svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor"><path d="M11.2 8.5c0-2 1.6-2.9 1.7-3-1-1.4-2.4-1.6-2.9-1.6-1.3-.1-2.5.8-3.1.8-.7 0-1.6-.8-2.7-.7C2.9 4 1.6 4.8.9 6.2c-1.4 2.4-.4 6 1 8 .7.9 1.4 2 2.4 2 1 0 1.4-.6 2.6-.6 1.2 0 1.5.6 2.6.6 1.1 0 1.8-1 2.4-1.9.8-1.1 1.1-2.2 1.1-2.3-.1 0-2.2-.8-2.2-3.3zM9.2 2.8c.5-.6.9-1.5.8-2.4-.8.1-1.7.5-2.2 1.2-.5.5-.9 1.5-.8 2.3.9.1 1.7-.5 2.2-1.1z"/></svg>);
}
function WindowsIcon({ size = 16 }) {
  return (<svg width={size} height={size} viewBox="0 0 18 18" fill="currentColor"><rect x="1" y="1" width="7.5" height="7.5"/><rect x="9.5" y="1" width="7.5" height="7.5"/><rect x="1" y="9.5" width="7.5" height="7.5"/><rect x="9.5" y="9.5" width="7.5" height="7.5"/></svg>);
}

function Breadcrumbs() {
  return (<div className="mono" style={{ fontSize: 11, color: "var(--muted-2)", letterSpacing: 0.4, marginBottom: 20 }}>
    <a href="index.html" style={{ color: "var(--muted-2)", textDecoration: "none" }}>HOME</a>
    <span style={{ margin: "0 8px" }}>/</span><span style={{ color: "var(--ink-2)" }}>DOWNLOAD</span>
  </div>);
}
function SectionLabel({ children }) {
  return (<div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
    <span style={{ width: 8, height: 8, background: "var(--ink)", display: "inline-block" }} />
    <span className="mono" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: 0.6, textTransform: "uppercase" }}>{children}</span>
  </div>);
}

function PlatformCard({ os, icon, detail, size, available, disabled, href, mac }) {
  return (
    <div className={mac ? "plat-mac-border" : ""} style={{ padding: "28px 26px", opacity: disabled ? 0.55 : 1, background: "#fff" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>{icon}<span style={{ fontSize: 15, fontWeight: 500 }}>{os}</span></div>
        {disabled && <span className="mono" style={{ fontSize: 10, color: "var(--accent-warn)", border: "1px solid var(--accent-warn)", padding: "2px 6px", letterSpacing: 0.4 }}>SOON</span>}
      </div>
      <p style={{ margin: "0 0 20px", fontSize: 12.5, color: "var(--muted)", lineHeight: 1.5 }}>{detail}</p>
      {available
        ? <a href={href} download style={{ ...primaryBtn, width: "100%" }}>Download {os === "macOS" ? ".dmg" : ""}</a>
        : <button disabled style={{ width: "100%", padding: "10px 14px", background: "#f0f0ec", color: "var(--muted-2)", border: "1px solid var(--line)", fontSize: 13, fontWeight: 500, cursor: "not-allowed" }}>Coming soon</button>}
      <div style={{ marginTop: 14, display: "flex", justifyContent: "space-between", color: "var(--muted-2)" }}>
        <span className="mono" style={{ fontSize: 10.5 }}>SIZE</span>
        <span className="mono" style={{ fontSize: 10.5 }}>{size}</span>
      </div>
    </div>
  );
}


function DownloadApp() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <DraftiqNav active="download" />
      <section style={{ borderBottom: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 32px 56px" }}>
          <Breadcrumbs />
          <p style={{ fontSize: 16.5, color: "var(--muted)", lineHeight: 1.55, margin: "0 0 40px" }}>Pick your platform below. Draftiq is free, open source, and under 5 MB. No account required.</p>
          <div className="dl-grid">
            <div style={{ border: "1px solid var(--line)", background: "#fff" }}>
              <div style={{ padding: "16px 22px", borderBottom: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span className="mono" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: 0.5 }}>LATEST RELEASE</span>
                  <span className="mono" style={{ fontSize: 11, padding: "2px 7px", border: "1px solid var(--line)", color: "var(--ink-2)" }}>v0.1.0</span>
                </div>
                <span className="mono" style={{ fontSize: 11, color: "var(--muted-2)" }}>APR 19, 2026</span>
              </div>
              <div className="plat-grid">
                <PlatformCard mac available os="macOS" icon={<AppleIcon size={20} />} detail="12+ · Universal (Intel + Apple Silicon)" size="4.2 MB" href="https://github.com/abrandonwang/draft-overlay/releases/latest/download/draftiq-0.1.0.dmg" />
                <PlatformCard os="Windows" icon={<WindowsIcon size={18} />} detail="10+ · x64 support" size="TBA" disabled />
              </div>
              <div style={{ padding: "14px 22px", borderTop: "1px solid var(--line)", display: "flex", gap: 24, color: "var(--muted)", fontSize: 12, flexWrap: "wrap" }}>
                <span className="mono">SHA256 <span style={{ color: "var(--muted-2)" }}>9f4e…c21a</span></span>
                <a className="mono" href="https://github.com/abrandonwang/draft-overlay/releases" style={{ color: "var(--ink-2)", textDecoration: "none", borderBottom: "1px solid var(--line)" }}>ALL RELEASES →</a>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ border: "1px solid var(--line)", background: "#fff" }}>
                <div style={{ padding: "14px 20px", borderBottom: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 13.5, fontWeight: 500 }}>Install from the command line</span>
                  <span className="mono" style={{ fontSize: 10.5, color: "var(--muted-2)" }}>ZSH / BASH</span>
                </div>
                <pre style={{ margin: 0, padding: 18, background: "#0a0a0a", color: "#e8e8e4", fontFamily: "Geist Mono, monospace", fontSize: 12, lineHeight: 1.6, overflowX: "auto", whiteSpace: "pre" }}>
{`curl -L -o draftiq-0.1.0.dmg \\
  https://github.com/abrandonwang/draft-overlay/releases/latest/download/draftiq-0.1.0.dmg
hdiutil attach draftiq.dmg
cp -R /Volumes/Draftiq/Draftiq.app /Applications/`}
                </pre>
              </div>
              <div style={{ border: "1px solid var(--line)", background: "#fff", padding: "18px 20px" }}>
                <div className="mono" style={{ fontSize: 10.5, color: "var(--muted)", letterSpacing: 0.5, marginBottom: 8 }}>VERIFY INTEGRITY</div>
                <p style={{ margin: "0 0 10px", fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.5 }}>Confirm the download matches the published checksum before running it.</p>
                <div style={{ background: "var(--bg)", padding: "10px 12px", fontFamily: "Geist Mono, monospace", fontSize: 12, border: "1px solid var(--line)" }}>shasum -a 256 draftiq.dmg</div>
              </div>
              <div style={{ border: "1px solid var(--line)", background: "#fff", padding: "18px 20px" }}>
                <div className="mono" style={{ fontSize: 10.5, color: "var(--muted)", letterSpacing: 0.5, marginBottom: 8 }}>REQUIREMENTS</div>
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: "var(--ink-2)", lineHeight: 1.7 }}>
                  <li>macOS 12 Monterey or later</li>
                  <li>1 GB free RAM while running</li>
                  <li>League of Legends installed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

<section style={{ borderBottom: "1px solid var(--line)", background: "#fdfdfb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
          <div>
            <div className="mono" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: 0.5, marginBottom: 8 }}>NEED HELP GETTING STARTED?</div>
            <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: -0.4 }}>Read the installation guide.</div>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="/docs#installation" style={primaryBtn}>Go to docs →</a>
          </div>
        </div>
      </section>

      <DraftiqFooter />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<DownloadApp />);
