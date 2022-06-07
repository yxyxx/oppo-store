<template>
	<view class="input-box">
		<uni-forms ref="form" :modelValue="formData" :rules="rules">
			<uni-forms-item name="name">
				<uni-easyinput :maxlength="11" v-model="formData.name" focus placeholder="请输入手机号"
					@input="handleInput"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item name="email">
				<uni-easyinput type=password v-model="formData.email" focus placeholder="请输入密码" @input="handleInput">
				</uni-easyinput>
			</uni-forms-item>
		</uni-forms>
		<button type="primary" :disabled="isDisabled" class="footer-button" @click="login">登录</button>
	</view>
</template>

<script setup>
	import {
		ref,watchEffect
	} from 'vue'
	const isDisabled = ref(true)
	const form = ref()
	const rules = {
		// 对name字段进行必填验证
		name: {
			rules: [{
					required: true,
					errorMessage: '请输入手机号',
				}
			]
		},
		// 对email字段进行必填验证
		email: {
			rules: [{
				required: true,
				errorMessage: '请输入密码',
			}]
		}
	}
	const formData = ref({
		name: '',
		email: ''
	})
	watchEffect(()=>{
		if(formData.value.name&&formData.value.email){
			isDisabled.value = false
		}
	})
	const handleInput = (value) => {
		// console.log(value)
	}
	const login = () => {
		uni.navigateTo({
			url: '/pages/oppoMy/index'
		});
		// form.value.validate().then(res => {
		// 	console.log('表单数据信息：', res);
		// }).catch(err => {
		// 	console.log('表单错误信息：', err);
		// })
	}
</script>

<style lang="scss">
	page {
		background-color: white;
	}

	.input-box {
		padding: 40rpx;
	}
</style>
