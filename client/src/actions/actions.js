import axios from 'axios'

import { FETCH_CURRENT_USER } from './types'

export const fetchCurrentUser = () => async (dispatch) => {
  let res = await axios.get('/api/current-user')
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res.data
  })
}
