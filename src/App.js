import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CalorieReceipe from './Components/CalorieReceipe';
import Cart from './Components/Cart';
import GetReceipes from './Components/GetReceipes';
import Header from './Components/Header/index'
import MealPlanner from './Components/MealPlanner';
import PopularReceipe from './Components/PopularReceipes';
import WineItems from './Components/WineItems';
import './App.css'
function App() {
  return (
    <div className='app p-2'>
    
    <Router>
    <Header/>
    <section>
      <Routes>
        <Route path='/' element={<PopularReceipe/>} />
        <Route path="/GetReceipes" element={<GetReceipes/>}/>
        <Route path="/CalorieReceipe" element={<CalorieReceipe/>}/>
        <Route path="/MealPlanner" element={<MealPlanner/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
    </section>
    </Router>
    </div>
  );
}

export default App;
