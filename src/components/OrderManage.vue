<template>
	<div id="OrderManage">
		<div class="orders-detail">
			<div class="orders-box">
				<div class="orders-title">
					<span>订单详情</span>
				</div>
				<div class="orders-con">
					<div class="orders-list" v-for="orders,index in Orders">
						<!-- 收货地址信息-->
						<div class="address">
							<div class="address-con">
								<div class="address-box">
									收货地址
								</div>
								<div class="address-name">
									<span class="username">{{orders.address.name}}</span>
									<span class="tel">{{orders.address.tel}}</span>
								</div>
								<div class="address-body">
									<span class="province">{{orders.address.province}}</span>
									<span class="addr">{{orders.address.address}}</span>
								</div>
							</div>
						</div>
						<!--商品信息-->
						<div class="orders-goods">
							<div class="goods-con">
								<div class="goods-title">
									商品信息
								</div>
								<div class="goods-detail">
									<div class="goods-brand">{{orders.goods.brand_name}}</div>
									<div class="goods-box">
										<div class="goods-img">
											<img :src="orders.goods.img" alt="连衣裙" />
										</div>
										<div class="goods-description clearfix">
											<div>{{orders.goods.name}}</div>
											<div class="item-size"><span>尺码：</span>{{orders.goods.size}}</div>
											<div class="item-num"><span>数量：</span>{{orders.goods.num}}</div>
										</div>
										<div class="goods-price">
											<div class="goods-Sprice"><span>单价：</span><i class="money">￥</i>{{orders.goods.price}}</div>
											<div class="goods-express"><span>运费：</span><i class="money">￥</i>0</div>
											<div class="goods-totalPrice"><span>总价：</span><i class="money">￥</i>{{orders.goods.totalPrice}}</div>
											<div class="goods-totalPrice"><span>实付款：</span><i class="money">￥</i>{{orders.goods.totalPrice}}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- 订单信息-->
						<div class="myorder">
							<div class="myorder-con">
								<div class="myorder-title">
									交易详情
								</div>
								<div class="myorder-detail">
									<div class="myorder-box">
										<div class="myorder-detail-row">
											<span class="row-label">您的账单：</span>
											<span class="row-data">去支付宝中查看</span>
										</div>
										<div class="myorder-detail-row">
											<span class="row-label">天猫积分：</span>
											<span class="row-data">获得49点积分</span>
										</div>
										<div class="myorder-detail-row">
											<span class="row-label">交易快照：</span>
											<span class="row-data">发生交易争议时，可作为判断依据</span>
										</div>
										<div class="myorder-detail-row">
											<span class="row-label">订单编号：</span>
											<span class="row-data">{{orders.orderid}}</span>
										</div>
										<div class="myorder-detail-row">
											<span class="row-label">创建时间：</span>
											<span class="row-data">{{new Date().toLocaleString()}}</span>
										</div>
										<div class="myorder-detail-row">
											<span class="row-label">成交时间：</span>
											<span class="row-data">{{new Date().toLocaleString()}}</span>
										</div>
										<div class="myorder-detail-row">
											<span class="row-label">投诉商家</span>
											<span class="row-data"></span>
										</div>
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
	import storage from '../model/storage.js';
	export default {
		data() {
			return {
				Orders:[]
			}
		},mounted(){
			var Orders = storage.get('OrderInfo');
			this.Orders = Orders;
			console.log("订单管理--"+JSON.stringify(Orders))
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.orders-detail{
		background:rgba(232,232,232,0.2);
	}
	.orders-box{
		width:1090px;
		margin: 0 auto;
		padding-top: 58px;
	}
	.orders-box .orders-title{
		padding-bottom: 18px;
	}
	 .orders-box .orders-title span{
		color: #333;
		font-size: 20px;
	}
	.address{
		width: 1090px;
		height: 148px;
		background: #fff;
		margin-bottom: 36px;
		border-radius: 5px;
		box-shadow:0 1px 7px rgba(0,0,0,.06);
	}
	.address-con{
		/*padding: 18px 0 22px 36px;*/
	}
	 .address-box,.goods-title,.myorder-title{
		height: 42px;
		color: #333;
		font-size: 18px;
		background: linear-gradient(#fff,#EAEAEA);
		padding-top: 8px;
		padding-left: 18px;
	}
	.address-name,.address-body,.goods-detail,.myorder-detail{
		padding-top: 8px;
		padding-left: 18px;
	}
	.orders-goods{
		position: relative;
		width: 1090px;
		height: 318px;
		background: #fff;
		border-radius: 5px;
		box-shadow:0 1px 7px rgba(0,0,0,.06);
		margin-bottom: 38px;
	}
	
	.goods-box .goods-img img{
		width: 100px;
		height: 100px;
	}
	.goods-detail .goods-brand{
		padding-bottom: 6px;
	}
	.goods-description{
		position: absolute;
		top: 78px;
		left: 163px;
		line-height: 32px;
		padding-bottom: 8px;
		border-bottom: 1px dashed #EAEAEA;
	}
	.goods-price{
		margin-top: 8px;
		margin-left: 148px;
		line-height: 26px;
	}
	.money{
		color: #F10180;
		font-size: 18px; 
	}
	.goods-express{
		color: #999;
		font-size: 14px;
		
	}
	.goods-express i{
		margin-left: 5px;
	}
	.myorder{
		position: relative;
		width: 1090px;
		height: 288px;  
		background: #fff;
		border-radius: 5px;
		box-shadow:0 1px 7px rgba(0,0,0,.06);
		margin-bottom: 38px;
		line-height: 28px;
	}
	.myorder-detail{
		color: #666;
	}
	.myorder-detail-row .row-label{
		padding-right: 68px;
	}
</style>