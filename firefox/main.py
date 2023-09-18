from selenium import webdriver
from selenium.webdriver import FirefoxOptions
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
opts = FirefoxOptions()
#opts.add_argument('--headless')

#browser = webdriver.Firefox(options=opts)
binary_path = 'bin/firefox'
driver_path = 'driver/geckodriver'
#options = webdriver.FirefoxOptions()
#options.binary = binary
#options.set_headless(headless=True)
#FirefoxOptions options = new FirefoxOptions().setLegacy(true);
cap = DesiredCapabilities().FIREFOX
cap["marionette"] = False

driver = webdriver.Firefox(executable_path=driver_path)
driver.get('http://inventwithpython.com')

