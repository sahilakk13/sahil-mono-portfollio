export default function Newsletter() {
  return (
    <form className="newsletter-form">
      <label htmlFor="newsletter-email">
        <span>(Newsletter)</span>
        <strong>Be the first to know what&apos;s new.</strong>
        <small>No noise. Just curated updates.</small>
      </label>
      <div>
        <input id="newsletter-email" placeholder="Email address" type="email" />
        <button type="submit">Subscribe</button>
      </div>
    </form>
  );
}
