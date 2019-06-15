import {
  put,
  call,
  takeEvery
} from 'redux-saga/effects'
import http from '../http'

export function* fetchCheapFlights() {
  const {
    data: {
      data: payload
    }
  } = yield call(() => http.get(`/flights/cheap`))

  yield put({
    type: 'REQUESTED_CHEAP_FLIGHTS_SUCCEEDED',
    payload
  })
}

export function* fetchBusinessFlights() {
  const {
    data: {
      data: payload
    }
  } = yield call(() => http.get(`/flights/business`))

  yield put({
    type: 'REQUESTED_BUSINESS_FLIGHTS_SUCCEEDED',
    payload: payload.map(item => {
      return {
        route: `${item.departure}-${item.arrival}`,
        departure: item.departureTime,
        arrival: item.arrivalTime
      }
    })
  })
}

export default function* rootSaga() {
  yield takeEvery('REQUESTED_CHEAP_FLIGHTS', fetchCheapFlights)
  yield takeEvery('REQUESTED_BUSINESS_FLIGHTS', fetchBusinessFlights)
}