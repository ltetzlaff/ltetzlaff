import { promises } from "fs"
const { writeFile } = promises
import { h } from "preact"
import render from "preact-render-to-string"
import Fun from "./fun"
import config from "./config"

async function run() {
  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>\n`
  const svg = render(<Fun {...config} />, undefined, { pretty: true, xml: true })
  await writeFile("x.svg", xmlHeader + svg, { encoding: "utf8" })
}

run()
