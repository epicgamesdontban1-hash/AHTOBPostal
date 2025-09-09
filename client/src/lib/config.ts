export const companyConfig = {
  name: "AHTOB",
  fullName: "AHTOB Postal Services",
  tagline: "Professional Postal & Delivery Services",
  description: "Professional international postal and delivery services from South Africa to the world with modern logistics solutions and professional service.",
  
  contact: {
    phone: "+27 12 123 4567",
    email: "info@ahtobpostal.co.za",
    address: {
      street: "123 Centurion Drive",
      city: "Centurion",
      state: "Gauteng",
      zip: "0157",
    },
  },

  locations: [
    {
      name: "Main Office",
      address: "123 Centurion Drive, Centurion, Gauteng 0157",
      phone: "+27 12 123 4567",
      hours: "Mon-Fri: 8AM-5PM, Sat: 8AM-12PM",
    },
    {
      name: "Pretoria Branch",
      address: "456 Church Street, Pretoria, Gauteng 0001",
      phone: "+27 12 456 7890",
      hours: "Mon-Fri: 8AM-5PM, Sat: 8AM-12PM",
    },
    {
      name: "Johannesburg Branch", 
      address: "789 Commissioner Street, Johannesburg, Gauteng 2001",
      phone: "+27 11 789 0123",
      hours: "Mon-Fri: 8AM-5PM, Sat: 8AM-12PM",
    },
    {
      name: "Cape Town Branch",
      address: "321 Long Street, Cape Town, Western Cape 8001",
      phone: "+27 21 321 4567",
      hours: "Mon-Fri: 8AM-5PM, Sat: 8AM-12PM",
    },
  ],

  serviceAreas: [
    "United Kingdom",
    "Finland", 
    "South Africa",
    "Ireland",
  ],

  services: [
    {
      id: "express",
      name: "Express International",
      description: "Fast international delivery to UK, Finland, Ireland in 3-5 days",
      features: [
        "3-5 day delivery",
        "Real-time tracking",
        "Signature confirmation",
        "Door-to-door service",
      ],
      icon: "bolt",
    },
    {
      id: "standard",
      name: "Standard International",
      description: "Cost-effective international shipping with reliable delivery",
      features: [
        "7-14 business days",
        "Full package insurance",
        "Bulk discounts available",
        "Customs clearance included",
      ],
      icon: "truck",
    },
    {
      id: "domestic",
      name: "Domestic South Africa",
      description: "Nationwide delivery across all South African provinces",
      features: [
        "1-3 day delivery",
        "Local pickup points",
        "SMS notifications",
        "Competitive pricing",
      ],
      icon: "globe",
    },
  ],

  stats: {
    packagesDelivered: "250K+",
    onTimeDelivery: "98.2%", 
    serviceLocations: "25+",
    customerSupport: "Business Hours",
  },

  socialLinks: [
    { platform: "facebook", url: "#", icon: "fab fa-facebook" },
    { platform: "twitter", url: "#", icon: "fab fa-twitter" },
    { platform: "linkedin", url: "#", icon: "fab fa-linkedin" },
  ],

  footerLinks: {
    quickLinks: [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "Track Package", href: "/tracking" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "Express Delivery", href: "/services" },
      { name: "Standard Shipping", href: "/services" },
      { name: "International", href: "/services" },
      { name: "Business Solutions", href: "/services" },
      { name: "Packaging Services", href: "/services" },
    ],
    support: [
      { name: "Help Center", href: "/support" },
      { name: "Shipping Calculator", href: "/calculator" },
      { name: "Service Areas", href: "/areas" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  },
};
