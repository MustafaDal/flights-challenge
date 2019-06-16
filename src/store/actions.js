export function requestCheapFlights() {
  return {
    type: 'REQUESTED_CHEAP_FLIGHTS'
  }
}

export function addCheapFlight(data) {
  return {
    type: 'ADD_A_CHEAP_FLIGHT',
    payload: data
  }
}

export function requestBusinessFlights() {
  return {
    type: 'REQUESTED_BUSINESS_FLIGHTS'
  }
}

export function addBusinessFlight(data) {
  return {
    type: 'ADD_A_BUSINESS_FLIGHT',
    payload: data
  }
}