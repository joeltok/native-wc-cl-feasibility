<script setup>
import { ref } from 'vue'
import GroceryList from './components/GroceryList.vue'

const groceryItems = [
  "eggs",
  "lettuce",
  "oat milk",
]

const hasReminder = ref(false)
const sendReminder = (val) => {
  hasReminder.value = val
}
</script>

<template>
  <main>
    <grocery-list 
      title="Day 23 supply run"
      :groceryItems="groceryItems"
      :hasReminder="hasReminder"
      @sendReminder="sendReminder"
    ></grocery-list>
    <div className="groceries-alert">
      <p>{{ hasReminder ? 'Please buy groceries ya :)' : '' }}</p>
    </div>
  </main>
</template>

<style scoped>
.groceries-alert {
  height: 20px;
}

.groceries-alert > p {
  font-size: 12px;
}
</style>
