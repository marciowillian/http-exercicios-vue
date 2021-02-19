import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL='https://curso-vue-d29c4-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
    }
})
