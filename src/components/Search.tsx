interface Props {
  value: string
  onChange: (value: string) => void
}

export default function Search({ value, onChange }: Props) {
  return (
    <input
      className="header-search"
      placeholder="Поиск"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}