// ============================================
// Wanron Home Solutions — Static Site Content
// ============================================

export const NAV_LINKS = [
  { label: 'Home',         href: '#/',             page: 'home' },
  { label: 'About',        href: '#/about',        page: 'about' },
  { label: 'Services',     href: '#/services',     page: 'services' },
  { label: 'Projects',     href: '#/projects',     page: 'projects' },
  { label: 'Properties',   href: '#/properties',   page: 'properties' },
  { label: 'Insights',     href: '#/insights',     page: 'insights' },
  { label: 'Testimonials', href: '#/testimonials', page: 'testimonials' },
 
];

export const COMPANY = {
  name:       'WANRON Home Solutions',
  tagline:    'Building Dreams through Construction',
  subTagline: 'Excellence in construction, renovation, and architectural design. We transform visions into reality since 2020.',
  founded:    2020,
  yearsExp:   '5+',
  phone:      '+254(721879675)',
  email:      'Waron2020@gmail.com',
  address:    'kenol, Muranga',
  whatsapp:   'https://wa.me/254721879675',
  facebook:   'https://www.facebook.com/WANRONHOMESOLUTION',
};

export const ABOUT_FEATURES = [
  { label: 'Property managment' },
  { label: 'General construction services' },
  { label: 'Architectural & structural designs' },
  { label: 'Free Consultation' },
];

export const SERVICES = [
  {
    id: 'commercial',
    title: 'Commercial Construction',
    description: 'High-performance office buildings and retail spaces designed for future growth.',
    icon: '🏢',
  },
  {
    id: 'residential',
    title: 'Residential Homes',
    description: 'Custom luxury homes built with attention to every architectural detail.',
    icon: '🏡',
  },
  {
    id: 'renovations & repairs',
    title: 'Renovations & Repairs',
    description: 'Transforming existing structures into modern, energy-efficient masterpieces.',
    icon: '🔨',
  },
  {
    id: 'property management',
    title: 'Property Management',
    description: 'Full lifecycle management from initial planning to final site inspection, and managment for existing properties',
    icon: '📋',
  },
  {
    id: 'Free Consultation',
    title: 'Free advice ',
    description: 'Offer top-level construction advice',
    icon: '💬',
  },
  {
    id: 'architecture & structural design',
    title: 'Architectural Design',
    description: 'Innovative blueprints that balance functionality with striking visual appeal.',
    icon: '📐',
  },
];

export const PROJECTS = [

  {
    id: 'horizon',
    title: 'Utawala Flats',
    category: 'Commercial',
    location: 'Utawala, Nairobi',
    year: '2020',
    projectvalue: '17M',
    description: 'A flat roofed appartment: 4 Floored Flat with 10 one bedrooms, 5 bedsitters & 4 shops',
    tags: ['Commercial'],
    image: '/photos/commercial/IMG-20260406-WA0024.jpg',
    featured: true,
  },
  {
    id: 'Small bungalow',
    title: 'Small bungalow',
    category: 'Residential',
    location: 'Olkarau, Nyandarua',
    year: '2024',
    projectvalue: '2.5M',
    description: 'Complete bungalow construction',
    tags: ['Residential'],
    image: '/photos/residentials/IMG-20260406-WA0103.jpg',
    featured: false,
  },


];

export const TESTIMONIALS = [
  {
    id:       'james',
    quote:    'Wanron Home Solutions exceeded all our expectations. Their commitment to quality materials made a huge difference in our project.',
    name:     'James Wilson',
    role:     'Commercial Homeowner',
    rating:   5,
  },
  {
    id:       'sarah',
    quote:    "The team's professionalism and attention to detail are unparalleled. They managed our residential project with zero delays and perfect precision.",
    name:     'Sarah Jenkins',
    role:     'Private Homeowner',
    rating:   5,
  },
  {
    id:       'robert',
    quote:    'Highly recommend for any large-scale commercial work. They are organized, communicative, and truly experts in their field.',
    name:     'Robert Chen',
    role:     'Property Manager',
    rating:   5,
  },
];

// ============================================
// ABOUT PAGE CONTENT
// ============================================

export const ABOUT_HERO = {
  eyebrow: 'About Wanron Home Solutions',
  heading: 'We Build More Than\nStructures — We Build Dreams',
  sub: 'For over 5 years, Wanron Home Solutions has been the cornerstone of quality construction, sustainable design, and architectural excellence. We don\'t just build buildings — we craft legacies.',
  image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85',
};

