import Vue from 'vue'
import Vuex from 'vuex'
import List from './modules/list';
import Basket from './modules/basket';
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    List,
    Basket
  }
})
