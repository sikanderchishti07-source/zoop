export const IMG = {
  mascot:
    "https://image.qwenlm.ai/generated-images/34082eea-edfe-410a-848e-2a8bb0152fa2/_result.png",
  volcano:
    "https://image.qwenlm.ai/generated-images/eb7266c8-d2db-4098-81a5-bbb1610b0ccd/_result.png",
  rocket:
    "https://image.qwenlm.ai/generated-images/70013e97-727f-4863-95fe-54c88d662197/_result.png",
  dino: "https://image.qwenlm.ai/generated-images/26518275-913c-40d3-a787-185ec6c1d2c5/_result.png",
  photoSlime:
    "https://image.qwenlm.ai/generated-images/190cf0f5-d1e7-4b95-ba29-9bf6314f40bf/_result.png",
  photoPotions:
    "https://image.qwenlm.ai/generated-images/fe0efce8-f955-48be-9902-1bac2e26aa00/_result.png",
  photoRobot:
    "https://image.qwenlm.ai/generated-images/c3bb30f1-74b2-4902-988e-98f9311e0a93/_result.png",
  buddy:
    "https://image.qwenlm.ai/generated-images/e37378b7-ecf7-4526-afa3-6410241c5357/_result.png",
};

export type Kit = {
  id: string;
  name: string;
  tag: string;
  tagBg: string;
  ages: string;
  price: number;
  blurb: string;
  includes: string[];
  mess: number; // mess-o-meter 1..5
  wow: number; // wow-o-meter 1..5
  image: string;
  accent: string; // tailwind bg class for card top
  rotate: string;
};

export const KITS: Kit[] = [
  {
    id: "volcano",
    name: "Slime Volcano Lab",
    tag: "BEST SELLER",
    tagBg: "bg-sun",
    ages: "5–9",
    price: 29,
    blurb: "A grumbly cardboard volcano that erupts rainbow goo — 12 glorious times.",
    includes: [
      "Build-it-yourself volcano fortress",
      "3 fizzy eruption powders",
      "Glow-in-the-dark slime base",
      "Lab goggles (tiny & mighty)",
    ],
    mess: 4,
    wow: 5,
    image: IMG.volcano,
    accent: "bg-coral",
    rotate: "md:-rotate-2",
  },
  {
    id: "rocket",
    name: "Fizzy Rocket Blast-Off",
    tag: "NEW!",
    tagBg: "bg-bubble",
    ages: "7–12",
    price: 34,
    blurb: "Turn an ordinary bottle into a WHOOSH-ing 30-foot rocket. Backyard not included.",
    includes: [
      "Aerodynamic nose-cone kit",
      "Fizzy fuel tablets ×20",
      "Mission-control stickers",
      "Launchpad with countdown dial",
    ],
    mess: 2,
    wow: 5,
    image: IMG.rocket,
    accent: "bg-sky",
    rotate: "md:rotate-1",
  },
  {
    id: "dino",
    name: "Glow Dino Dig",
    tag: "STAFF PICK",
    tagBg: "bg-lime",
    ages: "4–8",
    price: 27,
    blurb: "Excavate a neon T-Rex skeleton in the dark. Flashlights at the ready, explorers!",
    includes: [
      "Mystery dig block (dino inside!)",
      "Wooden chisel + brush",
      "UV torch for night digs",
      "Paleontologist badge",
    ],
    mess: 3,
    wow: 4,
    image: IMG.dino,
    accent: "bg-grape",
    rotate: "md:-rotate-1",
  },
];

export const STEPS = [
  {
    n: "1",
    title: "Pick your chaos",
    text: "Choose a kit (or three — we won't judge, we'll cheer).",
    icon: "box",
    bg: "bg-coral",
  },
  {
    n: "2",
    title: "The ZOOP box lands",
    text: "Free shipping, silly packing peanuts, zero boring cardboard.",
    icon: "truck",
    bg: "bg-sky",
  },
  {
    n: "3",
    title: "Press play on silly",
    text: "Scan the box for a 3-minute video guide starring Ziggy the Monster.",
    icon: "play",
    bg: "bg-teal",
  },
  {
    n: "4",
    title: "GO ZOOP!",
    text: "Erupt, launch, dig. Then post the masterpiece — #ZOOPsquad",
    icon: "burst",
    bg: "bg-grape",
  },
];

export const GALLERY = [
  {
    src: IMG.photoSlime,
    caption: "Milo, 7 — \"My slime is ALIVE.\"",
    rotate: "-rotate-6",
    note: "Slime Volcano Lab",
  },
  {
    src: IMG.photoPotions,
    caption: "June, 6 — potion scientist in training",
    rotate: "rotate-3",
    note: "Fizzy Potions add-on",
  },
  {
    src: IMG.photoRobot,
    caption: "The Okafors — robot build Sunday",
    rotate: "-rotate-2",
    note: "Cardboard Bot add-on",
  },
];

