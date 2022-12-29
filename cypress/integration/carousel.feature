Feature: Manage Carousel functionalities

    As a User
    I want to test that the carousel works correctly

    Scenario: Scrolling to both sides
        Given I visit the homepage
        When I click on the next or previous button
        Then I should be able to see the different carousel images