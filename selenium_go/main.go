package main

import (
    "log"
    "time"

    "github.com/fedesog/webdriver"
    "github.com/tebeka/selenium"
)

func main() {
    chromeDriver := webdriver.NewChromeDriver("./chromedriver.exe")
    err := chromeDriver.Start()
    if err != nil {
        log.Println(err)
    }
    desired := webdriver.Capabilities{"Platform": "Windows"}
    required := webdriver.Capabilities{}
    session, err := chromeDriver.NewSession(desired, required)
    if err != nil {
        log.Println(err)
    }
    err = session.Url("http://golang.org")
    if err != nil {
        log.Println(err)
    }

    // 셀레니움 관련 제어 부분
    btn, _ := session.FindElement(selenium.ByCSSSelector, "#page > div > div.HomeContainer > section.HomeSection.Playground > div.Playground-controls > div > button")
    btn.Click()

    time.Sleep(60 * time.Second)
    session.Delete()
    chromeDriver.Stop()
}