export const STATS = [
  { big: "120K+", label: "volcanoes erupted", bg: "bg-coral" },
  { big: "12,480", label: "ZOOP squad families", bg: "bg-teal" },
  { big: "4.9★", label: "from grown-up reviews", bg: "bg-sky" },
  { big: "0", label: "boring afternoons. ever.", bg: "bg-bubble" },
];

export const TESTIMONIALS = [
  {
    quote:
      "My kitchen looks like a swamp monster sneezed in it. My son has never been happier. 10/10 would erupt again.",
    name: "Priya S.",
    role: "mom of a 6-year-old",
    bg: "bg-sun",
    stars: 5,
    rotate: "md:-rotate-1",
  },
  {
    quote:
      "The rocket went over the fence. THE FENCE. Best $34 of my life.",
    name: "Marcus T.",
    role: "dad & mission control",
    bg: "bg-mint",
    stars: 5,
    rotate: "md:rotate-1",
  },
  {
    quote:
      "I'm 8 and I made a VOLCANO. My teacher said I'm basically a scientist now.",
    name: "Ellie",
    role: "actual kid, actual quote",
    bg: "bg-bubble",
    stars: 5,
    rotate: "md:-rotate-2",
  },
  {
    quote:
      "We cancel nothing. Not even the dentist gets this much excitement in our house.",
    name: "The Ramírez family",
    role: "ZOOP Club members, year 2",
    bg: "bg-sky",
    stars: 5,
    rotate: "md:rotate-2",
  },
];

export const PLANS = [
  {
    name: "One-Shot Wonder",
    price: 29,
    per: "per box",
    desc: "A single kit, maximum chaos. Great first ZOOP.",
    features: [
      "Any 1 kit of your choice",
      "Free video guides forever",
      "Free shipping over $40",
      "30-day giggle guarantee",
    ],
    bg: "bg-cream",
    featured: false,
    rotate: "md:-rotate-1",
  },
  {
    name: "ZOOP Club",
    price: 22,
    per: "per month",
    desc: "A fresh surprise kit on your doorstep every month.",
    features: [
      "New kit every month (never a repeat!)",
      "Members-only bonus experiments",
      "Ziggy birthday card + confetti cannon",
      "Free shipping, always",
      "Pause or cancel any time",
    ],
    bg: "bg-sun",
    featured: true,
    rotate: "",
  },
  {
    name: "Party Pack",
    price: 99,
    per: "5 kits",
    desc: "Birthdays, playdates, classroom pandemonium.",
    features: [
      "5 kits — mix & match",
      "Party game cards + playlist",
      "16 tiny lab goggles",
      "Free shipping, always",
    ],
    bg: "bg-cream",
    featured: false,
    rotate: "md:rotate-1",
  },
];

export const FAQS = [
  {
    q: "Is the slime actually safe to touch?",
    a: "Yep! Everything in a ZOOP kit is non-toxic, dermatologist-tested and made for grabby hands. (It's not a snack though — we've triple-checked, it tastes like regret.)",
  },
  {
    q: "What ages are the kits for?",
    a: "Each kit wears its age range like a badge: mostly 4–12. Little explorers 3–4 love the Glow Dino Dig with a grown-up co-pilot, and the Fizzy Rocket is a hit with the 7–12 crowd.",
  },
  {
    q: "How messy is \"messy\"?",
    a: "Every kit has a Mess-O-Meter from 1 (tidy-ish) to 5 (bathtub required). Pro tip: the tarp in your garage is not just for cars anymore.",
  },
  {
    q: "Can I really cancel the club any time?",
    a: "Any time, one click, no guilt-trip phone calls. Ziggy might shed a single cartoon tear, but he'll understand.",
  },
  {
    q: "Do you ship outside the US?",
    a: "Right now we zoom across the US and Canada. Worldwide ZOOP is on the launchpad — join the newsletter and be first aboard the rocket.",
  },
  {
    q: "What if my kid doesn't love it?",
    a: "Then we've failed at our only job. Send it back within 30 days for a full refund — the Giggle Guarantee. No forms, no fuss.",
  },
];

export const TICKER_ITEMS = [
  "FREE SHIPPING OVER $40",
  "NEW: GLOW DINO DIG",
  "30-DAY GIGGLE GUARANTEE",
  "AS SEEN ON KIDZ TV",
  "NON-TOXIC · WASHABLE · WILD",
  "120,000+ VOLCANOES ERUPTED",
];
