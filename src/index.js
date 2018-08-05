import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import store from './redux/store'
import routes from './routes'
import { BrowserRouter } from 'react-router-dom'

import App from './containers/App/App'



render(
   <Provider store={store} >
     <BrowserRouter>
       <App>
         {routes}
       </App>
     </BrowserRouter>
   </Provider>
  , document.getElementById('root')
)

