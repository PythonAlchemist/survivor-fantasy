export interface S51Castaway {
  id: string;
  name: string;
  hometown: string;
  image: string;
}

/** Survivor 51 cast. Portraits are CBS promotional stills stored in /public. */
export const s51Cast: S51Castaway[] = [
  { id: "aaliyah",  name: "Aaliyah Puglia",     hometown: "Gloucester City, New Jersey", image: "/images/cast-s51/aaliyah_puglia.jpg" },
  { id: "alexis",   name: "Alexis Levine",      hometown: "Atlanta, Georgia",            image: "/images/cast-s51/alexis_levine.jpg" },
  { id: "ana",      name: "Ana Sani",           hometown: "Richmond Hill, Ontario",      image: "/images/cast-s51/ana_sani.jpg" },
  { id: "brady",    name: "Brady Booker",       hometown: "La Salle, Illinois",          image: "/images/cast-s51/brady_booker.jpg" },
  { id: "carter",   name: "Carter Krull",       hometown: "Rock Rapids, Iowa",           image: "/images/cast-s51/carter_krull.jpg" },
  { id: "cristian", name: "Cristian Chavez",    hometown: "Salt Lake City, Utah",        image: "/images/cast-s51/cristian_chavez.jpg" },
  { id: "kilby",    name: "Danny Kilby",        hometown: "Mount Forest, Ontario",       image: "/images/cast-s51/danny_kilby.jpg" },
  { id: "devin",    name: "Devin Way",          hometown: "Lufkin, Texas",               image: "/images/cast-s51/devin_way.jpg" },
  { id: "eric",     name: "Eric Macksoud",      hometown: "Lincoln, Rhode Island",       image: "/images/cast-s51/eric_macksoud.jpg" },
  { id: "jelly",    name: "Jelly Loblack",      hometown: "Garland, Texas",              image: "/images/cast-s51/jelly_loblack.jpg" },
  { id: "jenna",    name: "Jenna Doore",        hometown: "Perrysburg, Ohio",            image: "/images/cast-s51/jenna_doore.jpg" },
  { id: "kristin",  name: "Kristin Flickinger", hometown: "Ketchum, Idaho",              image: "/images/cast-s51/kristin_flickinger.jpg" },
  { id: "lewis",    name: "Lewis Kelly",        hometown: "Dublin, Ireland",             image: "/images/cast-s51/lewis_kelly.jpg" },
  { id: "linnea",   name: "Linnea Capobianco",  hometown: "Kearny, New Jersey",          image: "/images/cast-s51/linnea_capobianco.jpg" },
  { id: "maggie",   name: "Maggie Nestor",      hometown: "Middleway, West Virginia",    image: "/images/cast-s51/maggie_nestor.jpg" },
  { id: "mike",     name: "Mike Pinsky",        hometown: "New York City, New York",     image: "/images/cast-s51/mike_pinsky.jpg" },
  { id: "ori",      name: "Ori Jean-Charles",   hometown: "Spring Valley, New York",     image: "/images/cast-s51/ori_jean_charles.jpg" },
  { id: "patt",     name: "Patt Cannaday",      hometown: "Tampa, Florida",              image: "/images/cast-s51/patt_cannaday.jpg" },
  { id: "rob",      name: "Rob Antonson",       hometown: "Johnston, Rhode Island",      image: "/images/cast-s51/rob_antonson.jpg" },
  { id: "sharonda", name: "Sharonda Cox",       hometown: "Pompano Beach, Florida",      image: "/images/cast-s51/sharonda_cox.jpg" },
  { id: "thienan",  name: "Thien An Nguyen",    hometown: "Fort Worth, Texas",           image: "/images/cast-s51/thien_an_nguyen.jpg" },
];

export const castById = Object.fromEntries(s51Cast.map((c) => [c.id, c]));
