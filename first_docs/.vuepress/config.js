module.exports = {
  title: '木鱼啊的博客',
  description: '木鱼啊的博客网站',
  base: '/blog/',
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "我的",
        items: [
          { text: "掘金", link: "https://juejin.cn/user/3756374523125022" },
          { text: "Github", link: "https://github.com/muyur" },
          { text: "Gitee", link: "https://gitee.com/hongzida1" }
        ]
      }
    ],
    sidebar: [
      {
        title: "关于木鱼啊",
        path: "/about_me/introduction",
        collapsable: false,
        children: [
          {
            title: "自我介绍", path: "/about_me/introduction"
          }
        ]
      },
      {
        title: "木鱼啊的爱好",
        path: "/handbook/1",
        collapsable: true,
        children: [
          { title: "关于运动", path: "/handbook/1" },
          { title: "关于游戏", path: "/handbook/2" },
          { title: "关于博客的搭建", path: "/handbook/my_blog" }
        ]
      }
    ]
  }
}