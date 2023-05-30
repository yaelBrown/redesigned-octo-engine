"""
  https://stackoverflow.com/questions/29916054/change-user-agent-for-selenium-web-driver
"""


# Chrome 
from selenium import webdriver
profile = webdriver.FirefoxProfile()
profile.set_preference("general.useragent.override", "whatever you want")
driver = webdriver.Firefox(profile)

# Firefox
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
opts = Options()
opts.add_argument("user-agent=whatever you want")

driver = webdriver.Chrome(chrome_options=opts)

# Check Agent
agent = driver.execute_script("return navigator.userAgent")
