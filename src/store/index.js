import Vuex from 'vuex';
import Vue from 'vue';
import TodoItems from './modules/TodoItems';

//load vuex
Vue.use(Vuex);

//create store
export default new Vuex.Store({
    modules: {
        TodoItems
    }
});