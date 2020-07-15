import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Categories from './components/Categories'
import Category from './components/Category'
import Products from './components/Products'
import Product from './components/Product'

const App = () => {
    return (
        <div>
            <Router>
                <Link to='/'>Home</Link>
                <Link to='/categories'>Categorias</Link>
                <Link to='/products'>Productos</Link>
                <Link to='/ventas'>Ventas</Link>
                <Route exact path='/'>
                    Home
                </Route>
                <Route exact path='/categories/:id'>
                    <Category/>
                </Route>
                <Route exact path='/categories'>
                    <Categories/>
                </Route>
                <Route exact path='/products/:id'>
                    <Product/>
                </Route>
                <Route exact path='/products'>
                    <Products/>
                </Route>
                <Route exact path='/ventas'>
                    Ventas
                </Route>
            </Router>
        </div>
    )
}

export default App