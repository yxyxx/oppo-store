<template>
	<page-meta @scroll="scroll"></page-meta>
	<!-- input -->
	<view class="search_nav">
		<Search style="width: 88%;"></Search>
		<text class="login_btn">
			登录
		</text>
	</view>
	<!-- swiper -->
	<view class="swiper-bannner" @click="clicBanner">
		<uni-swiper-dot class="uni-swiper-dot-box" @clickItem=clickItem :info="util.swiperimages" :current="current"
			:mode="mode" :dots-styles="dotsStyles" field="content" :dotsStyles="dotsStyles">
			<swiper class="swiper-box" @change="change" :current="swiperDotIndex" autoplay circular interval=3000>
				<swiper-item v-for="(item, index) in util.swiperimages" :key="index">
					<image :src="item" mode="heightFix" width="100%"></image>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
	</view>
	<!-- navsort -->
	<view class="nav-sort">
		<view class="sort-item" v-for="(item) in navSort">
			<image :src="item.img" mode="widthFix" style="width:100rpx"></image>
			<view>{{item.text}}</view>
		</view>
	</view>
	<view class="main">
		<view class="floor-panel-contain">
			<image :src="item" mode="widthFix" style="width:48.9%;margin-bottom: 15rpx;"
				v-for="item in floorPanelImages">
			</image>
		</view>
		<view class="floor-panel-column-contain">
			<image :src="item" mode="widthFix" style="width:23.5%;" v-for="item in floorPanelColumnImages">
			</image>
		</view>
	</view>
	<!-- 今日必抢 -->
	<view class="main todayRob">
		<view class="title">
			<view class="left">
				<text class="titleText">今日必抢 </text>
				<view class="countdown">
					<uni-countdown :show-day="false" :hour="hour" :minute="minute" :second="second" color="#f63434" />
					<text>后结束</text>
				</view>
			</view>
			<view class="more iconfont">
				更多
			</view>
		</view>
		<view class="goodsList">
			<view class="goodsItem" v-for="item in todayRobList">
				<image :src="item.img" mode="widthFix" style="width: 184rpx;"></image>
				<view class="info">
					{{item.info}}
				</view>
				<view class="price">
					<text class="newPrice">{{item.newPrice}}</text>
					<text class="oldPrice">{{item.oldPrice}}</text>
				</view>
			</view>
			<view class="moreGoods">
				<view class="title">更多<br>产品</view>
				<view class="iconfont icon-youjiantou"></view>
			</view>
		</view>
	</view>
	<!-- 大分类 -->
	<view class="main">
		<view class="sort-pannel" v-for="item in sortPannel">
			<view class="title" style="margin-top:20rpx">{{item.title}}</view>
			<image :src="item.bannerImage" mode="widthFix" style="width:100%;border-radius: 20rpx;margin: 25rpx 0;">
			</image>
			<view class="sort-item" v-for="itemList in item.list">
				<view class="">
					<image :src="itemList.img" mode="widthFix" style="width: 100%;"></image>
					<view class="info">
						{{itemList.info}}
					</view>
				</view>
				<view class="price">
					<text>{{itemList.calculation}}</text>
					{{itemList.price}}
				</view>
			</view>
		</view>
	</view>
	<!-- 底部 -->
	<Footer></Footer>
	<GoTop :isShow="isShow"></GoTop>
</template>
<script setup>
	import {
		ref,
	} from 'vue'
	import util from './util.js'
	const {
		swiperimages,
		dotStyle,
		dotsStyles,
		floorPanelImages,
		navSort,
		floorPanelColumnImages,
		sortPannel,
		todayRobList
	} = util
	import Footer from '@/components/footer.vue'
	import Search from '@/components/search.vue'
	import GoTop from '@/components/goTop.vue'
	const modeIndex = ref(-1)
	const styleIndex = ref(-1)
	const current = ref(0)
	const mode = ref('dot')
	const swiperDotIndex = ref(0)
	const isShow = ref(false)
	const scroll = function(e) {
		if (e.detail.scrollTop > 500) {
			isShow.value = true
		} else {
			isShow.value = false
		}
	}
	const change = (e) => {
		current.value = e.detail.current
	}
	const selectStyle = (index) => {
		dotsStyles.value = dotStyle.value[index]
		styleIndex.value = index
	}
	const selectMode = (mode, index) => {
		mode.value = mode
		modeIndex.value = index
		styleIndex.value = -1
		dotsStyles.value = dotStyle.value[0]
	}
	const clickItem = (e) => {
		swiperDotIndex.value = e
	}
	const onBanner = (index) => {
		console.log(22222, index);
	}
	// 点击banner跳转
	const clicBanner = () => {
		console.log(current.value);
	}
	// 倒计时
	const hour = 1
	const minute = 0
	const second = 0
