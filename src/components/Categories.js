import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

import List from '@material-ui/core/List';


const API_URL = 'http://64.225.46.83:3010/api/categories'

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        Axios.get(API_URL)
            .then(response => {
                console.log(response.data)
                setCategories(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            {
                categories.map(category => <List key={category.id}>
                    <Link to={`categories/${category.id}`}>
                        {category.name}
                    </Link>
                </List>)
            }
        </div>
    )
}

export default Categories