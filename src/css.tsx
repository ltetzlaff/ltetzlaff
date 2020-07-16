import { h, FunctionalComponent } from "preact"

interface CSSProps {
  z: number
  duration: number
}

const anim = "pew"

const keyframes = (z: number, duration: number) => `@keyframes ${anim} {
  100% {
    transform: translate3d(0, 0, -${z}px);
    opacity: 0.4;
  }
}

rect {
  animation: ${anim} ${duration}s ease infinite;
}`

const CSS: FunctionalComponent<CSSProps> = ({ z, duration }) => <style>
  {keyframes(z, duration)}
</style>
export default CSS
