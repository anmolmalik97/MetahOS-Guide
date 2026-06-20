/**
 * Lumen — Clinical Calm UI
 * -------------------------------------------------------------
 * Behaviour layer for the MetahOS Guide internal (docs) pages.
 *
 * Responsibilities:
 *   1. Tag <body> with `lumen-docs` ONLY on /docs routes, so all Lumen
 *      styling stays scoped to internal pages and never touches the home page.
 *   2. Render a slim reading-progress bar at the top of doc pages.
 *   3. Reveal content sections with a gentle fade/slide as they scroll in
 *      (respects prefers-reduced-motion).
 *
 * This file is a Docusaurus client module and runs only in the browser.
 */

const isBrowser = typeof window !== "undefined" && typeof document !== "undefined";

const reducedMotion =
  isBrowser &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let progressBar = null;
let revealObserver = null;
let scrollBound = false;

function isDocsRoute(pathname) {
  return /\/docs(\/|$)/.test(pathname || "");
}

function ensureProgressBar() {
  if (!isBrowser || progressBar) return;
  progressBar = document.createElement("div");
  progressBar.className = "lumen-reading-progress";
  progressBar.setAttribute("aria-hidden", "true");
  document.body.appendChild(progressBar);
}

function updateProgress() {
  if (!progressBar) return;
  const doc = document.documentElement;
  const scrollTop = doc.scrollTop || document.body.scrollTop;
  const height = doc.scrollHeight - doc.clientHeight;
  const pct = height > 0 ? (scrollTop / height) * 100 : 0;
  progressBar.style.width = pct + "%";
}

function bindScroll() {
  if (scrollBound || !isBrowser) return;
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress, { passive: true });
  scrollBound = true;
}

function setupReveal() {
  if (!isBrowser || reducedMotion) return;

  // Reset any previous observer between route changes.
  if (revealObserver) {
    revealObserver.disconnect();
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("lumen-in");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
  );

  const root = document.querySelector(".theme-doc-markdown") || document.querySelector("main");
  if (!root) return;

  const selectors = "h2, h3, p, ul, ol, table, pre, blockquote, .admonition, .card, img, .theme-doc-footer";
  const nodes = root.querySelectorAll(selectors);
  let i = 0;
  nodes.forEach((node) => {
    // Stagger the first handful for a polished cascade, then let scroll drive the rest.
    node.classList.add("lumen-reveal");
    if (i < 10) {
      node.style.transitionDelay = Math.min(i * 45, 360) + "ms";
    }
    revealObserver.observe(node);
    i++;
  });

  // Safety net: never let content stay hidden. If anything is still un-revealed
  // after a short grace period (observer missed it, tab was backgrounded, etc.),
  // force it visible.
  window.setTimeout(() => {
    document.querySelectorAll(".lumen-reveal:not(.lumen-in)").forEach((n) => {
      n.classList.add("lumen-in");
    });
  }, 1600);
}

/* ---------------------------------------------------------------------------
 * Mermaid workflow diagrams
 * Docusaurus 2.0.0-beta.14 predates native Mermaid support, so we render
 * ```mermaid fenced blocks at runtime: load Mermaid from CDN, convert each
 * block into an SVG themed to Lumen, and re-render on light/dark toggle.
 * If the CDN is unavailable the original code block is left untouched.
 * ------------------------------------------------------------------------- */
let mermaidPromise = null;
let mermaidSeq = 0;
let themeObserver = null;
let iconFontInjected = false;
let mermaidBusy = false;

// Load Font Awesome 4 so Mermaid `fa:fa-xxx` node icons render.
function ensureIconFont() {
  if (!isBrowser || iconFontInjected) return;
  iconFontInjected = true;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
  document.head.appendChild(link);
}

