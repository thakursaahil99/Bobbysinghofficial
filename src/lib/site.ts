export const site = {
  name: "Bobby Singh",
  kicker: "Contract Kitchen & Café Expert",
  role: "Managing Director, Red Bean Hospitality",
  url: "https://bobbysingh.in",
  description:
    "Bobby Singh, Managing Director of Red Bean Hospitality — 20 years running institutional kitchens and cafés across India, and training the entrepreneurs doing the same.",
  email: "bobbysingh@redbeanhospitality.com",
  phones: ["+91 97804 55646", "+91 96468 89988"],
  phonePrimaryTel: "+919780455646",
  company: "Redbean Hospitality Pvt. Ltd",
  companySite: "https://www.redbeanhospitality.com",
  address: {
    lines: [
      "SCO 526, 527, 528, 2nd Floor",
      "TDI Taj Plaza, Sector 118",
      "Sahibzada Ajit Singh Nagar, Punjab 160055",
    ],
  },
  hours: "Mon–Fri, 9 AM – 6 PM IST",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/bobby-singh-hospital-in-house-kitchen-and-cafe-management-944893189/",
    },
    { label: "Instagram", href: "https://instagram.com/bobbysingh000646" },
    { label: "YouTube", href: "https://youtube.com/@RedbeanHospitality" },
    { label: "Facebook", href: "https://www.facebook.com/bobby.singh.252549/" },
  ],
};

export const nav = [
  { label: "Vision", href: "/vision" },
  {
    label: "Consultancies",
    href: "/consultancies",
    children: [
      { label: "Healthcare", href: "/consultancies/healthcare" },
      { label: "Cafés & Restaurants", href: "/consultancies/cafes" },
      { label: "Corporate", href: "/consultancies/corporate" },
      { label: "Institutions", href: "/consultancies/institutions" },
    ],
  },
  { label: "IFO", href: "/ifo" },
  { label: "Events & Media", href: "/events-media" },
  { label: "Achievements", href: "/achievements" },
];

export const consultancySlugs = [
  "healthcare",
  "cafes",
  "corporate",
  "institutions",
] as const;
