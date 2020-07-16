export interface Config {
  amount: number

  /**
   * in px
   */
  dimensions: {
    x: number
    y: number
    z: number
  }

  /**
   * in px
   */
  size: {
    min: number
    max: number
  }

  /**
   * in Hz
   */
  speed: number

  /**
   * in s
   */
  duration: number

  /**
   * any valid css color
   */
  colors?: string[]
}
