<template>
	<div class="tab-control">
		<van-tabs v-model="activeName" title-active-color="#AB7896" @click="itemClick" swipeable animated>
			<van-tab title="流行" name="0"/>
			<van-tab title="新款" name="1"/>
			<van-tab title="精选" name="2"/>
		</van-tabs>
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
				activeName: 'a',
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
		background-color: #ffffff;
	}
</style>
