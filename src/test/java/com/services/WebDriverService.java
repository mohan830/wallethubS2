package com.services;

import org.openqa.selenium.Cookie;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.firefox.internal.ProfilesIni;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Set;
import java.util.concurrent.TimeUnit;

@Service
public class WebDriverService {

    private static final String COOKIE_FILE = "src/test/resources/cookies/cookies.txt";
    private static final String SEPERATOR = ";";
    private WebDriver driver;
    private WebDriverWait wait;
    private Actions actions;

    @Value("${firefox.driver.location}")
    String firefoxDriverLocation;

    @Value("${chrome.driver.location}")
    String chromeDriverLocation;

    @Value("${firefox.profile.name}")
    String firefoxProfileName;

    @Value("${chrome.profile.location}")
    String chromeProfileLocation;

    public WebDriver getDriver() {
        return driver;
    }

    public JavascriptExecutor getJSExecutor() {
        return (JavascriptExecutor) driver;
    }

    public WebDriverWait getWait() {
        return wait;
    }

    public Actions getActions() {
        return actions;
    }

    public void initDriver(String driverType) {
        if (driverType.equals("chrome")) {
            System.setProperty("webdriver.chrome.driver", chromeDriverLocation);
            ChromeOptions options = new ChromeOptions();
            options.addArguments("user-data-dir=" + chromeProfileLocation);
            driver = new ChromeDriver(options);
        }
        if (driverType.equals("firefox")) {
            System.setProperty("webdriver.gecko.driver", firefoxDriverLocation);
            FirefoxProfile firefoxProfile = new FirefoxProfile();
            FirefoxOptions firefoxOptions = new FirefoxOptions();
            ProfilesIni profilesIni = new ProfilesIni();
            firefoxOptions.setProfile(profilesIni.getProfile(firefoxProfileName));
            driver = new FirefoxDriver(firefoxOptions);
        }
    }

    public void copyCookiesFromDriver() {
        Set<Cookie> cookies = driver.manage().getCookies();
        BufferedWriter bufferedWriter = null;
        try {
            bufferedWriter = new BufferedWriter(new FileWriter(COOKIE_FILE));
            for (Cookie cookie : cookies) {
                StringBuilder cookieBuilder = new StringBuilder();
                cookieBuilder.append(cookie.getName()).append(SEPERATOR);
                cookieBuilder.append(cookie.getValue()).append(SEPERATOR);
                cookieBuilder.append(cookie.getDomain()).append(SEPERATOR);
                cookieBuilder.append(cookie.getPath()).append(SEPERATOR);
                if (cookie.getExpiry() != null)
                    cookieBuilder.append(cookie.getExpiry().toString()).append(SEPERATOR);
                else
                    cookieBuilder.append(SEPERATOR);
                cookieBuilder.append(cookie.isSecure()).append(SEPERATOR);
                cookieBuilder.append(cookie.isHttpOnly());
                bufferedWriter.write(cookieBuilder.toString());
            }
            bufferedWriter.close();
        } catch (IOException e) {
            //logging
        }

    }

    public void copyCookiesToDriver() {
        try {
            BufferedReader bufferedReader = new BufferedReader(new FileReader(COOKIE_FILE));
            String line;
            while ((line = bufferedReader.readLine()) != null) {
                String[] split = line.split(SEPERATOR);
                if (split.length != 7)
                    return;
                Date date = null;
                if (split[4] != null)
                    date = new SimpleDateFormat("EEE, dd MMM yyyy hh:mm:ss z").parse(split[4]);
                Cookie cookie = new Cookie(split[0], split[1], split[2], split[3], date, Boolean.parseBoolean(split[5]), Boolean.parseBoolean(split[6]));
                driver.manage().addCookie(cookie);
            }
            bufferedReader.close();
        } catch (FileNotFoundException e) {
            //logging
        } catch (IOException e) {
            //logging
        } catch (ParseException e) {
            //logging
        }
    }

    public void initExplicitWait(Long sec) {
        if (driver != null) {
            wait = new WebDriverWait(driver, sec);
        }
    }

    public void initActions() {
        if (driver != null) {
            actions = new Actions(driver);
        }
    }

    public void explicitWaitUntilElementClickable(WebElement element) {
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    public void explicitWaitUntilElementVisible(WebElement element) {
        wait.until(ExpectedConditions.visibilityOf(element));
    }

    public void implicitWait(Long time) {

        try {
            Thread.sleep(time * 1000);
        } catch (InterruptedException e) {
            //logging
        }
        //Implicit wait does not seems to working with some firefox profile.
        //        driver.manage().timeouts().implicitlyWait(time, TimeUnit.SECONDS);
    }

    public void closeDriver() {
        if (driver != null) {
            driver.close();
        }
    }
}
