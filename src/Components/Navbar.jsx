import './Styles/Navbar.css'

import React from 'react'

const Navbar = () => {
  return (
    <div class="maindiv">

    <div class="logo">

        <h1 class="colorwhitelogo">PUt<span class="colororange">AtToe</span>
        </h1>

        <p class="colorwhitelogo">one Solution</p>
    </div>
    <div class="nav">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Categories</li>
            <li>Service</li>
            <li>Contact</li>
        </ul>
    </div>
    <button>sign in</button>


</div>
  )
}

export default Navbar
