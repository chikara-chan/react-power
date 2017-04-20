import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Router from './Router'

function renderHTML() {
  render(
    <AppContainer>
      <Router />
    </AppContainer>,
    document.getElementById('root')
  )
}

renderHTML()

if (module.hot) {
  module.hot.accept('./Router', () => {
    renderHTML()
  })
}
