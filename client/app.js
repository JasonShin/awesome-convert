import Vue from 'vue';
import Element from 'element-ui';
import {sync} from 'vuex-router-sync';
import App from './views/layouts/Default';
import router from './router/index';
import store from './store/index';

Vue.use(Element);
sync(store, router);

const app = new Vue({
	router,
	store,
	...App
});

export {app, router, store};
