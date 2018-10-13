package com.tests;

import com.services.WebDriverService;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "/spring/Application-context.xml")
public class BaseStep {

    @Autowired
    WebDriverService webDriverService;

    @Before("@firefox")
    public void setupFireFox() {
        webDriverService.initDriver("firefox");
        webDriverService.initExplicitWait(10l);
        webDriverService.initActions();
    }


    @Before("@chrome")
    public void setupChrome() {
        webDriverService.initDriver("chrome");
        webDriverService.initExplicitWait(10l);
        webDriverService.initActions();
    }

    @After
    public void tearDown() {
        webDriverService.closeDriver();
    }


    @And("^I navigate to page with url \"([^\"]*)\"$")
    public void iNavigateToPageWithUrl(String url) throws Throwable {
        webDriverService.getDriver().navigate().to(url);
        webDriverService.implicitWait(2l);
    }
}
