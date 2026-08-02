(function () {
  "use strict";

  const content = window.SONOPILOT_CONTENT;
  const body = document.body;
  const base = body.dataset.base || ".";
  const page = body.dataset.page || "home";
  const isPlaceholder = (value) =>
    !value || (typeof value === "string" && value.startsWith("{{"));
  const pageUrl = (slug = "") => `${base}/${slug ? `${slug}/` : ""}`;
  const imageUrl = (name) => `${base}/assets/images/${name}`;
  const externalLink = (url, label, className = "text-link") => {
    if (isPlaceholder(url)) return "";
    return `<a class="${className}" href="${url}" target="_blank" rel="noopener noreferrer">${label}<span aria-hidden="true"> ↗</span></a>`;
  };

  const navItems = [
    ["home", "Home", ""],
    ["technology", "Technology", "technology"],
    ["validation", "Validation", "validation"],
    ["research", "Research", "research"],
    ["translation", "Translation", "translation"],
    ["team", "Team", "team"],
  ];

  const nav = navItems
    .map(
      ([key, label, slug]) =>
        `<a href="${pageUrl(slug)}"${key === page ? ' class="active" aria-current="page"' : ""}>${label}</a>`,
    )
    .join("");

  document.querySelector("[data-site-header]").innerHTML = `
    <a class="skip-link" href="#main-content">Skip to content</a>
    <div class="nav-shell">
      <a class="wordmark" href="${pageUrl()}" aria-label="SonoPilot home">
        <span class="wordmark-mark" aria-hidden="true"><i></i><i></i><i></i></span>
        <span>Sono<span>Pilot</span></span>
      </a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation">
        <span class="sr-only">Toggle navigation</span><span></span><span></span><span></span>
      </button>
      <nav id="primary-navigation" class="primary-nav" aria-label="Primary navigation">${nav}</nav>
      <div class="nav-actions">
        <a class="button button-small button-ghost" href="${pageUrl("validation")}#demo">Watch demo</a>
        ${externalLink(content.links.websiteRepository, "GitHub", "button button-small button-bright")}
      </div>
    </div>`;

  document.querySelector("[data-site-footer]").innerHTML = `
    <div class="footer-main">
      <div>
        <a class="wordmark footer-wordmark" href="${pageUrl()}">Sono<span>Pilot</span></a>
        <p>A research prototype advancing vision-language-action intelligence for ultrasound-guided needle intervention.</p>
      </div>
      <nav aria-label="Footer navigation">${nav}</nav>
      <div class="footer-contact">
        <p class="eyebrow">Research contact</p>
        <a href="mailto:${content.site.contactEmail}">${content.site.contactEmail}</a>
        <p>SRIL · The Chinese University of Hong Kong</p>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} SonoPilot</span>
      <span>Research prototype — not a clinically approved product.</span>
    </div>`;

  const menuToggle = document.querySelector(".menu-toggle");
  const primaryNav = document.querySelector(".primary-nav");
  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!open));
    primaryNav.classList.toggle("open", !open);
    body.classList.toggle("menu-open", !open);
  });

  document.querySelectorAll(".primary-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      primaryNav.classList.remove("open");
      body.classList.remove("menu-open");
    });
  });

  const metricsRoot = document.querySelector("[data-metrics]");
  if (metricsRoot) {
    metricsRoot.innerHTML = content.metrics
      .map(
        (metric) => `<article class="metric-card">
          <p class="metric-value">${metric.value}<span>${metric.unit}</span></p>
          <p>${metric.label}</p>
        </article>`,
      )
      .join("");
  }

  const publicationsRoot = document.querySelector("[data-publications]");
  if (publicationsRoot) {
    publicationsRoot.innerHTML = content.publications
      .map(
        (publication) => `<article class="publication-card reveal">
          <div class="publication-year">${publication.year}</div>
          <div>
            <p class="eyebrow">${publication.phase}</p>
            <h3>${publication.name}</h3>
            <p class="publication-title">${publication.title}</p>
            <p class="fine-print">${publication.authors}<br>${publication.venue}</p>
          </div>
          ${externalLink(publication.url, "Read", "icon-link")}
        </article>`,
      )
      .join("");
  }

  const resourcesRoot = document.querySelector("[data-resources]");
  if (resourcesRoot) {
    resourcesRoot.innerHTML = content.resources
      .map(
        (resource, index) => `<article class="resource-card reveal">
          <span class="resource-index">0${index + 1}</span>
          <h3>${resource.name}</h3>
          <p>${resource.description}</p>
          ${externalLink(resource.url, "Open repository", "text-link")}
        </article>`,
      )
      .join("");
  }

  const teamRoot = document.querySelector("[data-team]");
  if (teamRoot) {
    const groups = ["Principal Investigator", "SonoPilot Team", "Clinical Advisory Board"];
    teamRoot.innerHTML = groups
      .map((group) => {
        const cards = content.people
          .filter((person) => person.group === group)
          .map((person) => {
            const hasImage = !isPlaceholder(person.image);
            const initials = person.name
              .split(/[- ]/)
              .filter(Boolean)
              .map((part) => part[0])
              .slice(0, 2)
              .join("");
            return `<article class="person-card reveal">
              <div class="person-portrait ${hasImage ? "" : "portrait-fallback"}">
                ${hasImage ? `<img src="${imageUrl(person.image)}" alt="Portrait of ${person.name}" loading="lazy" width="${person.imageWidth}" height="${person.imageHeight}">` : `<span aria-hidden="true">${initials}</span>`}
              </div>
              <div class="person-copy">
                <h3>${person.name}</h3>
                <p class="person-role">${person.role}</p>
                <p>${person.affiliation}</p>
                ${externalLink(person.profileUrl, "Profile", "text-link")}
              </div>
            </article>`;
          })
          .join("");
        return `<section class="team-group"><div class="team-group-heading"><p class="eyebrow">${group}</p></div><div class="team-grid">${cards}</div></section>`;
      })
      .join("");
  }

  const marketSource = document.querySelector("[data-market-source]");
  if (marketSource && !isPlaceholder(content.links.marketSource)) {
    marketSource.innerHTML = externalLink(
      content.links.marketSource,
      "View cited market report",
      "text-link",
    );
  }

  const copyButtons = document.querySelectorAll("[data-copy-email]");
  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      await navigator.clipboard.writeText(content.site.contactEmail);
      button.textContent = "Email copied";
      window.setTimeout(() => (button.textContent = "Copy email"), 1800);
    });
  });

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
  } else {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("revealed"));
  }
})();
