import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Container from '@material-ui/core/Container'
import List from './components/List'
import Create from './components/Create'

class App extends Component {
  state = {
    flights: {
      cheap: [],
      business: []
    }
  }

  componentDidMount() {
    fetch('https://tokigames-challenge.herokuapp.com/api/flights/cheap')
      .then(res => res.json())
      .then(json => {
        this.setState({
          flights: {
            ...this.state.flights,
            cheap: json.data
          }
        })
      })

    fetch('https://tokigames-challenge.herokuapp.com/api/flights/business')
      .then(res => res.json())
      .then(json => {
        this.setState({
          flights: {
            ...this.state.flights,
            business: json.data
          }
        })
      })
  }

  render() {
    return (
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
  }
}

export default App
