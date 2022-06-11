<template>
  <div>
    <div class="flex items-center justify-between bg-gray-100 p-6 my-2" :class="completed ? 'border-l-4 border-accent1-500 text-accent2-300' : ''">
      <div @click="emitViewEvent(Todo)">{{Todo.title}}</div>
      <div @click="emitDeleteEvent(Index)">Delete</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Todo: {
      default: "Todo Item Name",
      type: Object
    },
    
    Index: {
      type: Number
    },
    
    Completed: {
      type:Boolean
    }
  },
  
  data(){
    return {
      completed: false
    }
  },
  
  methods: {
    changeTodoState(){
      this.completed = !this.completed
    },
    
    emitDeleteEvent(todo_id){
      this.$emit("deleteTodo", todo_id)
    },
    
    emitViewEvent(todo){
      this.$emit("viewTodo", todo)
    }
  }

}
</script>

<style>

</style>