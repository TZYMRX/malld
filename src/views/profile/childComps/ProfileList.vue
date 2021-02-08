<template>
	<div class="profile-list">
		<div class="profile-list-item">
			<van-icon class="profile-list-icon" name="manager"/>
			<span>我的消息</span>
		</div>
		<div class="profile-list-item">
			<van-icon class="profile-list-icon" name="point-gift"/>
			<span>积分商城</span>
		</div>
		<div class="profile-list-item">
			<van-icon class="profile-list-icon" name="gem"/>
			<span>会员卡</span>
		</div>
		<div class="line"/>
		<div class="profile-list-item">
			<van-icon class="profile-list-icon" name="shopping-cart"/>
			<span>我的购物车</span>
		</div>
		<div class="profile-list-item">
			<van-icon class="profile-list-icon" name="good-job"/>
			<span>点赞购物APP</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ProfileList"
	}
</script>

<style scoped>
	.profile-list {
		width: 100%;
	}

	.profile-list-item {
		display: flex;
		height: 45px;
		line-height: 45px;
		align-items: center;
		padding-left: 20px;
		border-bottom: 1px solid #eeeeee;
	}

	.profile-list-item span{
		font-size: 14px;
		color: #333333;
	}

	.profile-list-item .profile-list-icon {
		font-size: 24px;
		margin-right: 7px;
	}

	.line {
		height: 10px;
		background-color: #eeeeee;
	}
</style>
