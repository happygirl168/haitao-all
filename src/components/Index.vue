<template>
	<div id="index">
		<div class="main">
			<!--轮播横幅广告-->
			<div class="focus-banner">
				<div class="focus-banner-con">
					<el-carousel indicator-position="outside">
						<el-carousel-item v-for="item in 4" :key="item" style="height: 300px;">

						</el-carousel-item>
					</el-carousel>
				</div>
			</div>
			<!--每日必看专区-->
			<!--
				当<a href="#"></a>,跳转为空时，可用href="javascript:void()"代替，
				这样每次点击时就不会定位到顶部
			-->
			<div class="index-cms">
				<div class="column-operation">
					<div class="column-operation-title">
						<img src="../assets/images/column.jpg" />
					</div>
					<div class="column-operation-con clearfix">
						<a href="javascript:void()" class="column-operation-item col-6"><img src="../assets/images/1.jpg" alt="" /></a>
						<a href="javascript:void()" class="column-operation-item col-6"><img src="../assets/images/2.jpg" /></a>
						<a href="javascript:void()" class="column-operation-item col-3"><img src="../assets/images/3.jpg" /></a>
						<a href="javascript:void()" class="column-operation-item col-3"><img src="../assets/images/4.jpg" /></a>
						<a href="javascript:void()" class="column-operation-item col-3"><img src="../assets/images/5.jpg" /></a>
						<a href="javascript:void()" class="column-operation-item col-5"><img src="../assets/images/6.jpg" /></a>
						<a href="javascript:void()" class="column-operation-item col-5"><img src="../assets/images/7.jpg" /></a>
					</div>
				</div>
			</div>
			<!-- 品牌分类区  -->
			<div class="wrap">
				<div class="today-new shop-sort">
					<img src="../assets/images/today.png" />
				</div>
				<!-- 女装品牌  -->
				<div class="shop-sort J-brand-wrap" id="J-index-floor1" data-flag="floor1">
					<div class="shop-sort-title">
						<img src="../assets/images/woman_2ad.png" alt="女装" />
						<a href="javascript:void()" class="pull-right">全部女装品牌<i class="el-icon-d-arrow-right"></i></a>
					</div>
					<div id="floorBrandList-1" class="J-floorBrandList brand-wrap" data-flag="1">
						<div id="floorBrandList-2" class="J-floorBrandList brand-wrap" data-flag="2">
						<div class="J-Brand-Item-all-data">
							<div class="J-Brand-Item-single">
								<div class="J-Brand-Item-page" data-page="1">
									<brand-woman v-for="(item,index) in womandress" :index="index" :item="item"></brand-woman>
								</div>
							</div>	
						</div>
					</div>
						<!--<div class="shop-sort-ft">
							<a href="#" id="J-show-more-btn">逛更多女装品牌</a>
						</div>-->
					</div>
				</div>

				<!-- 鞋包品牌  -->
				<div class="shop-sort J-brand-wrap" id="J-index-floor2" data-flag="floor2">
					<div class="shop-sort-title">
						<img src="../assets/images/shoes-logo.png" />
						<a href="#" class="pull-right">全部鞋包品牌<i class="el-icon-d-arrow-right"></i></a>
					</div>
					<div id="floorBrandList-2" class="J-floorBrandList brand-wrap" data-flag="2">
						<div class="J-Brand-Item-all-data">
							<div class="J-Brand-Item-single">
								<div class="J-Brand-Item-page" data-page="1">
									<shoes-bag v-for="(item,index) in shoes" :index="index" :item="item"></shoes-bag>
								</div>
							</div>	
						</div>
					</div>
				</div>
				<!-- 男装品牌  -->
				<div class="shop-sort J-brand-wrap" id="J-index-floor3" data-flag="floor3">
					<div class="shop-sort-title">
						<img src="../assets/images/men_hhqx.png" />
						<a href="#" class="pull-right">全部男装品牌<i class="el-icon-d-arrow-right"></i></a>
					</div>
					<div id="floorBrandList-3" class="J-floorBrandList brand-wrap" data-flag="3">
						<div class="J-Brand-Item-all-data">
							<div class="J-Brand-Item-single">
								<div class="J-Brand-Item-page" data-page="1">
									<brand-man v-for="(item,index) in Mandress" :index="index" :item="item"></brand-man>	
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- 侧边导航条 -->
				<div class="index-nav-sort" id="J-index-nav-sort">
					<div class="index-nav-wrap">
						<div class="index-nav-list" id="J-index-nav-list">
							<a href="#J-index-floor1" class="index-nav-list-active" index="0" @click="setActiveClass(0)">
								<i class="iconfont icon-lianyiqun"></i>
								<span>女装</span>
							</a>
							<a href="#J-index-floor2" index="1" @click="setActiveClass(1)">
								<i class="iconfont icon-xiebao"></i>
								<span>鞋包</span>
							</a>
							<a href="#J-index-floor3" index="2" @click="setActiveClass(2)">
								<i class="iconfont icon-nanzhuangleimu"></i>
								<span>男装</span>
							</a>
							<a href="#J-index-floor4" index="3" @click="setActiveClass(3)">
								<i class="iconfont icon-yundong"></i>
								<span>运动</span>
							</a>
							<a href="#J-index-floor5" index="4" @click="setActiveClass(4)">
								<i class="iconfont icon-shangyi-"></i>
								<span>饰品</span>
							</a>
							<a href="#J-index-floor6" index="5" @click="setActiveClass(5)">
								<i class="iconfont icon-meizhuang"></i>
								<span>美妆</span>
							</a>
							<a href="#J-index-floor7" index="6" @click="setActiveClass(6)">
								<i class="iconfont icon-weibiaoti2fuzhi05"></i>
								<span>母婴</span>
							</a>
							<a href="#J-index-floor8" index="7" @click="setActiveClass(7)">
								<i class="iconfont icon-guoji"></i>
								<span>国际</span>
							</a>
							<a href="#J-index-floor9" index="8" @click="setActiveClass(8)">
								<i class="iconfont icon-shenghuo"></i>
								<span>生活</span>
							</a>
							<a href="#J-index-floor10" index="9" @click="setActiveClass(9)">
								<i class="iconfont icon-rili"></i>
								<span>预告</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	import womandress from '../lib/woman-dress.js';
	import womanDress from './Womandress.vue';
	
	import shoesBag from './ShoesBag.vue';
	import shoes from '../lib/shoes-bag.js';
	
	import Mandress from '../lib/Man-dress.js';
	import ManDress from './Mandress.vue';
	export default {
		data() {
			return {
				msg: '我是首页',
				womandress,
				shoes,
				Mandress
			}
		},
		methods: {
			//实现  侧导航一段距离后出现，然后位置固定不变  的功能
			handleScroll() {
				var scrollTop = window.pageYOffset;
				//				console.log(scrollTop);
				var navList = document.querySelector('#J-index-nav-sort');
				if(scrollTop > 630) {
					navList.className = 'is-list-nav-fixed';
				}else if(scrollTop < 630) {
					navList.className = 'is-list-nav-display';
				}

			},
			//  实现侧导航选中高亮效果
			/*
			 还需要解决刷新页面，当前高亮样式不会清除
			 * 
			 * */
			setActiveClass(index) {
				console.log("111-----" + index);
				var a = document.querySelectorAll('#J-index-nav-sort a');
				// 先清除所有元素的已有样式，再给当前元素添加高亮样式
				for(var i = 0; i < a.length; i++) {
					a[i].className = "";
				}
				a[index].className = "index-nav-list-active";

			}
		},
		components: {
			'brand-woman': womanDress,
			'shoes-bag':shoesBag,
			'brand-man':ManDress
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll);
		}/*,
		destroy(){
			window.removeEventListener('scroll',this.handleScroll);
		}*/
	}
