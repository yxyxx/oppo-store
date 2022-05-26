<template>
	<!-- <page-meta @scroll="scroll"></page-meta> -->
	<!-- 详情导航 -->
	<view class="topNav">
		<view class="back" @click="back">
			<image
				src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAADX0lEQVR4Xu2avU8UQRjGn3f4OO5AbSgsqWl39i84IJIYSTSgiVSamNBhR6eVVGKjhVqgiRRSWBgLKxsr7yvkTKCAhIJEEwzJxeQ+gX3NFUeWC7cMN3t7Z3i3no/n+d2z783MDkGeQAIkfIIJCKBzEiKABJBdEZEESYIkQXYEJEF2/KQGSYIkQXYEJEF2/KQGSYIkQXYEJEF2/CKrQRWtpz3gUbxQuEc7O1U72dH1jgRQVeuZY+aPIIopoi+xYvEObW7WorPZ/kwdB1Ry3TkwfwAw0JBJROvxdPpu+7Kj69lRQGXXnQfzKgP9J5aYq0w0N5zJfI7OZvszdQxQWeuHAF4z0OeTV/aIbo+k01/blxxtz44AqrjuAnveSyZSPjtFUupWPJX6Fq1Fu9lCB1TS+jGA5wBOxibgL5S6GU+lvtvJjb53qIDKjrPERMt+G8xcGABuDGazP6K3Zz9jaICKWj8l4EmTpIN+5qnBbDZnL7U7I4QCqOw4y0y0dMoC834fMBHLZn92x1o4s1oDKmn9AsBik5xffZ43EcvltsKR2b1R2gbEAFVc9xUzLzTJ3zs8Okpe29jY7p6t8GZuCxADqqT1WwIeNEnZpVotGc/nd8OT2N2RLgyovvAru+57MN/3SyfmbVYqmUin97prKdzZLwSIHWegrNQamGdPwQG2PObkcDb7O1x53R/NGBCPjw+WE4l1ADN+2QrIH9Zqk1fy+f3u2wlfgRGg3bGxoeujo58YmG6SkDtSaupqKnUQvrTeGNEIUIu/8t5wYKAikckY+TxrKKOOJa3/ABg10NKTTQTQOT9LFIDOWi33ZFrOEtVxQFKkDbIgf/MmkAIWikPMSbrMC8UGv/pWo6L1OwbmZavRIlWBm1WlkvFU6vJuVn1JkuMOg7KEitYrHlA/qPc/cmDmp9HqyNVjnhzJ5fImoHu1jdFWw0S8HNobUKp/9gHRs/pxrK95oZ9ZPvs0gFS0XvSAFflwGJAo+fRs8rppXT/QfyOXFwJg1a+/MPMqmq6/KKK5oct+/aXBreo4s8dEa3KBKiBJRa1nSK7gBRcmucRpULj/xyahraT/R/MmmgXQOZQEkAAyeZFat5EESYIkQXYEJEF2/KQGSYIkQXYEJEF2/KQGSYIkQXYEJEF2/P4BJJdPWPbGgiUAAAAASUVORK5CYII="
				mode="widthFix" style="width: 55rpx;"></image>
		</view>
		<view class="navigation">
			<view class="active">
				商品详情
			</view>
			<view class="">
				用户评价
			</view>
			<view class="">
				参数及包装
			</view>
		</view>
	</view>
	<!-- 详情轮播 -->
	<view class="detailSwiper">
		<uni-swiper-dot class="uni-swiper-dot-box" :info="goodsDetail.swiperBanner" :current="detailSwiperCurrent"
			:mode="'nav'" field="content">
			<swiper class="swiper-box" @change="detailSwiperChange" :current="detailSwiperDotIndex" autoplay circular
				interval=3000 style="height:750rpx;background-color: #fff;">
				<swiper-item v-for="(item, index) in goodsDetail.swiperBanner" :key="index" style="height:750rpx"
					@click="clicDeatilSwiperBanner(item)">
					<image :src="item.url" mode="widthFix" style="width: 100%;"></image>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
	</view>
	<!-- 价格 -->
	<view class="priceBanner">
		<text class="price">
			￥
			<text class="integer">12</text>
			<text class="decimal">.9</text>
		</text>
		<image src="https://dsfs.oppo.com/archives/202205/20220523060523628b641f5b187.png?_w_=360&_h_=66"
			mode="widthFix" class="title" style="width: 240rpx;"></image>
	</view>
	<!-- 优惠 -->
	<view class="preferential card" @click="popupToggle('preferential','bottom')">
		<view class="list">
			<view class="preferentialItem">
				积分可抵100%
			</view>
		</view>
		<view class="iconfont icon-youjiantou"></view>
	</view>
	<!-- 商品标题 -->
	<view class="card goodsTitle">
		<view class="title">永骏冠龙升级版三代三阶魔方 黑色</view>
		<view class="desc">
			<text class="tag">【热卖爆款 | 精品魔方】</text>
			<text class="tagDesc">外观无缝设计，手感轻盈，开启魔方新体验 </text>
		</view>
		<view class="more"> 点击查看更多智趣生活好物>></view>
	</view>
	<!-- 商品选择 -->
	<view class="card">
		<view class="individualChoice">
			<view class="title">
				配置
			</view>
			<uni-data-checkbox selectedTextColor="red" selectedColor="white" mode="tag" v-model="radio1"
				:localdata="list1"></uni-data-checkbox>
		</view>
		<view class="individualChoice">
			<view class="title">
				颜色
			</view>
			<uni-data-checkbox selectedTextColor="red" selectedColor="white" mode="tag" v-model="radio2"
				:localdata="list2"></uni-data-checkbox>
		</view>
		<view class="selecNum">
			<view class="title">数量</view>
			<uni-number-box v-model="goodsNum" @change="changeGoodsNum" :min="1" :max="3" />
		</view>
		<!-- 服务说明 -->
		<view class="promptService" @click="popupToggle('promptService','bottom')">
			<view class="promptServiceList">
				<view class="promptServiceItem" v-for="item in 4" :key="item">
					<uni-icons type="checkbox" size="16" color="#999"></uni-icons>
					<text class="service">7天价保</text>
				</view>
			</view>
			<view class="iconfont icon-youjiantou"></view>
		</view>
	</view>
	<!-- 为你推荐 -->
	<view class="recommended">
		<view class="title">为你推荐</view>
		<uni-swiper-dot class="uni-swiper-dot-box" :info="recomSwiperInfo" :current="recomSwiperCurrent" :mode="'dot'"
			:dots-styles="recomSwiperDotsStyles" field="content">
			<swiper class="swiper-box" @change="recomSwiperChange" :current="recomSwiperDotIndex">
				<swiper-item v-for="(item, index) in 3" :key="index">
					<view class="swiper-item" :class="'swiper-item' + index">
						<text style="color: #fff; font-size: 32px;">{{index+1}}</text>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
	</view>
	<!-- 商品详情图片 -->
	<view class="" style="margin-top: 40rpx;">
		<image
			src="https://dsfs.oppo.com/omp/1648384959843-_-c1aec84c41774d8aa74267274e0c9819.jpg?_w_=1125&_h_=4468&x-oss-process=image/format,webp"
			mode="widthFix" style="width: 100%;"></image>
		<!-- footer加入购物车 -->

	</view>
	<uni-goods-nav :options="footerOptions" :fill="true" :button-group="footerButtonGroup" @click="footerOptionsClick"
		@buttonClick="footerBuyClick" style="position: fixed;bottom: 0;left: 0;right: 0;"></uni-goods-nav>

	<!-- <GoTop :isShow="isShow"></GoTop> -->
	<!-- 弹窗 -->
	<uni-popup ref="popup" background-color="#fff" @change="popupChange" cancelText="closeempty">
		<view class="popup-content">
			<view class="popupTitle">
				<text>{{popupContent == 'preferential'?'优惠说明':popupContent == 'promptService'?'服务说明':''}}</text>
				<uni-icons type="closeempty" size="15" @click="closepoup"></uni-icons>
			</view>
			<view class="popupPreferential" v-if="popupContent == 'preferential'">
				<!-- <text class="text">popup 内容</text> -->
				<view class="priceBox">
					<view class="pricePayment">
						<text>到手价 ￥</text>
						<text class="payPrice">199</text>
					</view>
					<view class="calculate">
						<view class="oldPrice">
							<view class="price">329</view>
							<view class="priceway">商品售价</view>
						</view>
						<view class="line">---</view>
						<view class="subsidyPrice">
							<view class="price">180</view>
							<view class="priceway">限时补贴</view>
						</view>
					</view>
				</view>
				<view class="integral">
					<uni-tag text="赠送积分"
						custom-style="background-color: rgba(246, 52, 52,.1); color: #f63434;border:none"
						style="width:98rpx;">
					</uni-tag>
					<text class="integralDesc">购物送积分，积分将在确认收货7天后到账，帐户积分可用于商城下单抵现。</text>
				</view>
				<view class="tip">
					以上优惠仅为初步预估，以下单结算页为准，点击查看规则
					<uni-icons type="info-filled" size="18" color="#9e9e9e" style="margin-left: 10rpx;"></uni-icons>
				</view>
			</view>
			<view class="popupPromptService" v-else-if="popupContent == 'promptService'">
				<view class="list">
					<view class="item" v-for="item in 10">
						<view class="title">29天价保</view>
						<view class="desc">29天价保，买贵退还差价。</view>
					</view>
				</view>
			</view>
			<view class="footer">
				<view class="enterBtn" @click="closepoup">确定</view>
			</view>
		</view>
	</uni-popup>

