import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import location from '@/store/modules/location'
import cachedViews from '@/store/modules/cachedViews'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    location,
    cachedViews
  },
  getters
})

export default store;
