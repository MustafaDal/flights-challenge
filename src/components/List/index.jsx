import React, { Component } from 'react'
import { uniqueId, shuffle } from 'lodash-es'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Item from './Item'
import { requestFlights } from '../../store/sagas'

const getUniqueKey = () => uniqueId('flight_')

class List extends Component {
  state = {
    cheap: [],
    business: []
  }

  handleCreateFlightClick = () => {
    this.props.history.push('create')
  }

  componentDidMount() {
    this.props.requestFlights()
    // const API_BASE_URL = 'https://tokigames-challenge.herokuapp.com/api'
    // Promise.all([
    //   fetch(`${API_BASE_URL}/flights/cheap`).then(res => res.json()),
    //   fetch(`${API_BASE_URL}/flights/business`).then(res => res.json())
    // ]).then(responses => {
    //   const [{ data: cheap }, { data: business }] = responses
    //   console.log(cheap, business)
    // })
  }

  render() {
    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Flight List
            </Typography>

            <Button
              color="inherit"
              variant="outlined"
              onClick={this.handleCreateFlightClick}
            >
              CREATE A NEW FLIGHT
            </Button>
          </Toolbar>
        </AppBar>

        {(this.props.cheapflight.loading ||
          this.props.bussinessFlight.loading) && <CircularProgress />}

        {this.props.shuffledFlights.map(flight => (
          <Item {...flight} key={getUniqueKey()} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    flights: { cheap, business }
  } = state
  console.log(state)
  return {
    cheapflight: cheap,
    bussinessFlight: business,
    shuffledFlights: shuffle([...cheap.list, ...business.list])
  }
}

const mapActionsToProps = dispatch => {
  return {
    requestFlights: () => dispatch(requestFlights())
  }
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(List)
