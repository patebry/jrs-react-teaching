import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField
} from '@material-ui/core'
import { connect } from 'react-redux'
import { updateUser } from './db'

const defaultState = {
  first_name: '',
  last_name: '',
  phone: '',
  email: '',
  birthday: ''
}

class EditUser extends React.Component {
  state = defaultState
  close = () => {
    this.props.dispatch({ type: 'SET_SELECTED_USER', payload: null })
  }

  updateState = (stateName, e) => {
    this.setState({ [stateName]: e.target.value })
  }

  submit = () => {
    this.props.dispatch(updateUser(this.props.selectedUser.id, this.state))
  }

  componentDidUpdate(prevProps) {
    if (prevProps.open && !this.props.open) {
      this.setState(defaultState)
    }

    if (this.props.open && !prevProps.open) {
      this.setState(this.props.selectedUser)
    }
    // console.log(prevProps, this.props)
  }

  render() {
    const user = this.props.selectedUser
    return (
      <Dialog open={this.props.open} onClose={this.close}>
        {user ? (
          <>
            <DialogContent>
              <h2>Edit User</h2>
            </DialogContent>
            <DialogContent>
              {Object.keys(defaultState).map(stateField => {
                return (
                  <TextField
                    key={stateField}
                    label={stateField.replace('_', ' ')}
                    value={this.state[stateField] || ''}
                    fullWidth
                    onChange={e => this.updateState(stateField, e)}
                  />
                )
              })}
            </DialogContent>
            <DialogActions>
              <Button onClick={this.close} color="secondary" variant="outlined">
                Close
              </Button>
              <Button onClick={this.submit} color="primary" variant="contained">
                Save
              </Button>
            </DialogActions>
          </>
        ) : (
          <div />
        )}
      </Dialog>
    )
  }
}

const mapStateToProps = state => {
  return {
    open: state.selectedUser !== null,
    selectedUser: state.selectedUser
  }
}

const connector = connect(mapStateToProps)

export default connector(EditUser)
