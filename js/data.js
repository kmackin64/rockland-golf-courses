/*
  Course data for the directory.

  Conventions
  - A fact written as a plain string comes from an official source
    (the course's own site, the town/county, or NY State Parks).
  - A fact written as { v: "...", dir: true } was only found in golf-directory
    listings (GolfPass, GolfNow, Golf Digest, etc.), not on an official page.
  - null means no public figure was found. Never fill these in with guesses.
  - fees.min / fees.max: the lowest and highest published rate a visitor with
    no resident card, county registration or membership pays for a round
    (twilight or 9-hole rates up to weekend peak). Used for the card range and
    sorting. fees = null means no public rate was found.
  - photo: local path to the course photo (null shows a placeholder).
    photoCredit: who the photo comes from. Course photos are used with each
    course's permission (October 2026).

  Facts last checked against official pages: October 28, 2026.
*/

const BERGEN_FEES_NOTE =
  "Bergen County 2026 rates, 18 holes, for golfers not registered with the county: $74 weekday / $90 weekend (twilight $64 / $72). " +
  "Registered golfers pay less: Bergen residents $37 / $45, non-county residents $55 / $60. " +
  "Registration is $60 a year for adult county residents and $100 for non-county golfers. Gas cart for 18 holes is $40. " +
  "A 2.65% fee is added to card payments.";

const BERGEN_RATES_SOURCE = { label: "Bergen County Golf: rates", url: "https://golfbergencounty.com/rates" };
const BERGEN_COURSES_SOURCE = { label: "Bergen County Golf: our courses", url: "https://golfbergencounty.com/our-courses" };
const BERGEN_TOURISM_SOURCE = { label: "Bergen County: golf courses", url: "https://bergencountynj.gov/tourism/outdoor-activities/bergen-county-golf-courses/" };

