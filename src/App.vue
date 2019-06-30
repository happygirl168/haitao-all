<template>
  <div id="app">
    <header>
			<div class="nav">
				<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
					<el-menu-item >海淘商城</el-menu-item>
					<el-menu-item index="1">
						<router-link to="/index">首页</router-link>
					</el-menu-item>
					<el-menu-item index="2">
						<router-link to="/icon">时尚潮牌</router-link>
					</el-menu-item>
					<el-menu-item index="3">女装</el-menu-item>
					<el-menu-item index="4">男装</el-menu-item>
					<el-menu-item index="5">
						<a href="#" @click="showMask()">登录</a>
					</el-menu-item>
					<el-menu-item index="6">
						<router-link to="/shoppingcart">
								<i class="iconfont icon-bag"></i>
								<span>购物车</span>
						</router-link>
						</el-menu-item>
				</el-menu>
				<div class="user">
					<div class="username">
						{{this.uname}}
					</div>
					<div class="userInfo">
						<div class="">个人中心</div>
						<div class="">
								<router-link to="/order">我的订单</router-link>
						</div>
						<div class="loginout" @click="loginout()">退出登录</div>
					</div>
				</div>
			</div>
		</header>
		<div class="main">
			<div class="main_content">
				<!--
					遮罩层 登录
				-->
				<div class="mask" id="mask" v-model="maskShow" v-if="maskShow == true">
					<div class="form-tab-card">
						<span id="login" class="form-login" @click="toLogin()">登录</span>
						<span id="register" class="form-register" @click="toRegister()">注册</span>
						<span class="closeMask" @click="closeMask()">X</span>
						<div class="login-form" v-model="showLogin" v-show="showLogin==true">
							<el-form status-icon label-width="100px" class="demo-ruleForm">
								<el-form-item label="用户名" prop="name">
									<el-input ref="name" v-model="name"></el-input>
								</el-form-item>
								<el-form-item label="密码" prop="pwd">
									<el-input type="password" autocomplete="off" ref="pwd" v-model="pwd"></el-input>
								</el-form-item> 
								<el-form-item>
									<el-button type="primary" @click="login()">登录</el-button>
								</el-form-item>
							</el-form>
							<div class="error">
								
							</div>
						</div>
						<!-- 注册  -->
						<div class="register-form" v-model="showRegister" v-show="showRegister==true">
							<el-form status-icon label-width="100px" class="demo-ruleForm">
								<el-form-item label="用户名" prop="username">
									<el-input v-model="username" ref="username"></el-input>
								</el-form-item>
								<el-form-item label="密码" prop="pass">
									<el-input type="password" autocomplete="off" v-model="pass" ref="password"></el-input>
								</el-form-item> 
								<el-form-item>
									<el-button type="primary" @click="register()">注册</el-button>
								</el-form-item>
							</el-form>
						</div>
					</div>
			</div>
				<router-view></router-view>
			</div>
		</div>
  </div>
</template>

