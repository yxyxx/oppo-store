<template>
	<view class="topNav">
		<view class="back" @click="back">
			<image
				src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAADX0lEQVR4Xu2avU8UQRjGn3f4OO5AbSgsqWl39i84IJIYSTSgiVSamNBhR6eVVGKjhVqgiRRSWBgLKxsr7yvkTKCAhIJEEwzJxeQ+gX3NFUeWC7cMN3t7Z3i3no/n+d2z783MDkGeQAIkfIIJCKBzEiKABJBdEZEESYIkQXYEJEF2/KQGSYIkQXYEJEF2/KQGSYIkQXYEJEF2/CKrQRWtpz3gUbxQuEc7O1U72dH1jgRQVeuZY+aPIIopoi+xYvEObW7WorPZ/kwdB1Ry3TkwfwAw0JBJROvxdPpu+7Kj69lRQGXXnQfzKgP9J5aYq0w0N5zJfI7OZvszdQxQWeuHAF4z0OeTV/aIbo+k01/blxxtz44AqrjuAnveSyZSPjtFUupWPJX6Fq1Fu9lCB1TS+jGA5wBOxibgL5S6GU+lvtvJjb53qIDKjrPERMt+G8xcGABuDGazP6K3Zz9jaICKWj8l4EmTpIN+5qnBbDZnL7U7I4QCqOw4y0y0dMoC834fMBHLZn92x1o4s1oDKmn9AsBik5xffZ43EcvltsKR2b1R2gbEAFVc9xUzLzTJ3zs8Okpe29jY7p6t8GZuCxADqqT1WwIeNEnZpVotGc/nd8OT2N2RLgyovvAru+57MN/3SyfmbVYqmUin97prKdzZLwSIHWegrNQamGdPwQG2PObkcDb7O1x53R/NGBCPjw+WE4l1ADN+2QrIH9Zqk1fy+f3u2wlfgRGg3bGxoeujo58YmG6SkDtSaupqKnUQvrTeGNEIUIu/8t5wYKAikckY+TxrKKOOJa3/ABg10NKTTQTQOT9LFIDOWi33ZFrOEtVxQFKkDbIgf/MmkAIWikPMSbrMC8UGv/pWo6L1OwbmZavRIlWBm1WlkvFU6vJuVn1JkuMOg7KEitYrHlA/qPc/cmDmp9HqyNVjnhzJ5fImoHu1jdFWw0S8HNobUKp/9gHRs/pxrK95oZ9ZPvs0gFS0XvSAFflwGJAo+fRs8rppXT/QfyOXFwJg1a+/MPMqmq6/KKK5oct+/aXBreo4s8dEa3KBKiBJRa1nSK7gBRcmucRpULj/xyahraT/R/MmmgXQOZQEkAAyeZFat5EESYIkQXYEJEF2/KQGSYIkQXYEJEF2/KQGSYIkQXYEJEF2/P4BJJdPWPbGgiUAAAAASUVORK5CYII="
				mode="widthFix" style="width: 55rpx;"></image>
		</view>
		<view class="navigation">
			<view class="">
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
</template>

<script setup>
	import {
		ref,
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app';
	let goodsName = ''
	onLoad((options) => {
		console.log(options.goods);
		goodsName = options.goods
		uni.setNavigationBarTitle({
			title: goodsName
		});
	});
</script>

<style lang="scss" scoped>
	.topNav {
		.back {}

		.navigation {}
	}
</style>
