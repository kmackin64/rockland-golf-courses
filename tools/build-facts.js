// Builds course-facts.html: every course's facts as plain HTML, readable
// without JavaScript (for chatbot crawlers and search engines).
// Run after editing js/data.js:  node tools/build-facts.js

const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
global.window = {};
require(path.join(root, "js", "data.js"));

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const DIR_NOTE = " (from golf-directory listings, not confirmed on an official page)";
const value = (fact) => (fact == null ? null : typeof fact === "string" ? fact : fact.v + DIR_NOTE);

function courseSection(c) {
  const fee = c.fees ? `$${c.fees.min} to $${c.fees.max}` : "No public rate found";
  const rows = [
    ["Location", `${c.town}, ${c.state} (${c.county} County)`],
    ["Holes", c.holesLabel],
    ["Par", (value(c.par) || "Not confirmed") + (c.parNote ? `. ${c.parNote}` : "")],
    ["Green fees (visitors without a resident card, county registration or membership)", fee],
    ["Fee details", c.feesNote],
    ["Address", value(c.facts.address) || "Not found in public listings"],
    ["Phone", value(c.facts.phone) || "Not found in public listings"],
    ["Designer", value(c.facts.designer) || "Not found in public listings"],
    ["Year opened", value(c.facts.opened) || "Not found in public listings"],
    ["Yardage", value(c.facts.yardage) || "Not found in public listings"],
  ];
  return `
  <section id="${c.slug}">
    <h2>${esc(c.name)}</h2>
    <p><strong>${esc(c.vibe)}</strong></p>
    <dl>
${rows.map(([k, v]) => `      <dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("\n")}
      <dt>Course website</dt><dd><a href="${esc(c.website)}">${esc(c.website)}</a></dd>
      <dt>Directory page</dt><dd><a href="course.html?c=${esc(c.slug)}">course.html?c=${esc(c.slug)}</a></dd>
    </dl>
${c.writeup.map((p) => `    <p>${esc(p)}</p>`).join("\n")}
  </section>`;
}

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Course Facts · Rockland Area Public Golf</title>
  <meta name="description" content="Facts, green fees and contact details for 14 public golf courses in Rockland County, NY and nearby Bergen County, NJ and Orange County, NY.">
  <link rel="stylesheet" href="css/styles.css">
  <style>
    .facts-page { max-width: 760px; padding-block: 24px 48px; }
    .facts-page section { border-top: 1px solid var(--border); padding-top: 8px; margin-top: 28px; }
    .facts-page dt { font-weight: 600; margin-top: 8px; }
    .facts-page dd { margin: 0; }
  </style>
</head>
<body>
  <main class="wrap facts-page">
    <p class="back"><a href="index.html">← All courses</a></p>
    <h1>Course facts</h1>
    <p>All 14 public golf courses in the Rockland Area Public Golf directory, in Rockland County, NY and nearby Bergen County, NJ and Orange County, NY. Facts were checked against official course, town, county and NY State Parks pages on October 28, 2026. Rates change, so confirm with the course before you go. Where a fact says it was not found, no public figure exists, so none is given.</p>
${window.COURSES.map(courseSection).join("\n")}
  </main>
</body>
</html>
`;

fs.writeFileSync(path.join(root, "course-facts.html"), html);
console.log(`Wrote course-facts.html (${window.COURSES.length} courses)`);
