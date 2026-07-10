type ProjectMediaPosterProps = {
  index: number;
  label: string;
  imageSrc: string;
  imageAlt: string;
};

export default function ProjectMediaPoster({ index, label, imageSrc, imageAlt }: ProjectMediaPosterProps) {
  const variants = ['seo audit', 'mobile app', 'bi dashboard', 'ai try-on'];

  return (
    <div className={`project-media-poster poster-theme-${index + 1}`}>
      <img className="project-media-image" src={imageSrc} alt={imageAlt} loading="lazy" />
      <div className="poster-browser">
        <span />
        <span />
        <span />
      </div>
      <em>{variants[index] ?? 'system'}</em>
      <div className="poster-device">
        <i />
        <i />
        <i />
      </div>
      <div className="poster-chart">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="poster-table">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="poster-phone">
        <span />
        <span />
        <span />
      </div>
      <strong>{label}</strong>
    </div>
  );
}
