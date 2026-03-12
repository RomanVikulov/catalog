import Search from "./Search"
import logo from "../assets/icon.svg"



interface Props {
  search: string
  onSearchChange: (value: string) => void
}

export default function Header({ search, onSearchChange }: Props) {
  return (
    <header className="header">
      <div className="container header-inner">
        <img
          src={logo}
          alt="AQVEX"
          className="logo"
        />

        <div className="header-search-wrap">
          <Search
            value={search}
            onChange={onSearchChange}
          />
        </div>
      </div>
    </header>
  )
}