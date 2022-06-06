<template>
	<view>
		<view class="adress-list" v-for="(item,index) in adressList" :key="index">
			<view class="adress-left">
				<view class="adress-left-top">
					<text class="name-text">{{item.name}}</text>
					<text class="phone-text">{{item.phone}}</text>
				</view>
				<view class="adress-left-bottom">
					<uni-tag v-if="item.isDefault" text="默认" :custom-style="customStyle" />
					<text>{{item.adress}}</text>
				</view>
			</view>
			<view class="adress-right">
				<uni-icons type="compose" size="24"></uni-icons>
			</view>
		</view>
		<button type='warn' class="footer-button">新建地址</button>
	</view>
</template>

<script setup>
	import {ref} from "vue"
	const customStyle =
		'background-color: rgb(215, 234, 255); border-color: rgb(215, 234, 255); color: rgb(0, 122, 255);font-size:26rpx;font-weight:400;margin-right:20rpx'
	const adressList = 	ref([
		{name:'顶焦度计',phone:'188 9383 3333',adress:'浙江省杭州市上班九点半上班上班',isDefault:true},
		{name:'哈哈哈',phone:'188 9383 3333',adress:'在家啊设备好景不长检查好几遍刺激啊'},
		{name:'烧烤店',phone:'188 9383 3333',adress:'时间可能是绝对不能简单'}
	])
</script>

<style lang="scss">
	page {
		background-color: white;
	}

	.adress-list {
		display: flex;
		width: 690rpx;
		padding: 40rpx 40rpx 0 40rpx;
		justify-content: space-between;
		align-items: center;

		.adress-left {
			.adress-left-top {
				.name-text {
					display: inline-block;
					margin-right: 20rpx;
					font-size: 34rpx;
					color: #000;
					font-weight: 400;
				}

				.phone-text {
					font-size: 26rpx;
					color: #000;
				}
			}

			.adress-left-bottom {
				margin-top: 10rpx;
				font-size: 26rpx;
				color: #666;
			}
		}
	}

	.footer-button {
		position: fixed;
		bottom: 80rpx;
		width: 640rpx;
		border-radius: 120rpx;
		margin-left: 55rpx;
	}
</style>
