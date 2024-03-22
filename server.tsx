import express from 'express'
import React from 'react'
// import { renderToString } from 'react-dom/server'
import render from './src/index.server'
import { readFileSync } from 'node:fs'

const app = express()
const templateFile = './build/index.html'
const templateHTML = readFileSync(templateFile, 'utf-8')
app.use(express.static('./build', { index: false }))

app.get('/*', (req, res) => {
  // const reactApp = renderToString(<h1>Hello from the Server</h1>)
  const reactApp = render(req.url)

  const response = templateHTML.replace('{{APP}}', reactApp)

  return res.send(response)
  return res.send(
    `<html>
      <body>
        <div id="root"> ${reactApp}</div>
      </body>
    </html>
    `
  )
})

app.listen(3000, () => {
  console.log('server is running')
})
