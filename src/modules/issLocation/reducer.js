import {
  FETCHING_GEOLOCATION_STARTED,
  FETCHING_GEOLOCATION_SUCCES,
  FETCHING_GEOLOCATION_FAIL,
  FETCHING_GEOLOCATION_NAME_SUCCES,
  FETCHING_GEOLOCATION_NAME_FAIL,
  REFRESH_GEOLOCATION
} from './actions'

const INITIAL_STATE = {
  latitude: null,
  longitude: null,
  location: '',
  showMarker: false,
  isFetching: false,
  error: false,
}

function issLocation(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCHING_GEOLOCATION_STARTED:
    return {
      ...state,
      isFetching: true
    }
  case FETCHING_GEOLOCATION_SUCCES:
    return {
      ...state,
      latitude: action.location.data.latitude,
      longitude: action.location.data.longitude,
    }
  case FETCHING_GEOLOCATION_FAIL:
    return {
      ...state,
      error: true
    }
  case FETCHING_GEOLOCATION_NAME_SUCCES:
    if (action.name.data.status === 'ZERO_RESULTS') {
      return {
        ...state,
        location: 'The ISS is currently flying over an uninhabited area',
        isFetching: false,
        showMarker: true
      }
    }
    return {
      ...state,
      location: action.name.data.results[0].formatted_address,
      isFetching: false,
      showMarker: true
    }
  case FETCHING_GEOLOCATION_NAME_FAIL:
    return {
      ...state,
      error: true,
    }
  case REFRESH_GEOLOCATION:
    return {
      ...state,
      latitude: null,
      longitude: null,
      location: '',
      showMarker: false,
      isFetching: false,
      error: false,
    }
  default:
    return state
  }
}

export default issLocation
