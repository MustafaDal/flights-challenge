import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
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
          {/* <Fab color="primary" aria-label="Add">
            <AddIcon />
          </Fab> */}

          {/* <List /> */}
          <Create />

          {/* <p>{this.state.cheapJson}</p>
          <p>{this.state.businessJson}</p> */}
        </Container>
      </Router>
    )
  }
}

export default App
