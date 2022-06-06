<template>
	<view class="box">
		<image
			src="https://dsfs.oppo.com/archives/202202/20220224030239621732b7025e4.png?_w_=320&_h_=320&x-oss-process=image/format,webp"
			mode="widthFix" style="width: 100%;"></image>
		<view class="info">
			<view class="title">飞利浦 USB排插 SPB4320WA /93 白色</view>
			<view class="desc">臻米 多功能电火锅 米黄色</view>
			<view class="tag">
				<uni-tag text="3期免息" type="primary" :inverted="true" class="aa" size="mini"
					custom-style="background-color:transparent;font-size:20rpx;padding:5rpx 10rpx;line-height:35rpx;margin-right:20rpx;margin-bottom: 10rpx;display:inline-block;" />
				<uni-tag text="赠" type="error" :inverted="true"
					custom-style="background-color:transparent;font-size:20rpx;padding:5rpx 10rpx;line-height:35rpx;margin-right:20rpx;margin-bottom: 10rpx;display:inline-block;"
					size="mini" />
				<uni-tag text="券 | 满700减10" type="error" :inverted="true"
					custom-style="background-color:transparent;font-size:20rpx;padding:5rpx 10rpx;line-height:35rpx;margin-right:20rpx;margin-bottom: 10rpx;display:inline-block;"
					size="mini" />
				<uni-tag text="积分抵100%" type="error" :inverted="true"
					custom-style="background-color:transparent;font-size:20rpx;padding:5rpx 10rpx;line-height:35rpx;margin-right:20rpx;margin-bottom: 10rpx;display:inline-block;"
					size="mini" />
			</view>
			<view class="priceBox">
				<view class="newPrice">2099</view>
				<view class="oldPrice">￥2999</view>
			</view>
		</view>
	</view>
</template>

<script setup>
</script>

<style lang="scss">
	.box {
		width: 100%;
		padding: 5% 3% 4%;
		box-sizing: border-box;

		.info {
			width: 100%;

			.title {
				font-size: 24rpx;
				color: #333;
				line-height: 34rpx;
				width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				text-indent: 5rpx;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}

			.desc {
				font-size: 22rpx;
				color: #999;
				margin-top: 5rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
			}

			.tag {
				display: flex;
				flex-wrap: wrap;
				margin-top: 10rpx;
				height: 48rpx;
				overflow: hidden;
			}

			.priceBox {
				width: 100%;
				display: flex;
				align-items: flex-end;
				color: #f34141;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				margin-top: 10rpx;

				.handWay {
					font-size: 20rpx;
					word-spacing: 0;
				}

				.newPrice {
					margin-right: 5rpx;
					font-size: 22rpx;

					&::before {
						content: "￥";
						font-size: 18rpx
					}
				}

				.oldPrice {
					display: none;
					font-size: 18rpx;
					text-decoration: line-through;
					color: #999;
				}
			}
		}
	}
</style>
