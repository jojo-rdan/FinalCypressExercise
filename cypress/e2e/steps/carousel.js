import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
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
    .should('eq', '[src="iphone1.jpg"]')
});

When('I click on the next button', () => {
    homepage.clickrightSliderBtn();
});

Then('I should be able to see the image at the right of the carousel', () => {
    homepage.secondSliderImg
    .should('eq', '[src="nexus1.jpg"]')
});