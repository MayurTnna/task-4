import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import ItemCard from './components/ItemCard';
import ShoppingCart from './components/ShoppingCart';



function App() {
  const [showCard , setShowCard] = useState(false)
  return (
    <div className="App">
      <Header toggleShowCard={setShowCard}/>
      <ItemCard/>
      {showCard && <ShoppingCart/>}
    
    </div>
  );
}

export default App;
