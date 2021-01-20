<template>
  <div class="left-side">
    <ul>
      <li v-for="(item, index) in category" :key="index" >
        <a href="#" @click.prevent="filterCategory(item.id)">{{item.title}} <strong>({{categoryItemLenth[item.id].length}})</strong></a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Aside",
    props:['category', 'categoryItemLenth'],
    methods:{
      filterCategory(id){
        this.$emit('filterCategory', id)
      }
    }
  }
</script>

<style scoped>

</style>