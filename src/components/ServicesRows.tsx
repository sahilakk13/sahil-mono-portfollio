import { useState } from 'react';
import { services } from '../data/services';

export default function ServicesRows() {
  const [active, setActive] = useState(services[0].id);

  return (
    <section className="services-rows">
      <div className="dark-to-light-curve" aria-hidden="true" />
      <div className="section-shell services-head">
        <span>(Services)</span>
        <a href="/contact/contact-1" className="black-pill" data-cursor-label="Start">Get started</a>
      </div>
      <div className="section-shell services-list">
        {services.map((service, index) => (
          <button
            key={service.id}
            className={active === service.id ? 'service-row is-active' : 'service-row'}
            type="button"
            onMouseEnter={() => setActive(service.id)}
            onFocus={() => setActive(service.id)}
            data-cursor-label={service.title}
          >
            <span>({service.index})</span>
            <strong>{service.title}</strong>
            <i aria-hidden="true">{String(index + 1).padStart(2, '0')}</i>
            <p>{service.description}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
