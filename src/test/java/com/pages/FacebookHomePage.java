package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class FacebookHomePage extends BasePage {


    @FindBy(xpath = "//div[@aria-label='Create a post']//span[contains(text(),'Compose Post')]")
    WebElement composePostButton;

    @FindBy(xpath = "//div[@data-contents='true']")
    WebElement dataContentElement;

    @FindBy(xpath = "//div[@role='feed']/div[1]")
    WebElement firstStatusMessageElement;

    @FindBy(xpath = "//div[@aria-label='Create a post']//button//span[contains(text(),'Post')]")
    WebElement postContentElement;

    public WebElement getFirstStatusMessageElement() {
        return firstStatusMessageElement;
    }

    public WebElement getComposePostButton() {
        return composePostButton;
    }

    public WebElement getDataContentElement() {
        return dataContentElement;
    }

    public WebElement getPostContentElement() {
        return postContentElement;
    }


}
