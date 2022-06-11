<template>
  <div class="text-center uppercase font-bold text-2xl p-8">{{title}}</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Todo Title"
    }
  }
}
</script>

<style>

</style>