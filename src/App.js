import React from 'react';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { FoodBox } from './components/FoodBox';

function App() {
  const [allFoods, setAllFoods] = useState(foods);

  return (
    <div className="App">
      {allFoods.map((currentElement) => {
        return (
          <>
            {foods.map((element) => {
              return <FoodBox food={element} />;
            })}
          </>
        );
      })}
    </div>
  );
}

export default App;
