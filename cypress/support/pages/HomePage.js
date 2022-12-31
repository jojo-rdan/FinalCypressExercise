const pageLocators = {
    firstSliderImg: '[src="Samsung1.jpg"]',
    secondSliderImg: '[src="nexus1.jpg"]',
    thirdSliderImg: '[src="iphone1.jpg"]',
    leftClickSliderBtn: '.carousel-control-prev',
    rightClickSliderBtn: '.carousel-control-next',
    carouselIndicators: '.carousel-indicators li'

}

class HomePage{

    leftClickArrow() {
        return cy.get(pageLocators.leftClickSliderBtn);
    }
    rightClickArrow() {
        return cy.get(pageLocators.rightClickSliderBtn);
    }
    firstIndicatorOption() {
        return cy.get(pageLocators.carouselIndicators[0]);
    }
    allCarouselIndicators() {
        return cy.get(pageLocators.carouselIndicators);
    }

    firstIndicatorOptionActive() {
        return cy.get(pageLocators.carouselIndicators[0]).invoke('attr', 'class');
    }
    firstSliderImg() {
        return cy.get(pageLocators.firstSliderImg).invoke('attr', 'src');
    }
    secondSliderImg() {
        return cy.get(pageLocators.secondSliderImg).invoke('attr', 'src');
    }
    thirdSliderImg() {
        return cy.get(pageLocators.thirdSliderImg).invoke('attr', 'src');
    }
    clickLeftSliderBtn() {
        return this.leftClickArrow().click();
    }
    clickRightSliderBtn() {
        return this.rightClickArrow().click();
    }
    clickFirstIndicatorOption() {
        return this.firstIndicatorOption().click();
    }
}

export default HomePage;