<template>
  <div>
    <div class="text-white max-w-2xl bg-gray-500 p-6 mx-auto">
      <CalculatorScreen />
      <CalculatorNumPad @showLastClicked="displayNumber"/>
       
       <br/> 
      The Last Number that was cicked is : {{last_clicked_number}}
    </div>
  </div>
</template>

<script>
export default {
  
  data(){
    return {
      last_clicked_number:''  
    }
  },
  
  methods: {
    displayNumber(val){
      this.last_clicked_number = val;
    }
  }
}
</script>

<style>

</style>