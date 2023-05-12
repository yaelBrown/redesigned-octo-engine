import requests
import json
import feedparser
import mysql.connector

conn = mysql.connector.connect(
  host="127.0.0.1", 
  database="blog_db",
  user="admin",
  password="passwordpassword"
)
cur = conn.cursor()

class Post:
  def __init__(self, feed, post_type, site):
    self.title = feed.title
    self.summary = feed.summary
    self.author = feed.author
    self.content = feed.content[0].value
    self.image = feed.media_thumbnail[0]["url"]
    self.post_type = post_type

  def save(self):
    sql = "INSERT IGNORE INTO posts (title, summary, author, content, post_type, image) VALUES(%s, %s, %s, %s, %s, %s)"
    val = (self.title, self.summary, self.author, self.content, self.post_type, self.image)

    cur.execute(sql, val)
    conn.commit()

RSS_FEEDS = [
  {
    "site": "bitcoinmagazine",
    "url": "https://bitcoinmagazine.com/.rss/full/",
    "post_type": "crypto"
  },
  {
    "site": "cryptodaily",
    "url": "https://cryptodaily.co.uk/feed",
    "post_type": "crypto"
  }
]

temp = []
cnt = 1
for f in RSS_FEEDS:
  feed = feedparser.parse(f["url"])
  feed = feed["entries"]

  for feed_data in feed:

    temp_post = Post(feed_data, f['post_type'], f['site'])
    temp_post.save()
    print("inserted " + cnt + " post to db")
    cnt += 1
    # temp.append(Post(feed_data, f['post_type'], f['site']))

# print(len(temp))  
