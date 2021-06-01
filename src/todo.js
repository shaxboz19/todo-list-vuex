import {createStore} from 'vuex'

export default createStore ({
  state () {
      return {
          todos : [],
          
      }
  },
  mutations : {
     addTodoItem(state, payload) {
         console.log(payload);
         state.todos.push({ title : payload.title, text : payload.text, isEdit : false, id: state.todos.length})
         

     },
     remove(state, payload) {
        state.todos.splice(payload.idx, 1)
     },
     edit(state, payload) {
       let item = state.todos[payload.idx];
       item.isEdit = ! item.isEdit;
       
     }

  },
  getters : {
      title(state) {
        return state.title;
      },
      text(state) {
        return state.text;
      },
      todos(state) {
        return state.todos;
      }
  }  
})