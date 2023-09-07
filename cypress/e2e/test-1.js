/// <reference types= "cypress" />

describe('this is my rest muhye aldeen', () => {
    it('this is for test thusday lab :)', () => {

        const random = Math.floor(Math.random() * 2);

        const Myurl = ['https://www.almosafer.com/ar', 'https://www.almosafer.com/en'];

        const theURL = Myurl[random];

        cy.visit(theURL);

        if (theURL === 'https://www.almosafer.com/ar') {
            cy.get('.cta__saudi').click()

            cy.get('#uncontrolled-tab-example-tab-hotels').click()

            const arabicrandom = Math.floor(Math.random() * 2) + 1
            const locations = ["جدة", "دبي"]
            const locationstype = locations[arabicrandom - 1]
            cy.get('[data-testid="AutoCompleteInput"]').type(locationstype)

            const randomroom = Math.floor(Math.random() * 2);
            cy.get('[data-testid="HotelSearchBox__ReservationSelect_Select"]').select(randomroom);
            cy.get('[data-testid="HotelSearchBox__SearchButton"]').click()

        } else {
            cy.get('.cta__saudi').click()

            cy.get('#uncontrolled-tab-example-tab-hotels').click()

            const arabicrandom = Math.floor(Math.random() * 3) + 1
            const locations = ["Dubai", "Jeddah", "Riyadh"]
            const locationstype = locations[arabicrandom - 1]
            cy.get('[data-testid="AutoCompleteInput"]').type(locationstype)

            const randomroom = Math.floor(Math.random() * 2);
            cy.get('[data-testid="HotelSearchBox__ReservationSelect_Select"]').select(randomroom);
            cy.get('[data-testid="HotelSearchBox__SearchButton"]').click()

        }
    });
});