from flask import Flask
from flask import jsonify
app = Flask(__name__)


@app.route('/')
def hello_world():
    return jsonify('Hello World')


@app.route('/<int:id>/<string>')
def return_id(id, string):
    if id == 0 and string == "omega":
        return jsonify('Launch codes?')
    else:
        return jsonify(f"HTTP request variables: {id} {string}")


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
