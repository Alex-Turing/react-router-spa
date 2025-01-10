import './assets/css/base/base.css';
import './assets/css/componentes/card.css';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page404 from './pages/Page404';
import Header from './components/Header';

function App() {

  
  return (
      <Router>
        {/**
         * Todo Aquello que se defina despues de <Router /> y antes de <Routes />
         * Seran componentes o elmeentos comunes para toda la pagina y permaneceran
         * sin importar a que ruta vaya el usuario. 
         */}
        <Header />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='about' element={ <About /> } />
          <Route path='*' element={ <Page404 /> } />
        </Routes>
      </Router>
  );
}

export default App;
