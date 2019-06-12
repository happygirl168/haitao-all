<template>
	<div id="shopitem">
		<!--我是商品详情页-->
		<div class="item-wraper">
			<div class="item-intro">
				<div class="item-ad">
					<span>首页 -> </span><span>{{info.brand_ad}} -> </span><span>{{info.itme_name}}</span>
				</div>
				<!-- 商品展示  -->
				<div class="item-display clearfix">
					<div class="item-pic magnifier-box">
						<div class="" v-for="image in info.imgshow">
							<pic-zoom :url="image.img" :scale="3" v-if="image.show==true"></pic-zoom>
						</div>
						<div class="pic-slider">
							<div class="pic-slider-wrapper">
								<div class="pic-slider-list" v-for="(imgslider,index) in info.imgshow">
									<img :src="imgslider.img" @mouseover="getUrl(imgslider.show,index)"/>
								</div>
							</div>
						</div>
						<div class="iteminfo">
							<span>商品编码：{{info.itemParams.code}}</span>
							<span></span>
						</div>
						<!-- 服务保障信息  -->
						<div class="service-guard">
							<div class="service-list">
								<div class="service-list-item">
									<img src="../assets/images/service.png" alt="服务保障信息" />
								</div>
							</div>
						</div>
					</div>
					<div class="item-description">
						<div class="item-description-title-box">
							<p class="gray">{{info.brand_name}}</p>
							<p class="dark">{{info.itme_name}}</p>
							<p class="gray">{{info.type}}</p>
						</div>
						<div class="item-discount">
							<p class="red-icon"><i>￥</i><span class="new-price">{{info.new_price}}</span></p>
							<p class="dark-icon"><i>￥</i><span class="old-price">{{info.old_price}}</span></p>
						</div>
						<div class="item-addr-box">
							<form action="" >
								<label for="addr">配送</label>
								<el-select id="addr" v-model="value" placeholder="请选择">
								    <el-option
									      v-for="province,index in addList"
									      :key="province.area_id"
									      :value="province.area_name">
									 {{province.area_name}}
								    </el-option>
							 	</el-select>
							 	<div class="addr-error-hint">
									
								</div>
							</form>
							
							<div class="addr-show">
								
							</div>
							<div class="item-sizeInfo">
								<span class="item-size">尺码</span>
								<div class="item-size-list">
									<span  class="" v-for="(size,index) in info.itemParams.size" :title="size" @click="getSize(index)">{{size}}</span>
								</div>
								<div class="size-error-hint">
									
								</div>
								<div class="item-size-helper">
									<div class="size-show">
										<span class="size-text">尺码小帮手</span>
									</div>
									<!--<div class="size-helper-trigger">
										<div class="item-size-helper-title">
											尺码小帮手
										</div>
										<div class="size-helper-notice-text">新升级！<br>推荐更精准！</div>
										<a href="javascript:void();" class="close" rel="nofollow" role="button" title="关闭提示">关闭</a>
									</div>-->
								</div>
							</div>
							<div class="item-num">
								<span class="item-numCount">数量</span>
								<el-input-number v-model="num"  :min="1" :max="5" label="描述文字"></el-input-number>
								<div class="num-hint">
									<span>最多可购5件</span>
								</div>
							</div>
							<div class="button-addCart">
								<a href="javascript:void();" @click="doAdd(info)" @change="savelist()">
									<i class="iconfont icon-bag"></i>
									<span>加入购物车</span>
								</a>
								<span class="button-hint">购买最多可获<i>676</i>个海淘贝</span>
							</div>
						</div>
					</div>
				</div>
				<!-- 商品详情参数,终端页模块导航 -->
				<div class="item-placeholder">
					<div class="detailTop">
						商品详情
					</div>
				</div>
				<div class="item-placeholder-con">
					<div class="detailCon">
						<div class="size-helper-table-wraper">
							<div class="size-title">
								<h2>商品尺码<i>SIZE</i></h2>
							</div>
							<div class="tips">
								<h3>TIPS：</h3>
								<div>1. 选购时，请综合参考尺码表中各项参数，有助于你选择到更合适的尺码。</div>
								<div>2.（只适用服装）平铺测量自己的合身服装尺寸作参考，对比选购更准确！</div>
								<div>3. 请放心挑选尺码，唯品7天退货无忧替你保驾护航。</div>
							</div>
							<div class="size-table">
								<div class="title">尺码对照表：</div>
								<div class="sizeimg">
									<img :src="info.itemParams.sizeImg" alt="尺码对照表" />
								</div>
							</div>
							<div class="detail-title">
								<h2>商品参数<i>DETAIL</i></h2>
							</div>
							<div class="detailInfo">
								<table border="0" cellspacing="0" cellpadding="0">
									<tr>
										<th>商品编号</th>
										<td>{{info.itemParams.code}}</td>
										<th>款式</th>
										<td>{{info.itemParams.type}}</td>
									</tr>
									<tr>
										<th>风格</th>
										<td>{{info.itemParams.style}}</td>
										<th>适用季节</th>
										<td>{{info.itemParams.season}}</td>
									</tr>
									<tr>
										<th>价钱</th>
										<td>{{info.itemParams.price}}</td>
										<th>图案</th>
										<td>{{info.itemParams.color}}</td>
									</tr>
									<tr>
										<th>面料</th>
										<td>{{info.itemParams.fabric}}</td>
										<th>适用场合</th>
										<td>{{info.itemParams.occasion}}</td>
									</tr>
									<tr>
										<th>适用人群</th>
										<td>{{info.itemParams.people}}</td>
										<th>商品品牌</th>
										<td>{{info.itemParams.brand_name}}</td>
									</tr>
									<tr>
										<th>材质</th>
										<td>{{info.itemParams.material}}</td>
										<th>商品名称</th>
										<td>{{info.itemParams.item_name}}</td>
									</tr>
								</table>
							</div>
							<div class="itemimg-display">
								<h2>商品展示<i>IMAGE</i></h2>
							</div>
							<div class="itemimg-wrapper">
								<div class="img-list">
									<span>{{info.itemParams.brand_name}}</span>
									<img :src="img" alt=""  v-for="img in info.imgdisplay"/>
								</div>
							</div>
							<div class="item-instruction">
								<div class="instruction">
									<h2>售后说明<i>INSTRUCTION</i></h2>
								</div>
							</div>
							<div class="instructionCon">
								<span>防盗扣损坏或丢失将不能退换货</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import addList from '@/lib/addList'
	import PicZoom  from './PicZoom.vue'
	 //1.引入store
	 import store from '../vuex/store.js'
	 import storage from '../model/storage.js';
	export default {
		data() {
			return {
				msg: '我是子组件的msg',
				list:[],
				info:{},
				addList,
				value:'',
				num:1,
				currentSize:'',
				cartInfo:[]
			}
		},
		store,
		methods:{
			getId(){
				console.log("当前商品的id："+this.$route.query.id);
			},
			fetchData(){
				//取出了shopdata.json里面的数据
				let localApi = "../static/item.json";
				this.$http.get(localApi).then((response) => {
					this.list =response.body.shopinfo;
					//过滤数据，根据当前id获取相应的商品信息
					this.info = this.list.filter((item) => {
		        			return item.itemId == this.$route.query.id
		     		 })[0]
		     		// 把获取的数据的imgshow数据存放在store中
					this.$store.commit('storeItemInfo',this.info.imgshow);
		     		console.log("info----"+JSON.stringify(this.info));	
				}, (Error) => {
					console.log(Error);
				})
			},
			getUrl(imgShow,key){
				//取出store里面的数据
			var infoData=this.$store.state.info;
			//用箭头函数改变数组里面每个对象的show属性，实现当前图片的show为true，其他为false
			infoData.forEach((item,index,thisArray)=>{
				//先修改所有的图片的show为false，然后再修改当前对象的show为true并返回
				thisArray[index].show=false;
				return thisArray[key].show=true;
			})
			console.log("取出来的信息:infoData---"+JSON.stringify(infoData));
			//测试修改的数据有没有更新到infoData里面，结果显示会更新原有数组
			for(var i=0; i<infoData.length; i++)
				console.log("获取的图片是否显示：----"+infoData[i].show);
				
				//this.imgUrl=url;
			},
			doAdd(info){
				//请求购物车页面
				console.log("当前配送城市------"+this.value+"当前尺码值----"+this.currentSize+"当前选择数量---"+this.num);
				
				if(this.currentSize=="")
					document.querySelectorAll('.size-error-hint')[0].innerHTML="请选择尺码";
				else if(this.value==""){
					document.querySelectorAll('.addr-error-hint')[0].innerHTML="请选择城市";
				}
				else if(this.currentSize=="" && this.value=="")
					alert("尺码和配送地址信息还没有选择哦")
				else{
					//添加商品数据至购物车
					
					/*
					 	查找购物车信息中有没有相同商品,
					 	如果index == -1，代表没有找到相同商品，则添加至购物车
					 	否则，更新商品信息
					 * */
					var index = this.cartInfo.findIndex((item)=>{
							return item.id == this.$route.query.id
						})
					console.log("findIndex---"+index);
					if(index == -1){
						this.cartInfo.push(
							{
								id:this.$route.query.id,
								name:this.info.itme_name,
								brand_name:this.info.itemParams.brand_name,
								img:this.info.src,
								color:this.info.itemParams.color,
								price:this.info.new_price,
								num:this.num,
								size:this.currentSize,
								city:this.value,
								totalPrice:this.num*this.info.new_price
							})
						storage.set('cartInfo',this.cartInfo);
					}else{
						this.cartInfo[index].num+=this.num;
						if(this.cartInfo[index].num >= 5){
							this.cartInfo[index].num = 5;
						}
						this.cartInfo[index].size=this.currentSize;
						this.cartInfo[index].city=this.value;
						storage.set('cartInfo',this.cartInfo);
					}
					/*
					 * this.$router.push({path:'/shoppingcart?cartInfo='+this.cartInfo});
					 	这是传参的第三种方式，上面那种传数组好像没用，传过去接收的参数显示Object
					 	下面这个是有用的
					 	this.$router.push({name:'ShoppingCart',query:{name:this.cartInfo}})
					 	this.$router.push({name:'ShoppingCart',query:{name:storage.get('cartInfo')}});
					 * */
					this.$router.push({path:'/shoppingcart'});
					//this.$router.push({name:'ShoppingCart'});
				}
				
				//如果没有获取到数量和尺码的值，就提示用户选择属性，就不跳转到购物车页面
				
				
				/*
				 	存储信息
				 * */
			},
			savelist(){
				storage.set('cartInfo',this.cartInfo);
			},
			getSize(index){
				//点击尺寸时，获取用户的值
				console.log("你选择的尺寸的index-----"+index);
				var size = document.querySelectorAll('.item-size-list span');
				var selectedVal = this.info.itemParams.size[index];
				this.currentSize = selectedVal;
				console.log("获取到的选中的值----"+selectedVal);
				console.log("value"+JSON.stringify(this.info.itemParams.size)+"sizeindex---"+JSON.stringify(size[index].className))
				for (var i = 0; i < size.length; i++) {
					size[i].className="";
				}
				size[index].className = 'sizeSelect';
				console.log("之后的size样式---"+JSON.stringify(size[index].className))
			}
				
			
		},
		components:{
			PicZoom
		}
		,mounted(){
			this.getId();
			this.fetchData();
			//以下两条语句是实现购物车的商品拼接
			var goodslist = storage.get('cartInfo');
			if(goodslist)
				this.cartInfo = goodslist;
		}
				/*,
		computed:{
			itemsInfo(){
				//取出了shopdata.json里面的数据
				let localApi = "../static/item.json";
				this.$http.get(localApi).then((response) => {
					this.list = response.body.shopinfo;
					//过滤数据，根据当前id获取相应的商品信息
					let info = this.list.filter((item) => {
		        			return item.itemId == this.$route.query.id
		     		 })[0]
		     		console.log("info----"+JSON.stringify(info));
		
					
				}, (Error) => {
					console.log(Error);
				})
			}
		}*/
	}
