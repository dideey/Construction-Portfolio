// ============================================
// GREENBUILD — Static Site Content
// ============================================

export const NAV_LINKS = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
];

export const COMPANY = {
  name:       'GreenBuild',
  tagline:    'Building the Future with Precision',
  subTagline: 'Excellence in construction, renovation, and architectural design. We transform visions into sustainable reality since 1995.',
  founded:    1995,
  yearsExp:   '25+',
  phone:      '+1 (555) 000-1234',
  email:      'info@greenbuild.com',
  address:    '123 Builder St, Construction City',
  whatsapp:   'https://wa.me/15550001234',
};

export const ABOUT_FEATURES = [
  { label: 'Sustainable Design' },
  { label: 'Expert Engineering' },
  { label: 'Timely Delivery' },
  { label: 'Quality Materials' },
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
    id: 'renovations',
    title: 'Renovations',
    description: 'Transforming existing structures into modern, energy-efficient masterpieces.',
    icon: '🔨',
  },
  {
    id: 'management',
    title: 'Project Management',
    description: 'Full lifecycle management from initial planning to final site inspection.',
    icon: '📋',
  },
  {
    id: 'sustainable',
    title: 'Sustainable Building',
    description: 'Eco-friendly materials and energy-saving designs for a greener future.',
    icon: '🌿',
  },
  {
    id: 'architecture',
    title: 'Architectural Design',
    description: 'Innovative blueprints that balance functionality with striking visual appeal.',
    icon: '📐',
  },
];

export const PROJECTS = [
  {
    id: 'horizon',
    title:       'Horizon Business Park',
    category:    'Commercial',
    description: 'Sustainable corporate campus delivered in 2023.',
    image:       'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  },
  {
    id: 'glass-house',
    title:       'The Glass House',
    category:    'Residential',
    description: 'Ultra-modern minimalist residence with eco-features.',
    image:       'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
];

export const TESTIMONIALS = [
  {
    id:       'james',
    quote:    'GreenBuild exceeded all our expectations. Their commitment to sustainability and quality materials made a huge difference in our project.',
    name:     'James Wilson',
    role:     'CEO, TechCore Solutions',
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

export const FOOTER_LINKS = {
  quick: [
    { label: 'About Us',     href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Projects',     href: '#projects' },
    { label: 'Careers',      href: '#' },
  ],
  services: [
    { label: 'Commercial',  href: '#services' },
    { label: 'Residential', href: '#services' },
    { label: 'Renovations', href: '#services' },
    { label: 'Green Energy',href: '#services' },
  ],
};
