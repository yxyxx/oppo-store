<template>
	<search class="search"></search>
	<view class="left">
		<view :class="['navItem',{'active':item.active}]" v-for="(item,index) in sortData1" :key="item"
			@click="navClic(index)">
			{{item.title}}
		</view>
	</view>
	<view class="right" id="right" ref="right">
		<view class="sort-list" v-for="(item,index) in sortData1" :key="item">
			<view :class="['banner','banner'+index]">
				<image :src="item.bannerImg" mode="widthFix" style="width: 100%;"></image>
			</view>
			<view class="sort-item" v-for="item in item.list" :key="item">
				<view class="item-title">{{item.title}}</view>
				<view class="goods-list-accurate" v-if="item.accurateClassify">
					<view class="goods-item-accurate" v-for="item in item.goodsList" :key="item">
						<view class="goods-img">
							<image :src="item.img" mode="widthFix" style="width: 100%;
						background-color: #f8f8f8;"></image>
						</view>
						<view class="goods-info">
							<view class="goods-title">{{item.title}}</view>
							<view class="goods-desc">{{item.desc}}</view>
							<view class="price-box">
								<text class="preferential-way"
									v-if="item.preferentialWay">{{item.preferentialWay}}</text>
								<text class="new-price" v-if="item.newPrice">{{item.newPrice}}</text>
								<text class="old-price" v-if="item.oldPrice">{{item.oldPrice}}</text>
							</view>
						</view>
					</view>
				</view>
				<view class="goods-list-inaccurate" v-if="!item.accurateClassify">
					<view class="goods-item-inaccurate" v-for="item in item.goodsList" :key="item">
						<view class="goods-img">
							<image :src="item.img" mode="widthFix" style="width: 100%;"></image>
						</view>
						<view class="goods-title">{{item.title}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted,
		getCurrentInstance
	} from 'vue';
	import search from '@/components/search.vue'
	import sortData from './util.js'
	import {
		onPageScroll
	} from '@dcloudio/uni-app';
	let sortData1 = ref(sortData)
	// bannner距离顶部的距离
	let bannerTopArr = []
	onMounted(() => {
		sortData1.value.forEach((item, index) => {
			let instance = getCurrentInstance();
			let query = uni.createSelectorQuery().in(instance);
			query.select('.banner' + index).boundingClientRect(data => {
				if (data) {
					bannerTopArr[index] = data.top - 57 < 0 ? 0 : data.top - 57 - 157 * (index);
					// #ifdef MP-WEIXIN
					bannerTopArr[index] = data.top - 57
					// #endif
				}
			}).exec();
		});
	})
	let activeIndex = ref(0)
	sortData1.value[activeIndex.value].active = 1
	const navClic = (index) => {
		sortData1.value[activeIndex.value].active = 0
		activeIndex.value = index
		sortData1.value[activeIndex.value].active = 1
		uni.pageScrollTo({
			scrollTop: bannerTopArr[activeIndex.value],
			duration: 0,
		});
	}
	onPageScroll((e) => {
		console.log(1111111111);
		let i = 0
		bannerTopArr.forEach((item, index) => {
			if (e.scrollTop > item - 5) {
				i = index
			}
		})
		sortData1.value[activeIndex.value].active = 0
		activeIndex.value = i
		sortData1.value[activeIndex.value].active = 1
	})
</script>

<style lang="scss" scoped>
	.search {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 9;
		border-bottom: 1px solid #eee;
		box-sizing: border-box;
	}

	// #ifdef H5
	.search {
		top: 88rpx;
	}

	// #endif

	.left {
		background-color: #fff;
		width: 188rpx;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		padding-top: 114rpx;
		padding-bottom: 100rpx;
		border-right: 1px solid #eee;
		box-sizing: border-box;
		overflow: auto;
		font-size: 24rpx;
		color: #999;
		text-align: center;

		.navItem {
			height: 106rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.active {
			color: #333;
			border-left: 4rpx solid #333;
			// box-sizing: border-box;
			font-weight: 600;
		}
	}

	// #ifdef H5
	.left {
		padding-top: 202rpx;
	}

	// #endif

	.right {
		margin-left: 188rpx;
		margin-top: 114rpx;
		padding: 0 24rpx;
		box-sizing: border-box;
		background-color: #fff;

		.sort-list {

			.banner {
				padding-top: 24rpx;
			}

			.sort-item {

				.item-title {
					font-size: 30rpx;
					line-height: 84rpx;
					padding-left: 16rpx;
					box-sizing: border-box;
				}

				.goods-list-accurate {
					.goods-item-accurate {
						display: flex;
						background-color: #f8f8f8;
						padding: 20rpx;
						box-sizing: border-box;
						border-radius: 20rpx;
						margin-top: 20rpx;

						.goods-img {
							width: 112rpx;
							height: 112rpx;
							padding-right: 20rpx;
							background-color: #f8f8f8;
						}

						.goods-info {
							font-size: 24rpx;
							display: flex;
							justify-content: space-around;
							flex-direction: column;
							background-color: #f8f8f8;

							.goods-title {
								background-color: #f8f8f8;
							}

							.goods-desc {
								color: rgba(0, 0, 0, .3);
								background-color: #f8f8f8;
							}

							.price-box {
								color: #333;
								background-color: #f8f8f8;

								.preferential-way {
									background-color: #f8f8f8;
								}

								.new-price,
								.old-price {
									margin-left: 10rpx;

									background-color: #f8f8f8;

									&::before {
										content: "￥";
									}
								}

								.old-price {
									color: rgba(0, 0, 0, .3);
									text-decoration: line-through;
								}
							}
						}
					}

				}

				.goods-list-inaccurate {
					display: flex;
					flex-wrap: wrap;

					.goods-item-inaccurate {
						width: 33.3%;
						height: 162rpx;
						text-align: center;
						display: flex;
						flex-direction: column;
						align-items: center;

						.goods-img {
							width: 102rpx;
							height: 102rpx;
							margin-bottom: 10rpx;
						}

						.goods-title {
							font-size: 24rpx
						}
					}

				}

			}
		}
	}
</style>
