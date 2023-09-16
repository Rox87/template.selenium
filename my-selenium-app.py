from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import logging
from time import sleep

logging.basicConfig()
lg = logging.getLogger('selenium.app')
lg.setLevel(logging.DEBUG)

options = webdriver.ChromeOptions()


chromium_binary_path = 'chromium-117/bin/chrome.exe'

# Set up ChromeOptions and specify the Chromium binary path
lg.info('starting ChromeOptions')
chrome_options = webdriver.ChromeOptions()
chrome_options.binary_location = chromium_binary_path
chrome_options.add_argument("--start-maximized") #maximizado
chrome_options.add_argument('--user-data-dir=C:/Users/Heloani/AppData/Local/Google/Chrome/User Data/Default')   #usuario lagado
lg.info('starting Service')
service = Service(executable_path='chromedriver-117/chromedriver.exe')
lg.info('constrinuindo driver')
driver = webdriver.Chrome(service=service,options=chrome_options)
lg.info('navegando...')
driver.get('https://www.google.com.br/search?q=Jesus')
lg.info('loking for first_el')
retry = 500
while retry > 0:
    retry-=1
    try:
        first_el = driver.find_element(By.XPATH,'/html/body/div[5]/div/div[13]/div[2]/div[2]/div[2]/div/div/div[1]/div/div/div/div[1]/div/div/span/a')
        lg.info('find first_el')
        break
    except:
        sleep(0.1)

if retry > 0:
    lg.info('click in first_el')
    first_el.click()
else:
    raise Exception('element "first_el" not found')
lg.info('Congrats!')
sleep(10)