<script>
import cartPropt from './components/CartPropt.vue';
import storage from './model/storage.js';
import store from './vuex/store.js'
export default {
  name: 'App',
  data() {
			return {
				activeIndex: '1',
        activeIndex2: '1',
        showLogin:true,
        showRegister:false,
        num:0,
        id:0,
        username:'',
        pass:'',
        User:[],
        name:'',
        pwd:'',
        maskShow:false,
        uname:''
			}
		},
		store,
		 methods: {
     	 handleSelect(key, keyPath) {
        console.log(key, keyPath);
      	},
      	//注册用户
      	register() {
					 this.User.push(
					 	{
					 		id:++this.id,
					 		username:this.username,
					 		password:this.pass,
					 	}
					 );
					 //实现用户数据持久化
					 storage.set('userInfo',this.User);
					 console.log("注册的用户信息---"+JSON.stringify(this.User))
				},login(){
					var username = this.$refs.name.value;
					//根据用户名判断当前用户名是否已注册
					var findIndex = this.User.findIndex((user)=>{
							return username == user.username;
					})
					if(findIndex != -1){
						storage.set('loginUser',username);    
						
						this.$store.commit('saveuser',username);
						//关闭遮罩层
						this.maskShow = false;
//						console.log("username---"+username); 
//						console.log("state---"+this.$store.state.username);
						var uname = storage.get('loginUser');
					//var uname = sessionStorage.getItem('loginUser');
    				this.uname = uname;
						//眺往首页
						this.$router.push({path:'/index'})
					}else{
						document.querySelectorAll('.error')[0].innerHTML="请先注册";
						console.log("请先注册")
					}
				//用户登录
				},toLogin(){
					//选项卡  
				this.showLogin = true;
				this.showRegister = false;
/*				var login  = document.querySelectorAll('.form-register')[0];
				login.className='unselected';*/
				},toRegister(){
				this.showRegister = true;
				this.showLogin = false;
				//当点击注册的时候，登录的颜色变成灰色
			/*	var login  = document.querySelectorAll('.form-login')[0];
				login.className='unselected';
				var register  = document.querySelectorAll('.form-register')[0];
				register.className='form-register';*/
			},showMask(){
				this.maskShow = true;
			},closeMask(){
				this.maskShow = false;
			},
			loginout(){
					let index = this.User.findIndex((USER)=>{
						return this.uname = USER.username;
					})
					console.log("logout中查找到的index---"+index);
					//实现用户退出登录
					this.User.splice(index,1);
					this.uname = "";
					this.$router.push({path:'/login'})
					storage.set('userInfo',this.User);
					storage.set('loginUser',username); 
					console.log("注册的用户信息---"+JSON.stringify(this.User))
			}
    },
    components:{
    	'shoppingcart':cartPropt
    },mounted(){
    	//实现刷新，只要是注册过的数据都会保存到User表里
    	var UserInfo = storage.get('userInfo');
    	if(UserInfo){
    		this.User = UserInfo;
    	}
    	var uname = 	storage.get('loginUser');
    	this.uname = uname;
    	console.log("获取的注册用户信息--"+JSON.stringify(this.User));
    	console.log("登录的用户---"+JSON.stringify(sessionStorage.getItem('loginUser')));
			//设置定时器自动刷新页面
			if(this.timer){
				clearInterval(this.timer);
			}else{
				this.timer = setInterval(()=>{
					var uname = storage.get('loginUser');
    			this.uname = uname;
				},1000)
			}
   },destroyed(){
   	//清除数据
   		clearInterval(this.timer);
   }
}
</script>

<style lang="scss" scoped="scoped">
	.unselected{
		padding: 4px 25px;
		background: #969896;
		border-radius: 5px;
		color: #fff;
		text-align: center;
		
	}
	.closeMask{
			margin-left: 88px;
	}
	.error{
		color: #F10180;
		font-size: 18px;
		text-align: center;
	}
	.closeMask:hover{
		cursor: pointer;
	}
	.el-menu-item:first-child{
		margin-left: 132px;
	}
	header{
		width: 100%;
	}
	.el-menu-item span i{
		margin-left: 8px;
		width: 30px;
		display: inline-block;
	}
	.mask{
		position: fixed;
		top: 0px;
		width: 100%;
		height: 750px;
		z-index: 998;
		background: rgba(0,0,0,0.7);
		/*opacity: 0.8;*/
	}
	.form-login{
		margin-left: 36%;
	}
	.form-login,.form-register{
		padding: 4px 25px;
		background: #00AFF0;
		border-radius: 5px;
		color: #fff;
		text-align: center;
	}
	.form-login,.form-register:hover{
		cursor: pointer;
	}
	.form-tab-card{
		position: absolute;
		top: 168px;
		left: 33%;
		width: 488px;
		height: 320px;
		background: #fff;
		border-radius: 3px;
		padding: 40px 90px 80px 70px;
	}
	.login-form,.register-form{
		width:100% ;
		/*margin-top: 52px;*/
		padding-top: 58px;
		z-index: 999;
	
	}
	
	form{
		width: 572px;
		margin: 0 auto;
	}
	.el-button{
		margin-top: 10px;
		margin-left: 23%;
		padding: 12px 37px;
	}
	.el-input {
		position: relative;
		font-size: 14px;
		display: inline-block;
		width: 365px;
	}
	.nav{
		position: relative;
	}
	.user{
		position: absolute;
		top: 6px;
		right: 360px;
		color: #fff;
	}
	.username{
		width: 50px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		border-radius:50%;
		background: #00AFF0;
	}
	.userInfo{
		position: absolute;
		width: 100px;
		margin-top: 10px;
		padding: 8px 6px;
		text-align: center;
		left:-26px;
		background: #00AFF0;
		z-index: 998;
	}
</style>
