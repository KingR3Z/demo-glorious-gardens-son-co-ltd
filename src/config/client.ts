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
    { name: "Christine Ashman", rating: 5, text: "The lawn cutting and edging were done properly and evenly. Small details were taken care of which made a difference.", date: "2 days ago" },
    { name: "Wakity Fernando", rating: 5, text: "Reasonable quote compared to others I checked. Work quality matched what was promised.", date: "Edited 2 days ago" },
    { name: "Antonio Antonelli", rating: 5, text: "First time using their service and it went well. No confusion, no delays, just straightforward garden work.", date: "a week ago" },
    { name: "Langston Stein", rating: 5, text: "Simple and stress-free experience. They listened to what I wanted and followed the instructions carefully.", date: "2 weeks ago" },
    { name: "Denver McIntyre", rating: 5, text: "My interaction with Glorious Garden Son & Co. Ltd. was excellent. Throughout the process, the team was kind, professional, and easy to get in touch with. Everything was completed on schedule. Their attention to detail and general calibre of work are much appreciated. I would gladly suggest them to others.", date: "3 weeks ago" },
    { name: "Scott Brazil", rating: 5, text: "Glorious Gardens Son & Co Ltd took on a commercial site clearance. They removed all overgrowth, repaired fencing, and laid new turf. They also washed the paved entrance so it’s safe and smart.", date: "3 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Glorious Gardens Son & Co Ltd | Landscaper in Farnborough",
    description: "Professional landscaper in Farnborough. 5.0-star rated on Google. Call for a free quote.",
  },
};
