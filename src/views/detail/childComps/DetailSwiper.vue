<template>
	<van-empty description="" v-if="Object.keys(topImages).length === 0"/>
	<van-swipe :autoplay="3000" class="detail-swiper" v-else-if="Object.keys(topImages).length !== 0">
		<van-swipe-item v-for="(item, index) in topImages" :key="index">
			<van-image width="100%" :src="item" fit="scale-down" lazy-load/>
		</van-swipe-item>
	</van-swipe>
</template>

<script>
	export default {
		name: "DetailSwiper",
		props: {
			topImages: {
				type: Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.detail-swiper {
		height: 300px;
		overflow: hidden;
	}
</style>
