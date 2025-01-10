import { useParams } from "react-router-dom";
import ListPosts from "../components/ListPosts";

const SubCategory = () => {
const { sub } = useParams();

    return ( 
        <ListPosts url={`/posts?subcategoria=${sub}`}/>  
 
    );
};

export default SubCategory;