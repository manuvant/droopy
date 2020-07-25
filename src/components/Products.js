import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import { Paper, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles' 
import NewProduct from './NewProduct'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const API_URL = 'http://64.225.46.83:3010/api/products'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    link: {
        textDecoration: 'none',
        color: 'black',
    }
})

const Products = () => {

    const classes = useStyles()

    const [products, setProducts] = useState([])

    useEffect(() => {
        Axios.get(API_URL)
            .then(response => {
                console.log(response.data)
                setProducts(response.data)
            })
            .catch(error => console.log(error))
    }, [])
        

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table" >
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Descripción</TableCell>
                            <TableCell>Precio</TableCell>
                            <TableCell>Stock</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            products.map(product => (
                                <TableRow key={product.id}>
                                    <TableCell><Link to={`products/${product.id}`} className={classes.link} underline='hover'>{product.name}</Link></TableCell>
                                    <TableCell>{product.description}</TableCell>
                                    <TableCell>{product.price}</TableCell>
                                    <TableCell>{product.stock}</TableCell>
                                    <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
                                        Delete
                                    </Button>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <br/>
            <br/>
            <NewProduct/>
        </Container>
    )
}

export default Products
