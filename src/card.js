import React, { Component } from 'react'
import { Card, CardContent, CardActions, Button } from '@material-ui/core'
import { connect } from 'react-redux'

class MyCard extends Component {
  render() {
    const user = this.props.user
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
  }
}
const mapStateToProps = state => {
  return {}
}

const connector = connect(mapStateToProps)

export default connector(MyCard)
