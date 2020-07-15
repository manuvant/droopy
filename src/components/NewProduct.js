import React, { useState } from 'react'
import Axios from 'axios'
import { FormControl, FormLabel, Input, Button, Container, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'

const API_URL = 'http://64.225.46.83:3010/api/products'

const useStyles = makeStyles({
    formControl: {
        margin: 15,
        minWidth: 120,
    },
    button: {
        margin: 15,
    },
})

const NewProduct = () => {

    const [open, setOpen] = useState({
        isOpen: false,
        text: ''
    })

    const classes = useStyles()

    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        stock: '',
        isImportant: true,
        created: new Date()
    })

    const onChangeHandler = (e) => {
        const { name, value } = e.target

        setProduct({
            ...product,
            [name]: value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()

        Axios.post(API_URL, product)
            .then(response => {
                const data = response.data
                const newProduct = { ...product, data }
                setProduct(newProduct)
                setOpen({
                    ...open,
                    isOpen: true,
                    text: 'Producto creado'
                })
            })
            .catch(error => {
                console.log(error)
                setOpen({
                    ...open,
                    isOpen: true,
                    text: 'Hubo un error'
                })
            })
    }

    const setClose = () => {
        setOpen({
            ...open,
            isOpen: false,
            text: ''
        })
    }
    
    return (
        <Container>
            <form onSubmit={onSubmitHandler}>
                <FormControl className={classes.formControl}>
                    <FormLabel>Nombre</FormLabel>
                    <Input
                        name='name'
                        onChange={onChangeHandler}
                        value={product.name} />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <FormLabel>Descripción</FormLabel>
                    <Input
                        name='description'
                        onChange={onChangeHandler}
                        value={product.description} />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <FormLabel>Precio</FormLabel>
                    <Input
                        name='price'
                        onChange={onChangeHandler}
                        value={product.price} />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <FormLabel>Stock</FormLabel>
                    <Input
                        name='stock'
                        onChange={onChangeHandler}
                        value={product.stock} />
                </FormControl>
                <Button className={classes.button} color='primary' variant='contained' type='submit'>Crear producto</Button>
            </form>
            <Snackbar
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                open={open.isOpen}
                onClose={setClose}
                autoHideDuration={3000}
                message={<span>{open.text}</span>}
                action={
                    <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={setClose}>
                        <CloseIcon />
                    </IconButton>
                }
            />
        </Container>
    )
}

export default NewProduct