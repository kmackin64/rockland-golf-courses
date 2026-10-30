# Rockland Area Public Golf

A static directory of 14 public golf courses in Rockland County, NY, and nearby in Bergen County, NJ and Orange County, NY.

## Open it
Double-click `index.html`, or serve the folder:

    python3 -m http.server 8000   # then visit http://localhost:8000

## Files
- `index.html`: homepage with county filter, search and sort
- `course.html?c=<slug>`: detail page for each course
- `js/data.js`: all course facts. Edit this file to update rates or add photos.
- `css/styles.css`: styles
- `images/`: put course photos here (see images/README.txt)

## Data rules
- Plain-string facts come from official sources (course, town, county, NY State Parks).
- `{ v: "...", dir: true }` facts were only found in golf-directory listings. They're marked † on the site.
- `null` means no public figure was found, and the site says so. Don't fill these in with guesses.