</script>

<style lang="scss" scoped="scoped">
	/*.main{
	width: 1090px;
	margin: 0 auto;
}*/
	/*
	 	轮播图效果
	 * */

	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
	}
	
	.el-carousel__item:nth-child(3) {
		background-image: url(../assets/images/crouse4.jpg);
	}
	
	.el-carousel__item:nth-child(4) {
		background-image: url(../assets/images/crouse3.jpg);
	}
	
	.el-carousel__item:nth-child(5) {
		background-image: url(../assets/images/crouse2.jpg);
	}
	
	.el-carousel__item:nth-child(6) {
		background-image: url(../assets/images/crouse1.jpg);
	}
	/* 每日必看专区样式  */
	
	.index-cms {
		width: 1090px;
		margin: 0 auto;
		margin-top: 40px;
		margin-bottom: 20px;
	}
	
	.column-operation-title img {
		width: 1090px;
	}
	
	.column-operation-con {
		margin: 20px 0;
	}
	
	.column-operation-con a {
		display: inline-block;
	}
	/*伪元素*/
	
	.clearfix {
		*zoom: 1;
	}
	/* 清除浮动  */
	
	.clearfix:after {
		display: block;
		clear: both;
		visibility: hidden;
		content: "";
		height: 0;
	}
	
	.col-6 img {
		display: block;
		width: 512px;
		margin-bottom: 20px;
	}
	
	.col-6:nth-child(2) img {
		margin-left: 62px;
	}
	
	.col-3 img {
		width: 218px;
		margin-right: 39px;
	}
	
	.col-5 img {
		display: block;
		width: 316px;
		height: 86px;
	}
	
	a:nth-child(6) img {
		margin-bottom: 36px;
	}
	/* 通过让外标签元素浮动来达到让图片浮动  */
	
	.column-operation-item {
		float: left;
	}
	
	.wrap {
		width: 1090px;
		position: relative;
		margin: 0 auto;
	}
	
	.today-new img {
		/*width: 1090px;*/
		width: 100%;
	}
	
	.today-new.shop-sort {
		width: 1090px;
		margin-top: 40px;
		margin-bottom: 30px;
		margin: 50px auto 40px;
	}
	
	.shop-sort.J-brand-wrap {
		width: 1090px;
		height: 740px;
	}
	
	.shop-sort-title {
	
		margin-bottom: 20px;
		border-bottom: 1px solid #000;
		position: relative;
	}
	
	.pull-right {
		position: absolute;
		right: 0px;
		bottom: 5px;
	}
	/*  女装品牌  */
	
	.J-floorBrandList .J-Brand-Item-single {
		height: auto;
	}
	
	/*.J-floorBrandList .J-Brand-Item-single .J-Brand-Item-page {
		height: 359px;
	}*/
	
	.brand-wrap {
		/*    
		 	多20px，是为了让图片两端对齐
		 * */
		width: 1110px;
		height: auto;
		padding-bottom: 50px;
	}
	
	.brand-item {
		float: left;
		width: 535px;
		height: 275px;
		position: relative;
		margin-right: 20px;
		margin-bottom: 20px;
	}
	
	.brand-item a {
		background: 0 0;
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	}
	
	.brand-item .brand-img {
		width: 535px;
		height: 243px;
	}
	
	.pms-info {
		position: absolute;
		bottom: 32px;
		width: 515px;
		height: 30px;
		line-height: 30px;
		background: rgba(0, 0, 0, .6);
		padding-left: 20px;
		color: #fff;
		font-size: 14px;
		overflow: hidden;
	}
	
	.icon-time {
		display: inline-block;
		width: 16px;
		height: 16px;
		background: url(http://shop.vipstatic.com/img/te/index_v4/index_imgs-hash-1724ef6c.png?ed94a9d0) no-repeat -50px 0;
	}
	
	.brand-item .brand-info {
		height: 40px;
		font-size: 14px;
		background: #fff;
	}
	
	.brand-item .brand-info .brand-time {
		position: relative;
		display: inline-block;
		margin-left: 149px;
	}
	
	.brand-item .brand-info .brand-time .J-time-icon {
		display: inline-block;
		position: absolute;
		width: 38px;
		left: 22px;
		top: -2px;
	}
	
	.brand-item .brand-discount .salebg {
		font-size: 24px;
		color: #f10582;
		margin-right: 3px;
		font-weight: 700;
	}
	
	.brand-item .brand-info .brand-name {
		margin-left: 20px;
	}
	

	
	
	/* 鞋包品牌开始  */
	
	.hidden {
		display: none;
	}
	/*测导航条开始*/
	
	.is-list-nav-fixed {
		display: block;
		position: fixed;
		top: 82px;
		width: 88px;
		left: 50%;
		margin-left: -672px;
		z-index: 100;
	}
	
	.is-list-nav-fixed .index-nav-wrap {
		width: 88px;
		margin-top: 3px;
		border: 1px solid #d6d6d6;
		border-radius: 3px;
	}
	
	.is-list-nav-fixed .index-nav-wrap .index-nav-list a {
		display: block;
		margin-left: 5px;
		margin-right: 6px;
		padding: 6px 0;
		width: 78px;
		height: 20px;
		border-bottom: 1px solid #eaeaea;
		color: #666;
		text-align: center;
		font-size: 12px;
	}
	
	.is-list-nav-fixed .index-nav-wrap .index-nav-list a:hover {
		color: #f10582;
	}
	
	.is-list-nav-display {
		display: none;
	}
	
	.index-nav-list-active {
		background: #f10582;
		color: #FFF;
		border-radius: 3px;
	}
</style>