Feature: The feature is about the Facebook login and posting of status message

  @firefox
  @enable
  Scenario Outline: Test Facebook login and status update
    Given I navigate to page with url "https://www.facebook.com/"
    When I try to login using credentials "<username>" and "<password>"
    Then I am able to view facebook home page
    And I click on the post message field in facebook home page
    And I am able to post the status message "Hello world"
    Examples:
      | username | password |
      | username | password |