</template>

<script setup>
	import {
		ref,
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app';
	import {
		goodsDetail,
		dotStyles
	} from './utils'
	// import  from './utils'
	console.log('goodsDetail', goodsDetail, dotStyles);
	let goodsName = ''
	onLoad((options) => {
		console.log(options.goods);
		goodsName = options.goods
		uni.setNavigationBarTitle({
			title: goodsName
		});
	});
	const detailSwiperCurrent = ref(0)
	const detailSwiperDotIndex = ref(0)
	const detailSwiperChange = (e) => {
		detailSwiperCurrent.value = e.detail.current
	}
	// 点击swiper图片
	const clicDeatilSwiperBanner = (item) => {
		console.log(item);
	}
	// 商品规格选择
	const radio1 = ref(0)
	const list1 = [{
		text: '8G+128G',
		value: 0
	}, {
		text: '12G+256G',
		value: 1
	}, {
		text: '8G+256G',
		value: 2
	}, ]
	const radio2 = ref(0)
	const list2 = [{
		text: '黑曜武士',
		value: 0
	}, {
		text: '冰河序曲',
		value: 1
	}, {
		text: '霓幻银海',
		value: 2
	}, ]
	// 数量选择
	const goodsNum = ref(1)
	const changeGoodsNum = (value) => {
		console.log('返回数值：', value);
	}
	// 加入购物车
	const footerOptions = ref([{
		icon: 'chat',
		text: '客服'
	}, {
		icon: 'cart',
		text: '购物车',
		info: 2
	}])
	const footerButtonGroup = [{
			text: '加入购物车',
			backgroundColor: 'linear-gradient(90deg, #FFCD1E, #FF8A18)',
			color: '#fff'
		},
		{
			text: '立即购买',
			backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
			color: '#fff'
		}
	]
	const footerOptionsClick = (e) => {
		console.log(1111122);
		uni.showToast({
			title: `点击${e.content.text}`,
			icon: 'none'
		})
	}
	const footerBuyClick = (e) => {
		console.log(e, footerOptions.value)
		if (e.index == 0) {
			footerOptions.value[1].info++
			uni.showToast({
				title: `加入购物车成功`,
				icon: 'none'
			})
		} else {

		}
	}
	const isShow = ref(false)
	console.log(isShow);
	const scroll = function(e) {
		console.log(2222222222222222);
		if (e.detail.scrollTop > 500) {
			isShow.value = true
		} else {
			isShow.value = false
		}
	}
	// 弹窗
	const popupType = ref('bottom')
	const popup = ref('popup')
	const popupContent = ref('')
	const popupToggle = (content, type) => {
		popupContent.value = content
		popupType.value = type
		popup.value.open(type)
	}
	const popupChange = (e) => {
		console.log(333, e);
	}
	const closepoup = () => {
		popup.value.close()
	}
	// 为你推荐
	const recomSwiperDotIndex = ref(0)
	const recomSwiperCurrent = ref(0)
	const recomSwiperInfo = [{
			colorClass: 'uni-bg-red',
			url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',
			content: '内容 A'
		},
		{
			colorClass: 'uni-bg-green',
			url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',
			content: '内容 B'
		},
		{
			colorClass: 'uni-bg-blue',
			url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',
			content: '内容 C'
		}
	]
	const recomSwiperDotsStyles = [{
			backgroundColor: 'rgba(0, 0, 0, .3)',
			border: '1px rgba(0, 0, 0, .3) solid',
			color: '#fff',
			selectedBackgroundColor: 'rgba(0, 0, 0, .9)',
			selectedBorder: '1px rgba(0, 0, 0, .9) solid'
		},
		{
			backgroundColor: 'rgba(255, 90, 95,0.3)',
			border: '1px rgba(255, 90, 95,0.3) solid',
			color: '#fff',
			selectedBackgroundColor: 'rgba(255, 90, 95,0.9)',
			selectedBorder: '1px rgba(255, 90, 95,0.9) solid'
		},
		{
			backgroundColor: 'rgba(83, 200, 249,0.3)',
			border: '1px rgba(83, 200, 249,0.3) solid',
			color: '#fff',
			selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
			selectedBorder: '1px rgba(83, 200, 249,0.9) solid'
		}
	]
	const recomSwiperChange = (e) => {
		recomSwiperCurrent.value = e.detail.current
	}
</script>

<style lang="scss" scoped>
	@import url(@/common/iconfont.css);

	.topNav {
		display: flex;
		align-items: center;
		background-color: #fff;
		border-bottom: 1rpx solid #eee;
		height: 86rpx;

		.back {
			width: 20%;
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.navigation {
			display: flex;
			width: 60%;
			justify-content: space-between;
			align-items: center;
			line-height: 86rpx;

			view {
				height: 86rpx;
			}

			.active {
				color: #f63434;
				border-bottom: 5rpx solid #f63434;
				box-sizing: border-box;
			}
		}
	}

	// 轮播图
	::v-deep .uni-swiper__dots-box[data-v-77b53eff] {
		// right: 0 !important;
		width: 70rpx;
		left: calc(100vw - 100rpx);
		border-radius: 10rpx;
		padding: 10rpx 0;
		bottom: 15rpx !important;
		text-align: center;
		background-color: rgba(0, 0, 0, .3);
	}

	::v-deep .uni-swiper__dots-nav-item[data-v-77b53eff] {
		margin: 0;
		width: 100%;
		text-align: center;
	}

	::v-deep .uni-swiper__dots-nav-item[data-v-77b53eff] {
		// text-align: center;
		font-size: 24rpx
	}

	// 价格banner
	.priceBanner {
		min-height: 120rpx;
		background-size: 100% 100%;
		padding: 0 36rpx;
		padding-left: 32rpx;
		display: -webkit-box;
		display: flex;
		-webkit-box-pack: justify;
		justify-content: space-between;
		align-items: center;
		background-image: url(https://dsfs.oppo.com/archives/202205/20220523060521628b641d43033.png?_w_=1080&_h_=174);

		.price {
			color: #fff;
			display: flex;
			align-items: center;

			font-size: 34rpx;

			.integer {
				font-size: 51rpx
			}
		}
	}

	.card {
		margin: 20rpx 24rpx;
		padding: 27rpx 31rpx;
		overflow: hidden;
		background: #fff;
		border-radius: 21rpx;
	}

	// 优惠
	.preferential {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.list {
			box-sizing: border-box;
			display: flex;
			flex-wrap: wrap;

			.preferentialItem {
				width: auto;
				max-width: 100%;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				background-color: rgba(243, 65, 65, 0.05);
				color: rgb(243, 65, 65);
				border-radius: 8rpx;
				padding: 2rpx 0.12rem;
				line-height: 36rpx;
				font-size: 24rpx;
				padding: 2rpx 12rpx;
				margin-right: 15rpx;
				margin-bottom: 15rpx;
			}
		}

		.icon-youjiantou {
			margin-bottom: 20rpx;

			&::before {
				font-size: 32rpx;
				color: #999;
			}
		}

	}

	// 商品标题
	.goodsTitle {
		.title {
			max-height: 180rpx;
			overflow: hidden;
			color: #333;
			font-weight: 500;
			font-size: 34rpx;
			line-height: 80rpx;
		}

		.desc {
			font-size: 26rpx;
			line-height: 39rpx;
			color: rgb(102, 102, 102);

			.tag {
				color: #f79a47;
			}
		}

		.more {
			color: #f79a47;
		}
	}

	// 商品选择
	::v-deep .is--tag[data-v-84d5d996] {
		border: 1px solid #efeff4 !important;
	}

	::v-deep .is-checked[data-v-84d5d996] {
		border: 1px solid #f63434 !important;
		box-sizing: border-box;
	}

	::v-deep .checklist-text {
		font-size: 26rpx !important;
	}

	.individualChoice {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: 15rpx;
		color: #666;
		font-size: 26rpx;

		.title {
			margin-right: 30rpx;
		}
	}

	.selecNum {
		display: flex;
		align-items: center;
		color: #666;

		.title {
			margin-right: 30rpx;
		}
	}

	.promptService {
		display: flex;
		justify-content: space-between;
		border-top: 1px solid #eee;
		margin-top: 30rpx;
		line-height: 50rpx;
		padding: 20rpx 0;
		color: #999;

		.promptServiceList {
			display: flex;
			flex-wrap: wrap;

			.promptServiceItem {
				margin-right: 50rpx;
				font-size: 24rpx;
				display: flex;
				align-items: center;

				.uni-icons {
					margin-right: 10rpx;
				}
			}
		}
	}

	::v-deep uni-view[data-v-7c43d41b] {
		border-radius: 40rpx 40rpx 0rpx 0rpx !important;
		overflow: hidden !important;
		max-height: 992rpx;
	}

	.popup-content {

		.popupTitle {
			display: flex;
			justify-content: space-between;
			margin: 40rpx;

			text {
				padding-left: 30rpx;
				box-sizing: border-box;
				text-align: center;
				width: calc(100% - 30rpx);
				font-size: 34rpx;
				font-weight: 700;
			}

			.uni-icons {
				padding-left: 0rpx;
				width: 30rpx;
			}
		}

		.popupPreferential {
			.priceBox {
				border: 1px solid #f63434;
				box-sizing: border-box;
				border-radius: 20rpx;
				margin: 40rpx;
				color: #f63434;
				line-height: 48rpx;
				padding: 20rpx;

				.pricePayment {
					display: flex;
					justify-content: center;
					align-items: flex-end;
					margin: 30rpx 0;

					text {
						font-size: 28rpx
					}

					.payPrice {
						font-size: 38rpx;
					}
				}

				.calculate {
					display: flex;
					justify-content: space-around;
					text-align: center;

					.oldPrice,
					.subsidyPrice {
						.price {
							display: flex;
							justify-content: center;
							font-size: 28rpx;

							&::before {
								content: '￥';
							}
						}

						.priceway {
							font-size: 24rpx
						}
					}
				}
			}

			.integral {
				padding: 40rpx;
				padding-top: 20rpx;
				display: flex;
				justify-content: space-between;
				white-space: nowrap;
				align-items: flex-start;

				.integralDesc {
					font-size: 25rpx;
					margin-left: 30rpx;
					white-space: wrap;
					width: calc(100% - 150rpx);
				}
			}

			.tip {
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 10rpx 40rpx 0;
				color: #999;
				font-size: 24rpx;
				margin-bottom: 130rpx;
			}

		}

		.popupPromptService {
			.list {
				padding: 0 40rpx;
				max-height: 686rpx;
				overflow: auto;

				.item {
					margin-bottom: 50rpx;
					line-height: 50rpx;
					font-size: 28rpx;

					.title {
						font-weight: 700;
						color: #333;
					}

					.desc {
						color: #999;
					}
				}
			}
		}

		.footer {
			border-top: 1px solid #eee;
			width: 100%;
			padding: 40rpx 0;
			display: flex;
			justify-content: center;

			.enterBtn {
				background-color: #f63434;
				width: 70%;
				color: #fff;
				text-align: center;
				line-height: 90rpx;
				border-radius: 50rpx;
				font-size: 32rpx
			}
		}
	}
</style>
