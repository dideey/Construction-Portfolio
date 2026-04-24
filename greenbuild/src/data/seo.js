// ============================================
// SEO CONFIG — one entry per page
// ============================================

const BASE_URL = 'https://www.wanronhomesolutions.com';

export const SEO = {
  home: {
    title: 'Premier Construction & Architectural Design Company',
    description: 'Wanron Home Solutions — excellence in commercial & residential construction, renovation, and architectural design since 2020. Get a free quote today.',
    path: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': BASE_URL,
      name: 'Wanron Home Solutions',
      description: 'Premier construction, renovation, and architectural design company since 2020.',
      url: BASE_URL,
      telephone: '+254721879675',
      email: 'Wanron2020@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kenol',
        addressLocality: 'Muranga',
      },
      geo: { '@type': 'GeoCoordinates', latitude: '-1.286389', longitude: '36.817223' },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '18:00' },
      ],
      sameAs: ['https://facebook.com/WANRONHOMESOLUTIONS', ''],
      foundingDate: '1995',
      numberOfEmployees: { '@type': 'QuantitativeValue', value: 120 },
      areaServed: { '@type': 'Country', name: 'Kenya' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '500' },
    },
  },

  about: {
    title: 'About Us — 5+ Years of Construction Excellence',
    description: 'Meet the Wanron Home solutions team. 5+ years of construction, 500+ completed projects, and a leadership team passionate about quality craftsmanship and architectural innovation.',
    path: '/about',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      url: `${BASE_URL}/about`,
      name: 'About Wanron Home Solutions Construction',
      description: '5+ years of construction excellence.',
      mainEntity: {
        '@type': 'Organization',
        name: 'Wanron Home Solutions',
        foundingDate: '2020',
        numberOfEmployees: { '@type': 'QuantitativeValue', value: 120 },
      },
    },
  },

  services: {
    title: 'Construction Services — Commercial, Residential BUilds',
    description: 'Explore Wanron Home Solution\'s full range of construction services: commercial buildings, luxury residential homes, renovations, project management, sustainable building, and architectural design.',
    path: '/services',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Construction Services',
      provider: { '@type': 'Organization', name: 'WAnron HOme Solutions', url: BASE_URL },
      areaServed: { '@type': 'Country', name: 'Kenya' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Construction Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Construction' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Homes' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Renovations' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sustainable Building' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Architectural Design' } },
        ],
      },
    },
  },

  projects: {
    title: 'Construction Portfolio — Featured Projects & Case Studies',
    description: 'Browse Wanron Home Solutions\'s portfolio of 500+ completed projects — commercial campuses, luxury residences, eco-builds, and renovations. Proof of our commitment to precision and quality.',
    path: '/projects',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      url: `${BASE_URL}/projects`,
      name: 'Wanron Home SOlutions Project Portfolio',
      description: '500+ completed construction projects across Kenya and beyond.',
    },
  },

  testimonials: {
    title: 'Client Testimonials — Trusted by 500+ Happy Clients',
    description: 'Read verified reviews from Wanron Home Solutions clients. Homeowners, CEOs, and property developers share their experience working with our construction and architectural design teams.',
    path: '/testimonials',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What do Wanron Home SOlutions clients say?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wanron Home Solutions has a 4.9/5 average rating from 500+ clients, with 98% saying they would recommend us for construction projects.',
          },
        },
      ],
    },
  },

  properties: {
    title: 'Properties for Sale — New Homes & Commercial Spaces by Wanron Home Solutions',
    description: 'Browse Wanron Home Solution\'s latest properties for sale — newly built residential homes, luxury villas, commercial spaces, and eco-smart developments ready for viewing.',
    path: '/properties',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      url: `${BASE_URL}/properties`,
      name: 'Wanron Home Solutions Properties for Sale',
      description: 'New-build homes, luxury residences, and commercial spaces available now.',
    },
  },

  insights: {
    title: 'Construction Insights — Building Psychology & Industry Knowledge',
    description: 'Expert insights on construction psychology, project planning, leadership, and craftsmanship. Learn from Wanron Home Solutions\' experience in building exceptional structures.',
    path: '/insights',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      url: `${BASE_URL}/insights`,
      name: 'Wanron Home Solutions Construction Insights',
      description: 'Expert insights on construction psychology, planning, and craftsmanship.',
    },
  },
};
