import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { getData } from "../api/api";
import "../assets/css/blog.css"

const CategoriesList = ({url}) => {

    const [categories, setCategories] = useState([]);

    /**
     * getData es una funcion importada desde api.js
     * que basicamente simula un backen usando una
     * base de datos generada en un archivo json llamado db.json
     * los parametros que toma la funcion son el endpoint del
     * archivo db.json del cual quiero tomar la informacion y
     * la funcion para guardar la informacion
     */
    useEffect(() => {
        getData(url, setCategories)
    }, [url])

    return (
        <ul className="category-list container flex">
            {
                categories.map(category => (
                    <Link to={`/category/${category.id}`} key={category.id}>
                        <li className={`category-list__category category-list__category--${category.id}`}>
                            {category.nombre}
                        </li>
                    </Link>
                ))
            }
        </ul>
    )
}

export default CategoriesList;