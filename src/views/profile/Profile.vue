<template>
	<div class="profile">
		<nav-bar class="nav-">
			<div slot="center">我的</div>
		</nav-bar>

		<scroll class="scroll-height">
			<Login/>
		</scroll>
	</div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
	import Scroll from "components/common/scroll/Scroll";
	import Login from "./childComps/Login";
	export default {
    name: "Profile",
		components: {Login, Scroll, NavBar}
	}
</script>

<style scoped>
	.profile {
		width: 100%;
		height: 100%;
	}

	.nav-bar {
		font-weight: 600;
		color: white;
		background-color: #ff8198;
	}

	.scroll-height {
		position: absolute;
		top: 44px;
		right: 0;
		bottom: 50px;
		left: 0;
		overflow: hidden;
	}
</style>
