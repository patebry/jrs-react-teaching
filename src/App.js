import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listUsers } from './db'
import { Card, CardContent, CardActions } from '@material-ui/core'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(listUsers(1))
  }

  render() {
    const users = this.props.users
    return (
      <>
        {users.map(x => {
          return (
            <Card>
              <CardContent>
                {x.first_name} {x.last_name}
              </CardContent>
            </Card>
          )
        })}
      </>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    users: state.users
  }
}

const connector = connect(mapStateToProps)

export default connector(App)
