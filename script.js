// Rotation week 1 starts October 26, making November 16–22, 2026 rotation week 4.
var CYCLE_ANCHOR_MONDAY = new Date(2026, 9, 26, 0, 0, 0, 0); // month is 0-indexed (9 = October)

var weeklyMenus = [
  {
    // Vecka 1 i rotationen
    days: [
      { day: "Måndag", dish: "Spagetti och köttfärssås", desc: "Klassisk pasta med rik köttfärssås och riven parmesan." },
      { day: "Tisdag", dish: "Fläskfilégryta med champinjoner", desc: "Krämig gräddgryta med dijon, timjan och ris." },
      { day: "Onsdag", dish: "Lax med potatis och morötter", desc: "Ugnsbakad lax, kokt potatis och smörglaserade morötter." },
      { day: "Torsdag", dish: "Pannkakor med sylt & grädde", desc: "Klassiska tunna pannkakor med hallonsylt och vispgrädde." },
      { day: "Fredag", dish: "Hamburgare med pommes", desc: "Saftig hemgjord burgare, krispiga pommes och tillbehör." },
      { day: "Lördag", dish: "—", desc: "Fritt val / rester." },
      { day: "Söndag", dish: "—", desc: "Fritt val / rester." }
    ]
  },
  {
    // Vecka 2 i rotationen
    days: [
      { day: "Måndag", dish: "Korvstroganoff", desc: "Krämig tomatsås med falukorv, serveras med ris." },
      { day: "Tisdag", dish: "Fried rice med grönsaker och ägg", desc: "Wokat ris med färska grönsaker, ägg och sojasmak." },
      { day: "Onsdag", dish: "Fish and chips", desc: "Frasig panerad fisk med pommes, morötter och ärtor." },
      { day: "Torsdag", dish: "Carbonara", desc: "Silkeslen pasta med ägg, pancetta och pecorino." },
      { day: "Fredag", dish: "Tacos", desc: "Mjuka och hårda skal med alla tillbehör." },
      { day: "Lördag", dish: "—", desc: "Fritt val / rester." },
      { day: "Söndag", dish: "—", desc: "Fritt val / rester." }
    ]
  },
  {
    // Vecka 3 i rotationen
    days: [
      { day: "Måndag", dish: "Kycklingcurrygryta i kokosmjölk", desc: "Mild curry med paprika och koriander, serveras med jasminris." },
      { day: "Tisdag", dish: "Lasagne", desc: "Ugnsgratinerad lasagne med köttfärs och bechamelsås." },
      { day: "Onsdag", dish: "Pad thai", desc: "Risnudlar med jordnötter, lime, vårlök och ägg." },
      { day: "Torsdag", dish: "Fiskgratäng", desc: "Ugnsbakad fisk i gräddig sås med krämigt potatismos." },
      { day: "Fredag", dish: "Köttbullar med potatis & gräddsås", desc: "Hemlagade köttbullar med lingonsylt och inlagd gurka." },
      { day: "Lördag", dish: "—", desc: "Fritt val / rester." },
      { day: "Söndag", dish: "Pappas kokbok", desc: "Överraskning ur pappas egen kokbok." }
    ]
  },
  {
    // Vecka 4 i rotationen
    days: [
      { day: "Måndag", dish: "Kycklingpasta med broccoli", desc: "Krämig pasta med kyckling, broccoli och parmesan." },
      { day: "Tisdag", dish: "Boeuf bourguignon", desc: "Långkokt fransk oxgryta med rödvin, bacon och svamp." },
      { day: "Onsdag", dish: "Fiskpinnar med potatismos", desc: "Krispiga fiskpinnar, krämigt mos och gröna ärtor." },
      { day: "Torsdag", dish: "Raggmunk med fläsk och sylt", desc: "Knapriga rårakor med stekt sidfläsk och lingonsylt." },
      { day: "Fredag", dish: "Tacopaj", desc: "Ugnspaj med kryddig färs, majs och gratinerad ost." },
      { day: "Lördag", dish: "—", desc: "Fritt val / rester." },
      { day: "Söndag", dish: "—", desc: "Fritt val / rester." }
    ]
  },
  {
    // Vecka 5 i rotationen
    days: [
      { day: "Måndag", dish: "Chili con carne", desc: "Rustik gryta med nötfärs, bönor, majs och lime." },
      { day: "Tisdag", dish: "Linssoppa", desc: "Värmande soppa med röda linser, spiskummin och curry." },
      { day: "Onsdag", dish: "Pasta med fetaost, tomat & basilika", desc: "Ugnsbakad fetaost med körsbärstomater och al dente pasta." },
      { day: "Torsdag", dish: "Paneer butter masala", desc: "Indisk gryta med paneer i krämig tomatsås, serveras med ris." },
      { day: "Fredag", dish: "Fish taco", desc: "Krispig fisk i mjuka tortillas med slaw och limemajo." },
      { day: "Lördag", dish: "—", desc: "Fritt val / rester." },
      { day: "Söndag", dish: "—", desc: "Fritt val / rester." }
    ]
  },
  {
    // Vecka 6 i rotationen
    days: [
      { day: "Måndag", dish: "Blomkålsgryta med ris", desc: "Kryddig vegetarisk gryta med blomkål och basmatiris." },
      { day: "Tisdag", dish: "Fetaostpaj med broccoli", desc: "Matig paj med fetaost, broccoli och färska örter." },
      { day: "Onsdag", dish: "Wok med räkor", desc: "Wokade räkor med krispiga grönsaker och sojasmak." },
      { day: "Torsdag", dish: "Pyttipanna med rödbetor", desc: "Klassisk pyttipanna med stekt ägg och inlagda rödbetor." },
      { day: "Fredag", dish: "Pasta med frikadeller i tomatsås", desc: "Små köttbullar i rik tomatsås med spaghetti." },
      { day: "Lördag", dish: "—", desc: "Fritt val / rester." },
      { day: "Söndag", dish: "Persiskt", desc: "Persisk middag med saffransris och kryddigt kött." }
    ]
  }
];

