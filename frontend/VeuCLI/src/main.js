// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV === 'development'


Vue.directive("ageValid", {
  update: function (el, binding, vnode) { 
    if (binding.value <= 0 || binding.value > 150) {
      toastr.error(`Age: ${binding.value} is not correct`);
    }
  }
});
// Vue.directive("addressValid", {
//   update: function (el, binding, vnode) {
//     if (binding.value.length == 0 || binding.value.length > 50) {
//       toastr.error(`Address length: ${binding.value.length} is not correct ( <= 50)`);
//     }
//   }
// });
// Vue.directive("fullnameValid", {
//   update: function (el, binding, vnode) {
//     if (binding.value.length == 0 || binding.value.length > 50) {
//       toastr.error(`Fullname length: ${binding.value.length} is not correct ( <= 50)`);
//     }
//   }
// });
 

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}) 