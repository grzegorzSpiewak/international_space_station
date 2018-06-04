import reducer from './reducer.js'
import * as types from './actions.js'
import expect from 'expect'

const INITIAL_STATE = {
  latitude: null,
  longitude: null,
  location: '',
  showMarker: false,
  isFetching: false,
  error: false,
}

describe('Get International Space Station Location reducer', () => {

  it('Should return initial state', () => {
    const result = reducer(undefined, { type: 'unknown' })
    expect(result).toEqual(INITIAL_STATE)
  })

  it('Should handle FETCHING_GEOLOCATION_STARTED', () => {
    const stateMock = {
      isFetching: false
    }
    const actionMock = {
      type: types.FETCHING_GEOLOCATION_STARTED,
    }
    const result = reducer(stateMock, actionMock)
    const expectedResult = {
      isFetching: true
    }
    expect(result).toEqual(expectedResult)
  })

  it('Should handle FETCHING_GEOLOCATION_SUCCES', () => {
    const stateMock = {
      latitude: null,
      longitude: null
    }
    const actionMock = {
      type: types.FETCHING_GEOLOCATION_SUCCES,
      location: {
        data: {
          latitude: '11111111',
          longitude: '22222222'
        }
      }
    }
    const result = reducer(stateMock, actionMock)
    const expectedResult = {
      latitude: actionMock.location.data.latitude,
      longitude: actionMock.location.data.longitude
    }
    expect(result).toEqual(expectedResult)
  })

  it('Should handle FETCHING_GEOLOCATION_FAIL', () => {
    const stateMock = {
      error: false
    }
    const actionMock = {
      type: types.FETCHING_GEOLOCATION_FAIL
    }
    const result = reducer(stateMock, actionMock)
    const expectedResult = {
      error: true
    }
    expect(result).toEqual(expectedResult)
  })

  it('Should handle FETCHING_GEOLOCATION_NAME_SUCCES when iSS is over unhabitated area', () => {
    const stateMock = {
      location: '',
      isFetching: true,
      showMarker: false
    }
    const actionMock = {
      type: types.FETCHING_GEOLOCATION_NAME_SUCCES,
      name: {
        data: {
          status: 'ZERO_RESULTS',
        }
      }
    }
    const result = reducer(stateMock, actionMock)
    const expectedResult = {
      location: 'The ISS is currently flying over an uninhabited area',
      isFetching: false,
      showMarker: true
    }
    expect(result).toEqual(expectedResult)
  })

  it('Should handle FETCHING_GEOLOCATION_NAME_SUCCES when iSS is over habitaed area', () => {
    const stateMock = {
      location: '',
      isFetching: true,
      showMarker: false
    }
    const actionMock = {
      type: types.FETCHING_GEOLOCATION_NAME_SUCCES,
      name: {
        data: {
          results: [
            { formatted_address: 'location 1' },
            { formatted_address: 'location 1' },
            { formatted_address: 'location 1' },
          ]
        }
      }
    }
    const result = reducer(stateMock, actionMock)
    const expectedResult = {
      location: actionMock.name.data.results[0].formatted_address,
      isFetching: false,
      showMarker: true
    }
    expect(result).toEqual(expectedResult)
  })

  it('Should handle FETCHING_GEOLOCATION_NAME_FAIL', () => {
    const stateMock = {
      error: false
    }
    const actionMock = {
      type: types.FETCHING_GEOLOCATION_NAME_FAIL
    }
    const result = reducer(stateMock, actionMock)
    const expectedResult = {
      error: true
    }
    expect(result).toEqual(expectedResult)
  })

  it('Should handle REFRESH_GEOLOCATIONL', () => {
    const stateMock = {
      latitude: '11111111',
      longitude: '22222222',
      location: 'location 1',
      showMarker: true,
      isFetching: false,
      error: false,
    }
    const actionMock = {
      type: types.REFRESH_GEOLOCATION
    }
    const result = reducer(stateMock, actionMock)
    const expectedResult = INITIAL_STATE
    expect(result).toEqual(expectedResult)
  })
})
