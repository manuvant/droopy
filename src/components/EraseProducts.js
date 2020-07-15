import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
import { IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'

const API_URL = 'http://64.225.46.83:3010/api/products'

const EraseProducts = () => {

    const [open, setOpen] = useState({
        isOpen: false,
        text: ''
    })

    const [erase, setErase] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        Axios.delete(`${API_URL}/${id}`)
            .then(response => {
                console.log(response)
                setErase(true)
                setOpen({
                    ...open,
                    isOpen: true,
                    text: 'Eliminado'
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
    }, [id])

    const setClose = () => {
        setOpen({
            ...open,
            isOpen: false,
            text: ''
        })
    }
    
    return (
        <div>
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

export default EraseProducts