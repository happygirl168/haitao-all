import Vue from 'vue';

//1.引入路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Index from '../components/Index.vue';
import Icon  from '../components/Fashionicon.vue';
import Login  from '../components/Login.vue';
import Shopinfo from '../components/Shopinfo.vue';
import Shopitem from '../components/shopitem.vue';
import ShoppingCart from '../components/ShoppingCart.vue';
import MyOrder from '../components/MyOrder.vue';
import PaySuccess from '../components/PaySuccess.vue';
import Order from '../components/OrderManage.vue';
//2.配置路由
const routes = [
			  { 
			  	path: '/index', 
			  	component: Index,
			  },
			  { path: '/icon', component: Icon },
			  { path: '/login', component: Login },
			  { path: '/shopinfo/:brandId/:brand_ad/:branddis/:brandtime', name:'Shopinfo',component: Shopinfo },
			  {path: '/shopitem',component:Shopitem},
			  {	path: '/shoppingcart',
				  component:ShoppingCart,
				  name:'ShoppingCart',
				  meta:{
				  	title:'购物车',
				  	requireAuth:true//在需要登录的路由中添加相应的权限标识
				  }
			  },
			  {	path: '/myorder',
				  component:MyOrder,
				  name:'MyOrder',
				   meta:{
					  	title:'订单页',
					  	requireAuth:true//在需要登录的路由中添加相应的权限标识
					  }
				 },
				 {	path: '/pay',
				  component:PaySuccess,
				  name:'PaySuccess',
				   meta:{
					  	title:'支付成功页',
					  	requireAuth:true//在需要登录的路由中添加相应的权限标识
					  }
				 },
				 {path: '/order',
				  component:Order,
				  name:'Order',
				   meta:{
					  	title:'订单管理页',
					  	requireAuth:true//在需要登录的路由中添加相应的权限标识
					  }
				 },
			  { path: '*', redirect: '/index' } 
			]
//3.实例化vuerouter
const router = new VueRouter({
			  routes // （缩写）相当于 routes: routes
			})


//4.暴露router

export default router;
