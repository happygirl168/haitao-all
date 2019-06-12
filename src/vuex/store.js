//store 相当于仓库  一个组件使用并改变数据，另一个组件使用的是前一个组件改变后的数据
//所以这就是vuex 实现了不同组件（不同页面）的数据共享

//引入vuex
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 用Vuex实现新闻数据的持久化

/*  1.state 在vuex中主要用于存储数据 */
var state={
	num:1,
	info:[],
	username:'',
	order:[]
}

// 2.mutation里面放的是方法，方法主要用于改变state里面的数据
var mutations={
	Count(){
		++state.num;
	},
	//传值必须写state
	storeItemInfo(state,data){
		state.info=data;
//		state.list.push(data);
	},
	saveuser(state,data){
		state.username = data;
	},
	saveOrder(state,data){
		state.order.push(data);
	}
}
 
 // 3.类似计算属性，改变state里面的count数据的时候，会触发getters里面的方法，获取新的值
 var getters={
  computedCount: (state) => {
    return state.num*2;
  }
}
 
// 3.vuex 实例化Vuex.Store
const store = new Vuex.Store({
  state,  /* 简写 */
  mutations,
  getters
})


//4.暴露store
export default store;