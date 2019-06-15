import {
  put,
  call,
  takeEvery
} from 'redux-saga/effects'

export function requestFlights() {
  console.log('requestFlights')
  return {
    type: 'REQUESTED_CHEAP_FLIGHTS'
  }
}

export function* fetchFlights() {
  const API_BASE_URL = 'https://tokigames-challenge.herokuapp.com/api'
  const {
    data
  } = yield call(() => fetch(`${API_BASE_URL}/flights/cheap`).then(res => res.json()))
  yield put({
    type: 'REQUESTED_CHEAP_FLIGHTS_SUCCEEDED',
    payload: data
  })
}

export default function* rootSaga() {
  yield takeEvery('REQUESTED_CHEAP_FLIGHTS', fetchFlights)
}