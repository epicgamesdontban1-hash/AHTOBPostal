// ============================================================================
// BUSINESS CONFIGURATION FILE
// ============================================================================
// Edit this file to easily update all business information across the website
// Change contact details, locations, services, and company info by editing below

export const companyConfig = {
  // ========== BASIC COMPANY INFO ==========
  name: "AHTOB",
  fullName: "AHTOB Postal Services",
  tagline: "Next-Generation Postal Solutions",
  description: "Revolutionary postal and delivery services founded by young entrepreneur Calvin Botha. Modern technology meets traditional reliability for international shipping from South Africa.",
  
  // ========== FOUNDER INFORMATION ==========
  founder: {
    name: "Calvin Botha",
    age: 16,
    title: "Founder & CEO",
    yearFounded: 2025,
    story: "Founded in 2025 by 16-year-old entrepreneur Calvin Botha, AHTOB represents the future of postal services. Combining youth innovation with professional excellence.",
  },

  // ========== CONTACT INFORMATION ==========
  // Change phone numbers, email, and address here
  contact: {
    phone: "None",
    email: "ahtobpostal@gmail.com",
    supportEmail: "ahtobpostal@gmail.com",
    businessEmail: "ahtobpostal@gmail.com",
    emergencyPhone: "None",
    address: {
      street: "45 Innovation Drive",
      city: "Centurion",
      state: "Gauteng", 
      zip: "0157",
      country: "South Africa",
    },
  },

  // ========== BUSINESS HOURS ==========
  hours: {
    weekdays: "Mon-Fri: 7AM-6PM",
    saturday: "Sat: 8AM-1PM", 
    sunday: "Closed",
    emergency: "24/7 Emergency Support Available",
  },

  // ========== OFFICE LOCATIONS ==========
  // Add, remove, or edit locations here
  locations: [
    {
      name: "Main Headquarters", 
      address: "45 Innovation Drive, Centurion, Gauteng 0157",
      phone: "None",
      hours: "Mon-Fri: 7AM-6PM, Sat: 8AM-1PM",
      type: "headquarters",
      features: ["Full Service", "Customer Center", "Packaging Services"],
    },
    {
      name: "Pretoria Hub",
      address: "123 Tech Street, Pretoria, Gauteng 0001", 
      phone: "None",
      hours: "Mon-Fri: 8AM-5PM, Sat: 8AM-12PM",
      type: "hub",
      features: ["Drop-off Point", "Collection Center"],
    },
    {
      name: "Johannesburg Center",
      address: "567 Business Avenue, Johannesburg, Gauteng 2001",
      phone: "None", 
      hours: "Mon-Fri: 8AM-5PM, Sat: 8AM-12PM",
      type: "center",
      features: ["Express Services", "International Shipping"],
    },
    {
      name: "Cape Town Office",
      address: "89 Coastal Road, Cape Town, Western Cape 8001",
      phone: "None",
      hours: "Mon-Fri: 8AM-5PM, Sat: 8AM-12PM", 
      type: "branch",
      features: ["Local Delivery", "Package Tracking"],
    },
  ],

  // ========== SERVICE AREAS ==========
  serviceAreas: [
    "United Kingdom",
    "Finland",
    "Ireland", 
    "South Africa (All Provinces)",
    "European Union (Selected Countries)",
  ],

  // ========== SERVICES OFFERED ==========
  services: [
    {
      id: "express",
      name: "Lightning Express",
      description: "Ultra-fast international delivery with our premium service. Perfect for urgent documents and time-sensitive packages.",
      features: [
        "2-4 day international delivery",
        "Real-time GPS tracking",
        "Signature confirmation",
        "Door-to-door service", 
        "Insurance included",
        "24/7 support",
      ],
      icon: "bolt",
      price: "From R299",
      popular: true,
    },
    {
      id: "standard",
      name: "Smart Standard",
      description: "Reliable and cost-effective international shipping solution with comprehensive tracking and support.",
      features: [
        "5-10 business days",
        "Full package insurance",
        "Bulk discounts available",
        "Customs clearance included",
        "Digital tracking updates",
        "Email notifications",
      ],
      icon: "truck",
      price: "From R149",
      popular: false,
    },
    {
      id: "domestic",
      name: "Local Pro", 
      description: "Fast and reliable nationwide delivery across all South African provinces with local expertise.",
      features: [
        "1-2 day delivery",
        "Multiple pickup points",
        "SMS & WhatsApp updates",
        "Competitive pricing",
        "Same-day available",
        "Local support team",
      ],
      icon: "globe",
      price: "From R59",
      popular: false,
    },
  ],

  // ========== COMPANY STATISTICS ==========
  stats: {
    packagesDelivered: "50K+",
    onTimeDelivery: "99.2%",
    serviceLocations: "15+", 
    customerSupport: "24/7",
    countriesServed: "8",
    yearlyGrowth: "300%",
  },

  // ========== SOCIAL MEDIA LINKS ==========
  // Update your social media URLs here
  socialLinks: [
    { platform: "instagram", url: "https://instagram.com/ahtobpostal", icon: "fab fa-instagram" },
    { platform: "facebook", url: "https://facebook.com/ahtobpostal", icon: "fab fa-facebook" },
    { platform: "twitter", url: "https://twitter.com/ahtobpostal", icon: "fab fa-twitter" },
    { platform: "linkedin", url: "https://linkedin.com/company/ahtobpostal", icon: "fab fa-linkedin" },
    { platform: "tiktok", url: "https://tiktok.com/@ahtobpostal", icon: "fab fa-tiktok" },
  ],

  // ========== WEBSITE NAVIGATION ==========
  footerLinks: {
    quickLinks: [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "Track Package", href: "/tracking" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "Lightning Express", href: "/services#express" },
      { name: "Smart Standard", href: "/services#standard" },
      { name: "Local Pro", href: "/services#domestic" },
      { name: "Business Solutions", href: "/services#business" },
      { name: "Packaging Help", href: "/services#packaging" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Shipping Calculator", href: "/calculator" },
      { name: "Service Areas", href: "/areas" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  },

  // ========== COMPANY VALUES & MISSION ==========
  mission: "To revolutionize postal services through innovation, technology, and exceptional customer care.",
  vision: "Connecting South Africa to the world through next-generation logistics solutions.",
  
  values: [
    {
      title: "Innovation",
      description: "Embracing new technologies and creative solutions to improve every aspect of delivery.",
      icon: "lightbulb",
    },
    {
      title: "Reliability", 
      description: "Consistent, dependable service that customers can trust with their most important packages.",
      icon: "shield-check",
    },
    {
      title: "Speed",
      description: "Fast, efficient delivery without compromising on safety or care.",
      icon: "clock",
    },
    {
      title: "Customer Focus",
      description: "Every decision is made with our customers' needs and satisfaction in mind.",
      icon: "heart",
    },
  ],

  // ========== TESTIMONIALS ==========
  testimonials: [
    {
      name: "Henroux Roux",
      role: "Local Cutie Pie",
      content: "AHTOB Sent my package to IRELAND and the recipient got the package the same day!",
      rating: 5,
    },
    {
      name: "Tyhkon", 
      role: "RC Plane Flyer",
      content: "I heard a rumor that FatFuck checks and seals each package before delivery. GREAT SERVICE",
      rating: 5,
    },
    {
      name: "Lourens (Real Fat Butt)",
      role: "J*bless", 
      content: "Highly recommend. Can't complain. FatFuck does not dissapoint neither does AHTOB Postal Services. 100/100. Makes me want a hotdog real bad",
      rating: 6,
    },
  ],

  // ========== FEATURES & BENEFITS ==========
  features: {
    tracking: "Real-time GPS tracking with live updates",
    insurance: "Full insurance coverage on all packages",
    support: "24/7 customer support via chat, email, and phone",
    pickup: "Free pickup service for business customers",
    packaging: "Professional packaging services available",
    customs: "Full customs clearance and documentation support",
  },
};
