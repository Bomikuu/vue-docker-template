import Vue from "vue";
import Vuex from "vuex";
import products from "./modules/products.js";
import inventory from "./modules/inventory.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { products, inventory },
});
