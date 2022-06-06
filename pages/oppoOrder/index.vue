<template>
	<view>
		<custom-tabs type="c1" :value="value" @change="changeIndex" :activeTextStyle="activeTextStyle"
			:activeLineStyle="activeLineStyle" :defaultTextStyle="defaultTextStyle" :tabSpacing="60">
			<custom-tab-pane v-for="(item,index) in list.listGodds" :key="index" :label="item.label" :name="item.name">
				<view class="goods-box" v-for="(val,ind) in list.goodDetails" :key="ind">
					<view class="goods-box-order">
						<text class="order-no">订单号：{{val.orderNo}}</text>
						<text class="order-no">{{val.status}}</text>
					</view>
					<text class="order-time">{{val.time}}</text>
					<view class="order-detail">
						<view class="order-detail-left">
							<img src="../../static/image/9.webp" class="order-detail-img">
							<view>
								<text class="sku-text">{{val.skuName}}</text>
								<text class="price-text">¥{{val.price}}</text>
							</view>
						</view>
						<view>
							<text>×{{val.num}}</text>
						</view>
					</view>
					<view class="goods-message">
						<text class="goods-number">共{{val.num}}件商品</text>
						<text class="pay-message">{{val.priceStatus}}</text>
						<text class="price-message">¥0</text>
					</view>
					<view class="footer-box">
						<button type="default" style="background-color: white" size="mini">查看评价</button>
						<button type="default" style="background-color: white" size="mini">退换/售后</button>
						<button type="warn" size="mini">再次购买</button>
					</view>
				</view>
			</custom-tab-pane>
		</custom-tabs>
	</view>
</template>
<script setup>
	import {
		ref,
		reactive
	} from 'vue';
	const list = reactive({
		listGodds: [{
				label: '全部',
				name: 'c1_1'
			},
			{
				label: '待付款',
				name: 'c1_2'
			},
			{
				label: '待发货',
				name: 'c1_3'
			},
			{
				label: '已发货',
				name: 'c1_4'
			},
			{
				label: '退换货',
				name: 'c1_5'
			}
		],
		goodDetails: [{
			orderNo: '2828281212121',
			status: '已签收',
			time: '022-4-11 09:23:29',
			skuName: '朗菲 手持式蒸汽刷 白色',
			price: '209',
			num: '1',
			priceStatus:'已付款'
		},
		{
			orderNo: '2828281212121',
			status: '已签收',
			time: '022-4-11 09:23:29',
			skuName: '朗菲 手持式蒸汽刷 白色',
			price: '209',
			num: '1',
			priceStatus:'已付款'
		}]
	})
	const value = ref(0);
	const defaultTextStyle = {
		color: '#666',
		'font-size': '28rpx'
	}
	const activeTextStyle = {
		color: '#f63434',
		'font-weight': 500,
		'font-size': '28rpx',
	}
	const activeLineStyle = {
		'background-color': '#f63434',
		height: '6rpx'
	}

	function changeIndex(e) {
		console.log('选中:', e)
	}
</script>
<style lang="scss">
	.goods-box {
		width: 670rpx;
		height: 510rpx;
		background-color: white;
		border-radius: 20rpx;
		margin: 0 0 20rpx 20rpx;
		padding:40rpx 0 0 40rpx ;

		.goods-box-order {
			width: 630rpx;
			display: flex;
			justify-content: space-between;

			.order-no {
				font-size: 30rpx;
				color: rgba(0, 0, 0, .85);
			}
		}

		.order-time {
			color: rgba(0, 0, 0, .55);
			font-size: 26rpx;
		}

		.order-detail {
			width: 630rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 40rpx;

			.order-detail-left {
				display: flex;
				align-items: center;

				.order-detail-img {
					margin-right: 20rpx;
					width: 110rpx;
					height: 110rpx;
					border-radius: 10rpx;
					border: 1px solid #e6e6e6;
				}

				.sku-text {
					font-size: 30rpx;
					color: rgba(0, 0, 0, .85);
					font-weight: 400;
					display: block;
					margin-bottom: 20rpx;
				}

				.price-text {
					color: #f34141;
					font-weight: 500;
					font-size: 30rpx;
				}
			}
		}

		.goods-message {
			display: flex;
			justify-content: flex-end;
			width: 630rpx;
			margin-top: 40rpx;

			.goods-number {
				color: #b2b2b2;
				font-size: 26rpx;
				display: inline-block;
				margin-right: 12rpx;
			}

			.pay-message {
				color: #333;
				font-size: 26rpx;
				font-weight: 400;
				display: inline-block;
				margin-right: 12rpx;
			}

			.price-message {
				color: #f45136;
				font-weight: 500;
				font-size: 30rpx;
			}
		}
	}

	.footer-box {
		position: relative;
		top: 100rpx;
		display: flex;
		width: 664rpx;
		justify-content: space-between;
	}
</style>
