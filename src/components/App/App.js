import { Provider } from 'react-redux'

import store from '../../redux/reducers'
import Header from '../Header'
import Pages from '../Pages'

function App() {
  return (
    <Provider store={store}>
        <Header/>
        <Pages/>
    </Provider>
  );
}

export default App;
