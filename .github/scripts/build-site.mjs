// Builds a static mirror of the list: HTML pages + llms.txt + sitemap + robots.
// Run from repo root: node .github/scripts/build-site.mjs
import { marked } from 'marked'
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs'

const BASE = (process.env.BASE_URL || 'https://mentionnetwork.github.io/awesome-agentic-commerce').replace(/\/$/, '')
const TITLE = 'Awesome Agentic Commerce'
const DESC = 'Curated list of agentic commerce resources — protocols (ACP, AP2, UCP, MCP), MCP servers, tools, apps, APIs and services for AI agents that shop, sell and transact.'

const css = `
:root{--fg:#1a1a2e;--bg:#fff;--muted:#5a5a72;--accent:#4f46e5;--border:#e5e7eb;--code:#f4f4f8}
@media(prefers-color-scheme:dark){:root{--fg:#e8e8f0;--bg:#12121a;--muted:#9a9ab0;--accent:#8b85f7;--border:#2a2a3a;--code:#1e1e2c}}
*{box-sizing:border-box}body{margin:0 auto;max-width:900px;padding:2rem 1.25rem 4rem;font:16px/1.65 system-ui,-apple-system,sans-serif;color:var(--fg);background:var(--bg)}
a{color:var(--accent)}h1,h2,h3{line-height:1.25}h2{margin-top:2.5rem;border-bottom:1px solid var(--border);padding-bottom:.35rem}
code{background:var(--code);padding:.1em .35em;border-radius:4px;font-size:.9em}
table{border-collapse:collapse;width:100%;display:block;overflow-x:auto}th,td{border:1px solid var(--border);padding:.5rem .7rem;text-align:left}
blockquote{margin:0;padding:.25rem 1rem;border-left:3px solid var(--accent);color:var(--muted)}
img{max-width:100%}footer{margin-top:3rem;padding-top:1rem;border-top:1px solid var(--border);color:var(--muted);font-size:.9em}`

function page(title, bodyHtml, canonical, jsonld) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<meta name="description" content="${DESC}">
<link rel="canonical" href="${canonical}">
<meta property="og:title" content="${title}"><meta property="og:description" content="${DESC}">
<meta property="og:type" content="website"><meta property="og:url" content="${canonical}">
${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>` : ''}
<style>${css}</style></head><body>
${bodyHtml}
<footer>Maintained by <a href="https://github.com/MentionNetwork">Mention Network</a> · <a href="https://github.com/MentionNetwork/awesome-agentic-commerce">Contribute on GitHub</a></footer>
</body></html>`
}

const fixLinks = (md) => md.replace(/\(articles\/([a-z0-9-]+)\.md\)/g, '(articles/$1.html)').replace(/\(articles\/\)/g, '(articles/index.html)')

mkdirSync('dist/articles', { recursive: true })

const readme = readFileSync('README.md', 'utf8')
const entries = [...readme.matchAll(/^- \[([^\]]+)\]\((https?:[^)]+)\)/gm)]
const jsonld = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: TITLE,
  description: DESC,
  url: BASE + '/',
  numberOfItems: entries.length,
  itemListElement: entries.slice(0, 200).map(([, name, url], i) => ({ '@type': 'ListItem', position: i + 1, name, url })),
}
writeFileSync('dist/index.html', page(TITLE, marked.parse(fixLinks(readme)), BASE + '/', jsonld))

const urls = [BASE + '/']
for (const f of readdirSync('articles').filter((f) => f.endsWith('.md'))) {
  const html = marked.parse(fixLinks(readFileSync(`articles/${f}`, 'utf8')).replace(/\(\.\.\/README\.md/g, '(../index.html').replace(/\(\.\.\/contributing\.md\)/g, '(https://github.com/MentionNetwork/awesome-agentic-commerce/blob/main/contributing.md)'))
  const out = f === 'README.md' ? 'index.html' : f.replace(/\.md$/, '.html')
  const title = readFileSync(`articles/${f}`, 'utf8').match(/^# (.+)$/m)?.[1] || TITLE
  writeFileSync(`dist/articles/${out}`, page(`${title} — ${TITLE}`, html, `${BASE}/articles/${out}`))
  urls.push(`${BASE}/articles/${out}`)
}

// llms.txt — concise map for AI crawlers; llms-full.txt — everything.
const llms = [`# ${TITLE}`, '', `> ${DESC}`, '', `- [Full list](${BASE}/index.html.md): every resource with descriptions`,
  ...readdirSync('articles').filter((f) => f.endsWith('.md') && f !== 'README.md')
    .map((f) => `- [${readFileSync(`articles/${f}`, 'utf8').match(/^# (.+)$/m)?.[1] || f}](${BASE}/articles/${f}): further reading`)].join('\n')
writeFileSync('dist/llms.txt', llms)
writeFileSync('dist/llms-full.txt', [readme, ...readdirSync('articles').filter((f) => f.endsWith('.md')).map((f) => readFileSync(`articles/${f}`, 'utf8'))].join('\n\n---\n\n'))
writeFileSync('dist/index.html.md', readme)
for (const f of readdirSync('articles').filter((f) => f.endsWith('.md'))) writeFileSync(`dist/articles/${f}`, readFileSync(`articles/${f}`, 'utf8'))

const today = new Date().toISOString().slice(0, 10)
writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>`)
writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${BASE}/sitemap.xml\n`)
console.log(`Built ${urls.length} pages, ${entries.length} entries`)
