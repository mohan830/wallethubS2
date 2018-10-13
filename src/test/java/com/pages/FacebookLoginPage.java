package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class FacebookLoginPage extends BasePage {

    @FindBy(xpath = "//form[@id=\"login_form\"]//input[@id=\"email\"]")
    WebElement userNameElement;

    @FindBy(xpath = "//form[@id=\"login_form\"]//input[@id=\"pass\"]")
    WebElement passwordElement;

    @FindBy(xpath = "//form[@id=\"login_form\"]//label[@id=\"loginbutton\"]")
    WebElement loginButtonElement;

    @FindBy(xpath = "//div[@aria-label='Create a post']//span[contains(text(),'Compose Post')]")
    WebElement composePostButton;

    @FindBy(xpath = "//textarea[@name='xhpc_message']")
    WebElement dataContentElement;

    @FindBy(xpath = "//div[@aria-label='Create a post']//button//span[contains(text(),'Post')]")
    WebElement postContentElement;


    public WebElement getUserNameElement() {
        return userNameElement;
    }

    public WebElement getPasswordElement() {
        return passwordElement;
    }

    public WebElement getLoginButtonElement() {
        return loginButtonElement;
    }

}
