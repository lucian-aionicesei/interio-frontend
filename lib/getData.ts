import { config } from "../config";

export async function getData(query: Object) {
  const url = config.wpApi;
  const headers = { "Content-Type": "application/json" };
  const res = await fetch(url, {
    next: { revalidate: 10 },
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
