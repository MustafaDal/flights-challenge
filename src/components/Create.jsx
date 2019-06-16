import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import DateFnsUtils from '@date-io/date-fns' // choose your lib
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import FilledInput from '@material-ui/core/FilledInput'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import { connect } from 'react-redux'
import { addCheapFlight, addBusinessFlight } from '../store/actions'

const Create = ({ history, addFlight }) => {
  const [values, setValues] = useState({
    departure: '',
    arrival: '',
    flightType: '',
    arrivalTime: new Date(),
    departureTime: new Date()
  })

  const handleChange = event => {
    if (event && event.target) {
      setValues(oldValues => ({
        ...oldValues,
        [event.target.name]: event.target.value
      }))
    }
  }

  const handleTimeChange = name => value => {
    setValues(oldValues => ({
      ...oldValues,
      [name]: value
    }))
  }

  const redirectToList = () => {
    history.push('/')
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    addFlight({
      type: values.flightType,
      data: {
        route: `${values.departure}-${values.arrival}`,
        arrival: new Date(values.arrivalTime).getTime(),
        departure: new Date(values.departureTime).getTime()
      }
    })
    history.push('/')
  }

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Create A New Flight
          </Typography>

          <Box ml={'auto'}>
            <Button color="inherit" variant="outlined" onClick={redirectToList}>
              Back
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <form onSubmit={handleOnSubmit}>
        <TextField
          variant="filled"
          margin="normal"
          required
          fullWidth
          id="departure"
          label="departure"
          name="departure"
          autoComplete="departure"
          autoFocus
          value={values.departure}
          onChange={handleChange}
        />

        <TextField
          variant="filled"
          margin="normal"
          required
          fullWidth
          id="arrival"
          label="arrival"
          name="arrival"
          autoComplete="arrival"
          value={values.arrival}
          onChange={handleChange}
        />

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Box mt={2} mb={3}>
            <DateTimePicker
              label="Departure Time"
              value={values.departureTime}
              onChange={handleTimeChange('departureTime')}
              inputVariant="filled"
              required
              fullWidth
            />
          </Box>
        </MuiPickersUtilsProvider>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Box mt={3} mb={3}>
            <DateTimePicker
              label="Arrival Time"
              value={values.arrivalTime}
              onChange={handleTimeChange('arrivalTime')}
              inputVariant="filled"
              required
              fullWidth
            />
          </Box>
        </MuiPickersUtilsProvider>

        <Box mt={3} mb={3}>
          <FormControl variant="filled" required fullWidth>
            <InputLabel htmlFor="flightType">Type</InputLabel>
            <Select
              value={values.flightType}
              onChange={handleChange}
              input={<FilledInput name="flightType" id="flightType" required />}
              required
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="cheap">Cheap</MenuItem>
              <MenuItem value="business">Business</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box mt={3} mb={3}>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </form>
    </div>
  )
}

const mapActionsToProps = dispatch => {
  return {
    addFlight: ({ type, data }) => {
      console.log(type, data)
      return type === 'cheap'
        ? dispatch(addCheapFlight(data))
        : dispatch(addBusinessFlight(data))
    }
  }
}

export default connect(
  null,
  mapActionsToProps
)(Create)
