<template>
    <div>
        <div class="card" v-for="(item, idx) of items" :key="item.id">
        <div class="list" >
            <div class="content" v-if="!item.isEdit">
            <h2>{{item.title}} </h2>
            <p> {{item.text}}</p>
            </div>
            <div class="form-control" v-if="item.isEdit">
                <input type="text" v-model="item.title">
            </div>
            <div class="buttons">
            <button class="btn danger" @click="removeItem(idx)">Удалить</button>
            <button class="btn warning" @click="editing(idx)">{{item.isEdit? 'Готово ': 'Изменить'}} </button>

            </div>
            </div>
        </div>
    </div>
</template>


<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
    computed : {
        ...mapGetters(['todos']),
        items() {
            return this.todos;
        }
    },
    methods: {
        ...mapMutations(['remove', 'edit']),
        removeItem(idx){
            this.remove({
                idx,
            })
      },
      editing(idx) {
          this.edit({
              idx
          })
      }
    },
}
</script>
<style scoped>
   .list {
       display: flex;
       justify-content: space-between;

   } 
</style>