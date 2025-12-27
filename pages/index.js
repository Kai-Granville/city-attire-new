export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "sans-serif", maxWidth: 800 }}>
      <h1>Product Deals & Reviews</h1>

      <p>
        This website publishes product comparisons, reviews, and deal
        recommendations to help users make informed purchasing decisions.
      </p>

      <p>
        Some links on this site may be affiliate links. This means we may earn a
        commission at no extra cost to you.
      </p>

      <nav style={{ marginTop: 30 }}>
        <a href="/about">About</a> |{" "}
        <a href="/privacy-policy">Privacy Policy</a>
      </nav>
    </main>
  );
}
