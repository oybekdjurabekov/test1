<template>
  <div class="basket" v-if="selectedItems.length > 0">
    <div class="selected-item">
      <ul>
        <li v-for="(item, index) in selectedItems" :key="index">
          <span>{{index+1}}</span>
          <div class="caption">
            <div class="left-side">
              <div>
                <strong>{{item.title}}</strong>
                <div>
                  <button @click="removeItem(index)">X</button>
                  <strong>{{item.price}} sum</strong>
                </div>
              </div>
            </div>
            <strong>{{item.total * item.price}} sum</strong>
          </div>
          <div class="counter-panel">
            <button @click="minus(item.id)">-</button>
            <label>
              <input readonly v-model="item.total" type="text"/>
            </label>
            <button @click="plus(item.id)">+</button>
          </div>
        </li>
      </ul>
    </div>
    <div class="basket-item">
      <table>
        <tr>
          <td>Всего</td>
          <td>{{totalPrice}} сум</td>
        </tr>
        <tr>
          <td>Скидка</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Итого к оплате</td>
          <td>{{totalPrice}} сум</td>
        </tr>
      </table>
      <div class="buttons-panel">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>Оплата</button>
      </div>
    </div>
  </div>
  <strong v-else>Пусто</strong>
</template>
<script>
  import { mapGetters } from "vuex";

  export default {
    data() {
      return {}
    },
    methods: {
      plus(id) {
        this.$store.commit('Basket/plus', id)
      },
      minus(id) {
        this.$store.commit('Basket/minus', id)
      },
      removeItem(index) {
        this.$store.commit('Basket/removeItem', index)
      }
    },
    computed: {
      ...mapGetters({
        selectedItems: 'Basket/basket',
        totalPrice:'Basket/totalPrice'
      }),

    }

  }
</script>
<style>
  .basket {
    width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .basket ul {
    margin: 0;
    padding: 0;
    border: 1px solid #000;

  }

  .basket ul li {
    list-style: none;
    display: flex;
    padding: 30px;
    border-bottom: 1px solid #000;
    justify-content: space-between;
  }

  .basket ul li:last-child {
    border-bottom: none;
  }

  .basket ul li .caption {
    display: flex;
    flex: 1;
  }

  .basket ul li .caption .left-side {
    display: flex;
    flex: 1;
  }

  .basket-item {
    width: 400px;
    margin: 0 auto;
    background: darkblue;
    padding: 40px;
    color: #fff;
  }
</style>