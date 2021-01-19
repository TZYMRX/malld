<template>
	<div class="tab-control">
		<van-tabs v-model="activeName"
							title-active-color="#AB7896"
							@click="itemClick"
							swipeable animated>
			<van-tab title="流行" name="0"/>
			<van-tab title="新款" name="1"/>
			<van-tab title="精选" name="2"/>
		</van-tabs>

		<!--		<div class="tab-control">-->
		<!--			<div v-for="(item,index) in titles"-->
		<!--					 class="tab-control-item"-->
		<!--					 :class="{active:index === currentIndex}"-->
		<!--					 @click="itemClick">-->
		<!--				<span>{{item}}</span>-->
		<!--			</div>-->
		<!--		</div>-->
	</div>
</template>

<script>
	export default {
		name: "TabControl",
		// props: {
		// 	titles: {
		// 		type: Array,
		// 		default() {
		// 			return []
		// 		}
		// 	}
		// },
		data() {
			return {
				activeName: '',
				currentIndex: 0,
			}
		},
		methods: {
			itemClick(name) {
				this.$emit('tabClick', name)
			}
		}
	}
</script>

<style scoped>
	.tab-control {
		/*display: flex;*/
		/*text-align: center;*/
		/*font-size: 15px;*/
		/*height: 40px;*/
		/*line-height: 40px;*/
		background-color: #ffffff;
	}

	/*.tab-control-item {*/
	/*	flex: 1;*/
	/*}*/

	/*.tab-control-item span {*/
	/*	padding: 5px;*/
	/*}*/

	/*.active {*/
	/*	color: var(--color-high-text);*/
	/*}*/

	/*.active span {*/
	/*	border-bottom: 3px solid var(--color-tint);*/
	/*}*/
</style>