function loadMermaid() {
  if (!mermaidPromise) {
    mermaidPromise = new Promise((resolve, reject) => {
      if (window.__lumenMermaid) return resolve(window.__lumenMermaid);
      const s = document.createElement("script");
      s.type = "module";
      // Injected as text so the webpack bundler never resolves the CDN URL.
      s.textContent =
        "import m from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';" +
        "window.__lumenMermaid = m; window.dispatchEvent(new Event('lumen-mermaid-ready'));";
      window.addEventListener(
        "lumen-mermaid-ready",
        () => resolve(window.__lumenMermaid),
        { once: true }
      );
      s.onerror = () => reject(new Error("mermaid failed to load"));
      document.head.appendChild(s);
      window.setTimeout(() => {
        if (window.__lumenMermaid) resolve(window.__lumenMermaid);
        else reject(new Error("mermaid load timeout"));
      }, 6000);
    });
  }
  return mermaidPromise;
}

function lumenMermaidTheme() {
  const dark = document.documentElement.getAttribute("data-theme") === "dark";
  const base = { fontFamily: "Inter, system-ui, sans-serif", fontSize: "15px" };
  if (dark) {
    return Object.assign(base, {
      background: "transparent",
      primaryColor: "#13212f",
      primaryBorderColor: "#2dd4bf",
      primaryTextColor: "#ecf3f9",
      secondaryColor: "#16283a",
      tertiaryColor: "#0f1d2a",
      lineColor: "#8da0b2",
      clusterBkg: "#0e1b29",
      clusterBorder: "#1d2f3e",
      titleColor: "#5eead4",
      edgeLabelBackground: "#0f1d2a",
    });
  }
  return Object.assign(base, {
    background: "transparent",
    primaryColor: "#eef4f8",
    primaryBorderColor: "#0d9488",
    primaryTextColor: "#18242f",
    secondaryColor: "#e1f0ee",
    tertiaryColor: "#f5f9fc",
    lineColor: "#5e7081",
    clusterBkg: "#f5f9fc",
    clusterBorder: "#e1ebf2",
    titleColor: "#0b7a70",
    edgeLabelBackground: "#ffffff",
  });
}

function readMermaidSource(el) {
  const lines = el.querySelectorAll(".token-line, .codeLine");
  if (lines.length) {
    return Array.from(lines)
      .map((l) => l.textContent)
      .join("\n");
  }
  return el.textContent || "";
}

async function renderMermaid(force) {
  if (!isBrowser || mermaidBusy) return;

  // 1) Convert any not-yet-processed ```mermaid code blocks into containers.
  document
    .querySelectorAll(".language-mermaid")
    .forEach((el) => {
      const src = readMermaidSource(el).trim();
      if (!src) return;
      const host =
        el.closest('[class*="codeBlock"]') ||
        el.closest(".theme-code-block") ||
        el.closest("pre") ||
        el;
      const div = document.createElement("div");
      div.className = "lumen-mermaid";
      div.dataset.src = encodeURIComponent(src);
      try {
        host.replaceWith(div);
      } catch (e) {
        host.style.display = ""; // restore visibility if replacement failed
      }
    });

  // Render unrendered diagrams; on a forced pass (theme toggle) re-render all.
  const all = Array.from(document.querySelectorAll(".lumen-mermaid"));
  const targets = force ? all : all.filter((d) => !d.querySelector("svg"));
  if (!targets.length) return;

  mermaidBusy = true;
  try {
    let mermaid;
    try {
      mermaid = await loadMermaid();
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "loose",
        theme: "base",
        fontFamily: "Inter, system-ui, sans-serif",
        themeVariables: lumenMermaidTheme(),
        flowchart: { curve: "basis", htmlLabels: true, useMaxWidth: true },
        sequence: { useMaxWidth: true },
      });
    } catch (e) {
      return;
    }

    // Critical for correct label widths: Mermaid measures each label before it
    // renders, so the fonts it measures with (Inter for text, FontAwesome for
    // icons) MUST already be loaded — otherwise the measured box is too narrow
    // and the last word/character gets clipped. Preload them explicitly.
    try {
      if (document.fonts) {
        try { await document.fonts.load('1em "FontAwesome"'); } catch (e) {}
        try { await document.fonts.load('1em "Inter"'); } catch (e) {}
        try { await document.fonts.load('600 1em "Inter"'); } catch (e) {}
        if (document.fonts.ready) await document.fonts.ready;
      }
    } catch (e) {
      /* ignore */
    }

    for (const div of targets) {
      const src = decodeURIComponent(div.dataset.src || "");
      if (!src) continue;
      try {
        const out = await mermaid.render("lumen-mmd-" + mermaidSeq++, src);
        div.innerHTML = out.svg;
      } catch (e) {
        div.innerHTML =
          '<pre class="lumen-mermaid-error">' +
          src.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c])) +
          "</pre>";
      }
    }
  } finally {
    mermaidBusy = false;
  }
}

