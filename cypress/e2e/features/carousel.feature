Feature: Manage Carousel functionalities

    As a User
    I want to test that the carousel works correctly

    Background:
        Given I visit the homepage

    Scenario: Scrolling to the left side
        When I click on the previous button
        Then I should be able to see the image at the left of the carousel

    Scenario: Scrolling to the right side
        When I click on the next button
        Then I should be able to see the image at the right of the carousel
    
    Scenario: Carousel indicators
        When I click on the first indicator
        Then I should see the image that correspond the option
        And The length of the indicators should be 3