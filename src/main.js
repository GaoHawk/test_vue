// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MyDirective from './components/customDirectives.vue'
import focus from './components/focus.vue'
import MyClick from './components/customClick.vue'

Vue.config.productionTip = false
Vue.directive(MyDirective.name,MyDirective);
Vue.directive(focus.name,focus);
Vue.directive(MyClick.name,MyClick);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
