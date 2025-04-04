import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: [],
    },
    mutations: {
        ADD_TO_CART(state, product) {
            state.cart.push(product);
        },
    },
    actions: {
        addToCart({ commit }, product) {
            commit('ADD_TO_CART', product);
        },
    },
    getters: {
        cartItemCount: state => {
            return state.cart.length;
        },
    },
});
