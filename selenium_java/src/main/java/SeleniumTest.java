import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class SeleniumTest {
    //WebDriver
    private WebDriver driver;
    private WebElement element;
    private String url;

    //Properties
    public static String WEB_DRIVER_ID = "webdriver.chrome.driver";
    public static String WEB_DRIVER_PATH = "src/lib/chromedriver.exe";

    public static void main(String[] args) {

        SeleniumTest test = new SeleniumTest();
        test.oper();
    }

    public SeleniumTest() {
        //System Property SetUp
        System.setProperty(WEB_DRIVER_ID, WEB_DRIVER_PATH);

        //Driver SetUp
        ChromeOptions options = new ChromeOptions();
        options.setCapability("ignoreProtectedModeSettings", true);
        driver = new ChromeDriver(options);

        url = "https://www.naver.com";
    }

    public void oper() {
        try {
            //get방식으로 url 요청
            driver.get(url);

            // //로그인 버튼 클릭
            // element = driver.findElement(By.className("lg_local_btn"));
            // element.click();
            //
            // //아이디 입력
            // element = driver.findElement(By.id("id"));Thread.sleep(500);
            // element.sendKeys("아이디 입력 ex)test1234");
            //
            // //패스워드 입력
            // element = driver.findElement(By.id("pw"));
            // element.sendKeys("비밀번호 입력");
            //
            // //전송
            // element = driver.findElement(By.className("btn_global"));
            // element.submit();

            Thread.sleep(10000);

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            driver.close();
        }

    }
}
