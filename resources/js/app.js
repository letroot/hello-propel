require('./bootstrap');
import BootstrapVue from 'bootstrap-vue';

window.Vue = require('vue').default;

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.use(BootstrapVue);

const app = new Vue({
    el: '#app',
});
