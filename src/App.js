//import ShoppingCartIcon from './components/Header/ShoppingCartIcon';
import NavBar from './components/NavBar/NavBar';
//import logo from './logo.svg'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Products from './pages/Products';
import Cart from './pages/Cart';
//import About from './pages/About'; 
import About from './components/Aboutc/Aboutp.jsx';
import ShopNow from './pages/ShopNow.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path =  '' element={<Shop/>}/>
        <Route path =  '/toys' element={<ShopCategory category="toys"/>}/>
        <Route path =  '/accessories' element={<ShopCategory category="accessories"/>}/>
        <Route path =  '/gifts' element={<ShopCategory category = "gifts"/>}/>
        <Route path =  '/decor' element={<ShopCategory category = "decor"/>}/>
        <Route path =  '/about' element={<About/>}/>
        <Route path =  '/products' element={<Products/>}>
        <Route path =  ':productId' element={<Products/>}/>
        </Route>
        <Route path = '/shopnow' element={<ShopNow/>}/>
        <Route path =  '/cart' element={<Cart/>}/>

      </Routes>
      </BrowserRouter>
   </div>

  );
}

export default App;
