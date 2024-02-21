import { useState } from 'react'

import './GroceryList.css'

export default function GroceryList({ title, groceryItems, hasReminder, sendReminder }) {
  const onReminderClick = () => {
    sendReminder(!hasReminder)
  }

  return (
    <div id="grocery-list">
      <h2 id="title">{ title }</h2>
      <ul id="grocery-items">
        { groceryItems.map((item) => <li key={ item }>{ item }</li>) }
      </ul>
      <button onClick={onReminderClick}>{!hasReminder ? 'Send Reminder' : 'Cancel Reminder'}</button>
    </div>
  )
}

