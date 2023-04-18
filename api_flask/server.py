from flask import Flask
from flask_cors import CORS, cross_origin

from Feeds import FeedsService

fs = FeedsService()

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello():
  return "Hello, I am working"

@app.route("/data")
@cross_origin()
def retrieve_data():
  rs = fs.get_from_posts()
  return {
    "msg": "ok" if rs != False else "Error",
    "data": rs
  }

@app.route("/getFeeds")
def get_feeds():
  return fs.get_feeds_helper()

@app.route("/dbTest")
def test_db():
  return fs.test_db()

@app.route("/dbTestInsert")
def test_db_insert():
  return fs.test_db_insert()

if __name__ == "__main__":
  app.run(debug=True, port=5000, host='0.0.0.0')
