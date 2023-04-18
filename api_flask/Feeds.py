import requests
import feedparser
import datetime
import psycopg2
import json
import mysql.connector

conn = mysql.connector.connect(
  host="127.0.0.1",
  database="blog_db",
  user="admin",
  password="passwordpassword"
)
cur = conn.cursor()

class FeedsService:
  MEM = {
    "content": [],
    "last_updated": ""
  }

  @classmethod
  def mem_update_content(self, ct):
    self.MEM["content"] = ct

  @classmethod
  def mem_update_last_updated(self, lu):
    self.MEM["last_updated"] = lu

  @classmethod
  def test_db(self):
    cur.execute("SELECT now()")
    res = cur.fetchall()
    conn.commit()
    
    return str(res)
  
  @classmethod
  def test_db_insert(self):
    def _entry_to_model(entry):
      return {
        "title": entry['title'] if entry['title'] else "",
        "summary": entry['summary'] if entry['summary'] else "",
        "tags": entry['tags'] if entry['tags'] else "",
        "author": entry['author'] if entry['author'] else "",
        "published": entry['published'] if entry['published'] else "",
        "content": entry['content'][0]['value'] if entry['content'][0]['value'] else "",
        "media_thumbnail": entry['media_thumbnail'][0]["url"] if entry['media_thumbnail'][0]["url"] else "",
        "media_content": entry['media_content'][0] if entry['media_content'][0] else "",
      }
    
    f = feedparser.parse("https://www.biggerpockets.com/blog/feed")
    
    f1 = f["entries"][0]
    f2 = f["entries"][1]

    f1 = json.dumps(f1)
    f2 = json.dumps(f2)

    _query = "INSERT INTO posts (content) VALUES(%s)"

    v_lst = [
      (json.dumps("three"),),
      (json.dumps("two"),),
    ]

    for v in v_lst:
      cur.execute(_query, v)
      conn.commit()
    
    cur.close()
    conn.close()
    
    return f
    
  @classmethod
  def get_feeds_helper(self):
    CRYPTO_BITCOINMAGAZINE = "https://bitcoinmagazine.com/.rss/full/"
    CRYPTO_COINDESK = "https://www.coindesk.com/arc/outboundfeeds/rss/"
    CRYPTO_COINTELEGRAPH = "https://cointelegraph.com/rss"
    CRYPTO_CRYPTODAILY = "https://cryptodaily.co.uk/feed"
    CRYPTO_CRYPTONEWS = "https://crypto.news/feed/"
    CRYPTO_DECRYPT = "https://decrypt.co/feed"
    CRYPTO_LOGROCKET = "https://blog.logrocket.com/tag/web3/feed/"
    CRYPTO_NEXTROPE = "https://nextrope.com/feed/"
    CRYPTO_WEB3LABS = "blog.web3labs.com/rss.xml"
    CRYPTO_WEB3FOUNDATION = "https://medium.com/feed/web3foundation"

    MONEY_BIGGERPOCKETS = "https://www.biggerpockets.com/blog/feed"
    MONEY_COLLEGEINVESTOR = "https://thecollegeinvestor.com/feed/"
    MONEY_ENTERPRISING = "https://blogs.cfainstitute.org/investor/feed/"
    MONEY_ENTREPRENEUR = "https://www.entrepreneur.com/topic/passive-income.rss"
    MONEY_FEEDBURNER = "https://feeds.feedburner.com/smartpassiveincome"
    MONEY_FT = "https://www.ft.com/business-education?format=rss"
    MONEY_INVESTING = "https://www.investing.com/rss/news.rss"
    MONEY_NERDWALLET = "https://investors.nerdwallet.com/rss/news-releases.xml"
    MONEY_NERDWALLETEVENTS = "https://investors.nerdwallet.com/rss/events.xml"
    MONEY_VALUEWALK = "https://www.valuewalk.com/feed"
    MONEY_WSJ = "https://feeds.a.dj.com/rss/RSSMarketsMain.xml"

    FEEDS = {
      "CRYPTO": [
        CRYPTO_BITCOINMAGAZINE,
        CRYPTO_COINDESK,
        CRYPTO_COINTELEGRAPH,
        # CRYPTO_CRYPTODAILY,
        CRYPTO_CRYPTONEWS,
        CRYPTO_DECRYPT,
        CRYPTO_LOGROCKET,
        CRYPTO_NEXTROPE,
        CRYPTO_WEB3LABS,
        CRYPTO_WEB3FOUNDATION
      ],
      "MONEY": [
        MONEY_BIGGERPOCKETS,
        MONEY_COLLEGEINVESTOR,
        MONEY_ENTERPRISING,
        MONEY_ENTREPRENEUR,
        MONEY_FEEDBURNER,
        MONEY_FT,
        MONEY_INVESTING,
        MONEY_NERDWALLET,
        MONEY_NERDWALLETEVENTS,
        MONEY_VALUEWALK,
        MONEY_WSJ
      ]
    }

    temp_crypto_content = []
    print("Getting Crypto Content")
    cnt = 1
    crypto_url_len = len(FEEDS["CRYPTO"])
    for cf in FEEDS["CRYPTO"]:
      print(f"{cnt}/{crypto_url_len}")
      pf = feedparser.parse(cf)
      temp_crypto_content = temp_crypto_content + pf["entries"]
      cnt += 1

    crypto_cnt = len(temp_crypto_content)
    print(f"crypto content length: {crypto_cnt}")

    temp_money_content = []
    print("Getting Money Content")
    cnt = 1
    money_url_len = len(FEEDS["MONEY"])
    for mf in FEEDS["MONEY"]:
      print(f"{cnt}/{money_url_len}")
      pf = feedparser.parse(mf)
      temp_money_content = temp_money_content + pf["entries"]
      cnt += 1

    money_cnt = len(temp_money_content)
    print(f"money content length: {money_cnt}")

    print("Saving to database")
    _query = "INSERT IGNORE INTO posts (CONTENT, TITLE) VALUES(%s, %s)"
    content_values = temp_money_content + temp_crypto_content
    
    del temp_crypto_content
    del temp_money_content
    
    cnt = 1
    for cv in content_values:
      print(f"{cnt}/{len(content_values)}")
      cur.execute(_query, (json.dumps(cv), cv["title"]))
      conn.commit()
      cnt += 1

    cur.close()
    conn.close()

    print("Creating output response")
    out = {
      "crypto_count": crypto_cnt,
      "money_count": money_cnt,
      "total_count": (crypto_cnt + money_cnt),
      "last_updated": self.MEM["last_updated"]
    }

    return out
  
  @classmethod
  def get_from_posts(self):
    try: 
      _query = "SELECT id, content FROM posts ORDER BY id DESC LIMIT 350"
      cur.execute(_query)
      result_set = cur.fetchall()

      return result_set
    except Exception as e:
      print(e)
      return False


  

    
