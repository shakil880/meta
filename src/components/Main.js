import React from 'react'
import greek_salad from '../icons_assets/greek salad.jpg'
import bruchetta from '../icons_assets/bruchetta.svg'
import lemon_dessert from '../icons_assets/lemon dessert.jpg'

export default function Main() {
  return (
    <div>
      <main className="mar-20">
        <div className="special">
            <h1 className="special-heading">This Week's Special</h1>
            <button className="hero-button special-btn">Online Menu</button>
        </div>
        <div className="cards">
            <div className="card">
                <img className="card-image" src={greek_salad} alt=""/>
                <div className="card-special">
                    <p className="card-title">Greek Salad</p>
                    <p className="price">$18.89</p>
                </div>
                <p className="card-description">
                    Greek salad or horiatiki salad is a popular salad in Greek cuisine generally made with pieces of tomatoes, cucumbers, onion
                </p>
                <p className="card-delivery">Order Delivery</p>
                <p className="card-delivery-icon"></p>
            </div>

            <div className="card">
                <img className="card-image" src={bruchetta} alt=""/>
                <div className="card-special">
                    <p className="card-title">Bruchetta</p>
                    <p className="price">$13.89</p>
                </div>
                <p className="card-description">
                    Bruschetta is an antipasto from Italy consisting of grilled bread rubbed with garlic and topped with olive oil and salt. Variations may include toppings
                </p>
                <p className="card-delivery">Order Delivery</p>
                <p className="card-delivery-icon"></p>
            </div>

            <div className="card">
                <img className="card-image" src={lemon_dessert} alt=""/>
                <div className="card-special">
                    <p className="card-title">Lemon Dessert</p>
                    <p className="price">$18.89</p>
                </div>
                <p className="card-description">
                    From classic lemon treats like lemon cheesecake and lemon pound cake to melt in your mouth lemon curd and my favorite lemon bars, these recipes
                </p>
                <p className="card-delivery">Order Delivery</p>
                <p className="card-delivery-icon"></p>
            </div>
        </div>
    </main>
    </div>
  )
}
