export type Consultancy = {
  slug: string;
  kicker: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  image: string;
  stats: { value: string; label: string }[];
  leadTitle: string;
  leadBody: string;
  leadPoints: { title: string; body: string }[];
  expertiseTitle: string;
  expertiseIntro: string;
  expertise: string[];
  servicesIntro: string;
  services: { title: string; body: string }[];
  statement: string;
  testimonials: string[];
};

export const consultancies: Record<string, Consultancy> = {
  healthcare: {
    slug: "healthcare",
    kicker: "Healthcare F&B",
    title: "Hospital kitchens, run to standard.",
    metaTitle: "Healthcare F&B Consulting",
    metaDescription:
      "Hospital kitchen management for 100+ facilities across 45+ cities — menu planning, staffing, equipment and NABH compliance, with up to 50% cost reduction.",
    intro:
      "Since 2005, Red Bean has run patient nutrition and hospital food operations for 100+ facilities across 45+ cities. End-to-end hospital kitchen management — menu planning, staffing, equipment, compliance — with up to 50% cost reduction and stronger NABH performance, from Kashmir to Chennai.",
    image: "/images/kitchen.webp",
    stats: [
      { value: "45+", label: "Cities served" },
      { value: "100+", label: "Hospital partners" },
      { value: "20+", label: "Years experience" },
      { value: "1,000+", label: "Projects completed" },
    ],
    leadTitle: "Healthcare F&B leadership",
    leadBody:
      "Leading the transformation of hospital food services and kitchen operations — innovative solutions, strict compliance and patient-centred care across India's healthcare landscape.",
    leadPoints: [
      {
        title: "Red Bean Hospitality, founded 2005",
        body: "Built from the ground up to serve 100+ hospitals nationwide.",
      },
      {
        title: "NABH & HACCP compliance",
        body: "Ensuring the highest standards of food safety and quality.",
      },
      {
        title: "Training programs",
        body: "Developing skilled healthcare F&B professionals.",
      },
    ],
    expertiseTitle: "Specialised healthcare solutions",
    expertiseIntro:
      "Comprehensive expertise in healthcare food-service management, compliance and operational excellence.",
    expertise: [
      "Fresh & hygienic standards",
      "Menu planning & management",
      "Infrastructure planning",
      "Quality & quantity control",
      "Manpower management",
      "Inventory management",
      "Vendor management",
      "Profit & loss management",
      "Kitchen operations",
      "Hospital income growth",
      "Customer satisfaction",
      "24/7 food support",
      "Timely delivery",
      "Experienced staff",
      "Diet-service monitoring",
      "Feedback analysis",
      "NABH compliance",
      "HACCP & food safety",
      "Staff training",
    ],
    servicesIntro:
      "Comprehensive healthcare F&B solutions serving patients, staff and visitors with NABH-compliant quality standards across every dining requirement.",
    services: [
      {
        title: "Patient meals",
        body: "Therapeutic, nutrition-therapy-compliant meal plans with customised dietary requirements and portion control for recovery.",
      },
      {
        title: "Attendant meals",
        body: "Affordable, wholesome meal options for attendants and caregivers, available 24/7 with budget-friendly pricing.",
      },
      {
        title: "Hospital staff dining",
        body: "Shift-based meal timings, healthy menu options and subsidised rates for healthcare workers.",
      },
      {
        title: "Doctors & management dining",
        body: "Premium dining for medical professionals and management — executive plans, private dining and gourmet menus.",
      },
      {
        title: "Cafeteria & kiosk",
        body: "Full-service cafeteria and kiosk operations — snacks, beverages, quick meals and grab-and-go for visitors and staff.",
      },
      {
        title: "Events & health-check catering",
        body: "Catering for hospital events, health camps, medical seminars and celebrations with customised menu planning.",
      },
      {
        title: "Medical & nursing college messes",
        body: "Complete mess management — hostel dining, student meal plans and faculty dining for future healthcare professionals.",
      },
    ],
    statement:
      "A hospital kitchen is a clinical system that happens to serve meals. We run it like one.",
    testimonials: [
      "Success in Hospital Kitchens & Cafés — Gurmeet Singh",
      "7 Years of Success in Hospital Kitchens & Cafés — Gaurav Bhayana",
      "A Successful Hospital Kitchen & Café in Haridwar — Rohit Gohar",
    ],
  },

  cafes: {
    slug: "cafes",
    kicker: "Café & Restaurant",
    title: "From concept to a café that pays for itself.",
    metaTitle: "Café & Restaurant Setup",
    metaDescription:
      "500+ cafés, restaurants and outlets set up across 35+ cities — site selection, kitchen design, menu development, franchise models and the ROI discipline that keeps them open.",
    intro:
      "500+ cafés, restaurants and outlets set up across 35+ cities. Location and site selection, kitchen design, menu development, staff training, franchise models — and the ROI discipline that keeps them open.",
    image: "/images/kitchen.webp",
    stats: [
      { value: "500+", label: "Cafés established" },
      { value: "35+", label: "Cities covered" },
      { value: "15+", label: "Years experience" },
      { value: "2,000+", label: "Staff trained" },
    ],
    leadTitle: "Café business leadership",
    leadBody:
      "Turning café ideas into profitable businesses through clear concepts, strategic planning and operational discipline across India's food-service landscape.",
    leadPoints: [
      {
        title: "500+ café establishments",
        body: "From concept to grand opening, across every format.",
      },
      {
        title: "Franchise-model development",
        body: "Scalable business models built for repeatable expansion.",
      },
      {
        title: "ROI-focused strategies",
        body: "Proven profitability models with optimised operations.",
      },
    ],
    expertiseTitle: "Comprehensive café solutions",
    expertiseIntro:
      "End-to-end café development covering every part of building a food-service business that lasts.",
    expertise: [
      "Concept development",
      "Menu design & engineering",
      "Kitchen layout & equipment",
      "Brand identity & interiors",
      "Recruitment & training",
      "POS system integration",
      "Inventory systems",
      "Cost control & pricing",
      "Customer-experience design",
      "Digital & social marketing",
      "Quality-control standards",
      "Supplier sourcing",
      "Financial planning & ROI",
      "Site selection",
      "Workflow optimisation",
      "Customer-feedback systems",
      "Health & safety compliance",
      "Multi-outlet expansion",
    ],
    servicesIntro:
      "Complete café and restaurant development — from concept design to profitable operations, with ongoing support and growth strategy.",
    services: [
      {
        title: "Coffee shop & café setup",
        body: "Complete establishment from concept to opening — equipment, layout, menu development and staff training for specialty coffee and food service.",
      },
      {
        title: "Kiosk & quick-service outlets",
        body: "Compact solutions for high-traffic areas — mobile kiosks, food courts and quick-service setups with optimised space and fast service.",
      },
      {
        title: "Restaurant & fine-dining setup",
        body: "Full-service development — kitchen design, menu curation, service training, ambience and operational systems.",
      },
      {
        title: "Franchise development & support",
        body: "Standardised operations, training programs, brand guidelines and ongoing support for scalable growth.",
      },
      {
        title: "24/7 operations management",
        body: "Round-the-clock operations — shift management, late-night menus and continuous service for airports, hospitals and commercial spaces.",
      },
      {
        title: "Business optimisation & growth",
        body: "Performance analysis, revenue enhancement, cost reduction, customer retention and expansion planning for existing cafés.",
      },
      {
        title: "Staff training & development",
        body: "Barista skills, customer service, food safety, POS operations and management development for teams at every level.",
      },
    ],
    statement:
      "The difference between a café that closes in a year and one that scales is the maths behind the menu.",
    testimonials: [
      "Success in Café Business with Expert Guidance",
      "Franchise Model Success — Multi-outlet Café Chain",
      "Premium Coffee Shop Setup & Operations Excellence",
    ],
  },

  corporate: {
    slug: "corporate",
    kicker: "Corporate Food Service",
    title: "Workplace dining that people actually use.",
    metaTitle: "Corporate Food Service",
    metaDescription:
      "150+ corporate clients across 25+ cities, serving 100,000+ employees a day — cafeterias, executive dining, wellness programs and per-employee cost control.",
    intro:
      "150+ corporate clients across 25+ cities, serving 100,000+ employees a day. Employee cafeterias, executive dining, wellness programs and per-employee cost control — dining that supports the workday instead of interrupting it.",
    image: "/images/cgr-2.webp",
    stats: [
      { value: "150+", label: "Corporate clients" },
      { value: "25+", label: "Cities served" },
      { value: "20+", label: "Years experience" },
      { value: "100,000+", label: "Employees served" },
    ],
    leadTitle: "Corporate food-service leadership",
    leadBody:
      "Improving workplace dining with food-service solutions that lift employee satisfaction, productivity and culture — without losing control of cost.",
    leadPoints: [
      {
        title: "150+ corporate clients",
        body: "From startups to Fortune 500 companies.",
      },
      {
        title: "Cost optimisation",
        body: "Reducing food-service cost while improving quality.",
      },
      {
        title: "Employee-satisfaction focus",
        body: "Strengthening workplace culture through the food experience.",
      },
    ],
    expertiseTitle: "Comprehensive corporate solutions",
    expertiseIntro:
      "Full corporate food-service expertise — employee dining, executive services, cost optimisation and workplace wellness.",
    expertise: [
      "Cafeteria management",
      "Executive dining",
      "Office catering",
      "Business-park food courts",
      "Employee wellness programs",
      "Conference & meeting catering",
      "Multi-location service",
      "Branded outlet setup",
      "Pantry & break-room management",
      "Healthy menu development",
      "Cost-per-employee optimisation",
      "Food safety & compliance",
      "Vendor-management systems",
      "Technology integration",
      "Employee-satisfaction programs",
      "Corporate event catering",
      "Nutritional counselling",
      "Sustainability initiatives",
      "Flexible meal plans",
      "Quality-assurance programs",
    ],
    servicesIntro:
      "Corporate food services designed to raise employee satisfaction, productivity and culture while keeping cost under control.",
    services: [
      {
        title: "Cafeteria setup & management",
        body: "Complete solutions — kitchen design, equipment, menu planning, staffing and daily operations for offices and business parks.",
      },
      {
        title: "Executive & VIP dining",
        body: "Premium dining for executives and VIP clients — private rooms, gourmet menus, personalised service and high-end catering.",
      },
      {
        title: "Employee food & wellness programs",
        body: "Meal programs focused on nutrition and wellness — subsidised meals, healthy options and dietary accommodation.",
      },
      {
        title: "Event & conference catering",
        body: "Catering for meetings, conferences, seminars and special occasions with customised menus and seamless delivery.",
      },
      {
        title: "24/7 multi-shift dining",
        body: "Round-the-clock service for multi-shift companies — night-shift meals, grab-and-go and flexible schedules.",
      },
      {
        title: "Cost optimisation & ROI programs",
        body: "Strategic cost management — per-employee analysis and budget planning that protect quality.",
      },
      {
        title: "Technology-enabled services",
        body: "Mobile apps, digital ordering, cashless payments and analytics for efficiency and a better user experience.",
      },
    ],
    statement:
      "Good workplace food is quiet infrastructure — people only notice it when it's wrong.",
    testimonials: [
      "Corporate Food Service Transformation",
      "Employee Satisfaction Through Food Services — Case Study",
      "Executive Dining Solutions & Premium Service Excellence",
    ],
  },

  institutions: {
    slug: "institutions",
    kicker: "Institution Food Services",
    title: "Feeding a campus, three times a day.",
    metaTitle: "Institution Food Services",
    metaDescription:
      "200+ educational institutions across 40+ cities, 50,000+ students fed daily — mess management, hostel dining, campus cafeterias and nutrition programs at scale.",
    intro:
      "200+ educational institutions across 40+ cities, 50,000+ students fed daily. Mess management, hostel dining, campus cafeterias and nutrition programs — large-scale meal production that still meets a nutrition standard and a budget.",
    image: "/images/misc-1.jpg",
    stats: [
      { value: "200+", label: "Institutions served" },
      { value: "40+", label: "Cities covered" },
      { value: "18+", label: "Years experience" },
      { value: "50,000+", label: "Students fed daily" },
    ],
    leadTitle: "Educational food-service leadership",
    leadBody:
      "Leading the transformation of institutional food services with a focus on nutrition, sustainability and student satisfaction across India's educational landscape.",
    leadPoints: [
      {
        title: "200+ institutions served",
        body: "From schools to universities across India.",
      },
      {
        title: "Nutritional-compliance expertise",
        body: "Balanced nutrition for growing students.",
      },
      {
        title: "Cost-effective solutions",
        body: "Budget-friendly programs without compromising quality.",
      },
    ],
    expertiseTitle: "Specialised institutional solutions",
    expertiseIntro:
      "Comprehensive expertise in large-scale food-service management, nutritional planning and institutional dining operations.",
    expertise: [
      "Mass meal planning & production",
      "Nutritional menu development",
      "Large-scale kitchen design",
      "Hostel mess management",
      "Canteen operations setup",
      "Food safety & hygiene",
      "Cost-effective meal solutions",
      "Student dietary requirements",
      "Bulk food procurement",
      "Kitchen-equipment planning",
      "Staff training & management",
      "Quality-control systems",
      "Waste-management solutions",
      "Budget planning & control",
      "Vendor-management systems",
      "Meal-distribution networks",
      "Nutritionist consultation",
      "Special-diet accommodations",
      "Event catering services",
      "Sustainable food practices",
    ],
    servicesIntro:
      "Food-service solutions for educational institutions with a focus on nutrition, cost-effectiveness and student satisfaction.",
    services: [
      {
        title: "Mess management",
        body: "For schools, colleges and universities — menu planning, kitchen operations, student meal plans and nutritional compliance.",
      },
      {
        title: "Hostel & boarding food services",
        body: "For residential institutions — 24/7 meal services, dietary accommodations, festival menus and cost-effective nutrition.",
      },
      {
        title: "University campus dining",
        body: "Multi-format dining for campuses — cafeterias, food courts, faculty dining and event catering with diverse menus.",
      },
      {
        title: "Training-institute catering",
        body: "For professional training institutes and coaching centres — flexible meal plans and conference catering.",
      },
      {
        title: "Government-institution food services",
        body: "For administrative offices and public-sector organisations — compliance standards and budget-friendly programs.",
      },
      {
        title: "Nutritional compliance & health programs",
        body: "Balanced diets, health monitoring and dietary compliance for different age groups and institutional needs.",
      },
      {
        title: "Large-scale event catering",
        body: "For convocations, conferences and cultural programs — scalable service delivery with quality assurance.",
      },
    ],
    statement:
      "Fifty thousand students, a fixed budget, and a nutrition standard that can't move. That's the brief.",
    testimonials: [
      "Success in Educational Institution Food Services",
      "Hostel Mess Management Excellence — Large-Scale Operations",
      "University Campus Dining & Student Satisfaction",
    ],
  },
};
