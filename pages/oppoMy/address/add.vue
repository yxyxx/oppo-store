<template>
	<view class="main">
		<uni-forms ref="baseForm" :modelValue="baseFormData" :rules="customRules" label-width="85">
			<uni-forms-item label="收货人" name="name">
				<uni-easyinput v-model="baseFormData.name" placeholder="请输入收货人姓名" :inputBorder="false" />
			</uni-forms-item>
			<uni-forms-item label="手机号码" name="phone">
				<uni-easyinput v-model="baseFormData.phone" placeholder="请输入手机号码" :inputBorder="false" />
			</uni-forms-item>
			<uni-forms-item label="所在地区" name="address">
				<text class="choose-adress"
					@click="addressShow = true">{{baseFormData.address?baseFormData.address:'选择地址'}}</text>
			</uni-forms-item>
			<uni-forms-item label="详细地址" name="detailedness">
				<uni-easyinput v-model="baseFormData.detailedness" placeholder="请输入详细地址" :inputBorder="false" />
			</uni-forms-item>
			<uni-easyinput :clearable="false" type="textarea" class="addressRecognition"
				v-model="baseFormData.introduction" placeholder="试试粘贴收货人姓名、手机号、收货地址，可快速识别您的收货信息" />
			<view class="tag-box">
				<uni-tag :circle="true" @click="handleClear" text="清空" style="margin-right:20rpx" type="success" />
				<uni-tag :circle="true" text="识别" type="error" />
			</view>
			<uni-forms-item label="设为默认地址">
				<switch color="red" style="transform:scale(0.7)" />
			</uni-forms-item>
		</uni-forms>
		<button type='warn' class="footer-button" @click="save">保存并使用</button>
		<pickerAddress v-model="addressShow" @confirm="addresspick" />
	</view>
</template>

<script setup>
	import pickerAddress from '@/components/liudx-pickerAddress/index.vue'
	import {
		ref
	} from "vue"
	const baseForm = ref()
	const addressShow = ref(false)
	const form = ref({
		province: '',
		city: '',
		area: '',
	})
	const baseFormData = ref({
		address: '',
		introduction: ''
	})
	const customRules = {
		name: {
			rules: [{
				required: true,
				errorMessage: '收货人不能为空'
			}]
		},
		detailedness: {
			rules: [{
				required: true,
				errorMessage: '详细地址不能为空'
			}]
		},
		address: {
			rules: [{
				required: true,
				errorMessage: '所在地区不能为空'
			}]
		},
		phone: {
			rules: [{
					required: true,
					errorMessage: '手机号码不能为空'
				},
				{
					validateFunction: function(rule, value, data, callback) {
						const reg = /^[1][3-9][0-9]{9}$/ //手机校验
						if (reg.test(value)) {
							return true
						} else {
							callback(new Error('请输入正确格式的手机号码'))
						}
					}
				}
			]
		},
	}
	const handleClear = () => {
		baseFormData.value.introduction = ''
	}
	const addresspick = (obj) => {
		let arr = ['province', 'city', 'area'];
		let place = '';
		arr.map(key => {
			form.value[key] = obj[key].AreaId
			place += obj[key].AreaName
		})
		baseFormData.value.address = place
		addressShow.value = false
	}
	const save = () => {
		baseForm.value.validate().then(res => {
			console.log('success', res);
			uni.showToast({
				title: `校验通过`
			})
		}).catch(err => {
			console.log('err', err);
		})
	}
</script>

<style lang="scss">
	page {
		background-color: white;
	}

	.main {
		padding: 40rpx;
	}

	.footer-button {
		position: fixed;
		bottom: 80rpx;
		width: 640rpx;
		border-radius: 120rpx;
	}

	.choose-adress {
		display: inline-block;
		height: 72rpx;
		line-height: 72rpx;
		padding-left: 20rpx;
	}

	.addressRecognition {
		display: block;
		border-radius: 20rpx;
		font-size: 24rpx;
		background-color: #e9e9e9;
	}

	.tag-box {
		z-index: 1000;
		position: relative;
		top: -70rpx;
		left: 480rpx;
	}
</style>
