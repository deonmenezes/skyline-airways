export default function Search({ searchParams }: { searchParams: { q?: string } }) {
  const q = searchParams.q ?? "";
  const products = [
        { name: "NYC → London (Heathrow)", desc: "Daily nonstop 787-9 service with Skyline Suites, premium economy, and economy cabins." },
    { name: "LAX → Tokyo (Narita)", desc: "Daily nonstop A350-1000. Full flat-bed Skyline Suites and Japanese & Western meals." },
    { name: "Miami → São Paulo", desc: "Daily overnight 787-10. Skyline Suites and lie-flat business class throughout." },
    { name: "Chicago → Frankfurt", desc: "Daily nonstop A330neo. Connections to 140 European destinations via our hub." },
    { name: "Seattle → Seoul", desc: "Daily 787-9 service. Codeshare access to 40+ East Asian destinations." },
    { name: "San Francisco → Sydney", desc: "Daily nonstop 777-300ER. 14h50m flight time with Skyline Suites." }
  ];
  const filtered = q ? products.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()) || p.desc.toLowerCase().includes(q.toLowerCase())) : products;

  return (
    <>
      <h1>Destinations & Routes</h1>
      <p style={{ color: "#5a7486", fontStyle: "italic", maxWidth: 680 }}>
        Skyline connects 187 cities across 74 countries.
      </p>

      <form method="get" style={{ margin: "2rem 0" }}>
        <input name="q" defaultValue={q} placeholder="Search destinations, routes, and flights..." style={{ width: "70%", marginRight: "0.5rem" }} />
        <button type="submit">Search</button>
      </form>

      {q && (
        <div className="card" style={{ background: "#e8f2f9", borderTop: "3px solid #ffc857" }}>
          <p style={{ margin: 0, color: "#5a7486" }}>
            Showing results for: <strong><span dangerouslySetInnerHTML={{ __html: q }} /></strong>
          </p>
        </div>
      )}

      <div>
        {filtered.map((p) => (
          <div key={p.name} className="card">
            <h3 style={{ margin: "0 0 0.5rem" }}>{p.name}</h3>
            <p style={{ margin: 0, color: "#5a7486" }}>{p.desc}</p>
            <p style={{ marginTop: "0.75rem", marginBottom: 0 }}>
              <a href="#">Learn more →</a>
            </p>
          </div>
        ))}
        {filtered.length === 0 && <p style={{ color: "#5a7486", fontStyle: "italic" }}>No results matched your search.</p>}
      </div>
    </>
  );
}
