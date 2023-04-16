from flask import Flask
from flask_cors import CORS

from Feeds import FeedsService

fs = FeedsService()

app = Flask(__name__)

@app.route("/")
def hello():
  return "Hello, I am working"

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
