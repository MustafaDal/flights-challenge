import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Item from './Item'

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
})

const List = ({ history }) => {
  const classes = useStyles()

  const handleClick = () => {
    history.push('create')
  }

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

      <Item />
    </div>
  )
}

export default List
