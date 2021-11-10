import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import store from '../../redux/reducers'
import { Header } from '../Header/Header'
import { Pages } from '../Pages/Pages'


export function App() {
  
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <Pages/>
      </Router>
    </Provider>
  );
}

