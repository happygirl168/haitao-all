<template>
	<div class="myorder">
		<div class="new-address">
				<div class="mask" id="mask" v-model="showMask" v-if="showMask == true">
					<div class="add-address-list">
						<div class="add-address-title">
							<h4>管理收货地址</h4>
							<span class="close-address">
								<img src="../assets/images/close.png" @click="closeMask()"/>
							</span>
						</div>
						<div class="add-address-con">
							<div class="address-form">
								<div class="address-form-row">
									<div class="form-item">
										<input type="text" name="username" v-model="username" placeholder="收货人姓名"/>
									</div>
								</div>
								<div class="address-form-row">
									<div class="form-item">
										<input type="text" name="tel" v-model="telphone" placeholder="手机号"/>
									</div>
								</div>
								<div class="address-form-row">
									<div class="form-item">
										<select id="addr" v-model="province">
											<option  selected="selected">请选择省份</option>
										    <option
											      v-for="province,index in addList"
											      :key="province.area_id"
											      :value="province.area_name"
											      >
											 {{province.area_name}}
										    </option>
							 			</select>
									</div>
								</div>
								<div class="address-form-row">
									<div class="form-item">
										<input type="text" name="addr" v-model="address" placeholder="详细地址，如街道名称、楼层、门牌号码等"/>
									</div>
								</div>
								<div class="address-form-row">
									<div class="form-item" @click="saveAdress()">
										<a href="javascript:void(0)">保存</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		<div class="order-shopitem">
			<div class="order-title">
				订单信息
			</div>
			<div class="order-address">
				<div class="address-title">
					<span>收货信息</span>
				</div>
				<div class="address-con">
					<div class="address-list clearfix">
						<div class="address-item" id="address" v-if="Item" v-for="item,index in Item" @click="selectIndex(index)">
							<div class="item-con">
								<div class="name">{{item.name}}</div>
								<div class="tel">{{item.tel}}</div>
								<div class="province">{{item.province}}</div>
								<div class="address">{{item.address}}</div>
							</div>
							<!--<div class="delete" @click="Delete(index)">
								<img src="../assets/images/del .png"/>
							</div>-->
						</div>
						<div class="address-item" @click="addAddress()">
							<div class="item-img">
								<img src="../assets/images/PLUS (1).png"/>
								<div class="address-new">使用新地址</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
			<div class="order-content">
				<div class="order-goods">
					<div class="order-item">
						<div class="item-name">
							<div><span>商品名称：</span>{{list.name}}</div>
						</div>
						<div class="item-description clearfix">
							<img :src="list.img" alt="连衣裙" />
							<div class="item-size"><span>尺码：</span>{{list.size}}</div>
							<div class="item-num"><span>数量：</span><i>X</i>{{list.num}}</div>
						</div>
						<div class="item-pay">
							<div class="item-price">
								<span>一共支付</span>{{list.totalPrice}}元
							</div>
						</div>
					</div>
				</div>
				<div class="payment" @click="toPay()">
					<a href="javascript:void(0);">支付</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import storage from '../model/storage.js';
	import addList from '@/lib/addList'
	export default {
		data() {
			return {
				list:{},
				showMask:false,
				addList,
				username:'',
				telphone:'',
				province:'',
				address:'',
				Item:[],
				id:0,
				OrderInfo:[]
			}
		},
		methods:{
			toPay(){
				this.$router.push({path:'/pay'});
			},
			addAddress(){
				this.showMask = true;
			},
			closeMask(){
				this.showMask = false;
			},
			saveAdress(){
				this.Item.push({
					addrId:this.id++,
					name:this.username,
					tel:this.telphone,
					province:this.province,
					address:this.address
				})
				this.showMask = false;
				storage.set('addrList',this.Item);
				
			},selectIndex(index){
				var selectIndex = document.querySelectorAll('#address');
				for (var i = 0; i <selectIndex.length; i++) {
					selectIndex[i].className="address-item";
				}
				selectIndex[index].className="address-selected";
				storage.set('selectedAddr',this.Item[index]);
				//保存订单信息
				this.OrderInfo.push({
					orderid:10000+Math.floor(Math.random()*100),
					address:storage.get('selectedAddr'),
					goods:this.list
				})
				storage.set('OrderInfo',this.OrderInfo);
				console.log("所有的信息--"+JSON.stringify(this.OrderInfo))
			},Delete(index){
				this.Item.splice(index,1);
				storage.set('addrList',this.Item);
			}
		},mounted(){
			var list = storage.get('listinfo');
			this.list = JSON.parse(list);
			var item = storage.get('addrList');
			this.Item = item;
			console.log("item--"+JSON.stringify(item))
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.address-selected{
		float: left;
		width: 280px;
		height: 168px;
		background: #FAFAFA;
		margin-left: 18px;
		margin-bottom: 16px;
		border: 1px solid #E5E5E5;
		border-radius: 5px;
		border-color: #0077AA;
		background-image: url(../assets/images/right.png);
		background-repeat: no-repeat;
		background-position: left top;
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
	.order-shopitem{
		width: 1090px;
		margin: 60px auto;
		position: relative;
	}
	.order-title{
		padding-bottom: 6px;
		border-bottom: 1px solid #E7E7E7;
	}
	.order-address{
		margin-top: 22px;
		width:1090px;
		background: #fff;
		border-radius: 5px;
		border: 1px solid #D1D1D1;
	}
	.order-address .address-title{
		height: 40px;
		background: linear-gradient(#fff,#f5f5f5);
		padding: 10px 28px;
		line-height: 40px;
		font-size: 18px;
		box-shadow:0 1px 7px rgba(0,0,0,.06);
		border-bottom: 1px solid #DCDCDC;
		color: gray;
	}
	.address-con{
		height: auto;
	}
	.address-con .address-list{
		padding-top: 18px;
		padding-left: 68px;
	}
	.address-list .address-item{
		float: left;
		position: relative;
		width: 286px;
		height: 168px;
		background: #FAFAFA;
		margin-left: 18px;
		margin-bottom: 16px;
		border: 1px solid #E5E5E5;
		border-radius: 5px;	
	}
	.address-item:hover{
		background: #F2F2F2;
	}
	.item-con{
		width: 202px;
		overflow: hidden;
		word-wrap: break-word;
		padding: 40px 0 0 80px;
	}
	.item-img{
		text-align: center;
		padding: 30px 50px;
	}
	.delete img{
		position: absolute;
		top: 10px;
		right: 12px;
		z-index: 998;
	}
	.form-item a{
		display: block;
		width: 370px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		background: #0083B3;
		color: #fff;
		font-size: 18px;
	}
	.address-item .address-new{
		color: #999;
		font-size: 14px;
		text-align: center;
	}
	.add-address-list{
		z-index: 999;
		position: relative;
		top: 20%;
		left: 35%;
		width: 420px;
		height: 408px;
		background: #fff;
		border-radius: 10px;
		border: 1px solid #EAEAEA;
	}
	.add-address-title{
		height: 40px;
		line-height: 40px;
		padding: 10px 28px;
		color: #666;
		font-size: 18px;
		background: linear-gradient(#fbfbfb,#ececec);
		box-shadow: 0 1px 7px rgba(0,0,0,.06);
		border-bottom: 1px solid #d4d4d4;
	}
	.add-address-con .address-form{
		width: 370px;
		margin: 0 auto;
		padding: 20 29px;
	}
	.address-form .address-form-row{
		margin-top: 18px;
		margin-bottom: 15px;
	}
	.address-form-row .form-item{
		position: relative;
		width: 370px;
		height: 40px;
		line-height: 40px;
		background: #fff;
		border: 1px solid #ccc;
		box-shadow:0 3px 5px -4px rgba(0,0,0,.4) inset, -1px 0 3px -2px rgba(0,0,0,.1) inset;
		border-radius:5px;
	}
	.address-form-row .form-item input{
		width: 354px;
		height: 40px;
		padding-left: 16px;
		font-size: 16px;
		background: transparent;
		border: none;
		outline: none;
		
	}
	.form-item select{
		appearance: none;
		border: none;
		outline: none;
		width: 370px;
		height: 38px;
		color: #666;
		padding-left: 18px;
		font-size: 16px;
	}
	.add-address-title .close-address{
		position: absolute;
		top: 15px;
		right: 16px;
	}
	.order-goods{
		margin-top: 22px;
	}
	.item-name{
		position: relative;
		font-size: 20px;
	}
	.item-description img{
		float: left;
		width: 188px;
		height:200px;
		margin-top: 28px;
	}
	.item-description span{
		color: #F10180;
	}
	.item-description .item-size,.item-num{
		float: left;
		margin-top: 155px;
		margin-left: 78px;
		font-size: 18px;
	}
	.item-num i{
		margin-right: 3px;
		font-size: 14px;
	}
	.item-pay{
		margin: 36px 0;
	}
	.item-pay .item-price{
		font-size: 32px;
		font-weight: bolder;
		color: #F10180;
	}
	.item-price span{
		color: #333;
		margin-right: 8px;
		font-size: 20px;
	}
	.payment{
		position: absolute;
		bottom: -148px;
		right: 128px;
		margin-bottom: 38px;
	}
	.payment a{
		display: block;
		width: 120px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		border-radius: 3px;
		background: #F10180;
		color: #fff;
	}
	</style>