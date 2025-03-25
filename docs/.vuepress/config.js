module.exports = {
    home: true,
    title: 'DouyuEx',
    description: '一款增强斗鱼Web端体验的强大插件',
    head: [
        ['link', { rel: 'icon', href: `/logo.png`,}],
        ['meta', {
            name: 'keywords',
            content: 'douyu,douyuex,douyuEx,DouyuEx,斗鱼插件,斗鱼增强,斗鱼脚本,直播插件,斗鱼自动'
        }],
        ['style', {}, `.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}`],
        ['a', {
            href: `https://github.com/qianjiachun/douyuEx`,
            target: '_blank',
            class: `github-corner`,
        }, `<svg width="80" height="80" viewBox="0 0 250 250" style="fill:#64CEAA; color:#fff; position: fixed; top: 58px; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg>`],
    ],
    dest: './dist',
    // dest: 'E:/前端学习源码/钱嘉淳gitpage/qianjiachun.github.io/DouyuEx/html',
    // ga: '',
    // base: "/douyuex/", // gitee
    base: "/", // server
    evergreen: true,
    themeConfig: {
        nav: [{
                text: '主页',
                link: '/'
            }, // 根路径
            {
                text: '安装',
                link: '/install/web'
            },
            {
                text: '功能',
                link: '/introduction/'
            },
            {
                text: '更新内容',
                link: '/update/'
            },
            {
                text: '反馈建议',
                link: 'https://greasyfork.org/zh-CN/scripts/394497-douyuex-%E6%96%97%E9%B1%BC%E7%9B%B4%E6%92%AD%E9%97%B4%E5%A2%9E%E5%BC%BA%E6%8F%92%E4%BB%B6/feedback'
            },
            {
                text: '扩展',
                items: [
                    {
                        text: '斗鱼自动全屏最高画质',
                        link: 'https://greasyfork.org/zh-CN/scripts/396929'
                    },
                    {
                        text: 'Joysound视频音效增强',
                        link: 'https://greasyfork.org/zh-CN/scripts/439845'
                    },
                    {
                        text: 'Bilibili弹幕查询发送者',
                        link: 'https://greasyfork.org/zh-CN/scripts/434334'
                    },
                    {
                        text: 'CSGO饰品2D/3D对比',
                        link: 'https://greasyfork.org/zh-CN/scripts/427277'
                    },
                    // {
                    //     text: '斗鱼抽奖模拟器',
                    //     link: 'http://choujiang.55kai.top'
                    // },
                ]
            },
            {
                text: '友情链接',
                link: '/ad/'
            },
        ]
    },
    plugins: [
        'vuepress-plugin-baidu-autopush'
    ]
}
