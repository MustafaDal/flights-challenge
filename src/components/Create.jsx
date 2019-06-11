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

/*
business
  arrival: "Antalya"
  arrivalTime: 1564410656
  departure: "Ankara"
  departureTime: 1561627856

cheap:
  arrival: 1558902656
  departure: 1558902656
  route: "Cruz del Eje-Antalya"
*/

const Create = () => {
  const [departureTime, handleChangeDepartureTime] = useState(new Date())
  const [arrivalTime, handleChangeArrivalTime] = useState(new Date())

  const [values, setValues] = React.useState({
    flightType: ''
  })

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Create A New Flight
          </Typography>
        </Toolbar>
      </AppBar>

      <form>
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
        />

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Box mt={2} mb={3}>
            <DateTimePicker
              label="departureTime"
              value={departureTime}
              onChange={handleChangeDepartureTime}
              inputVariant="filled"
              required
              fullWidth
            />
          </Box>
        </MuiPickersUtilsProvider>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Box mt={3} mb={3}>
            <DateTimePicker
              label="arrivalTime"
              value={arrivalTime}
              onChange={handleChangeArrivalTime}
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
              input={<FilledInput name="flightType" id="flightType" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="cheap">cheap</MenuItem>
              <MenuItem value="business">business</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Button type="submit" fullWidth variant="contained" color="primary">
          Save
        </Button>
      </form>
    </div>
  )
}

export default Create
