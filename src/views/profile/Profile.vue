<template>
	<div class="profile">
		<nav-bar class="nav-bar">
			<div slot="center">我的</div>
		</nav-bar>

		<scroll class="scroll-height">
			<Login/>
			<money/>
			<profile-list/>
		</scroll>
	</div>
</template>

<script>
	import NavBar from "components/common/navbar/NavBar";
	import Scroll from "components/common/scroll/Scroll";
	import Login from "./childComps/Login";
	import Money from "./childComps/Money";
	import ProfileList from "./childComps/ProfileList";

	export default {
		name: "Profile",
		components: {ProfileList, Money, Login, Scroll, NavBar}
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
		box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
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
