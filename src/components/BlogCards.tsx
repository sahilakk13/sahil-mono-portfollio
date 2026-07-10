import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

export default function BlogCards() {
  return (
    <section className="blog-cards-section">
      <div className="section-shell blog-head-row">
        <span>(Blog)</span>
        <h2>Smart insights.</h2>
        <Link to="/blog/blog-1" data-cursor-label="Read">See all</Link>
      </div>
      <div className="section-shell blog-image-card-row">
        {posts.slice(0, 4).map((post, index) => (
          <Link className="blog-image-card" key={post.slug} to={`/post/${post.slug}`} data-cursor-label="Read">
            <i aria-hidden="true">{String(index + 1).padStart(2, '0')}</i>
            <span>{post.date}</span>
            <strong>{post.title}</strong>
          </Link>
        ))}
      </div>
      <div className="blog-to-contact-curve" aria-hidden="true" />
    </section>
  );
}
