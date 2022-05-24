require('./bootstrap');
import "../sass/app.scss";
import BootstrapVue from 'bootstrap-vue';
import BLink from 'bootstrap-vue';

window.Vue = require('vue').default;
Vue.use(BootstrapVue);

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('b-link', BLink);
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    el: '#app',
});
