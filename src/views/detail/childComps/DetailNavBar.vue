<template>
	<van-nav-bar @click-left="backClick">
		<template #left>
			<van-icon name="arrow-left" size="18"/>
		</template>
		<template #title>
			<div slot="title" class="title">
				<div v-for="(item,index) in titles"
						 class="title-item"
						 :class="{active: index === currentIndex}"
						 @click="titleClick(index)">
					{{item}}
				</div>
			</div>
		</template>
	</van-nav-bar>
</template>

<script>
	export default {
		name: "DetailNavBar",
		data() {
			return {
				titles: ['商品', '评论', '详情', '推荐',],
				currentIndex: 0
			}
		},
		methods: {
			titleClick(index) {
				this.currentIndex = index
			},
			backClick() {
				this.$router.back()
			}
		}
	}
</script>

<style scoped>
	.title {
		display: flex;
		font-size: 13px;
	}

	.title-item {
		flex: 1;
		padding: 10px;
	}

	.active {
		color: var(--color-high-text);
	}
</style>
