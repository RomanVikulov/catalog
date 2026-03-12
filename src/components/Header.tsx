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

        <Search
          value={search}
          onChange={onSearchChange}
        />

      </div>
    </header>
  )
}