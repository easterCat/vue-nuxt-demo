<template>
	<div class="container">
		<div>
			<Row type="flex" gutter="10" justify="start" class="code-row-bg">
				<Col v-for="i in 10" :key="i" span="6">
					<Card style="width:100%">
						<nuxt-link :to="'/books/'+i">
							<div style="text-align:center">
								<img style="width:100%" src="https://img3.doubanio.com/view/subject/m/public/s6974202.jpg" />
								<h3>史蒂夫·乔布斯传</h3>
							</div>
						</nuxt-link>
					</Card>
				</Col>
			</Row>
		</div>
	</div>
</template>

<script>
export default {
	components: {}
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
</style>
