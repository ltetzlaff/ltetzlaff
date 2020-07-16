import { h, FunctionalComponent } from "preact"
import { Config } from "./types"
import Square from "./square"
import CSS from "./css"

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function randInt(min: number, max: number) {
  return rand(min, max) | 0
}

function times(n: number) {
  return Array(n).fill(0).map((_, i) => i)
}

function randomColor() {
  return `hsla(0, ${randInt(1, 80)}%, ${randInt(30, 60)}%, 70%)`
}

function randPick<T>(arr?: T[]): T | undefined {
  if (arr === undefined || arr.length === 0) return
  const i = Math.round(Math.random() * (arr.length - 1))
  return arr[i]
}

const Fun: FunctionalComponent<Config> = ({
  amount,
  size,
  dimensions: {x, y, z},
  speed,
  duration,
  colors
}) => {
  const style = (i: number) => ({
    fill: randPick(colors) || randomColor(),
    animationDelay: `-${i * speed}s`,
    transform: `translate3d(${randInt(-x, x)}px, ${randInt(-y, y)}px, ${randInt(0, z * 2)}px)`
  })

  return (
    <svg
      style={{
        filter: "blur(1px)",
        mixBlendMode: "multiply"
      }}
      width={x}
      height={y}
      viewBox={`0 0 ${x} ${y}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <CSS z={z} duration={duration} />
      { times(amount).map(i => (
        <Square style={style(i)} size={rand(size.min, size.max)} x={x/2} y={y/2} />)
      )}
    </svg>
  )
}
export default Fun