function watchThemeForMermaid() {
  if (!isBrowser || themeObserver) return;
  themeObserver = new MutationObserver((muts) => {
    if (muts.some((m) => m.attributeName === "data-theme")) {
      renderMermaid(true);
    }
  });
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
}

/* ---------------------------------------------------------------------------
 * Diagram hover tooltips
 * Hovering a workflow node shows a Lumen-styled tooltip with the step name and
 * a short, generated explanation — so the diagrams are not just pretty but
 * informative. Bound once via event delegation so it survives re-renders.
 * ------------------------------------------------------------------------- */
let tipEl = null;
let tipBound = false;

const STEP_HINTS = [
  ["book", "The patient or staff schedules this here to start the flow."],
  ["new lead", "A fresh enquiry enters the pipeline."],
  ["submit", "The record is sent into the workflow."],
  ["pending", "Waiting in a queue for the next action."],
  ["assign", "A responsible person or resource is allocated."],
  ["rider", "A field agent who collects or delivers the sample."],
  ["collect", "The sample or item is picked up."],
  ["accession", "The lab logs and barcodes the received sample."],
  ["result entry", "The technician records the measured values."],
  ["approve", "A designated role signs off before it moves forward."],
  ["review", "A role checks the record before deciding."],
  ["reject", "Sent back or stopped — it does not proceed."],
  ["cancel", "The record is voided and the flow ends."],
  ["report", "The output document is produced."],
  ["deliver", "The result is shared with the recipient."],
  ["invoice", "A payable document is raised."],
  ["payment", "Money is collected and reconciled."],
  ["discount", "An amount or percentage is deducted from the bill."],
  ["geofenc", "The location is checked against allowed coordinates."],
  ["punch", "An attendance check-in or check-out is recorded."],
  ["consent", "The patient authorises sharing of their data."],
  ["link", "Records are connected to the patient's health ID."],
  ["escalat", "Breaching the SLA raises this to a higher level."],
  ["notif", "A message is sent to the relevant people."],
  ["reminder", "An automated nudge is dispatched."],
  ["order", "A formal request is placed."],
  ["goods received", "Stock is verified against the order and taken in."],
  ["stock", "Inventory quantities are updated."],
  ["scan", "A scan or image is captured."],
  ["complete", "The flow finishes successfully."],
  ["resolved", "The item is closed out."],
];

function hintFor(label) {
  const l = label.toLowerCase();
  for (const [k, h] of STEP_HINTS) {
    if (l.indexOf(k) !== -1) return h;
  }
  return "";
}

function escapeHtml(s) {
  return s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
}

