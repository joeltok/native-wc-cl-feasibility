<script setup>
const props = defineProps(['title', 'groceryItems', 'hasReminder'])
const emit = defineEmits(['sendReminder'])

const onReminderClick = () => {
  emit('sendReminder', !props.hasReminder)
}
</script>

<template>
  <div id="grocery-list">
    <h2 id="title">{{ title }}</h2>
    <ul id="grocery-items">
      <li v-for="item in groceryItems" key="item">
        {{ item }}
      </li>
    </ul>
    <button @click="onReminderClick">{{ !props.hasReminder ? 'Send Reminder' : 'Cancel Reminder'}}</button>
  </div>
</template>

<style>
#grocery-list {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: aliceblue;
  max-width: 150px;
}

#grocery-list > h2, #grocery-items > li {
  color: black;
  margin: 0;
  padding: 0;
}

#grocery-list > h2 {
  font-size: 16px;
}

#grocery-items {
  margin: 10px 0;
  padding: 0 0 0 20px;
  text-align: left;
}

#grocery-items > li {
  font-size: 12px;
}
</style>