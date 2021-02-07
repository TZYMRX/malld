<template>
	<!--	<div class="tab-control">-->
	<!--		<van-tabs v-model="activeName"-->
	<!--							title-active-color="#AB7896"-->
	<!--							@click="itemClick"-->
	<!--							line-width="50px"-->
	<!--							swipeable animated sticky>-->
	<!--			<van-tab title="流行" name="0">-->
	<!--				<template #title>-->
	<!--					<van-icon name="hot-o" size="20px"/>-->
	<!--					流行-->
	<!--				</template>-->
	<!--			</van-tab>-->
	<!--			<van-tab title="新款" name="1">-->
	<!--				<template #title>-->
	<!--					<van-icon name="new-o" size="20px"/>-->
	<!--					新款-->
	<!--				</template>-->
	<!--			</van-tab>-->
	<!--			<van-tab title="精选" name="2">-->
	<!--				<template #title>-->
	<!--					<van-icon name="goods-collect-o" size="20px"/>-->
	<!--					精选-->
	<!--				</template>-->
	<!--			</van-tab>-->
	<!--		</van-tabs>-->
	<!--	</div>-->

	<!--	<div class="tab-control">-->
	<!--		<div v-for="(item,index) in titles"-->
	<!--				 class="tab-control-item"-->
	<!--				 :class="{active:index === currentIndex}"-->
	<!--				 @click="itemClick(index)">-->
	<!--			<span><van-icon name="goods-collect-o" size="20px"/>{{item}}</span>-->
	<!--		</div>-->
	<!--	</div>-->

	<div class="tab-control">
		<div class="tab-control-item"
				 :class="{active: currentIndex === 0}"
				 @click="itemClick(0)">
			<span><van-icon name="hot-o" size="20px"/>{{titles[0]}}</span>
		</div>
		<div class="tab-control-item"
				 :class="{active: currentIndex === 1}"
				 @click="itemClick(1)">
			<span><van-icon name="new-o" size="20px"/>{{titles[1]}}</span>
		</div>
		<div class="tab-control-item"
				 :class="{active: currentIndex === 2}"
				 @click="itemClick(2)">
			<span><van-icon name="goods-collect-o" size="20px"/>{{titles[2]}}</span>
		</div>
	</div>


</template>

<script>
	export default {
		name: "TabControl",
		props: {
			titles: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				activeName: '',
				currentIndex: 0,
			}
		},
		methods: {
			itemClick(index) {
				if (this.currentIndex === index) return;
				this.currentIndex = index;
				this.$emit('tabClick', index)
			}
		}
	}
</script>

<style scoped>
	.tab-control {
		display: flex;
		text-align: center;
		font-size: 14px;
		height: 40px;
		line-height: 40px;
		background-color: #ffffff;
	}

	.tab-control-item {
		flex: 1;
	}

	.tab-control-item span {
		padding: 3px;
	}

	.active {
		color: #AB7896;
		transition: 0.3s;
		transform: scale(1.1);
	}

	.active span {
		transition: 0.3s;
		transform: scale(0.9);
		border-bottom: 3px solid var(--color-tint);
	}
</style>
