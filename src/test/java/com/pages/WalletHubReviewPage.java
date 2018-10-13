package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class WalletHubReviewPage extends BasePage {

    @FindBy(xpath = "//div[@class='dropdown-list-new']")
    WebElement dropDownArrowElement;

    @FindBy(xpath="//div[@class='dropdown-title']/span[1]")
    WebElement dropDownChoice;

    @FindBy(xpath = "//span[contains(text(),'Please select your policy')]")
    WebElement dropDownTextELement;

    @FindBy(xpath = "//a[contains(text(),'Health')]")
    WebElement healthDropDownElement;

    @FindBy(xpath = "//span[@id='overallRating']/a")
    List<WebElement> reviewStarElements;

    @FindBy(xpath = "//textarea[@id='review-content']")
    WebElement reivewTextAreaElement;

    @FindBy(xpath = "//input[@value='Submit']")
    WebElement submitElement;


    public WebElement getDropDownTextELement() {
        return dropDownTextELement;
    }

    public List<WebElement> getReviewStarElements() {
        return reviewStarElements;
    }

    public WebElement getDropDownArrowElement() {
        return dropDownArrowElement;
    }

    public WebElement getDropDownChoice() {
        return dropDownChoice;
    }

    public WebElement getHealthDropDownElement() {
        return healthDropDownElement;
    }

    public WebElement getReivewTextAreaElement() {
        return reivewTextAreaElement;
    }

    public WebElement getSubmitElement() {
        return submitElement;
    }

}
