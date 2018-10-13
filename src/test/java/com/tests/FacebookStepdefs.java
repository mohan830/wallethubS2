package com.tests;

import com.pages.FacebookHomePage;
import com.pages.FacebookLoginPage;
import com.services.WebDriverService;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.junit.runner.RunWith;
import org.openqa.selenium.Keys;
import org.openqa.selenium.support.PageFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.Date;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "/spring/Application-context.xml")
public class FacebookStepdefs {

    @Autowired
    WebDriverService webDriverService;

    FacebookLoginPage loginPage;
    FacebookHomePage homePage;



    @When("^I try to login using credentials \"([^\"]*)\" and \"([^\"]*)\"$")
    public void iTryToLoginUsingCredentialsAnd(String userName, String password) throws Throwable {
        loginPage = PageFactory.initElements(webDriverService.getDriver(), FacebookLoginPage.class);
        loginPage.getUserNameElement().clear();
        loginPage.getPasswordElement().clear();
        loginPage.getUserNameElement().sendKeys(userName);
        loginPage.getPasswordElement().sendKeys(password);
        loginPage.getLoginButtonElement().click();
        webDriverService.implicitWait(2l);

    }

    @Then("^I am able to view facebook home page$")
    public void iAmAbleToViewFacebookHomePage() throws Throwable {
        homePage = PageFactory.initElements(webDriverService.getDriver(), FacebookHomePage.class);
        Assert.assertNotNull(homePage.getComposePostButton());
    }

    @And("^I click on the post message field in facebook home page$")
    public void iClickOnThePostMessageFieldInFacebookHomePage() throws Throwable {
        webDriverService.explicitWaitUntilElementClickable(homePage.getComposePostButton());
        webDriverService.getActions().click(homePage.getComposePostButton()).perform();
        webDriverService.implicitWait(2l);
    }

    @And("^I am able to post the status message \"([^\"]*)\"$")
    public void iAmAbleToPostTheStatusMessage(String message) throws Throwable {
        String customMessge = message + " " + new Date().toString();
        webDriverService.explicitWaitUntilElementClickable(homePage.getDataContentElement());
        webDriverService.getActions().click(homePage.getDataContentElement()).perform();
        webDriverService.getActions().sendKeys(homePage.getDataContentElement(), customMessge).perform();
        webDriverService.implicitWait(2l);
        webDriverService.explicitWaitUntilElementClickable(homePage.getPostContentElement());
        homePage.getPostContentElement().click();
        webDriverService.implicitWait(2l);
    }


}
