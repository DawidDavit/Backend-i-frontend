<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'

import { ref } from 'vue';
import axios from 'axios';

const message = ref('');

const sendMessage = async () => {
  if (message.value) {
    try {
      await axios.post('http://localhost:3200/test', { message: message.value });
      alert('Wiadomość wysłana!');
    } catch (error) {
      console.error('Błąd wysyłania wiadomości:', error);
      alert('Wystąpił błąd');
    }
  } else {
    alert('Proszę wpisać wiadomość.');
  }
};
</script>

<template>
  <div>
    <input type="text" v-model="message" placeholder="Type your message"></input>
    <button @click="sendMessage">Send</button>
  </div>
</template>
