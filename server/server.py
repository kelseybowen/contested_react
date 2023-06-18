from flask_app import app
from flask_app.controllers import users_controller, contests_controller, items_controller
from flask_cors import CORS, cross_origin

api_cors_config = {
    "origins": ["http://localhost"]
}
CORS(app, resources={"/*": api_cors_config})

# @app.route("/testing")
# @cross_origin()
# def hello_world():
#     return "Hello, testing"


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
