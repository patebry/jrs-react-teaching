const apiURL = 'http://localhost:4000/users'

export const listUsers = () => (dispatch, getState) => {
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
  fetch(apiURL + '/' + userId, {
    method: 'PUT',
    body: JSON.stringify(updateData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(res => {
      dispatch(listUsers())
      dispatch({ type: 'SET_SELECTED_USER', payload: null })
    })
    .catch(err => {
      console.log(err)
    })
}
