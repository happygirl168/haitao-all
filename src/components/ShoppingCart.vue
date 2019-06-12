<template>
	<div id="shoppingcart">
		<div class="cart-content">
			<div class="cart-title">
				<span>购物车<i>一共有{{list.length}}件商品</i></span>
			</div>
			<div class="cart-goods" v-for="goods,index in list">
				<table>
					<tr>
						<td class="goods-checkbox">
							<input type="checkbox" id="check" @change="checkBox(index)"/>
						</td>
						<td class="goods-name">
							<div class="goods-des clearfix">
								<img :src="goods.img" alt="goods.name" @click="toShopItem(list.id)"/>
								<span class="name">{{goods.name}}</span>
								<p class="goods-size">尺码<i>{{goods.size}}</i></p>
							</div>
						</td>
						<td class="price">
							<p>单价</p>
							<p class="s-price"><i>￥</i>{{goods.price}}</p>
						</td>
						<td class="num">
							<p>数量</p>
							<p class="s-num">
								<el-input-number :min="1" :max="5" :value="goods.num"></el-input-number>
							</p>
						</td>
						<td class="total_price">
							<p>总价</p>
							<p class="s-tprice"><i>￥</i>{{goods.price*goods.num}}</p>
						</td>
						<td class="remove_item"><a href="javascript:void(0);" @click="removeItem(index)">删除</a></td>
						<td>
							<div class="camulate-goods">
								<a href="javascript:void();" @click="toOrder(index)">结算</a>					
							</div>
						</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	import storage from '../model/storage.js';
	export default {
		data() {
			return {
				msg: '我是购物车页面',
				num:1,
				list:[]
			}
		},
		methods:{
//			toShopItem(id){
//				this.$router.push({path:'/shopitem?id='+id});
//			}
			toOrder(index){
				storage.set('listinfo',JSON.stringify(this.list[index]));
				//this.$router.push({name:'MyOrder',query:{listinfo:JSON.stringify(this.list[index])}});
				this.$router.push({path:'/myorder'})
				console.log("你选中了第"+index+"个商品,信息："+JSON.stringify(this.list[index]));
			},
			removeItem(index){
				this.list.splice(index,1);
				storage.set('cartInfo',this.cartInfo);
			},
			checkBox(index){
//				this.check = !this.check;
//				console.log("index----"+this.check);
			}
		},mounted(){
			//实现刷新之后，数据不会消失且依旧显示
			var list =storage.get('cartInfo');
			this.list = list;
			console.log("购物车页面的商品信息----"+JSON.stringify(this.list))
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.cart-content{
		width: 1090px;
		margin: 0 auto;
		margin-top: 53px;
	}
	.cart-title i{
		margin-left: 12px;
		color:#F10180;
	}
	
	.cart-goods{
		margin-top: 22px;
	}
	.cart-goods table tr{
		padding-bottom: 26px;
	}
	.goods-checkbox{
		padding-right: 18px;
	}
	.cart-goods .goods-des{
		width: 250px;
	}
	.cart-goods .goods-des img{
		float: left;
		width: 80px;
		margin-right: 5px;
	}
	.goods-name{
		padding-right: 262px;
	}
	.name{
		width:173px;
		font-size: 12px;
		vertical-align: top;
	}
	.goods-size{
		margin-top: 7px;
		color: #969896;
		font-size: 14px;
	}
	.goods-size i{
		margin-left: 3px;
	}
	td.price{
		vertical-align: top;
		text-align: center;	
	}
	.price p:first-child{
		font-size: 12px;
		margin-bottom: 46px;
	}
	
	.price .s-price{
		font-size: 18px;
		color: #F10180;
	}
	.num{
		vertical-align: top;
		text-align: center;	
		padding-left: 68px;
		font-size: 12px
	}
	.s-num{
		margin-top: 36px;
	}
	.total_price{
		padding-left: 68px;
		font-size: 12px;
		vertical-align: top;
		text-align: center;
	}
	.total_price .s-tprice{
		color: #F10180;
		font-size: 18px;
		margin-top: 46px;
	}
	.remove_item{
		vertical-align: top;
		font-size: 14px;
		padding-left: 68px;
	}
	.remove_item a{
		display: block;
		width: 80px;
		height: 30px;
		line-height: 30px;
		background: #F10180;
		border-radius: 5px;
		color: #fff;
		text-align: center;
	}
	.camulate-goods{
		position: relative;
	}
	.camulate-goods a{
		position: absolute;
		top: -48px;
		left: 18px;
		display: block;
		width: 93px;
		height: 30px;
		line-height: 30px;
		background: #F10180;
		color: #fff;
		border-radius: 5px;
		text-align: center;
	}
</style>