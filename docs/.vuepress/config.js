module.exports = {
    title: '基伴',
    description: '基金理财记账的好伙伴！',
    theme: 'antdocs',
    // 释出目录
    dest: 'docs/public',
    plugins: {
        "vuepress-plugin-auto-sidebar": {}
    },
    themeConfig: {
        nav: [
            {text: '首页', link: '/'},
            {text: '使用指南', link: '/guide/'},
            {text: '更新日志', link: '/log/'},
            {text: '导入导出', link: '/bill/'},
            {text: '赞赏', link: '/donate/'},
            {text: '关于', link: '/about/'},
            {
                text: '使用必读',
                items: [
                    {text: '反馈吐槽', link: '/feedback/'},
                    {text: '隐私政策', link: '/privacy/'},
                    {text: '常见问题', link: '/faq/'},
                ]
              }
        ],
        sidebar: [
            '/',
        ],
        lastUpdated: true,
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'imoyao/fmp',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'docs',
        // 默认是 false, 设置为 true 来启用
        editLinks: true
    }
}