// Returnerar måndagen (00:00) för veckan som datumet ligger i.
function getMondayStart(date) {
  var d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  var day = d.getDay(); // 0 = Sön, 1 = Mån ... 6 = Lör
  var diff = (day === 0 ? -6 : 1 - day);
  d.setDate(d.getDate() + diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

// ISO 8601 veckonummer.
function getISOWeek(date) {
  var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  var dayNum = d.getUTCDay() || 7; // Sön = 7
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

function getCurrentMenuIndex() {
  var currentMonday = getMondayStart(new Date());
  var anchorMonday = getMondayStart(CYCLE_ANCHOR_MONDAY);
  // Compare calendar dates in UTC so daylight-saving changes cannot shift the rotation.
  var diffMs = Date.UTC(currentMonday.getFullYear(), currentMonday.getMonth(), currentMonday.getDate()) -
    Date.UTC(anchorMonday.getFullYear(), anchorMonday.getMonth(), anchorMonday.getDate());
  var weeksSinceAnchor = Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000));
  var len = weeklyMenus.length;
  return ((weeksSinceAnchor % len) + len) % len;
}

function renderMenu() {
  var idx = getCurrentMenuIndex();
  var menu = weeklyMenus[idx];
  var weekNumber = getISOWeek(new Date());

  var titleEl = document.getElementById("weekTitle");
  if (titleEl) {
    titleEl.textContent = "Vecka " + weekNumber + " • Aktiv meny";
  }

  var list = document.getElementById("menuList");
  if (!list) return;

  renderMenuDays(list, menu);
}

function renderMenuDays(list, menu) {
  list.innerHTML = "";

  for (var i = 0; i < menu.days.length; i++) {
    var item = menu.days[i];
    var li = document.createElement("li");
    li.className = "menu-item";
    li.innerHTML =
      '<span class="day">' + item.day + '</span>' +
      '<span class="dish">' + item.dish + '</span>' +
      '<span class="desc">' + item.desc + '</span>';
    list.appendChild(li);
  }
}

function renderFullMenu() {
  var container = document.getElementById("fullMenu");
  if (!container) return;

  var activeIndex = getCurrentMenuIndex();
  container.innerHTML = "";

  for (var i = 0; i < weeklyMenus.length; i++) {
    var section = document.createElement("section");
    section.className = "menu-wrap" + (i === activeIndex ? " active-week" : "");
    section.setAttribute("aria-labelledby", "rotation-week-" + (i + 1));

    var heading = document.createElement("h2");
    heading.id = "rotation-week-" + (i + 1);
    heading.className = "rotation-title";
    heading.textContent = "Menyvecka " + (i + 1) + (i === activeIndex ? " • Aktiv meny" : "");
    section.appendChild(heading);

    var list = document.createElement("ul");
    list.className = "menu-list";
    renderMenuDays(list, weeklyMenus[i]);
    section.appendChild(list);
    container.appendChild(section);
  }
}

function renderMenus() {
  renderMenu();
  renderFullMenu();
}

renderMenus();
setInterval(renderMenus, 60 * 60 * 1000);
