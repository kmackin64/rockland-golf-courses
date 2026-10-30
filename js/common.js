// Shared helpers for the homepage and the course detail page.

const COUNTY_STATE = { Rockland: "NY", Bergen: "NJ", Orange: "NY" };

function esc(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// A fact is a string (official), { v, dir: true } (directory listing only), or null.
function factValue(fact) {
  if (fact == null) return null;
  return typeof fact === "string" ? fact : fact.v;
}

function isDirectoryFact(fact) {
  return fact != null && typeof fact === "object" && fact.dir === true;
}

function feeRange(course) {
  if (!course.fees) return null;
  const { min, max } = course.fees;
  return min === max ? `$${min}` : `$${min}–$${max}`;
}

function countyLabel(course) {
  return `${course.county} County, ${COUNTY_STATE[course.county]}`;
}

function initials(name) {
  return name
    .replace(/^The /, "")
    .split(/\s+/)
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

// Photo if one has been added; otherwise a clean placeholder.
function photoHTML(course, size) {
  if (course.photo) {
    return `<img class="photo photo--${size}" src="${esc(course.photo)}" alt="${esc(course.name)}" loading="lazy">`;
  }
  return `
    <div class="photo photo--${size} photo--placeholder county-${course.county.toLowerCase()}" role="img" aria-label="Photo placeholder for ${esc(course.name)}">
      <svg class="flag" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 21V3m0 1h11l-2.5 4L17 12H6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="ph-initials">${esc(initials(course.name))}</span>
      <span class="ph-note">Photo coming soon</span>
    </div>`;
}

function directionsURL(course) {
  const addr = factValue(course.facts.address);
  const query = course.directionsQuery || (addr ? addr : `${course.name}, ${course.town}, ${course.state}`);
  return "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(query);
}
