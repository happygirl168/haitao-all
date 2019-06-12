// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'

//引入公共样式scss文件
import main from './assets/scss/main.scss';

//引入全局样式iconfont.css
import iconfont from './assets/iconfonts/iconfont.css';

//全局引入vuex和localstorage
import store from './vuex/store';
import storage from './model/storage';

//使用jquery插件的第四步
import $ from 'jquery';

//配置路由
import router from './router/router.js';


//引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VueResource from 'vue-resource';
Vue.use(VueResource);

//引入vue-lazyload（图片懒加载）插件,还可传参，此处事件监听为scroll
import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad,{
	listenEvents:['scroll']
});
//第三步，把需要懒加载的图片的:src=""，改为v-lazy=""

//导航守卫
//使用router.beforeEach()钩子函数， 注册一个全局守卫，每个路由跳转之前都要执行此函数            
router.beforeEach((to,from,next)=>{
	//如果页面有requireAuth，代表需要登录的权限
		if(to.meta.requireAuth){
			console.log("main---username---"+storage.get('loginUser'))
			//判断是否有用户登录的信息，没有则先登录，有则进行下一步操作
			if(!storage.get('loginUser')){
				next({path:'/login',query:{redirect:to.fullPath}})
			}else{
				next()
			}
		}else{
			next();
		}
})

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
