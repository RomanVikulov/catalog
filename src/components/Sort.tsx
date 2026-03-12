interface Props {
  value: string
  onChange: (value: string) => void
}

export default function Sort({ value, onChange }: Props) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="price">Цена ↑</option>
      <option value="rating">Рейтинг</option>
    </select>
  )
}