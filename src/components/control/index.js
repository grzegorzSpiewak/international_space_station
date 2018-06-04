import React from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as issLocation from '../../modules/issLocation/actions'
import PropTypes from 'prop-types'
import spinner from '../../assets/spinner.gif'
import styles from './styles.css'

const id = '25544'

const Control = (props) => {
  const { fetchIssLocation, refreshIssLocation } = props.issDataActions
  const { showMarker, isFetching, error } = props.issData

  if (isFetching) {
    return (
      <section className={styles.Spinner}>
        <img src={spinner} alt='spinner' />
      </section>
    )
  }

  if (error) {
    return (
      <section className={styles.Spinner}>
        <h1 className={styles.HeaderText}>
          Server is down. Try later
        </h1>
      </section>
    )
  }

  return (
    <section className={styles.Control}>
      <div className={styles.Header}>
        <h1 className={styles.HeaderText}>
        {
          showMarker ?
            'there it is !!!'
          :
            'where in the world is the international space station ?'
        }
        </h1>
      </div>
      <div className={styles.BtnWrap}>
        {
          showMarker ?
            <button
              className={styles.Btn}
              onClick={() => refreshIssLocation()}
            >Reload
            </button>
            :
            <button
              className={styles.Btn}
              onClick={() => fetchIssLocation(id)}
            >Search
            </button>
        }
      </div>
    </section>
  )
}

Control.propTypes = {
  issDataActions: PropTypes.shape({
    fetchIssLocation: PropTypes.func.isRequired,
    refreshIssLocation: PropTypes.func.isRequired
  }).isRequired,
  issData: PropTypes.shape({
    showMarker: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
  }).isRequired,
}

const mapStateToProps = state => ({
  issData: state.issLocation,
})

const mapDispatchToProps = dispatch => ({
  issDataActions: bindActionCreators(issLocation, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Control)
