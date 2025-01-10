import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { getData } from "../api/api";
import "../assets/css/blog.css"

const CategoriesList = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getData(`/categorias`, setCategories)
    }, [])

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