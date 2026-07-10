import Button from './Button';
import ScrollReveal from './ScrollReveal';
import SectionLabel from './SectionLabel';

export default function ContactCTA() {
  return (
    <section className="section contact-cta">
      <ScrollReveal className="container contact-panel">
        <SectionLabel>(Contact us)</SectionLabel>
        <h2>Let&apos;s talk.</h2>
        <p>Crafting visuals. Shaping systems. Let&apos;s create great work together.</p>
        <Button href="/contact/contact-1">Let&apos;s Collaborate</Button>
      </ScrollReveal>
    </section>
  );
}
