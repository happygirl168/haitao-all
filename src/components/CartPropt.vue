<template>
	<div class="">
		<el-menu-item index="9" @mouseenter="show()" @mouseleave="hidden()">
			<i class="iconfont icon-bag"></i>
			<span>购物车<i v-model="num">0</i></span>
		</el-menu-item>	
			<div class="cartpropt-wrapper" v-show="showCart">
				<div class="cart-list">
					<div class="cart-list-item">
						<div class="">
							去购物车页面吧
						</div>
					</div>
				</div>
			</div>
	</div>	
</template>

<script>
	import store from '../vuex/store.js'
	export default {
		data() {
			return {
				num:0
			}
		},
		store,
		computed:{
			showCart(){
				console.log("调用了showCart方法")
				return this.$store.state.showCart;
			}
		},
		methods:{
			show(){
				console.log("调用了show方法")
				this.$store.commit('showCartPropt');
			},
			hidden(){
				console.log("调用了hidden方法")
				this.$store.commit('hideCartPropt');
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.cartpropt-wrapper{
		width:360px;
		height: auto;
		background: red;
		border: 1px solid #999;
		z-index: 999;
	}
</style>