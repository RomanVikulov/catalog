interface Props {
  total: number
  perPage: number
  page: number
  onChange: (p: number) => void
}

export default function Pagination({
  total,
  perPage,
  page,
  onChange
}: Props) {

  const pages = Math.ceil(total / perPage)

  return (
    <div className="pagination">

      <button
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        ←
      </button>

      {Array.from({ length: pages }, (_, i) => (
        <button
          key={i}
          className={page === i + 1 ? "active" : ""}
          onClick={() => onChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      <button
        disabled={page === pages}
        onClick={() => onChange(page + 1)}
      >
        →
      </button>

    </div>
  )
}