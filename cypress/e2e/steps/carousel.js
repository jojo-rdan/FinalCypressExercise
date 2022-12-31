import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../support/pages/HomePage";

const homepage = new HomePage();

Given('I visit the homepage', () => {
    cy.visit('/');
});

When('I click on the previous button', () => {
    homepage.clickLeftSliderBtn();
});

Then('I should be able to see the image at the left of the carousel', () => {
    homepage.thirdSliderImg()
    .should('eq', 'iphone1.jpg')
});

When('I click on the next button', () => {
    homepage.clickRightSliderBtn();
});

Then('I should be able to see the image at the right of the carousel', () => {
    homepage.secondSliderImg()
    .should('eq', 'nexus1.jpg')
});

When('I click on the first indicator', () => {
    homepage.clickFirstIndicatorOption();
});

Then('I should see the image that correspond the option', () => {
    homepage.firstIndicatorOptionActive()
    .should('eq', 'active');
});

And('The length of the indicators should be 3', () => {
    homepage.allCarouselIndicators()
    .should('have.length', 3)
})