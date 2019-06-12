<template>
	<div id="Shopinfo">
<!--		各店铺的商品列表页-->
		<div class="dress-sort-wrapper">
			<div class="wrap-content">
				<div class="list-fav">
					<div class="dress-brand-name">
						<span class="brand-ad">{{this.$route.params.brand_ad}}</span>
						<span>{{this.$route.params.branddis}}折起</span>
						<span class="brand-time">
							<i class="icon-time"></i>
							剩{{this.$route.params.brandtime}}天
						</span>
					</div>
				</div>
				<!-- 多功能选择，商品分类区 -->
				<div class="pro-shoplist clearfix" v-for="(shopitem,index) in shopdata">
					<div class="" v-if="shopitem.brand_id==id" v-model="id">
						<div class="pro-shop-type">
							分类:
						</div>
						<div class="pro-type-list">
							<div class="type-list-item">全部分类</div>
							<div class="type-list-item" v-for="(item,key) in shopitem.shop_info" >
								<div class="" v-if="item.typeid">
									{{item.type}}
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- 商品列表区，筛选区  -->
									<!-- 二次渲染拿到数据  -->
					<div class="shop-list" v-for="(shopitem,index) in shopdata">
						<!-- 双向绑定id，当获取的数据的品牌id等于点击图片的品牌id时，就显示点击图片对应的商品列表页 -->
						<div class="" v-if="shopitem.brand_id==id" v-model="id">
							<div class="shop-list-item" v-for="(item,key) in shopitem.shop_info" @click="toShopItem(item.itemId)">
								<div class="list-content">
									<img v-lazy="item.src" alt="" />
									<div class="list-intro">
										<p class="list-shopName">{{item.itme_name}}</p>
										<div class="shop-price">
											<p><i class="dark-icon">￥</i><span class="new-price">{{item.new_price}}</span></p>
											<p><i class="grey-icon">￥</i><span class="old-price">{{item.old_price}}</span></p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
			</div>
		</div>
	</div>
</template>

<script>
	import shopdata from '../lib/ShopData.js'
	//1.引入store
	import store from '../vuex/store.js'
	 
	export default {
		data() {
			return {
				msg: '我是子组件的msg',
				shopdata,
				id:0,
				typeName:''
			}
		},
		methods:{
			//获取传过来的品牌id
			getbrandId(){
				this.id = this.$route.params && this.$route.params.brandId;
				console.log("getshopId方法里的id："+this.id);
			},
			//商品分类去重处理
			setdata(){
				for(let item of shopdata){
					//把获取的数组对象转换为字符串
					for(let list of item.shop_info){
						this.id = JSON.stringify(list.itemId)
						//console.log(JSON.stringify(list.typeid))

					}
				}

			},
			//分类数量统计功能
			shopTypeCount(){
				this.$store.commit('Count');
			}
			,toShopItem(id){
				//从当前窗口打开
				this.$router.push({path:'/shopitem?id='+id});
			//跳转到商品详情页,这是第二种方法,从新的窗口打开
				/*let toNew = this.$router.resolve({path:'/shopitem?id='+id});
				window.open(toNew.href);*/
			}
			
		},
		mounted(){
			this.getbrandId();
			//this.setdata();
			//this.shopTypeCount();
		
		}
		
	}
</script>

<style lang="scss" scoped="scoped">
	.dress-sort-wrapper{
		background: #fff;
	}
	.wrap-content{
		width: 1090px;
		margin: 0 auto;
		padding-top: 30px;
	}
	.list-fav{
		height: 50px;
		border: 1px solid #E9E9E9;
		line-height: 50px;
	}
	.dress-brand-name{
		margin-left: 20px;
	}

	.brand-ad{
		display: inline-block;
		max-width: 247px;
		/* 单行显示多余文本省略 */
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-right: 15px;
		/*  消除设置了display: inline-block;后，块元素挤掉同一水平线的元素 */
		vertical-align: top;
	}
	.brand-time{
		margin-left: 40px;
	}
	.icon-time {
		display: inline-block;
		width: 16px;
		height: 16px;
		background: url(http://shop.vipstatic.com/img/te/index_v4/index_imgs-hash-1724ef6c.png?ed94a9d0) no-repeat -50px 0;
	}
	.pro-shoplist{
		position: relative;
		width: 1088px;
		border: 1px solid #E9E9E9;
		border-top: none;
		color: #333;
	}
	.pro-shop-type{
		float: left;
		width: 108px;
		margin-left: 20px;
	}
	.pro-type-list{
		display: inline-block;
		width: 960px;
		height: 100px;
		/*margin-left: 20px;*/
	}
	.pro-type-list .type-list-item{
		display: inline-block;
		width: 90px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		/*border: 1px solid #f10582;*/
		margin-left: 30px;
		font-size: 14px;
	
	}
	
	.shop-list{
		margin-top: 20px;
		
	}
	.shop-list .shop-list-item{
		display: inline-block;
		margin-left: 24px;
		margin-top: 10px;
	}
	.list-content{
		width: 248px;
		background: #fff;
	}
	.list-content img{
		width: 218px;
		height: 276px;
	}
	.list-content .list-intro{
		font-size: 12px;
	}
	.list-intro{
		width: 218px;
		/*text-align: center;*/
		padding: 15px 0 55px 0;
		border-bottom: 1px solid #E9E9E9;
	}
	.list-intro .list-shopName{
		width: 218px;
		height: 33px;
		overflow: hidden;
	}
	.shop-price{
		margin-top: 7px;
	
	}
	.list-intro .shop-price p{
		display: inline-block;
	}
	.shop-price p:last-child{
		margin-left: 12px;
	}
	/*.shop-price .dark-icon i{
		font-style: normal;
	}*/
	.shop-price .new-price{
		font-size: 20px;
		font-weight: bolder;
	}
	.shop-price .grey-icon,.old-price{
		/* 文字排版删除线  */
		text-decoration: line-through;
		color: #999;
	}
</style>