</script>

<style lang="scss" scoped="scoped">
	.size-error-hint{
		position: absolute;
		top: 0px;
		right: 22px;
		display: inline-block;
		width: 80px;
		height: 40px;
		color:#F10582;
		font-size: 16px;
		}
	.addr-error-hint{
		position: relative;
		top: 0px;
		display: inline-block;
		width: 80px;
		height: 40px;
		color:#F10582;
		font-size: 16px;
		margin-left: 12px;
	}
	.sizeSelect{
		/*border: 2px solid #F10582;*/
		background: #F10582;
		color: #fff;
		border: none;
	}
	.gray{
		font-size: 16px;
		color: #999;
	}
	.dark{
		color: #333;
		font-weight: bolder;
		font-size: 20px;
	}
	.red-icon{
		color: #f43499;
		margin-left: 20px;
	}
	.red-icon span{
		font-size: 48px;
		/*font-weight: bolder;*/
	}
	.dark-icon{
		color: #333;
		font-size: 18px;
	}
	.dark-icon span{
		text-decoration: line-through;
	}
	/* 内容居中 */
	.item-wraper{
		width: 1090px;
		margin: 20px auto;
	}
	/*.item-intro{
		border-bottom: 1px dashed #ccc;
	}*/
	.item-display{
		margin: 25px auto;
		border-bottom: 1px dashed #ccc;
	}
	.item-display .item-pic{
		float: left;
		width: 420px;
		/*height: 596.2px;*/
	/*	margin-left: 30px;*/
	}
	.item-pic img{
		width: 420px;
		height: 450px;
	}
	.pic-slider{
		width: 420px;
		margin-top: 8px;
	}
	.pic-slider .pic-slider-wrapper{
		width: 400px;
		margin: 0 auto;
	}
	.pic-slider-list img:hover{
		border: 1px solid #f10180;
		cursor: pointer;
	}
	.pic-slider .pic-slider-wrapper .pic-slider-list{
		display: inline-block;
	}
	.pic-slider .pic-slider-wrapper .pic-slider-list img{
		width: 65px;
		height: 66px;
	}
	.pic-slider-list img{
		margin-left: 12px;
	}
	.item-description{
		float: left;
		margin-left:80px;
	}
	.item-description-title-box p{
		margin-top: 10px;
	}
	.item-discount{
		margin: 18px 0;
		width: 490px;
		height: 80px;
		background: rgba(252,157,154,0.4);
		line-height: 80px;
	}
	.item-discount p{
		display: inline-block;
	}
	.item-addr-box{
		font-size: 14px;
		color: #333;
	}
	.item-addr-box select{
		outline: none;
		border: 1px solid #ccc;
		margin-left: 15px;
		/* 将默认的select样式清除 */
		appearance: none;
		-moz-appearance: none;
		-webkit-appearance: none;
		padding-left: 10px;
		background: url(../assets/images/arrow-down.png) no-repeat scroll right center transparent;
		
	}
	.el-select{
		margin-left: 15px;
	}
	/* 隐藏select默认的下拉箭头  */
	.item-addr-box select::-ms-expand{
		display: none;
	}
	.item-sizeInfo{
		margin-top: 13px;
		width: 490px;
		position: relative;
	}
	.item-sizeInfo .item-size-list{
		display: inline-block;
		margin-left: 14px;
		width: 364px;
		position: absolute;
	}
	.item-size-list span{
		display: inline-block;
		width: 68px;
		height: 26px;
		line-height: 26px;
		border: 1px solid #ccc;
		vertical-align: top;
		margin: 0 13px 13px 6px;
		text-align: center;
		font-size: 12px;
	}
	.item-size-helper{
		position: absolute;
		top: -25px;
		right: -80px;
		z-index: 1;
		width: 97px;
		height: 55px;
	}
	.size-show{
		padding-top: 30px;
	    width: 97px;
	    height: 25px;
	    line-height: 25px;
	    text-align: center;
	    cursor: pointer;
	    background: url(//shop.vipstatic.com/img/detail/detail_size_assitant-hash-5e12558a.gif?38dbf3f7) no-repeat 0 0;
	}
	.size-show .size-text{
		font-size: 12px;
		color: #f10180;
	}
	.item-num{
		margin-top: 62px;
	}
	.el-input-number{
		margin-left: 15px;
	}
	.num-hint{
		
		display: inline-block;
		margin-left: 5px;
		color: #F10180;
	}
	.button-addCart{
		margin: 18px 0 0 47px;
	}
	.button-addCart a{
		display: inline-block;
		width: 206px;
		height: 48px;
		line-height: 48px;
		text-align: center;
		background: #f10180;
		border-radius: 5px;	
		color: #fff;
	}
	.button-addCart a i{
		margin-right: 16px;
	}
	.button-addCart a span{
		font-size: 16px;
		font-weight: bolder;
	}
	.button-hint{
		display: block;
		margin-top: 8px;
		color: #999;
	}
	.button-hint i{
		color:#f10180 ;
	}
	.iteminfo{
		color: #999;
		font-size: 14px;
		margin: 12px 0;
		
	}
	.service-guard{
		margin: 12px 0;
	}
	.service-guard .service-list-item img{
		width: 100%;
		height: 42px;
	}
	.item-placeholder{
		margin-top: 66px;
	}
	.item-placeholder .detailTop{
		padding: 8px 0 8px 8px;
		border-bottom: 3px solid #333;
	}
	.item-placeholder-con{
		margin-top: 12PX;
	}
	.item-placeholder-con .size-helper-table-wraper h2{
		color: #F10582;
	}
	.item-placeholder-con .size-helper-table-wraper i{
		color: #333;
		margin-left: 6px;
	}
	.item-placeholder-con .size-title,.detail-title{
		padding-bottom: 6px;
		border-bottom: 1px dashed #ccc;
	}
	.size-helper-table-wraper .tips h3{
		margin: 6px 0;
	}
	.tips div{
		line-height: 28px;
	}
	.size-table{
		margin: 52px 0 72px 0;
	}
	.size-table .sizeimg img{
		width: 100%;
	}
	.size-table .title{
		font-weight: bolder;
		margin: 10px 0;
	}
	.detailInfo{
		margin-top: 26px;
	}
	.detailInfo table{
		width: 100%;
		border-collapse: collapse;
		border: 1px solid #ccc;
		text-align: left;
	}
	
	.detailInfo table tr th{
		width: 88px;
		padding: 8px 0 8px 12px;
		font-size: 14px;
		color: #333;	
		font-weight: bolder;
		background: #ECECF0;
		
	}
	.detailInfo table tr td{
		width: 420px;
		padding-left: 13px;
		padding-top: 8px;
		padding-bottom: 8px;
		color: #666;
		border: 1px solid #ccc;
	}
	.itemimg-display{
		margin-top: 46px;
		padding-bottom: 6px;
		border-bottom: 1px dashed #ccc;
	}
	.itemimg-wrapper{
		margin-top: 36px;
		width: 1090px;
	}
	.itemimg-wrapper .img-list{
		width: 640px;
		margin: 0 auto;
	}
	.img-list span{
		display: block;
		width: 640px;
		text-align: center;
		font-size: 24px;
		color: #333;
		margin-top: 20px;
	}
	.img-list img{
		width: 640px;
		margin-top: 20px;
	}
	.item-instruction{
		margin-top: 46px;
	}
	.instruction{
		padding: 6px;
		border-bottom: 1px dashed #ccc;
	}
	.instructionCon{
		padding: 12px 0 0 7px;
	}
</style>