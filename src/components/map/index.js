import React from "react"
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker
} from "react-simple-maps"
import world from '../../assets/world.json'
import styles from './styles.css'

const WorldMap = (props) => {
  const { latitude, longitude, showMarker } = props.issData
  const locationData = {
    coordinates: [
      longitude,
      latitude,
    ]
  }

  return (
    <div className={styles.Wrapper}>
      <ComposableMap
        projectionConfig={{ scale: 175 }}
        width={980}
        height={551}
      >
        <ZoomableGroup>
          <Geographies geography={world}>
            {(geographies, projection) => geographies.map(geography => (
              <Geography
                key={ geography.id }
                geography={ geography }
                projection={ projection }
                style={{
                  default: {
                    fill: "#607D8B",
                    stroke: "#ECEFF1",
                    strokeWidth: 0.75,
                    outline: "none",
                  },
                  hover: {
                    fill: "#607D8B",
                    stroke: "#ECEFF1",
                    strokeWidth: 0.75,
                    outline: "none",
                  },
                  pressed: {
                    fill: "#FF5722",
                    stroke: "#607D8B",
                    strokeWidth: 0.75,
                    outline: "none",
                  },
                }}
              />
            ))}
          </Geographies>
          {
            showMarker ?
              <Markers>
                <Marker
                  marker={locationData}
                  >
                  <circle
                    cx={0}
                    cy={0}
                    r={6}
                    fill="#F63A55"
                    stroke="#DF3702"
                />
                </Marker>
              </Markers>
            :
              null
          }
        </ZoomableGroup>
      </ComposableMap>
    </div>
  )
}

WorldMap.propTypes = {
  issData: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    showMarker: PropTypes.bool.isRequired
  }).isRequired,
}

const mapStateToProps = state => ({
  issData: state.issLocation,
})

export default connect(mapStateToProps)(WorldMap)
