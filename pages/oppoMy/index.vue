<template>
	<view class="main">
		<view class="logo-box">
			<image src="../../static/image/1.webp" class="logo-img"></image>
			<view>
				<text class="logo-name">heloowjjj</text>
				<text class="logo-account">账号：190****2223</text>
			</view>
			<view class="head">
				<view class="head-text-box">
					<text class="head-text">3</text>
					<text class="head-text">优惠券</text>
				</view>
				<view class="head-text-box">
					<text class="head-text">10900</text>
					<text class="head-text">积分</text>
				</view>
			</view>
		</view>
		<view class="order-box">
			<view class="order-box-head">
				<text class="logo-name">我的订单</text>
				<view class="arrow-box">
					<text>全部订单</text>
					<uni-icons type="right" size="14" color="#666"></uni-icons>
				</view>
			</view>
			<view class="order-icon">
				<view class="order-icon-box" v-for="(item,index) in orderList" :key="index">
					<view>
						<uni-icons :type="item.icon" size="30" color="#b2b2b2"></uni-icons>
					</view>
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>
		<view class="order-box">
			<view class="order-box-head">
				<text class="logo-name">常用工具</text>
			</view>
			<view class="order-icon">
				<view class="order-icon-box" v-for="(item,index) in toolList" :key="index">
					<view>
						<img :src="item.icon" class="tool-img">
					</view>
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="footer-box">
				<text class="footer-text">营业执照</text>
				<text class="footer-text">隐私政策</text>
				<text class="footer-text">用户协议</text>
			</view>
			<text class="footer-text">©2005 - 2022 OPPO 版权所有 粤ICP备14056724号</text>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue"
	const orderList = ref(
		[{
				name: '待付款',
				icon: 'cart-filled'
			},
			{
				name: '待发货',
				icon: 'calendar-filled'
			},
			{
				name: '已发货',
				icon: 'notification-filled'
			},
			{
				name: '待评价',
				icon: 'wallet-filled'
			},
			{
				name: '退换',
				icon: 'medal-filled'
			}
		]
	)
	const toolList = ref(
		[{
				name: '服务网点',
				icon: '../../static/image/2.webp'
			},
			{
				name: '保障服务',
				icon: '../../static/image/3.webp'
			},
			{
				name: '真伪查询',
				icon: '../../static/image/4.webp'
			},
			{
				name: '维修服务',
				icon: '../../static/image/5.webp'
			},
			{
				name: '收获地址',
				icon: '../../static/image/6.webp'
			},
			{
				name: '换新/回收',
				icon: '../../static/image/7.webp'
			},
			{
				name: '学生优惠',
				icon: '../../static/image/8.webp'
			},
		]
	)
</script>

<style lang="scss">
	page {
		background-color: white;
	}

	.main {
		padding: 40rpx;
	}

	.logo-box {
		display: flex;
		align-items: center;

		.logo-img {
			width: 124rpx;
			height: 124rpx;
			border-radius: 50%;
			margin-right: 20rpx;
		}

		.logo-account {
			color: #b2b2b2;
			font-size: 26rpx;
		}
	}

	.logo-name {
		display: block;
		font-weight: 500;
		font-size: 34rpx;
		color: #333;
		margin-bottom: 10rpx;
	}

	.head {
		width: 200rpx;
		margin-left: 90rpx;
		display: flex;
		justify-content: space-between;

		.head-text-box {
			text-align: center;

			.head-text {
				display: block;
				font-size: 30rpx;
				color: #333;
			}
		}

	}

	.order-box {
		margin-top: 40rpx;

		.order-box-head {
			display: flex;
			justify-content: space-between;

			.arrow-box {
				display: flex;
				align-items: center;
				color: #666;
			}
		}

		.order-icon {
			margin-top: 40rpx;
			margin-bottom: 60rpx;
			width: 690rpx;
			display: flex;
			flex-wrap: wrap;
			color: #b2b2b2;

			.order-icon-box {
				width: 139rpx;
				height: 126rpx;
				font-size: 26rpx;
				text-align: center;

				.tool-img {
					width: 62rpx;
					height: 62rpx;
				}
			}
		}
	}

	.footer {
		position: fixed;
		bottom: 100rpx;
		padding-left: 100rpx;
		.footer-box {
			margin-left: 60rpx;
			width: 300rpx;
			display: flex;
			justify-content: space-between;
		}

		.footer-text {
			color: #666;
			font-weight: 400;
			font-size: 20rpx;
		}
	}
</style>
