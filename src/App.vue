в<template>
  <div class="container">
    <div class="card">
      <div class="form-control">
      <label  for="title">Введите заголовок</label>
      <input type="text" id="title" v-model="title" @keypress.enter.="addTodo">
      <label for="text">Введите текст</label>
      <textarea  id="text" v-model="text" @keypress.enter.="addTodo"></textarea>
      </div>
        <button class="btn primary" @click="addTodo" :disabled= "!title || !text  ">Добавить</button>
    </div>
    <todo-item></todo-item>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import TodoItem from './todoItem.vue';
export default {
  ...mapGetters(['title', 'text', 'todos']),
  data() {
    return {
     title : '',
     text : '' ,
    }
  },
  methods: {
   ...mapMutations(['addTodoItem', 'edit']),
   addTodo() {
     if(this.title && this.text) {
          this.addTodoItem({
        title : this.title,
        text : this.text
      })
     } else {
        alert('Поля обязательно для заполнения!')       
     }

    
      this.title = '';
      this.text = '';
   }
    
  },
  components : {
    TodoItem

  }

}
</script>
<style scoped>
  #text {
    width: 400px;
    height: 100px;
  }
</style>