import express from 'express'
import React from 'react'
import render, {sheet} from './src/index.server'
import { readFileSync } from 'node:fs'

const app = express()
const templateFile = './build/index.html'
const templateHTML = readFileSync(templateFile, 'utf-8')

app.use(express.static('./build', { index: false }))

app.get('/*', (req, res) => {
  const reactApp = render(req.url)
  const response = templateHTML.replace('{{APP}}', reactApp).replace('{{STYLE}}', sheet.getStyleTags())
  return res.send(response)
})

app.listen(3300, () => {
  console.log(`server is running http://localhost:3300`)
})
