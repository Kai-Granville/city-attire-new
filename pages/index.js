import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <main>
      <h1>Our Products</h1>

      {products.map(p => (
        <div key={p.id}>
          <img src={p.image} alt={p.title} width="200" />
          <h2>{p.title}</h2>
          <p>{p.price}</p>
          <a href={p.link} target="_blank" rel="noopener noreferrer">
            View product
          </a>
        </div>
      ))}
    </main>
  );
}

// export default function Home() {
//   return (
//     <main style={{ padding: 40, fontFamily: "sans-serif", maxWidth: 800 }}>
//       <h1>Product Deals & Reviews</h1>

//       <p>
//         This website publishes product comparisons, reviews, and deal
//         recommendations to help users make informed purchasing decisions.
//       </p>

//       <p>
//         Some links on this site may be affiliate links. This means we may earn a
//         commission at no extra cost to you.
//       </p>

//       <nav style={{ marginTop: 30 }}>
//         <a href="/about">About</a> |{" "}
//         <a href="/privacy-policy">Privacy Policy</a>
//       </nav>
//     </main>
//   );
// }
