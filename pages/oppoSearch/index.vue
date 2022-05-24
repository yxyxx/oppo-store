<template>
	<!-- 搜索框 -->
	<searchInp ref="searchInput"></searchInp>
	<!-- 热门推荐 -->
	<view class="hotRecommended">
		<view class="title">热门推荐</view>
		<view class="recommendedList">
			<view class="item" v-for="item in info" @click="itemClic(item.content)">
				{{item.content}}
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import searchInp from '@/components/searchInp.vue'
	const searchInput = ref('searchInput')
	const info = [{
		content: ' 新人9.9元包邮 '
	}, {
		content: ' OPPO Reno8 '
	}, {
		content: ' Find X5 Pro '
	}, {
		content: ' 一加 Ace 竞速版 '
	}, {
		content: ' OPPO Pad Air '
	}]
	const itemClic = (val) => {
		console.log(searchInput.value);
		searchInput.value.search(val)
	}
</script>

<style lang="scss" scoped>
	::v-deep .uni-searchbar__box {
		justify-content: left !important;
	}

	.hotRecommended {
		background-color: #fff;
		padding: 20rpx;
		box-sizing: border-box;

		.title {
			color: #999;
			font-size: 26rpx;
			padding: 30rpx 0 30rpx;
		}

		.recommendedList {
			display: flex;
			flex-wrap: wrap;

			.item {
				background: linear-gradient(228deg, #ff4343, #ff8243);

				height: 76rpx;
				color: #fff;
				border-radius: 10rpx;
				padding: 20rpx;
				box-sizing: border-box;
				margin: 0 16rpx 16rpx 0;

				&:first-child {
					color: #666;
					background: #eee;
				}
			}
		}
	}
</style>
