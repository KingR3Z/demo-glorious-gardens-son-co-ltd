export const client = {
  // Business Details
  name: "Glorious Gardens Son & Co Ltd",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Farnborough.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07946 861456",
  email: "",
  website: "",

  // Location
  address: "Farnborough",
  city: "Farnborough",
  county: "",
  postcode: "",
  basedIn: "Farnborough",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "9",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Denver McIntyre", rating: 5, text: "New My interaction with Glorious Garden Son & Co. Ltd. was excellent. Throughout the process, the team was kind, professional, and easy to get in touch with. Everything was completed on schedule. Their attention to detail and general calibre of work", date: "2 weeks ago" },
    { name: "Tommy Jones", rating: 5, text: "Very pleased with the work the day was not good weather worked hard all day so pleased with the removal of the big clump of bamboo would recommend them to family and friends ", date: "4 months ago" },
    { name: "Scott Brazil", rating: 5, text: "Glorious Gardens Son & Co Ltd took on a commercial site clearance. They removed all overgrowth, repaired fencing, and laid new turf. They also washed the paved entrance so it’s safe and smart. ", date: "3 months ago" },
    { name: "Hiten Patel", rating: 5, text: "Used for the first time and couldn’t be happier. The garden looks spotless – hedges trimmed neatly, lawn mowed, and weeds cleared. Great communication and very professional. ", date: "4 months ago" },
    { name: "Cyril Adcock", rating: 5, text: "Glories Garden Son & Co Ltd replaced an old delivery with a new block-paved one, installed a garden gate, and planted fresh borders. They also moved the lawn and cleaned the gutters. Great work and attention to detail. ", date: "6 months ago" },
    { name: "Peanutbutterjamjelly", rating: 5, text: "Lorenzo and his team removed and installed new fences. The new fenced had concrete posts and gravel boards. It was a big job and they managed to finish it within two days. They also cleaned up everything after they finished. Our neighbours …  ", date: "9 months ago" },
    { name: "Sharon Brown", rating: 5, text: "Glorious Gardens Son & Co Co completely transformed our commercial property grounds. They installed a new patio area, trimmed the hedges, and re-laid turf across the entrance lawn. They also repaired a broken gates and clean the gutters. The place no", date: "7 months ago" },
    { name: "Yasemin Mae", rating: 5, text: "Lorenzo and his team did an amazing job on my garden! They’re so understanding and helpful. My garden was a mess before they came and they managed to get rid of all the brambles that were attacking my lawn. Not only that, they took the …  ", date: "10 months ago" },
    { name: "Adrian Adcock", rating: 5, text: "Glorious Gardens Son & Co Ltd cleared an overgrown back garden, installed a concrete base for a shed, and laid a new patio. They also trimmed hedges and mowed the lawn. ", date: "6 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Glorious Gardens Son & Co Ltd | Landscaper in Farnborough",
    description: "Professional landscaper in Farnborough. 5.0-star rated on Google. Call for a free quote.",
  },
};
