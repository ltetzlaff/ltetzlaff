import { h, FunctionalComponent } from "preact"

interface SquareProps {
  style: { [key: string]: string | number }
  size: number
  x: number
  y: number
}

const defaultStyle = (size: number) => {
  const outline = `${(size * 0.1).toFixed(2)}px`

  return {
    outline: `${outline} solid rgba(27,31,35,.04)`,
    outlineOffset: `-${outline}`
  }
}

const Square: FunctionalComponent<SquareProps> = ({ x, y, size, style }) => (
  <rect
    x={x}
    y={y}
    width={size}
    height={size}
    style={{ ...defaultStyle(size), ...style }}
  />
)
export default Square
