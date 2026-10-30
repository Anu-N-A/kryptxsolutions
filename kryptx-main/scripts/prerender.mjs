// Pre-renders the home page into dist/index.html so search engines and social
// crawlers see real content without running JavaScript.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const htmlPath = path.join(root, 'dist', 'index.html')
const serverEntry = path.join(root, 'dist-ssr', 'entry-server.js')

const { render } = await import(pathToFileURL(serverEntry).href)
const appHtml = render()

const template = fs.readFileSync(htmlPath, 'utf-8')
if (!template.includes('<div id="root"></div>')) {
  throw new Error('prerender: could not find <div id="root"></div> in dist/index.html')
}
fs.writeFileSync(htmlPath, template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`))
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log('prerender: home page HTML written to dist/index.html')
