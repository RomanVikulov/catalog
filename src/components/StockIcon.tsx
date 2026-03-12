import icon from "../assets/stockStatus.svg"

interface Props {
  inStock: boolean
}

export default function StockIcon({ inStock }: Props) {
  return (
    <span className={`stock ${inStock ? "in" : "out"}`}>

      <img
        src={icon}
        alt="stock status"
        className="stock-icon"
      />

      {inStock ? "В наличии" : "Нет в наличии"}

    </span>
  )
}