import { useState } from 'react';
import { services } from '../data/services';
import Button from './Button';
import SectionLabel from './SectionLabel';

export default function ServicesShowcase() {
  const [active, setActive] = useState(services[0].id);

  return (
    <section className="services-reference" id="services">
      <div className="container services-reference-head">
        <SectionLabel>(Services)</SectionLabel>
        <Button href="/contact/contact-1" cursorLabel="Start">Get started</Button>
      </div>
      <div className="container service-row-list">
        {services.map((service) => (
          <button
            className={active === service.id ? 'service-type-row is-active' : 'service-type-row'}
            key={service.id}
            type="button"
            onFocus={() => setActive(service.id)}
            onMouseEnter={() => setActive(service.id)}
            data-cursor-label={service.title}
          >
            <span>({service.index})</span>
            <strong>{service.title}</strong>
            <p>{service.description}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
