from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from time import sleep

options = webdriver.ChromeOptions()


chromium_binary_path = 'chromium-117/bin/chrome.exe'

# Set up ChromeOptions and specify the Chromium binary path
chrome_options = webdriver.ChromeOptions()
chrome_options.binary_location = chromium_binary_path
chrome_options.add_argument("--start-maximized") #maximizado
chrome_options.add_argument('--user-data-dir=C:/Users/Heloani/AppData/Local/Google/Chrome/User Data/Default')   #usuario lagado

service = Service(executable_path='chromedriver-117/chromedriver.exe')

driver = webdriver.Chrome(service=service,options=chrome_options)

driver.get('https://www.google.com.br/')

sleep(10)