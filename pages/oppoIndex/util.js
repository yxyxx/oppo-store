// swiper
const swiperimages = [
	'https://dsfs.oppo.com/archives/202205/20220520050500628763581a7f1.jpg?_w_=1080&_h_=600&x-oss-process=image/format,webp',
	'https://dsfs.oppo.com/archives/202205/2022051704051262835d8c558b7.png?_w_=1080&_h_=600&x-oss-process=image/format,webp',
	'https://dsfs.oppo.com/archives/202205/202205191005026285b0d2700eb.jpg?_w_=1080&_h_=600&x-oss-process=image/format,webp',
	'https://dsfs.oppo.com/archives/202205/2022051704050662835a7a05481.jpg?_w_=1080&_h_=600&x-oss-process=image/format,webp',
	'https://dsfs.oppo.com/archives/202205/20220512050510627cda3281336.png?_w_=1080&_h_=600&x-oss-process=image/format,webp'

]
const dotStyle = [{
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
const dotsStyles = {
	backgroundColor: 'transparent',
	border: '1px #fff solid',
	selectedBackgroundColor: '#fff',
	selectedBorder: '1px #fff solid'
}
const floorPanelImages = [
	'https://dsfs.oppo.com/archives/202205/20220520050553628765a904cef.png?_w_=496&_h_=306&x-oss-process=image/format,webp',
	'https://dsfs.oppo.com/archives/202205/2022051906052462861934b02c8.png?_w_=496&_h_=306&x-oss-process=image/format,webp',
	'https://dsfs.oppo.com/archives/202202/202202220502526214aa7c3092a.png?_w_=496&_h_=306&x-oss-process=image/format,webp',
	'https://dsfs.oppo.com/archives/202205/20220520040524628758304b563.png?_w_=496&_h_=306&x-oss-process=image/format,webp',
	'https://dsfs.oppo.com/archives/202205/202205200505346287651e01de4.png?_w_=496&_h_=306&x-oss-process=image/format,webp',
	'https://dsfs.oppo.com/archives/202205/20220520050516628766385bc68.png?_w_=496&_h_=306&x-oss-process=image/format,webp'
]
const floorPanelColumnImages = [
	'https://dsfs.oppo.com/archives/202205/20220513100520627dbbb48b415.png?_w_=240&_h_=306&x-oss-process=image/format,webp',
	'https://dsfs.oppo.com/archives/202202/2022022408025662177e7cc9c6c.png?_w_=240&_h_=306&x-oss-process=image/format,webp',
	'https://dsfs.oppo.com/archives/202204/20220408050445625006a1327c5.png?_w_=240&_h_=306&x-oss-process=image/format,webp',
	'https://dsfs.oppo.com/archives/202204/20220408050415625006834c317.png?_w_=240&_h_=307&x-oss-process=image/format,webp'
]
const navSort = [{
	img: 'https://dsfs.oppo.com/archives/202205/202205181205436283cb1f48291.png?_w_=96&_h_=96&x-oss-process=image/format,webp',
	text: '手机',
}, {
	img: 'https://dsfs.oppo.com/archives/202205/202205181205316283cb4f17879.png?_w_=96&_h_=96&x-oss-process=image/format,webp',
	text: '平板电视'
}, {
	img: 'https://dsfs.oppo.com/archives/202205/202205181205436283cb5b96db7.png?_w_=96&_h_=96&x-oss-process=image/format,webp',
	text: '穿戴'
}, {
	img: 'https://dsfs.oppo.com/archives/202205/202205181205546283cb66f19ec.png?_w_=96&_h_=96&x-oss-process=image/format,webp',
	text: '声学'
}, {
	img: 'https://dsfs.oppo.com/archives/202205/202205181205066283cb72e9b49.png?_w_=96&_h_=96&x-oss-process=image/format,webp',
	text: '配件'
}]
const sortPannel = [{
	title: '手机专区',
	bannerImage: 'https://dsfs.oppo.com/archives/202203/20220311020310622aed62739a4.png?_w_=1008&_h_=300&x-oss-process=image/format,webp',
	list: [{
			img: 'https://dsfs.oppo.com/archives/202112/2021121506121861b9bcb275752.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
			info: ' OPPO Find N 全新折叠旗舰 ',
			calculation: '券后价',
			price: '8989'
		},
		{
			img: 'https://dsfs.oppo.com/archives/202111/20211124081152619e2e9c16387.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
			info: ' OPPO Find X3 ',
			calculation: '券后价',
			price: '8989'
		},
		{
			img: 'https://dsfs.oppo.com/omp/1634177807586-_-ac48cdd12f144685817a3eeaafe5e34f.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
			info: ' OPPO Find N 全新折叠旗舰 ',
			calculation: '券后价',
			price: '8989'
		},
		{
			img: 'https://dsfs.oppo.com/archives/202112/2021121506121861b9bcb275752.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
			info: ' OPPO Find N 全新折叠旗舰 ',
			calculation: '券后价',
			price: '8989'
		},
		{
			img: 'https://dsfs.oppo.com/archives/202111/20211124081152619e2e9c16387.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
			info: ' OPPO Find X3 ',
			calculation: '券后价',
			price: '8989'
		},
		{
			img: 'https://dsfs.oppo.com/omp/1634177807586-_-ac48cdd12f144685817a3eeaafe5e34f.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
			info: ' OPPO Find N 全新折叠旗舰 ',
			calculation: '券后价',
			price: '8989'
		}
	]
}, {
	title: '智能声学',
	bannerImage: 'https://dsfs.oppo.com/archives/202203/20220311020310622aed62739a4.png?_w_=1008&_h_=300&x-oss-process=image/format,webp',
	list: [{
			img: 'https://dsfs.oppo.com/archives/202112/2021121506121861b9bcb275752.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
			info: ' OPPO Find N 全新折叠旗舰 ',
			calculation: '券后价',
			price: '8989'
		},
		{
			img: 'https://dsfs.oppo.com/archives/202111/20211124081152619e2e9c16387.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
			info: ' OPPO Find X3 ',
			calculation: '券后价',
			price: '8989'
		},
		{
			img: 'https://dsfs.oppo.com/omp/1634177807586-_-ac48cdd12f144685817a3eeaafe5e34f.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
			info: ' OPPO Find N 全新折叠旗舰 ',
			calculation: '券后价',
			price: '8989'
		},
		{
			img: 'https://dsfs.oppo.com/archives/202112/2021121506121861b9bcb275752.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
			info: ' OPPO Find N 全新折叠旗舰 ',
			calculation: '券后价',
			price: '8989'
		},
		{
			img: 'https://dsfs.oppo.com/archives/202111/20211124081152619e2e9c16387.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
			info: ' OPPO Find X3 ',
			calculation: '券后价',
			price: '8989'
		},
		{
			img: 'https://dsfs.oppo.com/omp/1634177807586-_-ac48cdd12f144685817a3eeaafe5e34f.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
			info: ' OPPO Find N 全新折叠旗舰 ',
			calculation: '券后价',
			price: '8989'
		}
	]
}, ]
const todayRobList = [{
	img: 'https://dsfs.oppo.com/archives/202109/20210924050923614d941f66cd1.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
	info: ' 皇冠猴 手机支架 棕熊  ',
	oldPrice: '24.9',
	newPrice: '69'
}, {
	img: 'https://dsfs.oppo.com/archives/202112/2021123003125461cd64a2774c6.png?_w_=600&_h_=600&x-oss-process=image/format,webp',
	info: ' 乐族科技 环保无汞碱性电池 7号电池 10粒 盒 红色、黄色、绿色 ',
	oldPrice: '8.9',
	newPrice: '19.9'
}, {
	img: 'https://dsfs.oppo.com/archives/202201/2022011203015361de83ad225af.png?_w_=600&_h_=600&x-oss-process=image/format,webp',
	info: ' 【商城定制】森米 Type-C 虎头数据线120cm 红色 ',
	oldPrice: '9.9',
	newPrice: '19.9'
}, {
	img: 'https://dsfs.oppo.com/archives/202112/2021120811124461b02054735cd.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
	info: ' 小熊电磁炉 DCL-A21B1 绿色 ',
	oldPrice: '172',
	newPrice: '168.9'
}, {
	img: 'https://dsfs.oppo.com/archives/202109/20210924050923614d941f66cd1.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
	info: ' 皇冠猴 手机支架 棕熊  ',
	oldPrice: '24.9',
	newPrice: '69'
}, {
	img: 'https://dsfs.oppo.com/archives/202112/2021123003125461cd64a2774c6.png?_w_=600&_h_=600&x-oss-process=image/format,webp',
	info: ' 乐族科技 环保无汞碱性电池 7号电池 10粒 盒 红色、黄色、绿色 ',
	oldPrice: '8.9',
	newPrice: '19.9'
}, {
	img: 'https://dsfs.oppo.com/archives/202201/2022011203015361de83ad225af.png?_w_=600&_h_=600&x-oss-process=image/format,webp',
	info: ' 【商城定制】森米 Type-C 虎头数据线120cm 红色 ',
	oldPrice: '9.9',
	newPrice: '19.9'
}, {
	img: 'https://dsfs.oppo.com/archives/202112/2021120811124461b02054735cd.png?_w_=320&_h_=320&x-oss-process=image/format,webp',
	info: ' 小熊电磁炉 DCL-A21B1 绿色 ',
	oldPrice: '172',
	newPrice: '168.9'
}, ]
export default {
	swiperimages,
	dotStyle,
	dotsStyles,
	floorPanelImages,
	navSort,
	floorPanelColumnImages,
	sortPannel,
	todayRobList
}
