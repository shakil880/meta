import React from 'react'
import hero from '../icons_assets/restauranfood.jpg'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-info">
            <h1 className="hero-title">Little Lemon</h1>
            <p className="hero-location">Chicago</p>
            <p className="hero-description">We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist.</p>
            <button className="hero-button"><Link to="/order">Reserve a Table</Link></button>
        </div>
        <img className="hero-image" src={hero} height="270px" width="255px" alt=""/>
    </section>
    </div>
  )
}
