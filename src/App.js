import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Categories from './components/Categories'
import Category from './components/Category'
import Products from './components/Products'
import Product from './components/Products'
import Button from '@material-ui/core/Button'


const App = () => {
    return (
        <div>
            <Router>
                <Button variant="contained">
                    <Link to='/'>Home</Link>
                </Button>
                <Button variant="contained">
                    <Link to='/categories'>Categorias</Link>
                </Button>
                <Button variant="contained">
                    <Link to='/products'>Productos</Link>
                </Button>
                <Button variant="contained">
                <Link to='/ventas'>Ventas</Link>
                </Button>
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
                    <Products/>
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