
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';


function App() {

  return (
    <>
        <Header />
        <Routes>
          <Route path='/' element={<ProductListing />}/>
          <Route path='/product/:productId' element={<ProductDetail />} />
        </Routes>
      
    </>
  )
}

export default App;
