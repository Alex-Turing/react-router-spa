import { useState, useEffect } from 'react'
import "../assets/css/blog.css"
import { getData } from '../api/api'
import CategoriesList from '../components/CategoriesList'
import ListPosts from '../components/ListPosts'
import { useParams, Routes, Route, Link, useResolvedPath } from 'react-router-dom'
import SubCategory from './SubCategory'

const Category = () => {
    const [subCategory, setSubCategory] = useState([]);
    const { id } = useParams();
    const url = useResolvedPath("").pathname;

    useEffect(() => {
        getData(`/categorias?id=${id}`, (response) => {
            setSubCategory(response[0].subcategorias);
        });
    }, [id])

    return (
        <>
            <div className="container">
                <h2 className="title-page">Pet News</h2>
            </div>
            <CategoriesList />
            <ul className='category-list container flex'>
                {
                    subCategory.map((sub) => (
                        <li className={`category-list__category category-list__category--${id}`} key={sub}>
                            <Link to={`${url}/${sub}`}>{sub}</Link>
                        </li>
                    ))
                }
            </ul>
            <Routes>
                <Route path='/' element={<ListPosts url={`/posts?categoria=${id}`}/>} />
                <Route path='/:sub' element={<SubCategory />} />
            </Routes>
            
        </>
    )
}

export default Category