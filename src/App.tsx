import { useEffect, useState } from "react"
import { fetchProducts } from "./services/api"
import type { Product } from "./types/ProductType"

import Header from "./components/Header"
import Sort from "./components/Sort"
import ProductList from "./components/ProductList"
import Pagination from "./components/Pagination"


function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("price")
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <div className="container">Загрузка товаров...</div>
  }

  const filtered = products.filter((p) => {
    if (!search.trim()) return true

    return p.name.toLowerCase().includes(search.toLowerCase())
  })

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "price") return a.price - b.price
    if (sort === "rating") return b.rating - a.rating
    return 0
  })

  const itemsPerPage = 12
  const start = (page - 1) * itemsPerPage
  const paginated = sorted.slice(start, start + itemsPerPage)

  return (
    <>
      <Header
        search={search}
        onSearchChange={(v) => {
          setSearch(v)
          setPage(1)
        }}
      />

      <div className="container">

        <h1>Каталог</h1>

        <Sort value={sort} onChange={setSort} />

        <ProductList products={paginated} />

        <Pagination
          total={sorted.length}
          perPage={itemsPerPage}
          page={page}
          onChange={setPage}
        />

      </div>
    </>
  )
}

export default App