### 初始化

使用脚手架工具 create-nuxt-app 快速创建

```
npx create-nuxt-app <项目名>
```

> npx create-nuxt-app <项目名>

执行一些选择

1. 在集成的服务器端框架之间进行选择:
2. 选择您喜欢的 UI 框架:
3. 选择您喜欢的测试框架:
4. 选择你想要的 Nuxt 模式 (Universal or SPA)
5. 添加 axios module 以轻松地将 HTTP 请求发送到您的应用程序中。
6. 添加 EsLint 以在保存时代码规范和错误检查您的代码。
7. 添加 Prettier 以在保存时格式化/美化您的代码。

### Nuxt.js 特点

- 基于 Vue.js
- 自动代码分层
- 服务端渲染
- 强大的路由功能，支持异步数据
- 静态文件服务
- ES6/ES7 语法支持
- 打包和压缩 JS 和 CSS
- HTML 头部标签管理
- 本地开发支持热加载
- 集成 ESLint
- 支持各种样式预处理器： SASS、LESS、 Stylus 等等

### 基本 nuxt 配置

修改 pages/index.vue

```
 <h1 class="title">Hello world</h1>
```

在 localhost:3000 可以看到更新效果

#### Nuxt 目录结构

```
|-- .nuxt                            // Nuxt自动生成，临时的用于编辑的文件，build
|-- assets                           // 用于组织未编译的静态资源入LESS、SASS 或 JavaScript
|-- components                       // 用于自己编写的Vue组件，比如滚动组件，日历组件，分页组件
|-- layouts                          // 布局目录，用于组织应用的布局组件，不可更改。
|-- middleware                       // 用于存放中间件
|-- pages                            // 用于存放写的页面，我们主要的工作区域
|-- plugins                          // 用于存放JavaScript插件的地方
|-- static                           // 用于存放静态资源文件，比如图片
|-- store                            // 用于组织应用的Vuex 状态管理。
|-- .editorconfig                    // 开发工具格式配置
|-- .eslintrc.js                     // ESLint的配置文件，用于检查代码格式
|-- .gitignore                       // 配置git不上传的文件
|-- nuxt.config.json                 // 用于组织Nuxt.js应用的个性化配置，已覆盖默认配置
|-- package-lock.json                // npm自动生成，用于帮助package的统一性设置的，yarn也有相同的操作
|-- package-lock.json                // npm自动生成，用于帮助package的统一性设置的，yarn也有相同的操作
|-- package.json                     // npm包管理配置文件
```

| 别名     | 目录    |
| -------- | ------- |
| ~ 或 @   | srcDir  |
| ~~ 或 @@ | rootDir |

> 在您的 vue 模板中, 如果你需要引入 assets 或者 static 目录, 使用 ~/assets/your_image.png 和 ~/static/your_image.png 方式。

#### 配置 IP 和端口

在根目录下的 package.json 里对 config 项进行配置

```
  "config":{
    "nuxt":{
      "host":"127.0.0.1",
      "port":"1818"
    }
  },
```

#### 配置全局 css

定义一个全局的 CSS 来初始化我们的页面渲染，这里使用 normailze.css。

新建 assets/css/normalize.css

修改 nuxt.config.js

```
css: ["element-ui/lib/theme-chalk/index.css", "~assets/css/normailze.css"],
```

