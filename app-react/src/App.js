import { useState } from 'react'
import GroceryList from './components/GroceryList'

import './App.css';

function App() {
  const [hasReminder, setHasReminder] = useState(false)
  const sendReminder = (reminder) => {
      setHasReminder(reminder)
  }

  const groceryItems = [
    "eggs",
    "lettuce",
    "oat milk",
  ]

  return (
    <div className="App">
      <header className="App-header">
        <GroceryList
          title="Day 24 supply run" 
          groceryItems={groceryItems}
          hasReminder={hasReminder} 
          sendReminder={sendReminder}
        />
        <div className="groceries-alert">
          <p>{hasReminder ? 'Please buy groceries ya :)' : ''}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
