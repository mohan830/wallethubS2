package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class WalletHubProfilePage extends BasePage {

    @FindBy(xpath = "//span[contains(text(),'Rating:')]")
    WebElement ratingHoverElement;

    @FindBy(xpath = "//div[@class='wh-rating-choices']//a")
    List<WebElement> ratingStarElements;

    @FindBy(xpath = "//div[@class='reviews']//div[@class='snippet snippet-first']//div[@class='review']")
    WebElement firstReviewSnippetElement;

    public List<WebElement> getRatingStarElements() {
        return ratingStarElements;
    }

    public WebElement getRatingStarElement(Integer starNo) {
        WebElement element = null;
        if (ratingStarElements != null && !ratingStarElements.isEmpty())
            element = ratingStarElements.get(starNo - 1);
        return element;
    }

    public WebElement getFirstReviewSnippetElement() {
        return firstReviewSnippetElement;
    }

    public WebElement getRatingHoverElement() {
        return ratingHoverElement;
    }

}
