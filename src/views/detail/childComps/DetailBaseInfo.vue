<template>
	<van-skeleton title :row="4" v-if="Object.keys(goods).length === 0"/>
	<div v-else-if="Object.keys(goods).length !== 0" class="base-info">
		<div class="info-price">
			<span class="n-price">{{goods.newPrice}}</span>
			<span class="o-price">{{goods.oldPrice}}</span>
			<span v-if="goods.discount" class="discount">{{goods.discount}}</span>
		</div>
		<div class="info-title">{{goods.title}}</div>
		<div class="info-other">
			<span>{{goods.columns[0]}}</span>
			<span>{{goods.columns[1]}}</span>
			<span>{{goods.services[goods.services.length-1].name}}</span>
		</div>
		<div class="info-service">
			<span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
				<img :src="goods.services[index].icon">
				<span>{{goods.services[index-1].name}}</span>
			</span>
		</div>
	</div>

</template>

<script>
	export default {
		name: "DetailBaseInfo",
		props: {
			goods: {
				type: Object,
				default() {
					return {}
				}
			}
		}
	}
</script>

<style scoped>
	.base-info {
		width: 97%;
		margin: 10px auto 8px auto;
		padding: 10px 8px;
		color: #999;
		border: 2px solid #f2f5f8;
		border-radius: 15px;
		background-color: #fff;
	}

	.info-title {
		color: #222;
		font-size: 13px;
		font-weight: 600;
		letter-spacing: 1px;
		line-height: 19px;
	}

	.info-price {
		padding: 0 8px 8px 5px;
	}

	.info-price .n-price {
		font-size: 25px;
		color: #E4728A;
	}

	.info-price .o-price {
		font-size: 13px;
		margin-left: 5px;
		text-decoration: line-through;
	}

	.info-price .discount {
		font-size: 12px;
		padding: 2px 5px;
		color: #fff;
		background-color: var(--color-high-text);
		border-radius: 8px;
		margin-left: 5px;

		position: relative;
		top: -8px;
	}

	.info-other {
		margin-top: 15px;
		line-height: 30px;
		font-size: 13px;
		display: flex;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		justify-content: space-between;
	}

	.info-service {
		display: flex;
		justify-content: space-between;
		line-height: 60px;
	}

	.info-service-item img {
		width: 14px;
		height: 14px;
		position: relative;
		top: 2px;
		margin-right: 2px;
	}

	.info-service-item span {
		font-size: 13px;
		color: #333;
	}
</style>
