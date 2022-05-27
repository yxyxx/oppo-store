<template>
	<!-- 搜索框 -->
	<view class="search-nav">
		<view class="back" @click="back">
			<image
				src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAADX0lEQVR4Xu2avU8UQRjGn3f4OO5AbSgsqWl39i84IJIYSTSgiVSamNBhR6eVVGKjhVqgiRRSWBgLKxsr7yvkTKCAhIJEEwzJxeQ+gX3NFUeWC7cMN3t7Z3i3no/n+d2z783MDkGeQAIkfIIJCKBzEiKABJBdEZEESYIkQXYEJEF2/KQGSYIkQXYEJEF2/KQGSYIkQXYEJEF2/CKrQRWtpz3gUbxQuEc7O1U72dH1jgRQVeuZY+aPIIopoi+xYvEObW7WorPZ/kwdB1Ry3TkwfwAw0JBJROvxdPpu+7Kj69lRQGXXnQfzKgP9J5aYq0w0N5zJfI7OZvszdQxQWeuHAF4z0OeTV/aIbo+k01/blxxtz44AqrjuAnveSyZSPjtFUupWPJX6Fq1Fu9lCB1TS+jGA5wBOxibgL5S6GU+lvtvJjb53qIDKjrPERMt+G8xcGABuDGazP6K3Zz9jaICKWj8l4EmTpIN+5qnBbDZnL7U7I4QCqOw4y0y0dMoC834fMBHLZn92x1o4s1oDKmn9AsBik5xffZ43EcvltsKR2b1R2gbEAFVc9xUzLzTJ3zs8Okpe29jY7p6t8GZuCxADqqT1WwIeNEnZpVotGc/nd8OT2N2RLgyovvAru+57MN/3SyfmbVYqmUin97prKdzZLwSIHWegrNQamGdPwQG2PObkcDb7O1x53R/NGBCPjw+WE4l1ADN+2QrIH9Zqk1fy+f3u2wlfgRGg3bGxoeujo58YmG6SkDtSaupqKnUQvrTeGNEIUIu/8t5wYKAikckY+TxrKKOOJa3/ABg10NKTTQTQOT9LFIDOWi33ZFrOEtVxQFKkDbIgf/MmkAIWikPMSbrMC8UGv/pWo6L1OwbmZavRIlWBm1WlkvFU6vJuVn1JkuMOg7KEitYrHlA/qPc/cmDmp9HqyNVjnhzJ5fImoHu1jdFWw0S8HNobUKp/9gHRs/pxrK95oZ9ZPvs0gFS0XvSAFflwGJAo+fRs8rppXT/QfyOXFwJg1a+/MPMqmq6/KKK5oct+/aXBreo4s8dEa3KBKiBJRa1nSK7gBRcmucRpULj/xyahraT/R/MmmgXQOZQEkAAyeZFat5EESYIkQXYEJEF2/KQGSYIkQXYEJEF2/KQGSYIkQXYEJEF2/P4BJJdPWPbGgiUAAAAASUVORK5CYII="
				mode="widthFix" style="width: 55rpx;"></image>
		</view>
		<uni-search-bar class="uni-mt-10" radius="100" :placeholder="placeholderWord" clearButton="none"
			cancelButton="none" v-model="searchValue" @confirm="search"
			style="width: 70%;justify-content: left !important;" />
		<view class="seach-btn" @click="search">
			搜索
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		defineExpose
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app';
	const searchValue = ref('')
	const placeholderWord = ref('请输入')
	onLoad((options) => {
		placeholderWord.value = options.word
	});
	// 点击搜索跳转页面，保存浏览记录
	const search = (val, type) => {
		if (val) {
			if (typeof(val) == 'string') {
				if (!type) {
					uni.getStorageSync('searchWord') ? uni.setStorageSync('searchWord', [val, ...uni
						.getStorageSync(
							'searchWord')
					]) : uni.setStorageSync('searchWord', [val])
				}
				uni.navigateTo({
					url: '/pages/oppoSearchResult/index?word=' + val
				})
			} else {
				if (!type) {
					// 如果输入为空时，默认搜索placeholderWord
					if (searchValue.value.trim().length == 0) {
						uni.getStorageSync('searchWord') ? uni.setStorageSync('searchWord', [searchValue.value, ...
							uni
							.getStorageSync('searchWord')
						]) : uni.setStorageSync('searchWord', [placeholderWord.value]);
						uni.navigateTo({
							url: '/pages/oppoSearchResult/index?word=' + placeholderWord.value
						})
					} else {
						uni.getStorageSync('searchWord') ? uni.setStorageSync('searchWord', [searchValue.value, ...
							uni
							.getStorageSync('searchWord')
						]) : uni.setStorageSync('searchWord', [searchValue.value]);
						uni.navigateTo({
							url: '/pages/oppoSearchResult/index?word=' + searchValue.value
						})
					}
				}
			}
		}
	}
	defineExpose({
		search
	})
	const currentRoutes = getCurrentPages();
	const currentRoute = currentRoutes[currentRoutes.length - 1].route
	const back = () => {
		if (currentRoute == 'pages/oppoSearchResult/index') {
			uni.navigateTo({
				url: '/pages/oppoSearch/index'
			})
		} else {
			uni.switchTab({
				url: '/pages/oppoIndex/index',
			})
		}
	}
</script>

<style lang="scss" scoped>
	.search-nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		border-bottom: 1px solid #eee;

		.back {
			width: 10%;
			text-align: right;
		}

		.seach-btn {
			width: 13%;
			text-align: left;
			font-size: 30rpx
		}

		::v-deep .uni-searchbar__box {
			justify-content: left !important;
		}

		::v-deep .data-v-180dbe05 {
			justify-content: left !important;
		}
	}
</style>
