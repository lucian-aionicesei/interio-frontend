export async function getData(query: Object) {
  const headers = { "Content-Type": "application/json" };
  const res = await fetch("https://interio-db.graphite.dk/graphql", {
    headers,
    method: "POST",
    body: JSON.stringify(query),
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
