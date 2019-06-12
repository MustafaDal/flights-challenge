import React, { useState, useEffect } from 'react'
import { uniqueId } from 'lodash-es'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Item from './Item'

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
})

const getUniqueKey = () => uniqueId('flight_')
console.log('getUniqueKey', getUniqueKey())

const List = ({ history }) => {
  const classes = useStyles()
  const [flights, setFlights] = useState({ cheap: [], business: [] })
  const [cheap, setCheap] = useState([])
  const [business, setBusiness] = useState([])
  console.log('cheap, business', cheap, business)

  const handleClick = () => {
    history.push('create')
  }

  // useEffect(() => {
  //   const API_BASE_URL = 'https://tokigames-challenge.herokuapp.com/api'
  //   Promise.all([
  //     fetch(`${API_BASE_URL}/flights/cheap`).then(res => res.json()),
  //     fetch(`${API_BASE_URL}/flights/business`).then(res => res.json())
  //   ]).then(responses => {
  //     const [{ data: cheap }, { data: business }] = responses
  //     setFlights({ cheap, business })
  //     setCheap(cheap)
  //     setBusiness(business)
  //     console.log(cheap, business)
  //   })
  // })

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.title}>
            Flight List
          </Typography>

          <Button color="inherit" variant="outlined" onClick={handleClick}>
            CREATE A NEW FLIGHT
          </Button>
        </Toolbar>
      </AppBar>

      <CircularProgress className={classes.progress} />

      {cheap.map(flight => (
        <Item {...flight} key={getUniqueKey()} />
      ))}

      {business.map(flight => (
        <Item {...flight} key={getUniqueKey()} />
      ))}
    </div>
  )
}

export default List
