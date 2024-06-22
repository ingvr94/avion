
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from "./state/store.tsx"
import ToTheTop from './shared/toTheTop.tsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <ToastContainer />
    <ToTheTop />
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
)
