<template>
  <LayoutsSimple>
    
    <div class="absolute">
      
      
      <DialogsSimple @closeDialog="toggleAddNewTodoModal" :openDialog="add_new_todo_modal">
        <template v-slot:title>
          <div>Add New Todo</div>
        </template>
        
        <div class="">
          
          <form @submit.prevent="SubmitAddNewTodoForm">
            <div class="my-2">
              <label>Todo Title</label>
              <input v-model="form.todo_title" type="text" class="my-2 w-full bg-gray-100 px-6 py-4" />
            </div>
            
            <div class="my-2">
              <label>Todo Content</label>
              <input v-model="form.todo_content" type="text" class="my-2 w-full bg-gray-100 px-6 py-4" />
            </div>
            
            
            <button class="border rounded-full bg-accent2-500 text-white px-4 py-2">
              Add New Todo
            </button>
            
            
            {{form.todo_title}}
            <br />
          </form>
        </div>
      
      </DialogsSimple>
      
      
      
      
      
      <DialogsSimple @closeDialog="toggleTodoDetailsModal" :openDialog="todo_details_modal">
        <template v-slot:title>
          <div v-if="selected_todo">{{selected_todo.title}}</div>
        </template>
        
        <div v-if="selected_todo" class="bg-gray-100">
          {{selected_todo.content}}
        </div>
      
      </DialogsSimple>
    </div>
    
    
    <TodoContainer>
      <TodoTitle :title="'Main Lifestyle'"/>
      
      <div class="flex justify-center my-6">
        <button @click="toggleAddNewTodoModal" class="px-4 rounded-full py-2 uppercase bg-accent1-500 text-white">Add New Todo</button>
      </div>
      
      
      <TodoItem @viewTodo="showTodoDetailsDialog" @deleteTodo="showDeleteDialog" v-for="(todo, index) in todos" :key="todo.id" :Todo="todo" :Index="index"/>

    </TodoContainer>
  </LayoutsSimple>
</template>

<script>
export default {
  data(){
    return {
      
      form: {
        todo_title: '',
        todo_content: ''
      },
      selected_todo: '',
      todo_details_modal: false,
      add_new_todo_modal: false,
      
      todos: [
        {
          id: 1,
          title: "Goto Bed at Night",
          content: "Goto Bed when it is exactly 9:00 pm"
        },
        
        {
          id: 2,
          title: "Refactor the homepage",
          content: "Refactor Tojum homepage Designs"
        },
        
        {
          id: 3,
          title: "Push to Github",
          content: "Ensure all remote repository is up to date with offline"
        },
        
        {
          id: 4,
          title: "Goto Church in the evening",
          content: "There is Special Thanksgiving Service Today"
        },
        
        {
          id: 5,
          title: "Send Happy Birthday message to clara",
          content: "Clara is a year older today, make sure you send lovely messages"
        },
        
        {
          id: 6,
          title: "Eat and sleep",
          content: "Wow! You need to get some rest"
        },
      ]
    }
  },
  
  methods: {
    showDeleteDialog(Todo) {
      
      this.todos.splice(Todo, 1)
      console.log("Item is deleted succesfully")
      
    },
    
    toggleTodoDetailsModal(){
      this.todo_details_modal = !this.todo_details_modal
    },
    
    toggleAddNewTodoModal(){
      this.add_new_todo_modal = !this.add_new_todo_modal
    },
    
    showTodoDetailsDialog(Todo){
      this.selected_todo = Todo;
      this.toggleTodoDetailsModal()
    },
    
    SubmitAddNewTodoForm(){
      let todo_id = Math.floor(Math.random() * 100);
      
      let todo_data = {
        id: todo_id,
        title: this.form.todo_title,
        content: this.form.todo_content
      }
      
      this.todos.push(todo_data)
      
      this.toggleAddNewTodoModal()
      
      this.form.todo_title = '';
      this.form.todo_content = ''
    }
  }
  
}
</script>
