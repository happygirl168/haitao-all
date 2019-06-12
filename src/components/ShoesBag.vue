<template>
	<!-- 女装品牌，品牌列表展示  -->
	<div id="shoes_bag">
		<!--  router-link 的to属性是传的动态参数  -->
		<router-link :to="'/shopinfo/'+item.brand_id+'/'+item.brand_info.brand_ad+'/'+item.brand_info.brand_discount+'/'+item.brand_info.dis_time">
			<div class="brand-item clearfix">
				<a target="_blank">
					<!--  :src才能正确显示此图片  -->
					<img v-lazy="item.brand_info.src" class="brand-img" :alt="item.brand_info.brand_title"/>
					<div class="pms-info" title="item.brand_info.brand_title">
						{{item.brand_info.brand_title}}
					</div>
					<div class="brand-info">
						<span class="brand-discount">
							<span class="salebg">
								{{item.brand_info.brand_discount}}
							</span> 
							折起
						</span>
						<span class="brand-name" id="J-brand-name" :title="item.brand_info.brand_title">
						{{item.brand_info.brand_ad}}
						</span>
						<p class="brand-time">
							<i class="icon-time"></i>
							<span class="J-time-icon">剩{{item.brand_info.dis_time}}天</span>
						</p>
					</div>
				</a>
			</div>
		</router-link>
		<div class="shop-sort-ft">
			<a href="#" id="J-show-more-btn">逛更多鞋包品牌</a>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: '我是子组件的msg'
			}
		},
		props: ['item', 'index'] /*   这个title是接收从父组件穿过来的值  */
	}
</script>

<style lang="scss" scoped="scoped">
	/*  女装品牌  */

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
	

	.shop-sort-ft{
		width: 260px;
		position: relative;
	}
	.shop-sort-ft a {
		position: absolute;
		display: block;
		width: 265px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		color: #FFFFFF;
		background: #f10582;
		font-size: 14px;
		top: 618px;
		left: 380px;
	}
</style>