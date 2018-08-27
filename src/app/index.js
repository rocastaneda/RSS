// Dependencies
import React from 'react'
import { BrowserRouter, StaticRouter, Switch, Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import App from '../app/App'

// Routes
import routes from '../shared/routes'

import 'bootstrap/dist/css/bootstrap.css'
import 'Styles/main.less'

export default ({ server, location, context }) => {
  const routesMap = routes.map((route, i) => <Route key={i} {...route} />)

  // Client Router
  let router = (
    <BrowserRouter>
      <CSSTransition key={Math.round()} classNames="fade" timeout={300}>
        <Switch location={location}>
          <App>
            {routesMap}
          </App>
        </Switch>
      </CSSTransition>
    </BrowserRouter>
  )

  // Server Router
  if (server) {
    router = (
      <StaticRouter location={location} context={context}>
        <Switch>
          <App>
            {routesMap}
          </App>
        </Switch>
      </StaticRouter>
    )
  }

  return (
    <div style={{height: '100%'}}>
      {router}
    </div>
  )
}