function bindTooltips() {
  if (tipBound || !isBrowser) return;
  tipBound = true;
  tipEl = document.createElement("div");
  tipEl.className = "lumen-tip";
  tipEl.setAttribute("role", "tooltip");
  document.body.appendChild(tipEl);

  document.addEventListener("mouseover", (e) => {
    const node = e.target.closest && e.target.closest(".lumen-mermaid .node");
    if (!node || !tipEl) return;
    const labelEl = node.querySelector(".nodeLabel, foreignObject, text");
    let label = ((labelEl ? labelEl.textContent : node.textContent) || "").replace(/\s+/g, " ").trim();
    if (!label) return;
    const hint = hintFor(label);
    tipEl.innerHTML =
      "<strong>" + escapeHtml(label) + "</strong>" + (hint ? "<span>" + escapeHtml(hint) + "</span>" : "");
    tipEl.classList.add("is-on");
  });

  document.addEventListener("mousemove", (e) => {
    if (!tipEl || !tipEl.classList.contains("is-on")) return;
    const pad = 16;
    let x = e.clientX + pad;
    let y = e.clientY + pad;
    const w = tipEl.offsetWidth;
    const h = tipEl.offsetHeight;
    if (x + w > window.innerWidth - 8) x = e.clientX - w - pad;
    if (y + h > window.innerHeight - 8) y = e.clientY - h - pad;
    tipEl.style.left = x + "px";
    tipEl.style.top = y + "px";
  });

  document.addEventListener("mouseout", (e) => {
    const node = e.target.closest && e.target.closest(".lumen-mermaid .node");
    if (node && tipEl) tipEl.classList.remove("is-on");
  });
}

/* ---------------------------------------------------------------------------
 * Interactive walkthroughs (```steps fenced blocks)
 * A friendly, one-step-at-a-time card carousel — big icon, plain-English line,
 * progress dots, Back/Next, colour per step. Designed to be effortless and fun.
 * Block format (one step per line):  fa-icon | Title | Plain-English sentence
 * ------------------------------------------------------------------------- */
const STEP_PALETTE = ["teal", "blue", "purple", "pink", "amber", "green"];

function parseSteps(text) {
  return text
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l && l.indexOf("|") !== -1)
    .map((l) => {
      const parts = l.split("|").map((p) => p.trim());
      let icon = "fa-circle-o";
      let title = "";
      let desc = "";
      if (parts.length >= 3) {
        icon = parts[0] || icon;
        title = parts[1];
        desc = parts.slice(2).join(" — ");
      } else if (parts.length === 2) {
        title = parts[0];
        desc = parts[1];
      } else {
        title = parts[0];
      }
      icon = (icon || "fa-circle-o").replace(/[^a-z0-9 -]/gi, "").trim();
      if (icon.indexOf("fa-") !== 0) icon = "fa-" + icon.replace(/^fa\s+/, "");
      return { icon, title, desc };
    });
}

function buildStepsWidget(steps) {
  const root = document.createElement("div");
  root.className = "lumen-steps";
  let idx = 0;

  const dots = document.createElement("div");
  dots.className = "lumen-steps__dots";
  steps.forEach((s, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "lumen-dot";
    b.setAttribute("aria-label", "Go to step " + (i + 1));
    b.addEventListener("click", () => go(i));
    dots.appendChild(b);
  });

  const stage = document.createElement("div");
  stage.className = "lumen-steps__stage";

  const nav = document.createElement("div");
  nav.className = "lumen-steps__nav";
  const prev = document.createElement("button");
  prev.type = "button";
  prev.className = "lumen-btn lumen-prev";
  prev.innerHTML = '<i class="fa fa-arrow-left"></i> Back';
  const count = document.createElement("div");
  count.className = "lumen-steps__count";
  const next = document.createElement("button");
  next.type = "button";
  next.className = "lumen-btn lumen-next";
  prev.addEventListener("click", () => go(idx - 1));
  next.addEventListener("click", () => (idx >= steps.length - 1 ? finish() : go(idx + 1)));
  nav.appendChild(prev);
  nav.appendChild(count);
  nav.appendChild(next);

  root.appendChild(dots);
  root.appendChild(stage);
  root.appendChild(nav);

  function render() {
    const s = steps[idx];
    const color = STEP_PALETTE[idx % STEP_PALETTE.length];
    const card = document.createElement("div");
    card.className = "lumen-step-card c-" + color;
    card.innerHTML =
      '<div class="lumen-step__badge"><span class="lumen-step__badge-face"><i class="fa ' + s.icon + '" aria-hidden="true"></i></span></div>' +
      '<div class="lumen-step__body">' +
      '<div class="lumen-step__meta">Step ' + (idx + 1) + " of " + steps.length + "</div>" +
      '<h4 class="lumen-step__title">' + escapeHtml(s.title) + "</h4>" +
      (s.desc ? '<p class="lumen-step__desc">' + escapeHtml(s.desc) + "</p>" : "") +
      "</div>";
    stage.innerHTML = "";
    stage.appendChild(card);
    requestAnimationFrame(() => card.classList.add("in"));
    Array.from(dots.children).forEach((d, i) => {
      d.classList.toggle("on", i === idx);
      d.classList.toggle("done", i < idx);
    });
    count.textContent = idx + 1 + " / " + steps.length;
    prev.disabled = idx === 0;
    next.innerHTML =
      idx >= steps.length - 1
        ? 'All done <i class="fa fa-check"></i>'
        : 'Next <i class="fa fa-arrow-right"></i>';
  }
  function go(i) {
    if (i < 0 || i >= steps.length) return;
    idx = i;
    render();
  }
  function finish() {
    root.classList.add("celebrate");
    window.setTimeout(() => root.classList.remove("celebrate"), 1100);
  }
  render();
  return root;
}

