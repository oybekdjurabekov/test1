<template>
  <div class="hello">
    <form @submit.prevent="searchText">
      <input type="text" v-model="search" value=""/>
      <button>Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      search:null
    }
  },
  methods:{
    searchText(){
      this.$emit('searchText', this.search)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
