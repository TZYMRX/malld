<template>
	<div class="recommend">
		<van-grid v-for="item in recommends">
			<van-grid-item class="recommend-item">
				<a :href="item.link">
					<van-image :src="item.image"/>
					<div>{{item.title}}</div>
				</a>
			</van-grid-item>
		</van-grid>
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
		border-bottom: 11px solid #eeeeee;
	}

	.recommend-item {
		flex: 1;
		background-color: #666666;
	}

	.recommend-item .van-image {
		/*width: 92%;*/
		margin-bottom: 5px;
	}
</style>
