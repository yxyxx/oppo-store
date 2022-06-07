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
					{{item.title}}
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	import {
		ref,
	} from 'vue'
	const info = ref([])
	const current = ref('')
	uni.request({
		url: '/api/cn/oapi/configs/web/icons/040109',
		method: 'GET',
		success: res => {
			info.value = res.data.data
			current.value = info.value[0].title
		}
	})
	const stopTouchMove = () => {
		return false
	}
	const change = (val) => {
		current.value = info.value[val.detail.current].title
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
