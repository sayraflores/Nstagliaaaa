import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Shop from './pages/Shop';
import FAQ from './pages/FAQ';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
<div className='App'>
<Navbar/>
<Routes>
  <Route path='/Home' exact="true" element= {<Home/>}/>
  <Route path='/Shop' exact="true" element= {<Shop/>}/>
  <Route path='/Contact' exact="true" element= {<Contact/>}/>
  <Route path='/FAQ' exact="true" element= {<FAQ/>}/>
</Routes>



<Footer/>
 
</div>

  );
  
}

export default App;
