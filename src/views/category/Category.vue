<template>
	<div id="category">
		<nav-bar class="nav">
			<div slot="center">分类</div>
		</nav-bar>

		<tab-menu :slide-bar-list="categoryList" @slideBarItemClick="slideBarItemClick"/>

		<scroll
			class="scroll-height"
			@scroll="contentScroll"
			:probe-type="3"
			ref="scroll">
			<subcategory :category-list="subcategoryList"/>
			<tab-control :titles="titleList" @tabClick="tabClick" ref="tabControl"/>
			<ware-house-list :warehouse="categoryDetailList"/>
		</scroll>

		<back-top @click.native="backClick" v-show="isShowBackTop"/>
	</div>
</template>

<script>
	import TabMenu from "./childComps/TabMenu";
	import NavBar from "components/common/navbar/NavBar";
	import Scroll from "components/common/scroll/Scroll";
	import {getCategory, getCategoryDetail, getSubcategory} from "network/category";
	import {backTopMixin} from "../../common/mixin";
	import Subcategory from "./childComps/Subcategory";
	import TabControl from "components/content/tabControl/TabControl";
	import WareHouseList from "components/content/warehouse/WareHouseList";

	export default {
		name: "Category",
		mixins: [backTopMixin],
		components: {
			WareHouseList,
			TabControl,
			Subcategory,
			NavBar,
			Scroll,
			TabMenu
		},
		data() {
			return {
				// 分类内容数据
				subcategoryList: [],
				categoryDetailList: [],
				// 分类侧边栏数据
				categoryList: [],
				titleList: ["流行", "新款", "精选"],
				currentIndex: 0,
			}
		},
		methods: {
			getCategory() {
				getCategory().then(res => {
					this.categoryList = res.data.category.list
					this.$nextTick(() => {
						this.getSubcategory(this.categoryList[0].maitKey)
						this.getCategoryDetail(this.categoryList[0].miniWallkey, 'pop')
					})
				})
			},
			getSubcategory(key) {
				getSubcategory(key).then(res => {
					this.subcategoryList = [...res.data.list]
				})
			},
			getCategoryDetail(key, type) {
				getCategoryDetail(key, type).then(res => {
					this.categoryDetailList = [...res]
				})
			},

			slideBarItemClick({maitKey, index}) {
				if (this.currentIndex === index) return;
				this.currentIndex = index
				// 每次切换分类初始化tabControl的下标
				this.$refs.tabControl.currentIndex = 0;
				// 请求对应的推荐列表
				this.getCategoryDetail(this.categoryList[this.currentIndex].miniWallkey, "pop")
				this.getSubcategory(maitKey)
			},
			tabClick(index) {
				const typeList = ['pop', 'new', 'sell']
				// 切换类型数据
				this.getCategoryDetail(this.categoryList[this.currentIndex].miniWallkey, typeList[index])
			},
			contentScroll(position) {
				// 显示返回顶部按钮
				this.isShowBackTop = (-position.y) > 1000
				// 获取滚动的位置
				this.curPosition = position ? -position.y : 0;
			},
			subcategoryImgLoad() {
				this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
			}
		},
		created() {
			this.getCategory()
		},
		activated() {
			this.$store.commit('setLoading', true)
		}
	}
</script>

<style scoped>
	.nav {
		background-color: var(--color-tint);
		font-weight: 700;
		color: #fff;
		box-sizing: border-box;
	}

	.scroll-height {
		position: fixed;
		top: 44px;
		right: 0;
		bottom: 50px;
		left: 100px;
		overflow: hidden;
	}

	.home-tab-control {
		position: relative;
		z-index: 3;
		background-color: #fff;
	}
</style>
