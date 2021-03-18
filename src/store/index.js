import Vuex from 'vuex'
import Vue from 'vue'
// import users from './modules/users'

// Load Vuex
Vue.use(Vuex)

// Create Store
export default new Vuex.Store({
    state: {
        users: [],
        step: 1
    },
    
    getters: {},
    
    actions: {},
    
    mutations: {
        addStep(state) {
            state.step += 1
        }
    }
    
    
    }
)