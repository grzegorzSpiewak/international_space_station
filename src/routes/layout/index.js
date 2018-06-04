import React from 'react'
import { Switch, Route } from 'react-router-dom'
/* Pages containers*/
import Home from '../../pages/home'
import ErrorPage from '../../pages/error'

import style from './style.css'

const Layout = () => {
  return (
    <div className={style.page}>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route render={() => <ErrorPage />} />
      </Switch>
    </div>
  )
}

export default Layout
