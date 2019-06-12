<template>
	<div id="pay">
		<div class="order-pay">
			<div class="order-con">
				<img src="../assets/images/pay_success.png" alt="支付成功" />
				<div class="pay-params">
					<div class="pay-success">支付成功</div>
					<div class="pay-tip">
						<div>交易详情可在我的订单里查看</div>
						<div class="">
							此页面可在<i class="timer">{{count}}</i>秒之后自动跳转到我的订单页
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				count:''
			}
		},
		methods:{
			//计时器，倒计时3秒后自动跳转到订单管理页面
			Time(){
				const TIME_COUNT = 3;
				if(!this.timer){
					this.count = TIME_COUNT;
					this.show = false;
					this.timer = setInterval(()=>{
						if(this.count > 0 && this.count <= TIME_COUNT){
							this.count--;
						}else{
							this.show = true;
							clearInterval(this.timer);
							this.timer = null;
							this.$router.push({path:'/order'});
						}
							
					},1000)
				}
			}
		},mounted(){
			this.Time();
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.order-pay{
		position: relative;
	}
	.order-con{
		margin: 0 auto;
		width: 1090px;
		/*height: 605px;*/
		text-align: center;
		margin-top: 168px;
	}
	.pay-success{
		color: #00AFF0;
		font-size: 24px;
		font-weight: bolder;
		margin-top: 12px;
	}
	.pay-tip{
		margin-top: 18px;
		line-height: 22px;
		color: #969896;
	}
	.timer{
		padding: 0 8px;
		font-size: 22px;
		font-weight: bolder;
		color: #F10180;
	}
</style>