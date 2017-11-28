Feature:
  In order to test this driver we will call amazon and search for nintendo

  Scenario: Check if amazon search is working
    Given I open the url "https://www.amazon.de/"
    When I set "ninten" to the inputfield "#twotabsearchtextbox"
    And I press "Enter"
    Then I expect that the result page shows Nintendo products