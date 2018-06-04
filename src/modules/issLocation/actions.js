import { getIssLocation } from '../../utils/wheretheissApiHelpers.js'
import { locationName } from '../../utils/googleApiHelpers.js'

export const FETCHING_GEOLOCATION_STARTED = 'FETCHING_GEOLOCATION_STARTED'
export const FETCHING_GEOLOCATION_SUCCES = 'FETCHING_GEOLOCATION_SUCCES'
export const FETCHING_GEOLOCATION_FAIL = 'FETCHING_GEOLOCATION_FAIL'
export const FETCHING_GEOLOCATION_NAME_SUCCES = 'FETCHING_GEOLOCATION_NAME_SUCCES'
export const FETCHING_GEOLOCATION_NAME_FAIL = 'FETCHING_GEOLOCATION_NAME_FAIL'
export const REFRESH_GEOLOCATION = 'REFRESH_GEOLOCATION'

export function fetchIssLocation(id) {
  return (dispatch) => {
    dispatch({
      type: FETCHING_GEOLOCATION_STARTED,
    })
    return getIssLocation(id)
    .then((location) => {
      dispatch({
        type: FETCHING_GEOLOCATION_SUCCES,
        location
      })
      let latitude = location.data.latitude
      let longitude = location.data.longitude
      locationName(latitude, longitude)
      .then((name) => {
        dispatch({
          type: FETCHING_GEOLOCATION_NAME_SUCCES,
          name
        })
      }).catch((error) => {
        dispatch({
          type: FETCHING_GEOLOCATION_NAME_FAIL,
          error
        })
      })
    }).catch((error) => {
      dispatch({
        type: FETCHING_GEOLOCATION_FAIL,
        error
      })
    })
  }
}

export function refreshIssLocation() {
  return (dispatch) => {
    dispatch({
      type: REFRESH_GEOLOCATION
    })
  }
}
