import { useEffect, useMemo, useState } from "react"
import { fetchProducts } from "./services/api"
import type { Product } from "./types/ProductType"

import Header from "./components/Header"
import Sort from "./components/Sort"
import ProductList from "./components/ProductList"
import Pagination from "./components/Pagination"
import Footer from "./components/Footer"

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("price")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")

  const [page, setPage] = useState(1)

  const itemsPerPage = 12

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data)
      setLoading(false)
    })
  }, [])

  /* ---------- FILTER ---------- */

  const filtered = useMemo(() => {
    return products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
  }, [products, search])

  /* ---------- SORT ---------- */

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      if (sort === "price") {
        return sortDirection === "asc"
          ? a.price - b.price
          : b.price - a.price
      }

      if (sort === "rating") {
        return sortDirection === "asc"
          ? a.rating - b.rating
          : b.rating - a.rating
      }

      return 0
    })
  }, [filtered, sort, sortDirection])

  /* ---------- PAGINATION ---------- */

  const paginated = useMemo(() => {
    const start = (page - 1) * itemsPerPage
    return sorted.slice(start, start + itemsPerPage)
  }, [sorted, page, itemsPerPage])

  /* ---------- LOADING ---------- */

  if (loading) {
    return <div className="container">Загрузка товаров...</div>
  }

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

        <Sort
          total={sorted.length}
          value={sort}
          direction={sortDirection}
          onChange={(v, dir) => {
            setSort(v)
            setSortDirection(dir)
          }}
        />

        <ProductList products={paginated} />

        <Pagination
          total={sorted.length}
          perPage={itemsPerPage}
          page={page}
          onChange={setPage}
        />

      </div>

      <Footer />
    </>
  )
}

export default App