
"""
Selenium + webdrive management
"""
import logging
from time import sleep

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
#from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from webdriver_manager.chrome import ChromeDriverManager

logging.basicConfig()
lg = logging.getLogger('selenium.app')
lg.setLevel(logging.DEBUG)

chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--start-maximized") #maximizado

USER_FOLDER = 'rodri'
chrome_options.add_argument(
    f'--user-data-dir=C:/Users/{USER_FOLDER}/AppData/Local/Google/Chrome/User Data/Default')

driver = webdriver.Chrome(
    service=Service(ChromeDriverManager().install()),
                          options=chrome_options)

lg.info('navegando...')
driver.get('https://www.google.com.br/search?q=Jeova Jireh')
RETRY = 500
while RETRY > 0:
    RETRY-=1
    try:
        song_el = driver.find_element(
            By.XPATH,
            '//*[@id="kp-wp-tab-overview"]/div[1]/div/div/div/div/div/div[2]/h3/div/span/a'
            )

        lg.info('find sond element')
        break
    except NoSuchElementException as e:
        print(e)
        sleep(0.1)

if RETRY > 0:
    lg.info('click in song element')
    song_el.click()
else:
    raise NoSuchElementException('song element not found')


sleep(1)
RETRY = 500
while RETRY > 0:
    RETRY-=1
    try:
        video_el = driver.find_element(
            By.XPATH,
            '//*[@id="movie_player"]/div[36]/div[2]/div[1]/button'
            )

        lg.info('find sond element')
        break
    except NoSuchElementException as e:
        print(e)
        sleep(0.1)

if RETRY > 0:
    lg.info('click in song element')
    video_el.click()
else:
    raise NoSuchElementException('song element not found')
lg.info('Congrats^2!')


sleep(1000)
