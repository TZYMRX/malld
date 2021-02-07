<template>
	<div id="detail">
		<detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
		<scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
			<detail-swiper ref="swiper" :top-images="topImages"/>
			<detail-base-info :goods="goods"/>
			<detail-shop-info :shop="shop"/>
			<detail-comment-info ref="comment" :comment-info="commentInfo"/>
			<detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
			<detail-param-info ref="params" :param-info="paramInfo"/>
			<ware-house-list ref="recommed" :warehouse="recommend"/>
		</scroll>
		<detail-bottom-bar @addCart="addCart"/>
		<back-top @click.native="backClick" v-show="isShowBackTop"/>
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
	import DetailBottomBar from "./childComps/DetailBottomBar";

	import Scroll from "components/common/scroll/Scroll";
	import WareHouseList from "components/content/warehouse/WareHouseList";

	import {getDetail, Goods, Shop, GoodsParam, getRecommend} from "network/detail";
	import {itemListenerMixin, backTopMixin} from '../../common/mixin'
	import {mapActions} from "vuex"
	import Toast from "vant/lib/toast";

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
			WareHouseList,
			DetailBottomBar,
		},
		mixins: [itemListenerMixin, backTopMixin],
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

				// themeTopYs: null,
				themeTopYs: [],
				currentIndex: 0,
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
			})

			// 请求推荐数据
			getRecommend().then(res => {
				this.recommend = res.data.list
			})
		},
		mounted() {
		},
		destroyed() {
			this.$bus.$off('itemImgLoad', this.itemImgListener)
		},
		methods: {
			...mapActions(['addTCart']),

			imageLoad() {
				// this.$refs.scroll.refresh()

				// this.refresh()
				// this.themeTopYs()
				this.themeTopYs = []
				this.themeTopYs.push(this.$refs.swiper.$el.offsetTop)
				this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
				this.themeTopYs.push(this.$refs.params.$el.offsetTop)
				this.themeTopYs.push(this.$refs.recommed.$el.offsetTop)
				this.themeTopYs.push(Number.MAX_VALUE)
			},

			titleClick(index) {
				this.$refs.scroll.scrollTo(0, (-this.themeTopYs[index] + 47), 500)
			},

			contentScroll(position) {
				// 显示返回顶部按钮
				this.isShowBackTop = (-position.y) > 1000

				// 获取Y值
				const positionY = -position.y

				// positionY 和 themeTopYs 的值进行对比
				let length = this.themeTopYs.length
				for (let i = 0; i < length - 1; i++) {
					// if (positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) {
					// 	console.log(i)
					// }

					// if (this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) || (i === length - 1 && positionY >= this.themeTopYs[i]))) {
					// 	this.currentIndex = i
					// 	this.$refs.nav.currentIndex = this.currentIndex
					// }

					if (this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])) {
						this.currentIndex = i
						this.$refs.nav.currentIndex = this.currentIndex
					}
				}
			},

			addCart() {
				// 获取购物车需要展示的商品信息
				const product = {}
				product.image = this.topImages[0];
				product.title = this.goods.title;
				product.desc = this.goods.desc;
				product.price = this.goods.realPrice;
				product.iid = this.iid;

				// 添加到购物车
				// this.$store.commit('addCart', product)
				this.addTCart(product).then(res => {
					Toast(res)
				})
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
