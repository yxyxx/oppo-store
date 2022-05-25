<template>
	<!-- 搜索框 -->
	<searchInp ref="searchInput"></searchInp>
	<!-- 搜索记录 -->
	<view class="searchRecord" v-show="searchWord !=''">
		<view class="titleBox">
			<view class="title">搜索记录</view>
			<view class="clearRecord" @click="clearRecord">清空记录</view>
		</view>
		<view class="recordList">
			<view class="recordItem" v-for="item in searchWord" @click="itemClic(item,'history')">
				{{item}}
			</view>
		</view>
	</view>
	<!-- 热门推荐 -->
	<view class="hotRecommended">
		<view class="title">热门推荐</view>
		<view class="recommendedList">
			<view class="item" v-for="item in info" @click="itemClic(item.content)">
				{{item.content}}
			</view>
		</view>
	</view>
	<!-- 最近浏览 -->
	<view class="recentBrowse">
		<view class="titleBox">
			<view class="title">最近浏览</view>
			<view class="clearRecord" @click="clearBrowse">清空记录</view>
		</view>
		<view class="browseList">
			<view class="browseItem" v-for="item in recentBrowseList">
				<image :src="item.img" mode="widthFix" style="width:200rpx"></image>
				<view class="info">
					<view class="desc">{{item.desc}}</view>
					<view class="price">
						{{item.noprice}}
						{{item.noprice.length == 0?item.price:''}}
						<text class="oldprice" v-if="item.noprice.length==0">{{item.oldprice}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import searchInp from '@/components/searchInp.vue'
	const searchInput = ref('searchInput')
	const info = [{
		content: ' 新人9.9元包邮 '
	}, {
		content: ' OPPO Reno8 '
	}, {
		content: ' Find X5 Pro '
	}, {
		content: ' 一加 Ace 竞速版 '
	}, {
		content: ' OPPO Pad Air '
	}]
	const itemClic = (val, type) => {
		type ? searchInput.value.search(val, type) : searchInput.value.search(val)
	};
	const searchWord = ref(uni.getStorageSync('searchWord'));
	// 点击清除搜索记录
	const clearRecord = () => {
		uni.removeStorageSync('searchWord')
		searchWord.value = uni.getStorageSync('searchWord')
	}
	const recentBrowseList = [{
			img: 'https://dsfs.oppo.com/omp/1652869839086-_-de59821ec4754cb1af8ef846822651e4.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
			desc: 'OPPO Pad Air 4GB+128GB 雾灰 官方标配',
			price: '￥1289',
			oldprice: '￥1599',
			noprice: ''
		},
		{
			img: 'https://dsfs.oppo.com/archives/202202/20220224030239621732b7025e4.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
			desc: ' OPPO智美生活 智能磁吸键盘 ',
			price: '￥389',
			oldprice: '',
			noprice: ''
		},
		{
			img: 'https://dsfs.oppo.com/omp/1648715125323-_-c0722932b4a64068875639bdb76b41bf.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
			desc: ' OPPO Pad  ',
			price: '',
			oldprice: '',
			noprice: '敬请期待'
		},
		{
			img: 'https://dsfs.oppo.com/archives/202111/20211124031151619de39bac884.png?_w_=300&_h_=300&x-oss-process=image/format,webp',
			desc: ' OPPO 智能电视 R1 乐享版 ',
			price: '￥3999',
			oldprice: '￥4999',
			noprice: ''
		}, {
			img: 'https://dsfs.oppo.com/omp/1652869839086-_-de59821ec4754cb1af8ef846822651e4.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
			desc: 'OPPO Pad Air 4GB+128GB 雾灰 官方标配',
			price: '￥1289',
			oldprice: '￥1599',
			noprice: ''
		},
		{
			img: 'https://dsfs.oppo.com/archives/202202/20220224030239621732b7025e4.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
			desc: ' OPPO智美生活 智能磁吸键盘 ',
			price: '￥389',
			oldprice: '',
			noprice: ''
		},
		{
			img: 'https://dsfs.oppo.com/omp/1648715125323-_-c0722932b4a64068875639bdb76b41bf.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
			desc: ' OPPO Pad  ',
			price: '',
			oldprice: '',
			noprice: '敬请期待'
		},
		{
			img: 'https://dsfs.oppo.com/archives/202111/20211124031151619de39bac884.png?_w_=300&_h_=300&x-oss-process=image/format,webp',
			desc: ' OPPO 智能电视 R1 乐享版 ',
			price: '￥3999',
			oldprice: '￥4999',
			noprice: ''
		},
	]
	const clearBrowse = () => {
		console.log('清空浏览记录');
	}
</script>

<style lang="scss" scoped>
	::v-deep .uni-searchbar__box {
		justify-content: left !important;
	}

	.searchRecord {
		background-color: #fff;
		padding: 30rpx;
		box-sizing: border-box;
		padding-bottom: 0;

		.titleBox {
			display: flex;
			justify-content: space-between;

			.title {
				color: #333;
				font-size: 30rpx;
			}

			.clearRecord {
				font-size: 24rpx;
				color: #999;
			}
		}

		.recordList {
			display: flex;
			flex-wrap: wrap;
			margin-top: 25rpx;
			max-height: 190rpx;
			overflow: hidden;

			.recordItem {
				font-size: 24rpx;
				background-color: #eee;
				margin-right: 20rpx;
				padding: 10rpx;
				border-radius: 10rpx;
				color: #666;
				margin-bottom: 15rpx;
			}
		}
	}

	.hotRecommended {
		background-color: #fff;
		padding: 30rpx;
		box-sizing: border-box;

		.title {
			color: #333;
			font-size: 30rpx;
			padding: 30rpx 0 30rpx;
		}

		.recommendedList {
			display: flex;
			flex-wrap: wrap;
			font-size: 26rpx;

			.item {
				background: linear-gradient(228deg, #ff4343, #ff8243);
				color: #fff;
				border-radius: 10rpx;
				padding: 15rpx;
				box-sizing: border-box;
				margin: 0 16rpx 16rpx 0;

				&:first-child {
					color: #666;
					background: #eee;
				}
			}
		}
	}

	.recentBrowse {
		background-color: #fff;
		padding: 30rpx;
		box-sizing: border-box;
		padding-bottom: 0;

		.titleBox {
			display: flex;
			justify-content: space-between;

			.title {
				color: #333;
				font-size: 30rpx;
			}

			.clearRecord {
				font-size: 24rpx;
				color: #999;
			}
		}

		.browseList {
			display: flex;
			flex-wrap: nowrap;
			margin-top: 30rpx;
			overflow: auto;
			-ms-overflow-style: none;
			overflow: -moz-scrollbars-none;

			&::-webkit-scrollbar {
				width: 0 !important
			}

			.browseItem {
				background-color: #eee;
				border-radius: 10rpx;
				margin-right: 15rpx;

				image {
					margin: auto;
				}

				.info {
					width: 200rpx;
					font-size: 24rpx;
					padding: 15rpx;
					box-sizing: border-box;
					height: 157rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.desc {
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;

					}

					.price {
						margin-top: 20rpx;
						color: #ff4343;

						.oldprice {
							color: #666;
							font-size: 22rpx;
							text-decoration: line-through;
						}
					}
				}
			}
		}
	}
</style>
