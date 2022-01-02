/* 入口js */
import Vue from 'vue'
import App from './APP.vue'
import router from './router'

new Vue({
    el:'#app',
    render:h=>h(App),
    router
})