window.COURSES = [
  /* ---------------- Rockland County, NY ---------------- */
  {
    slug: "blue-hill",
    name: "Blue Hill Golf Course",
    town: "Pearl River",
    state: "NY",
    county: "Rockland",
    holes: 27,
    holesLabel: "27 (three nines)",
    par: "72 (each nine is par 36)",
    fees: { min: 40, max: 74 },
    feesNote:
      "Blue Hill's 2026 non-member rates, walking: $60 weekdays / $74 weekends, twilight $40 / $44. " +
      "Riding adds $24: $84 / $98, twilight $54 / $58. Orangetown residents pay $42 / $50 to walk, and non-resident associate cards bring it to $52 / $60.",
    vibe: "Rockland's oldest course: three nines overlooking Lake Tappan, with a stone-castle clubhouse.",
    writeup: [
      "Blue Hill calls itself Rockland County's oldest course. New York businessman Montgomery Maze built the first holes around 1906 on his Pearl River estate, and the full 18 was finished by 1920. His son later formed the private Blue Hill Country Club, chartered in 1924.",
      "The Town of Orangetown bought the course in 1967 and made it public. When the Hackensack River was dammed to create Lake Tappan, holes 11 through 15 were flooded, and architect Frank Duane reworked the layout. Stephen Kay added a third nine in 1995.",
      "Today the three nines, Lakeside, Pines and Woodlands, are all par 36 and can be paired into three different 18-hole rounds. The stone mansion Maze built around 1901, modeled on an Irish castle, now houses O'Grady's Castle restaurant."
    ],
    facts: {
      address: "285 Blue Hill Road, Pearl River, NY 10965",
      phone: "845-735-2094",
      designer: "First holes by Montgomery Maze; reworked by Frank Duane; third nine by Stephen Kay (1995)",
      opened: "First holes around 1906; full 18 by 1920; public since 1967",
      yardage: "6,270–6,396 for 18 from the black tees (Lakeside 3,219 · Pines 3,177 · Woodlands 3,093)"
    },
    website: "https://www.bluehillgolfcourse.com",
    photo: "images/blue-hill.jpg",
    photoCredit: "J. Krajicek / Blue Hill Golf Course",
    sources: [
      { label: "Blue Hill: daily rates (official)", url: "https://www.bluehillgolfcourse.com/daily-rates" },
      { label: "Blue Hill: about & history (official)", url: "https://www.bluehillgolfcourse.com/about-blue-hill-golf-course" },
      { label: "Blue Hill: scorecard (official)", url: "https://www.bluehillgolfcourse.com/scorecard" }
    ]
  },
  {
    slug: "spook-rock",
    name: "Spook Rock Golf Course",
    town: "Suffern",
    state: "NY",
    county: "Rockland",
    holes: 18,
    holesLabel: "18",
    par: "72",
    fees: { min: 49, max: 86 },
    feesNote:
      "Spook Rock's non-resident rates, 18 holes walking: $76 weekdays / $86 weekends (peak, open to 4 PM), $53 twilight (from 3 PM), $49 super twilight (from 5 PM). " +
      "Carts are $24 at peak and $15 at twilight, plus a $2 per player reservation fee. " +
      "Ramapo residents pay $41 / $45, and non-residents with a yearly associate ID card pay $49 / $55.",
    vibe: "Ramapo's championship-length town course, on the old site of a historic Boy Scout camp.",
    writeup: [
      "Spook Rock is the Town of Ramapo's municipal course, in the Village of Montebello with a Suffern mailing address. It's a full-length, par-72 layout that has long been one of Rockland's best-known public tracks.",
      "Frank Duane designed and built it on 150 acres. The front nine opened in 1969 and the full 18 in 1970, on the former site of Kane's Open, which the course describes as the first Boy Scout camp in the United States. The name comes from Spook Rock Road, which takes its name from Native American lore.",
      "Pricing is tiered. Ramapo residents and non-resident associates can buy yearly ID cards for lower green fees, and senior and junior rates are for residents only. Indigo Sports, a Troon company, manages the course for the town."
    ],
    facts: {
      address: "233 Spook Rock Road, Suffern, NY 10901",
      phone: "845-357-6466",
      designer: "Frank Duane",
      opened: "1969 (front nine), 1970 (full 18)",
      yardage: { v: "About 6,800–6,894 from the back tees (sources vary)", dir: true }
    },
    website: "https://www.spookrockgolfcourse.com",
    photo: "images/spook-rock.jpg",
    photoCredit: "Spook Rock Golf Course",
    sources: [
      { label: "Spook Rock: daily rates (official)", url: "https://www.spookrockgolfcourse.com/daily-rates" },
      { label: "Spook Rock Golf Course (official)", url: "https://www.spookrockgolfcourse.com/" },
      { label: "GolfNow: Spook Rock details", url: "https://www.golfnow.com/courses/1034580-spook-rock-golf-course-details" }
    ]
  },
  {
    slug: "patriot-hills",
    name: "Patriot Hills Golf Club",
    town: "Stony Point",
    state: "NY",
    county: "Rockland",
    holes: 18,
    holesLabel: "18",
    par: "71",
    fees: { min: 55, max: 135 },
    feesNote:
      "Non-resident rates from the club's rates page: $100 weekdays / $135 weekends & holidays before 1 PM; $80 / $105 from 1 to 3:50 PM; $55 after 4 PM. " +
      "Stony Point residents pay $40–$60. Tee times open 10 days ahead, and non-residents must prepay.",
    vibe: "Hilly, newer layout with big elevation changes and Hudson Valley views.",
    writeup: [
      "Patriot Hills is Stony Point's town course and one of the newest in the area. It was developed for the Town of Stony Point and opened in 2003 on a design by Rick Jacobson.",
      "It's a dramatic piece of ground. Elevated tees look out over the Hudson Valley, with some sitting more than 200 feet above the fairways below, according to GolfPass, which also lists it as cart-only. From the tips it plays 6,502 yards to a par of 71.",
      "Hole names tell local history. No. 13 is named for Florus Crum, an early settler and landowner, and No. 16 for the Secor family farmhouse. The club also runs a driving range that's open daily."
    ],
    facts: {
      address: "19 Club House Lane, Stony Point, NY 10980",
      phone: "845-947-7085",
      designer: { v: "Rick Jacobson (Jacobson Golf Course Design)", dir: true },
      opened: { v: "2003", dir: true },
      yardage: "6,502 from the tips"
    },
    website: "https://patriothillsgolfclub.com",
    photo: "images/patriot-hills.jpg",
    photoCredit: "Patriot Hills Golf Club",
    sources: [
      { label: "Patriot Hills: rates (official)", url: "https://patriothillsgolfclub.com/rates/" },
      { label: "Patriot Hills: course tour (official)", url: "https://patriothillsgolfclub.com/course-tour/" },
      { label: "GolfNow: Patriot Hills details", url: "https://www.golfnow.com/courses/1505418-patriot-hills-golf-club-details" }
    ]
  },
  {
    slug: "rotella",
    name: "Philip J. Rotella Memorial Golf Course",
    town: "Thiells",
    state: "NY",
    county: "Rockland",
    holes: 18,
    holesLabel: "18",
    par: "72",
    fees: { min: 55, max: 78 },
    feesNote:
      "Town of Haverstraw 2026 rates for golfers without a town card, green fee only (cart extra): $64 weekdays, $78 weekends & holidays, $55 twilight. " +
      "The course's own rates page lists higher non-resident prices ($69 twilight, $90 weekday, $104 weekend). That page calls them both riding and walking rates, so confirm when booking. An 18-hole cart is $46. Town residents with ID cards pay less.",
    vibe: "Hal Purdy design in the hills above Haverstraw. Well-kept and good value for a town course.",
    writeup: [
      "The Town of Haverstraw built this course in the 1980s on land it bought from the former Letchworth property, which had been set aside for parks and recreation. It first opened as the Minisceongo Golf Course and was later renamed for Town Supervisor Philip J. Rotella.",
      "Hal Purdy designed the original layout. Starting in 1999, the town brought in architect Stephen Kay for a renovation that added new bunkers and tees and redesigned holes, with work wrapping up in spring 2003.",
      "Today it plays 6,517 yards to a par of 72. It's easy to reach from the Palisades Parkway: take Exit 13, turn onto Thiells–Mt. Ivy Road, and the course is about 1.5 miles up on the left."
    ],
    facts: {
      address: "200 Thiells–Mt. Ivy Road, Pomona, NY 10970",
      phone: "845-354-1616",
      designer: "Hal Purdy; renovation by Stephen Kay (1999–2003)",
      opened: "1984 (one page on the course's site says 1987)",
      yardage: "6,517"
    },
    website: "https://www.rotellagolfcourse.com",
    photo: "images/rotella.jpg",
    photoCredit: "Philip J. Rotella Golf Course",
    sources: [
      { label: "Town of Haverstraw: 2026 green fees", url: "https://www.townofhaverstraw.org/greenfees.html" },
      { label: "Rotella: course details (official)", url: "https://www.rotellagolfcourse.com/course/" },
      { label: "Town of Haverstraw: Rotella", url: "https://townofhaverstraw.gov/rotella.html" }
    ]
  },
  {
    slug: "rockland-lake",
    name: "Rockland Lake State Park Golf Course",
    town: "Valley Cottage",
    state: "NY",
    county: "Rockland",
    holes: 36,
    holesLabel: "2 courses: 18 + 18 (par-3)",
    par: "72 Championship / 54 Executive",
    fees: { min: 22, max: 45 },
    feesNote:
      "NY State Parks rates, 18 holes. Championship: $35 weekdays / $42 weekends & holidays (out-of-state $38 / $45); seniors & juniors $25 weekdays. " +
      "Executive: $22 weekdays / $25 weekends (out-of-state $25 / $28). Championship twilight is $23 / $26, and a cart is $44 for 18 holes. The course is cashless, so bring a card.",
    vibe: "Two state-park courses next to the lake: a full championship 18 and a walkable par-3 executive.",
    writeup: [
      "Rockland Lake State Park has two golf courses. The Championship Course, designed by David W. Gordon in 1969, plays 6,864 yards from the blue tees to a par of 72 and is the main draw.",
      "The Executive Course is an 18-hole par-3 layout, about 2,780 yards to a par of 54, played off artificial mats with one set of tees. It's walking only, with pull carts for $7, and works well for a quick round, beginners, or short-game practice.",
      "As a state park facility, it's some of the best value in the region. Tee-time reservations go through (845) 268-7275, and the pro shop is at (845) 268-6250."
    ],
    facts: {
      address: "Route 9W, Congers, NY 10920 (State Parks listing; course is in Rockland Lake State Park)",
      phone: "Reservations (845) 268-7275 · Pro shop (845) 268-6250",
      designer: "David W. Gordon (Championship Course, 1969)",
      opened: null,
      yardage: "Championship 6,864 (blue) / 5,663 (red) · Executive about 2,780"
    },
    directionsQuery: "Rockland Lake State Park Golf Course, Valley Cottage, NY",
    website: "https://parks.ny.gov/visit/golf-courses/rockland-lake-state-park-golf-course",
    photo: "images/rockland-lake.jpg",
    photoCredit: "NY State Parks",
    sources: [
      { label: "NY State Parks: Rockland Lake golf", url: "https://parks.ny.gov/visit/golf-courses/rockland-lake-state-park-golf-course" },
      { label: "NY State Parks: course details & fees", url: "https://parks.ny.gov/golf-courses/6/details.aspx" }
    ]
  },
  {
    slug: "broadacres",
    name: "Broadacres Golf Course",
    town: "Orangeburg",
    state: "NY",
    county: "Rockland",
    holes: 9,
    holesLabel: "9 (18 with alternate tees)",
    par: "35 (70 for 18)",
    fees: null,
    feesNote: "No public rate found. Broadacres' site doesn't list green fees, so call the pro shop at 845-359-8218.",
    vibe: "Quiet, compact nine with a lot of local history. Easy to fit in after work.",
    writeup: [
      "Broadacres, which the course calls Orangetown's \"Hidden Gem\", is a 9-hole, par-35 course on about 65 acres lined with tall oaks. It plays 3,138 yards for nine holes, and alternate tees let you play a full 18 at 6,276 yards. The signature 3rd hole is a 228-yard par 3 straight up a steep hill.",
      "It opened in 1962 for employees and patients of the former Rockland State Hospital, now the Rockland Psychiatric Center, and takes its name from the old Broadacres farm. The clubhouse dates from the 1930s and was used by the Red Cross during World War II, when it served nearby Camp Shanks.",
      "The Town of Orangetown bought the property in 2003, partly to take pressure off its crowded Blue Hill course, and began running Broadacres as a public course in late 2003."
    ],
    facts: {
      address: "2 Midrise Circle, Orangeburg, NY 10962",
      phone: "845-359-8218",
      designer: null,
      opened: "1962 (public under Orangetown since late 2003)",
      yardage: "3,138 (9 holes) · 6,276 (18 with alternate tees)"
    },
    website: "https://www.broadacresgolf.com",
    photo: "images/broadacres.jpg",
    photoCredit: "Broadacres Golf Course",
    sources: [
      { label: "Broadacres: course details (official)", url: "https://www.broadacresgolf.com/broadacres-golf-course-details" },
      { label: "Broadacres: about (official)", url: "https://www.broadacresgolf.com/about-broadacres-golf-course" }
    ]
  },

  /* ---------------- Bergen County, NJ ---------------- */
  {
    slug: "valley-brook",
    name: "Valley Brook Golf Course",
    town: "River Vale",
    state: "NJ",
    county: "Bergen",
    holes: 18,
    holesLabel: "18",
    par: "70",
    fees: { min: 64, max: 90 },
    feesNote: BERGEN_FEES_NOTE,
    vibe: "A short shot-maker's course with ponds, a winding creek and the Pascack Brook.",
    writeup: [
      "Bergen County bought Valley Brook in 2006 and calls it a shot maker's course. It's a par 70 at only 6,211 yards from the back tees, with short winding holes and small greens that reward placement over power.",
      "Water is everywhere. A pond demands a 160-yard carry off the 1st tee, a creek and the Pascack Brook cross several holes, and a second pond guards the finish at Nos. 9 and 18. Directories credit John Handwerg Jr. with the original design, but the opening year isn't settled: listings give 1943, 1958 and 1962.",
      "Like all Bergen County courses, tee times are booked online through the county system. Registering with the county gets you lower green fees and earlier booking."
    ],
    facts: {
      address: "15 Rivervale Road, River Vale, NJ 07675",
      phone: "201-664-5890",
      designer: { v: "John Handwerg Jr.; renovation work in 2012", dir: true },
      opened: null,
      yardage: "6,211 (green) · 5,751 (gold) · 4,790 (burgundy)"
    },
    website: "https://golfbergencounty.com/our-courses",
    photo: "images/valley-brook.jpg",
    photoCredit: "Bergen County Golf",
    sources: [BERGEN_COURSES_SOURCE, BERGEN_RATES_SOURCE, { label: "Bergen County: Valley Brook scorecard", url: "https://golfbergencounty.com/images/Valley%20Brook%20Scorecard1.png" }]
  },
  {
    slug: "soldier-hill",
    name: "Soldier Hill Golf Course",
    town: "Emerson",
    state: "NJ",
    county: "Bergen",
    holes: 18,
    holesLabel: "18",
    par: "71",
    fees: { min: 64, max: 90 },
    feesNote: BERGEN_FEES_NOTE,
    vibe: "Traditional county layout: tree-lined front nine, open back nine with water.",
    writeup: [
      "Soldier Hill is a traditional 18-hole, par-71 course in Emerson, run by Bergen County. The county describes a front nine of mature, tree-lined fairways and a back nine that opens up and brings water hazards into play.",
      "It's one of the longer county courses at 6,749 yards from the black tees, and it has a restaurant and banquet hall on site. Directory listings say it was formerly the Emerson Golf Club, and the county doesn't give its designer or opening year.",
      "Tee times are booked online through the Bergen County system, and county-registered golfers get lower rates. Monday is maintenance day, so the course opens late."
    ],
    facts: {
      address: "99 Palisade Avenue, Emerson, NJ 07630",
      phone: "201-336-6031",
      designer: null,
      opened: null,
      yardage: "6,749 (black) · 6,225 (white) · 5,260 (gold) · 5,105 (red)"
    },
    website: "https://golfbergencounty.com/our-courses",
    photo: "images/soldier-hill.jpg",
    photoCredit: "Bergen County Golf",
    sources: [BERGEN_COURSES_SOURCE, BERGEN_RATES_SOURCE, { label: "Bergen County: Soldier Hill scorecard", url: "https://golfbergencounty.com/images/2026/02/10/soldier-hill-scorecard.png" }]
  },
  {
    slug: "rockleigh",
    name: "Rockleigh Golf Course",
    town: "Rockleigh",
    state: "NJ",
    county: "Bergen",
    holes: 27,
    holesLabel: "27 (Red/White 18 + Blue 9)",
    par: "Red/White 72 (71 from the black tees) · Blue 36",
    fees: { min: 30, max: 90 },
    feesNote:
      BERGEN_FEES_NOTE +
      " The Blue nine has its own lower rate: $30 weekday / $35 weekend not registered, $20 / $25 registered.",
    vibe: "27 holes near the NY line. Play the full Red/White 18 or a quick, cheap Blue nine.",
    writeup: [
      "Rockleigh has 27 holes. The Red and White nines make up the 18-hole course, and the Blue is a separate nine, which makes it an easy pick for a short evening loop.",
      "The Red/White course opened in 1946 and was completely renovated in 2004 by Robert McNeil of The Northeast Golf Company. It hosts the annual Bergen County Amateur Championship, and its closing run on the front nine is tough: a 479-yard par 4, a 232-yard par 3 and a 436-yard par 4 from the back tees.",
      "The Blue nine was built in 1961. It has its own low rate and needs no county card, so it's an easy pick for beginners or a quick evening loop. The county lists Rockleigh's driving range as closed indefinitely for safety reasons."
    ],
    facts: {
      address: "15 Paris Avenue, Rockleigh, NJ 07647",
      phone: "201-768-6354",
      designer: "Renovated in 2004 by Robert McNeil (The Northeast Golf Company); original designer not found",
      opened: "1946 (Red/White); 1961 (Blue nine)",
      yardage: "Red/White 6,812 (black) · 6,298 (white) · Blue 3,156 (white)"
    },
    website: "https://golfbergencounty.com/our-courses",
    photo: "images/rockleigh.jpg",
    photoCredit: "Bergen County Golf",
    sources: [BERGEN_COURSES_SOURCE, BERGEN_RATES_SOURCE, { label: "Bergen County: Rockleigh scorecard", url: "https://golfbergencounty.com/images/Rockleigh%20Scorecard1.png" }]
  },
  {
    slug: "darlington",
    name: "Darlington Golf Course",
    town: "Mahwah",
    state: "NJ",
    county: "Bergen",
    holes: 18,
    holesLabel: "18",
    par: "72 (71 from the black tees)",
    fees: { min: 64, max: 90 },
    feesNote: BERGEN_FEES_NOTE + " Tuesday is the weekly maintenance day, so the course opens late.",
    vibe: "Hardwood forest in the Ramapo foothills, with a downhill signature 9th and the county's best range.",
    writeup: [
      "Darlington is cut through a thick hardwood forest in the foothills of the Ramapo Mountains, with tree-lined fairways, water and real elevation changes. It's par 72 from the middle tees and 6,809 yards from the black tees.",
      "The downhill 9th is the signature hole. It's a 507-yard par 5 from the white tees, but from the black tees it becomes a 493-yard par 4, which drops the course to par 71. The 40-station driving range, with covered stations, is one of the largest in Bergen County.",
      "Directory listings credit Nicholas Psiahas with the design and give 1979 as the opening year. The county doesn't list either."
    ],
    facts: {
      address: "277 Campgaw Road, Mahwah, NJ 07430",
      phone: "201-634-3160",
      designer: { v: "Nicholas Psiahas", dir: true },
      opened: { v: "1979", dir: true },
      yardage: "6,809 (black) · 6,310 (white) · 5,697 (gold) · 5,278 (red)"
    },
    website: "https://golfbergencounty.com/our-courses",
    photo: "images/darlington.jpg",
    photoCredit: "Bergen County Golf",
    sources: [BERGEN_COURSES_SOURCE, BERGEN_RATES_SOURCE, { label: "Bergen County: Darlington scorecard", url: "https://golfbergencounty.com/images/darlington-golf-scorecard.png" }]
  },
  {
    slug: "old-tappan",
    name: "Old Tappan Golf Course",
    town: "Old Tappan",
    state: "NJ",
    county: "Bergen",
    holes: 9,
    holesLabel: "9",
    par: "35",
    fees: { min: 55, max: 85 },
    feesNote:
      "Borough of Old Tappan fee ordinance, non-resident walk-in rates: Tue–Thu (11 AM–3 PM) $55 for 9 holes / $75 for 18; Fri–Sun & holidays (12–3 PM) $65 / $85. " +
      "Those windows are also the only times the public can book. Carts are $15 per person for 9 holes and $25 for 18. The course's online rates are for 9 holes.",
    vibe: "The \"Jewel of Bergen County\": a walkable borough nine with tree-lined fairways.",
    writeup: [
      "Old Tappan's borough-owned course is a walkable nine-hole, par-35 layout with traditional tree-lined fairways. Hal Purdy designed it, and it opened in 1969 under the Old Tappan Recreation Commission.",
      "KemperSports manages the course for the borough, which bills it as the \"Jewel of Bergen County\". If you book 18 holes, you play the nine twice, and the course asks groups to keep to two hours per nine.",
      "The public can book weekdays from 11 AM to 3 PM and weekends from noon to 3 PM. The rest of the tee sheet goes to annual-pass holders. The course is open year-round, weather permitting, and its grill and restaurant, with outdoor seating, is open to the public."
    ],
    facts: {
      address: "83 DeWolf Road, Old Tappan, NJ 07675",
      phone: "201-767-1199",
      designer: "Hal C. Purdy",
      opened: "1969",
      yardage: "6,006 for 18 (the nine played twice)"
    },
    website: "https://oldtappangolf.com",
    photo: "images/old-tappan.jpg",
    photoCredit: "Old Tappan Golf Course",
    sources: [
      { label: "Old Tappan Golf Course: FAQs (official)", url: "https://www.oldtappangolf.com/faqs/" },
      { label: "KemperSports: Old Tappan", url: "https://www.kempersports.com/properties/old-tappan-golf-course/" },
      { label: "Borough of Old Tappan: Ordinance 1270-25 (golf fees)", url: "https://www.oldtappan.net/meetings/forms-documents/ordinances-pending-codification/1290-1270-25-amend-golf-fees/file" }
    ]
  },
  {
    slug: "river-vale-cc",
    name: "River Vale Country Club",
    town: "River Vale",
    state: "NJ",
    county: "Bergen",
    holes: 18,
    holesLabel: "18",
    par: "72",
    fees: { min: 55, max: 130 },
    feesNote:
      "The club's 2026 public rates. Midday (open to 2:59 PM): Mon–Thu $100, Fri $125, Sat/Sun & holidays $130. " +
      "Twilight (after 3 PM): $75 Mon–Thu, $85 Fri–Sun. Super twilight (after 5 PM): $55 any day. " +
      "Seniors (62+) pay $75 Mon–Thu. River Vale residents with a $35 resident card pay $80–$100 midday.",
    vibe: "Classic 1931 layout. Feels like a country club, but anyone can book a tee time.",
    writeup: [
      "Despite the name, River Vale Country Club is open to the public. It's owned by the Township of River Vale and managed by Long Ball Golf Management, and any golfer can book a tee time up to 7 days ahead, online or through the pro shop.",
      "The course dates to 1931 and is an Orrin E. Smith design. It plays 6,504 yards to a par of 72.",
      "It's the priciest of the Bergen courses here, but it has the awards to show for it. Its own site lists \"Best Public Golf Course in Bergen County\" votes every year from 2017 to 2024 and a Golf Advisor top-20 New Jersey ranking every year from 2019 to 2025. Super twilight after 5 PM is the bargain at $55."
    ],
    facts: {
      address: "660 Rivervale Road, River Vale, NJ 07675",
      phone: "201-391-2300",
      designer: "Orrin E. Smith",
      opened: "1931",
      yardage: "6,504"
    },
    website: "https://www.rivervalecc.com",
    photo: "images/river-vale-cc.jpg",
    photoCredit: "River Vale Country Club",
    sources: [
      { label: "River Vale CC: course info & rates (official)", url: "https://www.rivervalecc.com/golf/course-info-rates/" }
    ]
  },

  /* ---------------- Orange County, NY ---------------- */
  {
    slug: "west-point",
    name: "West Point Golf Course",
    town: "West Point",
    state: "NY",
    county: "Orange",
    holes: 18,
    holesLabel: "18",
    par: { v: "70", dir: true },
    fees: { min: 67, max: 106 },
    feesNote:
      "From the course's Army MWR fees page, general public rates including cart: 18 holes $89 weekday / $106 weekend, twilight $67 / $80, 9 holes $45 / $53. " +
      "Twilight starts 3 hours before sunset. There's a discount for walking, so ask the pro shop.",
    vibe: "A Robert Trent Jones mountain course at the Military Academy, open to the public.",
    writeup: [
      "The U.S. Military Academy's course is a Robert Trent Jones design laid out in the hills above the Hudson. The course itself calls it a mountain layout, so expect sidehill lies and elevation changes.",
      "It's run by Army Family and MWR mainly for military families, but it's open to the public. The public can book tee times 8 days ahead, online or through the GolfNow app, and a tee time needs two to four players. It's also home to Army's Division I golf team.",
      "A new clubhouse opened for the 2025 season after four years of construction. The tee markers follow American history, from the Revolution on No. 1 to Iraq and Afghanistan on Nos. 17 and 18. The course is on a military installation, so check the course's site for visitor-access rules before you drive up."
    ],
    facts: {
      address: "1230 NY Route 218, West Point, NY 10996",
      phone: { v: "845-938-2435", dir: true },
      designer: "Robert Trent Jones Sr.",
      opened: { v: "1948 (Army Athletics lists 1946)", dir: true },
      yardage: { v: "About 6,007–6,036 (back tees)", dir: true }
    },
    directionsQuery: "West Point Golf Course, West Point, NY",
    website: "https://westpoint.armymwr.com/programs/west-point-golf-course",
    photo: "images/west-point.jpg",
    photoCredit: "West Point Golf Course (Army MWR)",
    sources: [
      { label: "West Point MWR: fees & tee times (official)", url: "https://westpoint.armymwr.com/programs/west-point-golf-course/fees-and-tee-times" },
      { label: "West Point MWR: golf course (official)", url: "https://westpoint.armymwr.com/programs/west-point-golf-course" },
      { label: "GolfPass: West Point Golf Course", url: "https://www.golfpass.com/travel-advisor/courses/9840-west-point-golf-course" }
    ]
  },
  {
    slug: "mansion-ridge",
    name: "The Golf Club at Mansion Ridge",
    town: "Monroe",
    state: "NY",
    county: "Orange",
    holes: 18,
    holesLabel: "18",
    par: "72",
    fees: null,
    feesNote:
      "No public green-fee schedule found. Daily rates are set on the club's online tee sheet. The official site lists only membership and military pricing " +
      "(military: $59 before 2 PM, $49 after 2 PM, Mon–Thu).",
    vibe: "Jack Nicklaus Signature course on a 220-acre historic estate, with an 18th-century stone clubhouse.",
    writeup: [
      "Mansion Ridge is a Jack Nicklaus Signature course in Monroe. According to the club, it was the first Nicklaus Signature design in New York State open to the public. Directory listings give 1999 as the opening year.",
      "It's a serious test from the back. The Tour tees play 6,889 yards with a 74.9 rating and 145 slope, and forward tees come down to about 4,785 yards. Par is 72.",
      "The course sits on a historic 220-acre estate with landmarks older than the American Revolution, and the clubhouse is an 18th-century stone building. Troon manages the club and recently finished upgrading the course and clubhouse. Rates change by day and time, so check the online tee sheet."
    ],
    facts: {
      address: "1292 Orange Turnpike, Monroe, NY 10950",
      phone: "845-782-7888",
      designer: "Jack Nicklaus (Signature design)",
      opened: { v: "1999", dir: true },
      yardage: "6,889 (Tour tees) to 4,785 (forward tees)"
    },
    website: "https://www.mansionridgegc.com",
    photo: "images/mansion-ridge.jpg",
    photoCredit: "The Golf Club at Mansion Ridge",
    sources: [
      { label: "Mansion Ridge (official)", url: "https://www.mansionridgegc.com/" },
      { label: "Mansion Ridge: scorecard (official)", url: "https://www.mansionridgegc.com/scorecard/" },
      { label: "Troon: Mansion Ridge", url: "https://www.troon.com/locations/the-golf-club-at-mansion-ridge/" },
      { label: "GolfPass: Mansion Ridge", url: "https://www.golfpass.com/travel-advisor/courses/1115-golf-club-at-mansion-ridge" }
    ]
  }
];
