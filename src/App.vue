<template>
	<div id="app">
		<keep-alive exclude="Detail">
			<router-view/>
		</keep-alive>

		<TabBar v-if="this.$route.meta.showTab"/>
	</div>
</template>

<script>
	import TabBar from "./components/common/tabbar/TabBar";

	export default {
		name: 'App',
		components: {
			TabBar
		}
	}
</script>

<style>
	@import "assets/css/base.css";
</style>
