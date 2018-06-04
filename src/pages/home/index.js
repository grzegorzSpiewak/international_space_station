import React from 'react'
import styles from './styles.css'
import WorldMap from '../../components/map'
import Control from '../../components/control'
import Result from '../../components/result'

const Home = () => (
  <section className={styles.page}>
    <WorldMap />
    <Result />
    <Control />
  </section>
)

export default Home
