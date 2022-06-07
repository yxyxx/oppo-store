<template>
	<view class="head">
		<text class="head-goods-text">共{{goodsList.length}}件商品</text>
		<text class="head-goods-status">{{isEdit?'编辑':'完成'}}</text>
	</view>
	<view class="main">
		<view class="shoop-box" v-for="(item,index) in goodsList" :key="index">
			<uni-data-checkbox class="check-box" multiple v-model="item.checkbox" selectedColor="red"
				:localdata="item.localdata"></uni-data-checkbox>
			<view class="shoop-goods">
				<img :src="item.url" class="shoop-img">
				<view>
					<text>{{item.name}}</text>
					<view class="shoop-price">
						<text class="shoop-price-text">¥{{item.price}}</text>
						<uni-number-box @change="changeValue($event,index)" />
					</view>
				</view>
			</view>
		</view>
	</view>
	<view class="footer-box">
		<uni-data-checkbox class="check-box" multiple v-model="checkbox1" selectedColor="red" :localdata="localdata"
			@change="handleChange">
		</uni-data-checkbox>
		<text class="all-text">全选</text>
		<text class="all-calculate">合计：</text>
		<text class="all-price">¥{{allPrice}}</text>
		<button type="warn" size="mini">去结算{{totalCount>0?`(${totalCount})`:''}}</button>
	</view>
</template>

<script setup>
	import {
		ref,
		watchEffect
	} from "vue"
	const checkbox1 = ref()
	const localdata = ref([{
		value: 0
	}])
	const goodsList = ref([{
			name: '朗菲 粘毛器 CS-623 蓝白色',
			url: '../../static/image/9.webp',
			price: '10',
			num: 1,
			checkbox:[],
			localdata: [{
				value: 0
			}]
		},
		{
			name: '吹风机',
			url: '../../static/image/9.webp',
			price: '60',
			num: 1,
			checkbox:[],
			localdata: [{
				value: 1
			}]
		},
		{
			name: '三餐四季残守财奴是',
			url: '../../static/image/9.webp',
			price: '100',
			num: 1,
			checkbox:[],
			localdata: [{
				value: 2
			}]
		},
		{
			name: '但是333当你看',
			url: '../../static/image/9.webp',
			price: '300',
			num: 1,
			checkbox:[],
			localdata: [{
				value: 3
			}]
		}
	])
	const changeValue = (value, index) => {
		goodsList.value[index].num = value
	}
	const handleChange = (val) => {
		if (val.detail.value[0] === 0) {
			goodsList.value.forEach(item => {
				item.checkbox = [item.localdata[0].value]
			})
		} else {
			goodsList.value.forEach(item => {
				item.checkbox = []
			})
		}
	}
	const allPrice = ref(0)
	const totalCount = ref(0)
	watchEffect(() => {
		allPrice.value = 0
		totalCount.value = 0
			goodsList.value.forEach(item => {
				if(item.checkbox.length>0){
					allPrice.value = allPrice.value + (item.num * item.price)
					totalCount.value = totalCount.value + item.num
				}
			})
	})
</script>

<style lang="scss">
	.check-box .checkbox__inner {
		border-radius: 50% !important;
		margin-left: 30rpx !important;
	}

	.main {
		padding: 30rpx;
		margin-bottom: 200rpx;
	}

	.check-box {
		width: 100rpx !important;
	}

	.shoop-box {
		width: 686rpx;
		height: 224rpx;
		background-color: white;
		display: flex;
		align-items: center;
		border-radius: 10rpx;
		margin-bottom: 20rpx;

		.shoop-img {
			width: 168rpx;
			height: 168rpx;
			border: 1px solid #e6e6e6;
			margin-right: 20rpx;
		}

		.shoop-goods {
			display: flex;
			align-items: center;
		}

		.shoop-price {
			width: 356rpx;
			margin-top: 40rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.shoop-price-text {
				color: #f34141;
				font-size: 30rpx;
				font-weight: 500;
			}
		}
	}

	.footer-box {
		position: fixed;
		bottom: 0;
		height: 126rpx;
		width: 750rpx;
		background-color: white;
		display: flex;
		align-items: center;

		.all-text {
			color: #323233;
			font-size: 24rpx;
		}

		.all-calculate {
			display: inline-block;
			margin-left: 30rpx;
			color: #000;
			font-size: 24rpx;
			font-weight: 500;
		}

		.all-price {
			color: #f34141;
			font-size: 30rpx;
			font-weight: 500;
		}
	}
	.head{
		display: flex;
		background-color: white;
		height: 92rpx;
		border-top: 1px solid gainsboro;
		position:fixed;
		.head-goods-text{
			font-size:26rpx;
			color: rgba(0,0,0,.55);
			display: inline-block;
			margin-left: 30rpx;
		}
	}
</style>
