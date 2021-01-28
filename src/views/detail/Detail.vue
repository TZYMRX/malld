<template>
	<div id="detail">
		<detail-nav-bar class="detail-nav" @titleClick="titleClick"/>
		<scroll class="content" ref="scroll">
			<detail-swiper ref="swiper" :top-images="topImages"/>
			<detail-base-info :goods="goods"/>
			<detail-shop-info :shop="shop"/>
			<detail-comment-info ref="comment" :comment-info="commentInfo"/>
			<detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
			<detail-param-info ref="params" :param-info="paramInfo"/>
			<ware-house-list ref="recommed" :warehouse="recommend"/>
		</scroll>
	</div>
</template>

<script>
	import DetailNavBar from "./childComps/DetailNavBar";
	import DetailSwiper from "./childComps/DetailSwiper";
	import DetailBaseInfo from "./childComps/DetailBaseInfo";
	import DetailShopInfo from "./childComps/DetailShopInfo";
	import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
	import DetailParamInfo from "./childComps/DetailParamInfo";
	import DetailCommentInfo from "./childComps/DetailCommentInfo";

	import Scroll from "components/common/scroll/Scroll";
	import WareHouseList from "components/content/warehouse/WareHouseList";

	import {getDetail, Goods, Shop, GoodsParam, getRecommend} from "network/detail";
	import {itemListenerMixin} from '../../common/mixin'
	import {debounce} from "../../common/utils";

	export default {
		name: "Detail",
		components: {
			DetailNavBar,
			DetailSwiper,
			DetailBaseInfo,
			DetailShopInfo,
			Scroll,
			DetailGoodsInfo,
			DetailParamInfo,
			DetailCommentInfo,
			WareHouseList
		},
		mixins: [itemListenerMixin],
		data() {
			return {
				iid: null,
				topImages: [],  // 轮播图
				goods: {},		  // 基本信息
				shop: {},			  // 店铺信息
				detailInfo: {}, // 商品信息
				paramInfo: {},  // 商品参数
				commentInfo: {},// 评论信息
				recommend: [],	// 推荐信息

				themeTopYs: [],
				// themeTopYs: null,
			}
		},
		created() {
			// 保持传入的iid
			this.iid = this.$route.params.iid

			// 根据iid请求详情数据
			getDetail(this.iid).then(res => {
				const data = res.result
				// 获取轮播图数据
				this.topImages = data.itemInfo.topImages

				// 获取商品信息
				this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

				// 获取店铺信息
				this.shop = new Shop(data.shopInfo)

				// 获取商品详情信息
				this.detailInfo = data.detailInfo

				// 获取商品参数
				this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

				// 获取评论信息
				if (data.rate.cRate !== 0) {
					this.commentInfo = data.rate.list[0]
				}

				// this.$nextTick(() => {
				// 	this.themeTopYs = []
				// 	this.themeTopYs.push(0)
				// 	this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
				// 	this.themeTopYs.push(this.$refs.params.$el.offsetTop)
				// 	this.themeTopYs.push(this.$refs.recommed.$el.offsetTop)
				// })
			})

			// 请求推荐数据
			getRecommend().then(res => {
				this.recommend = res.data.list
			})

			// this.themeTopYs = debounce(() => {
			// 	this.themeTopYs = []
			// 	this.themeTopYs.push(this.$refs.swiper.$el.offsetTop)
			// 	this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
			// 	this.themeTopYs.push(this.$refs.params.$el.offsetTop)
			// 	this.themeTopYs.push(this.$refs.recommed.$el.offsetTop)
			// })
		},
		mounted() {
		},
		updated() {
		},
		destroyed() {
			this.$bus.$off('itemImgLoad', this.itemImgListener)
		},
		methods: {
			imageLoad() {
				// this.$refs.scroll.refresh()

				// this.refresh()
				// this.themeTopYs()
				this.themeTopYs = []
				this.themeTopYs.push(this.$refs.swiper.$el.offsetTop)
				this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
				this.themeTopYs.push(this.$refs.params.$el.offsetTop)
				this.themeTopYs.push(this.$refs.recommed.$el.offsetTop)
			},

			titleClick(index) {
				this.$refs.scroll.scrollTo(0, (-this.themeTopYs[index] + 47), 200)
			}
		}
	}
</script>

<style scoped>
	#detail {
		height: 100vh;
		background-color: #f5f5f5;
	}

	.content {
		height: calc(100% - 44px);
	}
</style>
