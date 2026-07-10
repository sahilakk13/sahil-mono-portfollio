import { cn } from '../lib/utils';

type MediaPlaceholderProps = {
  label?: string;
  eyebrow?: string;
  dark?: boolean;
  tall?: boolean;
  className?: string;
  variant?: number;
};

export default function MediaPlaceholder({ label, eyebrow, dark, tall, className, variant = 0 }: MediaPlaceholderProps) {
  return (
    <div
      className={cn('media-placeholder', dark && 'is-dark', tall && 'is-tall', className)}
      data-variant={variant % 6}
      aria-hidden="true"
    >
      <div className="media-grid">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="poster-shapes">
        <i />
        <i />
        <i />
      </div>
      <div className="poster-ui">
        <span />
        <span />
        <span />
      </div>
      <div className="media-copy">
        {eyebrow ? <small>{eyebrow}</small> : null}
        {label ? <strong>{label}</strong> : null}
      </div>
    </div>
  );
}
