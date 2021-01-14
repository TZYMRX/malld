<template>
	<div class="recommend">
		<div v-for="item in recommends" class="recommend-item">
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
		}
	}
</script>

<style scoped>
	.recommend {
		display: flex;
		text-align: center;
		font-size: 13px;
		padding: 12px 0 25px;
		border-bottom: 11px solid #eeeeee;
	}

	.recommend-item {
		flex: 1;
	}

	.recommend-item .van-image {
		width: 92%;
		margin-bottom: 8px;
	}
</style>
