import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listUsers } from './db'
import { Card, CardContent, CardActions, Button } from '@material-ui/core'
import EditUser from './editUser'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(listUsers(1))
  }

  render() {
    const users = this.props.users
    return (
      <>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {users.map(user => {
            return (
              <Card style={{ margin: '16px' }} key={user.id}>
                <CardContent>
                  {user.first_name} {user.last_name}
                </CardContent>
                <CardActions>
                  <Button
                    onClick={e =>
                      this.props.dispatch({
                        type: 'SET_SELECTED_USER',
                        payload: user
                      })
                    }
                    color="primary"
                    variant="contained"
                  >
                    Edit
                  </Button>
                </CardActions>
              </Card>
            )
          })}
        </div>
        <EditUser />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

const connector = connect(mapStateToProps)

export default connector(App)
