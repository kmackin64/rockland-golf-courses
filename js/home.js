// Homepage: render course cards with county filter, text search and sorting.

(function () {
  const COUNTY_ORDER = { Rockland: 0, Bergen: 1, Orange: 2 };

  const grid = document.getElementById("grid");
  const searchInput = document.getElementById("search");
  const sortSelect = document.getElementById("sort");
  const chips = document.querySelectorAll("#county-chips .chip");
  const countEl = document.getElementById("result-count");
  const emptyEl = document.getElementById("empty");

  const state = { county: "All", query: "", sort: "default" };

  function searchText(c) {
    return [
      c.name, c.town, c.state, c.county, c.vibe,
      factValue(c.facts.designer), factValue(c.facts.address)
    ].filter(Boolean).join(" ").toLowerCase();
  }

  // Courses without a public rate always sort after those with one.
  function byPrice(dir) {
    return (a, b) => {
      if (!a.fees && !b.fees) return a.name.localeCompare(b.name);
      if (!a.fees) return 1;
      if (!b.fees) return -1;
      const diff = dir === "asc" ? a.fees.min - b.fees.min : b.fees.max - a.fees.max;
      return diff || a.name.localeCompare(b.name);
    };
  }

  const sorters = {
    default: (a, b) => COUNTY_ORDER[a.county] - COUNTY_ORDER[b.county] || a.name.localeCompare(b.name),
    name: (a, b) => a.name.replace(/^The /, "").localeCompare(b.name.replace(/^The /, "")),
    "price-asc": byPrice("asc"),
    "price-desc": byPrice("desc"),
    "holes-desc": (a, b) => b.holes - a.holes || a.name.localeCompare(b.name),
    "holes-asc": (a, b) => a.holes - b.holes || a.name.localeCompare(b.name)
  };

  function cardHTML(c) {
    const fee = feeRange(c);
    const par = factValue(c.par);
    return `
      <article class="card">
        <a class="card-link" href="course.html?c=${encodeURIComponent(c.slug)}">
          ${photoHTML(c, "card")}
          <div class="card-body">
            <p class="card-county county-tag county-${c.county.toLowerCase()}">${esc(countyLabel(c))}</p>
            <h2 class="card-title">${esc(c.name)}</h2>
            <p class="card-town">${esc(c.town)}, ${esc(c.state)}</p>
            <dl class="card-stats">
              <div><dt>Holes</dt><dd>${esc(c.holesLabel)}</dd></div>
              <div><dt>Par</dt><dd>${par ? esc(par) : '<span class="muted">Not confirmed</span>'}</dd></div>
              <div class="card-fee"><dt>Green fee</dt><dd>${fee ? esc(fee) : '<span class="muted">No public rate found</span>'}</dd></div>
            </dl>
            <p class="card-vibe">${esc(c.vibe)}</p>
          </div>
        </a>
      </article>`;
  }

  function render() {
    const q = state.query.trim().toLowerCase();
    const list = window.COURSES
      .filter((c) => state.county === "All" || c.county === state.county)
      .filter((c) => !q || q.split(/\s+/).every((term) => searchText(c).includes(term)))
      .sort(sorters[state.sort]);

    grid.innerHTML = list.map(cardHTML).join("");
    emptyEl.hidden = list.length > 0;
    countEl.textContent = `Showing ${list.length} of ${window.COURSES.length} courses`;
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.toggle("is-active", c === chip));
      state.county = chip.dataset.county;
      render();
    });
  });

  searchInput.addEventListener("input", () => {
    state.query = searchInput.value;
    render();
  });

  sortSelect.addEventListener("change", () => {
    state.sort = sortSelect.value;
    render();
  });

  render();
})();
