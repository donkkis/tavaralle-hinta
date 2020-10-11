import React, { useState, useEffect } from 'react'
import axios from 'axios'
import QueryResults from './QueryResults'


const Search = ({ query, setQuery, classes }) => {
    const [phones, setPhones] = useState(null)

    useEffect(() => {
        const fetchPhones = async () => {
            const res = await axios.get(`http://localhost:3002/api/search/${query}`)
            console.log(res.data)
            setPhones(res.data)
            console.log(phones)
            setQuery('')            
        }
        fetchPhones()
    })

    return (
        <QueryResults phones={phones} classes={classes} />
    )
}

export default Search