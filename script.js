"use strict";

const DATA_URL = "./data/internships.json";
const ACCENTS = [
  { accent: "#d8f36a", mark: "#edf4d2" },
  { accent: "#f28c72", mark: "#fbe6df" },
  { accent: "#b9a1d1", mark: "#eee7f4" },
  { accent: "#83b8aa", mark: "#e2f0eb" },
  { accent: "#e6bc68", mark: "#f7efd9" }
];

const elements = {
  list: document.querySelector("#internship-list"),
  search: document.querySelector("#search-input"),
  domain: document.querySelector("#domain-filter"),
  form: document.querySelector("#filter-form"),
  count: document.querySelector("#result-count"),
  empty: document.querySelector("#empty-state"),
  error: document.querySelector("#error-state"),
  retry: document.querySelector("#retry-button"),
  emptyReset: document.querySelector("#empty-reset"),
  quickFilters: document.querySelector("#quick-filters")
};

let internships = [];

async function loadInternships() {
  elements.error.hidden = true;
  elements.empty.hidden = true;
  elements.list.innerHTML = '<p class="loading-state">Finding opportunities<span class="loading-dots">...</span></p>';
  elements.count.textContent = "Loading opportunities…";

  try {
    const response = await fetch(DATA_URL);
    if (!response.ok) throw new Error(`Dataset request failed (${response.status})`);

    const data = await response.json();
    if (!data || !Array.isArray(data.internships)) {
      throw new Error("The dataset format is not valid.");
    }

    internships = data.internships.filter(item => item && typeof item === "object");
    populateFilters();
    renderCards();
  } catch (error) {
    console.error("Could not load internship data:", error);
    elements.list.replaceChildren();
    elements.count.textContent = "Opportunities unavailable";
    elements.error.hidden = false;
  }
}

function populateFilters() {
  const domains = [...new Set(internships.map(item => item.domain).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b));

  elements.domain.replaceChildren(new Option("All domains", "all"));
  elements.quickFilters.replaceChildren();

  addQuickFilter("All roles", "all");
  domains.forEach(domain => {
    elements.domain.add(new Option(domain, domain));
    addQuickFilter(domain, domain);
  });
}

function addQuickFilter(label, domain) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "quick-chip";
  button.dataset.domain = domain;
  button.textContent = label;
  button.setAttribute("aria-pressed", "false");
  button.addEventListener("click", () => {
    elements.domain.value = domain;
    syncQuickFilters();
    renderCards();
  });
  elements.quickFilters.append(button);
}

function syncQuickFilters() {
  elements.quickFilters.querySelectorAll(".quick-chip").forEach(button => {
    const active = button.dataset.domain === elements.domain.value;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function renderCards() {
  const query = elements.search.value.trim().toLocaleLowerCase();
  const selectedDomain = elements.domain.value;

  const matches = internships.filter(item => {
    const searchable = [
      item.title, item.company, item.domain, item.mode, item.location,
      ...(Array.isArray(item.skills) ? item.skills : [])
    ].filter(Boolean).join(" ").toLocaleLowerCase();

    return searchable.includes(query) &&
      (selectedDomain === "all" || item.domain === selectedDomain);
  });

  elements.list.replaceChildren();
  elements.count.textContent = `${matches.length} ${matches.length === 1 ? "opportunity" : "opportunities"} found`;
  elements.empty.hidden = matches.length !== 0;

  const cards = matches.map((item, index) => createCard(item, index));
  elements.list.append(...cards);
  syncQuickFilters();
}

function createCard(item, index) {
  const card = document.createElement("article");
  card.className = "internship-card";
  const palette = ACCENTS[index % ACCENTS.length];
  card.style.setProperty("--card-accent", palette.accent);
  card.style.setProperty("--mark-bg", palette.mark);
  card.style.animationDelay = `${Math.min(index * 55, 220)}ms`;

  const top = document.createElement("div");
  top.className = "card-top";

  const mark = document.createElement("span");
  mark.className = "company-mark";
  mark.setAttribute("aria-hidden", "true");
  mark.textContent = (item.company || item.title || "I").trim().charAt(0).toUpperCase();

  const openings = document.createElement("span");
  openings.className = "openings";
  const openingCount = Number(item.openings);
  openings.textContent = `${Number.isFinite(openingCount) ? openingCount : 0} opening${openingCount === 1 ? "" : "s"}`;
  top.append(mark, openings);

  const title = document.createElement("h3");
  title.textContent = item.title || "Internship opportunity";

  const company = document.createElement("p");
  company.className = "company-name";
  company.textContent = item.company || "Company not specified";

  const meta = document.createElement("div");
  meta.className = "card-meta";
  meta.append(
    createMeta(item.mode || "Mode not specified"),
    createMeta(item.location || "Location not specified")
  );

  const bottom = document.createElement("div");
  bottom.className = "card-bottom";
  const skills = document.createElement("div");
  skills.className = "skills";
  skills.setAttribute("aria-label", "Skills");
  (Array.isArray(item.skills) ? item.skills : []).slice(0, 4).forEach(skillName => {
    const skill = document.createElement("span");
    skill.className = "skill";
    skill.textContent = skillName;
    skills.append(skill);
  });

  const arrow = document.createElement("span");
  arrow.className = "card-arrow";
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";
  bottom.append(skills, arrow);

  card.append(top, title, company, meta, bottom);
  return card;
}

function createMeta(value) {
  const item = document.createElement("span");
  item.className = "meta-item";
  const dot = document.createElement("span");
  dot.className = "meta-dot";
  dot.setAttribute("aria-hidden", "true");
  const text = document.createElement("span");
  text.textContent = value;
  item.append(dot, text);
  return item;
}

elements.search.addEventListener("input", renderCards);
elements.domain.addEventListener("change", renderCards);
elements.form.addEventListener("reset", () => {
  // Wait for the browser to restore the form's default values.
  window.requestAnimationFrame(() => {
    syncQuickFilters();
    renderCards();
  });
});
elements.retry.addEventListener("click", loadInternships);
elements.emptyReset.addEventListener("click", () => {
  elements.form.reset();
  elements.search.focus();
});

// Keyboard shortcut: "/" moves focus to search when not typing in a field.
document.addEventListener("keydown", event => {
  const target = event.target;
  const isTyping = target instanceof HTMLElement &&
    (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));

  if (event.key === "/" && !isTyping && !event.ctrlKey && !event.metaKey && !event.altKey) {
    event.preventDefault();
    elements.search.focus();
  }
});

loadInternships();
