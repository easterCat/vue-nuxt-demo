<template>
	<div class="container">
		<div>
			<Card v-for="(item,index) in books" :key="index" :style="{width:'100%',marginBottom:'15px'}">
				<div style="text-align:center">
					<img src="~/static/image/cat.jpg" width="718px" />
					<h3>{{ item.name }}</h3>
					<p
						:style="{marginTop:'15px'}"
					>storyboard的使用从xib到storyboard，iOS界面开发的方式在变化。 这里记录怎么使用storyboard来完成简单的界面开发，比如实现一个“我”的简单界面。 （1）新建storyboard 在新建文件向导中，选择storyboard并命名即可。 （2）拉...</p>
				</div>
			</Card>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	head: {
		title: '一本书 - 首页',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: 'website description'
			},
			{ name: 'keywords', content: '一本书,码农,技术,vue,node,nuxt,前端' }
		]
	},
	data() {
		return {
			posts: [],
			items: []
		}
	},
	async asyncData() {
		const result = await axios.get('https://api.myjson.com/bins/f1bdx')
		console.log('result :', result.data.data)
		return { books: result.data.data }
	}
}
</script>

<style>
.container {
	margin: 0 auto;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.title {
	font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
		'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	display: block;
	font-weight: 300;
	font-size: 100px;
	color: #35495e;
	letter-spacing: 1px;
}

.subtitle {
	font-weight: 300;
	font-size: 42px;
	color: #526488;
	word-spacing: 5px;
	padding-bottom: 15px;
}

.links {
	padding-top: 15px;
}
</style>
