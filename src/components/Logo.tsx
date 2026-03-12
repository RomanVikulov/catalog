export default function Logo() {
  return (
    <svg
      width="96"
      height="28"
      viewBox="0 0 96 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y="20"
        fontSize="20"
        fontWeight="700"
        fill="url(#grad)"
      >
        AQVEX
      </text>

      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
          <stop offset="0%" stopColor="#3360A4" />
          <stop offset="100%" stopColor="#01141D" />
        </linearGradient>
      </defs>
    </svg>
  )
}