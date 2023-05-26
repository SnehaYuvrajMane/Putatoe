import './Styles/Content.css'
import image from "./images/image.png"
import cart from './images/cart.png'
import cons from './images/cons.png'
import consult from './images/consult.png'
import React from 'react'

const Content = () => {
  return (
    <div class="seconddiv ">
        <div class="image">
            <img src={image} alt="img can not load"/>
        </div>
        <div class="content colorwhitelogo">
            <h1>Bring The Store <span class="colororange"> To At Your Door </span>
            </h1>
            <p>Best All In One Solution Ever. <br/>Pick your desired Product from the menu.</p>

            <div class="buttons">
                <button>How to order</button>
                <button>See categories</button>

            </div>

            <div class="reviews">
                Our Happy Customers
                <br/>
                4.5* (10.2K Reviews)
            </div>

        </div>
        <div class="cards colorwhitelogo">
            <div class="card">
                <h2 class="colororange">Daily Needs</h2>
                <p>

                    Grocery
                    <br/>
                    Dairy Products
                    <img src={cart} alt="img can't be loaded"/>
                </p>
            </div>
            <div class="card">
                <h2 class="colororange">Construction</h2>
                <p>
                    Construction Material Shop
                    <br/>
                    Modular Kitchen
                    <br/>
                    Interior Designing
                    <img src={cons} alt="img can't be loaded"/>
                </p>

            </div>
            <div class="card">
                <h2 class="colororange">Consultancy</h2>
                <br/>
                <p>
                    CA,CS <br/>
                    Legal Services
                    <img src={consult} alt="img can't be loaded"/>
                </p>
            </div>
        </div>


    </div>
  )
}

export default Content
