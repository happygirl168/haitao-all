<template>
	<div id="login">
		<div class="mask" id="mask">
			<div class="form-tab-card">
				<div class="login-form">
					<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
						<el-form-item label="用户名" prop="username">
							<el-input v-model.number="ruleForm2.username"></el-input>
						</el-form-item>
						<el-form-item label="密码" prop="pass">
							<el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item label="确认密码" prop="checkPass">
							<el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
						</el-form-item>
					</el-form>
				</div>
			</div>
		</div>
	</div>	
</template>

<script>
	import storage from '../model/storage.js';
	export default {
		data() {
			var checkUsername = (rule, value, callback) => {
				if(!value) {
					return callback(new Error('用户名不能为空'));
				}
				setTimeout(() => {
					if(Number.isInteger(value)) {
						callback(new Error('请输入文字'));
					} else {
						
							callback();
						
					}
				}, 1000);
			};
			var validatePass = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入密码'));
				} else {
					if(this.ruleForm2.checkPass !== '') {
						this.$refs.ruleForm2.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请再次输入密码'));
				} else if(value !== this.ruleForm2.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				msg: '我是登录页面',
				ruleForm2: {
					pass: '',
					checkPass: '',
					username: ''
				},
				rules2: {
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						validator: validatePass2,
						trigger: 'blur'
					}],
					username: [{
						validator: checkUsername,
						trigger: 'blur'
					}]
				},
				Id:1,
				User:{
					id:1,
					username:'',
					password:''
				}
			}
		},
		methods: {
			submitForm(formName) {
				
						/*
						 * 注册代码
						 * this.User = {
							id:++this.Id,
							username:this.ruleForm2.username,
							password:this.ruleForm2.pass
						};
						var UserList = storage.get('userInfo');
    					UserList.push(this.User);
						storage.set('userInfo',UserList);*/
						
						//登录代码：
						var username = this.ruleForm2.username;
						var UserList = storage.get('userInfo');
						let index = UserList.findIndex((user)=>{
							return username = user.username;
						})
						console.log("index--"+index)
						if(index == -1){
							alert("该用户还没注册，请先注册")
						}else{
							storage.set('loginUser',username);                                                                                                                                               
							this.$store.commit('saveuser',username);
							this.$router.push({path:'/index'})
						}
					
				
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
    },mounted(){
    	console.log("user---"+JSON.stringify(this.User));
    }
}
</script>

<style lang="scss" scoped="scoped">
	.login-form{
		width:100% ;
		margin-top: 52px;
	}
	form{
		width: 572px;
		margin: 0 auto;
		
	}
	.el-input {
		position: relative;
		font-size: 14px;
		display: inline-block;
		width: 365px;
	}
</style>