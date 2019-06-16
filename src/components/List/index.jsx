import React, { Component } from 'react'
import shuffle from 'lodash/shuffle'
import { connect } from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import MaterialTable from 'material-table'
import { format, compareAsc } from 'date-fns'
import {
  requestCheapFlights,
  requestBusinessFlights
} from '../../store/actions'

class List extends Component {
  state = {
    cheap: [],
    business: []
  }

  tableColumns = [
    { title: 'Route', field: 'route' },
    {
      title: 'Arrival',
      field: 'arrivalFormatted',
      customSort: (a, b) => compareAsc(a.arrival, b.arrival)
    },
    {
      title: 'Departure',
      field: 'departureFormatted',
      customSort: (a, b) => compareAsc(a.departure, b.departure)
    }
  ]

  formatDate = date => format(new Date(date), 'MM/dd/yyyy hh:mm')

  formatFlights = list => {
    return list.map(item => {
      return {
        ...item,
        arrival: new Date(item.arrival),
        arrivalFormatted: this.formatDate(item.arrival),
        departureFormatted: this.formatDate(item.departure),
        departure: new Date(item.departure)
      }
    })
  }

  handleCreateFlightClick = () => {
    const { history } = this.props
    history.push('create')
  }

  componentDidMount() {
    const { requestFlights, shuffledFlights } = this.props
    if (shuffledFlights.length === 0) requestFlights()
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
          <MaterialTable
            title=""
            columns={this.tableColumns}
            data={this.formatFlights(shuffledFlights)}
            options={{
              filtering: true,
              sorting: true
            }}
          />
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
