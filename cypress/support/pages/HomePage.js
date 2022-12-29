const pageLocators = {
    firstSliderImg: '[src="Samsung1.jpg"]',
    secondSliderImg: '[src="nexus.jpg"]',
    thirdSliderImg: '[src="iphone1.jpg"]',
    leftClickSliderBtn: '.carousel-control-prev',
    rightClickSliderBtn: '.carousel-control-next',
    carouselIndicators: '.carousel-indicators'

}

class HomePage{
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
        return this.leftClickSliderBtn().click();
    }
    clickrightSliderBtn() {
        return this.rightClickSliderBtn().click();
    }
}

export default HomePage;