[normalize.css](https://necolas.github.io/normalize.css/)

#### 修改 webpack 配置

在 nuxt.config.js 中可以对 webpack 配置进行覆盖

```
build: {

    loaders:[
      {
        test:/\.(png|jpe?g|gif|svg)$/,
        loader:"url-loader",
        query:{
          limit:10000,
          name:'img/[name].[hash].[ext]'
        }
      }
    ],

    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
```

### 写一个 demo

编写一个测试 demo (找个网站抄抄),来看看基本流程

```
npm install iview --save
或
vue add iview (需要vue-cli支持)
```

#### 引入并配置 iview

想要加入其它的配置，可以在 nuxt.config.js 的 plugins 配置项中加入，同时在 plugins 文件夹下加入引入逻辑。例如：

nuxt.config.js

```
{src: '~plugins/iview', ssr: true}
```

同时新建 plugins/iview.js

```
import Vue from 'vue'
import iView from 'iview'

Vue.use(iView)
import 'iview/dist/styles/iview.css'
```

#### 修改默认布局

可通过添加 layouts/default.vue 文件来扩展应用的默认布局

```
<template>
	<div class="layout">
  ......
	</div>
</template>
```

> 传统的 spa 使用的<router-view>,但在 nuxtjs 中使用 <nuxt/> 组件显示页面的主体内容.created 和 data 中的逻辑，是在服务端加载时处理的，并不是浏览器端，浏览器端的逻辑比如 window 或 location 等对象要在 mounted 中写，否则会报错.head 中定义一些元数据，这些元数据会被爬虫抓取到，可以在每一个页面中自定义.

#### 添加静态资源

网上随便下张图片,然后新建 pages/index

```
<template>
	<div class="container">
		<div>
			<Card v-for="i in 5" :key="i" :style="{width:'100%',marginBottom:'15px'}">
				<div style="text-align:center">
					<img src="~/static/image/cat.jpg" height="300px" />
					<h3>A high quality UI Toolkit based on Vue.js</h3>
				</div>
			</Card>
		</div>
	</div>
</template>
```

> @和~都可以用来引入图片

#### nuxt 的路由使用

nuxt 中的基础路由是根据 pages 的目录结构来生成的.例如 pages/index.vue 就是{name:'index',path:'/',component:'pages/index.vue'}, 同理 pages/books/index.vue 就是{name:'books',path:'/books',component:'pages/books/index.vue'}

修改 layout/default.vue

```
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
```

> Nuxt.js 推荐<nuxt-link>标签来构建路由体系

#### asyncData 方法获取数据

使用 asyncData 的方法，使得我们可以在设置组件的数据之前能异步获取或处理数据。asyncData 方法会在组件（限于页面组件）每次加载之前被调用。它可以在服务端或路由更新之前被调用。 在这个方法被调用的时候，第一个参数被设定为当前页面的上下文对象，你可以利用 asyncData 方法来获取数据，Nuxt.js 会将 asyncData 返回的数据融合组件 data 方法返回的数据一并返回给当前组件。由于 asyncData 方法是在组件 初始化 前被调用的，所以在方法内是没有办法通过 this 来引用组件的实例对象。

```
npm install axios --save
```

在http://myjson.com/上创建假伪数据

```
{
  "data": [
    {
      "name": "Cesium基础功能-鹰眼地图。附带源码下载"
    },
    {
      "name": "iOS开发简记（7）：网络请求模块"
    },
    {
      "name": "iOS开发简记（7）：网络请求模块"
    },
    {
      "name": "（难度Hard） Problem 132. Palindrome Partitioning II（回文串拆分II）"
    },
    {
      "name": "iOS 13适配问题"
    },
    {
      "name": "Cesium基础功能-气泡弹窗。附带源码下载"
    },
    {
      "name": "重学安卓：是让人耳目一新的 Jetpack MVVM 精讲啊！"
    },
    {
      "name": "iOS开发简记（6）：storyboard的使用"
    },
    {
      "name": "最熟悉的陌生人：5 分钟快速理解 HTTP2"
    }
  ]
}
```

复制粘贴,点击保存,获取地址https://api.myjson.com/bins/f1bdx

新建 pages/index.vue

```
<template>
	<div class="container">
		<div>
			<Card v-for="(item,index) in books" :key="index" :style="{width:'100%',marginBottom:'15px'}">
				<div style="text-align:center">
					<img src="~/static/image/cat.jpg" height="300px" />
					<h3>{{ item.name }}</h3>
				</div>
			</Card>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
export default {
  async asyncData(){
      let {data}=await axios.get('https://api.myjson.com/bins/f1bdx')
      return {info: data}
  }
}
</script>
```

#### Nuxt 页面 meta 设置

Nuxt.js 为页面提供的特殊配置项。其中 head 配置当前页面的 Meta 标签, 详情参考 [页面头部配置 API](https://zh.nuxtjs.org/api/pages-head/)。

```
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
```

打开网页->刷新->右键查看,效果就显示出来了,这也是 nuxt 的一大优点

#### 添加页面切换特效

全局动画默认使用 page 来进行设置，例如现在我们为每个页面都设置一个进入和退出时的渐隐渐现的效果。我们可以先在根目录的 assets/css 下建立一个 main.css 文件。

```
.page-enter-active, .page-leave-active {
    transition: opacity 2s;
}
.page-enter, .page-leave-active {
    opacity: 0;
}
```

然后在 nuxt.config.js 里加入一个全局的 css 文件就可以了。

```
css:['assets/css/main.css'],
```

> 目前官方设定<nuxt-link>组件制作跳转链接才有动画

#### 制作一个详情页

修改 pages/books/index.vue

```
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
```

在 Nuxt.js 里面定义带参数的动态路由，需要创建对应的以下划线作为前缀的 Vue 文件 或 目录。也就是要么创建\_id.vue,要么创建\_id/index.vue

新建 pages/books/\_id.vue

```
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
```

#### 给整个网站添加 head

Nuxt.js 允许你在 nuxt.config.js 里定义应用所需的所有默认 meta 标签，在 head 字段里配置就可以了

新建 root/app.html

```
<!DOCTYPE html>
<html lang="en">
	<head>
		{{
			HEAD
		}}
	</head>

	<body>
		{{ APP }}
	</body>
</html>
```

nuxt 实际上已经将开发的一些需求都准备好了,使用 nuxt 进行 vue 服务端渲染能够极大的提高开发效率

#### 最后打包

静态应用部署

```
npm run generate
```

参考

- [iview](https://www.iviewui.com/components/modal)
- [官方文档](https://zh.nuxtjs.org/guide/views/#%E9%A1%B5%E9%9D%A2)
- [技术胖的 Nuxt.js](https://juejin.im/entry/5ab84d9b51882555770c7229)
