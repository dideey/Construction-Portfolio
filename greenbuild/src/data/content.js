// ============================================
// Wanron Home Solutions — Static Site Content
// ============================================

export const NAV_LINKS = [
  { label: 'Home',         href: '#/',             page: 'home' },
  { label: 'About',        href: '#/about',        page: 'about' },
  { label: 'Services',     href: '#/services',     page: 'services' },
  { label: 'Projects',     href: '#/projects',     page: 'projects' },
  { label: 'Properties',   href: '#/properties',   page: 'properties' },
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
  address:    '123 Builder St, Construction City',
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
  paragraphs: [
    'Founded in 2020 by a group of passionate engineers and architects, Waron Home Solutions began with a single mission: To perform for our clients the highest level of quality construction services at a fair and market competitive prices.To design, process approvals and build homes to actualize dreams',
    'Every project we take on reflects our company vision which is : To be the best, respectable building contractors who deliver the best to our clients',
    'What started as a small firm and we are growing at a first rate due to our quality of service we have been able to work on a lot of commercial buildings & residentials.',
    
  ],
  image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80',
};

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
    name: 'Michael Oduya',
    role: 'Founder & CEO',
    bio: '30 years in construction. Passionate about sustainable architecture and community-centered design.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    id: 'cto',
    name: 'Amina Hassan',
    role: 'Chief Architect',
    bio: 'Award-winning architect with expertise in green building certifications and innovative structural design.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
  {
    id: 'ops',
    name: 'David Kariuki',
    role: 'Head of Operations',
    bio: 'Masters in Project Management. Ensures every build is delivered on time, on budget, and beyond expectations.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
  {
    id: 'eng',
    name: 'Priya Nair',
    role: 'Lead Structural Engineer',
    bio: 'Specialises in high-rise and complex structural systems. Over 200 projects delivered without incident.',
    image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=400&q=80',
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
    id: 'prop-01',
    title: 'The Canopy Villa',
    category: 'Luxury',
    type: 'For Sale',
    price: 'KSh 48,500,000',
    priceUSD: '$375,000',
    location: 'Karen, Nairobi',
    bedrooms: 5,
    bathrooms: 4,
    area: '620 sqm',
    plot: '0.5 acres',
    description: 'Stunning 5-bedroom luxury villa nestled in mature gardens. Features open-plan living, a chef kitchen, infinity pool, solar power, and borehole water.',
    features: ['Infinity Pool', 'Solar Power', 'Smart Home System', 'Staff Quarters', 'Double Garage'],
    tags: ['Luxury', 'Residential', 'Eco-Smart'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
    badge: 'New Listing',
    featured: true,
  },
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
