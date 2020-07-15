import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'  

const API_URL = 'http://64.225.46.83:3010/api/categories'

const Category = () => {

    const [category, setCategory] = useState([])

    const { id } = useParams()

    useEffect(() => {
        Axios.get(`${API_URL}/${id}`)
            .then(response => {
                setCategory(response.data)
            })
            .catch(error => console.log(error))
    }, [id])

    return (
        <div>
            <h3>{category.name}</h3>
            <br/>
            {category.description}
        </div>
    )
}

export default Category