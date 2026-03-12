import searchIcon from "../assets/search.svg"

interface Props {
  value: string
  onChange: (value: string) => void
}

export default function Search({ value, onChange }: Props) {
  return (
    <div className="search-box">
      <img
        src={searchIcon}
        className="search-icon"
        alt="search"
      />

      <input
        className="header-search"
        placeholder="Поиск"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}