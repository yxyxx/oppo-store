<template>
	<view class="topBtn" v-show="isShow" @click="goTop">
		<image src="../static/topArrow.png" mode="widthFix" style="width: 60upx;"></image>
	</view>
</template>

<script setup>
	import {
		onMounted,
		ref
	} from 'vue'
	const isShow = ref(false)
	onMounted(() => {
		window.addEventListener('scroll', () => {
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body
				.scrollTop
			if (scrollTop > 900) {
				isShow.value = true
			} else {
				isShow.value = false
			}
		})
	})
	const goTop = () => {
		window.scrollTo(0, 0)
	}
</script>

<style lang="scss">
	.topBtn {
		width: 72upx;
		height: 72upx;
		background-color: #fff;
		position: fixed;
		bottom: 200upx;
		right: 25upx;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10upx;
		box-shadow: 1px 1px 1px -1px #c8c7cc;
	}
</style>
