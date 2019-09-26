<template>
	<div>
		<Card style="width:100%">
			<div style="text-align:center">
				<img style="width:100%" src="https://img3.doubanio.com/view/subject/m/public/s6974202.jpg" />
				<h3>史蒂夫·乔布斯传</h3>
				<p>当前id : {{ id }}</p>
			</div>
		</Card>
	</div>
</template>

<script>
export default {
	validate({ params }) {
		return /^[0-9]+$/.test(params.id)
	},
	data() {
		return {
			id: this.$route.params.id
		}
	},
	head() {
		return {
			title: '史蒂夫·乔布斯传',
			meta: [{ hid: 'description', name: 'books', content: '史蒂夫·乔布斯传' }]
		}
	}
}
</script>
