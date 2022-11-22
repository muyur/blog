# my_blog

# 1. 本地搭建

1. 初始化

```powershell
1. 在一个文件夹下创建一个新文件 my_blog
mkdir my_blog
cd my_blog

2. 初始化
npm init -y

3. 安装VuePress为本地依赖
npm install -D vuepress

4. 创建第一篇文档
mkdir first_docs
echo '# Hello VuePress' > first_docs/README.md
```

1. 在 `package.json` 中添加一些 `scripts`

```json
"scripts": {
	"first_docs:dev": "vuepress dev first_docs",
	"first_docs:build": "vuepress build first_docs"
}
```

1. 在本地启动服务器

```powershell
npm run first_docs:dev
```

1. 运行成功后会出现 `[http://localhost:8080](http://localhost:8080)` 
    - 可能会出现乱码情况，需要把 `[README.md](http://README.md)` 的编码格式改为 `UTF-8`
    - 在 vscode 中右下角编码格式改为 `UTF-8`

# 2. 基础配置

1. 在 `first_docs` 中添加 `.vuepress` 目录，所有 VuePress 相关的文件都会被放在这里
2. 在 `.vuepress` 目录下添加 `config.js` 文件，配置网站的标题和描述，方便 SEO ，此时的目录结构

```lua
|-- first_docs',
	|-- README.md',
	|-- .vuepress',
		|-- config.js'
```

1. `config.js` 文件的内容

```jsx
module.exports = {
	title: '我的博客',
	description: '我的博客网站'
}
```

# 3. 添加导航栏

1. 在 `config.js` 中添加内容

```jsx
module.exports = {
	title: '我的博客',
	description: '我的博客网站',
	themeConfig: {
		nav: [
			{ text: "首页", link: "/" },
			{
				text: "我的博客",
				items: [
					{ text: "掘金", link: "https://juejin.cn/user/3756374523125022" },
					{ text: "Github", link: "https://github.com/muyur" }
				]
			}
		]
	}
}
```

# 4. 添加侧边栏

1. 添加多篇 `.md` 文档，文档的目录结构

```lua
|-- first_docs',
	|-- README.md',
	|-- .vuepress',
		|-- config.js'
	|-- handbook
		|-- 1.md
		|-- 2.md
```

1. 在 `config.js` 添加如下配置

```jsx
module.exports = {
	title: '我的博客',
	description: '我的博客网站',
	themeConfig: {
		nav: [],
		sidebar: [
			{
				title: "欢迎",
				path: "/",
				collapsable: false, // 是否折叠
				children: [{ title: "博客简介", path: "/" }],
			},
			{
				title: "基础篇",
				path: "/handbook/1",
				collapsable: true,
				children: [
					{ title: "第一篇", path: "/handbook/1" },
					{ title: "第二篇", path: "/handbook/2" },
				]
			}
		]
	}
}
```