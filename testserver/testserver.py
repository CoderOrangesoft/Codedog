from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/api/banner', methods=['GET'])
def banner():
    return jsonify({'title': '编程狗社区开放测试', 'content': '欢迎来到编程狗社区，这里是编程狗社区的测试版，欢迎大家提出宝贵意见，共同打造一个更好的编程社区！','img': 'https://via.placeholder.com/250'})

@app.route('/api/ide', methods=['GET'])
def ide():
    return jsonify({'puppy': 'https://via.placeholder.com/100', 'webweb': 'https://via.placeholder.com/100','henweb': 'https://via.placeholder.com/100', 'jingwei': 'https://via.placeholder.com/100'})


if __name__ == '__main__':
    app.run(debug=True,port=64004) # run the server in debug mode