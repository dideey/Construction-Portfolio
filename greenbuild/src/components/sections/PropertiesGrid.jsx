import { useState } from 'react';
import { PROPERTIES, PROPERTIES_CATEGORIES } from '../../data/content';
import SectionLabel from '../ui/SectionLabel';
import Button from '../ui/Button';
import styles from './PropertiesGrid.module.css';

/* ── helpers ─────────────────────────────── */
function BedBathArea({ bedrooms, bathrooms, area, category }) {
  return (
    <ul className={styles.specs}>
      {bedrooms && category !== 'Land' && (
        <li className={styles.spec}>
          <span className={styles.specIcon} aria-hidden="true">🛏</span>
          <span>{bedrooms} {bedrooms === 1 ? 'Bed' : 'Beds'}</span>
        </li>
      )}
      {bathrooms && category !== 'Land' && (
        <li className={styles.spec}>
          <span className={styles.specIcon} aria-hidden="true">🚿</span>
          <span>{bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}</span>
        </li>
      )}
      <li className={styles.spec}>
        <span className={styles.specIcon} aria-hidden="true">📐</span>
        <span>{area}</span>
      </li>
    </ul>
  );
}

/* ── PropertyCard ────────────────────────── */
function PropertyCard({ property, featured = false }) {
  const {
    title, category, type, price, priceUSD,
    location, bedrooms, bathrooms, area,
    description, features, tags, image, badge,
  } = property;

  return (
    <article
      className={`${styles.card} ${featured ? styles.cardFeatured : ''}`}
      aria-label={`${title} — ${price}`}
      itemScope
      itemType="https://schema.org/RealEstateListing"
    >
      {/* Image */}
      <div className={styles.imageWrap}>
        <img
          src={image}
          alt={`${title} — ${category} property in ${location}`}
          className={styles.image}
          loading="lazy"
          width="900" height="600"
          itemProp="image"
        />

        {/* Badge */}
        {badge && <span className={styles.badge}>{badge}</span>}

        {/* Type pill */}
        <span className={styles.typePill}>{type}</span>

        {/* Hover overlay */}
        <div className={styles.overlay}>
          <ul className={styles.featureList}>
            {features.slice(0, 4).map(f => (
              <li key={f} className={styles.featureItem}>
                <span aria-hidden="true">✓</span> {f}
              </li>
            ))}
          </ul>

        </div>
      </div>

      {/* Card body */}
      <div className={styles.body}>
        {/* Location + category */}
        <div className={styles.meta}>
          <span className={styles.location} itemProp="address">📍 {location}</span>
          <span className={styles.categoryTag}>{category}</span>
        </div>

        {/* Title */}
        <h3 className={styles.title} itemProp="name">{title}</h3>

        {/* Specs row */}
        <BedBathArea bedrooms={bedrooms} bathrooms={bathrooms} area={area} category={category} />

        {/* Description */}
        <p className={styles.desc} itemProp="description">{description}</p>

        {/* Footer: price + CTA */}
        <div className={styles.footer}>
          <div className={styles.priceWrap}>
            <span className={styles.price} itemProp="price">{price}</span>
            <span className={styles.priceUSD}>{priceUSD}</span>
          </div>
          <Button href="#/properties?scroll=property-cta" size="sm">
            Book a Viewing or Enquire →
          </Button>
        </div>
      </div>
    </article>
  );
}

/* ── PropertiesGrid ──────────────────────── */
export default function PropertiesGrid() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? PROPERTIES
    : PROPERTIES.filter(p => p.category === activeFilter || p.tags.includes(activeFilter));

  const featured = filtered.filter(p => p.featured);
  const rest     = filtered.filter(p => !p.featured);

  return (
    <section className={styles.section} id="listings" aria-label="Property listings">
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <SectionLabel centered>Available Now</SectionLabel>
          <h2 className={styles.heading}>Browse Our Properties</h2>
          <p className={styles.sub}>
            All properties are GreenBuild-developed, ready to occupy, and backed by our
            10-year structural warranty.
          </p>
        </div>

        {/* Filter tabs */}
        <div className={styles.filters} role="tablist" aria-label="Filter by property type">
          {PROPERTIES_CATEGORIES.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeFilter === cat}
              className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterActive : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured — 2 col large cards */}
        {featured.length > 0 && (
          <div className={styles.featuredGrid}>
            {featured.map(p => (
              <PropertyCard key={p.id} property={p} featured />
            ))}
          </div>
        )}

        {/* Regular — 3 col grid */}
        {rest.length > 0 && (
          <>
            {featured.length > 0 && (
              <div className={styles.divider}>
                <span>More Properties</span>
              </div>
            )}
            <div className={styles.grid}>
              {rest.map(p => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </>
        )}

        {filtered.length === 0 && (
          <div className={styles.empty} role="status">
            <p>No properties in this category right now — check back soon or
              <a href="#/contact" className={styles.emptyLink}> contact us</a> for off-market listings.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
