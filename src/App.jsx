import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Container from '@material-ui/core/Container'
import List from './components/List'
import Create from './components/Create'

const App = () => (
  <Router>
    <Container component="main" maxWidth="md">
      <Switch>
        <Route exact path="/" component={List} />
        <Route path="/create" component={Create} />
        <Redirect to="/" />
      </Switch>
    </Container>
  </Router>
)

export default App
