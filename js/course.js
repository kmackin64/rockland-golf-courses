// Course detail page: course.html?c=<slug>

(function () {
  const root = document.getElementById("course");
  const courses = window.COURSES;
  const slug = new URLSearchParams(location.search).get("c");
  const index = courses.findIndex((c) => c.slug === slug);

  if (index === -1) {
    root.innerHTML = `
      <p class="back"><a href="index.html">← All courses</a></p>
      <h1>Course not found</h1>
      <p>That course isn't in the directory. <a href="index.html">Browse all courses</a>.</p>`;
    return;
  }

  const c = courses[index];
  const prev = courses[(index - 1 + courses.length) % courses.length];
  const next = courses[(index + 1) % courses.length];
  document.title = `${c.name} · Rockland Area Public Golf`;

  const NOT_FOUND = '<span class="muted">Not found in public listings</span>';

  function factRow(label, fact, note) {
    const value = factValue(fact);
    let html = value ? esc(value) : note ? '<span class="muted">Not confirmed</span>' : NOT_FOUND;
    if (isDirectoryFact(fact)) {
      html += ' <abbr class="dir-mark" title="From golf-directory listings; not confirmed on an official course, town, county or state page">†</abbr>';
    }
    if (note) html += `<span class="fact-note">${esc(note)}</span>`;
    return `<div class="fact"><dt>${label}</dt><dd>${html}</dd></div>`;
  }

  const fee = feeRange(c);
  const hasDirFacts = [c.par, ...Object.values(c.facts)].some(isDirectoryFact);
  const phone = factValue(c.facts.phone);
  const telDigits = phone && !/·/.test(phone) ? phone.replace(/[^\d]/g, "") : null;

  root.innerHTML = `
    <p class="back"><a href="index.html">← All courses</a></p>

    <div class="detail-head">
      <p class="county-tag county-${c.county.toLowerCase()}">${esc(countyLabel(c))}</p>
      <h1>${esc(c.name)}</h1>
      <p class="detail-town">${esc(c.town)}, ${esc(c.state)}</p>
    </div>

    ${photoHTML(c, "hero")}
    ${c.photoCredit ? `<p class="photo-credit">Photo: ${esc(c.photoCredit)}, used with permission</p>` : ""}

    <div class="detail-layout">
      <article class="writeup">
        <p class="vibe-lead">${esc(c.vibe)}</p>
        ${c.writeup.map((p) => `<p>${esc(p)}</p>`).join("")}

        <h2>Green fees</h2>
        <p class="fee-big">${fee ? esc(fee) : '<span class="muted">No public rate found</span>'}</p>
        <p class="fee-note">${esc(c.feesNote)}</p>

        <h2>Sources</h2>
        <ul class="sources">
          ${c.sources.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`).join("")}
        </ul>
      </article>

      <aside class="facts-box" aria-label="Course facts">
        <h2>Course facts</h2>
        <dl>
          ${factRow("Address", c.facts.address)}
          <div class="fact"><dt>Phone</dt><dd>${phone
            ? (telDigits ? `<a href="tel:${telDigits}">${esc(phone)}</a>` : esc(phone)) + (isDirectoryFact(c.facts.phone) ? ' <abbr class="dir-mark" title="From golf-directory listings; not confirmed on an official page">†</abbr>' : "")
            : NOT_FOUND}</dd></div>
          ${factRow("Holes", c.holesLabel)}
          ${factRow("Par", c.par, c.parNote)}
          ${factRow("Designer", c.facts.designer)}
          ${factRow("Year opened", c.facts.opened)}
          ${factRow("Yardage", c.facts.yardage)}
          <div class="fact"><dt>Green fees</dt><dd>${fee ? esc(fee) : '<span class="muted">No public rate found</span>'}</dd></div>
        </dl>
        <div class="facts-actions">
          <a class="btn btn--primary" href="${directionsURL(c)}" target="_blank" rel="noopener">Directions</a>
          <a class="btn" href="${esc(c.website)}" target="_blank" rel="noopener">Course website</a>
        </div>
        ${hasDirFacts ? '<p class="dir-legend">† From golf-directory listings only. Not confirmed on an official page.</p>' : ""}
      </aside>
    </div>

    <nav class="pager" aria-label="Previous and next course">
      <a class="pager-link" href="course.html?c=${encodeURIComponent(prev.slug)}">
        <span class="pager-dir">← Previous</span>
        <span class="pager-name">${esc(prev.name)}</span>
      </a>
      <a class="pager-link pager-link--next" href="course.html?c=${encodeURIComponent(next.slug)}">
        <span class="pager-dir">Next →</span>
        <span class="pager-name">${esc(next.name)}</span>
      </a>
    </nav>`;
})();
