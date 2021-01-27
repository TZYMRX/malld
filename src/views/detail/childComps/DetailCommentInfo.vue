<template>
	<div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
		<div class="info-header">
			<div class="header-title">用户评价</div>
			<div class="header-more">
				更多
				<van-icon class="arrow" name="arrow" size="13"/>
			</div>
		</div>

		<div class="info-user">
			<img :src="commentInfo.user.avatar">
			<span>{{commentInfo.user.uname}}</span>
		</div>

		<div class="info-detail">
			<p>{{commentInfo.content}}</p>
			<div class="info-other">
				<span class="date">{{commentInfo.created | showDate}}</span>
				<span>{{commentInfo.style}}</span>
			</div>

			<div class="info-imgs">
				<img v-for="(item,index) in commentInfo.images" :src="item" :key="index">
			</div>
		</div>
	</div>
</template>

<script>
	import {formatDate} from "../../../common/utils";

	export default {
		name: "DetailCommentInfo",
		props: {
			commentInfo: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		filters: {
			showDate(value){
				// 将时间戳传成Date对象
				const date = new Date(value * 1000)
				// 将date格式化
				return formatDate(date,'yyyy-MM-dd hh:mm:ss')
			}
		}
	}
</script>

<style scoped>
	.comment-info {
		background-color: #fff;
		border-radius: 15px;
		width: 97%;
		margin: 10px auto 0 auto;
		padding: 12px 8px 0 13px;
		color: #333;
	}

	.info-header {
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}

	.header-title {
		float: left;
		font-size: 15px;
	}

	.header-more {
		float: right;
		margin-right: 10px;
		font-size: 14px;
	}

	.arrow {
		vertical-align: -1px;
	}

	.info-user {
		padding: 10px 0 5px;
	}

	.info-user img {
		width: 42px;
		height: 42px;
		border-radius: 50%;
	}

	.info-user span {
		position: relative;
		font-size: 14px;
		top: -15px;
		margin-left: 10px;
	}

	.info-detail {
		padding: 0 5px 15px;
	}

	.info-detail p {
		font-size: 14px;
		color: #777;
		line-height: 1.5;
	}

	.info-detail .info-other {
		font-size: 12px;
		color: #999;
		margin-top: 12px;
	}

	.info-other .date {
		margin-right: 8px;
	}

	.info-imgs {
		margin-top: 10px;
	}

	.info-imgs img {
		width: 70px;
		height: 70px;
		margin-right: 5px;
		border-radius: 3px;
	}
</style>
