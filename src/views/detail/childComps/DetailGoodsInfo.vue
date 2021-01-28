<template>
	<div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
		<div class="info-desc">
			<div class="text">---------------------- 宝贝详情 ---------------------</div>
			<div class="desc">{{detailInfo.desc}}</div>
		</div>
		<div class="goods-info-item">
			<!--<div class="info-key">{{detailInfo.detailImage[0].key}}</div>-->
			<div class="info-list">
				<img v-for="(item,index) in detailInfo.detailImage[0].list"
						 :key="index" :src="item" 	@load="imgLoad">

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "DetailGoodsInfo",
		props: {
			detailInfo: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {
				counter: 0,
				imagesLength: 0
			}
		},
		methods: {
			imgLoad() {
				if (++this.counter === this.imagesLength) {
					this.$emit('imageLoad')
				}
			}
		},
		watch: {
			detailInfo() {
				this.imagesLength = this.detailInfo.detailImage[0].list.length
			}
		}
	}
</script>

<style scoped>
	.goods-info {
		width: 97%;
		margin: 12px auto 0 auto;
		background-color: #fff;
		border-radius: 15px;
		padding: 9px 0;
	}

	.info-desc {
		background-color: #fff;
		padding: 0 15px 2px 15px;
		border-bottom: 1px solid #f5f5f5;
		text-align: center;
	}

	.text {
		text-align: center;
		font-size: 14px;
		padding: 5px;
	}

	.info-desc .desc {
		padding: 5px 10px 15px 10px;
		font-size: 14px;
	}

	.goods-info-item {
		background-color: #fff;
	}

	.info-key {
		margin: 10px 10px 10px 15px;
		color: #333;
		font-size: 15px;
		text-align: center;
	}

	.info-list img {
		margin-top: 10px;
		border-radius: 5px;
		width: 97%;
		margin-left: 5px;
	}
</style>
