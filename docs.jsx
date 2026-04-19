const { useState, useEffect } = React;

const SECTIONS = [
  { group: "Getting Started", items: [
    { id: "introduction", label: "Introduction" },
    { id: "installation", label: "Installation" },
    { id: "first-launch", label: "First launch" },
    { id: "system-requirements", label: "System requirements" },
  ]},
  { group: "Using Draftiq", items: [
    { id: "overlay", label: "The overlay window" },
    { id: "phase-detection", label: "Phase detection" },
    { id: "keyboard-shortcuts", label: "Keyboard shortcuts" },
    { id: "preferences", label: "Preferences" },
  ]},
  { group: "Advanced", items: [
    { id: "client-integration", label: "Client integration" },
    { id: "ai-suggestions", label: "AI suggestions (beta)" },
    { id: "cli-flags", label: "Command-line flags" },
  ]},
  { group: "Resources", items: [
    { id: "troubleshooting", label: "Troubleshooting" },
    { id: "faq", label: "FAQ" },
    { id: "changelog", label: "Changelog" },
  ]},
];

const ALL_HEADINGS = [
  { id: "introduction", label: "Introduction", level: 1 },
  { id: "what-is-draftiq", label: "What is Draftiq?", level: 2 },
  { id: "who-is-it-for", label: "Who is it for?", level: 2 },
  { id: "installation", label: "Installation", level: 1 },
  { id: "macos-install", label: "macOS", level: 2 },
  { id: "windows-install", label: "Windows", level: 2 },
  { id: "verifying", label: "Verifying the build", level: 2 },
  { id: "first-launch", label: "First launch", level: 1 },
  { id: "permissions", label: "Granting permissions", level: 2 },
  { id: "starting-overlay", label: "Starting the overlay", level: 2 },
  { id: "system-requirements", label: "System requirements", level: 1 },
  { id: "overlay", label: "The overlay window", level: 1 },
  { id: "anatomy", label: "Anatomy of a draft", level: 2 },
  { id: "positioning", label: "Positioning and opacity", level: 2 },
  { id: "click-through", label: "Click-through mode", level: 2 },
  { id: "phase-detection", label: "Phase detection", level: 1 },
  { id: "keyboard-shortcuts", label: "Keyboard shortcuts", level: 1 },
  { id: "preferences", label: "Preferences", level: 1 },
  { id: "client-integration", label: "Client integration", level: 1 },
  { id: "ai-suggestions", label: "AI suggestions (beta)", level: 1 },
  { id: "cli-flags", label: "Command-line flags", level: 1 },
  { id: "troubleshooting", label: "Troubleshooting", level: 1 },
  { id: "faq", label: "FAQ", level: 1 },
  { id: "changelog", label: "Changelog", level: 1 },
];

