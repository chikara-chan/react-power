import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

function renderHTML() {
  render(
    <AppContainer>
      <App/>
    </AppContainer>,
    document.getElementById('root')
  );
}

render();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    renderHTML();
  });
}
