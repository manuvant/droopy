import React, { useState } from 'react'
import Axios from 'axios'
import { FormControl, FormLabel, Input, Button, IconButton, Snackbar } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close'

const API_URL = 'http://64.225.46.83:3010/api/products'

const EditProduct = () => {

    const [open, setOpen] = useState({
        isOpen: false,
        text: ''
    })

    const { id } = useParams()

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

    const setClose = () => {
        setOpen({
            ...open,
            isOpen: false,
            text: ''
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()

        Axios.put(`${API_URL}/${id}`, product)
            .then(response => {
                console.log(response.data) // no hay que hacer nada porque ya edito los datos
                setOpen({
                    ...open,
                    isOpen: true,
                    text: 'Modificado'
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
    
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <FormControl>
                    <FormLabel>Nombre</FormLabel>
                    <Input
                        name='name'
                        onChange={onChangeHandler}
                        value={product.name} />
                </FormControl>
                <FormControl>
                    <FormLabel>Descripción</FormLabel>
                    <Input
                        name='description'
                        onChange={onChangeHandler}
                        value={product.description} />
                </FormControl>
                <FormControl>
                    <FormLabel>Precio</FormLabel>
                    <Input
                        name='price'
                        onChange={onChangeHandler}
                        value={product.price} />
                </FormControl>
                <FormControl>
                    <FormLabel>Stock</FormLabel>
                    <Input
                        name='stock'
                        onChange={onChangeHandler}
                        value={product.stock} />
                </FormControl>
                <Button type='submit' variant='contained' color='primary'>Guardar cambios</Button>
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
        </div>

    )
}

export default EditProduct