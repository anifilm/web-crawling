import requests
from bs4 import BeautifulSoup

webpage = requests.get("https://movie.naver.com/movie/bi/mi/mediaView.nhn?code=121094&mid=28731")
soup = BeautifulSoup(webpage.content, "html.parser")

print(soup.select(".poster img"))

