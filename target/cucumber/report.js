$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("facebook.feature");
formatter.feature({
  "line": 1,
  "name": "The feature is about the Facebook login and posting of status message",
  "description": "",
  "id": "the-feature-is-about-the-facebook-login-and-posting-of-status-message",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Test Facebook login and status update",
  "description": "",
  "id": "the-feature-is-about-the-facebook-login-and-posting-of-status-message;test-facebook-login-and-status-update",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@firefox"
    },
    {
      "line": 4,
      "name": "@enable"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I navigate to page with url \"https://www.facebook.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I try to login using credentials \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am able to view facebook home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I click on the post message field in facebook home page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I am able to post the status message \"Hello world\"",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "the-feature-is-about-the-facebook-login-and-posting-of-status-message;test-facebook-login-and-status-update;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "the-feature-is-about-the-facebook-login-and-posting-of-status-message;test-facebook-login-and-status-update;;1"
    },
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "the-feature-is-about-the-facebook-login-and-posting-of-status-message;test-facebook-login-and-status-update;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 18769490794,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Test Facebook login and status update",
  "description": "",
  "id": "the-feature-is-about-the-facebook-login-and-posting-of-status-message;test-facebook-login-and-status-update;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@firefox"
    },
    {
      "line": 4,
      "name": "@enable"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I navigate to page with url \"https://www.facebook.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I try to login using credentials \"username\" and \"password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am able to view facebook home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I click on the post message field in facebook home page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I am able to post the status message \"Hello world\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.facebook.com/",
      "offset": 29
    }
  ],
  "location": "BaseStep.iNavigateToPageWithUrl(String)"
});
formatter.result({
  "duration": 7137793398,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 34
    },
    {
      "val": "password",
      "offset": 49
    }
  ],
  "location": "FacebookStepdefs.iTryToLoginUsingCredentialsAnd(String,String)"
});
formatter.result({
  "duration": 8116993941,
  "status": "passed"
});
formatter.match({
  "location": "FacebookStepdefs.iAmAbleToViewFacebookHomePage()"
});
formatter.result({
  "duration": 6569482,
  "status": "passed"
});
formatter.match({
  "location": "FacebookStepdefs.iClickOnThePostMessageFieldInFacebookHomePage()"
});
formatter.result({
  "duration": 10159331763,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: Proxy element for: DefaultElementLocator \u0027By.xpath: //div[@aria-label\u003d\u0027Create a post\u0027]//span[contains(text(),\u0027Compose Post\u0027)]\u0027 (tried for 10 second(s) with 500 MILLISECONDS interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\n\tat com.services.WebDriverService.explicitWaitUntilElementClickable(WebDriverService.java:143)\n\tat com.tests.FacebookStepdefs.iClickOnThePostMessageFieldInFacebookHomePage(FacebookStepdefs.java:52)\n\tat ✽.And I click on the post message field in facebook home page(facebook.feature:9)\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: //div[@aria-label\u003d\u0027Create a post\u0027]//span[contains(text(),\u0027Compose Post\u0027)]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027mohan-Inspiron-15-3552\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.15.0-36-generic\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 62.0.3, javascriptEnabled: true, moz:accessibilityChecks: false, moz:geckodriverVersion: 0.22.0, moz:headless: false, moz:processID: 8943, moz:profile: /tmp/rust_mozprofile.eq6el9..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, platformVersion: 4.15.0-36-generic, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: 0358db32-44a3-4adc-9f83-8186dca55252\n*** Element info: {Using\u003dxpath, value\u003d//div[@aria-label\u003d\u0027Create a post\u0027]//span[contains(text(),\u0027Compose Post\u0027)]}\n\tat sun.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy25.isDisplayed(Unknown Source)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:315)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:44)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:301)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:298)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:686)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:682)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\n\tat com.services.WebDriverService.explicitWaitUntilElementClickable(WebDriverService.java:143)\n\tat com.tests.FacebookStepdefs.iClickOnThePostMessageFieldInFacebookHomePage(FacebookStepdefs.java:52)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:264)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:153)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:124)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:200)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:153)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello world",
      "offset": 38
    }
  ],
  "location": "FacebookStepdefs.iAmAbleToPostTheStatusMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1673553675,
  "status": "passed"
});
formatter.uri("walletHub.feature");
formatter.feature({
  "line": 1,
  "name": "The feature is to test the walletHub review page",
  "description": "",
  "id": "the-feature-is-to-test-the-wallethub-review-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13213106821,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Test the review star hover of wallet hub page",
  "description": "",
  "id": "the-feature-is-to-test-the-wallethub-review-page;test-the-review-star-hover-of-wallet-hub-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@firefox"
    },
    {
      "line": 4,
      "name": "@enable"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I navigate to page with url \"http://wallethub.com/profile/test_insurance_company/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I see the wallet hub profile page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I hover over the \"4\" th star in the wallethub profile page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I see that \"4\" stars are lit in the wallethub profile page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://wallethub.com/profile/test_insurance_company/",
      "offset": 29
    }
  ],
  "location": "BaseStep.iNavigateToPageWithUrl(String)"
});
formatter.result({
  "duration": 8819653070,
  "status": "passed"
});
formatter.match({
  "location": "WalletHubStepdefs.iSeeTheWalletHubProfilePage()"
});
formatter.result({
  "duration": 2084751880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "WalletHubStepdefs.iHoverOverTheThStarInTheWallethubProfilePage(Integer)"
});
formatter.result({
  "duration": 6536535320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 12
    }
  ],
  "location": "WalletHubStepdefs.iSeeThatStarsAreLitInTheWallethubProfilePage(Integer)"
});
formatter.result({
  "duration": 500117797,
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertTrue(Assert.java:52)\n\tat com.tests.WalletHubStepdefs.iSeeThatStarsAreLitInTheWallethubProfilePage(WalletHubStepdefs.java:50)\n\tat ✽.Then I see that \"4\" stars are lit in the wallethub profile page(walletHub.feature:9)\n",
  "status": "failed"
});
formatter.after({
  "duration": 1574199527,
  "status": "passed"
});
formatter.before({
  "duration": 15477067109,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Test the Wallet hub page review page",
  "description": "",
  "id": "the-feature-is-to-test-the-wallethub-review-page;test-the-wallet-hub-page-review-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@firefox"
    },
    {
      "line": 13,
      "name": "@enable"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I navigate to page with url \"http://wallethub.com/profile/test_insurance_company/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I see the wallet hub profile page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I hover over the \"4\" th star in the wallethub profile page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on the \"4\" th star in the wallethub profile page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I see the wallet hub review page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I select the value \"Health\" from the Policy drop-down in review page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on the \"4\" th star in the wallethub review page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I write a custom review in the wallethub review page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click submit button in the review page",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I see facebook review result page with text \"Your Test Insurance Company review has been posted.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I navigate to page with url \"https://wallethub.com/profile/test_insurance_company/reviews/\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I see the custom review comment in the wallethub profile page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://wallethub.com/profile/test_insurance_company/",
      "offset": 29
    }
  ],
  "location": "BaseStep.iNavigateToPageWithUrl(String)"
});
formatter.result({
  "duration": 7323524411,
  "status": "passed"
});
formatter.match({
  "location": "WalletHubStepdefs.iSeeTheWalletHubProfilePage()"
});
formatter.result({
  "duration": 2061410354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "WalletHubStepdefs.iHoverOverTheThStarInTheWallethubProfilePage(Integer)"
});
formatter.result({
  "duration": 6522144557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "WalletHubStepdefs.iClickOnTheThStarInTheWallethubProfilePage(Integer)"
});
formatter.result({
  "duration": 4282242742,
  "status": "passed"
});
formatter.match({
  "location": "WalletHubStepdefs.iSeeTheWalletHubReviewPage()"
});
formatter.result({
  "duration": 2008521779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Health",
      "offset": 20
    }
  ],
  "location": "WalletHubStepdefs.iSelectTheValueFromThePolicyDropDownInReviewPage(String)"
});
formatter.result({
  "duration": 6436400966,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "WalletHubStepdefs.iClickOnTheThStarInTheWallethubReviewPage(Integer)"
});
formatter.result({
  "duration": 4251151136,
  "status": "passed"
});
formatter.match({
  "location": "WalletHubStepdefs.iWriteACustomReviewInTheWallethubReviewPage()"
});
formatter.result({
  "duration": 9787796042,
  "status": "passed"
});
formatter.match({
  "location": "WalletHubStepdefs.iClickSubmitButtonInTheReviewPage()"
});
formatter.result({
  "duration": 2286820513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Test Insurance Company review has been posted.",
      "offset": 45
    }
  ],
  "location": "WalletHubStepdefs.iSeeFacebookReviewResultPageWithText(String)"
});
formatter.result({
  "duration": 5100058416,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://wallethub.com/profile/test_insurance_company/reviews/",
      "offset": 29
    }
  ],
  "location": "BaseStep.iNavigateToPageWithUrl(String)"
});
formatter.result({
  "duration": 7777801893,
  "status": "passed"
});
formatter.match({
  "location": "WalletHubStepdefs.iSeeTheCustomReviewCommentInTheWallethubProfilePage()"
});
formatter.result({
  "duration": 61715575,
  "status": "passed"
});
formatter.after({
  "duration": 1469116251,
  "status": "passed"
});
});