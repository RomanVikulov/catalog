import { useState } from "react"
import vectorUp from "../assets/svg/vectorUp.svg"
import vectorDown from "../assets/svg/vectorDown.svg"


interface Props {
  total: number
  value: string
  direction: "asc" | "desc"
  onChange: (value: string, direction: "asc" | "desc") => void
}

export default function Sort({ total, value, direction, onChange }: Props) {

  const [open, setOpen] = useState(false)

  const toggleDirection = () => {
    const newDir = direction === "asc" ? "desc" : "asc"
    onChange(value, newDir)
  }

  const changeSort = (type: string) => {
  onChange(type, "desc")
  setOpen(false)
}

  const label =
    value === "price"
      ? "По цене"
      : "По популярности"

  return (
    <div className="catalog-toolbar">

      <div className="catalog-count">
        {total} товаров
      </div>

      <div className="sort">

        <div className="sort-direction" onClick={toggleDirection}>

          <img
            src={vectorUp}
            className={`sort-arrow-icon ${direction === "asc" ? "active" : ""
              }`}
          />

          <img
            src={vectorDown}
            className={`sort-arrow-icon ${direction === "desc" ? "active" : ""
              }`}
          />

        </div>

        <div className="sort-select">

          <div
            className="sort-current"
            onClick={() => setOpen(!open)}
          >
            {label}
            <span className="sort-arrow">▼</span>
          </div>

          {open && (
            <div className="sort-dropdown">

              <div onClick={() => changeSort("rating")}>
                По популярности
              </div>

              <div onClick={() => changeSort("price")}>
                По цене
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  )
}