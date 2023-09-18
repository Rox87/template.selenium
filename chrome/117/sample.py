"""
Chrome + Driver from version 117
"""
import logging
from time import sleep
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
#from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException



logging.basicConfig()
lg = logging.getLogger('selenium.app')
lg.setLevel(logging.DEBUG)

options = webdriver.ChromeOptions()


CHROMIUM_BINARY_PATH = 'chrome/117/chromium-117/bin/chrome.exe'
EXECUTABLE_PATH = 'chrome/117/chromedriver-117/chromedriver.exe'
# Set up ChromeOptions and specify the Chromium binary path
lg.info('starting ChromeOptions')
chrome_options = webdriver.ChromeOptions()
chrome_options.binary_location = CHROMIUM_BINARY_PATH
chrome_options.add_argument("--start-maximized") #maximizado
USER_FOLDER = 'rodri'
chrome_options.add_argument(
    f'--user-data-dir=C:/Users/{USER_FOLDER}/AppData/Local/Google/Chrome/User Data/Default'
    )

lg.info('starting Service')
service = Service(executable_path=EXECUTABLE_PATH)

lg.info('constrinuindo driver')
driver = webdriver.Chrome(service=service,options=chrome_options)

lg.info('navegando...')
driver.get('https://www.google.com.br/search?q=Jesus')
lg.info('loking for first_el')
RETRY = 500
while RETRY > 0:
    RETRY-=1
    try:
        first_el = driver.find_element(
            By.XPATH,
            '//*[@id="rso"]/div[1]/div/div/div/div[1]/div/div/span/a'
            )
        
        lg.info('find first_el')
        break
    except NoSuchElementException as e:
        print(e)
        sleep(0.1)

if RETRY > 0:
    lg.info('click in first_el')
    first_el.click()
else:
    raise NoSuchElementException('element "first_el" not found')
lg.info('Congrats!')

sleep(10)
