<template>
	<searchInp style="position: fixed;top: 88rpx;left:0;right:0;z-index: 99;"></searchInp>
	<view class="searchFilter">
		<view :class="['filterItem',{'active':activeFilter=='all'}]" @click="clicFilter('all')">
			综合
		</view>
		<view :class="['filterItem',{'active':activeFilter=='new'}]" @click="clicFilter('new')">
			最新
		</view>
		<view :class="['filterItem','filterPrice',{'active':activeFilter=='price'}]" @click="clicFilter('price')">
			价格
			<view class="priceWay">
				<view :class="['iconfont','icon-shangsanjiaoxing',{'active':priceFilter=='top'}]"></view>
				<view :class="['iconfont','icon-xiasanjiaoxing',{'active':priceFilter=='bottom'}]"></view>
			</view>
		</view>
	</view>
	<view class="" style="padding: 20rpx;">
		<custom-waterfalls-flow ref="waterfallsFlowRef" :value="data.goodsList" :column="column" :columnSpace="1.5"
			:seat="2" imageKey="img" @wapperClick="wapperClick" @loaded="loaded" @imageClick="wapperClick"
			:listStyle="{'padding':'20rpx','box-sizing': 'border-box'}">
			<!-- #ifdef MP-WEIXIN -->
			<view class="item" v-for="(item,index) in data.goodsList" :key="index" slot="slot{{index}}">
				<view class="desc">{{item.desc}}</view>
				<view class="priceBox">
					<text class="preferentialWay">{{item.preferentialWay}}</text>
					<text class="price">{{item.price}}</text>
				</view>
			</view>
			<!-- #endif -->
			<!-- #ifndef MP-WEIXIN -->
			<template v-slot:default="item">
				<view class="item">
					<view class="desc">{{item.desc}}</view>
					<view class="priceBox">
						<text class="preferentialWay">{{item.preferentialWay}}</text>
						<text class="price">{{item.price}}</text>
					</view>
				</view>
			</template>
			<!-- #endif -->
		</custom-waterfalls-flow>
	</view>
	<view class="nomore" style="text-align: center;font-size: 30rpx;color: #888;line-height: 150rpx;">没有更多了</view>
	<GoTop :isShow="isShow"></GoTop>
</template>

<script setup>
	import {
		reactive,
		ref,
	} from 'vue';
	import {
		onLoad,
		onPageScroll
	} from '@dcloudio/uni-app';
	import searchInp from '@/components/searchInp.vue'
	import GoTop from '@/components/goTop.vue'
	const isShow = ref(false)
	onPageScroll((e) => {
		if (e.scrollTop > 500) {
			isShow.value = true
		} else {
			isShow.value = false
		}
	})
	let searchWord = ''
	onLoad((options) => {
		searchWord = options.word
		uni.setNavigationBarTitle({
			title: searchWord
		});
	});
	const activeFilter = ref('all')
	const priceFilter = ref('')
	const clicFilter = (val) => {
		activeFilter.value = val
		if (val == 'price') {
			priceFilter.value = priceFilter.value == '' ? 'top' : priceFilter.value == 'top' ? 'bottom' : priceFilter
				.value == 'bottom' ?
				'top' : 'bottom'
		} else {
			priceFilter.value = ''
		}
	}
	// 瀑布流
	const data = reactive({
		goodsList: [{
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
		}, {
			img: 'https://dsfs.oppo.com/archives/202202/202202260302466219d3a258356.png?_w_=321&_h_=320&x-oss-process=image/format,webp',
			desc: ' OPPO Find X5 Pro 冰肤散热保护壳 ',
			preferentialWay: '',
			price: '199'
		}, ]
	});
	const column = ref(2);
	const waterfallsFlowRef = ref(null);

	function loaded() {
		console.log('加载完成')
	}

	function wapperClick(item) {
		console.log('单项点击事件', item.desc)
		uni.navigateTo({
			url: '/pages/goodsDetail/index?goods=' + item.desc
		})
	}
</script>

<style lang="scss" scoped>
	@import url('@/common/iconfont.css');

	::v-deep .uni-searchbar__box {
		justify-content: left !important;
	}

	.searchFilter {
		background-color: #fff;
		border-bottom: 1px solid #eee;
		display: flex;
		padding: 20rpx;
		padding-left: 40rpx;
		box-sizing: border-box;

		.filterItem {
			margin-right: 40rpx;
			color: #999;
			font-size: 26rpx
		}

		.filterPrice {
			// position: relative;
			display: flex;
			align-items: center;
			align-content: center;

			view {
				// position: absolute;
				// right: -20rpx;
				font-size: 16rpx;
				color: #999;
			}

			.priceWay {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				align-content: center;
				height: 25rpx;
				margin-left: 5rpx;

				.iconfont {
					width: 10rpx;
					height: 10rpx;
					line-height: 15rpx;

					&::before {
						width: 10rpx;
						height: 10rpx;
						font-size: 16rpx;
					}
				}
			}

			// .icon-shangsanjiaoxing {
			// 	top: 5rpx;
			// }

			// .icon-xiasanjiaoxing {
			// 	bottom: 5rpx;
			// }

		}

		.active {
			color: #000 !important;
		}
	}

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
</style>
