Feature: The feature is to test the walletHub review page

  @firefox
  @enable
  Scenario: Test the review star hover of wallet hub page
    Given I navigate to page with url "http://wallethub.com/profile/test_insurance_company/"
    And I see the wallet hub profile page
    When I hover over the "4" th star in the wallethub profile page
    Then I see that "4" stars are lit in the wallethub profile page


  @firefox
  @enable
  Scenario: Test the Wallet hub page review page
    Given I navigate to page with url "http://wallethub.com/profile/test_insurance_company/"
    And I see the wallet hub profile page
    When I hover over the "4" th star in the wallethub profile page
    And I click on the "4" th star in the wallethub profile page
    Then I see the wallet hub review page
    And I select the value "Health" from the Policy drop-down in review page
    And I click on the "4" th star in the wallethub review page
    And I write a custom review in the wallethub review page
    When I click submit button in the review page
    Then I see facebook review result page with text "Your Test Insurance Company review has been posted."
    When I navigate to page with url "https://wallethub.com/profile/test_insurance_company/reviews/"
    Then I see the custom review comment in the wallethub profile page
