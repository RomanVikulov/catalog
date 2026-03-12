import type { Product } from "../types/ProductType"
export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("/api/v1/products")

  if (!res.ok) {
    throw new Error("API error")
  }

  const json = await res.json()
  return json.data.products
}