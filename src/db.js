const apiURL = 'http://localhost:4000/users'

export const listUsers = num => (dispatch, getState) => {
  fetch(apiURL)
    .then(res => res.json())
    .then(payload => {
      dispatch({ type: 'SET_USERS', payload })
    })
    .catch(err => {
      console.log(err)
    })
}

export const updateUser = (userId, updateData) => (dispatch, getState) => {
  fetch(apiURL + '/' + userId, { method: 'PUT', body: updateData })
    .then(res => res.json())
    .then(payload => {
      dispatch({ type: 'SET_USERS', payload })
    })
    .catch(err => {
      console.log(err)
    })
}
