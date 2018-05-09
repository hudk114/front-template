import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@page/hello-world';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'helloWorld',
      component: HelloWorld
    }
  ]
});
