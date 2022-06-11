<template>
  <div v-show="openDialog" class="fixed bg-gray-800 h-screen bg-opacity-50 w-full ">
    
    <div class="my-20"></div>
    <div class="bg-white max-w-xl rounded-lg  mx-auto">
      <div class="border-b p-6 flex justify-between">
        <div class="font-bold">
          <slot name="title" />
        </div>
        
        <button @click="emitCloseEvent">X Close</button>
      </div>
      
      <div class="p-10">
        <slot />
      </div>
      
      
      <div class="flex justify-center p-6">
        <button @click="emitCloseEvent" class="px-4 rounded-full py-2 uppercase bg-accent1-500 text-white">Close Modal</button>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  props: {
    openDialog: Boolean
  },
  
  methods: {
    emitCloseEvent() {
      this.$emit('closeDialog')
    }
  }

}
</script>
