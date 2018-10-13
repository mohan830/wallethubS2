package com.tests;

import com.pages.WalletHubProfilePage;
import com.pages.WalletHubReviewPage;
import com.services.WebDriverService;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.NoSuchElementException;

public class WalletHubStepdefs {

    @Autowired
    WebDriverService webDriverService;

    private static final String HOVER = "hover";
    public static String CUSTOM_REVIEW_COMMENT = "Review comment sample for testing. Review comment sample for testing. Review comment sample for testing." +
            " Review comment sample for testing. Review comment sample for testing.Review comment sample for testing.Review comment sample for testing.";

    WalletHubProfilePage profilePage;
    WalletHubReviewPage reviewPage;

    @When("^I hover over the \"([^\"]*)\" th star in the wallethub profile page$")
    public void iHoverOverTheThStarInTheWallethubProfilePage(Integer startPosition) throws Throwable {
        webDriverService.implicitWait(2l);
        webDriverService.getActions().moveToElement(profilePage.getRatingHoverElement()).perform();
        webDriverService.implicitWait(2l);
        webDriverService.getActions().moveToElement(profilePage.getRatingStarElement(startPosition)).perform();
        webDriverService.implicitWait(2l);

    }

    @Then("^I see that \"([^\"]*)\" stars are lit in the wallethub profile page$")
    public void iSeeThatStarsAreLitInTheWallethubProfilePage(Integer startCount) throws Throwable {
        for (int i = 0; i <= (profilePage.getRatingStarElements().size()-1); i++) {
            if(i<=(startCount-1)){
                //Checking if starts upto start count is lit
                Assert.assertTrue(profilePage.getRatingStarElements().get(i).getAttribute("class").contains(HOVER));
            }
            if(i>(startCount-1)){
                //Checking if starts beyound the start count is not lit
                Assert.assertTrue(!profilePage.getRatingStarElements().get(i).getAttribute("class").contains(HOVER));
            }
        }
    }

    @And("^I click on the \"([^\"]*)\" th star in the wallethub profile page$")
    public void iClickOnTheThStarInTheWallethubProfilePage(Integer starPosition) throws Throwable {
        webDriverService.implicitWait(2l);
        webDriverService.getActions().click(profilePage.getRatingStarElement(starPosition)).perform();
        webDriverService.implicitWait(2l);
    }

    @And("^I select the value \"([^\"]*)\" from the Policy drop-down in review page$")
    public void iSelectTheValueFromThePolicyDropDownInReviewPage(String dropDownOption) throws Throwable {
        webDriverService.implicitWait(2l);
        webDriverService.getJSExecutor().executeScript("arguments[0].className='dropdown-list-new opened';", reviewPage.getDropDownArrowElement());
        webDriverService.implicitWait(2l);
        if (dropDownOption.equals("Health"))
            reviewPage.getHealthDropDownElement().click();
        webDriverService.implicitWait(2l);

    }

    @And("^I click submit button in the review page$")
    public void iClickSubmitButtonInTheReviewPage() throws Throwable {
        webDriverService.explicitWaitUntilElementClickable(reviewPage.getSubmitElement());
        webDriverService.getJSExecutor().executeScript("arguments[0].click();",
                reviewPage.getSubmitElement());
        webDriverService.implicitWait(2l);
    }

    @And("^I write a custom review in the wallethub review page$")
    public void iWriteACustomReviewInTheWallethubReviewPage() throws Throwable {
        reviewPage.getReivewTextAreaElement().clear();
        webDriverService.getActions().click(reviewPage.getReivewTextAreaElement()).perform();
        webDriverService.getActions().sendKeys(reviewPage.getReivewTextAreaElement(), CUSTOM_REVIEW_COMMENT).perform();
        webDriverService.implicitWait(2l);

    }

    @And("^I see the wallet hub profile page$")
    public void iSeeTheWalletHubProfilePage() throws Throwable {
        webDriverService.implicitWait(2l);
        profilePage = PageFactory.initElements(webDriverService.getDriver(), WalletHubProfilePage.class);
        List<WebElement> ratingStarElements = profilePage.getRatingStarElements();
        Assert.assertNotNull(ratingStarElements);
        Assert.assertEquals(5, ratingStarElements.size());
    }

    @Then("^I see the wallet hub review page$")
    public void iSeeTheWalletHubReviewPage() throws Throwable {
        webDriverService.implicitWait(2l);
        reviewPage = PageFactory.initElements(webDriverService.getDriver(), WalletHubReviewPage.class);
        WebElement reivewTextAreaElement = reviewPage.getReivewTextAreaElement();
        Assert.assertNotNull(reivewTextAreaElement);

    }

    @Then("^I see the custom review comment in the wallethub profile page$")
    public void iSeeTheCustomReviewCommentInTheWallethubProfilePage() throws Throwable {
        profilePage = PageFactory.initElements(webDriverService.getDriver(), WalletHubProfilePage.class);
        WebElement firstReiviewSnippetElement = profilePage.getFirstReviewSnippetElement();
        Assert.assertNotNull(firstReiviewSnippetElement);
        Assert.assertEquals(CUSTOM_REVIEW_COMMENT, firstReiviewSnippetElement.getText());
    }

    @And("^I click on the \"([^\"]*)\" th star in the wallethub review page$")
    public void iClickOnTheThStarInTheWallethubReviewPage(Integer starPosition) throws Throwable {
        webDriverService.implicitWait(2l);
        webDriverService.getActions().click(reviewPage.getReviewStarElements().get(starPosition - 1)).perform();
        webDriverService.implicitWait(2l);
    }

    @Then("^I see facebook review result page with text \"([^\"]*)\"$")
    public void iSeeFacebookReviewResultPageWithText(String message) throws Throwable {
        boolean elemenPresent = true;
        try {
            webDriverService.implicitWait(5l);
            String text = webDriverService.getDriver().findElement(By.xpath("//h1[contains(text(),'Awesome!')]//span")).getText();
            Assert.assertEquals(message, text);
        } catch (NoSuchElementException e) {
            elemenPresent = false;
        }
        Assert.assertTrue(elemenPresent);
    }
}
