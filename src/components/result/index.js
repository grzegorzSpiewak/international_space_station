import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AnimatedWrap from '../animatedWrap'
import styles from './styles.css'

const Result = (props) => {
  const { showMarker, location } = props.issData

  return (
    <AnimatedWrap
      in={showMarker}
    >
      <span className={styles.Box}>
        <h1 className={styles.Text}>{location}</h1>
      </span>
    </AnimatedWrap>
  )
}

Result.propTypes = {
  showMarker: PropTypes.bool,
  location: PropTypes.string
}

const mapStateToProps = state => ({
  issData: state.issLocation,
})

export default connect(mapStateToProps)(Result)
