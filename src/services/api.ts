import type { Product } from "../types/ProductType"

const API_URL =
  "https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net/api/v1/products"


export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(API_URL)
  const json = await res.json()

  return json.data.products
}