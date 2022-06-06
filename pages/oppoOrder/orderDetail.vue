<template>
	<view>
		<view class="head">
			<text class="head-text">已签收</text>
		</view>
		<view class="user-message">
			<view class="user-name">
				<text class="user-name-text">点都德</text>
				<text class="user-phone">183 3332 3322</text>
			</view>
			<text class="user-adress">浙江省杭州市滨江区上发出声音</text>
			<img src="../../static/image/10.png" class="user-img">
		</view>
		<view class="user-good">
			<img src="../../static/image/9.webp" class="user-good-img">
			<view class="sku-box">
				<text class="user-sku">朗菲 手持式蒸汽刷 白色</text>
				<text class="user-price">¥209</text>
			</view>
			<text>×1</text>
		</view>
		<view class="good-message">
			<view class="good-message-price">
				<text>商品总额</text>
				<text>¥209</text>
			</view>
			<view class="good-message-price">
				<text>运费</text>
				<text>¥0</text>
			</view>
			<view class="good-message-price">
				<text>积分抵扣(已使用209000积分)</text>
				<text>-¥209</text>
			</view>
			<view class="good-message-actually">
				<text class="actually-text">实付：</text>
				<text class="actually-price">¥0</text>
			</view>
		</view>
	    <view class="order-message">
			<view class="order-message-price">
				<text>订单号：</text>
				<text>210323923787383</text>
				<uni-tag style="margin-left:20rpx" :circle="true" :inverted="true" text="复制" type="error" size="mini" @click="handleCopy"/>
			</view>
			<view class="order-message-price">
				<text>下单时间：</text>
				<text>2022-4-11 09:23:34</text>
			</view>
			<view class="order-message-price">
				<text>支付状态：</text>
				<text style="color:red">已付款</text>
			</view>
			<view class="order-message-price">
				<text>支付方式：</text>
				<text>在线支付</text>
			</view>
			<view class="order-message-price">
				<text>支付时间：</text>
				<text>2022-4-11 09:23:34</text>
			</view>
			<view class="order-message-price">
				<text>配送方式：</text>
				<text>顺丰速运</text>
			</view>
		</view>
	    <view class="footer-inline">
			<uni-icons style="margin-right: 20rpx;" type="auth" size="15" color="rgba(0,0,0,.55)"></uni-icons>
			<text>在线客服</text>
		</view>
		<view class="footer-box">
			<button type="default" style="background-color: white" size="mini">查看评价</button>
			<button type="default" style="background-color: white" size="mini">退换售后</button>
			<button type="warn" size="mini">再次购买</button>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue"
	const handleCopy = ()=>{
		uni.setClipboardData({
			data: 'hello',
			success: function () {
				uni.showToast({
					title: '复制成功',
					duration: 2000
				});
			}
		});
	}
</script>

<style lang="scss">
	.head {
		padding-left: 40rpx;
		height: 220rpx;
		display: flex;
		align-items: center;
		padding-bottom: 26rpx;
		color: #fff;
		background: linear-gradient(228deg, #ff4343, #ff8243);

		.head-text {
			font-weight: 500;
			font-size: 40rpx;
		}
	}

	.user-message {
		border-radius: 20rpx;
		width: 702rpx;
		height: 165rpx;
		background-color: white;
		position: relative;
		margin-left: 20rpx;
		top: -30rpx;

		.user-name {
			padding: 20rpx;

			.user-name-text {
				color: #000;
				font-weight: 500;
				font-size: 33rpx;
				display: inline-block;
				margin-right: 20rpx;
			}

			.user-phone {
				color: rgb(102, 102, 102);
				font-weight: 500;
				font-size: 25rpx;
			}
		}

		.user-img {
			position: relative;
			top: 19rpx;
			width: 100%;
			height: 6rpx;
		}

		.user-adress {
			display: block;
			color: #666;
			font-size: 24rpx;
			margin-left: 20rpx;
		}
	}

	.user-good {
		background-color: white;
		display: flex;
		align-items: center;
		height: 170rpx;
		width: 702rpx;
        margin-left: 20rpx;
		border-radius: 20rpx;
		.user-good-img {
			width: 110rpx;
			height: 110rpx;
			border-radius: 10rpx;
			border: 1px solid #e6e6e6;
			margin-left: 40rpx;
		}

		.sku-box {
			margin-left: 20rpx;
			margin-right: 140rpx;
		}

		.user-sku {
			color: #000;
			font-size: 30rpx;
			font-weight: 400;
			display: block;
			margin-bottom: 20rpx;
		}

		.user-price {
			color: #f34141;
			font-size: 30rpx;
			font-weight: 500;
		}
	}
    .good-message{
		background-color: white;
		width: 648rpx;
		height: 310rpx;
		font-size: 26rpx;
		color: #333;
		border-radius: 20rpx;
		margin: 20rpx 0 0 20rpx;
		padding: 30rpx;
		.good-message-price{
			display: flex;
			justify-content: space-between;
			margin-bottom: 40rpx;
		}
		.good-message-actually{
			display: flex;
			justify-content: flex-end;
			align-items: center;
			.actually-text{
				color: #333;
				font-weight: 500;
			}
			.actually-price{
				color: #f34141;
				font-size: 30rpx;
			}
		}
	}
    .order-message{
		background-color: white;
		width: 648rpx;
		height: 448rpx;
		font-size: 26rpx;
		color: #333;
		border-top-right-radius: 20rpx;
		border-top-left-radius: 20rpx;
		margin: 20rpx 0 0 20rpx;
		padding: 30rpx;
		border-bottom: 2rpx solid #f7f8fa;
		.order-message-price{
			margin-bottom: 40rpx;
		}
	}
	.footer-inline{
		width: 710rpx;
		height:76rpx ;
		line-height: 76rpx;
		background-color: white;
		text-align: center;
		margin-left: 20rpx;
		font-size:24rpx ;
		color: rgba(0,0,0,.55);
		border-bottom-right-radius: 20rpx;
		border-bottom-left-radius: 20rpx;
		margin-bottom: 200rpx;
	}
	.footer-box {
		position: fixed;
		bottom: 0;
		height:128rpx;
		width: 750rpx;
		background-color: white;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 2rpx solid #f7f8fa;
	}
</style>
