import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listUsers } from './db'
import Card from './card'
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
            return <Card user={user} key={user.id} />
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
