from selenium import webdriver
from bs4 import BeautifulSoup

options = webdriver.ChromeOptions()
options.add_argument('window-size=1920,1080')

driver = webdriver.Chrome('chromedriver.exe')
driver.implicitly_wait(3)

driver.get('https://namu.wiki/RecentChanges')
html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
article = soup.select('app > div > div:nth-child(2) > article > div > table')
print(article)
#for a in article:
#    print(a.text.strip())

driver.close()
#driver.quit()
