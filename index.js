let nowpage = window.location.href
let position = 'unknown'
if (nowpage.indexOf("index") != -1) {
    position = 'index'
    console.log("当前位置:首页")
} else if (nowpage.indexOf("course") != -1) {
    position = 'course'
    console.log("当前位置:课程页")
} else if (nowpage.indexOf("discover") != -1) {
    position = 'discover'
    console.log("当前位置:发现页")
} else if (nowpage.indexOf("team_detail") != -1) {
    position = 'team_detail'
    console.log("当前位置:团队详情页")
} else if (nowpage.indexOf("team.html") != -1) {
    position = 'team'
    console.log("当前位置:团队页")
} else if (nowpage.indexOf("community") != -1) {
    position = 'forum'
    console.log("当前位置:论坛页")
} else if (nowpage.indexOf("user") != -1) {
    let position = 'user'
    console.log("当前位置:用户详情页")
} else if (nowpage.indexOf("post") != -1) {
    position = 'post'
    console.log("当前位置:帖子页")
} else if (nowpage.indexOf("login") != -1) {
    position = 'login'
    console.log("当前位置:登录页")
}

if (position == 'unknown') {
    //在document的<main>标签中的内容改为“当前页面暂未开放”
    document.querySelector('main').innerHTML = `<h1>当前页面暂未开放</h1><br/><h2>${nowpage}</h2>`
} else if (position == 'index') {
    api.get('/api/banner', {}, function(data) {
        document.querySelector('main').querySelector('.banner').querySelector('.banner-content').innerHTML = `<h1>${data.title}</h1><p>${data.content}</p>`
        document.querySelector('main').querySelector('.banner').querySelector('img').src = data.img
    }, stl.error)
}