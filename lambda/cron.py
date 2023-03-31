"""sumary_line

Keyword arguments:
argument -- description
Return: return_description
"""
import requests
import feedparser


# Constants
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
    CRYPTO_CRYPTODAILY,
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

class Post:
  def __init__(self, title, date, summary, author, url, image=None, content=None):
    self.title = title
    self.date = date 
    self.summary = summary
    self.author = author
    self.url = url
    self.image = image
    self.content = content

# Get RSS FEEDS
def get_feeds():
  f = feedparser.parse(FEEDS["CRYPTO"][1])
  return f.entries[0]

# Create Post Object from feed item
def CreatePost(entry):
  c = entry["content"][0]["value"]
  c = c.replace("<img ", '<img style="display: none" ')
  return Post(
    entry["title"],
    entry["published"],
    entry["summary"],
    entry["author"],
    entry["link"],
    entry["media_content"][0]["url"],
    c
  )
  





def main():
  # Get rss feeds
  print(get_feeds())
  
  # Find new articles
  # parse articles
  # Batch add to database
  

if __name__ == "__main__":
  print("this is working")
  main()