function SideNav({ activeId }) {
  return (
    <nav className="docs-sidenav">
      <div className="mono" style={{ fontSize: 10.5, color: "var(--muted-2)", letterSpacing: 0.5, padding: "4px 0 12px" }}>DOCUMENTATION</div>
      {SECTIONS.map((group, gi) => (
        <div key={gi} style={{ marginBottom: 24 }}>
          <div className="mono" style={{ fontSize: 10.5, color: "var(--muted)", letterSpacing: 0.4, marginBottom: 8, textTransform: "uppercase" }}>{group.group}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {group.items.map((it) => {
              const isActive = activeId === it.id;
              return (
                <a key={it.id} href={`#${it.id}`} style={{
                  fontSize: 13, color: isActive ? "var(--ink)" : "var(--ink-2)",
                  textDecoration: "none", padding: "4px 8px",
                  borderLeft: isActive ? "2px solid var(--pick)" : "2px solid transparent",
                  marginLeft: -10, background: isActive ? "var(--pick-soft)" : "transparent",
                  fontWeight: isActive ? 500 : 400,
                }}>{it.label}</a>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}

function TOC({ headings, activeId }) {
  return (
    <aside className="docs-toc">
      <div className="mono" style={{ fontSize: 10.5, color: "var(--muted-2)", letterSpacing: 0.5, padding: "4px 0 12px" }}>ON THIS PAGE</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4, borderLeft: "1px solid var(--line)" }}>
        {headings.map((h) => {
          const isActive = activeId === h.id;
          return (
            <a key={h.id} href={`#${h.id}`} style={{
              fontSize: 12.5, color: isActive ? "var(--ink)" : "var(--muted)",
              textDecoration: "none",
              padding: h.level === 2 ? "3px 0 3px 20px" : "4px 0 4px 12px",
              borderLeft: isActive ? "2px solid var(--pick)" : "2px solid transparent",
              marginLeft: -1, fontWeight: isActive ? 500 : 400,
            }}>{h.label}</a>
          );
        })}
      </div>
    </aside>
  );
}

function Callout({ kind = "NOTE", children }) {
  const color = kind === "NOTE" ? "var(--pick)" : kind === "WARN" ? "var(--accent-warn)" : "var(--muted)";
  return (
    <div className="callout">
      <span style={{ background: color, display: "inline-block" }} />
      <div>
        <span className="mono" style={{ fontSize: 10.5, color, letterSpacing: 0.4 }}>{kind}</span>
        <div style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55, marginTop: 4 }}>{children}</div>
      </div>
    </div>
  );
}

function Breadcrumbs({ current }) {
  return (
    <div className="mono" style={{ fontSize: 11, color: "var(--muted-2)", letterSpacing: 0.4, marginBottom: 20 }}>
      <a href="index.html" style={{ color: "var(--muted-2)", textDecoration: "none" }}>HOME</a>
      <span style={{ margin: "0 8px" }}>/</span>
      <a href="/docs" style={{ color: "var(--muted-2)", textDecoration: "none" }}>DOCUMENTATION</a>
      <span style={{ margin: "0 8px" }}>/</span>
      <span style={{ color: "var(--ink-2)" }}>{current}</span>
    </div>
  );
}

function Content() {
  return (
    <div className="doc">
      <Breadcrumbs current="Introduction" />
      <h1>Draftiq Documentation</h1>
      <p className="lead">Everything you need to install, configure, and get the most out of Draftiq during champion select. These docs track the latest stable release, v0.1.0.</p>

      <h2 id="introduction">Introduction</h2>
      <h3 id="what-is-draftiq">What is Draftiq?</h3>
      <p>Draftiq is a free desktop overlay that tracks picks, bans, and phase timing in real time during League of Legends champion select. It sits on top of the client window so you can see the state of the draft without tabbing through crowded panels.</p>
      <h3 id="who-is-it-for">Who is it for?</h3>
      <p>Players, coaches, and analysts who spend the 60 seconds before loading screen planning counter-picks, tracking ban phases, or calling out comp identity.</p>

      <h2 id="installation">Installation</h2>
      <h3 id="macos-install">macOS</h3>
      <p>Download the latest <code>.dmg</code> from the releases page, drag Draftiq into your Applications folder, and launch it.</p>
      <pre>{`# Or install via the terminal
curl -L -o ~/Downloads/draftiq-0.1.0.dmg \\
  https://github.com/abrandonwang/draft-overlay/releases/latest/download/draftiq-0.1.0.dmg
hdiutil attach ~/Downloads/draftiq.dmg
cp -R /Volumes/Draftiq/Draftiq.app /Applications/`}</pre>
      <Callout kind="NOTE">Draftiq is signed and notarized. If Gatekeeper complains, right-click the app and choose <strong>Open</strong> the first time.</Callout>

      <h3 id="windows-install">Windows</h3>
      <p>Windows support is coming in v0.2. In the meantime, follow <a className="link" href="https://github.com/abrandonwang/draft-overlay/releases">the releases page</a> for progress.</p>

      <h3 id="verifying">Verifying the build</h3>
      <p>Every release ships a SHA256 checksum alongside the binary. Verify before running:</p>
      <pre>{`shasum -a 256 ~/Downloads/draftiq.dmg
# Expected: 9f4e...c21a`}</pre>

      <h2 id="first-launch">First launch</h2>
      <h3 id="permissions">Granting permissions</h3>
      <p>On macOS, Draftiq needs <strong>Screen Recording</strong> permission to detect the League client. Grant it in <code>System Settings → Privacy & Security → Screen Recording</code>, then relaunch the app.</p>
      <h3 id="starting-overlay">Starting the overlay</h3>
      <p>Queue into any matchmade or custom game. When champion select begins, the overlay fades in over your client. You can drag it anywhere on screen; position is remembered across sessions.</p>

      <h2 id="system-requirements">System requirements</h2>
      <ul>
        <li>macOS 12 Monterey or later (Intel or Apple Silicon)</li>
        <li>1 GB of free RAM while running</li>
        <li>~5 MB of disk space</li>
        <li>An active League of Legends installation</li>
      </ul>

      <h2 id="overlay">The overlay window</h2>
      <h3 id="anatomy">Anatomy of a draft</h3>
      <p>The overlay is split into a titlebar, a phase strip with countdown, a top-ban row, and two columns of picks: blue side on the left, red side on the right. The currently-picking slot glows with a soft accent.</p>
      <h3 id="positioning">Positioning and opacity</h3>
      <p>Drag the titlebar to move. Use the opacity slider in preferences (25–100%) to tune how much it blends with the client.</p>
      <h3 id="click-through">Click-through mode</h3>
      <p>Toggle click-through with <kbd>⌥</kbd> <kbd>⇧</kbd> <kbd>C</kbd>. When enabled, clicks pass through the overlay to the client below.</p>

      <h2 id="phase-detection">Phase detection</h2>
      <p>Draftiq reads the LCU events API to detect the current phase — ban, pick, or final lock-in. The timer strip highlights the active step and turns red in the final 10 seconds.</p>
      <Callout kind="NOTE">Phase detection is 100% local. No data leaves your machine.</Callout>

      <h2 id="keyboard-shortcuts">Keyboard shortcuts</h2>
      <ul>
        <li><kbd>⌥</kbd> <kbd>⇧</kbd> <kbd>D</kbd> — Show / hide the overlay</li>
        <li><kbd>⌥</kbd> <kbd>⇧</kbd> <kbd>C</kbd> — Toggle click-through</li>
        <li><kbd>⌥</kbd> <kbd>⇧</kbd> <kbd>=</kbd> / <kbd>-</kbd> — Opacity up / down</li>
        <li><kbd>⌥</kbd> <kbd>⇧</kbd> <kbd>,</kbd> — Open preferences</li>
      </ul>

      <h2 id="preferences">Preferences</h2>
      <p>Open the menu-bar icon and choose <strong>Preferences…</strong> to change opacity, click-through default, and startup behavior.</p>

      <h2 id="client-integration">Client integration</h2>
      <p>Draftiq talks to the League client over the local LCU endpoint (<code>https://127.0.0.1:2999</code>). It subscribes to <code>/lol-champ-select/v1/session</code> and reacts to state changes. It never sends requests to Riot's servers.</p>

      <h2 id="ai-suggestions">AI suggestions (beta)</h2>
      <p>Opt into v0.2 previews to see counter-pick and ban recommendations based on your mastery and the current meta. Suggestions run locally on your machine using a small bundled model — no network calls required.</p>
      <Callout kind="WARN">AI suggestions are early and opinionated. Treat them as one input among many, not as oracle advice.</Callout>

      <h2 id="cli-flags">Command-line flags</h2>
      <pre>{`open -a Draftiq --args \\
  --opacity=0.85 \\
  --click-through=true \\
  --log-level=debug`}</pre>

      <h2 id="troubleshooting">Troubleshooting</h2>
      <p><strong>The overlay won't appear.</strong> Confirm Screen Recording is granted and that the client is in a champ-select session. Try <kbd>⌥</kbd> <kbd>⇧</kbd> <kbd>D</kbd> to toggle visibility.</p>
      <p><strong>Picks are missing.</strong> Restart the client after a patch — the LCU sometimes changes event names until the client refreshes.</p>

      <h2 id="faq">FAQ</h2>
      <p><strong>Is Draftiq against the rules?</strong> Draftiq only reads information the client already exposes to you. It does not automate input, read server data, or modify the client.</p>
      <p><strong>Does it cost anything?</strong> No. It is free and open source.</p>

      <h2 id="changelog">Changelog</h2>
      <p>See <a className="link" href="https://github.com/abrandonwang/draft-overlay/releases">GitHub Releases</a> for the full history. Latest: <code>v0.1.0</code>, initial public beta.</p>
    </div>
  );
}

function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0] || "");
  useEffect(() => {
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - 110 <= 0) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return active;
}

function DocsApp() {
  const ids = ALL_HEADINGS.map((h) => h.id);
  const active = useScrollSpy(ids);
  const topLevelIds = new Set(SECTIONS.flatMap((g) => g.items.map((i) => i.id)));
  let activeSide = "introduction";
  if (topLevelIds.has(active)) {
    activeSide = active;
  } else {
    const idx = ids.indexOf(active);
    for (let i = idx; i >= 0; i--) {
      if (topLevelIds.has(ids[i])) { activeSide = ids[i]; break; }
    }
  }
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <DraftiqNav active="docs" />
      <div className="docs-grid">
        <SideNav activeId={activeSide} />
        <main style={{ minWidth: 0 }}><Content /></main>
        <TOC headings={ALL_HEADINGS} activeId={active} />
      </div>
      <DraftiqFooter />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<DocsApp />);
