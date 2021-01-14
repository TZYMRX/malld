<template>
	<van-swipe :autoplay="5000" @change="onChange">
		<van-swipe-item v-for="(item, index) in banners" :key="index">
			<a :href="item.link">
				<img :src="item.image" width="100%" style="border-radius: 5px"/>
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
			};
		},
		methods: {
			onChange(index) {
				this.current = index;
			},
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
