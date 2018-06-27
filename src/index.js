import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store/configureStore';
import './styles/app.scss';
import Container from './components/Container';

class App extends React.Component {
  render() {
    return <Container />;
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
