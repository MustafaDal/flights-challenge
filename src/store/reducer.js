const initialState = {
  list: [],
  loading: false,
  error: null
}

export function cheapFlights(state = initialState, { type, payload }) {
  switch (type) {
    case 'REQUESTED_CHEAP_FLIGHTS':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'REQUESTED_CHEAP_FLIGHTS_SUCCEEDED':
      return {
        ...state,
        list: payload,
        loading: false,
        error: null
      };
    case 'REQUESTED_CHEAP_FLIGHTS_FAILED':
      return {
        ...state,
        loading: false,
        error: payload
      };
    case 'ADD_A_CHEAP_FLIGHT':
      return {
        ...state,
        list: [
          payload,
          ...state.list
        ]
      };
    default:
      return state
  }
}

export function businessFlights(state = initialState, { type, payload }) {
  switch (type) {
    case 'REQUESTED_BUSINESS_FLIGHTS':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'REQUESTED_BUSINESS_FLIGHTS_SUCCEEDED':
      return {
        ...state,
        list: payload,
        loading: false,
        error: null
      };
    case 'REQUESTED_BUSINESS_FLIGHTS_FAILED':
      return {
        ...state,
        loading: false,
        error: payload
      };
    case 'ADD_A_BUSINESS_FLIGHT':
      return {
        ...state,
        list: [
          payload,
          ...state.list
        ]
      };
    default:
      return state
  }
}