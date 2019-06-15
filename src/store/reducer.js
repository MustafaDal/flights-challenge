const initialState = {
  cheap: {
    list: [],
    loading: false,
    error: null
  },
  business: {
    list: [],
    loading: false,
    error: null
  }
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case 'REQUESTED_CHEAP_FLIGHTS':
      return {
        ...state,
        cheap: {
          ...state.cheap,
          loading: true,
          error: null
        }
      };
    case 'REQUESTED_CHEAP_FLIGHTS_SUCCEEDED':
      console.log('REQUESTED_CHEAP_FLIGHTS_SUCCEEDED', action)
      return {
        ...state,
        cheap: {
          list: action.payload,
          loading: false,
          error: null
        }
      };
    case 'REQUESTED_CHEAP_FLIGHTS_FAILED':
      return {
        ...state,
        cheap: {
          ...state.cheap,
          loading: false,
          error: action.payload
        }
      };
    default:
      return state
  }
}