
<script setup>
  import { ref, onMounted } from 'vue'
import EventCard from '@/components/EventCard.vue'
import axios from 'axios'
import EventService from '@/services/EventService.js'

  const events = ref(null);

  onMounted(() => {
  // get events from mock db when component is created
  EventService.getEvents()
    .then((response) => {
      events.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})


</script>
 
<template>
    <h1>Events For Good</h1> <!-- new element -->

  <div class="events">
    
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<style scoped>
  .events{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
