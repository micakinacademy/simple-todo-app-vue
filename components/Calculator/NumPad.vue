<template>
  <div>
    <div class="grid grid-cols-3">
      <button @click="showNumber(number)" v-for="number in 8" :key="number"  class="text-white text-2xl text-center border border-gray-200 p-6">{{number}}</button>
    </div>
  </div>
</template>

<script>
export default {
  
  methods: {
    showNumber(val) {
      this.$emit('showLastClicked', val)
    }
  }
}
</script>

<style>

</style>