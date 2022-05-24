<template>
	<view class="topBtn" v-show="props.isShow" @click="goTop">
		<image src="../static/topArrow.png" mode="widthFix" style="width: 60rpx;"></image>
	</view>

</template>

<script setup>
	import {
		onMounted,
		ref,
	} from 'vue'
	const props = defineProps({
		isShow: {
			type: Boolean,
			default: false
		}
	})
	const goTop = () => {
		uni.pageScrollTo({
			scrollTop: 0,
			duration: 100,
		});
	}
</script>

<style lang="scss">
	.topBtn {
		width: 72rpx;
		height: 72rpx;
		background-color: #fff;
		position: fixed;
		bottom: 200rpx;
		right: 25rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10rpx;
		box-shadow: 1px 1px 1px -1px #c8c7cc;
	}
</style>
