import './app.css'
import Copper from 'copper-sdk'
const sdk = Copper.init()

function main() {

  renderContext()
  sdk.on('contextUpdated', () => {
    renderContext()
  })
}

async function renderContext() {
  const { context } = await sdk.getContext()
  const { id, name } = context
  const text = `ID: ${id}, NAME: ${name}`
  document.getElementById('root').innerHTML = text
}

main()
