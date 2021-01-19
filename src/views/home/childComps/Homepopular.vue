<template>
	<div class="popular">
		<a href="https://act.mogujie.com/zzlx67">
			<h3>本周热门</h3>
			<!--			<van-overlay :show="true">-->
			<van-grid square :border="false" :column-num="3">
				<van-grid-item v-for="item in datas">
					<van-image :src="item.img"/>
					<span>{{item.text}}</span>
				</van-grid-item>
			</van-grid>
			<!--			</van-overlay>-->
		</a>
	</div>
</template>

<script>
	export default {
		name: "Homepopular",
		data() {
			return {
				datas: [
					{img: 'https://img.yzcdn.cn/vant/apple-1.jpg', text: 'iPhone热卖款'},
					{img: 'https://img.yzcdn.cn/vant/apple-2.jpg', text: 'iMac热门款'},
					{img: 'https://img.yzcdn.cn/vant/apple-8.jpg', text: 'iPad热门款'},
					{img: 'https://img.yzcdn.cn/vant/apple-7.jpg', text: 'MacBook热门款'},
					{img: 'https://img.yzcdn.cn/vant/apple-5.jpg', text: 'iPad热门款'},
					{img: 'https://img.yzcdn.cn/vant/apple-6.jpg', text: 'iPad热门款'},
				],
			}
		}
	}
</script>

<style scoped>
	.popular {
		text-align: center;
		padding: 10px 0 20px;
		opacity: 0.5;
	}

	.popular span {
		margin-top: 8px;
		font-size: 13px;
	}
</style>
