<template>
	<div id="home">
		<nav-bar class="home-nav"><div slot="center">Mall</div></nav-bar>
		<HomeSwiper :banners="banners"/>
		<home-recommend-view :recommends="recommends"/>
	</div>
</template>

<script>
	import NavBar from "components/common/navbar/NavBar";
	import HomeSwiper from "./childComps/HomeSwiper";
	// import {Swiper, SwiperItem} from 'components/common/swiper'
	import HomeRecommendView from "./childComps/HomeRecommendView";

	import {getHomeMultidata} from "network/home";


	export default {
		name: "Home",
		components: {
			NavBar,
			HomeSwiper,
			HomeRecommendView,
		},
		data() {
			return {
				banners: [],
				recommends: [],
			}
		},
		created() {
			getHomeMultidata().then(res => {
				this.banners = res.data.banner.list;
				this.recommends = res.data.recommend.list;
			})
		}
	}
</script>

<style scoped>
	.home-nav {
		background-color: #E4728A;
		color: #ffffff;
	}
</style>
