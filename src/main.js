import Vue from "vue/dist/vue.min"
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount("#app");
