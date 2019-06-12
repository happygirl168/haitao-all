<template>
	<div class="myorder">
		订单页面
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			}
		},
		methods:{

		},mounted(){
			
			console.log("我选择的商品信息---"+this.$route.query.listinfo)
		}
	}
</script>

<style lang="scss" scoped="scoped">

</style>