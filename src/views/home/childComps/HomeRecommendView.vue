<template>
	<div class="recommend">
		<div class="recommend-item" v-for="item in recommends">
			<a :href="item.link">
				<van-image :src="item.image"/>
				<div>{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "HomeRecommendView",
		props: {
			recommends: {
				type: Array,
				default() {
					return []
				}
			}
		},
	}
</script>

<style scoped>
	.recommend {
		display: flex;
		text-align: center;
		font-size: 13px;
		border-bottom: 13px solid #eeeeee;
		padding: 7px;
	}

	.recommend-item {
		flex: 1;
	}

	.recommend-item .van-image {
		width: 92%;
		margin-bottom: 6px;
	}
</style>
