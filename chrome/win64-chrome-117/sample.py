"""
Chrome + Driver from version 117
"""
import logging
from time import sleep
from selenium import webdriver
from selenium.webdriver.chrome.service import Service

from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException

#from selenium.webdriver.common.keys import Keys
#from selenium.webdriver import Keys, ActionChains


logging.basicConfig()
lg = logging.getLogger('selenium.app')
lg.setLevel(logging.DEBUG)

options = webdriver.ChromeOptions()

USER_FOLDER = 'rodri'
CHROMIUM_BINARY_PATH = 'chrome/win64/chrome-117/chromium-117/bin/chrome.exe'
EXECUTABLE_PATH = 'chrome/win64/chrome-117/chromedriver-117/chromedriver.exe'
# Set up ChromeOptions and specify the Chromium binary path
lg.info('starting ChromeOptions')
chrome_options = webdriver.ChromeOptions()
chrome_options.binary_location = CHROMIUM_BINARY_PATH
chrome_options.add_argument("--start-maximized") #maximizado

# SET USER (CAN COMMENT THIS OPTION)
chrome_options.add_argument(
    f'--user-data-dir=C:/Users/{USER_FOLDER}/AppData/Local/Google/Chrome/User Data/Default'
    )

lg.info('starting Service')
service = Service(executable_path=EXECUTABLE_PATH)

lg.info('constrinuindo driver')
driver = webdriver.Chrome(service=service,options=chrome_options)

lg.info('navegando...')
driver.get('https://www.google.com.br/search?q=Yeshua song')

