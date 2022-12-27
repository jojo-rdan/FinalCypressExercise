const pageLocators = {
    firstSliderImg: '[src="Samsung1.jpg"]',
    secondSliderImg: '[src="nexus.jpg"]',
    thirdSliderImg: '[src="iphone1.jpg"]',
    leftClickSliderBtn: '.carousel-control-prev',
    rightClickSliderBtn: '.carousel-control-next'

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
    leftClickSliderBtn() {
        return cy.get(pageLocators.leftClickSliderBtn);
    }
    rightClickSliderBtn() {
        return cy.get(pageLocators.rightClickSliderBtn);
    }
}