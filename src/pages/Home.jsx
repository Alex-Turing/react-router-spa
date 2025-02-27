import ListPosts from "../components/ListPosts";
import CategoriesList from "../components/CategoriesList";

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
      <CategoriesList url={'/categorias'} />
      <ListPosts url={"/posts"} />
    </main>
  )
}

export default Home
