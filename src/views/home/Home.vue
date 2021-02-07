<template>
	<div id="home">
		<!--导航栏-->
		<nav-bar class="home-nav">
			<div slot="left">
				<van-button icon="shop" color="#ff8198"></van-button>
			</div>
			<div slot="center">
				<van-search
					v-model="searchValue"
					shape="round"
					background="#ff8198"
					placeholder="请输入搜索关键词"
				/>
			</div>
			<div slot="right">
				<van-button color="#ff8198">搜索</van-button>
			</div>
		</nav-bar>

		<tab-control
			:titles="tabControlTitles"
			@tabClick="tabClick"
			class="home-tab-control"
			ref="tabControl1"
			v-show="isShowTab"
		/>

		<!-- BScroll滚动区域 -->
		<scroll
			:probe-type="3"
			:pull-up-load="true"
			@scroll="contentScroll"
			@pullingUp="loadMore"
			class="content"
			ref="scroll"
		>

			<!-- 轮播图 -->
			<home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"/>
			<!-- 推荐分类 -->
			<home-recommend-view :recommends="recommends"/>
			<!-- 本周流行 -->
			<homepopular/>
			<!-- 列表导航 -->
			<tab-control
				:titles="tabControlTitles"
				class="home-tab-control"
				@tabClick="tabClick"
				ref="tabControl2"
			/>
			<!-- 商品列表 -->
			<ware-house-list :warehouse="showWarehouse"/>
		</scroll>

		<!-- 回到顶部,监听组件的原生事件必须要用native修饰符变成原生组件 -->
		<back-top @click.native="backClick" v-show="isShowBackTop"/>
	</div>
</template>

<script>
	import HomeSwiper from "./childComps/HomeSwiper";
	import HomeRecommendView from "./childComps/HomeRecommendView";
	import Homepopular from "./childComps/Homepopular";

	import NavBar from "components/common/navbar/NavBar";
	import TabControl from "components/content/tabControl/TabControl";
	import WareHouseList from "components/content/warehouse/WareHouseList";
	import Scroll from "components/common/scroll/Scroll";

	import {getHomeMultidata, getHomeWarehouse} from "network/home";
	import {itemListenerMixin, backTopMixin} from "../../common/mixin";

	export default {
		name: "Home",
		components: {
			NavBar,
			HomeSwiper,
			HomeRecommendView,
			Homepopular,
			TabControl,
			WareHouseList,
			Scroll,
		},
		data() {
			return {
				searchValue: '',

				banners: [],
				recommends: [],
				tabControlTitles: ["流行", "新款", "精选"],
				warehouse: {
					'pop': {page: 0, list: []},
					'new': {page: 0, list: []},
					'sell': {page: 0, list: []}
				},
				currentType: 'pop',
				tabOffsetTop: 0,
				// isTabFixed: false,
				// saveY: 0,
			}
		},
		// vue重复代码的混入
		mixins: [itemListenerMixin, backTopMixin],
		computed: {
			showWarehouse() {
				return this.warehouse[this.currentType].list
			},
			isShowTab() {
				return this.curPosition >= this.tabOffsetTop;
			}
		},
		methods: {
			/**
			 * 网络请求
			 */
			// 1、请求多个数据
			getHomeMultidata() {
				getHomeMultidata().then(res => {
					this.banners = res.data.banner.list;
					this.recommends = res.data.recommend.list;
				})
			},
			// 2、请求商品数据
			getHomeWarehouse(type) {
				let page = this.warehouse[type].page + 1
				getHomeWarehouse(type, page).then(res => {
					// for (let n of res.data.list) {
					// 	this.warehouse[type].list.push(n)
					// }
					this.warehouse[type].list.push(...res.data.list)
					this.warehouse[type].page += 1

					// 完成上拉加载
					this.$refs.scroll.finishPullUp()
				})
			},

			/**
			 * 事件监听
			 */
			// tabControl点击事件
			tabClick(index) {
				switch (index) {
					case 0:
						this.currentType = 'pop'
						break
					case 1:
						this.currentType = 'new'
						break
					case 2:
						this.currentType = 'sell'
						break
				}
				this.$refs.tabControl1.currentIndex = index;
				this.$refs.tabControl2.currentIndex = index;
			},

			// 获取滚动的位置
			contentScroll(position) {
				// 显示返回顶部按钮
				this.isShowBackTop = (-position.y) > 1000

				// 获取滚动的位置
				this.curPosition = position ? -position.y : 0;
			},
			// 上拉加载更多
			loadMore() {
				this.getHomeWarehouse(this.currentType)
			},

			// 监听轮播图加载完成
			swiperImgLoad() {
				// 获取tabControl的offsetTop位置
				this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
			},
		},
		created() {
			this.getHomeMultidata()
			// 商品数据
			this.getHomeWarehouse('pop')
			this.getHomeWarehouse('new')
			this.getHomeWarehouse('sell')
		},
		// keep-alive状态下进来的时候的生命周期
		activated() {
			// 同时刷新bs防止不能滚动
			this.$refs.scroll.refresh()
		},
		// keep-alive状态下进来的时候的生命周期
		deactivated() {
			// 取消全局事件监听
			this.$bus.$off('itemImgLoad', this.ItemImgListener)
		},
	}
</script>

<style scoped>
	#home {
		height: 100%;
	}

	.home-nav {
		background-color: #ff8198;
		color: #fff;
		font-weight: 600;
	}

	.content {
		position: absolute;
		top: 54px;
		right: 0;
		bottom: 50px;
		left: 0;
		overflow: hidden;
	}

	/* 导航吸顶 */
	.home-tab-control {
		position: relative;
		z-index: 3;
		background-color: #fff;
	}
</style>
