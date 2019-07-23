const apiURL = 'http://localhost:4000'
export const listUsers = num => (dispatch, getState) => {
  fetch(apiURL + '/users')
    .then(res => res.json())
    .then(payload => {
      dispatch({ type: 'SET_USERS', payload })
    })
    .catch(err => {
      console.log(err)
    })
}
