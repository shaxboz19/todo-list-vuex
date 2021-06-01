import { createApp } from 'vue';
import App from './App.vue';
import './theme.css';
import todo from './todo'

const app = createApp(App);
app.use(todo)
app.mount('#app');




