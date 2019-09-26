
<template>
	<div class="layout">
		<Layout :style="{border: 'none'}">
			<Header>
				<Menu mode="horizontal" theme="dark" active-name="1">
					<div class="layout-logo"></div>
					<div class="layout-nav">
						<MenuItem name="1">
							<Icon type="ios-navigate"></Icon>
							<nuxt-link to="/">首页</nuxt-link>
						</MenuItem>
						<MenuItem name="2">
							<Icon type="ios-keypad"></Icon>发现
						</MenuItem>
						<MenuItem name="3">
							<nuxt-link to="/books">小书</nuxt-link>
						</MenuItem>
					</div>
				</Menu>
			</Header>
			<Layout :style="{padding: '0 50px',background: '#fff'}">
				<Content
					:style="{margin:'0 auto',padding: '24px 0', maxWidth:'1000px',minWidth:'1000px',minHeight: '680px', background: '#fff'}"
				>
					<Layout>
						<Content :style="{padding: '0 24px 24px 24px', minHeight: '680px', background: '#fff'}">
							<nuxt />
						</Content>
						<Sider hide-trigger :style="{background: '#fff'}">
							<Tag type="border" checkable color="default">标签一</Tag>
							<Tag type="border" checkable color="default">标签一</Tag>
							<Tag type="border" checkable color="default">标签一</Tag>
							<Tag type="border" checkable color="default">标签一</Tag>
							<Tag type="border" checkable color="default">标签一</Tag>
							<Tag type="border" checkable color="default">标签一</Tag>
							<Tag type="border" checkable color="default">标签一</Tag>
							<Tag type="border" checkable color="default">标签一</Tag>
							<Tag type="border" checkable color="default">标签一</Tag>
							<Tag type="border" checkable color="default">标签一</Tag>
							<Tag type="border" checkable color="default">标签一</Tag>
						</Sider>
					</Layout>
				</Content>
			</Layout>
		</Layout>
	</div>
</template>

<script>
export default {
	data: () => ({})
}
</script>

<style scoped>
.layout {
	border: 1px solid #d7dde4;
	background: #f5f7f9;
	position: relative;
	border-radius: 4px;
	overflow: hidden;
}
.layout-logo {
	width: 100px;
	height: 30px;
	background: #5b6270;
	border-radius: 3px;
	float: left;
	position: relative;
	top: 15px;
	left: 20px;
	margin-right: 40px;
}
.layout-nav {
	margin: 0 auto;
}
.layout-footer-center {
	text-align: center;
}
</style>
