export default {
  namespaced:true,
  state: {
    basket: [],
    counter: 0,
  },
  mutations: {
    addToBasket(state, payload) {
      state.basket.push({...payload, total:1});
      state.counter += 1;
    },
    plus(state, payload){
      state.basket.filter(item => item.id === payload).filter(item => item.total += 1)
    },
    minus(state, payload){
      state.basket.filter(item => item.id === payload).filter(item => {
        if( item.total !== 1){
          item.total -= 1;
        }
      })
    },
    removeItem(state, payload){
      state.basket.splice(payload, 1)
    }
  },
  getters: {
    getCounter(state) {
      return state.counter;
    },
    basket(state){
      return state.basket;
    },
    totalPrice(state) {
      return state.basket.reduce((acc, item) => acc + item.total * item.price, 0);
    }
  }
}