<template>
	<view class="search-box" @click="search">
		<view class="search-inp"
			style="width:100%;background-color: rgb(248, 249, 251);height: 72rpx;line-height: 92rpx;border-radius: 20rpx;padding-left: 20rpx;box-sizing: border-box;">
			<image src="../static/search.png" mode="widthFix" style="width: 40rpx;"></image>
		</view>
		<swiper class="swiper-box" @change="change" vertical="true" autoplay="true" interval="3000" circular
			style="height: 40rpx;width:400rpx">
			<swiper-item v-for="(item ,index) in info" :key="index" @touchmove.stop="stopTouchMove"
				style="opacity: .5;">
				<view class="swiper-item">
					{{item.content}}
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	import {
		ref,
	} from 'vue'
	const info = [{
		content: ' 新人9.9元包邮 '
	}, {
		content: ' OPPO Reno8 系列 '
	}, {
		content: ' Find X5 Pro '
	}, {
		content: ' 一加 Ace 竞速版 '
	}, {
		content: ' OPPO Pad Air '
	}]
	const stopTouchMove = () => {
		return false
	}
	const current = ref('')
	current.value = info[0].content
	const change = (val) => {
		current.value = info[val.detail.current].content
	}
	const search = () => {
		console.log(current.value);
		uni.navigateTo({
			url: '/pages/oppoSearch/index?word=' + current.value
		})
	}
</script>

<style lang="scss">
	.search-box {
		background-color: #fff;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		position: relative;
		padding: 20rpx;
		box-sizing: border-box;

		.uni-mt-8 {
			width: 100%;
		}

		::v-deep .uni-searchbar__box {
			justify-content: left;
		}

		.swiper-box {
			position: absolute;
			top: 35rpx;
			left: 88rpx;
		}
	}
</style>
