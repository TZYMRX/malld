<template>
	<van-swipe :autoplay="5000" @change="onChange">
		<van-swipe-item v-for="(item, index) in banners" :key="index">
			<a :href="item.link">
				<img :src="item.image" width="100%" @load="imgLoad"/>
			</a>
		</van-swipe-item>
		<template #indicator>
			<div class="custom-indicator">{{ current + 1 }}/4</div>
		</template>
	</van-swipe>
</template>

<script>
	export default {
		name: "HomeSwiper",
		props: {
			banners: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				current: 0,
				isLoad: false
			};
		},
		methods: {
			onChange(index) {
				this.current = index;
			},
			imgLoad() {
				if (!this.isLoad)
					this.$emit('swiperImgLoad')
				this.isLoad = true
			}
		},
	}
</script>

<style scoped>
	.custom-indicator {
		position: absolute;
		right: 0;
		bottom: 5px;
		padding: 2px 5px;
		font-size: 12px;
		border-radius: 5px;
		color: #ffffff;
		background: rgba(0, 0, 0, 0.1);
	}
</style>
