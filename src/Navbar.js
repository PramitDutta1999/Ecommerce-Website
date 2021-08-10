import React from 'react'
import { useSelector } from 'react-redux'
export default function Navbar() {
    const cartobj = useSelector(store => store.cartReducer)

    return (
        <div>

            <nav class="navbar navbar-expand-lg ">
                <a class="navbar-brand" href="/">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/additem">Add Item</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/cart">Cart: {cartobj.cartitems.length} </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
