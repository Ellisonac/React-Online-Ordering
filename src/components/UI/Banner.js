import React from 'react'
import Cart from '../Cart/Cart'
import classes from './Banner.module.css'

const Banner = props => {

  return (
    <header className={classes.banner}>
      <div>
        <h1>Purchase Food</h1>
      </div>
      <Cart ></Cart>
    </header>
  )
}

export default Banner;