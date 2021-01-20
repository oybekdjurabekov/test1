export default {
  namespaced:true,
  state: {
    searchText:'',
    categoryFilter:null,
    category:[
      {
        id:1,
        title:'Cement'
      },
      {
        id:2,
        title:'Cement2'
      },
      {
        id:3,
        title:'Cement3'
      },
      {
        id:4,
        title:'Cement4'
      },
      {
        id:5,
        title:'Cement5'
      },
    ],
    items:[
      {
        id:1,
        price:500,
        img:'',
        category_id:1,
        title:'Cement',
        activeClass:false
      },
      {
        id:2,
        price:1000,
        img:'',
        category_id:5,
        title:'OpalDam',
        activeClass:false
      },
      {
        id:3,
        price:25,
        img:'',
        category_id:2,
        title:'OpalDam',
        activeClass:false
      },
      {
        id:4,
        price:100,
        img:'',
        category_id:4,
        title:'OpalDam',
        activeClass:false
      },
      {
        id:5,
        price:35,
        img:'',
        category_id:1,
        title:'OpalDam',
        activeClass:false
      },
      {
        id:6,
        price:15,
        img:'',
        category_id:3,
        title:'OpalDam',
        activeClass:false
      }
    ]
  },
  mutations: {
    searchitem(state, payload){
      state.searchText = payload
    },
    addActiveClass(state, payload){
      state.items.filter(item => item.id === payload.id).filter(item => item.activeClass = true)
    },
    filterCategory(state, payload){
      state.categoryFilter = payload;
    }

  },
  actions: {
  },
  getters:{
    getCategory(state){
      return state.category;
    },
    getItems(state){
      if(state.searchText === '' && state.categoryFilter === null){
        return state.items;
      }
      return state.items.filter(item => {
        if(state.searchText !== ''){
         return  item.title.toLowerCase().includes(state.searchText.toLowerCase())
        }else{
          return item.category_id === state.categoryFilter
        }
      })
    }
  }
}