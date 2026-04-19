function DraftiqLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="9" height="9" fill="var(--pick)" />
      <rect x="12" y="1" width="9" height="9" fill="var(--ink)" />
      <rect x="1" y="12" width="9" height="9" fill="var(--ink)" />
      <rect x="12" y="12" width="9" height="9" fill="var(--ban)" />
    </svg>
  );
}
function DraftiqGitHubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.67 5.56.67 11.84c0 5.02 3.24 9.27 7.74 10.77.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.15.69-3.81-1.52-3.81-1.52-.52-1.31-1.27-1.66-1.27-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.66 1.24 3.31.95.1-.74.4-1.24.72-1.52-2.51-.29-5.15-1.26-5.15-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .95-.31 3.12 1.16.91-.25 1.88-.38 2.85-.38.97 0 1.94.13 2.85.38 2.17-1.47 3.12-1.16 3.12-1.16.62 1.57.23 2.73.11 3.02.73.8 1.17 1.81 1.17 3.04 0 4.35-2.64 5.3-5.16 5.59.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.21.66.79.55 4.5-1.5 7.73-5.75 7.73-10.77C23.33 5.56 18.27.5 12 .5z" />
    </svg>
  );
}
const draftiqNavLink = { textDecoration: "none", color: "var(--ink-2)", fontSize: 13.5, fontWeight: 450 };
const draftiqNavLinkActive = { ...draftiqNavLink, color: "var(--ink)", borderBottom: "1px solid var(--ink)", paddingBottom: 2 };

function DraftiqNav({ active }) {
  return (
    <div style={{ borderBottom: "1px solid var(--line)", background: "var(--bg)", position: "sticky", top: 0, zIndex: 20 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="index.html" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "var(--ink)" }}>
          <DraftiqLogo />
          <span style={{ fontWeight: 600, fontSize: 15, letterSpacing: -0.2 }}>Draftiq</span>
          <span className="mono" style={{ fontSize: 11, color: "var(--muted)", padding: "2px 6px", border: "1px solid var(--line)" }}>v0.0.1</span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <a href="/docs" style={active === "docs" ? draftiqNavLinkActive : draftiqNavLink}>Documentation</a>
          <a href="/download" style={active === "download" ? draftiqNavLinkActive : draftiqNavLink}>Download</a>
          <a href="https://github.com/abrandonwang/draftiq" style={{ ...draftiqNavLink, display: "inline-flex", alignItems: "center", gap: 8 }}>
            <DraftiqGitHubIcon size={14} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

function DraftiqFooter() {
  return (
    <footer>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 32px 56px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 40, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
          <DraftiqLogo />
          <div>
            <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 6 }}>Draftiq</div>
            <div style={{ fontSize: 12.5, color: "var(--muted)", maxWidth: 380, lineHeight: 1.55 }}>
              A draft companion for League of Legends. Not affiliated with, endorsed, sponsored, or specifically approved by Riot Games, Inc.
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 40, fontSize: 13 }}>
          <div>
            <div className="mono" style={{ fontSize: 10.5, color: "var(--muted-2)", letterSpacing: 0.5, marginBottom: 12 }}>PRODUCT</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a href="index.html" style={{ color: "var(--ink-2)", textDecoration: "none", fontSize: 13 }}>Home</a>
              <a href="/docs" style={{ color: "var(--ink-2)", textDecoration: "none", fontSize: 13 }}>Documentation</a>
              <a href="/download" style={{ color: "var(--ink-2)", textDecoration: "none", fontSize: 13 }}>Download</a>
            </div>
          </div>
          <div>
            <div className="mono" style={{ fontSize: 10.5, color: "var(--muted-2)", letterSpacing: 0.5, marginBottom: 12 }}>SOURCE</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a href="https://github.com/abrandonwang/draftiq" style={{ color: "var(--ink-2)", textDecoration: "none", fontSize: 13 }}>GitHub</a>
              <a href="https://github.com/abrandonwang/draftiq/issues" style={{ color: "var(--ink-2)", textDecoration: "none", fontSize: 13 }}>Issues</a>
              <a href="https://github.com/abrandonwang/draftiq/blob/main/LICENSE" style={{ color: "var(--ink-2)", textDecoration: "none", fontSize: 13 }}>MIT License</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { DraftiqLogo, DraftiqGitHubIcon, DraftiqNav, DraftiqFooter });
