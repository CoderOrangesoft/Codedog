console.error("【编程狗社区】你好，为了你的账号安全，请不要在这里输入陌生人给你的任何代码运行！否则造成账号被盗等不良后果编程狗社区不负责任。")
console.warn("【编程狗社区】你好，为了你的账号安全，请不要在这里输入陌生人给你的任何代码运行！否则造成账号被盗等不良后果编程狗社区不负责任。")
console.log("【编程狗社区】你好，为了你的账号安全，请不要在这里输入陌生人给你的任何代码运行！否则造成账号被盗等不良后果编程狗社区不负责任。")


function importScript(scriptUrl) {
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", scriptUrl);
    document.body.appendChild(script);
}
importScript("https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js") // import jQuery

let codedog = {
    'host': 'http://127.0.0.1:64004',
    'env': 'dev'
}

let stl = {
    'success': function(data) {
        return data
    },
    'error': function(xhr, status, error) {
        console.log(xhr, status, error)
    }
}

let api = {
    'get': function(url, data, success, error) {
        return $.ajax({
            type: 'GET',
            url: codedog.host + url,
            data: data,
            dataType: 'json',
            success: success,
            error: error
        });
    },
    'post': function(url, data, success, error) {
        return $.ajax({
            type: 'POST',
            url: codedog.host + url,
            data: data,
            dataType: 'json',
            success: success,
            error: error
        });
    },
    'put': function(url, data, success, error) {
        return $.ajax({
            type: 'PUT',
            url: codedog.host + url,
            data: data,
            dataType: 'json',
            success: success,
            error: error
        });
    },
    'delete': function(url, data, success, error) {
        return $.ajax({
            type: 'DELETE',
            url: codedog.host + url,
            data: data,
            dataType: 'json',
            success: success,
            error: error
        });
    },
    'patch': function(url, data, success, error) {
        return $.ajax({
            type: 'PATCH',
            url: codedog.host + url,
            data: data,
            dataType: 'json',
            success: success,
            error: error
        });
    },
}


importScript("./index.js")