import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex'
import Inicio from './components/inicio.vue'
import Menu from './components/menu.vue'
import Credito from './components/credito.vue'
import Play from './components/play.vue'
import Tutorial from './components/tutorial.vue'
import Tutorial2 from './components/tutorial2.vue'

import './style.scss'

import App from './App.vue'

const routes = [
  { path: '/inicio', component: Inicio },
  { path: '/menu', component: Menu },
  { path: '/credito', component: Credito },
  { path: '/play/:id', component:  Play},
  { path: '/tutorial', component:  Tutorial},
  { path: '/tutorial-2', component:  Tutorial2},
]
const store = createStore({
  state(){
    return {
      users:[
        {
          id:1,
          name: 'pedro',
          score: 0
        },
        {
          id:0,
          name: 'maria',
          score: 0
        }
      ],
      currentQuestion: 0
    }
  },
  mutations:{
    increaseScore(state, payload){
      state.users[payload].score++
      state.users[payload].score++
    },
    resetScore(state, payload){
      state.users[payload].score=0
    },
    resetQuestion(state, payload){
      state.currentQuestion=0
    },
    nextQuestion(state, payload){
      state.currentQuestion++
    },
  },
  getters:{

  },

})
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

// Make sure to _use_ the router instance to make the
// whole app router-aware.
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
