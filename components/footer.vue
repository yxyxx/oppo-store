<template>
	<view class="footer">
		<view class="login-btn">
			登录账号
		</view>
		<view class="license-privacy-user">
			<text>营业执照</text>
			<text>隐私政策</text>
			<text>用户协议</text>
		</view>
		<view class="copyright-box">©2005 - 2022 OPPO 版权所有 粤ICP备14056724号</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss">
	.footer {
		background-color: #fff;
		text-align: center;
		margin-top: 40upx;
		color: #666;

		.login-btn {
			line-height: 80upx;
		}

		.license-privacy-user {
			font-size: 24upx;

			text {
				margin: 0 30upx;

				&:nth-child(2) {
					margin: 0;

					&::before {
						content: '|';
						margin-right: 30upx;
						color: #999;
						opacity: .5;
					}

					&::after {
						content: '|';
						margin-left: 30upx;
						color: #999;
						opacity: .5;
					}
				}
			}
		}

		.copyright-box {
			padding: 20upx 0 40upx;
			font-size: 24upx;
		}
	}
</style>
