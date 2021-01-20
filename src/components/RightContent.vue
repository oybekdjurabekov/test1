<template>
  <div class="content">
    <div v-for="(item, index) in items" :key="index" @click="addToBasket(item)" :class="item.activeClass ? 'active item' : 'item'">
      <div class="caption">
        <img :src="item.img" alt=""/>
        <div>
          <strong>{{item.title}}</strong>
          <span>{{item.price}} sum</span>
        </div>
      </div>
      <span>200</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RightContent",
    props:['items'],
    methods:{
      addToBasket(item){
        this.$emit('addToBasket', item)
      }
    }
  }
</script>

<style scoped>

</style>