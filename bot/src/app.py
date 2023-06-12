"""
https://www.youtube.com/watch?v=b5jt2bhSeXs&list=PLzMcBGfZo4-n40rB1XaJ0ak1bemvlqumQ&index=2
"""


from selenium import webdriver
from selenium.webdriver.support.wait import WebDriverWait

driver = webdriver.Chrome()
driver.get("https://toolbox.googleapps.com/apps/browserinfo/")

# Set timezone
"""
  driver = webdriver.Chrome()
  tz_params = {'timezoneId': 'America/New_York'}
  driver.execute_cdp_cmd('Emulation.setTimezoneOverride', tz_params)
"""

# Set User Agent
"""
  opts = Options()
  opts.add_argument("user-agent=whatever you want")

  driver = webdriver.Chrome(chrome_options=opts)
"""

# Set os time with python (must do it from root)
"""
  import subprocess

  # Replace 'YYYY-MM-DD HH:MM:SS' with the desired date and time
  new_time = '2023-06-11 12:34:56'

  # Execute the 'date' command with sudo to change the system clock
  command = ['sudo', 'date', '-s', new_time]

  # Run the command using subprocess
  subprocess.run(command, check=True)
"""


def wait_until_page_loaded(driver):
  return driver.execute_script("return document.readyState") == "complete"

try:
  WebDriverWait(driver, 5).until(wait_until_page_loaded)
  print("page finally loaded")
except Exception as e:
  print(f"Page did not finish loading.\n{e}")

finally:
  driver.close() 