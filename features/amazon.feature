#encoding: utf-8
Feature: As a customer i want to test the amazon search engine

  Scenario: I want to test suggestions
    Given I have a browser website
    When I am on amazon
    Then I should see the search text box

    When I search for my given suggestion
    Then I see different results for my suggestions

    When I click on a result
    Then I see the result product page