export const ABOUT_STATS = [
  { value: '5+', label: 'Years of Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '120+', label: 'Expert Team Members' },
];

export const ABOUT_STORY = {
  eyebrow: 'Our Story',
  heading: 'From Foundations to Skylines',
  subheading: 'About the company',
  subheading1: 'Company Mission',
  subheading2: 'Company vision',
  subheading3: 'Field of Operation',
  paragraphs: [
    'WANRON HOME SOLUTIONS LTD was registered on 8th October 2020 as a general company. Later ventured in to construction industry. It is a construction company registered with NCA6 certificate.',
    'To be the best, respectable building contractors who deliver the best to the clients.',
    'To perform for our clients the highest level of quality construction services at fair and market competitive prices. We design, process approvals and build homes to actualize your dreams.',
    'Wanron home solutions limited is registered with NCA (National construction Authority Kenya) to undertake buildings works. Currently it is limited to a scope of Kshs. 50 Millions.',
    
  ],
  image: '/photos/commercial/logo.jpeg',
};

export const LEGAL_DOCS = [
  {
    id: 'doc-cert',
    title: 'NCA Registration',
    caption: 'Official National Construction Authority certificate proving our registration and compliance.',
    image: '/photos/certs/NCA-reg.png',
  },
  {
    id: 'doc-permit',
    title: 'NCA Annual License',
    caption: 'Verified permit documentation for annual BUilding works',
    image: '/photos/certs/NCA-cert.png',
  },
  {
    id: 'doc-safety',
    title: 'Safety Compliance',
    caption: 'Evidence of site safety approvals and compliance statements for our projects.',
    image: '/photos/commercial/IMG-20260406-WA0076.jpg',
  },
  {
    id: 'address',
    title: 'Physical Address',
    caption: 'Our certificate for the redidential adderess',
    image: '/photos/certs/physical-address.png',
  },
   {
    id: 'Tax',
    title: 'Tax compliance',
    caption: 'Evidence that we are tax compliant',
    image: '/photos/certs/Tax-compliance.png',
  },
];

export const CORE_VALUES = [
  {
    id: 'integrity',
    icon: '🛡️',
    title: 'Integrity',
    description: 'We are transparent in every decision, from budgeting to timelines. Our word is our contract.',
  },
  {
    id: 'sustainability',
    icon: '🌿',
    title: 'Sustainability',
    description: 'Every project considers its environmental footprint. We build for today without compromising tomorrow.',
  },
  {
    id: 'excellence',
    icon: '⭐',
    title: 'Excellence',
    description: 'We don\'t settle for good enough. Every detail, joint, and finish is held to the highest standard.',
  },
  {
    id: 'innovation',
    icon: '💡',
    title: 'Innovation',
    description: 'We embrace new materials, methods, and technologies to deliver smarter, more efficient builds.',
  },
];

export const TEAM_MEMBERS = [
  {
    id: 'ceo',
    name: 'Ronald Wanyoike',
    role: 'Founder & CEO',
    bio: '30 years in construction. Passionate about architecture and community-centered design.',
    image: '/photos/commercial/Ceo.jpeg',
  },
  
];

// ============================================
// TESTIMONIALS PAGE CONTENT
// ============================================

export const TESTIMONIALS_HERO = {
  eyebrow: 'Client Stories',
  heading: 'What Our Clients\nSay About Us',
  sub: 'Don\'t take our word for it. Hear directly from the homeowners, businesses, and developers who have trusted Waron Home Solutions to bring their visions to life.',
};

export const TESTIMONIALS_EXTENDED = [
  {
    id: 'james',
    quote: 'Waron Home SOlutions exceeded all our expectations. Their commitment to sustainability and quality materials made a huge difference in our project. From groundbreaking to ribbon-cutting, the experience was seamless.',
    name: 'James Wilson',
    role: 'Commercial Homeowner',
    company: 'TechCore Solutions',
    project: 'Horizon Business Park',
    rating: 5,
    category: 'Commercial',
  },
  {
    id: 'sarah',
    quote: "The team's professionalism and attention to detail are unparalleled. They managed our residential project with zero delays and perfect precision. Our dream home became a reality, exactly as we envisioned.",
    name: 'Sarah Jenkins',
    role: 'Private Homeowner',
    company: '',
    project: 'The Glass House',
    rating: 5,
    category: 'Residential',
  },
  {
    id: 'robert',
    quote: 'Highly recommend for any large-scale commercial work. They are organized, communicative, and truly experts in their field. The project came in on time and 5% under budget — unheard of in this industry.',
    name: 'Robert Chen',
    role: 'Property Manager',
    company: 'Prestige Holdings',
    project: 'Prestige Office Tower',
    rating: 5,
    category: 'Commercial',
  },
  {
    id: 'fatima',
    quote: 'We hired GreenBuild for a full renovation of our retail space. The result was breathtaking — modern, functional, and delivered in record time. Our sales went up 40% after reopening.',
    name: 'Fatima Al-Rashid',
    role: 'Director',
    company: 'Nexus Retail Group',
    project: 'Nexus Flagship Store',
    rating: 5,
    category: 'Renovation',
  },
  {
    id: 'tom',
    quote: "What sets Waron Home Solutions apart is their honesty. No surprise costs, no missed milestones. They flagged every potential issue early and resolved it before it became a problem. Exceptional team.",
    name: 'Tom Adeyemi',
    role: 'Director of Facilities',
    company: 'City Education Trust',
    project: 'Westfield Learning Centre',
    rating: 5,
    category: 'Public',
  },

];

export const TESTIMONIAL_STATS = [
  { value: '500+', label: 'Happy Clients' },
  { value: '4.9', label: 'Average Rating' },
  { value: '98%', label: 'Would Recommend' },
  { value: '12+', label: 'Industry Awards' },
];

export const TESTIMONIAL_CATEGORIES = ['All', 'Commercial', 'Residential', 'Renovation', 'Public'];


// ============================================
// SERVICES PAGE CONTENT
// ============================================

export const SERVICES_HERO = {
  eyebrow: 'What We Do',
  heading: 'Full-Spectrum\nConstruction Services',
  sub: 'From initial blueprint to final handover, Waron Home Solutions delivers every phase of construction with unmatched quality, precision, and care for sustainability.',
};

export const SERVICES_EXTENDED = [
  {
    id: 'commercial',
    title: 'Commercial Construction',
    tagline: 'High-performance spaces built for scale',
    description: 'We design and build office towers, retail complexes, and industrial facilities that support the ambitions of growing businesses. Every commercial project is delivered on schedule, within budget, and with energy efficiency at its core.',
    features: ['Office Buildings & Towers', 'Retail & Mixed-Use Developments', 'Industrial & Warehouse Facilities'],
    icon: '🏢',
    image: 'https://i.pinimg.com/1200x/bd/85/bc/bd85bc19bc3401394e233e58267c6943.jpg',
    stats: [{ value: '120+', label: 'Commercial Projects' }, { value: '98%', label: 'On-time Delivery' }],
  },
  {
    id: 'residential',
    title: 'Residential Homes',
    tagline: 'Your vision. Your space. Built to last.',
    description: 'Our residential team brings architectural vision to life with handcrafted detail. Whether a bespoke luxury home or a modern townhouse development, we build residences that reflect the people who live in them.',
    features: ['Custom Luxury Villas', 'Townhouse Developments', 'Mansions', 'Gated Community Builds'],
    icon: '🏠',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
    stats: [{ value: '200+', label: 'Homes Built' }, { value: '4.9★', label: 'Client Rating' }],
  },
  {
    id: 'renovations',
    title: 'Renovations & Refurbishments',
    tagline: 'Transforming the old into the extraordinary',
    description: 'Our renovation specialists breathe new life into existing structures — modernising layouts, upgrading systems, and refreshing aesthetics while preserving what makes each space unique.',
    features: ['Full Interior Renovations', 'Structural Retrofits', 'Historical Restorations', 'Energy Efficiency Upgrades'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80',
    stats: [{ value: '150+', label: 'Renovations Done' }, { value: '60%', label: 'Avg Energy Saving' }],
    icon: '🔨',
  },
  {
    id: 'management',
    title: 'Project Management',
    tagline: 'End-to-end ownership, zero surprises',
    description: 'Our project management team oversees every element of the build lifecycle — from feasibility studies and procurement to scheduling, quality assurance, and final site inspection.',
    features: ['Feasibility & Cost Planning', 'Contractor Procurement', 'Schedule & Risk Management', 'Defect Liability & Handover'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    stats: [{ value: '500+', label: 'Projects Managed' }, { value: '<1%', label: 'Budget Variance' }],
  },
  {
    id: 'construction services',
    title: 'Other Construction Services',
    tagline: 'We dont just build we create',
    description: '',
    features: ['Plumbing', 'Electrical Installation', 'Tiling'],
    image: 'https://i.pinimg.com/736x/af/3a/bd/af3abdcde2f0de641a26a127d93991a7.jpg',
    stats: [{ value: '200+', label: 'Services completed' }, { value: '100%', label: 'Approval rate' }],
    icon: '🔧',
  },
  {
    id: 'architecture',
    title: 'Architectural Design',
    tagline: 'Blueprints that balance beauty and function',
    description: 'Our in-house architects collaborate closely with clients from concept to completion — crafting designs that are not just structurally sound, but genuinely inspiring.',
    features: ['Concept & Schematic Design', '3D Visualisation & BIM Modelling', 'Planning & Regulatory Approvals', 'Interior Architecture'],
    icon: '📐',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80',
    stats: [{ value: '80+', label: 'Designs Done' }, { value: '100%', label: 'Approval Rate' }],
  },
    {
    id: 'bills',
    title: 'Bills of Quantities',
    tagline: 'Precision in planning, clarity in costing',
    description: 'We provide detailed Bills of Quantities that clearly outline all materials, labor, and costs involved in your construction project helping you plan accurately, control budgets, and avoid unexpected expenses.',
    features: ['Labour Costing', 'Value Engineering', 'Cost Planning & Estimation', 'Material Quantification', 'Procurement Support'],
    icon: '📊',
    image: 'https://worldestimating.com/wp-content/uploads/2020/02/Estimating-Construction-Costs-Techniques.jpg.webp',
    stats: [{ value: '30%', label: 'Cost Savings' }, { value: '100%', label: 'Budget Transparency' }],
  },
    {
    id: 'Materials',
    title: 'Material Scheduling',
    tagline: 'Right materials, right time, zero delays.',
    description: 'We plan and schedule the delivery of materials to match your construction timeline ensuring efficiency, reducing waste, and preventing costly project delays.',
    features: ['Material Planning', 'Delivery Scheduling', 'Inventory Management', 'Waste Reduction'],
    icon: '📅',
    image: 'https://i.pinimg.com/736x/e2/7f/f1/e27ff1f756eec6dc1978189fefb9ef42.jpg',
    stats: [{ value: 'Up to 20%', label: 'Reduction in Project Delays' }, { value: '15% - 20 %', label: 'Reduced Material Waste' }],
  },
    {
    id: 'property',
    title: 'Property Matters',
    tagline: 'Secure deals, smart investments.',
    description: 'We buy & sell land, our processes are diligent and transparent ensuring safe, profitable, hassle-free property transactions',
    features: ['Property Sourcing', 'Market Analysis', 'Title Processing', 'Valuation Support', 'Transaction Management', 'Site Visits'],
    icon: '📍',
    image: 'https://i.pinimg.com/1200x/74/3e/a2/743ea2782fe4b807103308fb203acc91.jpg',
    stats: [{ value: '100%', label: 'Verified Transactions' }, { value: '10x', label: 'Faster Deal Closure' }],
  },
      {
    id: 'Renting',
    title: 'Renting Premises',
    tagline: 'Find the right space, hassle-free.',
    description: 'We help you find and secure the ideal residential or commercial space, handling everything from search to agreements for a smooth and stress-free rental experience',
    features: ['Property Search', 'Site Visits', 'Tenant Advisory', 'Landlord Coordination'],
    icon: '🔑',
    image: 'https://i.pinimg.com/736x/38/3a/58/383a58316bbce681fe8a799fd873838b.jpg',
    stats: [{ value: '10x', label: 'Fast Property Matching' }, { value: '100%', label: 'Stress-Free Process' }],
  },
      {
    id: 'Expert',
    title: 'Free Consultation & Advice',
    tagline: 'Expert guidance, at no cost.',
    description: 'We offer free professional advice to help you make informed decisions on construction, property, and project planning—giving you clarity before you commit',
    features: ['Project Consultation', 'Cost Advice', 'Title Processing', 'Property Guidance', 'Risk Assessment', 'Solution Recommendations', 'Technical Advice'],
    icon: '💬',
    image: 'https://i.pinimg.com/736x/e2/2b/9f/e22b9fddff933ea72ac4f5d1c8b6f3e5.jpg',
    stats: [{ value: '0$', label: 'Consultation Fees' }],
  },
];

export const SERVICES_PROCESS = [
  { step: '01', title: 'Consultation', description: 'We start with a deep discovery session to understand your goals, budget, and vision.' },
  { step: '02', title: 'Design & Planning', description: 'Our architects and engineers develop detailed plans, 3D models, and cost estimates.' },
  { step: '03', title: 'Approvals', description: 'We handle all planning permissions, regulatory submissions, and stakeholder sign-offs.' },
  { step: '04', title: 'Construction', description: 'Our skilled teams build with precision, with weekly progress reports keeping you informed.' },
  { step: '05', title: 'Quality & Inspection', description: 'Rigorous quality checks at every milestone ensure zero defects at handover.' },
  { step: '06', title: 'Handover & Support', description: 'We deliver your completed project and provide ongoing aftercare support.' },
];

// ============================================
// PROJECTS PAGE CONTENT
// ============================================

export const PROJECTS_HERO = {
  eyebrow: 'Our Portfolio',
  heading: 'Work That Speaks\nFor Itself',
  sub: 'From commercial campuses to custom residences, browse our portfolio of completed projects — each one a testament to our commitment to quality and precision.',
};

export const PROJECTS_CATEGORIES = ['All', 'Commercial', 'Residential', 'Renovation', 'Sustainable'];

export const PROJECTS_EXTENDED = [
  {
    id: 'horizon',
    title: 'Utawala Flats',
    category: 'Commercial',
    location: 'Utawala, Nairobi',
    year: '2020',
    projectvalue: '17M',
    description: 'A flat roofed appartment: 4 Floored Flat with 10 one bedrooms, 5 bedsitters & 4 shops',
    tags: ['Commercial'],
    image: '/photos/commercial/IMG-20260406-WA0024.jpg',
    featured: true,
  },
  {
    id: 'corton ridge',
    title: 'Flat-roofed Morden home',
    category: 'Residential',
    location: 'Kenyatta Road Corton Ridge',
    year: '2022',
    projectvalue: '12.5M',
    description: 'Ultra-modern flat roofed home',
    tags: ['Luxury', 'Residential'],
    image: '/photos/residentials/IMG-20260406-WA0073.jpg',
    featured: true,
  },
  {
    id: 'Small bungalow',
    title: 'Small bungalow',
    category: 'Residential',
    location: 'Olkarau, Nyandarua',
    year: '2024',
    projectvalue: '2.5M',
    description: 'Complete bungalow construction',
    tags: ['Residential'],
    image: '/photos/residentials/IMG-20260406-WA0103.jpg',
    featured: false,
  },
  {
    id: 'Massionate',
    title: 'Massionate',
    category: 'Residential',
    location: 'Kabete, Kiambu',
    year: '2022',
    projectvalue: '11.9M',
    description: '4 bedroomed massionate.',
    tags: ['Residential', ''],
    image: '/photos/residentials/IMG-20260406-WA0085.jpg',
    featured: false,
  },
  {
    id: 'eco-residence',
    title: 'Kenol Flat',
    category: 'Commercial',
    location: 'Kenol, Muranga',
    year: 'Oct 2017 - July 2018',
    projectvalue: '7.9M',
    description: 'A 6 unit flat',
    tags: ['Eco', 'Commercial'],
    image: '/photos/commercial/IMG-20260406-WA0018.jpg',
    featured: false,
  },
  {
    id: 'renov',
    title: 'Flat at Gitaru',
    category: 'Renovation',
    location: 'Gitaru, Kabete',
    year: 'April & May 2025',
    projectvalue: '2.7M',
    description: 'Adding a floor and general rennovations',
    tags: ['Commercial', 'Renovation'],
    image: '/photos/commercial/IMG-20260406-WA0076.jpg',
    featured: true,
  },
   {
    id: 'maissonate',
    title: '5 bedroom Maisonette',
    category: 'Residential',
    location: 'Githanji, Kenol Muranga',
    year: '2023',
    projectvalue: '10M',
    description: 'A spacious 5 bedroom Maisonette',
    tags: ['Residential'],
    image: '/photos/residentials/IMG-20260406-WA0095.jpg',
    featured: false,
  },
   {
    id: 'maissonatee',
    title: 'The Kimuka',
    category: 'Residential',
    location: 'Kajiado West, Kajiado',
    year: '2025',
    projectvalue: '11.07M',
    description: 'A spacious Maisonette',
    tags: ['Residential'],
    image: '/photos/residentials/Screenshot from 2026-04-07 17-42-07.png',
    featured: false,
  },
  {
    id: 'flatss',
    title: '4 floored flat with parking',
    category: 'Commercial',
    location: 'Kabati, Muranga',
    year: '2020',
    projectvalue: '18.5M',
    description: '4 floored flat with parking',
    tags: ['Commercial'],
    image: '/photos/commercial/Screenshot from 2026-04-07 17-46-45.png',
    featured: false,
  },
    {
    id: 'a maisonatte',
    title: 'Maisonette',
    category: 'Residential',
    location: 'Kenyatta Road Croton Ridge',
    year: 'Dec 2018 - Dec 2019',
    projectvalue: '7.5M',
    description: '4 Bedroom Maisonette',
    tags: ['Residential'],
    image: '/photos/residentials/Screenshot from 2026-04-07 16-12-42.png',
    featured: false,
  },
   {
    id: 'Bungalow',
    title: 'Bungalow',
    category: 'Residential',
    location: 'Kenol, Kimorori',
    year: 'August 2019',
    projectvalue: '3.8M',
    description: '3 Bedroom Bungalow with store and lounge',
    tags: ['Residential'],
    image: '/photos/residentials/Screenshot from 2026-04-07 17-56-28.png',
    featured: false,
  },
   {
    id: '00',
    title: 'Customer sacco flat',
    category: 'Commercial',
    location: 'Githunguri, Utawala',
    year: '2026',
    projectvalue: '7.2M',
    description: 'Flat',
    tags: ['Commecrial'],
    image: '/photos/commercial/00.png',
    featured: true,
  },
  {
    id: '01',
    title: 'Peter\'s mansionatte',
    category: 'Residential',
    location: 'Kenol, Githanji',
    year: 'from 5th may 2025',
    projectvalue: '7.5M',
    description: '',
    tags: [''],
    image: '/photos/residentials/01.png',
    featured: false,
  },
  {
    id: '02',
    title: '',
    category: 'Commercial, on-going',
    location: 'Kenol Town',
    year: '',
    projectvalue: '',
    description: 'DESIGN: 18 one bedroom units, 4 Bedsitters and a parking',
    tags: [''],
    image: '/photos/commercial/03.png',
    featured: false,
  },
  {
    id: '04',
    title: 'Shops',
    category: 'Complete',
    location: 'Kabati,Zabka',
    year: '',
    projectvalue: '1.5M',
    description: '',
    tags: [''],
    image: '/photos/residentials/24.png',
    featured: false,
  },
  {
    id: '05',
    title: '',
    category: 'Ongoing',
    location: '',
    year: '',
    projectvalue: '1.5M',
    description: '',
    tags: [''],
    image: '/photos/commercial/05.png',
    featured: false,
  },
  {
    id: '07',
    title: 'Fahari residencies',
    category: '',
    location: '',
    year: '',
    projectvalue: '1.05M',
    description: '',
    tags: ['Almost complete'],
    image: '/photos/commercial/07.png',
    featured: false,
  },
  {
    id: '08',
    title: '3-Bedroom bungalow',
    category: '',
    location: '',
    year: '2024',
    projectvalue: '1.2M',
    description: '',
    tags: ['complete'],
    image: '/photos/residentials/23.png',
    featured: false,
  },
  {
    id: '09',
    title: 'Banda',
    category: 'Residential',
    location: 'Kenyatta Road',
    year: '',
    projectvalue: '1.1M',
    description: '',
    tags: [''],
    image: '/photos/residentials/09.png',
    featured: false,
  },
  {
    id: '10',
    title: ' 20-unit flats',
    category: 'Commercial',
    location: 'Kenol town. Muranga',
    year: 'April 2022',
    projectvalue: '25M',
    description: 'Falt with 20 units , one bedroomed with parking',
    tags: [''],
    image: '/photos/commercial/11.png',
    featured: false,
  },
  {
    id: '11',
    title: 'Shops',
    category: 'Commercial',
    location: 'Kabati, Muranga',
    year: '2022',
    projectvalue: '12M',
    description: '',
    tags: ['Complete'],
    image: '/photos/residentials/12.png',
    featured: false,
  },
  {
    id: '12',
    title: 'Misonette',
    category: '',
    location: 'Githanji Kenol, Muranga',
    year: '',
    projectvalue: '2.5M',
    description: '',
    tags: ['Complete'],
    image: '/photos/residentials/13.png',
    featured: false,
  },
   {
    id: '13',
    title: '',
    category: '',
    location: 'Kenol, Muranga',
    year: '',
    projectvalue: '25M - used 2.5',
    description: '8 ONE BEDROOMED UNITS AND TWO BEDSITTER UNITS PER FLOOR',
    tags: ['Ongoing'],
    image: '/photos/residentials/14.png',
    featured: false,
  },
   {
    id: '14',
    title: 'Excavation',
    category: '',
    location: 'Kabati, Muranga',
    year: '2021',
    projectvalue: '1.5M',
    description: '',
    tags: ['Complete'],
    image: '/photos/residentials/15.png',
    featured: false,
  },
   {
    id: '15',
    title: '',
    category: '',
    location: '',
    year: 'Jan 2021',
    projectvalue: '2.5M Ground floor',
    description: '',
    tags: [''],
    image: '/photos/residentials/16.png',
    featured: false,
  },
   {
    id: '16',
    title: 'Bungalow',
    category: 'Residential',
    location: 'Kenol, Muranga',
    year: '2020',
    projectvalue: '4M',
    description: 'Occupied',
    tags: [''],
    image: '/photos/residentials/17.png',
    featured: false,
  },
   {
    id: '17',
    title: '',
    category: 'Commercial',
    location: 'Utawala',
    year: '2020',
    projectvalue: '8.5M',
    description: '',
    tags: [''],
    image: '/photos/residentials/18.png',
    featured: false,
  },
   {
    id: '18',
    title: '',
    category: '',
    location: 'Kenyatta road cotton Ridge',
    year: 'Sept 2019',
    projectvalue: '8M',
    description: '',
    tags: [''],
    image: '/photos/residentials/20.png',
    featured: false,
  },
   {
    id: '19',
    title: '',
    category: 'Commercial',
    location: 'Juja Murera',
    year: 'March 2019 - Dec 2019',
    projectvalue: '7.9M',
    description: '',
    tags: [''],
    image: '/photos/residentials/22.png',
    featured: false,
  },

];


// ============================================
// PROPERTIES FOR SALE — PAGE CONTENT
// ============================================

export const PROPERTIES_HERO = {
  eyebrow: 'Properties for Sale',
  heading: 'Your Dream Property\nAwaits You',
  sub: 'Wanron Homes Solutions, developed homes and commercial spaces, built to our exacting standards and ready for you to move in.',
};

export const PROPERTIES_CATEGORIES = ['All', 'Residential', 'Commercial', 'Land'];

export const PROPERTIES_STATS = [
  { value: '6',  label: 'Active Listings' },
  { value: '10yr', label: 'Structural Warranty' },
  { value: '48hr', label: 'Viewing Response' },
];

export const PROPERTIES = [
  {
    id: 'prop-02',
    title: 'Land',
    category: 'Land',
    type: 'For Sale',
    location: 'Kenol Town',
    area: '50 * 100',
    description: 'Fertile Land',
    features: ['Electricity', 'Water', 'Schools', 'Hospitals', 'Tarmac Road', 'Police post'],
    tags: ['Land', 'Residential', 'Commercial'],
    image: 'https://imgs.search.brave.com/m9SBkBFowkvPbwk8qTrspeAEQKCINUcg5iA6dBkagGg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vaGFvLWZpbmRl/ci9pbWFnZS91cGxv/YWQvY19maWxsLHdf/MTAwMC9wcm9wZXJ0/aWVzL0ZCX0lNR18x/NjczMjc5NTQzNzEy/X29pZmRrMg',
    badge: 'Available',
    featured: true,
  },
  {
    id: 'prop-03',
    title: 'Land',
    category: 'Land',
    type: 'For Sale',
    location: 'Kenol Githanji',
    area: '40 * 80',
    description: 'Fertile Land',
    features: ['Electricity', 'Water', 'Schools', 'Hospitals', 'Tarmac Road', 'Police post'],
    tags: ['Land', 'Residential', 'Commercial'],
    image: 'https://imgs.search.brave.com/J0QhFgoiey9XcPKRuP93eamIbjVZh-A8JAKtX8_pdLY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcm9w/c2NvdXQuY28ua2Uv/c3RvcmFnZS9wcm9w/ZXJ0aWVzL2ZpbGVz/L2xhbmRzLXBsb3Rz/L3RodW1ibmFpbHMv/LWxhbmQtZm9yLXNh/bGUtaW4ta2Vub2wt/dG93bi1tdXJhbmdh/LW4ydm43LmpwZw',
    badge: 'Available',
    featured: true,
  },
  {
    id: 'prop-03',
    title: 'Land',
    category: 'Land',
    type: 'For Sale',
    location: 'Kabati, Methi',
    area: '50 * 100',
    description: 'Fertile Land',
    features: ['Electricity', 'Water', 'Schools', 'Hospitals', 'Tarmac Road', 'Police post'],
    tags: ['Land', 'Residential', 'Commercial'],
    image: 'https://imgs.search.brave.com/4NiTi5P00dfuNtM6s5cu3EnYbMd2uaks6vpAejD8_EA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcm9w/c2NvdXQuY28ua2Uv/c3RvcmFnZS9wcm9w/ZXJ0aWVzL2ZpbGVz/L2xhbmRzLXBsb3Rz/L3RodW1ibmFpbHMv/LWxhbmQtZm9yLXNh/bGUtaW4ta2FiYXRp/LWtlbm9sLXRvd24t/Mmp1a3QuanBn',
    badge: 'Available',
    featured: true,
  },
  {
    id: 'prop-04',
    title: 'Land',
    category: 'Land',
    type: 'For Sale',
    location: 'Kabati Town',
    area: '40 * 80',
    description: 'Fertile Land',
    features: ['Electricity', 'Water', 'Schools', 'Hospitals', 'Tarmac Road', 'Police post'],
    tags: ['Land', 'Residential', 'Commercial'],
    image: 'https://imgs.search.brave.com/vbgx2QOaYWx5BbUSLuOU-Lks5xztVdGWZmi_njWemLI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcm9w/c2NvdXQuY28ua2Uv/c3RvcmFnZS9wcm9w/ZXJ0aWVzL2ZpbGVz/L2xhbmRzLXBsb3Rz/L3RodW1ibmFpbHMv/LWthYmF0aS1sYW5k/LWZvci1zYWxlLTN1/ajB0LmpwZw',
    badge: 'Available',
    featured: true,
  },
  {
    id: 'prop-05',
    title: 'Land',
    category: 'Land',
    type: 'For Sale',
    location: 'Ithanga',
    area: '50 * 100',
    description: 'Fertile Land',
    features: ['Electricity', 'Water', 'Schools', 'Hospitals', 'Tarmac Road', 'Police post'],
    tags: ['Land', 'Residential', 'Commercial'],
    image: 'https://imgs.search.brave.com/s8ZgusJPo2ObnkMoo12Q_tCFKbt_ED5n38W82OOB5uY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a3VsdGFwcm9wZXJ0/aWVzLmNvbS9wdWJs/aWMvdXBsb2Fkcy9w/cm9wZXJ0eV9hdHRh/Y2htZW50L2F2YXRh/ci83MzEvSW1hZ2Vf/MS5qcGVn',
    badge: 'Available',
    featured: true,
  },
  {
    id: 'prop-06',
    title: 'Land',
    category: 'Land',
    type: 'For Sale',
    location: 'Makuyu',
    area: '50 * 100, Acres',
    description: 'Fertile Land',
    features: ['Electricity', 'Water', 'Schools', 'Hospitals', 'Tarmac Road', 'Police post'],
    tags: ['Land', 'Residential', 'Commercial'],
    image: 'https://imgs.search.brave.com/spfn1OX85zjteYiaE8dQF34CPTEL1Q0rZhjAFJvrIjw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vaGFvLWZpbmRl/ci9pbWFnZS91cGxv/YWQvY19maWxsLHdf/MTAwMC9wcm9wZXJ0/aWVzL0ZCX0lNR18x/NjgwNDczODU4MjA2/X2FmdjA0eg',
    badge: 'Available',
    featured: true,
  },
  {
    id: 'prop-07',
    title: 'Land',
    category: 'Land',
    type: 'For Sale',
    location: 'Green Park Kenol',
    area: '50 * 100',
    description: 'Fertile Land',
    features: ['Electricity', 'Water', 'Schools', 'Hospitals', 'Tarmac Road', 'Police post'],
    tags: ['Land', 'Residential', 'Commercial'],
    image: 'https://imgs.search.brave.com/1VXVhopQc4zUB3asp2C_DkRO0N4LVG_h_93kxtoQN6A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcm9w/c2NvdXQuY28ua2Uv/c3RvcmFnZS9wcm9w/ZXJ0aWVzL2ZpbGVz/L2xhbmRzLXBsb3Rz/L3RodW1ibmFpbHMv/LWxhbmQtZm9yLXNh/bGUtaW4ta2Vub2wt/aGEzZXcuanBn',
    badge: 'Available',
    featured: true,
  },
];

export const PROPERTY_PROCESS = [
  { step: '01', icon: '🔍', title: 'Browse & Shortlist',   desc: 'Explore our listings and save properties that match your needs and budget.' },
  { step: '02', icon: '📅', title: 'Book a Viewing',       desc: 'Schedule a private viewing with one of our property consultants within 48 hours.' },
  { step: '03', icon: '📋', title: 'Make an Offer',        desc: 'Submit your offer with our team guiding you on pricing, terms, and due diligence.' },
  { step: '04', icon: '✅', title: 'Complete & Move In',   desc: 'We handle all legal paperwork and title transfer. Move in with zero hassle.' },
];

export const FOOTER_LINKS = {
  quick: [
    { label: 'About Us',       href: '#/about' },
    { label: 'Our Services',   href: '#/services' },
    { label: 'Projects',       href: '#/projects' },
    { label: 'Properties',     href: '#/properties' },
    { label: 'Testimonials',   href: '#/testimonials' },
  ],
  services: [
    { label: 'Commercial',     href: '#/services' },
    { label: 'Residential',    href: '#/services' },
    { label: 'Renovations',    href: '#/services' },
    { label: 'Properties for Sale', href: '#/properties' },
  ],
};

export const Building_psychology = [
  {
    id: '1',
    title: 'Building is Complicated',
    description: 'Do not take it lightly. It requires expertise, updated information and skillful planning. Employ people who will help you achieve this dream.',
  },
  {
    id: '2',
    title: 'Building is a Draining Activity',
    description: 'The difference between leisure and building is that leisure is nice. Its pleasant now. Building on the other hand requires input and investment. But building will reward you more than leisure.',
  },
  {
    id: '3',
    title: 'You Need a Source of Income to Build',
    description: 'It does not matter how small or how big. You need money to build. So do your best to lower expenditure and to increase income so you can have room to build. There is never a perfect time to build. Just start.',
  },
  {
    id: '4',
    title: 'You will attract Jealous as you Build',
    description: 'There are some who will like you as long as you are like them or beneath their level. Unfortunately the moment you start building expect missiles. Ignore them and keep going.',
  },
  {
    id: '5',
    title: 'Being a Landlord is Emotional and Psychological',
    description: 'The day you will be a Landlord you will even change your step. This is a default setting. Be a good Landlord. Be humble and always respect your tenants. Don\'t be a rude Landlord.'

  },
  {
    id: '6',
    title: 'Build in Stages and in Season',
    description: 'Break your budget in Stages. Don\'t stress. When I was building my second house people stressed me. They kept saying I was late. By the time I finished building the people who said I was late where no where near me. Build at your level. You are not racing.'

  },
  {
    id: '7',
    title: 'Build for the Next Generation',
    description: 'Build something that your grand children will cherish.'

  },
  {
    id: '8',
    title: 'Protect Your Investment',
    description: 'Do things well and legally. Shortcuts always end in tears.'

  },
  {
    id: '9',
    title: 'Learn to take a Break',
    description: 'When you run out of money go and rest. Take as long as you need to. Just don\'t take forever.'

  },
  {
    id: '10',
    title: 'Build Your Best',
    description: 'Just do it.'

  },
  {
    id: '11',
    title: 'Make Money',
    description: 'Your Property will appreciate in value and you will make money. Simple.'

  },
  {
    id: '12',
    title: 'Don\'t Stop Building',
    description: ''

  },
];

export const Mansionetee = [
  {
    id: '1',
    title: 'Modern Massionate',
    photo: '/photos/commercial/mansionate.png',
    description: 'A five bedroomed Maisonette\'s construction price is determined by the materials to be used, finishes and accompanying facilities like this SQ. At Karen, Runda will cost about 18m to 24m.',
    paperwalldescription: 'Walls built after casting the topmost slab on a flat roof are typically called parapet walls; they are essentially low walls constructed along the edge of the flat roof, providing a barrier to prevent people or objects from accidentally falling off the roof\'s edge.',
    paperwallphoto: '/photos/commercial/paperwall.png',
    constructioncostingdesc: 'A common misconception is that the number of bedrooms defines the size and cost of a house. However, a 3-bedroom house can be small, while a 2-bedroom house can be much larger. The cost is primarily determined by the total area in square meters, not just the number of rooms. To estimate the approximate cost of construction, you need to calculate the total floor area (in square meters) and multiply it by the current market rate, which ranges between Ksh 40,000 and Ksh 45,000 per square meter, depending on materials, finishes, and inflation.',
  }
]