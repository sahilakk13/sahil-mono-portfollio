import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import SectionLabel from './SectionLabel';

export default function BlogPreview() {
  return (
    <section className="blog-reference">
      <div className="container blog-reference-head">
        <SectionLabel>(Blog)</SectionLabel>
        <h2>Smart insights.</h2>
        <Link to="/blog/blog-1" data-cursor-label="Blog">See all</Link>
      </div>
      <div className="container blog-card-row">
        {posts.slice(0, 4).map((post) => (
          <Link className="blog-card" key={post.slug} to={`/post/${post.slug}`} data-cursor-label="Read more">
            <span>{post.date}</span>
            <strong>{post.title}</strong>
            <p>{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
