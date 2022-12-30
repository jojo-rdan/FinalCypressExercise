const pageLocators = {
    firstSliderImg: '[src="Samsung1.jpg"]',
    secondSliderImg: '[src="nexus1.jpg"]',
    thirdSliderImg: '[src="iphone1.jpg"]',
    leftClickSliderBtn: '.carousel-control-prev',
    rightClickSliderBtn: '.carousel-control-next',
    carouselIndicators: '.carousel-indicators'

}

class HomePage{

    leftClickArrow() {
        return cy.get(pageLocators.leftClickSliderBtn);
    }
    rightClickArrow() {
        return cy.get(pageLocators.rightClickSliderBtn);
    }
    firstSliderImg() {
        return cy.get(pageLocators.firstSliderImg);
    }
    secondSliderImg() {
        return cy.get(pageLocators.secondSliderImg);
    }
    thirdSliderImg() {
        return cy.get(pageLocators.thirdSliderImg);
    }
    clickLeftSliderBtn() {
        return this.leftClickArrow().click();
    }
    clickrightSliderBtn() {
        return this.rightClickArrow().click();
    }
}

export default HomePage;