</script>

<style lang="scss" scoped>
	@import '@/common/iconfont.css';
	// @import '../../../common/uni-nvue.css';

	.search_nav {
		background-color: #fff;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		.login_btn {
			width: 12%;
			text-align: left;
		}
	}

	.swiper-bannner {
		.swiper-box {
			height: 240px;
		}

		.swiper-item {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: column;
			justify-content: center;
			align-items: center;
			height: 240px;
			color: #fff;
		}

		::v-deep uni-image {
			width: 100% !important;
		}
	}

	.nav-sort {
		display: flex;
		padding: 30rpx 0;
		background-color: #fff;

		.sort-item {
			width: 25%;
			text-align: center;
			color: #666;
		}
	}

	.main {
		padding: 0 24rpx;
		margin-top: 25rpx;
	}

	.floor-panel-contain {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.floor-panel-column-contain {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 15rpx;
	}

	.sort-pannel {
		font-size: 30rpx;
		line-height: 85rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		line-height: 40rpx;

		.sort-item {
			background-color: #fff;
			width: 32.5%;
			margin-top: 8rpx;
			border-radius: 10rpx;
			padding: 15rpx 0 30rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		.info,
		.price {
			padding: 0 15rpx;
		}

		.info {
			font-size: 26rpx
		}

		.price {
			font-size: 26rpx;
			justify-self: flex-end;

			text {
				font-size: 12rpx;

				&::after {
					content: '￥'
				}
			}
		}
	}

	// 今日必抢
	.todayRob {

		.title,
		.left,
		.countdown {
			display: flex;
			justify-content: space-between;
		}

		.title {
			line-height: 60rpx;

			.left {
				.titleText {
					font-size: 32rpx
				}

				.countdown {
					::v-deep .uni-countdown__number {
						font-size: 24rpx !important
					}

					text {
						color: #999;

					}
				}
			}

			.more {
				color: #999;

				font-size: 28rpx;

				&:after {
					content: "\e62b";
					font-size: 24rpx
				}
			}
		}

		.goodsList {
			display: flex;
			flex-wrap: nowrap;
			align-items: center;
			overflow: auto;
			border-radius: 10rpx;
			-ms-overflow-style: none;
			overflow: -moz-scrollbars-none;
			background-color: #fff;
			padding-right: 40rpx;

			&::-webkit-scrollbar {
				width: 0 !important
			}

			.goodsItem {
				width: 208rpx;
				text-align: center;

				.info {
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					padding: 0 10rpx;
					box-sizing: border-box;
					font-size: 28rpx;
				}

				.price {
					text-align: left;
					padding: 0 10rpx;
					box-sizing: border-box;
					margin: 10rpx 0 0;

					.newPrice,
					.oldPrice {
						&::before {
							content: "￥";
							font-size: 18rpx
						}
					}

					.newPrice {
						font-size: 28rpx;
					}

					.oldPrice {
						font-size: 24rpx;
						color: #999;
					}
				}
			}

			.moreGoods {
				border: 1px solid #ddd;
				border-radius: 10rpx;
				height: 230rpx;
				margin: 40rpx 40rpx 0 40rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;

				.title {
					font-size: 30rpx;
					width: 140rpx;
					text-align: center;
					display: block;
					line-height: 35rpx;
					color: #999;
				}

				.iconfont {
					width: 46rpx;
					height: 46rpx;
					border-radius: 50%;
					background-color: #eee;
					text-align: center;
					line-height: 46rpx;
					color: #ccc;
					margin-top: 20rpx;
				}
			}
		}
	}
</style>
