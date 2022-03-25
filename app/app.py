from flask import Flask
from flask import jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
cors = CORS(app)

@app.route('/', methods=["GET"])
def hello_world():
    response = jsonify("Hello World")
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/<int:id>/<string>')
def return_id(id, string):
    if id == 0 and string == "omega":
        return jsonify('Launch codes?')
    else:
        return jsonify(f"HTTP request variables: {id} {string}")


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
