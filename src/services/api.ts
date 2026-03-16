import type { Product } from "../types/ProductType"

const API_URL = import.meta.env.DEV
  ? "/api/v1/products"
  : "https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net/api/v1/products"

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(API_URL)

  if (!res.ok) {
    throw new Error("API error")
  }

  const json = await res.json()
  return json.data.products
}