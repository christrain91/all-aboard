import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../Pages/Home'
import Staff from '../Pages/Staff'
import NotFound from '../Pages/NotFound'

const RouteHandler: React.FC = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/staff/:id" exact component={Staff} />
          <Route component={NotFound} />
        </Switch>
      </>
    </Router>
  )
}

export default RouteHandler
