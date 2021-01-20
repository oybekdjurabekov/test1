<template>
  <div class="home">
    <div style="display: flex; width: 900px; margin:0 auto; justify-content: space-between; align-items: center">
      <SearchPanel @searchText="searchText"/>
      <span>Корзина {{getCounter}}</span>
    </div>
    <div class="main">
      <Aside @filterCategory="filterCategory" :categoryItemLenth="categoryItemLenth" :category="getCategory"/>
      <RightContent @addToBasket="addToBasket" :items="getItems"/>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import SearchPanel from '../components/SearchPanel';
  import Aside from '../components/Aside';
  import RightContent from '../components/RightContent';
  import { mapGetters } from "vuex";

  export default {
    name: 'Home',
    data() {
      return {}
    },
    methods: {
      searchText(value) {
        this.$store.commit('List/searchitem', value)
      },
      addToBasket(item) {
        if (item.activeClass) return
        this.$store.commit('Basket/addToBasket', item)
        this.$store.commit('List/addActiveClass', item)
      },
      filterCategory(id) {
        this.$store.commit('List/filterCategory', id)
      }
    },
    computed: {
      ...mapGetters({
        getCategory: 'List/getCategory',
        getItems: 'List/getItems',
        getCounter: 'Basket/getCounter'
      }),
      categoryItemLenth() {
        let total = {};
        this.getItems.forEach(item => {
          if (total[item.category_id]) {
            total[item.category_id].push(item);
          } else {
            total[item.category_id] = [item]
          }
        });
        return total
      }
    },
    components: {
      SearchPanel,
      RightContent,
      Aside
    }
  }
</script>

<style>
  .main {
    display: flex;
    align-items: flex-start;
    width: 900px;
    margin: 30px auto;

  }

  .main .left-side {
    width: 240px;
    margin-right: 30px;
  }

  .main .left-side ul {
    padding: 0;
    margin: 0;
  }

  .main .left-side ul li {
    list-style: none;
    margin-bottom: 20px;
  }

  .main .left-side ul li a {
    background: #fff;
    border: 1px solid #000;
    display: block;
    text-decoration: none;
    padding: 30px 0;
    color: #000;
  }

  .main .content {
    flex: 1;
    display: flex;
    flex-wrap: wrap;

  }

  .main .content .item {
    width: calc(50% - 70px);
    margin-bottom: 15px;
    cursor: pointer;
    padding: 30px;
    justify-content: space-between;
    border: 1px solid red;
    display: flex;
    align-items: flex-end;
    margin-right: 15px;
  }

  .main .content .item.active {
    border-color: green;
  }

  .main .content .item:nth-child(2n) {
    margin-right: 0;
  }

  .main .content .item .caption {
    display: flex;
  }

  .main .content .item .caption img {
    width: 40px;
    height: 40px;
    display: block;
  }

  .main .content .item .caption strong {
    display: flex;
  }
</style>
