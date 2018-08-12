import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import store from './redux/store'
import routes from './routes'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import App from './containers/App/App'

const history = createBrowserHistory()


render(
   <Provider store={store} >
     <Router history={history}>
       <App>
         {routes}
       </App>
     </Router>
   </Provider>
  , document.getElementById('root')
)