function renderSteps() {
  if (!isBrowser) return;
  ensureIconFont();
  document.querySelectorAll(".language-steps").forEach((el) => {
    const steps = parseSteps(readMermaidSource(el));
    if (!steps.length) return;
    const host =
      el.closest('[class*="codeBlock"]') ||
      el.closest(".theme-code-block") ||
      el.closest("pre") ||
      el;
    try {
      host.replaceWith(buildStepsWidget(steps));
    } catch (e) {
      host.style.display = ""; // restore visibility if conversion failed
    }
  });
}

/* React hydration can render (or re-render) the doc body AFTER our first
 * conversion pass and restore the raw code block. So we watch the content and
 * re-convert whenever an unconverted ```steps / ```mermaid block appears. This
 * self-heals the race that otherwise showed raw code until a manual refresh. */
let renderTimer = null;
let contentObserver = null;

function scheduleRender() {
  if (!isBrowser) return;
  if (renderTimer) window.clearTimeout(renderTimer);
  renderTimer = window.setTimeout(() => {
    renderSteps();
    renderMermaid();
  }, 120);
}

function watchContent() {
  if (!isBrowser || contentObserver) return;
  contentObserver = new MutationObserver(() => {
    // Cheap guard: only do work when an unconverted block is actually present.
    if (document.querySelector(".language-steps, .language-mermaid")) {
      scheduleRender();
    }
  });
  contentObserver.observe(document.body, { childList: true, subtree: true });
}

function applyForRoute(pathname) {
  if (!isBrowser) return;
  const docs = isDocsRoute(pathname);
  document.body.classList.toggle("lumen-docs", docs);

  if (docs) {
    ensureProgressBar();
    bindScroll();
    bindTooltips();
    watchContent();
    if (progressBar) progressBar.style.opacity = "1";
    // Let the new DOM paint before measuring / observing.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        updateProgress();
        setupReveal();
        ensureIconFont();
        renderSteps();
        renderMermaid();
        watchThemeForMermaid();
      });
    });
  } else if (progressBar) {
    progressBar.style.opacity = "0";
    progressBar.style.width = "0%";
  }
}

export function onRouteDidUpdate({ location }) {
  applyForRoute(location && location.pathname);
}

// Initial page load (direct navigation / refresh). In this Docusaurus version
// onRouteDidUpdate is not guaranteed to fire on the first hydration, and the
// doc content mounts after this module evaluates — so kick applyForRoute a few
// times to catch late hydration. applyForRoute / renderMermaid are idempotent.
if (isBrowser) {
  const kick = () => applyForRoute(window.location.pathname);
  kick();
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", kick, { once: true });
  }
  window.addEventListener("load", kick, { once: true });
  window.setTimeout(kick, 300);
  window.setTimeout(kick, 900);
  window.setTimeout(kick, 1800);
}
