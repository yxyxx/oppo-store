<template>
	<searchInp></searchInp>
	<view class="goodsList">
		<view class="goodsItem" v-for="item in goodsList">
			<image :src="item.img" mode="widthFix" style="width: 100%;"></image>
			<view class="info">
				<view class="desc">{{item.desc}}</view>
				<view class="priceBox">
					<text class="preferentialWay">{{item.preferentialWay}}</text>
					<text class="price">{{item.price}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app';
	import searchInp from '@/components/searchInp.vue'
	const goodsList = [{
		img: 'https://dsfs.oppo.com/omp/1653303393579-_-a6983320bd854fa9906ae34f6b1d13b2.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
		desc: ' OPPO Reno8 8G+256G 微醺 官方标配 ',
		preferentialWay: '到手价',
		price: '69'
	}, {
		img: 'https://dsfs.oppo.com/omp/1652338502068-_-c83e4eaa6f14412eb2a63770db92435e.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
		desc: ' OPPO Reno8 Pro+ ',
		preferentialWay: '',
		price: '3649'
	}, {
		img: 'https://dsfs.oppo.com/omp/1652750822899-_-3da4f57a7f05419fa066e3019fa833fa.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
		desc: ' OPPO Reno8 Pro ',
		preferentialWay: '',
		price: '2949'
	}, {
		img: 'https://dsfs.oppo.com/omp/1648385619580-_-894ea8e295554c0fae5a3918710456bb.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
		desc: ' OPPO Find X5 Pro 12G+256G 水蓝 官方标配 ',
		preferentialWay: '',
		price: '5489'
	}, {
		img: 'https://dsfs.oppo.com/archives/202202/202202260302466219d3a258356.png?_w_=321&_h_=320&x-oss-process=image/format,webp',
		desc: '',
		preferentialWay: ' OPPO Find X5 Pro 冰肤散热保护壳 ',
		price: '199'
	}, {
		img: 'https://dsfs.oppo.com/omp/1653303393579-_-a6983320bd854fa9906ae34f6b1d13b2.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
		desc: ' OPPO Reno8 8G+256G 微醺 官方标配 ',
		preferentialWay: '到手价',
		price: '69'
	}, {
		img: 'https://dsfs.oppo.com/omp/1652338502068-_-c83e4eaa6f14412eb2a63770db92435e.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
		desc: ' OPPO Reno8 Pro+ ',
		preferentialWay: '',
		price: '3649'
	}, {
		img: 'https://dsfs.oppo.com/omp/1652750822899-_-3da4f57a7f05419fa066e3019fa833fa.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
		desc: ' OPPO Reno8 Pro ',
		preferentialWay: '',
		price: '2949'
	}, {
		img: 'https://dsfs.oppo.com/omp/1648385619580-_-894ea8e295554c0fae5a3918710456bb.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
		desc: ' OPPO Find X5 Pro 12G+256G 水蓝 官方标配 ',
		preferentialWay: '',
		price: '5489'
	}, {
		img: 'https://dsfs.oppo.com/archives/202202/202202260302466219d3a258356.png?_w_=321&_h_=320&x-oss-process=image/format,webp',
		desc: ' OPPO Find X5 Pro 冰肤散热保护壳 ',
		preferentialWay: '',
		price: '199'
	}, ]
</script>

<style lang="scss" scoped>
	::v-deep .uni-searchbar__box {
		justify-content: left !important;
	}

	.goodsList {
		padding: 3%;
		box-sizing: border-box;

		.goodsItem {
			background-color: #fff;
			width: 48.5%;
			padding: 20rpx;
			box-sizing: border-box;
			border-radius: 20rpx;
			float: left;
			margin-bottom: 20rpx;

			&:nth-child(even) {
				float: right;
			}

			.info {
				margin-top: 13rpx;

				.desc {
					font-size: 32rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 3;
					-webkit-box-orient: vertical;
				}

				.priceBox {
					color: #f34141;

					.preferentialWay {
						font-size: 26rpx
					}

					.price {
						font-size: 32rpx;

						&::before {
							content: "￥";
							font-size: 24rpx
						}

					}
				}
			}
		}
	}
</style>
