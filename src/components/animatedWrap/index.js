import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import style from './style.css'

const AnimatedWrap = (props) => {
  return (
    <CSSTransition
      timeout={{enter: 500, exit: 0}}
      in={props.in}
      classNames={{
        enter: style.fadeEnter,
        enterActive: style.fadeEnterActive,
        leave: style.fadeExit,
        leaveActive: style.fadeExitActive
      }}
      mountOnEnter
      unmountOnExit
    >
      {props.children}
    </CSSTransition>
  )
}

AnimatedWrap.propTypes = {
  in: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

export default AnimatedWrap
