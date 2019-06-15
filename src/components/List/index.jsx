import React, { Component } from 'react'
import uniqueId from 'lodash/uniqueId'
import shuffle from 'lodash/shuffle'
import { connect } from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Item from './Item'
import {
  requestCheapFlights,
  requestBusinessFlights
} from '../../store/actions'

const getUniqueKey = () => uniqueId('flight_')

class List extends Component {
  state = {
    cheap: [],
    business: []
  }

  handleCreateFlightClick = () => {
    const { history } = this.props
    history.push('create')
  }

  componentDidMount() {
    const { requestFlights } = this.props
    requestFlights()
  }

  render() {
    const { cheapFlights, businessFlights, shuffledFlights } = this.props
    const showLoading = cheapFlights.loading || businessFlights.loading

    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Flight List
            </Typography>

            <Box ml={'auto'}>
              <Button
                color="inherit"
                variant="outlined"
                onClick={this.handleCreateFlightClick}
              >
                CREATE A NEW FLIGHT
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        {showLoading ? (
          <Box mt={5} textAlign="center">
            <CircularProgress />
          </Box>
        ) : (
          shuffledFlights.map(flight => (
            <Item {...flight} key={getUniqueKey()} />
          ))
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { cheapFlights, businessFlights } = state

  return {
    cheapFlights,
    businessFlights,
    shuffledFlights: shuffle([...cheapFlights.list, ...businessFlights.list])
  }
}

const mapActionsToProps = dispatch => {
  return {
    requestFlights: () => {
      dispatch(requestCheapFlights())
      dispatch(requestBusinessFlights())
    }
  }
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(List)
